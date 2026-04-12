// =====================================================
//  ASSEMBLEIA DE DEUS – IEADA  |  app.js
//  Versão frontend puro
// =====================================================

const CULTOS = [
  {
    nome: "Mocinha Magalhães",
    dia: "Domingo • 18:00h",
    horario: "Todo Domingo às 18:00",
    tema: "Minha familia no altar",
    tag: "Culto de Familia",
  },
  {
    nome: "Nova Esperança",
    dia: "Domingo • 18:00h",
    horario: "Todo Domingo às 18:00",
    tema: "Minha familia com Deus",
    tag: "Culto de Familia",
  },        
  {
    nome: "vila 104",
    dia: "Sabado • 19:00h",
    horario: "Todo sabado às 19:00",
    tema: "Minha familia na presença do senhor",
    tag: "Culto de Familia",
  },
  {
    nome: "Mocinha Magalhães",
    dia: "sexta • 19:00h ",
    horario: "Toda Sexta às 19:00 ",
    tema: "Curas e libertações",
    tag: "Culto de libertação",
  },
  {
    nome: "Nova Esperança ",
    dia: "Quinta • 19:00h ",
    horario: "Toda Quinta às 19:00 ",
    tema: "Ensinamento da palavra ",
    tag: "Culto de Ensinamento",
  },
  {
    nome: "Vila 104",
    dia: "quarta • 19:00h ",
    horario: "Toda quarta às 19:00",
    tema: "Escola Biblica",
    tag: "Culto de ensinamento",
  },
  {
    nome: "Mocinha Magalhães",
    dia: "Quarta • 19:00h",
    horario: "Toda quarta às 19:00",
    tema: "Escola Biblica",
    tag: "Culto de ensinamento",
  },
];

const AVISOS = [
  "🙏Os cultos desta semana estão listados acima.",
];

const IGREJAS = [
  {
    nome: "AD – Sede Nova esperança",
    endereco: "Rua vitoria, 257 – N.Esperança",
    instagram: "https://www.instagram.com/ieada.ac/?__pwa=1",
    user: "@ieada_ac",
    icone: "⛪",
  },
  {
    nome: "AD – Mocinha Magalhães ",
    endereco: "Rua do caju, 380-Mocinha Magalhães",
    instagram: "https://www.instagram.com/ieada_m.m/?__pwa=1",
    user: "@ieada_m.m",
    icone: "🕊️",
  },
  {
    nome: "AD – Vila 104  ",
    endereco: "Br 317/Km104",
    instagram: "https://www.instagram.com/igreja.4586382/?__pwa=1",
    user: "@igreja.4586382",
    icone: "✝️",
  },
];

const PASTORES = [
   {
    nome: "Pr. Nonato Calacina",
    titulo: "Pastor Estadual",
    igreja: "Sede Nova Esperança",
    whatsapp: "5568999073699",
    instagram: "https://www.instagram.com/nonatocalacina/?__pwa=1",
  },
  {
     nome: "Pra. Renilda Araújo",
    titulo: "Pastora Estadual",
    igreja: "Sede Nova Esperança",
    whatsapp: "",
    instagram: "https://www.instagram.com/renildaaraujo03/?__pwa=1",
  },
  {
    nome: "Pr. Denis Willian",
    titulo: "Pastor Local",
    igreja: "Mocinha Magalhães",
    whatsapp: "",
    instagram: "https://www.instagram.com/ieada_m.m/?__pwa=1",
  },
  {
    nome: "Pra. Sandra Melo ",
    titulo: "Pastora Local",
    igreja: "Mocinha Magalhães",
    whatsapp: "",
    instagram: "https://www.instagram.com/ieada_m.m/?__pwa=1",
  },
  {
    nome: "Pr. Jovenilson Melo",
    titulo: "Pastor Local",
    igreja: "Vila 104",
    whatsapp: "",
    instagram: "https://www.instagram.com/igreja.4586382/?__pwa=1",
  },
  {
    nome: "Pra. Maria Conceição",
    titulo: "Pastora Local",
    igreja: "Vila 104",
    whatsapp: "",
    instagram: "https://www.instagram.com/cr7428762/?__pwa=1",
  },
  {
    nome: "Pr. Claudio santos ",
    titulo: "Pastor Auxiliar",
    igreja: "Ministerio",
    whatsapp: "",
    instagram: "https://www.instagram.com/claudiosantos2345/?__pwa=1",
  },
];

