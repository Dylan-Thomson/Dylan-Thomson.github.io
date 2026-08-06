/* Dylan Thomson, portfolio behavior. Two small things: theme and scroll reveal. */
(() => {
  'use strict';

  const root = document.documentElement;

  /* ── theme ─────────────────────────────────────────────────────────────── */
  const toggle = document.getElementById('theme-toggle');

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    toggle.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
    );
  };

  applyTheme(root.dataset.theme || 'dark');

  toggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch { /* private mode */ }
  });

  /* ── reveal on scroll ──────────────────────────────────────────────────── */
  const targets = document.querySelectorAll('.entry, .card, .job');

  if (!window.IntersectionObserver || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  targets.forEach((el) => el.classList.add('reveal'));

  const io = new IntersectionObserver(
    (records) => {
      records.forEach((record) => {
        if (!record.isIntersecting) return;
        record.target.classList.add('in');
        io.unobserve(record.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
  );

  targets.forEach((el) => io.observe(el));
})();
