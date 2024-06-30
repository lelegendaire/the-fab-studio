// js/preview.js

var consoleMessages = [];
var originalConsoleLog = console.log;
// Surchargez la fonction console.log pour stocker les messages
console.log = function (message) {
  consoleMessages.push(message);
  // Appelez la fonction d'origine si nécessaire
  originalConsoleLog.apply(console, arguments);
};
const consoleTextarea = document.querySelector('.console_texterea');
console.log("listening")
setTimeout(function () {
  // Réinitialisez la fonction console.log à sa version d'origine
  var originalConsoleLog = console.log;

  // Capturez le dernier message de la console
  var dernierMessageIndex = -1;
  for (var i = consoleMessages.length - 1; i >= 0; i--) {
    if (consoleMessages[i] === "listening") {
      dernierMessageIndex = i;
      break;
    }
  }

  // Filtrer les messages après "finish"
  var messagesApresFinish = consoleMessages.slice(dernierMessageIndex + 1);
  localStorage.setItem("console", messagesApresFinish)
  // Afficher tous les messages dans consoleTextarea


  // Réinitialiser la fonction console.log à sa version d'origine
  console.log = originalConsoleLog;
}, 1000);

// Fonction pour récupérer le code depuis le stockage local et l'afficher
function afficherCodePreview() {
  const codeHTML = localStorage.getItem("codeHTML")
  const codeCSS = localStorage.getItem("codeCSS")
  const codeJS = localStorage.getItem("codeJS")
  const codePython = localStorage.getItem("codePython")
  if (codeHTML) {
    document.documentElement.innerHTML = codeHTML;

    // Si le code contient également du CSS

    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = codeCSS
    document.head.appendChild(styleSheet)

    const script = document.createElement("script");
    script.innerHTML = codeJS
    document.body.appendChild(script)



    // Si la balise <head> est trouvée, déplacez son contenu dans document.head




    // Assurez-vous que document.body est défini avant d'accéder à sa propriété innerHTML



  }
  if (codePython) {

  }




}

// Appeler la fonction pour afficher le code lors du chargement de la page
afficherCodePreview();
