(() => {
  const quizMode = Boolean(document.getElementById("quiz-root"));
  const target = quizMode ? document.body : document.getElementById("cv");
  if (!target) return;

  const toolbar = document.createElement("div");
  toolbar.className = "datashow-toolbar";
  const button = document.createElement("button");
  button.className = "datashow-button";
  button.type = "button";
  button.setAttribute("aria-pressed", "false");
  toolbar.appendChild(button);

  if (quizMode) {
    const header = document.querySelector(".game-header");
    const backLink = header && header.querySelector(".back-btn");
    if (header) header.insertBefore(toolbar, backLink || null);
  } else {
    const content = target.querySelector(".cvi");
    if (content) content.insertBefore(toolbar, content.firstChild);
  }

  const readerSearch = window.datashowSearch;
  let searchDialog;
  if (readerSearch) {
    const searchButton = document.createElement("button");
    searchButton.type = "button";
    searchButton.className = "datashow-button";
    searchButton.textContent = readerSearch.label;
    searchButton.title = readerSearch.label + " (B)";
    toolbar.prepend(searchButton);

    searchDialog = document.createElement("dialog");
    searchDialog.className = "datashow-search";
    searchDialog.setAttribute("aria-labelledby", "datashow-search-title");
    searchDialog.innerHTML = `
      <form>
        <div class="search-heading">
          <h2 id="datashow-search-title"></h2>
          <button type="button" class="datashow-button search-close">Fechar</button>
        </div>
        <label for="datashow-query"></label>
        <div class="search-fields">
          <input id="datashow-query" type="search" autocomplete="off" maxlength="100" required>
          <button type="submit" class="datashow-button">Buscar</button>
        </div>
        <p class="search-message" role="status"></p>
        <div class="search-results"></div>
      </form>`;
    target.appendChild(searchDialog);
    searchDialog.querySelector("h2").textContent = readerSearch.label;
    searchDialog.querySelector("label").textContent = readerSearch.hint;
    const input = searchDialog.querySelector("input");
    const message = searchDialog.querySelector(".search-message");
    const resultsBox = searchDialog.querySelector(".search-results");
    const choose = result => {
      result.open();
      searchDialog.close();
      target.scrollTop = 0;
      searchButton.focus();
    };
    const openSearch = () => {
      if (searchDialog.open || !target.getClientRects().length) return;
      input.value = "";
      message.textContent = "";
      resultsBox.replaceChildren();
      searchDialog.showModal();
      input.focus();
    };

    searchButton.addEventListener("click", openSearch);
    searchDialog.querySelector(".search-close").addEventListener("click", () => searchDialog.close());
    searchDialog.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      const { results = [], error } = readerSearch.find(input.value.trim());
      resultsBox.replaceChildren();
      message.textContent = error || "";
      if (results.length === 1) {
        choose(results[0]);
        return;
      }
      if (results.length > 1) message.textContent = "Escolha um resultado ou refine a busca.";
      for (const result of results) {
        const option = document.createElement("button");
        option.type = "button";
        option.className = "datashow-button";
        option.textContent = result.label;
        option.addEventListener("click", () => choose(result));
        resultsBox.appendChild(option);
      }
    });
    document.addEventListener("keydown", event => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.repeat) return;
      if (event.target instanceof Element && event.target.closest("input, textarea, select, [contenteditable]")) return;
      if (event.key.toLowerCase() === "b" && !searchDialog.open && target.getClientRects().length) {
        event.preventDefault();
        openSearch();
      }
    });
  }

  function isActive() {
    return document.fullscreenElement === target || target.classList.contains("datashow-fallback");
  }

  function syncButton() {
    const active = isActive();
    button.setAttribute("aria-pressed", String(active));
    button.title = active ? "Sair do modo Datashow (F ou Esc)" : "Abrir modo Datashow (F)";
    button.innerHTML = active ? "⤢ Sair do Datashow" : "⛶ Datashow";
  }

  async function togglePresentation() {
    if (!isActive() && !target.getClientRects().length) return;
    if (document.fullscreenElement === target) {
      await document.exitFullscreen();
    } else if (target.classList.contains("datashow-fallback")) {
      target.classList.remove("datashow-fallback");
    } else if (target.requestFullscreen) {
      try {
        await target.requestFullscreen();
      } catch (error) {
        target.classList.add("datashow-fallback");
      }
    } else {
      target.classList.add("datashow-fallback");
    }
    syncButton();
  }

  button.addEventListener("click", togglePresentation);
  document.addEventListener("fullscreenchange", syncButton);
  document.addEventListener("keydown", event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.repeat || searchDialog?.open) return;
    const typing = event.target instanceof Element && event.target.closest("input, textarea, select, [contenteditable]");
    if (event.key.toLowerCase() === "f" && !typing) {
      event.preventDefault();
      togglePresentation();
      return;
    }
    if (target.classList.contains("datashow-fallback") && event.key === "Escape") {
      target.classList.remove("datashow-fallback");
      syncButton();
      return;
    }
    if (!quizMode && document.title.includes("Harpa") && isActive()) {
      if (event.key === "ArrowRight") { event.preventDefault(); window.carGo && window.carGo(1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); window.carGo && window.carGo(-1); }
    }
  });
  syncButton();
})();