// ─── VERSÍCULOS DIÁRIOS ──────────────────────────────
const VERSICULOS = [
  { texto: "O Senhor é o meu pastor, e nada me faltará.", ref: "Salmos 23:1" },
  { texto: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo o que nele crê não pereça, mas tenha a vida eterna.", ref: "João 3:16" },
  { texto: "Tudo posso naquele que me fortalece.", ref: "Filipenses 4:13" },
  { texto: "Confia no Senhor de todo o teu coração e não te apoies no teu próprio entendimento.", ref: "Provérbios 3:5" },
  { texto: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha.", ref: "1 Coríntios 13:4" },
  { texto: "E conhecereis a verdade, e a verdade vos libertará.", ref: "João 8:32" },
  { texto: "Mas os que esperam no Senhor renovarão as suas forças, subirão com asas como águias.", ref: "Isaías 40:31" },
  { texto: "O Senhor é a minha luz e a minha salvação; a quem temerei?", ref: "Salmos 27:1" },
  { texto: "Porque eu sei os planos que tenho para vocês, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.", ref: "Jeremias 29:11" },
  { texto: "Alegrai-vos sempre no Senhor; outra vez digo, alegrai-vos.", ref: "Filipenses 4:4" },
  { texto: "Buscai primeiro o reino de Deus e a sua justiça, e todas estas coisas vos serão acrescentadas.", ref: "Mateus 6:33" },
  { texto: "Se Deus é por nós, quem será contra nós?", ref: "Romanos 8:31" },
  { texto: "Não te deixes vencer pelo mal, mas vence o mal com o bem.", ref: "Romanos 12:21" },
  { texto: "A fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.", ref: "Hebreus 11:1" },
  { texto: "Não andeis ansiosos por coisa alguma; antes, em tudo, pela oração e pela súplica.", ref: "Filipenses 4:6" },
  { texto: "Criou Deus, pois, o homem à sua imagem, à imagem de Deus o criou.", ref: "Gênesis 1:27" },
  { texto: "Fortalecei-vos e tende bom ânimo; não temais, nem vos assusteis diante deles, porque o Senhor teu Deus é quem vai contigo.", ref: "Deuteronômio 31:6" },
  { texto: "O temor do Senhor é o princípio da sabedoria.", ref: "Provérbios 9:10" },
  { texto: "Nada fareis por partidarismo ou vanglória, mas por humildade estimai os outros superiores a vós mesmos.", ref: "Filipenses 2:3" },
  { texto: "Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei.", ref: "Mateus 11:28" },
  { texto: "Porque o Senhor teu Deus está contigo por onde quer que andares.", ref: "Josué 1:9" },
  { texto: "Deleita-te no Senhor, e ele te concederá o que deseja o teu coração.", ref: "Salmos 37:4" },
  { texto: "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti.", ref: "Números 6:24-25" },
  { texto: "A graça do Senhor Jesus Cristo seja com o teu espírito.", ref: "Filemom 1:25" },
  { texto: "Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo.", ref: "Salmos 23:4" },
  { texto: "Não vos conformeis com este século, mas transformai-vos pela renovação da vossa mente.", ref: "Romanos 12:2" },
  { texto: "Jesus lhe disse: Eu sou o caminho, e a verdade, e a vida.", ref: "João 14:6" },
  { texto: "Deem graças em todas as circunstâncias, pois esta é a vontade de Deus em Cristo Jesus para vocês.", ref: "1 Tessalonicenses 5:18" },
  { texto: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus.", ref: "Isaías 41:10" },
  { texto: "O Senhor é bom e fortaleza no dia da angústia.", ref: "Naum 1:7" },
];

// ─── HERO VERSE ──────────────────────────────────────
function setHeroVerse() {
  var today = new Date();
  var dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  var v = VERSICULOS[dayOfYear % VERSICULOS.length];
  document.getElementById("heroVerse").textContent = '"' + v.texto + '" — ' + v.ref;
}

// ─── PALAVRA DO DIA ──────────────────────────────────
function setPalavra() {
  var today = new Date();
  var dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  var v = VERSICULOS[(dayOfYear + 5) % VERSICULOS.length];
  var card = document.getElementById("palavraCard");
  card.innerHTML = '<p class="palavra-text">"' + v.texto + '"</p><span class="palavra-ref">— ' + v.ref + '</span>';
}

// ─── CULTOS GRID ─────────────────────────────────────
function renderCultos() {
  var grid = document.getElementById("cultosGrid");
  CULTOS.forEach(function(c) {
    var el = document.createElement("div");
    el.className = "culto-card reveal";
    el.innerHTML =
      '<div class="culto-dia">' + c.dia + '</div>' +
      '<div class="culto-nome">' + c.nome + '</div>' +
      '<div class="culto-horario"><i class="fas fa-clock" style="color:var(--gold);margin-right:6px"></i>' + c.horario + '</div>' +
      '<div class="culto-tema"><i class="fas fa-bible" style="color:var(--gold);margin-right:6px"></i>Tema: ' + c.tema + '</div>' +
      '<span class="culto-tag">' + c.tag + '</span>';
    grid.appendChild(el);
  });
}

// ─── AVISOS ──────────────────────────────────────────
function renderAvisos() {
  var ul = document.getElementById("avisosList");
  AVISOS.forEach(function(a) {
    var li = document.createElement("li");
    li.textContent = a;
    ul.appendChild(li);
  });
}

// ─── IGREJAS ─────────────────────────────────────────
function renderIgrejas() {
  var grid = document.getElementById("igrejasGrid");
  IGREJAS.forEach(function(ig) {
    var el = document.createElement("div");
    el.className = "igreja-card reveal";
    el.innerHTML =
      '<div class="igreja-thumb">' +
        '<div class="igreja-thumb-inner">' +
          '<div class="igreja-thumb-icon">' + ig.icone + '</div>' +
          '<div class="igreja-thumb-label">' + ig.user + '</div>' +
        '</div>' +
        '<span class="insta-badge"><i class="fab fa-instagram"></i></span>' +
      '</div>' +
      '<div class="igreja-body">' +
        '<div class="igreja-nome">' + ig.nome + '</div>' +
        '<div class="igreja-end"><i class="fas fa-map-marker-alt" style="color:var(--gold);margin-right:6px"></i>' + ig.endereco + '</div>' +
        '<a href="' + ig.instagram + '" target="_blank" rel="noopener" class="btn-instagram">' +
          '<i class="fab fa-instagram"></i> Ver no Instagram' +
        '</a>' +
      '</div>';
    grid.appendChild(el);
  });
}

// ─── PASTORES ────────────────────────────────────────
function renderPastores() {
  var grid = document.getElementById("pastoresGrid");
  PASTORES.forEach(function(p) {
    var el = document.createElement("div");
    el.className = "pastor-card reveal";
    el.innerHTML =
      '<div class="pastor-avatar"><i class="fas fa-user-tie"></i></div>' +
      '<div class="pastor-titulo">' + p.titulo + '</div>' +
      '<div class="pastor-nome">' + p.nome + '</div>' +
      '<div class="pastor-igreja"><i class="fas fa-church" style="margin-right:5px"></i>' + p.igreja + '</div>' +
      '<div class="pastor-contatos">' +
        '<a href="https://wa.me/' + p.whatsapp + '" target="_blank" class="contato-btn whatsapp">' +
          '<i class="fab fa-whatsapp"></i> WhatsApp' +
        '</a>' +
        '<a href="' + p.instagram + '" target="_blank" class="contato-btn instagram-btn">' +
          '<i class="fab fa-instagram"></i> Instagram' +
        '</a>' +
      '</div>';
    grid.appendChild(el);
  });
}

// ─── HEADER SCROLL ───────────────────────────────────
function initHeader() {
  var header = document.getElementById("header");
  window.addEventListener("scroll", function() {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
}

// ─── MOBILE MENU ─────────────────────────────────────
function initMobileMenu() {
  var btn = document.getElementById("menuToggle");
  var nav = document.getElementById("mobileNav");
  btn.addEventListener("click", function() { nav.classList.toggle("open"); });
  nav.querySelectorAll("a").forEach(function(a) {
    a.addEventListener("click", function() { nav.classList.remove("open"); });
  });
}

// ─── SCROLL REVEAL ───────────────────────────────────
function initReveal() {
  var els = document.querySelectorAll(".reveal");
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function(el) { io.observe(el); });
}

// ─── PARTICLES ───────────────────────────────────────
function initParticles() {
  var container = document.getElementById("particles");
  for (var i = 0; i < 30; i++) {
    var p = document.createElement("div");
    p.className = "particle";
    var size = Math.random() * 5 + 2;
    p.style.cssText =
      "width:" + size + "px; height:" + size + "px;" +
      "left:" + (Math.random() * 100) + "%;" +
      "bottom:" + (Math.random() * 20) + "%;" +
      "animation-delay:" + (Math.random() * 12) + "s;" +
      "animation-duration:" + (8 + Math.random() * 10) + "s;";
    container.appendChild(p);
  }
}

// ─── LOGO FALLBACK ───────────────────────────────────
function fixLogo() {
  var img = document.getElementById("logoImg");
  img.onerror = function() {
    var div = document.createElement("div");
    div.style.cssText = "width:56px;height:56px;display:flex;align-items:center;justify-content:center;font-size:2.4rem;filter:drop-shadow(0 0 8px #c9a84c);";
    div.textContent = "✝";
    img.replaceWith(div);
  };
  if (!img.src || img.src === window.location.href) img.onerror();
}

// ─── INIT ─────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function() {
  setHeroVerse();
  setPalavra();
  renderCultos();
  renderAvisos();
  renderIgrejas();
  renderPastores();
  initHeader();
  initMobileMenu();
  initParticles();
  fixLogo();
  requestAnimationFrame(function() { setTimeout(initReveal, 100); });
});
