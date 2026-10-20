/* =====================================================================
   Classement dynamique LIGHT ON TRI
   Filtres (Tous / Femmes / Hommes), recherche par nom, tri, pagination.
   S'initialise sur chaque élément [data-results] : la valeur pointe
   vers une clé de window.LOT_RESULTS (ex. "woippy-s-2026").
   Ported depuis lightontrail-redesign/assets/js/resultats-table.js (19/10/2026).
   ===================================================================== */
(function () {
  'use strict';

  /* Libellés par langue (lus sur <html lang>). Le FR reste la référence. */
  var I18N = {
    fr: {
      filterSex: 'Filtrer par sexe', all: 'Tous', women: 'Femmes', men: 'Hommes',
      searchPh: 'Rechercher un nom…', searchAria: 'Rechercher un athlète par nom',
      category: 'Catégorie', allCats: 'Toutes',
      sort: 'Trier', sortClt: 'Classement', sortTime: 'Temps', sortCat: 'Catégorie', sortName: 'Nom (A→Z)',
      cltF: 'Clt F', cltH: 'Clt H', cltCat: 'Clt ', clt: 'Clt', runner: 'Athlète', cat: 'Cat.', avg: 'Moy.', time: 'Temps',
      natation: 'Nat.', t1: 'T1', velo: 'Vélo', t2: 'T2', course: 'Course',
      one: ' athlète', many: ' athlètes', shown: ' affichés', none: 'Aucun athlète ne correspond à cette recherche.'
    }
  };
  var T = I18N[(document.documentElement.lang || 'fr').slice(0, 2).toLowerCase()] || I18N.fr;

  function norm(s) {
    return (s || '').toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }
  function toSec(t) {
    var p = (t || '').split(':').map(Number);
    if (p.length === 3) return p[0] * 3600 + p[1] * 60 + p[2];
    if (p.length === 2) return p[0] * 60 + p[1];
    return 0;
  }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return (s || '').toString().replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* Menu déroulant personnalisé (remplace <select> : angles droits + fond sombre,
     entièrement stylable, contrairement au popup natif du navigateur). */
  function buildDropdown(idBase, labelText, opts, getCurrent, onChoose) {
    var wrap = el('div', 'res-sort');
    var btnId = idBase + '-btn';
    var listId = idBase + '-list';

    var lab = el('label', null, labelText);
    lab.setAttribute('for', btnId);

    var dd = el('div', 'res-dd');
    var btn = el('button', 'res-dd-toggle');
    btn.type = 'button';
    btn.id = btnId;
    btn.setAttribute('aria-haspopup', 'listbox');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', listId);
    var btnLabel = el('span', 'res-dd-label');
    btn.appendChild(btnLabel);

    var panel = el('div', 'res-dd-panel');
    panel.id = listId;
    panel.setAttribute('role', 'listbox');
    panel.hidden = true;

    var optEls = [];
    function setCurrent(v) {
      opts.forEach(function (o, i) {
        var on = o.v === v;
        optEls[i].setAttribute('aria-selected', on ? 'true' : 'false');
        optEls[i].tabIndex = on ? 0 : -1;
        if (on) btnLabel.textContent = o.label;
      });
    }
    function focusIdx(i) {
      if (i < 0) i = optEls.length - 1;
      if (i >= optEls.length) i = 0;
      optEls[i].focus();
    }
    function choose(v) { close(); onChoose(v); setCurrent(v); btn.focus(); }

    opts.forEach(function (o, i) {
      var oe = el('div', 'res-dd-opt', esc(o.label));
      oe.setAttribute('role', 'option');
      oe.tabIndex = -1;
      oe.addEventListener('click', function () { choose(o.v); });
      oe.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') { e.preventDefault(); focusIdx(i + 1); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); focusIdx(i - 1); }
        else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(o.v); }
        else if (e.key === 'Escape') { e.preventDefault(); close(); btn.focus(); }
      });
      panel.appendChild(oe);
      optEls.push(oe);
    });

    function onDoc(e) { if (!dd.contains(e.target)) close(); }
    function open() {
      if (!panel.hidden) return;
      panel.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      document.addEventListener('click', onDoc, true);
      var sel = optEls.filter(function (o) { return o.getAttribute('aria-selected') === 'true'; })[0];
      (sel || optEls[0]).focus();
    }
    function close() {
      if (panel.hidden) return;
      panel.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      document.removeEventListener('click', onDoc, true);
    }
    btn.addEventListener('click', function () { if (panel.hidden) open(); else close(); });
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });

    setCurrent(getCurrent());
    dd.appendChild(btn);
    dd.appendChild(panel);
    wrap.appendChild(lab);
    wrap.appendChild(dd);
    return wrap;
  }

  /* Ordre des catégories, toutes épreuves confondues (Woippy : codes avec sexe
     en suffixe type S1M/CAF/M1F ; Madine : codes sans sexe type MI/CA/JU/SE/V1-V8 ;
     Kids : MP/PO/PU/BE). On retire un éventuel suffixe M/F avant comparaison. */
  var catOrder = function (c) {
    var fam = (c || '').replace(/[MF]$/, '');
    var map = { MP: 0, PO: 1, PU: 2, BE: 3, MI: 4, CA: 5, JU: 6, ES: 7, SE: 8 };
    if (fam in map) return map[fam];
    var s = fam.match(/^S(\d)$/);
    if (s) return 10 + parseInt(s[1], 10);
    var m = fam.match(/^M(\d)$/);
    if (m) return 20 + parseInt(m[1], 10);
    var v = fam.match(/^V(\d)$/);
    if (v) return 30 + parseInt(v[1], 10);
    return 99;
  };

  function init(root) {
    var key = root.getAttribute('data-results');
    var store = window.LOT_RESULTS && window.LOT_RESULTS[key];
    if (!store || !store.rows) { return; }

    var pageSize = parseInt(root.getAttribute('data-page-size'), 10) || 25;
    var all = store.rows.slice();

    // Temps intermédiaires (natation/T1/vélo/T2/course) : uniquement présents pour les
    // formats triathlon (pas pour les RUN, ni toujours pour chaque athlète). Moyenne (km/h) :
    // uniquement pour les formats RUN. On n'affiche la colonne que si au moins une ligne l'a.
    var hasSplits = all.some(function (r) { return r.natation; });
    var hasMoy = all.some(function (r) { return r.moy; });

    var state = { sexe: 'all', cat: 'all', q: '', sort: 'clt', page: 1 };

    var cats = [];
    all.forEach(function (r) { if (cats.indexOf(r.cat) === -1) cats.push(r.cat); });
    cats.sort(function (a, b) { return catOrder(a) - catOrder(b) || (a < b ? -1 : 1); });

    /* ---------- Barre d'outils ---------- */
    var toolbar = el('div', 'res-toolbar');

    var seg = el('div', 'res-seg');
    seg.setAttribute('role', 'group');
    seg.setAttribute('aria-label', T.filterSex);
    var segDefs = [
      { v: 'all', label: T.all },
      { v: 'F', label: T.women },
      { v: 'H', label: T.men }
    ];
    var segBtns = {};
    segDefs.forEach(function (d) {
      var b = el('button', 'res-seg-btn', d.label);
      b.type = 'button';
      b.setAttribute('aria-pressed', d.v === state.sexe ? 'true' : 'false');
      b.addEventListener('click', function () {
        state.sexe = d.v; state.page = 1; render();
      });
      segBtns[d.v] = b;
      seg.appendChild(b);
    });

    var search = el('div', 'res-search');
    var input = el('input');
    input.type = 'search';
    input.placeholder = T.searchPh;
    input.setAttribute('aria-label', T.searchAria);
    input.autocomplete = 'off';
    var deb;
    input.addEventListener('input', function () {
      clearTimeout(deb);
      deb = setTimeout(function () { state.q = input.value; state.page = 1; render(); }, 150);
    });
    search.appendChild(input);

    var catOpts = [{ v: 'all', label: T.allCats }].concat(cats.map(function (c) { return { v: c, label: c }; }));
    var catWrap = buildDropdown('res-cat-' + key, T.category, catOpts,
      function () { return state.cat; },
      function (v) { state.cat = v; state.page = 1; render(); });

    var sortOpts = [
      { v: 'clt', label: T.sortClt },
      { v: 'temps', label: T.sortTime },
      { v: 'cat', label: T.sortCat },
      { v: 'nom', label: T.sortName }
    ];
    var sortWrap = buildDropdown('res-sort-' + key, T.sort, sortOpts,
      function () { return state.sort; },
      function (v) { state.sort = v; state.page = 1; render(); });

    toolbar.appendChild(seg);
    toolbar.appendChild(search);
    toolbar.appendChild(catWrap);
    toolbar.appendChild(sortWrap);

    var count = el('p', 'res-count');
    count.setAttribute('aria-live', 'polite');

    /* ---------- Tableau ---------- */
    var scroll = el('div', 'res-scroll');
    var table = el('table', 'res-table');
    table.innerHTML = '<thead></thead><tbody></tbody>';
    var thead = table.querySelector('thead');
    var tbody = table.querySelector('tbody');
    scroll.appendChild(table);

    var pager = el('div', 'res-pager');

    root.appendChild(toolbar);
    root.appendChild(count);
    root.appendChild(scroll);
    root.appendChild(pager);

    /* ---------- Rendu ---------- */
    function compute() {
      var q = norm(state.q);
      var rows = all.filter(function (r) {
        if (state.sexe !== 'all' && r.sexe !== state.sexe) return false;
        if (state.cat !== 'all' && r.cat !== state.cat) return false;
        if (q && norm(r.nom).indexOf(q) === -1) return false;
        return true;
      });
      // Classement filtré : rang au sein de la sélection, dans l'ordre d'arrivée (clt)
      rows.slice().sort(function (a, b) { return a.clt - b.clt; })
        .forEach(function (r, i) { r._frank = i + 1; });
      rows.sort(function (a, b) {
        if (state.sort === 'temps') return toSec(a.temps) - toSec(b.temps);
        if (state.sort === 'nom') return norm(a.nom) < norm(b.nom) ? -1 : 1;
        if (state.sort === 'cat') {
          if (a.cat === b.cat) return a.cltCat - b.cltCat;
          return a.cat < b.cat ? -1 : 1;
        }
        return a.clt - b.clt;
      });
      return rows;
    }

    function render() {
      Object.keys(segBtns).forEach(function (v) {
        segBtns[v].setAttribute('aria-pressed', v === state.sexe ? 'true' : 'false');
      });

      // 2e colonne de classement : seulement si un filtre (sexe/catégorie) crée un nouveau classement
      var showFrank = state.sexe !== 'all' || state.cat !== 'all';
      var frankLabel = state.cat !== 'all' ? T.cltCat + state.cat
                     : state.sexe === 'F' ? T.cltF
                     : state.sexe === 'H' ? T.cltH : '';
      thead.innerHTML = '<tr>' +
        (showFrank
          ? '<th scope="col" class="c-frank">' + esc(frankLabel) + '</th><th scope="col" class="c-clt">' + T.clt + '</th>'
          : '<th scope="col" class="c-clt">' + T.clt + '</th>') +
        '<th scope="col" class="c-nom">' + T.runner + '</th>' +
        '<th scope="col" class="c-cat">' + T.cat + '</th>' +
        (hasSplits
          ? '<th scope="col" class="c-nat">' + T.natation + '</th>' +
            '<th scope="col" class="c-t1">' + T.t1 + '</th>' +
            '<th scope="col" class="c-velo">' + T.velo + '</th>' +
            '<th scope="col" class="c-t2">' + T.t2 + '</th>' +
            '<th scope="col" class="c-course">' + T.course + '</th>'
          : '') +
        (hasMoy ? '<th scope="col" class="c-moy">' + T.avg + '</th>' : '') +
        '<th scope="col" class="c-tps">' + T.time + '</th>' +
        '</tr>';

      var rows = compute();
      var total = rows.length;
      var pages = Math.max(1, Math.ceil(total / pageSize));
      if (state.page > pages) state.page = pages;
      var start = (state.page - 1) * pageSize;
      var slice = rows.slice(start, start + pageSize);

      count.textContent = total
        ? total + (total > 1 ? T.many : T.one) + (total > pageSize ? ' · ' + (start + 1) + '–' + (start + slice.length) + T.shown : '')
        : T.none;

      tbody.innerHTML = slice.map(function (r) {
        return '<tr>' +
          (showFrank
            ? '<td class="c-frank mono is-primary">' + r._frank + '</td><td class="c-clt mono">' + r.clt + '</td>'
            : '<td class="c-clt mono is-primary">' + r.clt + '</td>') +
          '<td class="c-nom"><span class="rn">' + esc(r.nom) + '</span>' +
          (r.lieu ? '<span class="rl">' + esc(r.lieu) + '</span>' : '') + '</td>' +
          '<td class="c-cat"><span class="cat-chip">' + esc(r.cat) + '</span></td>' +
          (hasSplits
            ? '<td class="c-nat mono">' + esc(r.natation) + '</td>' +
              '<td class="c-t1 mono">' + esc(r.t1) + '</td>' +
              '<td class="c-velo mono">' + esc(r.velo) + '</td>' +
              '<td class="c-t2 mono">' + esc(r.t2) + '</td>' +
              '<td class="c-course mono">' + esc(r.course) + '</td>'
            : '') +
          (hasMoy ? '<td class="c-moy mono">' + (r.moy ? r.moy.toFixed(2) : '') + '</td>' : '') +
          '<td class="c-tps mono">' + esc(r.temps) + '</td>' +
          '</tr>';
      }).join('');

      renderPager(pages);
    }

    function renderPager(pages) {
      pager.innerHTML = '';
      if (pages <= 1) return;

      function btn(label, page, disabled, current) {
        var b = el('button', 'res-page' + (current ? ' is-current' : ''), label);
        b.type = 'button';
        if (disabled) b.disabled = true;
        if (current) b.setAttribute('aria-current', 'page');
        if (!disabled && !current) b.addEventListener('click', function () {
          state.page = page;
          render();
          scroll.scrollIntoView({ block: 'start', behavior: 'smooth' });
        });
        return b;
      }

      pager.appendChild(btn('‹', state.page - 1, state.page === 1));
      var win = 2, from = Math.max(1, state.page - win), to = Math.min(pages, state.page + win);
      if (from > 1) { pager.appendChild(btn('1', 1, false, state.page === 1)); if (from > 2) pager.appendChild(el('span', 'res-gap', '…')); }
      for (var p = from; p <= to; p++) pager.appendChild(btn(String(p), p, false, p === state.page));
      if (to < pages) { if (to < pages - 1) pager.appendChild(el('span', 'res-gap', '…')); pager.appendChild(btn(String(pages), pages, false, state.page === pages)); }
      pager.appendChild(btn('›', state.page + 1, state.page === pages));
    }

    render();
  }

  /* Bascule entre formats (ex. S* / M** / RUN) : un groupe [data-tabs]
     contient des boutons .res-tab et des panneaux [role="tabpanel"]. */
  function initTabs() {
    var groups = document.querySelectorAll('[data-tabs]');
    for (var g = 0; g < groups.length; g++) {
      (function (group) {
        var tabs = group.querySelectorAll('.res-tab');
        var panels = group.querySelectorAll('[role="tabpanel"]');
        for (var i = 0; i < tabs.length; i++) {
          tabs[i].addEventListener('click', function () {
            var target = this.getAttribute('aria-controls');
            for (var t = 0; t < tabs.length; t++) {
              tabs[t].setAttribute('aria-selected', tabs[t] === this ? 'true' : 'false');
            }
            for (var p = 0; p < panels.length; p++) {
              panels[p].hidden = panels[p].id !== target;
            }
          });
        }
      })(groups[g]);
    }
  }

  function boot() {
    var roots = document.querySelectorAll('[data-results]');
    for (var i = 0; i < roots.length; i++) init(roots[i]);
    initTabs();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
