/**
 * UPSC ZONE AI - State Management & LocalStorage Persistence
 * Safe handling with try/catch for robust operation across all browsers.
 */

class AppState {
  constructor() {
    this.listeners = {};
    
    // Default State
    this.state = {
      theme: this._loadTheme(), // default: 'normal'
      selectedSubject: this._loadJSON('upsc_zone_selected_subject', 'all'),   // 'all', 'Polity', 'Economy', 'Environment', 'History'
      activeCD: this._loadJSON('upsc_zone_active_cd', 0),             // 0: PYQ, 1: Clippings, 2: Progress, 3: Mock Test
      clippedStories: this._loadJSON('upsc_zone_clippings', []),
      attemptedQuestions: this._loadJSON('upsc_zone_attempts', {}),
      mistakes: this._loadJSON('upsc_zone_mistakes', []),
      answeredStoryIds: this._loadJSON('upsc_zone_answered_stories', [])
    };
  }

  // Safe localStorage loader for Theme (Must strictly default to 'normal')
  _loadTheme() {
    try {
      const saved = localStorage.getItem('upsc_zone_theme');
      if (saved === 'midnight') return 'midnight';
      return 'normal';
    } catch (e) {
      console.warn('LocalStorage unavailable for theme:', e);
      return 'normal';
    }
  }

  // Safe generic JSON loader
  _loadJSON(key, defaultVal) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultVal;
    } catch (e) {
      console.warn(`LocalStorage failed loading ${key}:`, e);
      return defaultVal;
    }
  }

  // Safe generic JSON saver
  _saveJSON(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn(`LocalStorage failed saving ${key}:`, e);
    }
  }

  // Subscribe to changes
  subscribe(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  // Emit changes to subscribers
  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(cb => cb(data, this.state));
    }
  }

  // Theme Toggle
  setTheme(theme) {
    const validTheme = theme === 'midnight' ? 'midnight' : 'normal';
    this.state.theme = validTheme;
    try {
      localStorage.setItem('upsc_zone_theme', validTheme);
    } catch (e) {
      console.warn('Could not save theme:', e);
    }
    this.emit('themeChange', validTheme);
  }

  toggleTheme() {
    const next = this.state.theme === 'normal' ? 'midnight' : 'normal';
    this.setTheme(next);
    return next;
  }

  // Subject Filter
  setSubject(subject) {
    this.state.selectedSubject = subject || 'all';
    this._saveJSON('upsc_zone_selected_subject', this.state.selectedSubject);
    this.emit('subjectChange', this.state.selectedSubject);
  }

  // Active CD Selector
  setActiveCD(cdIndex) {
    this.state.activeCD = cdIndex;
    this._saveJSON('upsc_zone_active_cd', cdIndex);
    this.emit('cdChange', cdIndex);
  }

  // Clippings Management
  isStoryClipped(storyId) {
    return this.state.clippedStories.includes(storyId);
  }

  toggleClipStory(storyId) {
    const idx = this.state.clippedStories.indexOf(storyId);
    let isClipped = false;
    if (idx >= 0) {
      this.state.clippedStories.splice(idx, 1);
      isClipped = false;
    } else {
      this.state.clippedStories.push(storyId);
      isClipped = true;
    }
    this._saveJSON('upsc_zone_clippings', this.state.clippedStories);
    this.emit('clippingsChange', { storyId, isClipped, all: this.state.clippedStories });
    return isClipped;
  }

  removeClip(storyId) {
    this.state.clippedStories = this.state.clippedStories.filter(id => id !== storyId);
    this._saveJSON('upsc_zone_clippings', this.state.clippedStories);
    this.emit('clippingsChange', { storyId, isClipped: false, all: this.state.clippedStories });
  }

  // Recording Attempt & Mistakes
  recordAttempt(questionData) {
    const {
      questionId,
      selectedOption,
      isCorrect,
      questionText,
      options,
      correctAnswerIndex,
      explanation,
      subject,
      topic,
      source
    } = questionData;

    // Save attempt record
    this.state.attemptedQuestions[questionId] = {
      selectedOption,
      isCorrect,
      subject,
      timestamp: Date.now(),
      source: source || 'practice'
    };
    this._saveJSON('upsc_zone_attempts', this.state.attemptedQuestions);

    // If source was story, track story as answered
    if (source === 'newspaper' && !this.state.answeredStoryIds.includes(questionId)) {
      this.state.answeredStoryIds.push(questionId);
      this._saveJSON('upsc_zone_answered_stories', this.state.answeredStoryIds);
    }

    // If incorrect, add to Mistake Notebook automatically
    if (!isCorrect) {
      const existingIdx = this.state.mistakes.findIndex(m => m.id === questionId);
      const mistakeObj = {
        id: questionId,
        questionText: questionText || '',
        userAnswer: options && options[selectedOption] ? options[selectedOption] : `Option ${selectedOption + 1}`,
        correctAnswer: options && options[correctAnswerIndex] ? options[correctAnswerIndex] : `Option ${correctAnswerIndex + 1}`,
        explanation: explanation || '',
        subject: subject || 'General',
        topic: topic || 'Current Affairs',
        timestamp: Date.now()
      };

      if (existingIdx >= 0) {
        this.state.mistakes[existingIdx] = mistakeObj;
      } else {
        this.state.mistakes.unshift(mistakeObj);
      }
      this._saveJSON('upsc_zone_mistakes', this.state.mistakes);
      this.emit('mistakesChange', this.state.mistakes);
    }

    this.emit('attemptRecorded', { questionId, isCorrect, subject });
    this.emit('progressChange', this.getProgressStats());
  }

  // Mark mistake as resolved ("Got it" action)
  resolveMistake(mistakeId) {
    this.state.mistakes = this.state.mistakes.filter(m => m.id !== mistakeId);
    this._saveJSON('upsc_zone_mistakes', this.state.mistakes);
    this.emit('mistakesChange', this.state.mistakes);
    this.emit('progressChange', this.getProgressStats());
  }

  // Progress Ledger Calculations
  getProgressStats() {
    const attempts = Object.values(this.state.attemptedQuestions);
    const totalAttempted = attempts.length;
    const correctCount = attempts.filter(a => a.isCorrect).length;
    const incorrectCount = totalAttempted - correctCount;
    const accuracy = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0;
    const storiesAnswered = this.state.answeredStoryIds.length;
    const clippingsCount = this.state.clippedStories.length;
    const mistakesCount = this.state.mistakes.length;

    // Subject breakdown
    const subjects = ['Polity', 'Economy', 'Environment', 'History'];
    const subjectStats = {};
    subjects.forEach(sub => {
      const subAttempts = attempts.filter(a => a.subject === sub);
      const subCorrect = subAttempts.filter(a => a.isCorrect).length;
      subjectStats[sub] = {
        attempted: subAttempts.length,
        correct: subCorrect,
        accuracy: subAttempts.length > 0 ? Math.round((subCorrect / subAttempts.length) * 100) : 0
      };
    });

    return {
      totalAttempted,
      correctCount,
      incorrectCount,
      accuracy,
      storiesAnswered,
      clippingsCount,
      mistakesCount,
      subjectStats
    };
  }
}

// Global instance
window.appState = new AppState();
