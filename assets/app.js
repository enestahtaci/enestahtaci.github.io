(() => {
  'use strict';
  const projects = window.PORTFOLIO || [];
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const external = value => { try { const url = new URL(value); return url.protocol === 'https:' ? escape(url.href) : ''; } catch { return ''; } };
  const status = project => `<span class="status ${project.status === 'planned' ? 'planned' : ''}"><span class="dot"></span>${project.status === 'planned' ? 'Planlandı' : 'Geliştiriliyor'}</span>`;
  const tags = project => `<ul class="tags" aria-label="Teknolojiler">${project.tags.map(tag => `<li>${escape(tag)}</li>`).join('')}</ul>`;
  const artwork = project => {
    const illustrations = {
      music: '<div class="music-frame"><div class="music-head"><strong>vibey.</strong><small>KEŞFET / DİNLE</small></div><div class="music-albums"><span class="album"></span><span class="album"></span><span class="album"></span></div><div class="music-track"><span>Ruh haline bir albüm bul.</span><span>↗</span></div></div>',
      portfolio: '<div class="mini-site"><div class="mini-nav"><strong>et.</strong><span>PROJELER & DENEMELER</span></div><div class="mini-body"><strong>Bir fikir.<br>Bir proje.<br>Bir adım daha.</strong><span>&lt;/&gt;</span></div><div class="mini-line"></div><div class="mini-line short"></div></div>',
      board: '<div class="board-frame"><div class="mock-heading">Biraz düzen, daha çok odak.</div><div class="board-columns"><div class="board-col"><span>Yapılacak · 2</span><div class="task"></div><div class="task"></div></div><div class="board-col"><span>Devam · 1</span><div class="task"></div></div><div class="board-col"><span>Tamam · 1</span><div class="task"></div></div></div></div>',
      data: '<div class="data-frame"><div class="data-head"><strong>Verinin anlattıkları.</strong><span>KEŞFET ↗</span></div><div class="bars"><i style="--bar:35%"></i><i style="--bar:57%"></i><i style="--bar:44%"></i><i style="--bar:73%"></i><i style="--bar:61%"></i><i style="--bar:91%"></i></div><div class="chart-caption">TEMSİLİ GÖRSEL / GERÇEK VERİ İÇERMEZ</div></div>'
    };
    const visual = Object.prototype.hasOwnProperty.call(illustrations, project.visual) ? project.visual : 'portfolio';
    return `<div class="project-art art-${visual}" aria-hidden="true">${illustrations[visual]}</div>`;
  };
  const card = project => {
    const url = `project.html?id=${encodeURIComponent(project.id)}`;
    return `<article class="project-card"><a class="visual-link" href="${url}" aria-label="${escape(project.title)} proje detayını aç">${artwork(project)}</a><div class="card-topline"><span class="card-label">${escape(project.number)} / ${escape(project.label)}</span>${status(project)}</div><h3 class="card-title"><a href="${url}">${escape(project.title)}</a><span class="card-arrow" aria-hidden="true">↗</span></h3><p class="card-description">${escape(project.description)}</p>${tags(project)}</article>`;
  };
  let savedTheme = null;
  try { savedTheme = localStorage.getItem('et-theme'); } catch {}
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const themeButton = document.querySelector('.theme-button');
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    if (themeButton) {
      themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
      themeButton.setAttribute('aria-label', theme === 'dark' ? 'Açık temaya geç' : 'Koyu temaya geç');
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
    document.getElementById('project-total').textContent = String(projects.length);
    let category = 'all';
    const search = document.getElementById('project-search');
    const normalize = value => value.toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ı/g, 'i');
    function render() {
      const query = normalize(search.value.trim());
      const visible = projects.filter(project => (category === 'all' || project.category === category) && normalize([project.title, project.description, project.category, ...project.tags].join(' ')).includes(query));
      grid.innerHTML = visible.map(card).join('');
      document.getElementById('empty-state').hidden = visible.length !== 0;
      document.getElementById('result-count').textContent = `${visible.length} proje gösteriliyor.`;
    }
    document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
      category = button.dataset.filter;
      document.querySelectorAll('[data-filter]').forEach(item => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      render();
    }));
    search.addEventListener('input', render);
    render();
  }
  const detail = document.getElementById('project-detail');
  if (detail) {
    const id = new URLSearchParams(window.location.search).get('id');
    const project = projects.find(item => item.id === id);
    if (!project) {
      document.title = 'Proje bulunamadı — Enes Tahtacı';
      detail.innerHTML = '<section class="missing-project"><p class="eyebrow">BU ADRESTE BİR PROJE YOK</p><h1>Başka bir projeye bakalım.</h1><p>Bağlantı eksik veya proje kaldırılmış olabilir.</p><a class="button primary" href="index.html#projeler">Projeleri keşfet ↗</a></section>';
      return;
    }
    document.title = `${project.title} — Enes Tahtacı`;
    document.querySelector('meta[name="description"]').content = project.description;
    const list = items => `<ul class="detail-list">${items.map(item => `<li>${escape(item)}</li>`).join('')}</ul>`;
    const repo = external(project.repo), demo = external(project.demo);
    detail.innerHTML = `<section class="detail-hero"><div><div class="detail-heading-meta"><p class="eyebrow">${escape(project.number)} / ${escape(project.category)}</p>${status(project)}</div><h1>${escape(project.title)}</h1><p class="detail-intro">${escape(project.intro)}</p>${tags(project)}${repo || demo ? `<div class="detail-actions">${repo ? `<a class="button primary" href="${repo}" target="_blank" rel="noopener noreferrer">Kaynak kod <span aria-hidden="true">↗</span><span class="sr-only">(yeni sekmede)</span></a>` : ''}${demo ? `<a class="button primary" href="${demo}" target="_blank" rel="noopener noreferrer">Canlı demo <span aria-hidden="true">↗</span><span class="sr-only">(yeni sekmede)</span></a>` : ''}</div>` : ''}</div>${artwork(project)}</section><div class="detail-grid"><div class="detail-prose"><section><h2>Çıkış noktası</h2><p>${escape(project.problem)}</p></section><section><h2>Yaklaşım</h2><p>${escape(project.approach)}</p></section>${project.features.length ? `<section><h2>Mevcut özellikler</h2>${list(project.features)}</section>` : ''}</div><aside class="detail-sidebar"><h2>Sıradaki adımlar</h2>${list(project.next)}<p class="detail-note">${escape(project.note)}</p></aside></div>`;
  }
})();
