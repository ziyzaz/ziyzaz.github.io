/* 这个文件负责显示网站，一般不需要修改。内容请改 content.js */
(function () {
  var S = window.SITE;
  var side = document.getElementById("side");
  var main = document.getElementById("main");
  var LANGS = S.languages || ["en"];
  var state = { slug: null, i: 0, mode: "images", lang: LANGS[0] };

  // Interface words in each language. Add a language here if you add one to content.js.
  var UI = {
    en: { photographs: "Photographs", work: "Work", info: "Information", about: "About", cv: "CV", contact: "Contact",
          images: "Images", index: "Index", text: "Text", prev: "Previous", next: "Next",
          email: "Email", copy: "Copy", copied: "Copied", open: "Open image", photo: "Photography", label: "EN" },
    zh: { photographs: "作品", work: "作品", info: "信息", about: "关于", cv: "简历", contact: "联系",
          images: "图片", index: "索引", text: "文字", prev: "上一张", next: "下一张",
          email: "邮箱", copy: "复制", copied: "已复制", open: "打开图片", photo: "摄影", label: "中文" },
    pt: { photographs: "Fotografias", work: "Trabalhos", info: "Informações", about: "Sobre", cv: "CV", contact: "Contato",
          images: "Imagens", index: "Índice", text: "Texto", prev: "Anterior", next: "Próxima",
          email: "E-mail", copy: "Copiar", copied: "Copiado", open: "Abrir imagem", photo: "Fotografia", label: "PT" },
    es: { photographs: "Fotografías", work: "Obra", info: "Información", about: "Sobre mí", cv: "CV", contact: "Contacto",
          images: "Imágenes", index: "Índice", text: "Texto", prev: "Anterior", next: "Siguiente",
          email: "Correo", copy: "Copiar", copied: "Copiado", open: "Abrir imagen", photo: "Fotografía", label: "ES" }
  };
  var HTML_LANG = { en: "en", zh: "zh-Hans", pt: "pt-BR", es: "es" };
  // Labels shown in the language dropdown
  var LANG_NAMES = { en: "EN", zh: "ZH", pt: "PT", es: "ES" };

  // Pick the starting language: saved choice, then the browser's language, then the first in the list.
  (function () {
    var saved = null;
    try { saved = localStorage.getItem("lang"); } catch (e) {}
    var browser = (navigator.language || "").slice(0, 2).toLowerCase();
    if (saved && LANGS.indexOf(saved) > -1) state.lang = saved;
    else if (LANGS.indexOf(browser) > -1) state.lang = browser;
  })();

  function u(key) { return (UI[state.lang] || UI.en)[key] || UI.en[key]; }
  // Text from content.js: a plain string, or { en: ..., zh: ... } with English as fallback.
  function t(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[state.lang] || v.en || v[LANGS[0]] || "";
  }

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === "text") n.textContent = attrs[k];
      else if (k === "on") for (var e in attrs.on) n.addEventListener(e, attrs.on[e]);
      else n.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }

  // A photo that turns into a labelled grey placeholder if the file is missing.
  function photo(src, alt, n, lazy) {
    var img = el("img", { src: src, alt: alt || "" });
    if (lazy) img.loading = "lazy";
    img.onerror = function () {
      var ph = el("div", { "class": "ph" + (n % 3 === 1 ? " tall" : ""), role: "img", "aria-label": alt || "" }, [src]);
      ph.onclick = img.onclick;
      if (img.parentNode) img.parentNode.replaceChild(ph, img);
    };
    return img;
  }

  function series(slug) {
    for (var i = 0; i < S.series.length; i++) if (S.series[i].slug === slug) return S.series[i];
    return null;
  }

  function setLang(l) {
    state.lang = l;
    try { localStorage.setItem("lang", l); } catch (e) {}
    buildNav();
    render();
  }

  // ---------- navigation ----------
  function buildNav() {
    document.documentElement.lang = HTML_LANG[state.lang] || state.lang;
    side.innerHTML = "";
    side.appendChild(el("a", { href: "#", "class": "name", text: t(S.name), title: t(S.role) }));
    var menu = el("ul", { "class": "menu" });
    ["photographs", "about", "contact"].forEach(function (p) {
      menu.appendChild(el("li", null, [el("a", { href: "#" + p, "data-route": p, text: u(p) })]));
    });
    side.appendChild(el("nav", { "class": "menus", "aria-label": "Menu" }, [menu]));

    // Language dropdown
    if (LANGS.length > 1) {
      var sel = el("select", { id: "lang-select", "aria-label": "Language",
        on: { change: function (e) { setLang(e.target.value); } } });
      LANGS.forEach(function (l) {
        var o = el("option", { value: l, lang: HTML_LANG[l] || l, text: LANG_NAMES[l] || l.toUpperCase() });
        if (l === state.lang) o.selected = true;
        sel.appendChild(o);
      });
      side.appendChild(el("label", { "class": "lang" }, [sel]));
    }
  }

  function markNav(route) {
    side.querySelectorAll("[data-route]").forEach(function (a) {
      a.classList.toggle("on", a.getAttribute("data-route") === route);
    });
  }

  // ---------- pages ----------
  function home() {
    var s = S.series[0];
    if (!s || !s.images.length) { main.appendChild(el("p", { text: "Add a series in content.js." })); return; }
    var img = photo(s.cover || s.images[0].file, t(s.images[0].caption), 0);
    img.onclick = function () { location.hash = s.slug; };
    main.appendChild(el("div", { "class": "stage" }, [
      el("div", { "class": "frame" }, [img]),
      el("div", { "class": "bar" }, [
        el("div", { "class": "home-caption" }, [el("a", { href: "#" + s.slug, text: t(s.title) }), ", " + t(s.year)])
      ])
    ]));
  }

  // Overview of all series: cover picture, title and year. The cover is the series' "cover" file, or its first image.
  function photographsPage() {
    var list = el("div", { "class": "series-list" });
    S.series.forEach(function (s, n) {
      var cover = s.cover || (s.images[0] && s.images[0].file) || "";
      list.appendChild(el("a", { href: "#" + s.slug, "class": "series-card" }, [
        el("div", { "class": "cover" }, [photo(cover, t(s.title), n, true)]),
        el("div", { "class": "series-meta" }, [
          el("span", { "class": "series-title", text: t(s.title) }),
          el("span", { "class": "series-year", text: t(s.year) })
        ])
      ]));
    });
    main.appendChild(list);
  }

  function seriesPage(s) {
    main.appendChild(el("a", { href: "#photographs", "class": "back", text: "← " + u("photographs") }));
    var head = el("div", { "class": "shead" }, [
      el("h1", { text: t(s.title) }),
      el("span", { "class": "year", text: t(s.year) })
    ]);
    var modes = el("div", { "class": "modes" });
    ["images", "index", "text"].forEach(function (m) {
      modes.appendChild(el("button", {
        type: "button", "aria-pressed": String(state.mode === m), text: u(m),
        on: { click: function () { state.mode = m; render(); } }
      }));
    });
    head.appendChild(modes);
    main.appendChild(head);

    if (state.mode === "index") {
      var grid = el("div", { "class": "grid" });
      s.images.forEach(function (im, n) {
        grid.appendChild(el("button", {
          type: "button", "aria-label": u("open") + " " + (n + 1),
          on: { click: function () { state.i = n; state.mode = "images"; render(); } }
        }, [photo(im.file, t(im.caption), n, true), el("span", { "class": "n", text: String(n + 1) })]));
      });
      main.appendChild(grid);
      return;
    }

    if (state.mode === "text") {
      var prose = el("div", { "class": "prose" });
      t(s.statement).split(/\n\s*\n/).forEach(function (p) { prose.appendChild(el("p", { text: p })); });
      main.appendChild(prose);
      return;
    }

    var im = s.images[state.i];
    var total = s.images.length;
    var img = photo(im.file, t(im.caption), state.i);
    img.onclick = function () { step(1); };
    main.appendChild(el("div", { "class": "stage" }, [
      el("div", { "class": "frame" }, [img]),
      el("div", { "class": "bar" }, [
        el("div", { "class": "caption", text: t(im.caption) }),
        el("div", { "class": "count", text: (state.i + 1) + " / " + total }),
        el("div", { "class": "arrows" }, [
          el("button", { type: "button", text: u("prev"), on: { click: function () { step(-1); } } }),
          el("button", { type: "button", text: u("next"), on: { click: function () { step(1); } } })
        ])
      ])
    ]));
    var nx = s.images[(state.i + 1) % total];
    if (nx) { var pre = new Image(); pre.src = nx.file; }
  }

  function aboutPage() {
    main.appendChild(el("h1", { "class": "page-title", text: u("about") }));
    var prose = el("div", { "class": "prose" });
    S.about.forEach(function (p) { prose.appendChild(el("p", { text: t(p) })); });
    main.appendChild(prose);
  }

  function copyBtn(value) {
    return el("button", { type: "button", "class": "copy", text: u("copy"), on: { click: function (e) {
      var b = e.currentTarget;
      var done = function () { b.textContent = u("copied"); setTimeout(function () { b.textContent = u("copy"); }, 1500); };
      if (navigator.clipboard) navigator.clipboard.writeText(value).then(done, function () {});
    } } });
  }

  function contactPage() {
    main.appendChild(el("h1", { "class": "page-title", text: u("contact") }));
    main.appendChild(el("div", { "class": "contact" }, [
      el("div", null, [el("span", { "class": "k", text: u("email") }),
        el("a", { href: "mailto:" + S.email, text: S.email }), copyBtn(S.email)]),
      el("div", null, [el("span", { "class": "k", text: "Instagram" }),
        el("a", { href: "https://www.instagram.com/" + S.instagram + "/", target: "_blank", rel: "noopener", text: "@" + S.instagram })])
    ]));
  }

  // ---------- routing ----------
  function step(d) {
    var s = series(state.slug);
    if (!s) return;
    state.i = (state.i + d + s.images.length) % s.images.length;
    render();
  }

  function render() {
    var route = decodeURIComponent(location.hash.replace(/^#/, ""));
    main.innerHTML = "";
    var s = series(route);
    if (s) {
      if (state.slug !== route) { state.slug = route; state.i = 0; state.mode = "images"; }
      seriesPage(s);
      document.title = t(s.title) + " — " + t(S.name);
    } else {
      state.slug = null;
      if (route === "photographs") photographsPage();
      else if (route === "about") aboutPage();
      else if (route === "contact") contactPage();
      else home();
      document.title = t(S.name) + " — " + u("photo");
    }
    markNav(s ? "photographs" : route);
  }

  document.addEventListener("keydown", function (e) {
    if (!state.slug || state.mode !== "images") return;
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });

  window.addEventListener("hashchange", function () { render(); window.scrollTo(0, 0); });
  buildNav();
  render();
})();
