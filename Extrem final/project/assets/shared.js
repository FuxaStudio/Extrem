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
    <nav class="nav" id="site-nav">
      <div class="container nav-inner">
        <a class="nav-logo" href="index.html">
          <img class="se-logo" src="../assets/Images/logo.png" alt="Svídnický Extrém" style="height: 90px; width: auto; max-width: 350px; display: block; object-fit: contain; flex-shrink: 0; margin: -16px 0;">
          <span class="wordmark">Svídnický Extrém</span>
        </a>
        <div class="nav-links">
          ${linksHTML}
        </div>
        <a class="nav-cta" href="treninky.html">
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
      <a href="treninky.html" class="btn btn-primary mobile-cta">Přidej se <span class="arr">→</span></a>
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
          <div class="footer-big">Běž. Skoč. Přelez.<br>A<span>/</span> zase znova.</div>
          <a href="treninky.html" class="btn btn-primary">Přijď na trénink <span class="arr">→</span></a>
        </div>
        <div class="footer-grid">
          <div>
            <h4>Kontakt</h4>
            <ul style="font-family:var(--body); font-size:15px; text-transform:none; letter-spacing:0;">
              <li style="font-family:var(--body);">Svídnice, 538 24, Pardubický kraj</li>
              <li style="font-family:var(--body);">info@svidnicky-extrem.cz</li>
              <li style="font-family:var(--body);">+420 777 000 000</li>
            </ul>
          </div>
          <div>
            <h4>Stránky</h4>
            <ul>
              <li><a href="treninky.html">Tréninky</a></li>
              <li><a href="zavody.html">Závod</a></li>
              <li><a href="akce.html">Akce</a></li>
              <li><a href="galerie.html">Galerie</a></li>
              <li><a href="kontakt.html">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h4>Sledujte</h4>
            <a href="https://www.facebook.com/p/Sv%C3%ADdnick%C3%BD-Extr%C3%A9m-100063560024130/" target="_blank" rel="noopener">Facebook</a>
          </div>
        </div>
        <div class="footer-bottom">
          <div>© 2026 Svídnický Extrém, všechna práva vyhrazena</div>
          <div>Designed by <a href="https://fuxastudio.cz/" target="_blank" rel="noopener" style="color: var(--paper); border-bottom: 1px solid rgba(245,243,238,0.4); padding-bottom: 1px; transition: color .2s, border-color .2s;" onmouseover="this.style.color='var(--accent)';this.style.borderColor='var(--accent)'" onmouseout="this.style.color='var(--paper)';this.style.borderColor='rgba(245,243,238,0.4)'">FuxaStudio</a></div>
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
    }
  };
})();
