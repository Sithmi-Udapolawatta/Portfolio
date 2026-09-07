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


  /* ── Process connector lines + staggered reveal
     Draws the lines connecting the process-flow
     cards using their actual rendered positions,
     so it stays correct no matter how tall each
     card's content makes it (desktop 4-column
     layout only — hidden by CSS below that), and
     reveals the cards one at a time (1 -> 8) when
     the section scrolls into view, with each
     connecting line fading in right after the
     card it leads to.                            */
  (function initProcessConnector() {
    const flow = document.querySelector('.process-flow');
    const svg  = flow?.querySelector('.process-connector');
    if (!flow || !svg) return;

    const DESKTOP_BREAKPOINT = 960; // matches the CSS grid-column breakpoint
    const STAGGER = 130;            // ms between each card's reveal

    let revealed = false;

    function pointAt(el, side) {
      const cardRect = el.getBoundingClientRect();
      const flowRect = flow.getBoundingClientRect();
      return {
        x: (side === 'right' ? cardRect.right : cardRect.left) - flowRect.left,
        y: cardRect.top - flowRect.top + cardRect.height / 2,
      };
    }

    // Reveals every card in sequence, 1 -> 8. Safe to call more than
    // once (e.g. on resize) — after the first run it just makes sure
    // anything newly drawn is shown immediately, with no re-animation.
    function applyCardReveal() {
      const steps = Array.from(flow.querySelectorAll('.process-flow-step'));
      steps.forEach((card, i) => {
        card.style.transitionDelay = revealed ? '0ms' : `${i * STAGGER}ms`;
        card.classList.add('process-visible');
      });
    }

    // Reveals each connector path right after the card it leads into.
    function applyConnectorReveal() {
      const paths = Array.from(svg.querySelectorAll('.process-connector-line'));
      paths.forEach((path) => {
        const afterCard = Number(path.dataset.afterCard || 1);
        const delay = revealed ? 0 : afterCard * STAGGER + 90;
        path.style.transitionDelay = `${delay}ms`;
        path.classList.add('process-visible');
      });
    }

    function revealAll() {
      applyCardReveal();
      applyConnectorReveal();
      revealed = true;
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealAll();
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    sectionObserver.observe(flow);

    function draw() {
      const steps = Array.from(flow.querySelectorAll('.process-flow-step'));
      if (steps.length < 8) return;

      const flowRect = flow.getBoundingClientRect();
      svg.setAttribute('width', flowRect.width);
      svg.setAttribute('height', flowRect.height);
      svg.style.width  = `${flowRect.width}px`;
      svg.style.height = `${flowRect.height}px`;

      // userSpaceOnUse gradient needs real endpoint coordinates (an
      // objectBoundingBox gradient would silently fail to render on
      // perfectly horizontal/vertical segments, since their bounding
      // box has zero height/width)
      const gradient = svg.querySelector('#processFlowGradient');
      if (gradient) {
        gradient.setAttribute('x1', 0);
        gradient.setAttribute('x2', flowRect.width);
      }

      // Clear previously drawn lines (keep the <defs> gradient)
      svg.querySelectorAll('.process-connector-line').forEach((el) => el.remove());

      if (window.innerWidth <= DESKTOP_BREAKPOINT) return; // no lines on 2/1-col layouts

      const ns = 'http://www.w3.org/2000/svg';

      // afterCard = which card (1-indexed) this line should wait for
      // before it fades in.
      function addPath(d, afterCard) {
        const path = document.createElementNS(ns, 'path');
        path.setAttribute('d', d);
        path.setAttribute('class', 'process-connector-line');
        path.dataset.afterCard = afterCard;
        svg.appendChild(path);
      }

      // Straight links between consecutive cards within the same row —
      // each one waits for the card it leads INTO.
      [[0, 1], [1, 2], [2, 3], [4, 5], [5, 6], [6, 7]].forEach(([a, b]) => {
        const p1 = pointAt(steps[a], 'right');
        const p2 = pointAt(steps[b], 'left');
        addPath(`M ${p1.x},${p1.y} L ${p2.x},${p2.y}`, b + 1);
      });

      // Looping link from the end of row 1 into the start of row 2.
      // The line should sit centered in the empty space between row 1's
      // card bottom and row 2's icon top (the icon overlaps upward into
      // that gap, so it — not the card box — marks the visual start of
      // row 2).
      const c4 = pointAt(steps[3], 'right');
      const c5 = pointAt(steps[4], 'left');
      const row1BottomY = steps[3].getBoundingClientRect().bottom - flowRect.top;
      const row2Icon     = steps[4].querySelector('.process-flow-icon');
      const row2TopY     = row2Icon
        ? row2Icon.getBoundingClientRect().top - flowRect.top
        : steps[4].getBoundingClientRect().top - flowRect.top;
      const midY = (row1BottomY + row2TopY) / 2;

      const bulgeRight = flowRect.width + 36;
      const bulgeLeft  = -36;
      const r = 22; // corner radius — quarter-circle turns, not a curved "S"

      // A proper rounded-rectangle path: straight segments joined by
      // quarter-circle arcs at each turn, so every corner is a clean,
      // consistent 90-degree round rather than a stretched curve.
      addPath(
        `M ${c4.x},${c4.y} ` +
        `L ${bulgeRight - r},${c4.y} ` +
        `A ${r},${r} 0 0 1 ${bulgeRight},${c4.y + r} ` +
        `L ${bulgeRight},${midY - r} ` +
        `A ${r},${r} 0 0 1 ${bulgeRight - r},${midY} ` +
        `L ${bulgeLeft + r},${midY} ` +
        `A ${r},${r} 0 0 0 ${bulgeLeft},${midY + r} ` +
        `L ${bulgeLeft},${c5.y - r} ` +
        `A ${r},${r} 0 0 0 ${bulgeLeft + r},${c5.y} ` +
        `L ${c5.x},${c5.y}`,
        5
      );

      // A short trailing arrow after the last card
      const c8 = pointAt(steps[7], 'right');
      const arrowEndX = c8.x + 38;
      addPath(
        `M ${c8.x},${c8.y} L ${arrowEndX},${c8.y} ` +
        `M ${arrowEndX - 8},${c8.y - 6} L ${arrowEndX},${c8.y} L ${arrowEndX - 8},${c8.y + 6}`,
        8
      );

      // If the section was already revealed before this (re)draw (e.g.
      // triggered by a resize), show the freshly-drawn lines immediately
      // instead of leaving them invisible or re-running the stagger.
      if (revealed) applyConnectorReveal();
    }

    // Redraw once layout has settled, on resize, and once fonts/images
    // finish loading (both can shift card heights after first paint).
    requestAnimationFrame(draw);
    window.addEventListener('load', draw);

    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(draw, 150);
    });

    if (document.fonts?.ready) {
      document.fonts.ready.then(draw);
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


  /* ── Contact form → Web3Forms ──────────────
     GitHub Pages has no backend, so a plain
     mailto: link only works if the visitor has
     a desktop mail client configured — many
     don't, and the message silently never sends.
     Web3Forms accepts the POST directly and
     emails it to you, no backend required.     */
  const form       = document.getElementById('contact-form');
  const toast      = document.getElementById('toast');
  const sendButton = form?.querySelector('.btn-send');

  if (form) {
    form.addEventListener('submit', async (e) => {
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

      const accessKey = form.querySelector('[name="access_key"]')?.value;
      if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        showToast('Form isn\u2019t connected yet \u2014 add a Web3Forms access key.', true);
        return;
      }

      const originalLabel = sendButton?.innerHTML;
      if (sendButton) {
        sendButton.disabled = true;
        sendButton.innerHTML = 'Sending\u2026';
      }

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `Portfolio contact: ${subject}`,
            name, email,
            message,
            botcheck: form.querySelector('[name="botcheck"]')?.checked || false,
          }),
        });
        const result = await response.json();

        if (response.ok && result.success) {
          showToast('Message sent \u2014 thanks for reaching out! \u2726');
          form.reset();
        } else {
          showToast(result.message || 'Something went wrong. Please try again.', true);
        }
      } catch (err) {
        showToast('Network error \u2014 please try again in a moment.', true);
      } finally {
        if (sendButton) {
          sendButton.disabled = false;
          sendButton.innerHTML = originalLabel;
        }
      }
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