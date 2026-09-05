/* ============================================
   PROJECT OVERVIEW PAGE — project-script.js
   Sithmi Udapolawatta Portfolio
   ============================================ */

/* ──────────────────────────────────────────────
   1. PROJECT DATA
   Edit this object to add / update projects.
   Each key matches the ?project= URL param used
   in index.html's project card links.

   Shape of each project:

   {
     title, tagline, tags, cover, meta[]      → hero (unchanged)

     overview: {
       image,            // left-side image for the "Project Overview" section
       desc,             // lead paragraph
       scope,            // what was in scope for the project
       userRoles,        // who the product was designed for
       screensOverview,  // the key screens/flows covered
     },

     role: {
       image,            // right-side image for the "My Role" section
       desc,             // intro paragraph about your role
       responsibilities: [ '...', '...' ],   // bullet list
       tools: [ 'Figma', 'FigJam' ],         // shown as chips
     },

     designSystem: {
       colors: [ { name:'Primary', hex:'#0f3460' }, ... ],
       typography: { image: 'images/x-type.jpg' },   // or { image: null } for a placeholder
       buttons:    { image: null },
       cards:      { image: null },
       inputs:     { image: null },
       icons:      { image: null },
     },

     // ── SCREENS — how to add more screens ─────
     //
     // Format A — SINGLE PLATFORM (plain array).
     // Use this when a project is only mobile OR only web.
     // Add as many screen objects as you like; the viewer's
     // "Other screens" squares are generated automatically
     // and clicking one swaps the big device image + caption.
     //
     //   screens: [
     //     { name:'Screen name', desc:'1–2 sentences', image:'images/proj-1.jpg' },
     //     { name:'Next screen', desc:'...',            image:'images/proj-2.jpg' },
     //     { name:'Another one', desc:'...',            image:'images/proj-3.jpg' },
     //   ]
     //
     // Format B — MULTI PLATFORM (object with mobile/web arrays).
     // Use this when a project has BOTH mobile and web screens —
     // a "Mobile / Web" tab bar appears automatically above the
     // viewer, and each tab has its own independent picker.
     //
     //   screens: {
     //     mobile: [ { name, desc, image }, { name, desc, image } ],
     //     web:    [ { name, desc, image }, { name, desc, image } ],
     //   }
     //
     // A project with only one screen still works fine — the
     // "Other screens" picker just won't be shown for that platform.
   }
────────────────────────────────────────────── */
const PROJECTS = {

  ayugo: {
    title:   'AyuGo — AI Powered Travel Assistant',
    tagline: 'An AI-powered travel assistant that helps users plan trips with smart recommendations.',
    tags:    ['Web', 'Travel & Tourism'],
    cover:   'images/ayugo.jpg',
    meta: [
      { icon: 'calendar',  label: 'Year',     value: '2024'   },
      { icon: 'clock',     label: 'Duration', value: '10 weeks' },
      { icon: 'briefcase', label: 'Role',     value: 'UI/UX Designer' },
    ],
    overview: {
      image: 'images/ayugo.jpg',
      desc:  'AyuGo helps travelers move from scattered research to a confident, personalized itinerary — replacing a dozen open tabs with one guided planning experience.',
      scope: 'The scope covered the full planning journey: onboarding, an AI-assisted planner, a recommendations feed, itinerary building, and a shareable trip summary.',
      userRoles: 'Designed primarily for independent travelers planning solo or group trips, with a lightweight internal view for the team curating destination content.',
      screensOverview: 'Key screens include the conversational trip planner, the recommendations feed, the itinerary builder, and the final trip summary screen.',
    },
    role: {
      image: 'images/ayugo.jpg',
      desc:  'I owned the UX and UI for AyuGo end-to-end, from early flow mapping through to high-fidelity screens ready for handoff.',
      responsibilities: [
        'Mapped the core planning flow and decided where AI suggestions should surface',
        'Designed the conversational planner and the recommendation-card system',
        'Built a reusable component library so new destinations need no extra design work',
        'Ran a lightweight usability pass with 5 target users ahead of final handoff',
      ],
      tools: ['Figma', 'FigJam'],
    },
    designSystem: {
      colors: [
        { name: 'Primary', hex: '#0f3460' },
        { name: 'Sky',     hex: '#48b4e0' },
        { name: 'Sunrise', hex: '#f2994a' },
        { name: 'Ink',     hex: '#0b0f14' },
        { name: 'Muted',   hex: '#7a8a9a' },
      ],
      typography: { image: null },
      buttons:    { image: null },
      cards:      { image: null },
      inputs:     { image: null },
      icons:      { image: null },
    },
    screens: [
      { name: 'Trip Planner',   desc: 'The AI-first planning screen where a traveler describes a trip and receives tailored suggestions instantly.', image: 'images/ayugo.jpg' },
      { name: 'Recommendations', desc: 'A feed of tailored destination and activity suggestions based on the traveler\u2019s plan.', image: 'images/ayugo.jpg' },
      { name: 'Trip Summary',   desc: 'A shareable summary that pulls the finished itinerary together in one place.', image: 'images/ayugo.jpg' },
    ],
  },

  delta: {
    title:   'Delta Life Force — EMR Platform',
    tagline: 'A clinic management platform for patient records, appointments, and billing.',
    tags:    ['Web', 'Healthcare'],
    cover:   'images/delta.jpg',
    meta: [
      { icon: 'calendar',  label: 'Year',     value: '2025'   },
      { icon: 'clock',     label: 'Duration', value: '16 weeks' },
      { icon: 'briefcase', label: 'Role',     value: 'UI/UX Designer' },
    ],
    overview: {
      image: 'images/delta.jpg',
      desc:  'Delta Life Force is a clinic management platform built to bring patient records, appointments, and billing into one clear, dependable workflow.',
      scope: 'Scope spanned the daily front-desk workflow: patient look-up, scheduling, records, and billing, unified into one system.',
      userRoles: 'Two primary roles were designed for — front-desk staff booking and checking in patients, and clinicians reviewing records during a visit.',
      screensOverview: 'Key screens include the patient dashboard, the appointment scheduler, the patient record view, and the billing summary.',
    },
    role: {
      image: 'images/delta.jpg',
      desc:  'I led the UX for Delta Life Force, restructuring a dense legacy system around the tasks staff repeat all day.',
      responsibilities: [
        'Audited the legacy workflow and identified the highest-friction daily tasks',
        'Restructured information hierarchy using progressive disclosure for complex records',
        'Designed the scheduling, records, and billing modules as one connected system',
        'Validated flows with front-desk staff and clinicians before handoff',
      ],
      tools: ['Figma', 'Miro'],
    },
    designSystem: {
      colors: [
        { name: 'Primary', hex: '#0f3460' },
        { name: 'Clinical', hex: '#2f9e6e' },
        { name: 'Alert',   hex: '#e0574c' },
        { name: 'Ink',     hex: '#0b0f14' },
        { name: 'Muted',   hex: '#7a8a9a' },
      ],
      typography: { image: null },
      buttons:    { image: null },
      cards:      { image: null },
      inputs:     { image: null },
      icons:      { image: null },
    },
    screens: [
      { name: 'Patient Dashboard', desc: 'A single view of records, appointments, and billing status, built for a fast-moving front desk.', image: 'images/delta.jpg' },
      { name: 'Scheduler',         desc: 'The appointment scheduler used to book and manage patient visits.', image: 'images/delta.jpg' },
      { name: 'Billing Summary',   desc: 'A clear breakdown of charges and payment status for each visit.', image: 'images/delta.jpg' },
    ],
  },

  sanken: {
    title:   'Sanken Overseas — WP Management',
    tagline: 'A digital platform for handling work permits, approvals, and compliance tracking.',
    tags:    ['Web', 'Business Process Management'],
    cover:   'images/sanken.jpg',
    meta: [
      { icon: 'calendar',  label: 'Year',     value: '2024 – 2025' },
      { icon: 'clock',     label: 'Duration', value: '16 weeks'    },
      { icon: 'briefcase', label: 'Role',     value: 'UI/UX Designer' },
    ],
    overview: {
      image: 'images/sanken.jpg',
      desc:  'Sanken\u2019s Work Permit Management System turns a manual, email-driven approval process into a trackable digital pipeline for workforce compliance.',
      scope: 'The scope covered the entire approval pipeline: submission, multi-role review, status tracking, and compliance reporting.',
      userRoles: 'Designed for multiple role-based views — submitters, reviewers/approvers, and compliance staff auditing case history.',
      screensOverview: 'Key screens include the approvals pipeline board, the permit detail view, role-based inboxes, and the compliance report.',
    },
    role: {
      image: 'images/sanken.jpg',
      desc:  'I designed the end-to-end system that replaced Sanken\u2019s email-and-spreadsheet approval process with a visible, trackable pipeline.',
      responsibilities: [
        'Mapped the full approval workflow across every stakeholder role',
        'Designed a status-driven pipeline board so nothing stalls unnoticed',
        'Built role-based views so each team only sees what\u2019s theirs to act on',
        'Partnered with stakeholders across 5 roles to validate the workflow',
      ],
      tools: ['Figma', 'FigJam'],
    },
    designSystem: {
      colors: [
        { name: 'Primary', hex: '#0f3460' },
        { name: 'Approve', hex: '#2f9e6e' },
        { name: 'Pending', hex: '#e0a83c' },
        { name: 'Ink',     hex: '#0b0f14' },
        { name: 'Muted',   hex: '#7a8a9a' },
      ],
      typography: { image: null },
      buttons:    { image: null },
      cards:      { image: null },
      inputs:     { image: null },
      icons:      { image: null },
    },
    screens: [
      { name: 'Approvals Pipeline', desc: 'A status-based board that shows exactly where every work permit sits, and who needs to act next.', image: 'images/sanken.jpg' },
      { name: 'Permit Detail',      desc: 'The full detail view for a single work permit, with its history and required actions.', image: 'images/sanken.jpg' },
      { name: 'Compliance Report',  desc: 'A rolled-up report used by compliance staff to audit case history.', image: 'images/sanken.jpg' },
    ],
  },

  xdate: {
    title:   'XDate — Social Media App',
    tagline: 'A social media platform connecting people through smart matching and real-time chat.',
    tags:    ['Mobile', 'Social App'],
    cover:   'images/xdate.jpg',
    meta: [
      { icon: 'calendar',  label: 'Year',     value: '2023'   },
      { icon: 'clock',     label: 'Duration', value: '8 weeks' },
      { icon: 'briefcase', label: 'Role',     value: 'UI/UX Designer' },
    ],
    overview: {
      image: 'images/xdate.jpg',
      desc:  'XDate connects people through smart matching and real-time chat, designed to feel personal rather than transactional.',
      scope: 'Scope covered onboarding, the matching experience, real-time chat, and profile management.',
      userRoles: 'Designed for a single user role — people looking to meet others through shared interests rather than a swipeable photo stack.',
      screensOverview: 'Key screens include onboarding & interest selection, the Smart Match screen, the chat experience, and the user profile.',
    },
    role: {
      image: 'images/xdate.jpg',
      desc:  'I designed XDate end-to-end, from the onboarding flow through to a lightweight real-time chat experience.',
      responsibilities: [
        'Designed an onboarding flow that surfaces shared interests up front',
        'Created the Smart Match interaction so a match feels earned, not random',
        'Designed a lightweight real-time chat so conversations start naturally',
        'Tested the prototype with target users and iterated on their feedback',
      ],
      tools: ['Figma'],
    },
    designSystem: {
      colors: [
        { name: 'Primary', hex: '#0f3460' },
        { name: 'Spark',   hex: '#ff6f91' },
        { name: 'Sky',     hex: '#48b4e0' },
        { name: 'Ink',     hex: '#0b0f14' },
        { name: 'Muted',   hex: '#7a8a9a' },
      ],
      typography: { image: null },
      buttons:    { image: null },
      cards:      { image: null },
      inputs:     { image: null },
      icons:      { image: null },
    },
    /* Example of Format A (single platform, several screens) — replace
       the repeated placeholder image below with your real screenshots
       and this becomes a fully working "Other screens" picker. */
    screens: [
      { name: 'Smart Match',   desc: 'The matching screen that surfaces shared interests before a single swipe happens.', image: 'images/xdate.jpg' },
      { name: 'Onboarding',    desc: 'A quick, friendly interest-selection flow that sets up better matches from the start.', image: 'images/xdate.jpg' },
      { name: 'Chat',          desc: 'A lightweight real-time chat that opens naturally once a match is made.', image: 'images/xdate.jpg' },
    ],
  },

  adventa: {
    title:   'Adventa Website — Redesign',
    tagline: 'A full website redesign focused on usability, modern UI, and navigation flow.',
    tags:    ['Web', 'Redesign'],
    cover:   'images/adventa.jpg',
    meta: [
      { icon: 'calendar',  label: 'Year',     value: '2024'   },
      { icon: 'clock',     label: 'Duration', value: '2 weeks' },
      { icon: 'briefcase', label: 'Role',     value: 'UI/UX Designer' },
    ],
    overview: {
      image: 'images/adventa.jpg',
      desc:  'A fast-turnaround redesign of the Adventa website, focused on clearing up navigation and modernizing the visual system without slowing the business down.',
      scope: 'Scope covered an information-architecture audit, navigation restructure, and a visual refresh applied across every page of the site.',
      userRoles: 'Designed for the site\u2019s general visitors, with key pages prioritized for the conversion paths the business cared about most.',
      screensOverview: 'Key screens include the redesigned homepage, the flattened primary navigation, and refreshed inner pages.',
    },
    role: {
      image: 'images/adventa.jpg',
      desc:  'Working to a tight two-week timeline, I audited the site and delivered a full visual and navigation refresh.',
      responsibilities: [
        'Audited the existing information architecture and flagged buried pages',
        'Flattened the primary navigation into a clearer structure',
        'Refreshed the visual system for consistency across every page',
        'Delivered production-ready screens within the two-week window',
      ],
      tools: ['Figma'],
    },
    designSystem: {
      colors: [
        { name: 'Primary', hex: '#0f3460' },
        { name: 'Accent',  hex: '#0a7abf' },
        { name: 'Ink',     hex: '#0b0f14' },
        { name: 'Muted',   hex: '#7a8a9a' },
      ],
      typography: { image: null },
      buttons:    { image: null },
      cards:      { image: null },
      inputs:     { image: null },
      icons:      { image: null },
    },
    screens: [
      { name: 'Homepage',   desc: 'The refreshed homepage, rebuilt around a flattened navigation and a clearer visual hierarchy.', image: 'images/adventa.jpg' },
      { name: 'Navigation', desc: 'The flattened primary navigation, restructured for clarity across the whole site.', image: 'images/adventa.jpg' },
      { name: 'Inner Page', desc: 'One of the refreshed inner pages, brought in line with the new visual system.', image: 'images/adventa.jpg' },
    ],
  },

  eduguard: {
    title:   'EduGuard LK — Sex Education App',
    tagline: 'A mobile platform enhancing sexual health awareness, safety, and education.',
    tags:    ['Mobile/Web', 'E-Learning', 'Academic'],
    cover:   'images/project-eduguard.jpg',
    meta: [
      { icon: 'calendar',  label: 'Year',     value: '2024'   },
      { icon: 'clock',     label: 'Duration', value: '6 weeks' },
      { icon: 'briefcase', label: 'Role',     value: 'UI/UX Designer' },
    ],
    overview: {
      image: 'images/project-eduguard.jpg',
      desc:  'EduGuard is a mobile-and-web platform designed to make sexual health education approachable, private, and stigma-free for Sri Lankan communities.',
      scope: 'Scope covered a companion mobile app for private, self-paced learning and a web portal for browsing and managing content.',
      userRoles: 'Designed for young people seeking private, judgment-free learning on mobile, and for content moderators managing material on the web portal.',
      screensOverview: 'Key screens include the mobile Learning Hub and lesson view, plus the web content-management dashboard and article editor.',
    },
    role: {
      image: 'images/project-eduguard.jpg',
      desc:  'This was an academic capstone where I designed both the mobile learner experience and the companion web portal.',
      responsibilities: [
        'Designed a calm, judgment-free visual language with clear iconography',
        'Built privacy-first flows so learning content never feels clinical or exposing',
        'Designed the mobile learning experience and the web content portal as one system',
        'Presented the full case study as part of the academic capstone review',
      ],
      tools: ['Figma', 'FigJam'],
    },
    designSystem: {
      colors: [
        { name: 'Primary', hex: '#0f3460' },
        { name: 'Calm',    hex: '#7fb8a4' },
        { name: 'Sky',     hex: '#48b4e0' },
        { name: 'Ink',     hex: '#0b0f14' },
        { name: 'Muted',   hex: '#7a8a9a' },
      ],
      typography: { image: null },
      buttons:    { image: null },
      cards:      { image: null },
      inputs:     { image: null },
      icons:      { image: null },
    },
    /* Example of Format B (multi platform, tabs) — replace the repeated
       placeholder image below with real mobile + web screenshots. */
    screens: {
      mobile: [
        { name: 'Learning Hub', desc: 'A private, judgment-free home screen where users explore topics at their own pace.', image: 'images/project-eduguard.jpg' },
        { name: 'Lesson View',  desc: 'A single lesson screen designed to feel calm and non-clinical.', image: 'images/project-eduguard.jpg' },
      ],
      web: [
        { name: 'Content Dashboard', desc: 'The web portal moderators use to review and manage published lessons.', image: 'images/project-eduguard.jpg' },
        { name: 'Article Editor',    desc: 'A simple editor for drafting and updating learning content.', image: 'images/project-eduguard.jpg' },
      ],
    },
  },

};


