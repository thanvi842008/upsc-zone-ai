/**
 * UPSC ZONE AI - PYQ Archive Component
 * Interactive question bank with 20 demo questions, instant feedback, and mistake recording
 */

(function() {
  let searchKeyword = '';

  function initPYQ() {
    renderPYQQuestions();

    const searchInput = document.getElementById('pyq-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchKeyword = e.target.value.toLowerCase().trim();
        renderPYQQuestions();
      });
    }

    if (window.appState) {
      window.appState.subscribe('subjectChange', () => {
        renderPYQQuestions();
      });
    }
  }

  function renderPYQQuestions() {
    const grid = document.getElementById('pyq-questions-grid');
    if (!grid || !window.UPSC_DATA) return;

    const currentSubject = window.appState ? window.appState.state.selectedSubject : 'all';
    let questions = window.UPSC_DATA.pyqQuestions;

    // Filter by subject
    if (currentSubject !== 'all') {
      questions = questions.filter(q => q.subject.toLowerCase() === currentSubject.toLowerCase());
    }

    // Filter by search keyword
    if (searchKeyword) {
      questions = questions.filter(q => 
        q.question.toLowerCase().includes(searchKeyword) ||
        q.topic.toLowerCase().includes(searchKeyword) ||
        q.subject.toLowerCase().includes(searchKeyword)
      );
    }

    if (questions.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem;">
          <p style="font-family: var(--font-body); font-style: italic; font-size: 1.1rem; color: var(--text-secondary);">
            No demo previous-year questions match your query under "${currentSubject}". Try resetting search filters.
          </p>
        </div>
      `;
      return;
    }

    grid.innerHTML = questions.map((q) => {
      const attempts = window.appState ? window.appState.state.attemptedQuestions : {};
      const previousAttempt = attempts[q.id];
      const isAttempted = !!previousAttempt;

      return `
        <div class="question-card" id="card-${q.id}">
          <div class="question-card-header">
            <div class="question-meta-group">
              <span class="badge badge-${q.subject.toLowerCase()}">${q.subject}</span>
              <span style="font-family: var(--font-sans); font-size: 0.72rem; color: var(--text-muted);">
                ${q.year}
              </span>
            </div>
            <span style="font-family: var(--font-sans); font-size: 0.68rem; font-weight: 700; text-transform: uppercase; color: var(--accent-crimson);">
              ${q.difficulty}
            </span>
          </div>
          <div style="font-family: var(--font-sans); font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem;">
            Topic: <strong>${q.topic}</strong>
          </div>
          <div class="question-body-text">${q.question}</div>
          <div class="options-list">
            ${q.options.map((opt, idx) => {
              let optClass = '';
              if (isAttempted) {
                if (idx === q.correctAnswer) optClass = 'correct';
                else if (previousAttempt.selectedOption === idx && !previousAttempt.isCorrect) optClass = 'incorrect';
              }
              return `
                <button class="option-btn ${optClass}" 
                        ${isAttempted ? 'disabled' : ''} 
                        onclick="window.handlePYQOptionClick('${q.id}', ${idx})">
                  <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
                  <span>${opt}</span>
                </button>
              `;
            }).join('')}
          </div>
          ${isAttempted ? `
            <div class="explanation-box">
              <div class="explanation-title">${previousAttempt.isCorrect ? '✓ Correct Answer' : '✕ Incorrect Attempt — Saved to Mistake Notebook'}</div>
              <p>${q.explanation}</p>
            </div>
          ` : `<div id="exp-${q.id}"></div>`}
        </div>
      `;
    }).join('');
  }

  // Option selection handler
  window.handlePYQOptionClick = function(questionId, selectedIdx) {
    const q = window.UPSC_DATA.pyqQuestions.find(item => item.id === questionId);
    if (!q) return;

    const card = document.getElementById(`card-${questionId}`);
    if (!card) return;

    const buttons = card.querySelectorAll('.option-btn');
    const isCorrect = selectedIdx === q.correctAnswer;

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correctAnswer) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx) {
        btn.classList.add('incorrect');
      }
    });

    const expDiv = document.getElementById(`exp-${questionId}`);
    if (expDiv) {
      expDiv.innerHTML = `
        <div class="explanation-box">
          <div class="explanation-title">${isCorrect ? '✓ Correct Answer' : '✕ Incorrect Attempt — Saved to Mistake Notebook'}</div>
          <p>${q.explanation}</p>
        </div>
      `;
    }

    if (window.appState) {
      window.appState.recordAttempt({
        questionId: q.id,
        selectedOption: selectedIdx,
        isCorrect: isCorrect,
        questionText: q.question,
        options: q.options,
        correctAnswerIndex: q.correctAnswer,
        explanation: q.explanation,
        subject: q.subject,
        topic: q.topic,
        source: 'pyq'
      });
    }

    if (window.showToast) {
      if (isCorrect) {
        window.showToast("Correct! Answer recorded in Progress Ledger.", "");
      } else {
        window.showToast("Incorrect attempt logged to Mistake Notebook.", "crimson-toast");
      }
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPYQ);
  } else {
    initPYQ();
  }
})();
