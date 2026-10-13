// UI strings by language (document.documentElement.lang)
  var SITE_LANG = (document.documentElement.lang || 'fr').slice(0, 2);
  var SITE_T = ({
    fr: {
      menuOpen: 'Ouvrir le menu',
      menuClose: 'Fermer le menu',
      filmTitle: 'Film LIGHT ON TRI',
      newsInvalid: 'Entrez une adresse e-mail valide.',
      newsThanks: 'Merci ! Vérifiez votre boîte mail pour confirmer votre inscription.',
      regOpensIn: 'Ouverture dans',
      regDay: 'j', regHour: 'h', regMin: 'min',
      regOpenTag: 'Ouvert',
      regOpenMsg: 'Les inscriptions sont ouvertes.'
    },
    en: {
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      filmTitle: 'LIGHT ON TRI film',
      newsInvalid: 'Enter a valid email address.',
      newsThanks: 'Thanks! Check your inbox to confirm your subscription.',
      regOpensIn: 'Opens in',
      regDay: 'd', regHour: 'h', regMin: 'min',
      regOpenTag: 'Open',
      regOpenMsg: 'Registration is open.'
    },
    de: {
      menuOpen: 'Menü öffnen',
      menuClose: 'Menü schließen',
      filmTitle: 'LIGHT ON TRI Film',
      newsInvalid: 'Gib eine gültige E-Mail-Adresse ein.',
      newsThanks: 'Danke! Prüfe dein Postfach, um deine Anmeldung zu bestätigen.',
      regOpensIn: 'Öffnet in',
      regDay: 'T', regHour: 'Std', regMin: 'Min',
      regOpenTag: 'Offen',
      regOpenMsg: 'Die Anmeldung ist geöffnet.'
    }
  })[SITE_LANG] || null;
  function siteT(key, fallback) { return (SITE_T && SITE_T[key]) || fallback; }

  // Scroll reveal via IntersectionObserver (no scroll listeners)
  (function () {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var els = document.querySelectorAll('.reveal');
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(function (e) { e.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (e) { io.observe(e); });
  })();

  // Mobile nav toggle
  (function () {
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');
    function setOpen(open) {
      links.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? siteT('menuClose', 'Fermer le menu') : siteT('menuOpen', 'Ouvrir le menu'));
    }
    // Raccourcis de la barre du haut, repris en tête du menu mobile
    var quick = document.querySelector('.topbar-links');
    if (quick) {
      var box = document.createElement('div');
      box.className = 'nav-quick';
      quick.querySelectorAll('a').forEach(function (a) { box.appendChild(a.cloneNode(true)); });
      links.insertBefore(box, links.firstChild);
    }
    toggle.addEventListener('click', function () {
      setOpen(!links.classList.contains('open'));
    });
    // Menu mobile en accordéon : une flèche par onglet, un seul onglet ouvert à la fois
    links.querySelectorAll('.nav-item').forEach(function (item) {
      var drop = item.querySelector('.nav-drop');
      var parent = item.querySelector('.nav-parent');
      if (!drop || !parent) return;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'nav-acc';
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', siteT('menuSub', 'Afficher le détail de') + ' ' + parent.textContent.trim());
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      parent.insertAdjacentElement('afterend', btn);
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = !item.classList.contains('is-open');
        links.querySelectorAll('.nav-item.is-open').forEach(function (o) {
          o.classList.remove('is-open');
          var b = o.querySelector('.nav-acc'); if (b) b.setAttribute('aria-expanded', 'false');
        });
        item.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setOpen(false);
    });
  })();

  // Film: poster + custom play button, the YouTube player only loads on click
  (function () {
    var frame = document.querySelector('.film-frame');
    if (!frame) return;
    var btn = frame.querySelector('.film-play');
    btn.addEventListener('click', function () {
      var iframe = document.createElement('iframe');
      iframe.className = 'film-video';
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + frame.dataset.youtube + '?autoplay=1&rel=0&playsinline=1';
      iframe.title = siteT('filmTitle', 'Film LIGHT ON TRI');
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      frame.querySelector('.film-video').replaceWith(iframe);
      frame.classList.add('playing');
    });
  })();

  // Countdown to the next event on the 2027 calendar (Woippy**, dimanche 16 mai 2027 — heure de départ non publiée, décompte en jours jusqu'à minuit)
  (function () {
    var root = document.getElementById('countdown');
    if (!root) return;
    var target = new Date(2027, 4, 16, 0, 0, 0).getTime();
    var out = {
      d: root.querySelector('[data-cd="d"]'),
      h: root.querySelector('[data-cd="h"]'),
      m: root.querySelector('[data-cd="m"]'),
      s: root.querySelector('[data-cd="s"]')
    };
    function pad(n) { return (n < 10 ? '0' : '') + n; }
    function tick() {
      var diff = Math.max(0, target - Date.now());
      var sec = Math.floor(diff / 1000);
      out.d.textContent = Math.floor(sec / 86400);
      out.h.textContent = pad(Math.floor(sec % 86400 / 3600));
      out.m.textContent = pad(Math.floor(sec % 3600 / 60));
      out.s.textContent = pad(sec % 60);
    }
    tick();
    setInterval(tick, 1000);
  })();

  // Newsletter: submit to Brevo via hidden iframe, inline confirmation
  (function () {
    var form = document.getElementById('newsForm');
    if (!form) return;
    var note = document.getElementById('newsNote');
    form.addEventListener('submit', function (e) {
      var input = form.querySelector('input[type="email"]');
      if (!input.value || !input.checkValidity()) {
        e.preventDefault();
        note.textContent = siteT('newsInvalid', 'Entrez une adresse e-mail valide.');
        input.focus();
        return;
      }
      note.textContent = siteT('newsThanks', 'Merci ! Vérifiez votre boîte mail pour confirmer votre inscription.');
      setTimeout(function () { form.reset(); }, 200);
    });
  })();