/* ──────────────────────────────────────────────
   2. BOOTSTRAP — read URL param, load project
────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  if (window.lucide) lucide.createIcons();

  const params  = new URLSearchParams(window.location.search);
  const key     = params.get('project') || Object.keys(PROJECTS)[0];
  const project = PROJECTS[key];

  if (!project) {
    document.body.innerHTML = '<p style="padding:4rem;text-align:center">Project not found. <a href="index.html">Go back</a></p>';
    return;
  }

  renderHero(project);
  renderOverview(project);
  renderRole(project);
  renderDesignSystem(project);
  renderScreens(project);

  if (window.lucide) lucide.createIcons();

  initReveal();
  initLightbox();
  initNavScrollSpy();
  initScrollTop();
});


/* ──────────────────────────────────────────────
   3. HERO
────────────────────────────────────────────── */
function renderHero(p) {
  setText('bc-title', p.title);

  const tagsEl = document.getElementById('hero-tags');
  tagsEl.innerHTML = p.tags.map(t => `<span class="cs-tag">${t}</span>`).join('');

  setText('cs-project-title', p.title);
  setText('cs-project-tagline', p.tagline);

  const metaRow = document.getElementById('cs-meta-row');
  metaRow.innerHTML = p.meta.map(m => `
    <span class="cs-meta-pill">
      <i data-lucide="${m.icon}" class="icon-xs"></i>
      <strong>${m.label}:</strong>&nbsp;${m.value}
    </span>
  `).join('');

  const heroEl = document.getElementById('cs-hero');
  const firstShot = Array.isArray(p.screens)
    ? (p.screens[0] && p.screens[0].image)
    : Object.values(p.screens)[0]?.[0]?.image;
  const img = p.cover || firstShot;
  if (heroEl && img) heroEl.style.backgroundImage = `url('${img}')`;
}


