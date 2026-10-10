/**
 * UPSC ZONE AI - Mock Test Press Engine
 * Timed 10-question test simulator with palette, countdown, scoring, and review
 */

(function() {
  const TOTAL_TEST_TIME = 15 * 60; // 15 minutes in seconds
  let timerInterval = null;
  let timeRemaining = TOTAL_TEST_TIME;
  let activeQuestions = [];
  let currentIndex = 0;
  let userAnswers = {}; // { questionId: selectedIndex }
  let isSubmitted = false;

  function initMockTest() {
    const startBtn = document.getElementById('start-mock-btn');
    const prevBtn = document.getElementById('mock-prev-btn');
    const nextBtn = document.getElementById('mock-next-btn');
    const submitBtn = document.getElementById('mock-submit-btn');
    const restartBtn = document.getElementById('mock-restart-btn');

    if (startBtn) startBtn.addEventListener('click', startMockTest);
    if (prevBtn) prevBtn.addEventListener('click', () => navigateMock(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => navigateMock(1));
    if (submitBtn) submitBtn.addEventListener('click', () => confirmSubmitMock());
    if (restartBtn) restartBtn.addEventListener('click', resetMockTest);
  }

  function startMockTest() {
    if (!window.UPSC_DATA) return;

    // Pick 10 questions across subjects
    const allPYQs = [...window.UPSC_DATA.pyqQuestions];
    // Shuffle and pick 10
    activeQuestions = allPYQs.sort(() => 0.5 - Math.random()).slice(0, 10);
    currentIndex = 0;
    userAnswers = {};
    isSubmitted = false;
    timeRemaining = TOTAL_TEST_TIME;

    // Show interface
    document.getElementById('mocktest-start-screen').style.display = 'none';
    document.getElementById('mocktest-results-screen').style.display = 'none';
    document.getElementById('mocktest-active-interface').style.display = 'block';

    renderPalette();
    renderQuestion(currentIndex);
    startTimer();
  }

  function startTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay();

    timerInterval = setInterval(() => {
      timeRemaining--;
      updateTimerDisplay();

      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        if (window.showToast) window.showToast("Time expired! Automatically submitting mock test.", "crimson-toast");
        submitMockTest();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const timerEl = document.getElementById('mock-timer-clock');
    if (!timerEl) return;

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    const parent = timerEl.closest('.timer-display');
    if (parent) {
      parent.classList.toggle('warning', timeRemaining < 180); // warning when under 3 mins
    }
  }

  function renderPalette() {
    const palette = document.getElementById('mock-question-palette');
    if (!palette) return;

    palette.innerHTML = activeQuestions.map((q, idx) => {
      const isAnswered = userAnswers[q.id] !== undefined;
      const isCurrent = idx === currentIndex;
      let statusClass = '';
      if (isCurrent) statusClass = 'current';
      else if (isAnswered) statusClass = 'answered';

      return `
        <button class="palette-btn ${statusClass}" onclick="window.jumpToMockQuestion(${idx})">
          ${idx + 1}
        </button>
      `;
    }).join('');
  }

  window.jumpToMockQuestion = function(index) {
    if (isSubmitted || index < 0 || index >= activeQuestions.length) return;
    currentIndex = index;
    renderQuestion(currentIndex);
    renderPalette();
  };

  function renderQuestion(index) {
    const q = activeQuestions[index];
    if (!q) return;

    const qNumEl = document.getElementById('mock-current-qnum');
    const badgeEl = document.getElementById('mock-q-badge');
    const bodyEl = document.getElementById('mock-q-text');
    const optionsEl = document.getElementById('mock-q-options');

    if (qNumEl) qNumEl.textContent = `Question ${index + 1} of ${activeQuestions.length}`;
    if (badgeEl) {
      badgeEl.className = `badge badge-${q.subject.toLowerCase()}`;
      badgeEl.textContent = `${q.subject} • ${q.topic}`;
    }
    if (bodyEl) bodyEl.textContent = q.question;

    const selectedOpt = userAnswers[q.id];

    if (optionsEl) {
      optionsEl.innerHTML = q.options.map((opt, optIdx) => `
        <button class="option-btn ${selectedOpt === optIdx ? 'correct' : ''}" 
                onclick="window.selectMockAnswer('${q.id}', ${optIdx})">
          <span class="option-letter">${String.fromCharCode(65 + optIdx)}</span>
          <span>${opt}</span>
        </button>
      `).join('');
    }

    // Toggle Prev / Next buttons
    const prevBtn = document.getElementById('mock-prev-btn');
    const nextBtn = document.getElementById('mock-next-btn');
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === activeQuestions.length - 1;
  }

  window.selectMockAnswer = function(questionId, optionIdx) {
    if (isSubmitted) return;
    userAnswers[questionId] = optionIdx;
    renderQuestion(currentIndex);
    renderPalette();
  };

  function navigateMock(direction) {
    const nextIdx = currentIndex + direction;
    if (nextIdx >= 0 && nextIdx < activeQuestions.length) {
      currentIndex = nextIdx;
      renderQuestion(currentIndex);
      renderPalette();
    }
  }

  function confirmSubmitMock() {
    if (isSubmitted) return;
    const answeredCount = Object.keys(userAnswers).length;
    const unansweredCount = activeQuestions.length - answeredCount;
    
    const confirmMsg = unansweredCount > 0 
      ? `You have answered ${answeredCount} of 10 questions (${unansweredCount} unanswered). Do you want to submit?`
      : `Ready to submit your 10-question Mock Test?`;

    if (confirm(confirmMsg)) {
      submitMockTest();
    }
  }

  function submitMockTest() {
    if (isSubmitted) return;
    isSubmitted = true;
    clearInterval(timerInterval);

    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    activeQuestions.forEach(q => {
      const selected = userAnswers[q.id];
      if (selected === undefined) {
        unattemptedCount++;
      } else if (selected === q.correctAnswer) {
        correctCount++;
        // Record attempt in AppState
        if (window.appState) {
          window.appState.recordAttempt({
            questionId: q.id,
            selectedOption: selected,
            isCorrect: true,
            questionText: q.question,
            options: q.options,
            correctAnswerIndex: q.correctAnswer,
            explanation: q.explanation,
            subject: q.subject,
            topic: q.topic,
            source: 'mocktest'
          });
        }
      } else {
        incorrectCount++;
        // Record mistake in AppState
        if (window.appState) {
          window.appState.recordAttempt({
            questionId: q.id,
            selectedOption: selected,
            isCorrect: false,
            questionText: q.question,
            options: q.options,
            correctAnswerIndex: q.correctAnswer,
            explanation: q.explanation,
            subject: q.subject,
            topic: q.topic,
            source: 'mocktest'
          });
        }
      }
    });

    // Score calculation (+2 for correct, -0.66 for incorrect)
    const rawScore = (correctCount * 2) - (incorrectCount * 0.66);
    const finalScore = Math.max(0, parseFloat(rawScore.toFixed(2)));
    const timeTakenSec = TOTAL_TEST_TIME - timeRemaining;
    const timeTakenMin = Math.floor(timeTakenSec / 60);
    const timeTakenRemSec = timeTakenSec % 60;

    // Display Results Screen
    document.getElementById('mocktest-active-interface').style.display = 'none';
    const resultsScreen = document.getElementById('mocktest-results-screen');
    resultsScreen.style.display = 'block';

    const scoreNumberEl = document.getElementById('results-score-number');
    const accuracyEl = document.getElementById('results-accuracy-val');
    const correctEl = document.getElementById('results-correct-val');
    const incorrectEl = document.getElementById('results-incorrect-val');
    const timeEl = document.getElementById('results-time-val');
    const reviewContainer = document.getElementById('results-review-container');

    if (scoreNumberEl) scoreNumberEl.textContent = `${finalScore} / 20.00`;
    if (accuracyEl) {
      const attempted = correctCount + incorrectCount;
      accuracyEl.textContent = attempted > 0 ? `${Math.round((correctCount / attempted) * 100)}%` : '0%';
    }
    if (correctEl) correctEl.textContent = correctCount;
    if (incorrectEl) incorrectEl.textContent = incorrectCount;
    if (timeEl) timeEl.textContent = `${timeTakenMin}m ${timeTakenRemSec}s`;

    // Detailed Review List
    if (reviewContainer) {
      reviewContainer.innerHTML = activeQuestions.map((q, idx) => {
        const selected = userAnswers[q.id];
        const isRight = selected === q.correctAnswer;
        const isSkipped = selected === undefined;

        let statusText = isRight ? '✓ Correct (+2.00)' : (isSkipped ? '— Skipped (0.00)' : '✕ Incorrect (-0.66)');
        let statusColor = isRight ? '#137333' : (isSkipped ? 'var(--text-muted)' : 'var(--accent-crimson)');

        return `
          <div class="question-card" style="margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <span class="badge badge-${q.subject.toLowerCase()}">Q${idx + 1} • ${q.subject}</span>
              <strong style="color: ${statusColor}; font-family: var(--font-sans); font-size: 0.82rem;">${statusText}</strong>
            </div>
            <div class="question-body-text" style="font-size: 1rem;">${q.question}</div>
            <div class="options-list">
              ${q.options.map((opt, optIdx) => {
                let cl = '';
                if (optIdx === q.correctAnswer) cl = 'correct';
                else if (optIdx === selected) cl = 'incorrect';
                return `
                  <div class="option-btn ${cl}" style="pointer-events: none;">
                    <span class="option-letter">${String.fromCharCode(65 + optIdx)}</span>
                    <span>${opt}</span>
                  </div>
                `;
              }).join('')}
            </div>
            <div class="explanation-box">
              <div class="explanation-title">Explanation:</div>
              <p>${q.explanation}</p>
            </div>
          </div>
        `;
      }).join('');
    }

    if (window.showToast) {
      window.showToast("Mock test submitted! Results and mistake analysis ready.", "crimson-toast");
    }
  }

  function resetMockTest() {
    clearInterval(timerInterval);
    document.getElementById('mocktest-results-screen').style.display = 'none';
    document.getElementById('mocktest-start-screen').style.display = 'flex';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMockTest);
  } else {
    initMockTest();
  }
})();
