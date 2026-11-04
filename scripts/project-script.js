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
       leadParagraph,    // plain-language project summary shown below the overview heading
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
     // OPTIONAL — Figma-style prototype scrolling. Add `header` and/or
     // `footer` to any screen object (works in either format above) to
     // keep that bar pinned in place while `image` scrolls underneath
     // it inside the device — send 3 separate crops: the header bar,
     // the footer/tab bar, and the (often taller, scrollable) middle
     // content. Leave either one out if a screen has no header or no
     // footer; a screen with neither behaves exactly as before.
     //
     //   { name:'Feed', desc:'...',
     //     header:'images/proj-1-header.jpg',
     //     image: 'images/proj-1-middle.jpg',
     //     footer:'images/proj-1-footer.jpg' }
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
    title:   'AyuGo — AI-Powered Travel Platform',
    tagline: 'An AI-powered travel platform for personalized trip planning, accommodation discovery, and price negotiation.',
    tags:    ['Web', 'Travel & Tourism'],
    cover:   'images/ayugo.jpg',
    meta: [
      { icon: 'calendar',  label: 'Year',     value: '2026'   },
      { icon: 'clock',     label: 'Duration', value: '12 weeks' },
      { icon: 'briefcase', label: 'Role',     value: 'Lead Designer' },
    ],
    overview: {
      image: 'images/Ayugo/trip_view.png',
      leadParagraph: 'AyuGo brings trip planning, travel discovery, and accommodation booking together in one platform. Travelers can explore suggested itineraries, destination guides, and hotel offers, then review their trip details—including the daily schedule, transport, meals, accommodation, and estimated cost—in one place. Before booking, they can use AI-powered negotiation to discuss accommodation prices.',
      scope: 'The platform brings together AI-assisted trip planning and price negotiation, itinerary review, hotel discovery, bookings, property onboarding, and commission tracking.',
      userRoles: 'Travelers planning trips and stays in Sri Lanka, and accommodation providers who want to list their properties and connect with potential guests through AyuGo.',
      screensOverview: 'The screens shown here are selected examples from the wider platform I designed. They include trip planning, suggested itineraries, travel guides, hotel search and offers, trip details, traveler bookings, commission tracking, and the accommodation-provider landing page. The AI-powered price negotiation and owner-admin experiences are also part of the platform.',
    },
    role: {
      image: 'images/ayugo.jpg',
      desc:  'As AyuGo’s lead designer, I designed the full platform across traveler, accommodation-provider, and owner-admin experiences. I shaped its overall experience and visual direction, including AI-assisted trip planning and price negotiation. The screens shown here are selected examples of the platform I designed.',
      responsibilities: [
        'Led the end-to-end design of the AyuGo platform',
        'Designed traveler, accommodation-provider, and owner-admin experiences',
        'Designed AI-assisted trip planning and accommodation price negotiation',
        'Established a consistent visual direction across the platform',
      ],
      tools: [
        { name: 'Figma', logo: 'images/tools/figma.svg' },
        { name: 'Visily', logo: 'images/tools/visily.svg' },
        { name: 'Google Stitch', logo: 'images/tools/google-stitch.svg' },
      ],
    },
    designSystem: {
      colors: [
        { name: 'Primary', hex: '#002F65' },
        { name: 'Secondary',     hex: '#0EB8D2' },
        { name: 'Dark Text', hex: '#252525' },
        { name: 'Light Text',     hex: '#778289' },
        { name: 'Stroke',   hex: '#E5E8EB' },
        { name: 'Background',   hex: '#F7FAFC' },
      ],
      typography: { image: null },
      buttons:    { image: null },
      cards:      { image: null },
      inputs:     { image: null },
      icons:      { image: null },
    },
    screens: [
      { name: 'Plan a Trip', desc: 'Travelers enter trip details and preferences to explore suggested itineraries and travel guides.', header: 'images/Ayugo/home_header.png', image: 'images/Ayugo/home_trips.png' },
      { name: 'Book a Hotel', desc: 'Search for accommodation by destination, dates, and guest details, then browse available offers.', header: 'images/Ayugo/home_header.png', image: 'images/Ayugo/home_hotels.png' },
      { name: 'Trip Overview', desc: 'Review the itinerary, daily activities, map, accommodation, and estimated trip cost.', header: 'images/Ayugo/home_header.png', image: 'images/Ayugo/trip_view.png' },
      { name: 'Hotel Overview', desc: 'Explore accommodation details and review a hotel offer as part of the booking journey.', header: 'images/Ayugo/home_header.png', image: 'images/Ayugo/hotel_view.png' },
      { name: 'About AyuGo', desc: 'An introduction to AyuGo and the travel experience it offers.', header: 'images/Ayugo/about_header.png', image: 'images/Ayugo/about_us.png' },
      { name: 'My Bookings', desc: 'A central place for travelers to review their bookings.', header: 'images/Ayugo/bookings_header.png', image: 'images/Ayugo/my_bookings.png' },
      { name: 'Commissions', desc: 'Accommodation partners can review referral activity and commission details.', header: 'images/Ayugo/profile_header.png', image: 'images/Ayugo/profile_commissions.png' },
      { name: 'Accommodation Partner Landing Page', desc: 'Introduces accommodation providers to listing their properties and reaching potential guests through AyuGo.', header: 'images/Ayugo/acc_header.png', image: 'images/Ayugo/acc_landing.png' },
    ],
  },

  edumentor: {
    title:   'EduMentor 360 — Mentoring & Learning App',
    tagline: 'A classroom lesson management platform that helps teachers organize daily lessons',
    tags:    ['Mobile', 'E-Learning'],
    cover:   'images/Edumentor/edumentor.jpeg',
    meta: [
      { icon: 'calendar',  label: 'Year',     value: '2025'   },
      { icon: 'clock',     label: 'Duration', value: '12 weeks' },
      { icon: 'briefcase', label: 'Role',     value: 'UI/UX Designer' },
    ],
    overview: {
      image: 'images/edumentor.jpg',
      leadParagraph: '',
      scope: 'Scope covered onboarding, mentor discovery, session booking, learning progress tracking, and profile management.',
      userRoles: 'Designed primarily for learners looking for guidance, with mentor-facing flows for managing availability and sessions.',
      screensOverview: 'Key screens include the home dashboard, mentor discovery, session booking, and the progress tracker.',
    },
    role: {
      image: 'images/edumentor.jpg',
      desc:  'I designed EduMentor 360 end-to-end, from early flow mapping through to high-fidelity mobile screens ready for handoff.',
      responsibilities: [
        'Mapped the core learner and mentor journeys',
        'Designed mentor discovery and session booking flows for quick, thumb-friendly use',
        'Created a reusable mobile component library and visual system',
        'Validated the flows with target users before handoff',
      ],
      tools: ['Figma'],
    },
    designSystem: {
      colors: [
        { name: 'Primary', hex: '#0f3460' },
        { name: 'Secondary', hex: '#48b4e0' },
        { name: 'Accent',  hex: '#f2994a' },
        { name: 'Ink',     hex: '#0b0f14' },
        { name: 'Muted',   hex: '#7a8a9a' },
      ],
      typography: { image: null },
      buttons:    { image: null },
      cards:      { image: null },
      inputs:     { image: null },
      icons:      { image: null },
    },
    /* Mobile project: header/footer stay pinned, `image` scrolls between them.
       Leave `footer` out of any screen that has no bottom bar. */
    screens: [
      { name: 'Home',            desc: 'A single dashboard showing upcoming sessions, recommended mentors, and learning progress.', header: 'images/EduMentor/header.png', image: 'images/EduMentor/home.png', footer: 'images/EduMentor/home_footer.png' },
      { name: 'Find a Mentor',   desc: 'Browse and filter mentors by topic, experience, and availability.', header: 'images/EduMentor/header.png', image: 'images/EduMentor/lessons.png', footer: 'images/EduMentor/lesson_footer.png' },
      { name: 'Book a Session',  desc: 'A quick booking flow for choosing a time slot and confirming a session.', header: 'images/EduMentor/header.png', image: 'images/EduMentor/lesson_details.png' },
      { name: 'Book a Session',  desc: 'A quick booking flow for choosing a time slot and confirming a session.', header: 'images/EduMentor/header.png', image: 'images/EduMentor/record.png', footer: 'images/EduMentor/record_footer.png' },
      { name: 'Book a Session',  desc: 'A quick booking flow for choosing a time slot and confirming a session.', header: 'images/EduMentor/header.png', image: 'images/EduMentor/recording.png', footer: 'images/EduMentor/record_footer.png' },
      { name: 'Book a Session',  desc: 'A quick booking flow for choosing a time slot and confirming a session.', header: 'images/EduMentor/header.png', image: 'images/EduMentor/upload.png', footer: 'images/EduMentor/record_footer.png' },
      { name: 'Book a Session',  desc: 'A quick booking flow for choosing a time slot and confirming a session.', header: 'images/EduMentor/header.png', image: 'images/EduMentor/profile.png', footer: 'images/EduMentor/profile_footer.png' },
      { name: 'Book a Session',  desc: 'A quick booking flow for choosing a time slot and confirming a session.', header: 'images/EduMentor/header.png', image: 'images/EduMentor/notification_preferences.png', footer: 'images/EduMentor/profile_footer.png' },
      { name: 'Book a Session',  desc: 'A quick booking flow for choosing a time slot and confirming a session.', header: 'images/EduMentor/header.png', image: 'images/EduMentor/help.png', footer: 'images/EduMentor/profile_footer.png' },
      
      { name: 'Book a Session',  desc: 'A quick booking flow for choosing a time slot and confirming a session.', header: 'images/EduMentor/header.png', image: 'images/EduMentor/edumatrix.png' },
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
      leadParagraph: '',
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
        { name: 'Primary', hex: '#457BBE' },
        { name: 'Secondary', hex: '#6DC5EF' },
        { name: 'Dark Text', hex: '#222425' },
        { name: 'Light Text',     hex: '#67798E' },
        { name: 'Stroke',   hex: '#DBDEDF' },
        { name: 'Background',   hex: '#F6F6F8' },
      ],
      typography: { image: null },
      buttons:    { image: null },
      cards:      { image: null },
      inputs:     { image: null },
      icons:      { image: null },
    },
    screens: [
      { name: 'Staff Management', desc: 'A status-based board that shows exactly where every work permit sits, and who needs to act next.', header: 'images/Sanken/hr_male_header.png', image: 'images/Sanken/hr_male_staff.png' },
      { name: 'Documents',      desc: 'The full detail view for a single work permit, with its history and required actions.', header: 'images/Sanken/hr_male_header.png', image: 'images/Sanken/hr_male_downloads.png' },
      { name: 'WPE Progress',  desc: 'A rolled-up report used by compliance staff to audit case history.', header: 'images/Sanken/super_admin_header.png', image: 'images/Sanken/super_admin_wpe.png' },
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
      leadParagraph: '',
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
        { name: 'Primary Pink', hex: '#ED72AC' },
        { name: 'Primary Purple',   hex: '#7E75B7' },
        { name: 'Dark Text',     hex: '#27181F' },
        { name: 'Light Text',   hex: '#AA9DA3' },
        { name: 'Stroke',   hex: '#F1EAEA' },
        { name: 'Background',   hex: '#FFFFFF' },
      ],
      typography: { image: 'images/xdate/typography.png' },
      buttons:    { image: 'images/xdate/buttons.png' },
      cards:      { image: 'images/xdate/cards.png' },
      inputs:     { image: 'images/xdate/inputs.png' },
      icons:      { image: 'images/xdate/icons.png'},
    },
    /* Example of Format A (single platform, several screens) — replace
       the repeated placeholder image below with your real screenshots
       and this becomes a fully working "Other screens" picker. */
    screens: [
      { name: 'Match Making Home',   desc: 'This screen is the main matchmaking interface, where users are presented with potential matches that meet the preferences they have set in their account. Each profile provides key details such as the person’s name, location, and distance, allowing users to make an initial judgment without opening the full profile. The bottom action icons provide a simple way to accept or reject the suggested person and continue through the matchmaking process.', header: 'images/xdate/header.png', image: 'images/xdate/home.png', footer: 'images/xdate/home-footer.png' },
      { name: 'Match Explorer',    desc: 'The Explore screen provides a personalized space for discovering people and potential connections based on the user’s profile. Recommendations are organized into sections such as For You, Recently Active People, and Common Passions, making it easier to discover people with relevant interests or activity. Users can explore these recommendations further to find profiles that may be suitable for connecting.', header: 'images/xdate/header.png', image: 'images/xdate/explore.png', footer: 'images/xdate/explore-footer.png'  },
      { name: 'User Profile',    desc: 'The User Profile screen provides a detailed view of another user and gives more context beyond the information shown during matchmaking. It includes personal information such as their location, profession, education, introduction, relationship preferences, interests, and languages. This allows users to learn more about a person and identify shared interests or similarities before deciding whether to connect.', header: 'images/xdate/header3.png', image: 'images/xdate/profile-view.png', footer: 'images/xdate/profile-footer.png'  },
      { name: 'Marketplace',    desc: 'The Marketplace allows users to discover different shops available within the platform and find ones that match their interests. Users can search and filter shops to narrow down their options and easily find relevant stores. They can also mark shops as favourites and access their saved favourites list, making it easier to return to shops they are interested in later.', header: 'images/xdate/header.png', image: 'images/xdate/shops.png', footer: 'images/xdate/shops-footer.png'  },
      { name: 'Shop View',          desc: 'The Shop View gives users a dedicated space to explore products from a particular shop or seller. It allows users to browse the shop’s available items in one place rather than searching through the wider marketplace. This creates a more focused shopping experience and makes it easier for users to discover products from a seller they are interested in.', header: 'images/xdate/header2.png', image: 'images/xdate/shop-view.png' },
      { name: 'Product Details',          desc: 'The Product Details screen provides users with more comprehensive information about a selected product before making a purchase. It includes details such as the price, rating, description, available colors and sizes, stock availability, quantity, delivery information, and customer reviews. Users can also view similar products and choose actions such as Buy Now or Add to Wishlist.', header: 'images/xdate/header2.png', image: 'images/xdate/item-view.png', footer: 'images/xdate/item-view-footer.png'   },
      { name: 'Events',    desc: 'The Events screen allows users to discover different public and online events available through the platform. Each event provides key information such as its date, format, and number of interested participants, helping users decide which events they may want to explore. The screen provides an easy way to discover social activities and experiences beyond individual connections.', header: 'images/xdate/header.png', image: 'images/xdate/events.png', footer: 'images/xdate/events-footer.png'  },
      { name: 'Event Details',    desc: 'The Event Details screen provides a complete overview of an event selected from the Events section. Users can view information such as the event date, organizer, description, invited people, and venue details, while also having the option to invite others. A More Events section at the bottom allows users to continue discovering other events from the same screen.', header: 'images/xdate/header6.png', image: 'images/xdate/event-view.png' },
      { name: 'Notifications',    desc: 'The Notifications screen brings together updates and recent activities from across the platform in one place. Users can review individual notifications along with when they occurred, while search, sorting, and filtering options help them find specific updates more easily. A Mark all as read option also allows users to quickly manage their unread notifications.', header: 'images/xdate/header4.png', image: 'images/xdate/notification.png', footer: 'images/xdate/notification-footer.png'  },
      { name: 'Edit My Profile',    desc: 'The Edit Profile screen allows users to manage the personal information displayed on their dating profile. Users can update details such as profile pictures, personal information, dating preferences, interests, professional background, education, and languages.', header: 'images/xdate/header5.png', image: 'images/xdate/my-profile.png', footer: 'images/xdate/my-profile-footer.png'   },
      { name: 'Settings',    desc: 'The Settings screen allows users to manage their matchmaking preferences and account-related options in one place. Users can set their preferred maximum distance and age range, as well as choose whether they want to receive suggestions from Men, Women, or Everyone. The screen also includes a Delete Account option, providing users with the ability to permanently remove their account and associated profile information.', header: 'images/xdate/header7.png', image: 'images/xdate/settings.png', footer: 'images/xdate/my-profile-footer.png'   },
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
      leadParagraph: '',
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
        { name: 'Primary', hex: '#174E7B' },
        { name: 'Secondary',  hex: '#30CEFE' },
        { name: 'Dark Text',     hex: '#252628' },
        { name: 'Light Text',   hex: '#485158' },
        { name: 'Stroke',   hex: '#E7EBEE' },
        { name: 'Background',   hex: '#F6F9FC' },
      ],
      typography: { image: 'images/Adventa/typography.png' },
      buttons:    { image: 'images/Adventa/buttons.png' },
      cards:      { image: 'images/Adventa/cards.png' },
      inputs:     { image: 'images/Adventa/inputs.png' },
      icons:      { image: 'images/Adventa/icons.png' },
    },
    screens: [
      { name: 'Homepage',   desc: 'The refreshed homepage, rebuilt around a flattened navigation and a clearer visual hierarchy.', header: 'images/Adventa/home_header.png', image: 'images/Adventa/home.png'},
      { name: 'Services', desc: 'The flattened primary navigation, restructured for clarity across the whole site.', header: 'images/Adventa/service_header.png', image: 'images/Adventa/services.png' },
      { name: 'Products', desc: 'One of the refreshed inner pages, brought in line with the new visual system.', header: 'images/Adventa/product_header.png', image: 'images/Adventa/products.png' },
      { name: 'Blogs', desc: 'One of the refreshed inner pages, brought in line with the new visual system.', header: 'images/Adventa/blog_header.png', image: 'images/Adventa/blogs.png' },
      { name: 'Contact Us', desc: 'One of the refreshed inner pages, brought in line with the new visual system.', header: 'images/Adventa/contact_header.png', image: 'images/Adventa/contact.png' },
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
      leadParagraph: '',
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
      tools: ['Figma', 'Moqups'],
    },
    designSystem: {
      colors: [
        { name: 'Primary', hex: '#0C6170' },
        { name: 'Secondary',    hex: '#37BE9E' },
        { name: 'Dark Text',     hex: '#283D38' },
        { name: 'Light Text',   hex: '#BFC5C6' },
        { name: 'Stroke',   hex: '#E9E9E9' },
        { name: 'Background',   hex: '#F6FAF9' },
      ],
      typography: { image: 'images/EduGuard/typography.png' },
      buttons:    { image: 'images/EduGuard/buttons.png' },
      cards:      { image: 'images/EduGuard/cards.png' },
      inputs:     { image: 'images/EduGuard/inputs.png' },
      icons:      { image: 'images/EduGuard/icons.png' },
    },
    /* Example of Format B (multi platform, tabs) — replace the repeated
       placeholder image below with real mobile + web screenshots. */
    screens: {
      mobile: [
        { name: 'Learning Hub', desc: 'A private, judgment-free home screen where users explore topics at their own pace.', header: 'images/EduGuard/mobile/header1.png', image: 'images/EduGuard/mobile/health_home.png', footer: 'images/EduGuard/mobile/footer.png'  },
        { name: 'Lesson View',  desc: 'A single lesson screen designed to feel calm and non-clinical.', header: 'images/EduGuard/mobile/header2.png', image: 'images/EduGuard/mobile/std.png' },
        { name: 'Lesson View',  desc: 'A single lesson screen designed to feel calm and non-clinical.', header: 'images/EduGuard/mobile/header3.png', image: 'images/EduGuard/mobile/std-view.png' },
        { name: 'Lesson View',  desc: 'A single lesson screen designed to feel calm and non-clinical.', header: 'images/EduGuard/mobile/header4.png', image: 'images/EduGuard/mobile/doctors.png' },
        { name: 'Lesson View',  desc: 'A single lesson screen designed to feel calm and non-clinical.', header: 'images/EduGuard/mobile/header5.png', image: 'images/EduGuard/mobile/doctor-view.png' },
        { name: 'Lesson View',  desc: 'A single lesson screen designed to feel calm and non-clinical.', header: 'images/EduGuard/mobile/detect_header.png', image: 'images/EduGuard/mobile/std_detection.png' },
        { name: 'Lesson View',  desc: 'A single lesson screen designed to feel calm and non-clinical.', header: 'images/EduGuard/mobile/detect_header.png', image: 'images/EduGuard/mobile/detected.png' },
        { name: 'Lesson View',  desc: 'A single lesson screen designed to feel calm and non-clinical.', header: 'images/EduGuard/mobile/detect_header.png', image: 'images/EduGuard/mobile/reccomendations.png' },
      ],
      web: [
        { name: 'Home Page', desc: 'The web portal moderators use to review and manage published lessons.', header: 'images/EduGuard/web/home_header.png', image: 'images/EduGuard/web/home.png' },
        { name: 'Projects',    desc: 'A simple editor for drafting and updating learning content.', header: 'images/EduGuard/web/project_header.png' , image: 'images/EduGuard/web/project.png'  },
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
  initScrollHint();
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

  const leadEl = document.getElementById('ov-desc');
  leadEl.textContent = ov.leadParagraph || '';
  leadEl.hidden = !ov.leadParagraph;

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
  toolsEl.innerHTML = (role.tools || []).map(tool => {
    const name = typeof tool === 'string' ? tool : tool.name;
    const logo = typeof tool === 'string' ? '' : `<img class="tool-logo" src="${tool.logo}" alt="" aria-hidden="true">`;
    return `<span class="tool-chip">${logo}<span>${name}</span></span>`;
  }).join('');
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
    const list         = isMultiPlatform ? screensData[pf] : screensData;
    const isMobilePlat = isMultiPlatform ? pf === 'mobile' : p.tags.some(t => /mobile/i.test(t));
    wireScreenPanel(p, pf, list, isMobilePlat);
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

/* Renders the inside of .screen-frame-body for one screen.
   Two modes, picked automatically per screen:
   - Plain screen: just `image` → single full-bleed, cropped image
     (old behavior, no internal scroll).
   - App-prototype screen: `header` and/or `footer` present → those
     stay fixed at the top/bottom of the device and only the middle
     (`image`) scrolls inside — the Figma-prototype effect. See the
     "screens" comment block near the top of this file for the data
     shape (`header`, `image`, `footer`).
   `allowFooter` is false for web screens — web only ever pins a
   header; a `footer` on a web screen is simply ignored. Just leave
   `footer` out of a screen object entirely if it doesn't have one
   (or if it's a web screen) — nothing else needs to change. */
function renderFrameBodyHTML(screen, allowFooter) {
  const hasHeader = Boolean(screen.header);
  const hasFooter = Boolean(allowFooter && screen.footer);
  const isComposite = hasHeader || hasFooter;

  if (!isComposite) {
    return `
      <img class="viewer-current-img" src="${screen.image}" alt="${screen.name}" loading="lazy">
      <button class="screen-expand" aria-label="View full screen">
        <i data-lucide="maximize-2"></i>
      </button>
    `;
  }

  return `
    <div class="screen-stack">
      ${hasHeader ? `<img class="screen-stack-header" src="${screen.header}" alt="">` : ''}
      <div class="screen-stack-scroll">
        <img class="screen-stack-middle" src="${screen.image}" alt="${screen.name}" loading="lazy">
      </div>
      ${hasFooter ? `<img class="screen-stack-footer" src="${screen.footer}" alt="">` : ''}
    </div>
    <button class="screen-expand" aria-label="View full screen">
      <i data-lucide="maximize-2"></i>
    </button>
  `;
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
            <div class="screen-frame-body"></div>
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

function wireScreenPanel(p, pf, list, isMobile) {
  const panel = document.querySelector(`.screens-viewer-panel[data-platform="${pf}"]`);
  if (!panel) return;

  const bodyEl    = panel.querySelector('.screen-frame-body');
  const nameEl    = panel.querySelector('.viewer-name');
  const descEl    = panel.querySelector('.viewer-desc');
  const indexEl   = panel.querySelector('.viewer-index');
  const addressEl = panel.querySelector('.sf-address-text');
  const squares   = panel.querySelectorAll('.next-square');

  function showScreen(i) {
    const s = list[i];

    bodyEl.innerHTML = renderFrameBodyHTML(s, isMobile);
    if (window.lucide) lucide.createIcons();

    const expandBtn = bodyEl.querySelector('.screen-expand');
    if (expandBtn) {
      expandBtn.dataset.image  = s.image;
      expandBtn.dataset.alt    = s.name;
      expandBtn.dataset.header = s.header || '';
      expandBtn.dataset.footer = (isMobile && s.footer) ? s.footer : '';
    }

    nameEl.textContent = s.name;
    descEl.textContent = s.desc || '';
    indexEl.textContent = `Screen ${String(i + 1).padStart(2, '0')}`;
    if (addressEl) addressEl.textContent = addressFor(p, s);
    squares.forEach(sq => sq.classList.toggle('active', Number(sq.dataset.index) === i));
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
  const lightbox  = document.getElementById('lightbox');
  const stack     = document.getElementById('lightbox-stack');
  const closeBtn  = document.getElementById('lightbox-close');
  const zoomIn    = document.getElementById('lb-zoom-in');
  const zoomOut   = document.getElementById('lb-zoom-out');
  const zoomReset = document.getElementById('lb-zoom-reset');
  const levelEl   = document.getElementById('lb-zoom-level');
  if (!lightbox || !stack) return;

  const MIN = 0.5, MAX = 4, STEP = 1.25;
  let z = 1;        // viewer's zoom, on top of the "fit" size
  let fit = 1;      // scale that fits the design on screen when first opened
  let natW = 0;     // natural (real pixel) width of the design

  // Opens at the same size as before (never enlarged past its real pixel
  // size, so it stays as sharp as the file allows). Zoom in/out from there.
  function applySize(anchor) {
    const ax = anchor ? anchor.x : lightbox.clientWidth / 2;
    const ay = anchor ? anchor.y : lightbox.clientHeight / 2;
    const rx = (lightbox.scrollLeft + ax) / Math.max(lightbox.scrollWidth, 1);
    const ry = (lightbox.scrollTop  + ay) / Math.max(lightbox.scrollHeight, 1);

    stack.style.width = `${natW * fit * z}px`;
    levelEl.textContent = `${Math.round(fit * z * 100)}%`;
    zoomIn.disabled  = z >= MAX - 0.001;
    zoomOut.disabled = z <= MIN + 0.001;

    lightbox.scrollLeft = rx * lightbox.scrollWidth - ax;
    lightbox.scrollTop  = ry * lightbox.scrollHeight - ay;
  }

  function zoomBy(factor, anchor) {
    z = Math.min(MAX, Math.max(MIN, z * factor));
    applySize(anchor);
  }
  function resetZoom() {
    z = 1; applySize();
    lightbox.scrollTop = 0; lightbox.scrollLeft = 0;
  }

  async function open(trigger) {
    const parts = [trigger.dataset.header, trigger.dataset.image, trigger.dataset.footer].filter(Boolean);
    const mainIdx = parts.indexOf(trigger.dataset.image);
    stack.innerHTML = parts.map((src) => `<img src="${src}" alt="${trigger.dataset.alt || ''}">`).join('');
    stack.classList.add('loading');
    lightbox.classList.add('open');
    window.dispatchEvent(new CustomEvent('lightbox-opened')); // scroll-hint toast steps aside for this

    const imgs = Array.from(stack.querySelectorAll('img'));
    await Promise.all(imgs.map((img) => (img.decode ? img.decode().catch(() => {}) : Promise.resolve())));
    if (!lightbox.classList.contains('open')) return;

    // header/footer are scaled to the middle image's width
    natW = imgs[mainIdx].naturalWidth || imgs[mainIdx].width || 1;
    const totalH = imgs.reduce((sum, img) => sum + (img.naturalHeight || 0) * natW / (img.naturalWidth || natW), 0);

    const maxW = Math.min(900, window.innerWidth * 0.9);
    const maxH = window.innerHeight * 0.86;
    fit = Math.min(1, maxW / natW);
    if (natW >= totalH) fit = Math.min(fit, maxH / totalH); // wide/square: fit fully; tall: scroll

    z = 1;
    stack.style.width = `${natW * fit}px`;
    levelEl.textContent = `${Math.round(fit * 100)}%`;
    zoomIn.disabled = false; zoomOut.disabled = false;
    lightbox.scrollTop = 0; lightbox.scrollLeft = 0;
    stack.classList.remove('loading');
  }

  function close() {
    lightbox.classList.remove('open');
    stack.innerHTML = '';
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.screen-expand');
    if (trigger) open(trigger);
  });

  zoomIn.addEventListener('click',  () => zoomBy(STEP));
  zoomOut.addEventListener('click', () => zoomBy(1 / STEP));
  zoomReset.addEventListener('click', resetZoom);
  stack.addEventListener('dblclick', (e) => {
    if (z === 1) { z = 2; applySize({ x: e.clientX, y: e.clientY }); } else resetZoom();
  });

  // Ctrl + wheel (also trackpad pinch) zooms; a plain wheel just scrolls
  lightbox.addEventListener('wheel', (e) => {
    if (!e.ctrlKey) return;
    e.preventDefault();
    zoomBy(e.deltaY < 0 ? STEP : 1 / STEP, { x: e.clientX, y: e.clientY });
  }, { passive: false });

  closeBtn?.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === '+' || e.key === '=') zoomBy(STEP);
    else if (e.key === '-') zoomBy(1 / STEP);
    else if (e.key === '0') resetZoom();
  });
}