/* ──────────────────────────────────────────────
   4. PROJECT OVERVIEW  +  MY ROLE
────────────────────────────────────────────── */
function renderOverview(p) {
  const ov = p.overview;

  const imgEl = document.getElementById('ov-image');
  imgEl.src = ov.image || p.cover;
  imgEl.alt = p.title;

  setText('ov-desc', ov.desc);

  const storyEl = document.getElementById('ov-story');
  const blocks = [
    { tag: 'Scope',      text: ov.scope },
    { tag: 'User Roles', text: ov.userRoles },
  ].filter(b => b.text);

  storyEl.innerHTML = blocks.map(b => `
    <div class="info-story-block">
      <div class="info-story-tag">${b.tag}</div>
      <p>${b.text}</p>
    </div>
  `).join('');
}

function renderRole(p) {
  const role = p.role;

  const imgEl = document.getElementById('role-image');
  imgEl.src = role.image || p.cover;
  imgEl.alt = p.title;

  setText('role-desc', role.desc);

  const listEl = document.getElementById('role-list');
  listEl.innerHTML = (role.responsibilities || []).map(r => `<li>${r}</li>`).join('');

  const toolsEl = document.getElementById('role-tools');
  toolsEl.innerHTML = (role.tools || []).map(t => `<span class="tool-chip">${t}</span>`).join('');
}


