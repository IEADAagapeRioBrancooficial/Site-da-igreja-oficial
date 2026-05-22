// =====================================================
//  ASSEMBLEIA DE DEUS – IEADA  |  app.js
//  Versão frontend
// =====================================================

const CULTOS = [
  {
    nome: "Mocinha Magalhães",
    dia: "Domingo • 18:00h",
    horario: "Todo Domingo às 18:00",
    tema: "Minha família com o senhor",
    tag: "Culto de Família",
  },
  {
    nome: "Nova Esperança",
    dia: "Domingo • 18:00h",
    horario: "Todo Domingo às 18:00",
    tema: "Minha família no altar",
    tag: "Culto de Família",
  },        
  {
    nome: "vila 104",
    dia: "Sabado • 19:00h",
    horario: "Todo sabado às 19:00",
    tema: "Família com Deus",
    tag: "Culto de Família",
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
    tema: "Vivendo pela Fé",
    tag: "Culto de Discipulado",
  },
  {
    nome: "Vila 104",
    dia: "quarta • 19:00h ",
    horario: "Toda quarta às 19:00",
    tema: "Estudo Biblico",
    tag: "Culto de ensinamento",
  },
  {
    nome: "Mocinha Magalhães",
    dia: "Quarta • 19:00h",
    horario: "Toda quarta às 19:00",
    tema: "Estudo Biblico",
    tag: "Culto de ensinamento",
  },
];

