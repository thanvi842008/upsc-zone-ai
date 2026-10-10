/**
 * UPSC ZONE AI - Today's Paper Component
 * Handles newspaper stories rendering, subject filtering, "Answer it" modal, and "Clip it" actions
 */

(function() {
  function initNewspaper() {
    renderStories();

    // Listen to subject changes from global selector
    if (window.appState) {
      window.appState.subscribe('subjectChange', () => {
        renderStories();
      });

      window.appState.subscribe('clippingsChange', () => {
        updateClipButtonsState();
      });
    }
  }

  function renderStories() {
    const leadContainer = document.getElementById('newspaper-lead-container');
    const gridContainer = document.getElementById('newspaper-grid-container');
    if (!leadContainer || !gridContainer || !window.UPSC_DATA) return;

    const currentSubject = window.appState ? window.appState.state.selectedSubject : 'all';
    
    // Filter stories based on selected subject
    let filtered = window.UPSC_DATA.stories;
    if (currentSubject !== 'all') {
      filtered = filtered.filter(s => s.subject.toLowerCase() === currentSubject.toLowerCase());
    }

    if (filtered.length === 0) {
      leadContainer.innerHTML = '';
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem;">
          <p style="font-family: var(--font-body); font-style: italic; font-size: 1.1rem;">
            No dispatched articles found under "${currentSubject}". Select "All Subjects" to view the full broadsheet.
          </p>
        </div>
      `;
      return;
    }

    // Lead story is the first in the filtered list
    const leadStory = filtered[0];
    const secondaryStories = filtered.slice(1);

    // 1. Render Lead Story
    const isLeadClipped = window.appState && window.appState.isStoryClipped(leadStory.id);
    leadContainer.innerHTML = `
      <article class="lead-story-card" data-story-id="${leadStory.id}">
        <div class="story-meta-header">
          <span class="badge badge-${leadStory.subject.toLowerCase()}">${leadStory.subject} • ${leadStory.subjectCode}</span>
          <span style="font-family: var(--font-sans); font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">
            ${leadStory.source} • ${leadStory.readingTime}
          </span>
        </div>
        <h2 class="lead-headline" onclick="window.openStoryMCQ('${leadStory.id}')">${leadStory.headline}</h2>
        <p class="lead-subhead">${leadStory.subhead}</p>
        <div class="lead-body-columns">
          <p>${leadStory.body.split('\n\n')[0]}</p>
          <p>${leadStory.body.split('\n\n')[1] || leadStory.summary}</p>
        </div>
        <div class="story-action-strip">
          <div class="story-tags">
            ${leadStory.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
          </div>
          <div class="story-buttons">
            <button class="btn btn-primary btn-sm" onclick="window.openStoryMCQ('${leadStory.id}')">
              Answer it (MCQ) →
            </button>
            <button class="btn btn-secondary btn-sm clip-toggle-btn ${isLeadClipped ? 'btn-clipped' : ''}" 
                    data-clip-id="${leadStory.id}" onclick="window.handleClipToggle('${leadStory.id}')">
              ${isLeadClipped ? 'Clipped ✓' : 'Clip it 📌'}
            </button>
          </div>
        </div>
      </article>
    `;

    // 2. Render Secondary Stories
    gridContainer.innerHTML = secondaryStories.map(story => {
      const isClipped = window.appState && window.appState.isStoryClipped(story.id);
      return `
        <article class="secondary-story-card" data-story-id="${story.id}">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <span class="badge badge-${story.subject.toLowerCase()}">${story.subject}</span>
              <span style="font-family: var(--font-sans); font-size: 0.68rem; color: var(--text-muted);">
                ${story.readingTime}
              </span>
            </div>
            <h3 class="secondary-headline" onclick="window.openStoryMCQ('${story.id}')">${story.headline}</h3>
            <p class="secondary-summary">${story.summary}</p>
          </div>
          <div class="story-action-strip" style="margin-top: 1rem;">
            <div class="story-tags">
              ${story.tags.slice(0, 2).map(t => `<span class="tag-pill">${t}</span>`).join('')}
            </div>
            <div class="story-buttons">
              <button class="btn btn-primary btn-sm" onclick="window.openStoryMCQ('${story.id}')">
                Answer it
              </button>
              <button class="btn btn-secondary btn-sm clip-toggle-btn ${isClipped ? 'btn-clipped' : ''}" 
                      data-clip-id="${story.id}" onclick="window.handleClipToggle('${story.id}')">
                ${isClipped ? 'Clipped ✓' : 'Clip it'}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  function updateClipButtonsState() {
    if (!window.appState) return;
    document.querySelectorAll('.clip-toggle-btn').forEach(btn => {
      const id = btn.getAttribute('data-clip-id');
      const isClipped = window.appState.isStoryClipped(id);
      btn.classList.toggle('btn-clipped', isClipped);
      btn.textContent = isClipped ? 'Clipped ✓' : (btn.textContent.includes('📌') ? 'Clip it 📌' : 'Clip it');
    });
  }

  // Window-level handler for Clip It action
  window.handleClipToggle = function(storyId) {
    if (!window.appState) return;
    const isClipped = window.appState.toggleClipStory(storyId);
    updateClipButtonsState();
    if (window.showToast) {
      window.showToast(isClipped ? "Story saved to Clippings & Notes ledger." : "Story removed from Clippings.", isClipped ? "crimson-toast" : "");
    }
  };

  // Window-level handler to open MCQ Modal
  window.openStoryMCQ = function(storyId) {
    const story = window.UPSC_DATA.stories.find(s => s.id === storyId);
    if (!story || !story.mcq) return;

    const modal = document.getElementById('story-mcq-modal');
    const titleEl = document.getElementById('modal-mcq-title');
    const contentEl = document.getElementById('modal-mcq-content');
    if (!modal || !contentEl) return;

    const mcq = story.mcq;
    titleEl.textContent = `${story.subject} — Editorial Question`;

    contentEl.innerHTML = `
      <div style="font-family: var(--font-sans); font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">
        Based on: <strong>${story.headline}</strong>
      </div>
      <div class="question-body-text" style="font-size: 1.05rem; line-height: 1.6; margin-top: 0.5rem;">
        ${mcq.question}
      </div>
      <div class="options-list" id="modal-options-list">
        ${mcq.options.map((opt, idx) => `
          <button class="option-btn" data-opt-idx="${idx}" onclick="window.submitModalMCQ('${story.id}', ${idx})">
            <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>
      <div id="modal-explanation-container"></div>
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  };

  window.closeStoryMCQ = function() {
    const modal = document.getElementById('story-mcq-modal');
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
  };

  window.submitModalMCQ = function(storyId, selectedIdx) {
    const story = window.UPSC_DATA.stories.find(s => s.id === storyId);
    if (!story || !story.mcq) return;

    const mcq = story.mcq;
    const isCorrect = selectedIdx === mcq.correctAnswer;
    const buttons = document.querySelectorAll('#modal-options-list .option-btn');

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === mcq.correctAnswer) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx) {
        btn.classList.add('incorrect');
      }
    });

    const expContainer = document.getElementById('modal-explanation-container');
    if (expContainer) {
      expContainer.innerHTML = `
        <div class="explanation-box">
          <div class="explanation-title">${isCorrect ? '✓ Correct Answer' : '✕ Incorrect Attempt — Saved to Mistake Notebook'}</div>
          <p>${mcq.explanation}</p>
          <div style="margin-top: 0.75rem; font-family: var(--font-sans); font-size: 0.75rem; color: var(--text-muted);">
            <strong>Syllabus Connection:</strong> ${mcq.syllabusTopic}
          </div>
        </div>
      `;
    }

    // Record attempt in global AppState
    if (window.appState) {
      window.appState.recordAttempt({
        questionId: mcq.id,
        selectedOption: selectedIdx,
        isCorrect: isCorrect,
        questionText: mcq.question,
        options: mcq.options,
        correctAnswerIndex: mcq.correctAnswer,
        explanation: mcq.explanation,
        subject: story.subject,
        topic: story.tags[0] || 'Current Affairs',
        source: 'newspaper'
      });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNewspaper);
  } else {
    initNewspaper();
  }
})();
