/**
 * UPSC ZONE AI - Core Application Orchestrator
 * Manages theme switching, global navigation, ripples, and notifications
 */

(function() {
  function initApp() {
    initTheme();
    initSubjectSelector();
    initNavigation();
    initNewsletterForm();
    initRippleEffects();
  }

  // 1. Theme Management (Normal Mode by default, Midnight Study Mode toggle)
  function initTheme() {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    const editionTag = document.getElementById('edition-masthead-tag');
    const root = document.documentElement;

    function applyTheme(theme) {
      root.setAttribute('data-theme', theme);
      if (editionTag) {
        editionTag.textContent = theme === 'midnight' ? 'Night Edition' : 'Morning Edition';
      }
      if (toggleBtn) {
        const label = toggleBtn.querySelector('.theme-text-label');
        if (label) {
          label.textContent = theme === 'midnight' ? 'Normal Mode' : 'Midnight Mode';
        }
      }
    }

    // Load initial theme from AppState
    const initialTheme = window.appState ? window.appState.state.theme : 'normal';
    applyTheme(initialTheme);

    if (toggleBtn && window.appState) {
      toggleBtn.addEventListener('click', () => {
        const nextTheme = window.appState.toggleTheme();
        applyTheme(nextTheme);
        window.showToast(
          nextTheme === 'midnight' ? 'Midnight Study Mode activated.' : 'Normal Mode (Morning Edition) activated.'
        );
      });
    }
  }

  // 2. Global Subject Selector Bar
  function initSubjectSelector() {
    const subjectBtns = document.querySelectorAll('.subject-btn');
    if (!subjectBtns.length) return;

    subjectBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const subject = btn.getAttribute('data-subject');
        subjectBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (window.appState) {
          window.appState.setSubject(subject);
        }

        window.showToast(`Filtered curriculum: ${subject === 'all' ? 'All Subjects' : subject}`);
      });
    });

    if (window.appState) {
      window.appState.subscribe('subjectChange', (subj) => {
        subjectBtns.forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-subject') === subj);
        });
      });
    }
  }

  // 3. Navigation & Mobile Menu
  function initNavigation() {
    const navToggle = document.getElementById('mobile-nav-toggle');
    const navLinks = document.getElementById('nav-links-menu');
    const links = document.querySelectorAll('.nav-link');

    if (navToggle && navLinks) {
      navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
      });
    }

    // Close mobile nav when clicking a link
    links.forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks) navLinks.classList.remove('open');
      });
    });

    // Navbar Scrollspy for active section highlighting
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

        if (correspondingLink) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            correspondingLink.classList.add('active');
          } else {
            correspondingLink.classList.remove('active');
          }
        }
      });
    }, { passive: true });
  }

  // 4. Newsletter Form with Honest Demo Feedback
  function initNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    const input = document.getElementById('newsletter-email');

    if (form && input) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = input.value.trim();
        if (!email || !email.includes('@')) {
          window.showToast('Please enter a valid academic email address.', 'crimson-toast');
          return;
        }

        input.value = '';
        window.showToast(
          'Sample Edition Confirmed: In a live system, daily editorial questions are dispatched at 05:00 IST.',
          'crimson-toast'
        );
      });
    }
  }

  // 5. Tactile Ripple Feedback
  function initRippleEffects() {
    document.addEventListener('click', (e) => {
      const target = e.target.closest('.btn, .option-btn, .theme-toggle-btn, .subject-btn');
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const circle = document.createElement('span');
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.classList.add('ripple');

      const existingRipple = target.querySelector('.ripple');
      if (existingRipple) {
        existingRipple.remove();
      }

      target.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  }

  // Global Toast Utility
  window.showToast = function(message, extraClass = '') {
    let container = document.getElementById('site-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'site-toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast-item ${extraClass}`;
    toast.innerHTML = `
      <span style="font-weight: 800; color: var(--accent-crimson);">●</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
