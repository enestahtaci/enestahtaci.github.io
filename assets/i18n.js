window.SITE_EN = {
  ui: {
    skip: 'Skip to content', homeAria: 'Enes Tahtacı home', navAria: 'Main navigation', projects: 'Projects', about: 'About', contact: 'Contact',
    heroEyebrow: '<span class="dot"></span> MY PERSONAL WORKSPACE', heroTitle: 'An idea.<br>A project.<br><span>A step forward.</span>',
    heroDescription: "Hi, I’m Enes. This is where I bring together the things I build, the ideas I explore, and the projects I’ll keep improving.",
    explore: 'Explore projects <span aria-hidden="true">↘</span>', workbenchAria: 'The portfolio’s progress', benchTop: 'workbench / 001', benchLabel: 'COLLECT. EXPLORE. IMPROVE.', benchCaption: 'Small beginnings,<br>ideas built on top.', benchBottom: '<span class="dot"></span> This page is a project too.', paperNote: 'a little better<br>with every version. ↗',
    stripLabel: 'FROM IDEA TO SCREEN', disciplines: 'Web · Interface · Data', below: 'Discover below <span aria-hidden="true">↓</span>',
    projectsEyebrow: '01 / PROJECTS', projectsTitle: 'What I’m working on<span class="accent">.</span>', projectsNote: 'Finished work and<br>ideas just getting started.', categoryAria: 'Project category', all: 'All <span id="project-total"></span>', interface: 'Interface', data: 'Data', search: 'Search projects', searchPlaceholder: 'Search projects or technologies', empty: 'No projects match your search. Try another word or category.', footnote: '<span class="dot"></span> This is a growing archive, not a finish line.',
    aboutEyebrow: '02 / ABOUT', aboutTitle: 'Learning by doing,<br>moving forward<br><span class="accent">by building.</span>', aboutLead: 'One of the best ways to learn something is to make something with it.', aboutBody: 'I’m building this page as a place to revisit my projects, improve them, and make room for new ideas. Each project page explains what I set out to do, how I approached it, and what comes next.', aboutEnd: 'A small beginning for now. Over time, there will be more projects, more experiments, and more notes from the process.', githubProfile: 'Explore my GitHub profile <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span>',
    contactEyebrow: '03 / CONTACT', contactTitle: 'The next idea<br>could begin with a hello.', meetGithub: 'Find me on GitHub <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span>', footer: 'Started with curiosity. Grown through making.', top: 'Back to top ↑', allProjects: '← Back to all projects', home: 'Home ↗',
    homeMeta: 'Projects, web experiments, and development ideas by Enes Tahtacı. Explore the process behind each project.', detailMeta: 'A project by Enes Tahtacı: its purpose, approach, and next steps.',
    errorEyebrow: '404 / PAGE NOT FOUND', errorTitle: 'Nothing here just yet.', errorDescription: 'The address may have changed, or the page may have been removed.', errorHome: 'Back to home ↗'
  },
  artwork: {
    'KEŞFET / DİNLE': 'DISCOVER / LISTEN', 'Ruh haline bir albüm bul.': 'Find an album for your mood.', 'PROJELER & DENEMELER': 'PROJECTS & EXPERIMENTS', 'Bir fikir.<br>Bir proje.<br>Bir adım daha.': 'An idea.<br>A project.<br>A step forward.', 'Biraz düzen, daha çok odak.': 'A little order, a little more focus.', 'Yapılacak · 2': 'To do · 2', 'Devam · 1': 'Doing · 1', 'Tamam · 1': 'Done · 1', 'Verinin anlattıkları.': 'Stories in the data.', 'KEŞFET ↗': 'EXPLORE ↗', 'TEMSİLİ GÖRSEL / GERÇEK VERİ İÇERMEZ': 'ILLUSTRATION / NOT ACTUAL DATA'
  },
  projects: {
    grain: {
      imageAlt: 'Grainy Gradient Studio: gradient canvas and categorized preset library', label: 'Color and texture studio',
      description: 'Create gradients with 1,262 presets and filters for color and mood. Add mesh, layers, and motion; share images, video, or JSON.',
      intro: 'A browser-based studio for exploring colors and textures, creating your own gradients, and sharing your designs.',
      problem: 'Bring harmonious colors, texture experiments, and image exports in different sizes into one workspace.',
      approach: 'Everything runs in your browser. Color similarity uses OKLab, and photo palettes are extracted on your device. Designs can be shared as JSON and opened again for editing.',
      features: ['1,262 presets categorized by 14 moods and 11 color families', 'Find designs close to a chosen color or photo palette', 'Bézier mesh, up to four layers, and seven texture types', 'A/B comparison and website, card, and poster previews', 'Per-point motion and keyframes', 'PNG, JPEG, WebP, SVG, and WebM in supported browsers', 'Import and export JSON files or text', 'Presets and thumbnails keep your selected canvas size'],
      next: ['Expand testing on Safari, Firefox, and physical phones', 'Add new palette families and compositions'],
      note: 'No account or installation required. Photos are processed on your device, and favorites stay in your browser. Video features depend on browser support.'
    },
    vibey: {
      label: 'Music discovery', description: 'A web project bringing album discovery, lyrics, and small music games together.',
      intro: 'A music discovery experience with albums, songs, Turkish translations, and small games to test your music knowledge.',
      problem: 'Bring album discovery and song content into one interface, so you can explore without getting lost across pages.',
      approach: 'Static pages use a central JSON catalog. Browser-side JavaScript handles search, favorites, and game interactions.',
      features: ['Album, song, and artist search', 'Favorites stored in the browser', 'Lyrics and Turkish translations', 'Album cover quiz'],
      next: ['Add real screenshots to the portfolio', 'Link the project’s repository and live demo', 'Review mobile use and keyboard access'],
      note: 'This description is based on the existing local project files. Live demo and source code links have not been added yet.'
    },
    portfolyo: {
      title: 'Personal portfolio', label: 'A space of my own', description: 'My personal website for projects, work in progress, and ideas to explore next.',
      intro: 'A personal archive that starts with one page and grows with every new project.',
      problem: 'Go beyond a list of names and links to explain what each project does and how it was developed.',
      approach: 'A structure without a build tool. Project information lives in one JavaScript file, shared by the cards and detail pages.',
      features: ['Search and category filters', 'A separate detail URL for every project', 'Light and dark themes', 'Responsive layout', 'Turkish and English, with a remembered language preference'],
      next: ['Personalize the About section', 'Add new projects and development notes'], note: 'This portfolio grows over time as its content and design evolve.'
    },
    'gorev-panosu': {
      title: 'Task board', label: 'An idea for later', description: 'A project idea for organizing everyday work into to-do, in-progress, and completed tasks.', tags: ['JavaScript', 'LocalStorage', 'Accessibility'],
      intro: 'Turning a small need into a useful tool: tracking your tasks on a single board.',
      problem: 'See your tasks and progress without a complicated account setup.',
      approach: 'The first version is planned around browser-stored tasks, a three-column board, and keyboard-accessible status controls.',
      features: [], next: ['Design task creation and editing', 'Store tasks in the browser', 'Add status changes and filtering'],
      note: 'This project has not been developed yet. The card represents an idea that could be explored later.'
    },
    'veri-atolyesi': {
      title: 'Data workshop', label: 'An idea for later', description: 'An idea for a small visualization project focused on exploring a dataset through readable charts.',
      intro: 'An experiment in revealing the stories behind numbers through clear, interactive charts.',
      problem: 'Understand changes and patterns in a table without reading every row.',
      approach: 'Select a small, openly licensed dataset, then build category and time filters alongside charts and a text summary.',
      features: [], next: ['Choose a dataset and a question to answer', 'Clean the data and prepare it as CSV', 'Build charts, filters, and accessible text summaries'],
      note: 'This project has not been developed yet. The chart on its card is an illustration, not a result based on real data.'
    }
  }
};
