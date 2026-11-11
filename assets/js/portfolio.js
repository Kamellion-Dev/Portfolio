(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-nav');
  const mobile = window.matchMedia('(max-width: 880px)');

  const updateThemeButton = () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    themeButton?.setAttribute('aria-label', `Switch to ${theme} theme`);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', root.dataset.theme === 'dark' ? '#0b1019' : '#f5f6f8');
  };
  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch { /* Theme still works without storage. */ }
    updateThemeButton();
  });
  updateThemeButton();

  const setMenu = (expanded, returnFocus = false) => {
    toggle.setAttribute('aria-expanded', String(expanded));
    toggle.setAttribute('aria-label', expanded ? 'Close navigation' : 'Open navigation');
    navigation.classList.toggle('is-open', expanded);
    if (expanded) navigation.querySelector('a')?.focus();
    if (returnFocus) toggle.focus();
  };
  if (toggle && navigation) {
    // With JavaScript unavailable the navigation stays visible and usable.
    root.classList.add('nav-enhanced');
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    navigation.addEventListener('click', event => {
      if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.site-header') && toggle.getAttribute('aria-expanded') === 'true') setMenu(false);
    });
    navigation.addEventListener('focusout', () => {
      queueMicrotask(() => {
        if (!navigation.contains(document.activeElement) && document.activeElement !== toggle) setMenu(false);
      });
    });
    mobile.addEventListener('change', () => setMenu(false));
  }

  // Retire only the old portfolio cache/worker, so returning visitors get current pages.
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      for (const registration of registrations) {
        const worker = registration.active || registration.waiting || registration.installing;
        const expected = new URL('sw.js', document.querySelector('link[rel="canonical"]').href.split('projects/')[0]);
        if (worker && new URL(worker.scriptURL).pathname === expected.pathname) registration.unregister();
      }
    }).catch(() => {});
  }
})();
