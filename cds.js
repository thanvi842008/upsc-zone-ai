/**
 * UPSC ZONE AI - Signature Interactive CDs
 * Direct Category Selection, Smooth Navigation & Dual-Theme Support
 */

(function() {
  const cdCategories = [
    {
      id: "pyq",
      title: "PYQ Archive",
      subtitle: "Categorized Previous-Year Exam Simulation",
      desc: "Deconstruct UPSC Prelims patterns by subject, year, and micro-topic. Test conceptual clarity against authentic statement traps with comprehensive syllabus linkages.",
      lightImg: "assets/cd-pyq-light.png",
      darkImg: "assets/cd-pyq-dark.png",
      targetSection: "#pyq-section",
      btnText: "Explore PYQ Archive",
      stat: "20 Curated Questions • 4 Core Subjects"
    },
    {
      id: "clippings",
      title: "Clippings & Notes",
      subtitle: "Tactile Current Affairs Repository & Mistake Notebook",
      desc: "Save high-yield editorial stories from Today's Paper, review static constitutional linkages, and track flawed conceptual attempts in your automated Mistake Notebook.",
      lightImg: "assets/cd-notes-light.png",
      darkImg: "assets/cd-notes-dark.png",
      targetSection: "#notebooks-section",
      btnText: "Open Clippings & Notebook",
      stat: "Dynamic Storage • Local Persistence"
    },
    {
      id: "ledger",
      title: "Progress Ledger",
      subtitle: "Real-Time Aspirant Performance Telemetry",
      desc: "Inspect precision metrics derived from actual practice sessions. Track question attempts, accuracy ratios, and subject-wise strengths without artificial vanity numbers.",
      lightImg: "assets/cd-ledger-light.png",
      darkImg: "assets/cd-ledger-dark.png",
      targetSection: "#ledger-section",
      btnText: "Inspect Progress Ledger",
      stat: "Live Accuracy Ring • Subject Breakdown"
    },
    {
      id: "mocktest",
      title: "Mock Test Press",
      subtitle: "10-Question Timed Prelims Pressure Simulator",
      desc: "Test exam temperament under a strict 15-minute countdown clock. Experience UPSC negative marking (+2.00 / -0.66) with instant post-test analysis and mistake capture.",
      lightImg: "assets/cd-mock-light.png",
      darkImg: "assets/cd-mock-dark.png",
      targetSection: "#mocktest-section",
      btnText: "Enter Mock Test Press",
      stat: "15-Minute Countdown • Standard UPSC Marking"
    }
  ];

  let currentActiveIndex = 0;

  function initCDs() {
    const discCards = document.querySelectorAll('.cd-disc-card');
    if (!discCards.length) return;

    // Direct Click & Keyboard Activation
    discCards.forEach((card, index) => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        activateCD(index, true);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activateCD(index, true);
        }
      });
    });

    // Listen to Theme Changes for Artwork Swap
    if (window.appState) {
      window.appState.subscribe('themeChange', (theme) => {
        updateCDArtworkTheme(theme);
      });
      // Initial theme setup
      updateCDArtworkTheme(window.appState.state.theme);
    }

    // Initial drawer render preserving active state (without auto-scrolling)
    const initialIndex = window.appState ? (window.appState.state.activeCD || 0) : 0;
    activateCD(initialIndex, false);
  }

  function activateCD(index, shouldScroll = false) {
    currentActiveIndex = index;
    const discCards = document.querySelectorAll('.cd-disc-card');
    
    discCards.forEach((card, idx) => {
      card.classList.toggle('active', idx === index);
      card.setAttribute('aria-selected', idx === index ? 'true' : 'false');
    });

    renderDrawer(index);

    if (window.appState) {
      window.appState.setActiveCD(index);
    }

    // Direct Smooth Scroll to the corresponding category panel
    if (shouldScroll && cdCategories[index]) {
      const targetEl = document.querySelector(cdCategories[index].targetSection);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // When clicking Clippings & Notes, switch to clippings tab
        if (index === 1) {
          const clipTabBtn = document.querySelector('.notebook-tab-btn[data-tab="clippings"]');
          if (clipTabBtn) clipTabBtn.click();
        }
      }
    }
  }

  function renderDrawer(index) {
    const data = cdCategories[index];
    const drawer = document.getElementById('cd-active-drawer');
    if (!drawer || !data) return;

    const theme = window.appState ? window.appState.state.theme : 'normal';
    const imgSrc = theme === 'midnight' ? data.darkImg : data.lightImg;

    drawer.innerHTML = `
      <div class="drawer-disc-preview">
        <img src="${imgSrc}" alt="${data.title} Disc Preview" class="cd-drawer-thumb">
      </div>
      <div class="drawer-info">
        <span class="drawer-category-badge">Category 0${index + 1} • Signature Interaction</span>
        <h3 class="drawer-title">${data.title}</h3>
        <p class="drawer-desc">${data.desc}</p>
        <div class="drawer-stats">
          <span><strong>Features:</strong> ${data.stat}</span>
        </div>
      </div>
      <div class="drawer-action">
        <a href="${data.targetSection}" class="btn btn-primary">${data.btnText} →</a>
      </div>
    `;
  }

  function updateCDArtworkTheme(theme) {
    const discCards = document.querySelectorAll('.cd-disc-card');
    discCards.forEach((card, idx) => {
      const img = card.querySelector('.cd-artwork-img');
      if (img && cdCategories[idx]) {
        img.src = theme === 'midnight' ? cdCategories[idx].darkImg : cdCategories[idx].lightImg;
      }
    });
    renderDrawer(currentActiveIndex);
  }

  // Initialize on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCDs);
  } else {
    initCDs();
  }
})();
