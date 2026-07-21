document.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    window.setTimeout(() => loader.classList.add('hide'), 700);
  }

  const themeToggle = document.querySelector('[data-theme-toggle]');
  const savedTheme = localStorage.getItem('sifis-theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      localStorage.setItem('sifis-theme', isDark ? 'dark' : 'light');
      themeToggle.setAttribute('aria-pressed', String(isDark));
    });
  }

  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    backToTop?.classList.toggle('show', window.scrollY > 600);
  });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  const counters = document.querySelectorAll('[data-counter]');
  counters.forEach((counter) => {
    const target = Number(counter.dataset.counter || 0);
    const duration = 1200;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      counter.textContent = `${value}${counter.dataset.suffix || ''}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    const observerCounter = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      });
    });
    observerCounter.observe(counter);
  });

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
});
