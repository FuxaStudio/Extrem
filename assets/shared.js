// Shared nav + footer + utilities for Svídnický Extrém
(function(){


  function renderNav(active){
    const items = [
      {href: 'index.html', label: 'Domů', key: 'home'},
      {href: 'treninky.html', label: 'Tréninky', key: 'trainings'},
      {href: 'zavody.html', label: 'Závody', key: 'races'},
      {href: 'akce.html', label: 'Akce', key: 'events'},
      {href: 'galerie.html', label: 'Galerie', key: 'gallery'},
      {href: 'kontakt.html', label: 'Kontakt', key: 'contact'},
    ];
    const linksHTML = items.map(i =>
      `<a href="${i.href}" class="${i.key===active?'active':''}">${i.label}</a>`
    ).join('');
    const mobileLinksHTML = items.map(i =>
      `<a href="${i.href}" class="${i.key===active?'active':''}">${i.label}<span class="m-arr">↗</span></a>`
    ).join('');

    return `
    <svg id="se-crack-defs" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden;pointer-events:none">
      <defs>
        <filter id="wordmark-crack" x="-10%" y="-10%" width="120%" height="120%" color-interpolation-filters="sRGB">
          <feTurbulence type="turbulence" baseFrequency="0.11 0.14" numOctaves="2" seed="9" result="noise"/>
          <feColorMatrix type="saturate" values="0" in="noise" result="gray"/>
          <feComponentTransfer in="gray" result="cells">
            <feFuncR type="discrete" tableValues="0 1 1 1 1 1 1 1 1 1"/>
            <feFuncG type="discrete" tableValues="0 1 1 1 1 1 1 1 1 1"/>
            <feFuncB type="discrete" tableValues="0 1 1 1 1 1 1 1 1 1"/>
          </feComponentTransfer>
          <feColorMatrix type="matrix" in="cells" result="cellMask"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0.68 0 0 0 0.32"/>
          <feComposite in="SourceGraphic" in2="cellMask" operator="in"/>
        </filter>
      </defs>
    </svg>
    <nav class="nav" id="site-nav">
      <div class="container nav-inner">
        <a class="nav-logo" href="index.html">
          <img class="se-logo" src="assets/Images/logo2.jpeg" alt="Svídnický Extrém" style="height: 64px; width: auto; max-width: 320px; display: block; object-fit: contain; flex-shrink: 0;">
          <span class="wordmark">Svídnický Extrém</span>
        </a>
        <div class="nav-links">
          ${linksHTML}
        </div>
        <a class="nav-cta" href="kontakt.html#zavod">
          Přidej se <span class="arr">→</span>
        </a>
        <button class="nav-burger" id="nav-burger" aria-label="Otevřít menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div class="nav-mobile" id="nav-mobile" aria-hidden="true">
      <div class="mobile-links">
        ${mobileLinksHTML}
      </div>
      <a href="kontakt.html#zavod" class="btn btn-primary mobile-cta">Přidej se <span class="arr">→</span></a>
      <div class="mobile-meta">
        <span>Svídnický Extrém</span>
        <span>Svídnice · Pardubický kraj</span>
      </div>
    </div>`;
  }

  function renderFooter(){
    return `
    <footer class="footer">
      <div class="container">
        <div class="footer-hero">
          <div class="footer-big">Běž. Skoč. Přelez. A<span>/</span> zase znova.</div>
        </div>
        <div class="footer-grid">
          <div>
            <h4>Kontakt</h4>
            <ul style="font-family:var(--body); font-size:15px; text-transform:none; letter-spacing:0;">
              <li style="font-family:var(--body);">Svídnice, 538 24, Pardubický kraj</li>
              <li style="font-family:var(--body);">svidnickyextrem@seznam.cz</li>
              <li style="font-family:var(--body);">+420 777 052 023</li>
            </ul>
          </div>
          <div>
            <h4>Stránky</h4>
            <ul>
              <li><a href="index.html">Domů</a></li>
              <li><a href="treninky.html">Tréninky</a></li>
              <li><a href="zavody.html">Závody</a></li>
              <li><a href="akce.html">Akce</a></li>
              <li><a href="galerie.html">Galerie</a></li>
              <li><a href="kontakt.html">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h4>Sledujte nás</h4>
            <a href="https://www.facebook.com/p/Sv%C3%ADdnick%C3%BD-Extr%C3%A9m-100063560024130/" target="_blank" rel="noopener" class="footer-fb">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.93-1.956 1.883v2.272h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
              Facebook
            </a>
            <p style="margin-top:12px; font-family:var(--body); font-size:13px; color:rgba(245,243,238,0.45); line-height:1.5;">Novinky, fotky<br>a výsledky závodů.</p>
          </div>
        </div>
        <div class="footer-bottom">
          <div>© 2026 Svídnický Extrém, všechna práva vyhrazena</div>
          <div>Designed by <a href="https://fuxastudio.cz/" target="_blank" rel="noopener" class="footer-credit">FuxaStudio</a></div>
        </div>
      </div>
    </footer>`;
  }

  // Reveal on scroll
  function initReveal(){
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, {threshold: 0.12});
    els.forEach(el => io.observe(el));
  }

  // Countdown utility: data-countdown="2026-06-15T10:00:00"
  function initCountdowns(){
    const targets = document.querySelectorAll('[data-countdown]');
    const fmt = (n) => String(n).padStart(2, '0');
    function tick(){
      const now = Date.now();
      targets.forEach(el => {
        const t = new Date(el.dataset.countdown).getTime();
        const diff = Math.max(0, t - now);
        const days = Math.floor(diff / 86400000);
        const hours = Math.floor((diff % 86400000) / 3600000);
        const mins = Math.floor((diff % 3600000) / 60000);
        const secs = Math.floor((diff % 60000) / 1000);
        el.querySelector('[data-d]').textContent = fmt(days);
        el.querySelector('[data-h]').textContent = fmt(hours);
        el.querySelector('[data-m]').textContent = fmt(mins);
        const s = el.querySelector('[data-s]');
        if (s) s.textContent = fmt(secs);
      });
    }
    tick();
    setInterval(tick, 1000);
  }

  function initNav(){
    const nav = document.getElementById('site-nav');
    const burger = document.getElementById('nav-burger');
    const mobileMenu = document.getElementById('nav-mobile');

    function onScroll(){
      if (nav) nav.classList.toggle('nav--scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, {passive: true});
    onScroll();

    if (!burger || !mobileMenu) return;

    function openMenu(){
      burger.classList.add('open');
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Zavřít menu');
      mobileMenu.classList.add('open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu(){
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Otevřít menu');
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    burger.addEventListener('click', () => {
      burger.classList.contains('open') ? closeMenu() : openMenu();
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }

  function renderVlb() {
    return '<div id="se-vlb">' +
      '<button id="se-vlb-close">✕ Zavřít</button>' +
      '<iframe id="se-vlb-iframe" allowfullscreen></iframe>' +
      '<div id="se-vlb-title"></div>' +
      '</div>';
  }

  function initVideoLightbox() {
    document.body.insertAdjacentHTML('beforeend', renderVlb());
    const vlb = document.getElementById('se-vlb');
    const vlbIframe = document.getElementById('se-vlb-iframe');
    const vlbTitle = document.getElementById('se-vlb-title');
    let _scrollY = 0;

    function openVlb(driveId, title) {
      vlbIframe.src = 'https://drive.google.com/file/d/' + driveId + '/preview';
      vlbTitle.textContent = title;
      vlb.classList.add('open');
      _scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = '-' + _scrollY + 'px';
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
    }

    function closeVlb() {
      vlb.classList.remove('open');
      vlbIframe.src = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      window.scrollTo(0, _scrollY);
    }

    document.querySelectorAll('.drive-video').forEach(function(card) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', function() {
        openVlb(card.dataset.driveid, card.dataset.title);
      });
    });

    document.getElementById('se-vlb-close').addEventListener('click', closeVlb);
    vlb.addEventListener('click', function(e) { if (e.target === vlb) closeVlb(); });
    document.addEventListener('keydown', function(e) {
      if (vlb.classList.contains('open') && e.key === 'Escape') closeVlb();
    });
  }

  // Mount entry points
  window.SE = {
    mount(active){
      const navEl = document.getElementById('nav-mount');
      const footEl = document.getElementById('footer-mount');
      if (navEl) {
        navEl.insertAdjacentHTML('beforebegin', renderNav(active));
        navEl.style.display = 'none';
      } else {
        document.body.insertAdjacentHTML('afterbegin', renderNav(active));
      }
      if (footEl) footEl.innerHTML = renderFooter();
      initReveal();
      initCountdowns();
      initNav();
      initVideoLightbox();
    }
  };
})();
