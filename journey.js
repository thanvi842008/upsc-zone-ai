/**
 * UPSC ZONE AI - UPSC Journey Timeline Component
 * Scroll-driven milestone tracking & Prelims sample countdown timer
 */

(function() {
  function initJourney() {
    initCountdown();
    initScrollSpy();
  }

  // Sample Exam Date Countdown Ticker
  function initCountdown() {
    const countdownEl = document.getElementById('prelims-countdown-ticker');
    if (!countdownEl) return;

    // Simulated Target Date: May 24, 2026 09:30:00 IST
    const targetDate = new Date('2026-05-24T09:30:00+05:30').getTime();

    function updateTicker() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        countdownEl.textContent = "EXAM COMMENCED (SAMPLE)";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownEl.textContent = `${days}d : ${String(hours).padStart(2, '0')}h : ${String(minutes).padStart(2, '0')}m : ${String(seconds).padStart(2, '0')}s`;
    }

    updateTicker();
    setInterval(updateTicker, 1000);
  }

  // Scrollspy for Journey Stages & Rail Progress
  function initScrollSpy() {
    const stageItems = document.querySelectorAll('.journey-stage-item');
    const railProgress = document.getElementById('journey-rail-progress-bar');
    if (!stageItems.length) return;

    function onScroll() {
      const scrollPos = window.scrollY + (window.innerHeight * 0.6);
      let activeIdx = 0;

      stageItems.forEach((item, idx) => {
        const top = item.offsetTop;
        if (scrollPos >= top) {
          activeIdx = idx;
        }
      });

      stageItems.forEach((item, idx) => {
        item.classList.toggle('active', idx <= activeIdx);
      });

      if (railProgress) {
        const percentage = ((activeIdx) / (stageItems.length - 1)) * 100;
        railProgress.style.height = `${percentage}%`;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initJourney);
  } else {
    initJourney();
  }
})();