/* ──────────────────────────────────────────────
   5. DESIGN SYSTEM
────────────────────────────────────────────── */
function renderDesignSystem(p) {
  const ds   = p.designSystem || {};
  const grid = document.getElementById('ds-grid');
  const blocks = [];

  if (ds.colors && ds.colors.length) {
    blocks.push(`
      <div class="ds-block">
        <h3 class="ds-block-title">Colors</h3>
        <div class="ds-swatches">
          ${ds.colors.map(c => `
            <div class="ds-swatch">
              <span class="ds-swatch-color" style="background:${c.hex}"></span>
              <strong>${c.name}</strong>
              <small>${c.hex}</small>
            </div>
          `).join('')}
        </div>
      </div>
    `);
  }

  ['typography', 'buttons', 'cards', 'inputs', 'icons'].forEach(key => {
    const label = key.charAt(0).toUpperCase() + key.slice(1);
    const item  = ds[key];
    blocks.push(
      item && item.image
        ? `<div class="ds-block"><h3 class="ds-block-title">${label}</h3><img class="ds-image" src="${item.image}" alt="${label} specimen"></div>`
        : `<div class="ds-block"><h3 class="ds-block-title">${label}</h3><div class="ds-placeholder">Add a ${label.toLowerCase()} screenshot from Figma here</div></div>`
    );
  });

  grid.innerHTML = blocks.join('');
}