/* ──────────────────────────────────────────────
   7b. SCROLL HINT — a small pop-up that slides up from the bottom of the
   screen ONLY while the Designs section is on screen, telling visitors the
   design inside the device can be scrolled. It goes away when they scroll
   inside the device, press the X, leave the section, or after ~9 seconds,
   and it never shows for screens that have nothing to scroll.
────────────────────────────────────────────── */
function initScrollHint() {
  const section = document.getElementById('section-designs');
  const viewer  = document.getElementById('screens-viewer');
  if (!section || !viewer) return;

  let inView = false;      // is the Designs section currently on screen?
  let done = false;        // dismissed for the CURRENT viewing of the section —
                            // reset every time the section is scrolled back into
                            // view, or the visitor switches to a new screen, so
                            // the hint reappears each time rather than just once.
  let toast = null, hideTimer = null, showTimer = null;
  let activeScroller = null, activeFrame = null;

  // The lightbox has its own zoom toolbar in the same corner — don't show
  // both at once while it's open.
  window.addEventListener('lightbox-opened', () => { done = true; hide(); });

  function currentScroller() {
    return viewer.querySelector('.screens-viewer-panel.active .screen-stack-scroll');
  }

  function detach() {
    if (activeScroller) {
      ['scroll', 'wheel', 'touchmove'].forEach((ev) => activeScroller.removeEventListener(ev, onUserScrolled));
    }
    if (activeFrame) activeFrame.classList.remove('hint-pulse');
    activeScroller = activeFrame = null;
  }

  function hide() {
    clearTimeout(hideTimer); clearTimeout(showTimer);
    detach();
    if (toast) toast.classList.remove('show');
  }

  function onUserScrolled() { done = true; hide(); }

  function build() {
    toast = document.createElement('div');
    toast.className = 'scroll-toast';
    toast.setAttribute('role', 'status');
    toast.innerHTML =
      '<span class="scroll-toast-icon"><i data-lucide="mouse"></i></span>' +
      '<span class="scroll-toast-text"><strong>Scroll inside the device</strong> to view more of this screen</span>' +
      '<button type="button" class="scroll-toast-close" aria-label="Dismiss hint"><i data-lucide="x"></i></button>';
    document.body.appendChild(toast);
    if (window.lucide) lucide.createIcons();
    toast.querySelector('.scroll-toast-close').addEventListener('click', () => { done = true; hide(); });
  }

  function tryShow() {
    if (done || !inView) return;
    const scroller = currentScroller();
    if (!scroller) return;                       // this screen doesn't scroll

    const img = scroller.querySelector('img');
    if (img && !img.complete) { img.addEventListener('load', () => setTimeout(tryShow, 200), { once: true }); return; }
    if (scroller.scrollHeight <= scroller.clientHeight + 4) return; // nothing to scroll

    if (!toast) build();
    detach();
    activeScroller = scroller;
    activeFrame = scroller.closest('.screen-frame');
    if (activeFrame) activeFrame.classList.add('hint-pulse');
    ['scroll', 'wheel', 'touchmove'].forEach((ev) => scroller.addEventListener(ev, onUserScrolled, { passive: true }));

    requestAnimationFrame(() => toast.classList.add('show'));
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hide, 9000);
  }

  // Switching tab / screen: treat it as a fresh view of that screen, so the
  // hint can show again even if it was already dismissed on a prior screen.
  section.addEventListener('click', (e) => {
    if (e.target.closest('.platform-tab, .next-square')) {
      hide();
      done = false;
      showTimer = setTimeout(tryShow, 500);
    }
  });

  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const wasInView = inView;
      inView = entry.isIntersecting;
      if (inView && !wasInView) {
        // Freshly scrolled the section into view — reset so the hint can
        // show again, even if it was dismissed the last time they saw it.
        done = false;
        clearTimeout(showTimer);
        showTimer = setTimeout(tryShow, 700);
      } else if (!inView) {
        hide();
      }
    });
  }, { threshold: 0.3 }).observe(viewer);
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
