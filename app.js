(() => {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  const onScroll = () => {
    header?.classList.toggle('scrolled', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const setMenu = (open) => {
    menuToggle?.setAttribute('aria-expanded', String(open));
    mobileMenu?.setAttribute('aria-hidden', String(!open));
    mobileMenu?.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  };

  menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenu(!isOpen);
  });

  mobileLinks.forEach(link => link.addEventListener('click', () => setMenu(false)));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');

  if (!reducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  const form = document.getElementById('enquiry-form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const contact = document.getElementById('contact-detail').value.trim();
    const service = document.getElementById('service').value.trim();
    const message = document.getElementById('message').value.trim();

    const subject = `MOVRO Website Enquiry — ${service || 'General Enquiry'}`;
    const body = [
      `Hello MOVRO Enterprises,`,
      ``,
      `My name: ${name}`,
      `My contact: ${contact}`,
      `Service / interest: ${service}`,
      ``,
      `Message:`,
      message || 'I would like to discuss this with MOVRO.',
      ``,
      `Sent from the MOVRO Enterprises website.`
    ].join('\n');

    window.location.href =
      `mailto:movroenterprisespvtltd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