/* ──────────────────────────────────────────────
   6. DESIGNS — single device viewer + picker,
   with an optional Mobile / Web tab switch. The
   tab bar (when present) lives inside the right-
   hand column, above the screen description —
   not spanning the full width of the section.
────────────────────────────────────────────── */
function renderScreens(p) {
  const screensData     = p.screens;
  const isMultiPlatform = !Array.isArray(screensData);
  const platforms       = isMultiPlatform ? Object.keys(screensData) : ['default'];
  const showTabs         = isMultiPlatform && platforms.length > 1;

  const viewerEl = document.getElementById('screens-viewer');

  // One viewer panel per platform (only the first is visible at first)
  viewerEl.innerHTML = platforms.map((pf, i) => {
    const list         = isMultiPlatform ? screensData[pf] : screensData;
    const isMobilePlat = isMultiPlatform ? pf === 'mobile' : p.tags.some(t => /mobile/i.test(t));
    return buildScreenPanel(p, pf, list, isMobilePlat, i === 0, showTabs, platforms);
  }).join('');

  if (window.lucide) lucide.createIcons();

  // Wire each panel's "other screens" picker
  platforms.forEach(pf => {
    const list = isMultiPlatform ? screensData[pf] : screensData;
    wireScreenPanel(p, pf, list);
  });

  // Wire tab switching — tabs are duplicated into every panel (so they
  // stay visually aligned with that panel's caption column), so a click
  // on any copy needs to sync ALL copies + show the matching panel.
  if (showTabs) {
    document.querySelectorAll('.platform-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.platform;
        document.querySelectorAll('.platform-tab').forEach(t => {
          t.classList.toggle('active', t.dataset.platform === target);
        });
        viewerEl.querySelectorAll('.screens-viewer-panel').forEach(panel => {
          panel.classList.toggle('active', panel.dataset.platform === target);
        });
      });
    });
  }
}

