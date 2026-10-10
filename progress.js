/**
 * UPSC ZONE AI - Notebooks & Progress Ledger Component
 * Manages Clippings, Mistake Notebook, Revision Notes, and Telemetry Dashboard
 */

(function() {
  function initProgressAndNotebooks() {
    initTabs();
    renderNotebookContent();
    renderLedger();

    if (window.appState) {
      window.appState.subscribe('clippingsChange', () => {
        renderNotebookContent();
        renderLedger();
      });

      window.appState.subscribe('mistakesChange', () => {
        renderNotebookContent();
        renderLedger();
      });

      window.appState.subscribe('progressChange', () => {
        renderLedger();
      });
    }
  }

  // Notebook Tab Switching
  function initTabs() {
    const tabBtns = document.querySelectorAll('.notebook-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.notebook-tab-content').forEach(content => {
          content.classList.toggle('active', content.id === `tab-${targetTab}`);
        });
      });
    });
  }

  // Render Notebooks (Clippings, Revision Notes, Mistake Notebook)
  function renderNotebookContent() {
    renderClippingsTab();
    renderRevisionNotesTab();
    renderMistakesTab();
  }

  // 1. Saved Clippings Tab
  function renderClippingsTab() {
    const container = document.getElementById('clippings-list-container');
    if (!container || !window.appState || !window.UPSC_DATA) return;

    const clippedIds = window.appState.state.clippedStories;
    const stories = window.UPSC_DATA.stories.filter(s => clippedIds.includes(s.id));

    if (stories.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; border: 1.5px dashed var(--border-color); background: var(--bg-card);">
          <p style="font-family: var(--font-body); font-style: italic; font-size: 1.05rem; color: var(--text-secondary);">
            No articles clipped yet. Click "Clip it" on any story in Today's Paper to preserve it here for revision.
          </p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem;">
        ${stories.map(s => `
          <div class="question-card" style="margin-bottom: 0;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span class="badge badge-${s.subject.toLowerCase()}">${s.subject}</span>
                <span style="font-family: var(--font-sans); font-size: 0.7rem; color: var(--text-muted);">${s.date}</span>
              </div>
              <h4 style="font-family: var(--font-display); font-size: 1.25rem; line-height: 1.2; margin-bottom: 0.5rem;">
                ${s.headline}
              </h4>
              <p style="font-family: var(--font-body); font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem;">
                ${s.summary}
              </p>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 0.75rem;">
              <button class="btn btn-primary btn-sm" onclick="window.openStoryMCQ('${s.id}')">Answer MCQ</button>
              <button class="btn btn-secondary btn-sm" onclick="window.appState.removeClip('${s.id}')">Remove ✕</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // 2. Revision Notes Tab
  function renderRevisionNotesTab() {
    const container = document.getElementById('revision-notes-container');
    if (!container || !window.UPSC_DATA) return;

    container.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem;">
        ${window.UPSC_DATA.revisionNotes.map(n => `
          <div class="question-card" style="margin-bottom: 0;">
            <div style="margin-bottom: 0.8rem;">
              <span class="badge badge-${n.subject.toLowerCase()}">${n.subject}</span>
              <h4 style="font-family: var(--font-display); font-size: 1.3rem; margin-top: 0.5rem;">${n.title}</h4>
            </div>
            <ul style="font-family: var(--font-body); font-size: 0.95rem; line-height: 1.6; padding-left: 1.2rem; color: var(--text-secondary);">
              ${n.items.map(item => `<li style="margin-bottom: 0.5rem;">${item}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    `;
  }

  // 3. Mistake Notebook Tab
  function renderMistakesTab() {
    const container = document.getElementById('mistakes-list-container');
    if (!container || !window.appState) return;

    const mistakes = window.appState.state.mistakes;

    if (mistakes.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; border: 1.5px dashed var(--border-color); background: var(--bg-card);">
          <p style="font-family: var(--font-body); font-style: italic; font-size: 1.05rem; color: var(--text-secondary);">
            The Mistake Notebook is empty. Any incorrect question attempts from Today's Paper, the PYQ Archive, or Mock Tests will be automatically captured here.
          </p>
        </div>
      `;
      return;
    }

    container.innerHTML = mistakes.map(m => `
      <div class="mistake-card">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="badge badge-${(m.subject || 'polity').toLowerCase()}">${m.subject || 'General'} • ${m.topic || 'UPSC'}</span>
          <span style="font-family: var(--font-sans); font-size: 0.72rem; color: var(--accent-crimson); font-weight: 700; text-transform: uppercase;">
            Recorded Trap
          </span>
        </div>
        <div class="question-body-text" style="font-size: 1rem; margin-bottom: 0.5rem;">
          ${m.questionText}
        </div>
        <div class="mistake-answers-row">
          <div>
            <div class="answer-label answer-your">Your Selected Answer:</div>
            <div>${m.userAnswer}</div>
          </div>
          <div>
            <div class="answer-label answer-correct">Correct Examiner Answer:</div>
            <div>${m.correctAnswer}</div>
          </div>
        </div>
        <div class="explanation-box" style="margin-top: 0;">
          <div class="explanation-title">Examiner Analysis & Why You Missed It:</div>
          <p>${m.explanation}</p>
        </div>
        <div class="mistake-action-row">
          <button class="btn btn-secondary btn-sm" onclick="window.appState.resolveMistake('${m.id}')">
            Got it — Mark as Understood ✓
          </button>
        </div>
      </div>
    `).join('');
  }

  // RENDER PROGRESS LEDGER
  function renderLedger() {
    if (!window.appState) return;
    const stats = window.appState.getProgressStats();

    const emptyBanner = document.getElementById('ledger-empty-banner');
    const dashboardGrid = document.getElementById('ledger-dashboard-grid');
    if (!emptyBanner || !dashboardGrid) return;

    if (stats.totalAttempted === 0) {
      emptyBanner.style.display = 'block';
      dashboardGrid.style.display = 'none';
      return;
    }

    emptyBanner.style.display = 'none';
    dashboardGrid.style.display = 'grid';

    // Update Circular Ring
    const circle = document.getElementById('progress-ring-circle');
    const percentEl = document.getElementById('progress-percent-number');
    if (circle && percentEl) {
      const radius = 68;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (stats.accuracy / 100) * circumference;
      circle.style.strokeDasharray = `${circumference}`;
      circle.style.strokeDashoffset = `${offset}`;
      percentEl.textContent = `${stats.accuracy}%`;
    }

    // Update Counters
    const totalEl = document.getElementById('stat-total-attempted');
    const correctEl = document.getElementById('stat-correct-count');
    const incorrectEl = document.getElementById('stat-incorrect-count');
    const storiesEl = document.getElementById('stat-stories-answered');

    if (totalEl) totalEl.textContent = stats.totalAttempted;
    if (correctEl) correctEl.textContent = stats.correctCount;
    if (incorrectEl) incorrectEl.textContent = stats.incorrectCount;
    if (storiesEl) storiesEl.textContent = stats.storiesAnswered;

    // Update Subject Bars
    const subjectsContainer = document.getElementById('ledger-subject-bars');
    if (subjectsContainer) {
      subjectsContainer.innerHTML = Object.entries(stats.subjectStats).map(([subj, subStat]) => `
        <div class="subject-bar-row">
          <div class="subject-bar-info">
            <span>${subj}</span>
            <span>${subStat.correct} / ${subStat.attempted} (${subStat.accuracy}%)</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${subStat.accuracy}%;"></div>
          </div>
        </div>
      `).join('');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProgressAndNotebooks);
  } else {
    initProgressAndNotebooks();
  }
})();
