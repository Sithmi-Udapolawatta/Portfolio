/* ============================================
   PORTFOLIO — Sithmi Udapolawatta
   scripts/script.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Init Lucide icons ─────────────────────
     Renders all <i data-lucide="..."> elements  */
  if (window.lucide) {
    lucide.createIcons();
  }


  /* ── Scroll-reveal ─────────────────────────
     Fades elements up as they enter viewport   */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));


  /* ── Active nav link ───────────────────────
     Highlights the link for the current section
     with underline + bold styling              */
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${entry.target.id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );
  sections.forEach((s) => sectionObserver.observe(s));


  /* ── Smooth anchor scroll (nav offset) ─────
     Offsets scroll by nav height so headings
     aren't hidden behind the fixed nav         */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const navH = document.querySelector('nav')?.offsetHeight || 68;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });


  /* ── Scroll-to-top button ──────────────────
     Shows after scrolling 300px; smooth-scrolls
     back to top on click                       */
  const scrollBtn = document.getElementById('scroll-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn?.classList.add('visible');
    } else {
      scrollBtn?.classList.remove('visible');
    }
  }, { passive: true });

  scrollBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  
  /* ── Laptop carousel ───────────────────────
     Cross-fades through project screenshots
     every 3.5 s; builds dot indicators      */
  (function initLaptopCarousel() {
  const carousel   = document.getElementById('laptopCarousel');
  const carouselLink = carousel?.closest('.laptop-carousel-link');
  if (!carousel) return;
 
  const slides  = Array.from(carousel.querySelectorAll('.lc-slide'));
  let   current = 0;
  let   timer   = null;
 
  function goTo(next) {
    slides[current].classList.remove('lc-slide--active');
    current = next;
    slides[current].classList.add('lc-slide--active');
  }
 
  function advance() {
    goTo((current + 1) % slides.length);
  }
 
  function startTimer() {
    if (!timer) timer = setInterval(advance, 3000);
  }
 
  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }
 
  /* Start / pause based on viewport visibility */
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting ? startTimer() : stopTimer();
      });
    },
    { threshold: 0.15 }
  );
  obs.observe(carousel);
 
  /* Clicking the carousel smoothly scrolls to #projects */
  if (carouselLink) {
    carouselLink.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector('#projects');
      if (!target) return;
      const navH = document.querySelector('nav')?.offsetHeight || 68;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - navH,
        behavior: 'smooth',
      });
    });
  }
})();

  /* ── Skill cards auto-highlight ────────────
     Cycles a highlight effect through each card
     one by one, continuously, simulating hover 
  const skillCards = document.querySelectorAll('.skill-card');
  let   currentSkill = 0;
  let   skillTimer   = null;

  function highlightNext() {
    skillCards.forEach((c) => c.classList.remove('auto-highlight'));
    if (skillCards.length === 0) return;
    skillCards[currentSkill].classList.add('auto-highlight');
    currentSkill = (currentSkill + 1) % skillCards.length;
    skillTimer = setTimeout(highlightNext, 1400);
  }
*/

  // Start cycling once the skills section enters viewport
  if (skillCards.length > 0) {
    const skillSection = document.getElementById('skills');
    const skillSectionObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!skillTimer) highlightNext();
          } else {
            clearTimeout(skillTimer);
            skillTimer = null;
            skillCards.forEach((c) => c.classList.remove('auto-highlight'));
            currentSkill = 0;
          }
        });
      },
      { threshold: 0.2 }
    );
    if (skillSection) skillSectionObs.observe(skillSection);
  }


  /* ── Contact form → mailto ─────────────────
     On submit, validates fields then opens the
     user's mail client addressed to Sithmi     */
  const form  = document.getElementById('contact-form');
  const toast = document.getElementById('toast');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name    = document.getElementById('name').value.trim();
      const email   = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('msg').value.trim();

      if (!name || !email || !subject || !message) {
        showToast('Please fill in all fields.', true);
        return;
      }
      if (!isValidEmail(email)) {
        showToast('Please enter a valid email address.', true);
        return;
      }

      // Build mailto and trigger
      const body = `Hi Sithmi,\n\nMy name is ${name}.\n\n${message}\n\nFrom: ${email}`;
      const mailto = `mailto:snudapolawatta@gmail.com`
        + `?subject=${encodeURIComponent(subject)}`
        + `&body=${encodeURIComponent(body)}`;

      window.location.href = mailto;

      showToast(`Opening your mail client… ✦`);
      form.reset();
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showToast(msg, isError = false) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.toggle('error', isError);
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }

});