function buildScreenPanel(p, pf, list, isMobile, active, showTabs, platforms) {
  const first = list[0];
  return `
    <div class="screens-viewer-panel ${active ? 'active' : ''}" data-platform="${pf}">
      <div class="screens-shell ${isMobile ? 'screens-shell--center' : ''}">

        <div class="viewer-frame-col">
          <div class="screen-frame ${isMobile ? 'screen-frame--mobile' : 'screen-frame--web'}">
            ${isMobile ? '' : `
            <div class="screen-frame-bar">
              <span class="sf-dot"></span><span class="sf-dot"></span><span class="sf-dot"></span>
              <div class="sf-address">
                <i data-lucide="lock" class="icon-xs"></i>
                <span class="sf-address-text">${addressFor(p, first)}</span>
              </div>
            </div>`}
            <div class="screen-frame-body">
              <img class="viewer-current-img" src="${first.image}" alt="${first.name}" loading="lazy">
              <button class="screen-expand" aria-label="View full screen">
                <i data-lucide="maximize-2"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="viewer-side">
          ${showTabs ? `
          <div class="platform-tabs">
            ${platforms.map(p2 => `
              <button class="platform-tab ${p2 === pf ? 'active' : ''}" data-platform="${p2}">
                <i data-lucide="${platformIcon(p2)}" class="icon-xs"></i>
                ${p2.charAt(0).toUpperCase() + p2.slice(1)}
              </button>
            `).join('')}
          </div>` : ''}

          <div class="viewer-caption">
            <span class="viewer-index">Screen 01</span>
            <h3 class="viewer-name">${first.name}</h3>
            <p class="viewer-desc">${first.desc || ''}</p>
          </div>

          <div class="viewer-next">
            <div class="viewer-next-label">Other screens</div>
            <div class="viewer-next-grid">
              ${list.map((s, i) => `
                <button class="next-square ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="${s.name}">
                  <img src="${s.image}" alt="${s.name}">
                </button>
              `).join('')}
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}

function wireScreenPanel(p, pf, list) {
  const panel = document.querySelector(`.screens-viewer-panel[data-platform="${pf}"]`);
  if (!panel) return;

  const imgEl     = panel.querySelector('.viewer-current-img');
  const nameEl    = panel.querySelector('.viewer-name');
  const descEl    = panel.querySelector('.viewer-desc');
  const indexEl   = panel.querySelector('.viewer-index');
  const addressEl = panel.querySelector('.sf-address-text');
  const expandBtn = panel.querySelector('.screen-expand');
  const squares   = panel.querySelectorAll('.next-square');

  function showScreen(i) {
    const s = list[i];
    imgEl.src = s.image;
    imgEl.alt = s.name;
    nameEl.textContent = s.name;
    descEl.textContent = s.desc || '';
    indexEl.textContent = `Screen 0${i + 1}`;
    if (addressEl) addressEl.textContent = addressFor(p, s);
    squares.forEach(sq => sq.classList.toggle('active', Number(sq.dataset.index) === i));
    expandBtn.dataset.image = s.image;
    expandBtn.dataset.alt   = s.name;
  }

  showScreen(0);

  squares.forEach(sq => {
    sq.addEventListener('click', () => showScreen(Number(sq.dataset.index)));
  });
}

function platformIcon(pf) {
  if (/mobile/i.test(pf)) return 'smartphone';
  if (/web/i.test(pf))    return 'monitor';
  return 'layout-grid';
}

function addressFor(p, screen) {
  const base = p.title.split('\u2014')[0].trim().toLowerCase().replace(/\s/g, '');
  const slug = screen.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `${base}.design/${slug}`;
}


/* ──────────────────────────────────────────────
   7. LIGHTBOX
────────────────────────────────────────────── */
function initLightbox() {
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn    = document.getElementById('lightbox-close');

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.screen-expand');
    if (!trigger) return;
    lightboxImg.src = trigger.dataset.image;
    lightboxImg.alt = trigger.dataset.alt || '';
    lightbox.classList.add('open');
  });

  function close() {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
  }

  closeBtn?.addEventListener('click', close);
  lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}


/* ──────────────────────────────────────────────
   8. NAV SCROLL SPY — highlights the tab for the
   section currently in view (same pattern as the
   main index.html nav)
────────────────────────────────────────────── */
function initNavScrollSpy() {
  const sections = document.querySelectorAll('main .cs-section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));
}


/* ──────────────────────────────────────────────
   9. SCROLL-TO-TOP BUTTON — identical to index.html
────────────────────────────────────────────── */
function initScrollTop() {
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
}


/* ──────────────────────────────────────────────
   10. SCROLL REVEAL
────────────────────────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => obs.observe(el));
}


/* ── Utility ── */
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}