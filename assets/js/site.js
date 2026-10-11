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

  // Ouverture des inscriptions 2027 : mardi 13 octobre 2026, 20h00 (heure de Paris).
  // Cible exprimée en instant UTC fixe (18h00 UTC = 20h00 CEST, UTC+2 en octobre) pour ne jamais
  // dépendre du fuseau horaire du visiteur ni de l'horloge locale du navigateur à l'affichage.
  // TODO Njuko : les CTA "S'inscrire" pointent vers infos.html#inscriptions tant qu'aucun lien
  // d'inscription Njuko réel n'a été communiqué par Julien - à remplacer dès réception du lien.
  (function () {
    var REG_OPEN_UTC = Date.UTC(2026, 9, 13, 18, 0, 0);
    var ctas = document.querySelectorAll('.btn-go.is-disabled');
    var block = document.getElementById('regCountdown');
    var timer = null;

    function pad(n) { return (n < 10 ? '0' : '') + n; }

    function openRegistrations() {
      ctas.forEach(function (a) {
        a.classList.remove('is-disabled');
        a.removeAttribute('aria-disabled');
        var tag = a.querySelector('.soon-tag');
        if (tag) tag.remove();
      });
      if (block) {
        var units = block.querySelector('[data-reg-units]');
        var msg = block.querySelector('[data-reg-msg]');
        if (units) units.hidden = true;
        if (msg) msg.textContent = siteT('regOpenMsg', 'Les inscriptions sont ouvertes.');
      }
      if (timer) { clearInterval(timer); timer = null; }
    }

    function tick() {
      var diff = REG_OPEN_UTC - Date.now();
      if (diff <= 0) { openRegistrations(); return; }
      var sec = Math.floor(diff / 1000);
      var days = Math.floor(sec / 86400);
      var hours = Math.floor(sec % 86400 / 3600);
      var mins = Math.floor(sec % 3600 / 60);
      var secs = sec % 60;

      // Pastille courte sur chaque CTA désactivé ("Ouverture dans 2j 14h")
      ctas.forEach(function (a) {
        var tag = a.querySelector('.soon-tag');
        if (!tag) return;
        var short = days > 0
          ? (days + siteT('regDay', 'j') + ' ' + hours + siteT('regHour', 'h'))
          : (hours > 0 ? (hours + siteT('regHour', 'h') + ' ' + mins + siteT('regMin', 'min')) : (mins + siteT('regMin', 'min')));
        tag.textContent = siteT('regOpensIn', 'Ouverture dans') + ' ' + short;
      });

      // Compte à rebours complet (accueil uniquement, si présent)
      if (block) {
        var d = block.querySelector('[data-rc="d"]'), h = block.querySelector('[data-rc="h"]'),
          m = block.querySelector('[data-rc="m"]'), s = block.querySelector('[data-rc="s"]');
        if (d) d.textContent = days;
        if (h) h.textContent = pad(hours);
        if (m) m.textContent = pad(mins);
        if (s) s.textContent = pad(secs);
      }
    }

    if (REG_OPEN_UTC - Date.now() <= 0) {
      openRegistrations();
    } else {
      tick();
      timer = setInterval(tick, 1000);
    }
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
