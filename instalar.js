const installButton = document.getElementById("installApp");
const installHelp = document.getElementById("installHelp");
const standaloneMode = window.matchMedia("(display-mode: standalone)");
let installPrompt;

function updateInstallButton() {
  installButton.hidden = !window.isSecureContext || standaloneMode.matches || navigator.standalone === true;
}

updateInstallButton();
standaloneMode.addEventListener("change", updateInstallButton);

window.addEventListener("beforeinstallprompt", event => {
  if (installButton.hidden) return;
  event.preventDefault();
  installPrompt = event;
});

installButton.addEventListener("click", async () => {
  if (installPrompt) {
    const prompt = installPrompt;
    installPrompt = undefined;
    try {
      await prompt.prompt();
      return;
    } catch {
      // Se o navegador não puder abrir o pedido, exibe as instruções manuais.
    }
  }
  installHelp.showModal();
});

window.addEventListener("appinstalled", () => {
  installPrompt = undefined;
  installButton.hidden = true;
  if (installHelp.open) installHelp.close();
});
