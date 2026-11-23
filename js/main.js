(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuLinks = mobileMenu.querySelectorAll('a');

  function setMenu(open) {
    menuButton.classList.toggle('active', open);
    mobileMenu.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-open', open);
  }

  menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  menuLinks.forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setMenu(false);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) setMenu(false);
  });

  document.querySelectorAll('.notify-form').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const phone = form.querySelector('input');
      const button = form.querySelector('button');
      if (phone && !phone.value.trim()) {
        phone.focus();
        phone.setCustomValidity('Please enter your phone number.');
        phone.reportValidity();
        phone.addEventListener('input', () => phone.setCustomValidity(''), { once: true });
        return;
      }
      const original = button.textContent;
      button.textContent = 'You’re on the list!';
      button.disabled = true;
      window.setTimeout(() => {
        button.textContent = original;
        button.disabled = false;
      }, 2600);
    });
  });

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      gsap.from('.hero-visual', { opacity: 0, y: 28, duration: 1, ease: 'power3.out' });
      gsap.from('.hero-copy > *', { opacity: 0, y: 22, duration: .8, stagger: .12, delay: .25, ease: 'power3.out' });
      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.from(element, {
          opacity: 0, y: 42, duration: .85, ease: 'power2.out',
          scrollTrigger: { trigger: element, start: 'top 86%', once: true }
        });
      });
      gsap.to('.manifesto-car-left', {
        x: 65, rotation: -1, ease: 'none',
        scrollTrigger: { trigger: '.manifesto', start: 'top bottom', end: 'bottom top', scrub: 1 }
      });
      gsap.to('.manifesto-car-right', {
        x: -65, rotation: 1, ease: 'none',
        scrollTrigger: { trigger: '.manifesto', start: 'top bottom', end: 'bottom top', scrub: 1 }
      });
    }
  }
})();