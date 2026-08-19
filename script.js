// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle with persistence + system preference
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');

  if (stored) {
    root.setAttribute('data-theme', stored);
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    root.setAttribute('data-theme', 'light');
  }

  toggle.addEventListener('click', function () {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();
