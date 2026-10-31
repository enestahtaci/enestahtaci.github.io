(() => {
  'use strict';
  const projects = window.PORTFOLIO || [], english = window.SITE_EN || {ui:{},projects:{},artwork:{}};
  let lang='tr',renderProjects=()=>{},renderDetail=()=>{};
  try{lang=localStorage.getItem('et-language')==='en'?'en':'tr';}catch{}
  const requested=new URLSearchParams(location.search).get('lang');if(['tr','en'].includes(requested))lang=requested;
  const L=(tr,en)=>lang==='en'?en:tr;
  const translated=project=>lang==='en'?{...project,...english.projects[project.id]}:project;
  const categoryLabel=value=>lang==='en'?({'Arayüz':'Interface','Veri':'Data'}[value]||value):value;
  const staticText=[...document.querySelectorAll('[data-i18n]')].map(el=>({el,key:el.dataset.i18n,tr:el.innerHTML}));
  const staticAttributes=[];for(const [data,attribute] of [['i18nAria','aria-label'],['i18nPlaceholder','placeholder'],['i18nContent','content']])for(const el of document.querySelectorAll('[data-'+data.replace(/[A-Z]/g,c=>'-'+c.toLowerCase())+']'))staticAttributes.push({el,attribute,key:el.dataset[data],tr:el.getAttribute(attribute)});
  function applyLanguage(){
    document.documentElement.lang=lang;
    for(const {el,key,tr} of staticText)el.innerHTML=lang==='en'?(english.ui[key]??tr):tr;
    for(const {el,attribute,key,tr} of staticAttributes)el.setAttribute(attribute,lang==='en'?(english.ui[key]??tr):tr);
    const button=document.getElementById('language-button');if(button){button.hidden=false;button.textContent=lang==='en'?'TR':'EN';button.setAttribute('aria-label',L('İngilizceye geç','Switch to Turkish'));}
    if(document.getElementById('project-grid'))document.title=L('Enes Tahtacı — Projeler & Denemeler','Enes Tahtacı — Projects & Experiments');
    if(document.body.dataset.page==='404')document.title=L('Sayfa bulunamadı — Enes Tahtacı','Page not found — Enes Tahtacı');
    renderProjects();renderDetail();setTheme(document.documentElement.dataset.theme);
    try{localStorage.setItem('et-language',lang);}catch{}
  }
  document.getElementById('language-button')?.addEventListener('click',()=>{lang=lang==='tr'?'en':'tr';const url=new URL(location.href);if(url.searchParams.has('lang')){url.searchParams.set('lang',lang);history.replaceState(null,'',url);}applyLanguage();});
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const external = value => { try { const url = new URL(value); return url.protocol === 'https:' ? escape(url.href) : ''; } catch { return ''; } };
  const local = value => { try { if (!value || /^(?:[a-z]+:|\/\/)/i.test(value)) return ''; const url = new URL(value, window.location.href); return url.origin === window.location.origin ? escape(value) : ''; } catch { return ''; } };
  const status = project => `<span class="status ${project.status === 'planned' ? 'planned' : ''}"><span class="dot"></span>${project.status === 'planned' ? L('Planlandı','Planned') : project.status === 'live' ? L('Yayında','Live') : L('Geliştiriliyor','In progress')}</span>`;
  const tags = project => `<ul class="tags" aria-label="${L('Teknolojiler','Technologies')}">${project.tags.map(tag => `<li>${escape(tag)}</li>`).join('')}</ul>`;
  const artwork = project => {
    const image = local(project.image);
    if (image) return `<div class="project-art art-screenshot"><img class="project-preview" src="${image}" alt="${escape(project.imageAlt || project.title)}" width="1366" height="768" loading="lazy" decoding="async"></div>`;
    const illustrations = {
      music: '<div class="music-frame"><div class="music-head"><strong>vibey.</strong><small>KEŞFET / DİNLE</small></div><div class="music-albums"><span class="album"></span><span class="album"></span><span class="album"></span></div><div class="music-track"><span>Ruh haline bir albüm bul.</span><span>↗</span></div></div>',
      portfolio: '<div class="mini-site"><div class="mini-nav"><strong>et.</strong><span>PROJELER & DENEMELER</span></div><div class="mini-body"><strong>Bir fikir.<br>Bir proje.<br>Bir adım daha.</strong><span>&lt;/&gt;</span></div><div class="mini-line"></div><div class="mini-line short"></div></div>',
      board: '<div class="board-frame"><div class="mock-heading">Biraz düzen, daha çok odak.</div><div class="board-columns"><div class="board-col"><span>Yapılacak · 2</span><div class="task"></div><div class="task"></div></div><div class="board-col"><span>Devam · 1</span><div class="task"></div></div><div class="board-col"><span>Tamam · 1</span><div class="task"></div></div></div></div>',
      data: '<div class="data-frame"><div class="data-head"><strong>Verinin anlattıkları.</strong><span>KEŞFET ↗</span></div><div class="bars"><i style="--bar:35%"></i><i style="--bar:57%"></i><i style="--bar:44%"></i><i style="--bar:73%"></i><i style="--bar:61%"></i><i style="--bar:91%"></i></div><div class="chart-caption">TEMSİLİ GÖRSEL / GERÇEK VERİ İÇERMEZ</div></div>'
    };
    const visual = Object.prototype.hasOwnProperty.call(illustrations, project.visual) ? project.visual : 'portfolio';
    let illustration=illustrations[visual];if(lang==='en')for(const [tr,en] of Object.entries(english.artwork))illustration=illustration.replaceAll(tr,en);
    return `<div class="project-art art-${visual}" aria-hidden="true">${illustration}</div>`;
  };
  const card = project => {
    const url = `project.html?id=${encodeURIComponent(project.id)}`, launch = local(project.app);
    return `<article class="project-card"><a class="visual-link" href="${url}" aria-label="${escape(project.title)} ${L('proje detayını aç','project details')}">${artwork(project)}</a><div class="card-topline"><span class="card-label">${escape(project.number)} / ${escape(project.label)}</span>${status(project)}</div><h3 class="card-title"><a href="${url}">${escape(project.title)}</a><span class="card-arrow" aria-hidden="true">↗</span></h3><p class="card-description">${escape(project.description)}</p>${tags(project)}${launch ? `<div class="card-actions"><a class="button primary" href="${launch}">${L('Uygulamayı aç','Open app')} <span aria-hidden="true">↗</span></a></div>` : ''}</article>`;
  };
  let savedTheme = null;
  try { savedTheme = localStorage.getItem('et-theme'); } catch {}
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const themeButton = document.querySelector('.theme-button');
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    if (themeButton) {
      themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
      themeButton.setAttribute('aria-label', theme === 'dark' ? L('Açık temaya geç','Switch to light theme') : L('Koyu temaya geç','Switch to dark theme'));
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#171d19' : '#f7f6f2');
  }
  setTheme(['light', 'dark'].includes(savedTheme) ? savedTheme : systemTheme.matches ? 'dark' : 'light');
  if (themeButton) {
    themeButton.hidden = false;
    themeButton.addEventListener('click', () => {
      savedTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(savedTheme);
      try { localStorage.setItem('et-theme', savedTheme); } catch {}
    });
  }
  systemTheme.addEventListener('change', event => { if (!savedTheme) setTheme(event.matches ? 'dark' : 'light'); });
  document.querySelectorAll('.year').forEach(element => { element.textContent = String(new Date().getFullYear()); });
  const grid = document.getElementById('project-grid');
  if (grid) {
    document.querySelector('.project-tools').hidden = false;

    let category = 'all';
    const search = document.getElementById('project-search');
    const normalize = value => value.toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ı/g, 'i');
    renderProjects = () => {
      document.getElementById('project-total').textContent = String(projects.length);
      const query = normalize(search.value.trim());
      const visible = projects.map(translated).filter(project => (category === 'all' || project.category === category) && normalize([project.title, project.description, project.label, project.category, categoryLabel(project.category), ...project.tags].join(' ')).includes(query));
      grid.innerHTML = visible.map(card).join('');
      document.getElementById('empty-state').hidden = visible.length !== 0;
      document.getElementById('result-count').textContent = L(`${visible.length} proje gösteriliyor.`,`${visible.length} ${visible.length===1?'project':'projects'} shown.`);
    }
    document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
      category = button.dataset.filter;
      document.querySelectorAll('[data-filter]').forEach(item => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      renderProjects();
    }));
    search.addEventListener('input', renderProjects);
    renderProjects();
  }
  const detail = document.getElementById('project-detail');
  renderDetail = () => {
    if(!detail)return;
    const id = new URLSearchParams(window.location.search).get('id');
    const source = projects.find(item => item.id === id), project=source&&translated(source);
    if (!project) {
      document.title = L('Proje bulunamadı — Enes Tahtacı','Project not found — Enes Tahtacı');
      detail.innerHTML = `<section class="missing-project"><p class="eyebrow">${L('BU ADRESTE BİR PROJE YOK','NO PROJECT AT THIS ADDRESS')}</p><h1>${L('Başka bir projeye bakalım.','Let’s explore another project.')}</h1><p>${L('Bağlantı eksik veya proje kaldırılmış olabilir.','The link may be incomplete, or the project may have been removed.')}</p><a class="button primary" href="index.html#projeler">${L('Projeleri keşfet','Explore projects')} ↗</a></section>`;
      return;
    }
    document.title = `${project.title} — Enes Tahtacı`;
    document.querySelector('meta[name="description"]').content = project.description;
    const list = items => `<ul class="detail-list">${items.map(item => `<li>${escape(item)}</li>`).join('')}</ul>`;
    const repo = external(project.repo), launch = local(project.app), demo = launch || external(project.demo);
    detail.innerHTML = `<section class="detail-hero"><div><div class="detail-heading-meta"><p class="eyebrow">${escape(project.number)} / ${escape(categoryLabel(project.category))}</p>${status(project)}</div><h1>${escape(project.title)}</h1><p class="detail-intro">${escape(project.intro)}</p>${tags(project)}${repo || demo ? `<div class="detail-actions">${repo ? `<a class="button primary" href="${repo}" target="_blank" rel="noopener noreferrer">${L('Kaynak kod','Source code')} <span aria-hidden="true">↗</span><span class="sr-only">${L('(yeni sekmede)','(opens in a new tab)')}</span></a>` : ''}${demo ? `<a class="button primary" href="${demo}" ${launch ? '' : 'target="_blank" rel="noopener noreferrer"'}>${launch ? L('Uygulamayı aç','Open app') : L('Canlı demo','Live demo')} <span aria-hidden="true">↗</span>${launch ? '' : `<span class="sr-only">${L('(yeni sekmede)','(opens in a new tab)')}</span>`}</a>` : ''}</div>` : ''}</div>${artwork(project)}</section><div class="detail-grid"><div class="detail-prose"><section><h2>${L('Çıkış noktası','Starting point')}</h2><p>${escape(project.problem)}</p></section><section><h2>${L('Yaklaşım','Approach')}</h2><p>${escape(project.approach)}</p></section>${project.features.length ? `<section><h2>${L('Mevcut özellikler','Current features')}</h2>${list(project.features)}</section>` : ''}</div><aside class="detail-sidebar"><h2>${L('Sıradaki adımlar','Next steps')}</h2>${list(project.next)}<p class="detail-note">${escape(project.note)}</p></aside></div>`;
  };
  applyLanguage();
})();
