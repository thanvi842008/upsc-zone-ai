/**
 * UPSC ZONE AI - Prelims Examination Countdown
 * Configurable target date & automatic daily recalculation
 */

(function() {
  // ==========================================================================
  // CONFIGURABLE UPSC PRELIMS TARGET DATE
  // Update this date whenever UPSC releases its official annual calendar.
  // ==========================================================================
  const UPSC_PRELIMS_CONFIG = {
    // Configurable Target Date: Format YYYY-MM-DD
    // Provisional Target: UPSC CSE Prelims 2027 (standard 4th Sunday of May: May 23, 2027)
    targetDate: '2027-05-23',
    examLabel: 'UPSC Civil Services Preliminary Examination 2027 (Provisional Calendar)',
    notice: 'Target date based on standard UPSC annual cycle (fourth Sunday of May).'
  };

  /**
   * Calculate calendar days remaining until target examination date
   * @param {string} targetDateStr - Date string in YYYY-MM-DD format
   * @returns {object} Status, days, display text, and aria description
   */
  function calculateCountdown(targetDateStr) {
    const now = new Date();
    const parts = targetDateStr.split('-');
    const targetYear = parseInt(parts[0], 10);
    const targetMonth = parseInt(parts[1], 10) - 1; // 0-indexed
    const targetDay = parseInt(parts[2], 10);

    // Set to local calendar date midnights to compute exact full calendar days
    const nowDateOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const targetDateOnly = new Date(targetYear, targetMonth, targetDay);

    const diffMs = targetDateOnly.getTime() - nowDateOnly.getTime();
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays > 0) {
      return {
        status: 'upcoming',
        days: diffDays,
        displayText: `PRELIMS · <strong>${diffDays}</strong> DAYS LEFT`,
        titleText: `${UPSC_PRELIMS_CONFIG.examLabel} • Target: ${targetDateStr} (${diffDays} days left)`,
        ariaLabel: `UPSC Prelims: ${diffDays} days remaining until examination`
      };
    } else if (diffDays === 0) {
      return {
        status: 'today',
        days: 0,
        displayText: `PRELIMS · <strong>EXAM TODAY</strong>`,
        titleText: `${UPSC_PRELIMS_CONFIG.examLabel} • The examination is held today.`,
        ariaLabel: `UPSC Prelims: Examination is today`
      };
    } else {
      return {
        status: 'concluded',
        days: 0,
        displayText: `PRELIMS · <strong>CONCLUDED</strong>`,
        titleText: `${UPSC_PRELIMS_CONFIG.examLabel} • Examination concluded. Awaiting next session announcement.`,
        ariaLabel: `UPSC Prelims: Examination cycle concluded`
      };
    }
  }

  function renderCountdown() {
    const result = calculateCountdown(UPSC_PRELIMS_CONFIG.targetDate);
    const chips = document.querySelectorAll('.prelims-countdown-chip');

    chips.forEach(chip => {
      chip.setAttribute('title', result.titleText);
      chip.setAttribute('aria-label', result.ariaLabel);

      const textEl = chip.querySelector('.countdown-text');
      if (textEl) {
        textEl.innerHTML = result.displayText;
      }
    });
  }

  function initCountdown() {
    renderCountdown();

    // Attach click feedback for aspirant awareness
    const chips = document.querySelectorAll('.prelims-countdown-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const result = calculateCountdown(UPSC_PRELIMS_CONFIG.targetDate);
        if (window.showToast) {
          if (result.status === 'upcoming') {
            window.showToast(
              `Prelims Countdown: ${result.days} days remaining until ${UPSC_PRELIMS_CONFIG.examLabel}.`
            );
          } else if (result.status === 'today') {
            window.showToast(
              `UPSC Prelims Examination Day: Best wishes to all aspirants!`
            );
          } else {
            window.showToast(
              `UPSC Prelims session concluded. Preparing next academic cycle.`
            );
          }
        }
      });
    });

    // Recalculate periodically (every minute) in case of midnight crossover
    setInterval(renderCountdown, 60000);
  }

  // Export config to window for easy demo adjustment or inspection
  window.UPSC_PRELIMS_CONFIG = UPSC_PRELIMS_CONFIG;
  window.updatePrelimsCountdown = renderCountdown;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCountdown);
  } else {
    initCountdown();
  }
})();