const AVISOS = [
  "🙏Esta é a nossa progamação de cultos desta semana(Os cultos desta semana estão listados acima).",
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
    whatsapp: "5568996051901",
    instagram: "https://www.instagram.com/renildaaraujo03/?__pwa=1",
  },
  {
    nome: "Pr. Denis Willian",
    titulo: "Pastor Local",
    igreja: "Mocinha Magalhães",
    whatsapp: "5568992142076",
    instagram: "https://www.instagram.com/ieada_m.m/?__pwa=1",
  },
  {
    nome: "Pra. Sandra Melo ",
    titulo: "Pastora Local",
    igreja: "Mocinha Magalhães",
    whatsapp: "5568992504089",
    instagram: "https://www.instagram.com/ieada_m.m/?__pwa=1",
  },
  {
    nome: "Pr. Jovenilson Melo",
    titulo: "Pastor Local",
    igreja: "Vila 104",
    whatsapp: "5597981262453",
    instagram: "https://www.instagram.com/igreja.4586382/?__pwa=1",
  },
  {
    nome: "Pra. Maria Conceição",
    titulo: "Pastora Local",
    igreja: "Vila 104",
    whatsapp: "5597981262453",
    instagram: "https://www.instagram.com/cr7428762/?__pwa=1",
  },
  {
    nome: "Pr. Claudio santos ",
    titulo: "Pastor Auxiliar",
    igreja: "Ministerio",
    whatsapp: "5568999449112",
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
  { texto: "Mas em todas estas coisas somos mais que vencedores.", ref: "Romanos 8:37" },
  { texto: "O Senhor pelejará por vós, e vos calareis.", ref: "Êxodo 14:14" },
  { texto: "Tudo posso naquele que me fortalece.", ref: "Filipenses 4:13" },
  { texto: "O choro pode durar uma noite, mas a alegria vem pela manhã.", ref: "Salmos 30:5" },
  { texto: "Porque para Deus nada é impossível.", ref: "Lucas 1:37" },
  { texto: "Mil cairão ao teu lado, e dez mil à tua direita, mas não chegará a ti.", ref: "Salmos 91:7" },
  { texto: "O Senhor é a minha luz e a minha salvação.", ref: "Salmos 27:1" },
  { texto: "Bem-aventurado o homem que põe no Senhor a sua confiança.", ref: "Salmos 40:4" },
  { texto: "Os que esperam no Senhor renovarão as suas forças.", ref: "Isaías 40:31" },
  { texto: "Maior é o que está em vós do que o que está no mundo.", ref: "1 João 4:4" },
  { texto: "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.", ref: "Salmos 37:5" },
  { texto: "Deus é o nosso refúgio e fortaleza.", ref: "Salmos 46:1" },
  { texto: "O Senhor firma os passos do homem bom.", ref: "Salmos 37:23" },
  { texto: "A minha graça te basta.", ref: "2 Coríntios 12:9" },
  { texto: "Bem sei eu os pensamentos que penso de vós.", ref: "Jeremias 29:11" },
  { texto: "O Senhor guardará a tua entrada e a tua saída.", ref: "Salmos 121:8" },
  { texto: "Porque Deus não nos deu espírito de temor.", ref: "2 Timóteo 1:7" },
  { texto: "Se Deus é por nós, quem será contra nós?", ref: "Romanos 8:31" },
  { texto: "Aquele que começou boa obra em vós há de completá-la.", ref: "Filipenses 1:6" },
  { texto: "O Senhor te abrirá o seu bom tesouro.", ref: "Deuteronômio 28:12" },
  { texto: "Eis que faço uma coisa nova.", ref: "Isaías 43:19" },
  { texto: "O justo viverá pela fé.", ref: "Romanos 1:17" },
  { texto: "Não temas, porque eu sou contigo.", ref: "Isaías 41:10" },
  { texto: "Nenhuma arma forjada contra ti prosperará.", ref: "Isaías 54:17" },
  { texto: "O Senhor é a força da minha vida.", ref: "Salmos 27:1" },
  { texto: "Quem habita no esconderijo do Altíssimo descansará.", ref: "Salmos 91:1" },
  { texto: "Deleita-te também no Senhor.", ref: "Salmos 37:4" },
  { texto: "Os impossíveis dos homens são possíveis para Deus.", ref: "Lucas 18:27" },
  { texto: "Pedi, e dar-se-vos-á.", ref: "Mateus 7:7" },
  { texto: "Buscai primeiro o Reino de Deus.", ref: "Mateus 6:33" },
  { texto: "A fé remove montanhas.", ref: "Mateus 17:20" },
  { texto: "O Senhor é meu pastor; nada me faltará.", ref: "Salmos 23:1" },
  { texto: "Clama a mim, e responder-te-ei.", ref: "Jeremias 33:3" },
  { texto: "Bem-aventurados os que confiam no Senhor.", ref: "Jeremias 17:7" },
  { texto: "A alegria do Senhor é a vossa força.", ref: "Neemias 8:10" },
  { texto: "O Senhor sustenta os que vacilam.", ref: "Salmos 145:14" },
  { texto: "Tudo tem o seu tempo determinado.", ref: "Eclesiastes 3:1" },
  { texto: "Em Deus faremos proezas.", ref: "Salmos 60:12" },
  { texto: "O Senhor dos Exércitos está conosco.", ref: "Salmos 46:7" },
  { texto: "Sede fortes e corajosos.", ref: "Josué 1:9" },
  { texto: "Bem-aventurados os limpos de coração.", ref: "Mateus 5:8" },
  { texto: "A vitória vem do Senhor.", ref: "Provérbios 21:31" },
  { texto: "O Senhor é fiel para cumprir.", ref: "1 Tessalonicenses 5:24" },
  { texto: "A tua bênção me alcançará.", ref: "Deuteronômio 28:2" },
  { texto: "Em paz me deitarei e dormirei.", ref: "Salmos 4:8" },
  { texto: "O Senhor te exaltará.", ref: "Deuteronômio 28:13" },
  { texto: "A esperança não traz confusão.", ref: "Romanos 5:5" },
  { texto: "O Senhor conhece os que nele confiam.", ref: "Naum 1:7" },
  { texto: "A mão do Senhor não está encolhida.", ref: "Isaías 59:1" },
  { texto: "Fiel é Deus para guardar os seus.", ref: "1 Coríntios 1:9" },
  { texto: "Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar.", ref: "1 João 1:9" },
  { texto: "Cria em mim, ó Deus, um coração puro.", ref: "Salmos 51:10" },
  { texto: "Arrependei-vos e convertei-vos.", ref: "Atos 3:19" },
  { texto: "O Senhor é misericordioso e piedoso.", ref: "Salmos 103:8" },
  { texto: "Ainda que os vossos pecados sejam vermelhos, se tornarão brancos como a neve.", ref: "Isaías 1:18" },
  { texto: "Perdoa as nossas dívidas, assim como perdoamos.", ref: "Mateus 6:12" },
  { texto: "O Filho do Homem tem poder para perdoar pecados.", ref: "Marcos 2:10" },
  { texto: "Bem-aventurado aquele cuja transgressão é perdoada.", ref: "Salmos 32:1" },
  { texto: "O amor cobre multidão de pecados.", ref: "1 Pedro 4:8" },
  { texto: "Voltai para mim, porque eu vos remi.", ref: "Isaías 44:22" },
  { texto: "O Senhor é bom para os que se arrependem.", ref: "Lamentações 3:25" },
  { texto: "Ide e não peques mais.", ref: "João 8:11" },
  { texto: "Deus não rejeita um coração quebrantado.", ref: "Salmos 51:17" },
  { texto: "Perdoai-vos uns aos outros.", ref: "Colossenses 3:13" },
  { texto: "Onde abundou o pecado, superabundou a graça.", ref: "Romanos 5:20" },
  { texto: "Eu sou o caminho, a verdade e a vida.", ref: "João 14:6" },
  { texto: "O Senhor lança nossos pecados nas profundezas do mar.", ref: "Miquéias 7:19" },
  { texto: "Buscai o Senhor enquanto se pode achar.", ref: "Isaías 55:6" },
  { texto: "Há alegria no céu por um pecador que se arrepende.", ref: "Lucas 15:7" },
  { texto: "O sangue de Jesus nos purifica de todo pecado.", ref: "1 João 1:7" }
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
