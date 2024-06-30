// js/ide.js
document.addEventListener("DOMContentLoaded", () => {


  const contentKey = new URLSearchParams(window.location.search).get(
    "contentKey"
  );

  // Récupérez le contenu HTML à partir du localStorage en utilisant la clé
  const code = localStorage.getItem(contentKey);
  console.log(code)


  const h1_title = document.querySelector(".title_code")

  const matchtitle = code.match(/name:(.*?)(language:|$)/s);
  console.log(matchtitle)

  const name_title = matchtitle ? matchtitle[1].trim() : '';
  h1_title.textContent = name_title

  const matchlanguage = code.match(/language:(.*$)/s);
  const language = matchlanguage ? matchlanguage[1].trim() : '';
  if (language === "HTML/CSS/JS") {

    // Fonction pour créer un élément de l'en-tête
    function createHeaderElement(iconClassBx, iconClassBxName, titleText, header_name) {
      const headerElement = document.createElement("div");
      headerElement.classList.add(header_name);

      const icon = document.createElement("i");
      icon.classList.add(iconClassBx);
      icon.classList.add(iconClassBxName);

      const title = document.createElement("span");
      title.classList.add("title");
      title.appendChild(icon);
      title.appendChild(document.createTextNode(` ${titleText}`));

      headerElement.appendChild(title);

      return headerElement;
    }

    // Créer les éléments d'en-tête pour HTML, CSS et JS
    const htmlHeader = createHeaderElement("bx", "bxl-html5", "HTML", "header_html");
    const cssHeader = createHeaderElement("bx", "bxl-css3", "CSS", "header_css");
    const jsHeader = createHeaderElement("bx", "bxl-javascript", "JS", "header_js");

    // Ajouter les éléments à leur conteneur respectif
    const headerContainer = document.querySelector(".header_language"); // Assurez-vous d'avoir un élément avec l'ID "header_container"
    headerContainer.appendChild(htmlHeader);
    headerContainer.appendChild(cssHeader);
    headerContainer.appendChild(jsHeader);
    // Fonction pour créer un éditeur de code
    function createCodeEditor(language, textareaId, lineNumbersId) {
      const codeEditor = document.createElement("div");
      codeEditor.classList.add(language);

      const codeEditorInner = document.createElement("div");
      codeEditorInner.classList.add("code-editor");

      const editorContent = document.createElement("div");
      editorContent.classList.add("editor-content");

      const codeContainer = document.createElement("div");
      codeContainer.classList.add("code");

      const lineNumbers = document.createElement("div");
      lineNumbers.classList.add("line-numbers");
      lineNumbers.id = lineNumbersId;

      const textarea = document.createElement("textarea");
      textarea.setAttribute("spellcheck", "false");
      textarea.classList.add("code_texterea", `language-${language.toLowerCase()}`);
      textarea.id = textareaId;

      codeContainer.appendChild(lineNumbers);
      codeContainer.appendChild(textarea);
      editorContent.appendChild(codeContainer);
      codeEditorInner.appendChild(editorContent);
      codeEditor.appendChild(codeEditorInner);

      return codeEditor;
    }

    // Créer les éditeurs de code pour HTML, CSS et JS
    const htmlCodeEditor = createCodeEditor("html", "codeTextarea_html", "lineNumbers_html");
    const cssCodeEditor = createCodeEditor("css", "codeTextarea_css", "lineNumbers_css");
    const jsCodeEditor = createCodeEditor("js", "codeTextarea_js", "lineNumbers_js");

    // Ajouter les éditeurs de code à leurs conteneurs respectifs


    const card_code = document.querySelector(".card_code"); // Assurez-vous d'avoir un élément avec l'ID "header_container"
    card_code.appendChild(htmlCodeEditor)
    card_code.appendChild(cssCodeEditor)
    card_code.appendChild(jsCodeEditor)
    const codeHTML_text = document.querySelector(".html .code_texterea")
    const codeCSS_text = document.querySelector(".css .code_texterea")
    const codeJS_text = document.querySelector(".js .code_texterea")
    if (code.startsWith("codeHTML:")) {

      // Utilisez une expression régulière pour extraire le code HTML
      const matchHTML = code.match(/codeHTML:(.*?)(codeCSS:|$)/s);
      const codeHTML = matchHTML ? matchHTML[1].trim() : '';
      const matchCSS = code.match(/codeCSS:(.*?)(codeJS:|$)/s);
      // Utilisez codeHTML comme nécessaire
      codeHTML_text.value = codeHTML;


      // Si le code contient également du CSS
      if (matchHTML && matchHTML[2].startsWith("codeCSS:")) {
        console.log(matchHTML)
        // Utilisez une expression régulière pour extraire le code CSS
        const matchCSS = code.match(/codeCSS:(.*?)(codeJS:|$)/s);
        const codeCSS = matchCSS ? matchCSS[1].trim() : '';

        // Utilisez codeCSS comme nécessaire
        codeCSS_text.value = codeCSS;

      }
      if (matchCSS && matchCSS[2].startsWith("codeJS:")) {

        // Utilisez une expression régulière pour extraire le code CSS
        const matchJS = code.match(/codeJS:(.*?)(name:|$)/s);
        const codeJS = matchJS ? matchJS[1].trim() : '';

        const url = "https://snake.fabcvl.repl.co/guess_word.js";
        const url_snake = "https://snake.fabcvl.repl.co/script.js";
        if (name_title === "Guess Word") {

          fetch(url)
            .then(response => response.text())
            .then(data => {
              // Utilisez le contenu du fichier JavaScript
              codeJS_text.value = codeJS + data;

            })
            .catch(error => {
              console.error('Erreur lors de la récupération du fichier JavaScript :', error);
            });
        } else if (name_title === "Snake") {
          fetch(url_snake)
            .then(response => response.text())
            .then(data => {
              // Utilisez le contenu du fichier JavaScript
              codeJS_text.value = data;

            })
            .catch(error => {
              console.error('Erreur lors de la récupération du fichier JavaScript :', error);
            });
        } else {
          codeJS_text.value = codeJS;
        }
        // Utilisez codeCSS comme nécessaire

      }
      // Utilisez codeJS comme nécessaire

    }
  } else {
    const run = document.querySelector(".run")
    run.remove()
    const view = document.querySelector(".view")
    const page_of_preview = document.querySelector(".page_of_preview")

    const input_python = document.createElement("button");
    input_python.classList.add("run_python")
    input_python.type = "submit"
    input_python.innerHTML = 'Run <i class="bx bx-play"></i>';
    input_python.setAttribute("onclick", "execPythonCode()")

    view.appendChild(input_python)
    page_of_preview.parentNode.insertBefore(input_python, page_of_preview);

    const console = document.querySelector(".console")
    console.style.height = "300px"
    const console_editor = document.querySelector(".console_editor")
    console_editor.style.height = "80%"

    // Fonction pour créer un élément de l'en-tête
    function createHeaderElement(iconClassBx, iconClassBxName, titleText, header_name) {
      const headerElement = document.createElement("div");
      headerElement.classList.add(header_name);

      const icon = document.createElement("i");
      icon.classList.add(iconClassBx);
      icon.classList.add(iconClassBxName);

      const title = document.createElement("span");
      title.classList.add("title");
      title.appendChild(icon);
      title.appendChild(document.createTextNode(` ${titleText}`));

      headerElement.appendChild(title);

      return headerElement;
    }

    // Créer les éléments d'en-tête pour HTML, CSS et JS
    const pythonHeader = createHeaderElement("bx", "bxl-python", "Python", "header_python");


    // Ajouter les éléments à leur conteneur respectif
    const headerContainer = document.querySelector(".header_language"); // Assurez-vous d'avoir un élément avec l'ID "header_container"
    headerContainer.appendChild(pythonHeader);

    // Fonction pour créer un éditeur de code
    function createCodeEditor(language, textareaId, lineNumbersId) {
      const codeEditor = document.createElement("div");
      codeEditor.classList.add(language);

      const codeEditorInner = document.createElement("div");
      codeEditorInner.classList.add("code-editor");

      const editorContent = document.createElement("div");
      editorContent.classList.add("editor-content");

      const codeContainer = document.createElement("div");
      codeContainer.classList.add("code");

      const lineNumbers = document.createElement("div");
      lineNumbers.classList.add("line-numbers");
      lineNumbers.id = lineNumbersId;




      const textarea = document.createElement("textarea");
      textarea.setAttribute("spellcheck", "false");
      textarea.lang = "python"
      textarea.classList.add("code_texterea", `language-${language.toLowerCase()}`);
      textarea.id = textareaId;

      codeContainer.appendChild(lineNumbers);
      codeContainer.appendChild(textarea);

      editorContent.appendChild(codeContainer);
      codeEditorInner.appendChild(editorContent);
      codeEditor.appendChild(codeEditorInner);

      return codeEditor;
    }

    // Créer les éditeurs de code pour HTML, CSS et JS
    const pythonCodeEditor = createCodeEditor("python", "codeTextarea_python", "lineNumbers_python");


    // Ajouter les éditeurs de code à leurs conteneurs respectifs






    const card_code = document.querySelector(".card_code"); // Assurez-vous d'avoir un élément avec l'ID "header_container"
    card_code.appendChild(pythonCodeEditor)

  }

  const codePython_text = document.querySelector(".python .code_texterea")

  const confirm = localStorage.getItem("confirmation");
  const savedContent = localStorage.getItem("IDE_info");

  const matchname = savedContent.match(/name:(.*?)(language:|$)/s);
  const name_savedContent = matchname ? matchname[1].trim() : '';

  const codeSavedList = JSON.parse(localStorage.getItem("var_code_saved")) || {};
  if (savedContent && confirm === "true" && name_savedContent === name_title) {
    const savedCode = codeSavedList[name_savedContent - 1];
    console.log(codeSavedList)
    const codeHTML_text = document.querySelector(".html .code_texterea");
    if (codeHTML_text) {
      const codeCSS_text = document.querySelector(".css .code_texterea");
      const codeJS_text = document.querySelector(".js .code_texterea");

      // Initialisez les textareas avec les données sauvegardées
      codeHTML_text.value = savedCode.code_html || '';
      codeCSS_text.value = savedCode.code_css || '';
      codeJS_text.value = savedCode.code_js || '';
    }
  }

});
function run_console() {
  const console_texterea = document.querySelector(".console_editor .console_texterea")
  const console_value = localStorage.getItem("console")
  console_texterea.value = console_value
}

function open_ide() {

  const IDE_info = localStorage.getItem("IDE_info");
  console.log(IDE_info)
  // Redirigez vers la page de modification en passant une référence à la clé dans l'URL
  window.open("IDE.html?contentKey=IDE_info");

}

function open_projects1() {

  localStorage.setItem("IDE_info_1", "");

  // Redirigez vers la page de modification en passant une référence à la clé dans l'URL
  window.open("IDE.html?contentKey=IDE_info_1");

}
function open_snake() {

  localStorage.setItem("IDE_snake", `codeHTML: <!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
    
      <title>Snake</title>
      <link rel="icon" type="icon" href="">
      <link href="style.css" rel="stylesheet" type="text/css" />
    </head>
    
    <body>
      <div class="container noselect">
        <div class="wrapper">
          <button id="replay">
            <i class="fas fa-play"></i>
            REJOUER
          </button>
          <div id="canvas">
    
          </div>
          <div id="ui">
            <h2>SCORE
            </h2>
            <span id="score">00</span>
          </div>
        </div>
        <div id="author">
          <h1>SNAKE</h1> <span>remake by Fab</span>
        </div>
      </div>
      
    
      <script src="script.js"></script>
    
      <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer>
    </body >
    
    </html >` + `codeCSS: @font-face {
        font-family: "game";
        src: url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;800&display=swap");
      }
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      button:focus {
        outline: 0;
      }
      
      html,
      body {
        height: 100%;
        font-family: "Poppins", sans-serif;
        color: #6e7888;
      }
      body {
        background-color: #222738;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #6e7888;
      }
      canvas {
        background-color: #181825;
      }
      .container {
        display: flex;
        width: 100%;
        height: 100%;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
      }
      #ui {
        display: flex;
        align-items: center;
        font-size: 10px;
        flex-flow: column;
        margin-left: 10px;
      }
      h2 {
        font-weight: 200;
        transform: rotate(270deg);
      }
      #score {
        margin-top: 20px;
        font-size: 30px;
        font-weight: 800;
      }
      .noselect {
        user-select: none;
      }
      #replay {
        font-size: 10px;
        padding: 10px 20px;
        background: #6e7888;
        border: none;
        color: #222738;
        border-radius: 20px;
        font-weight: 800;
        transform: rotate(270deg);
        cursor: pointer;
        transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      #replay:hover {
        background: #a6aab5;
        background: #4cffd7;
        transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      #replay svg {
        margin-right: 8px;
      }
      @media (max-width: 600px) {
        #replay {
          margin-bottom: 20px;
        }
        #replay,
        h2 {
          transform: rotate(0deg);
        }
        #ui {
          flex-flow: row wrap;
          margin-bottom: 20px;
        }
        #score {
          margin-top: 0;
          margin-left: 20px;
        }
        .container {
          flex-flow: column wrap;
        }
      }
      #author {
        width: 100%;
        bottom: 40px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: inherit;
        text-transform: uppercase;
        padding-left: 35px;
      }
      #author span {
        font-size: 10px;
        margin-left: 20px;
        color: inherit;
        letter-spacing: 4px;
      }
      #author h1 {
        font-size: 25px;
      }
      .wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
      }
      
      /* Styles pour le bouton de basculement */
      .ai-toggle {
        margin-top: 20px;
      }
      
      .ai-toggle label {
        display: inline-block;
        margin-right: 10px;
        font-weight: bold;
      }
      
      .ai-toggle input[type="checkbox"] {
        display: flex;
      }
      
      .ai-toggle input[type="checkbox"] + label:before {
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 5px;
        vertical-align: middle;
        border: 2px solid #ccc;
        border-radius: 50%;
        background-color: #fff;
        transition: background-color 0.3s ease;
      }
      
      .ai-toggle input[type="checkbox"]:checked + label:before {
        background-color: #5cb85c; /* Couleur lorsque le bouton est activé */
      }
      
      .ai-toggle input[type="checkbox"]:checked + label:after {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-left: 5px;
        vertical-align: middle;
        border-radius: 50%;
        background-color: #fff;
      }
      
      
      ` + `codeJS:` + `name: Snake` + `language: HTML/CSS/JS`);

  // Redirigez vers la page de modification en passant une référence à la clé dans l'URL
  window.open("IDE.html?contentKey=IDE_snake");

}
function open_guess_word() {

  localStorage.setItem("IDE_guessword", `codeHTML: <!DOCTYPE html>
  <!-- Coding By CodingNepal - youtube.com/codingnepal -->
  <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title>Word Guessing Game JavaScript | CodingNepal</title>
      <link rel="stylesheet" href="style.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
      <div class="wrapper">
        <h1>Guess the Word</h1>
        <div class="content">
          <input type="text" class="typing-input" maxlength="1">
          <div class="inputs"></div>
          <div class="details">
            <p class="hint">Hint: <span></span></p>
            <p class="guess-left">Remaining guesses: <span></span></p>
            <p class="wrong-letter">Wrong letters: <span></span></p>
          </div>
          <button class="reset-btn">Reset Game</button>
        </div>
      </div>
  
      <script src="js/words.js"></script>
      <script src="js/script.js"></script>
  
    </body>
  </html>` + `codeCSS: /* Import Google font - Poppins */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body{
    display: flex;
    padding: 0 10px;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    background: #1BB295;
  }
  .wrapper{
    width: 430px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
  .wrapper h1{
    font-size: 25px;
    font-weight: 500;
    padding: 20px 25px;
    border-bottom: 1px solid #ccc;
  }
  .wrapper .content{
    margin: 25px 25px 35px;
  }
  .content .inputs{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .inputs input{
    height: 57px;
    width: 56px;
    margin: 4px;
    font-size: 24px;
    font-weight: 500;
    color: #1ba98c;
    text-align: center;
    border-radius: 5px;
    background: none;
    pointer-events: none;
    text-transform: uppercase;
    border: 1px solid #B5B5B5;
  }
  .typing-input {
    opacity: 0;
    z-index: -999;
    position: absolute;
    pointer-events: none;
  }
  .inputs input:first-child{
    margin-left: 0px;
  }
  .content .details{
    margin: 20px 0 25px;
  }
  .details p{
    font-size: 19px;
    margin-bottom: 10px;
  }
  .content .reset-btn{
    width: 100%;
    border: none;
    cursor: pointer;
    color: #fff;
    outline: none;
    padding: 15px 0;
    font-size: 17px;
    border-radius: 5px;
    background: #1BB295;
    transition: all 0.3s ease;
  }
  .content .reset-btn:hover{
    background: #18a589;
  }
  
  @media screen and (max-width: 460px) {
    .wrapper {
      width: 100%;
    }
    .wrapper h1{
      font-size: 22px;
      padding: 16px 20px;
    }
    .wrapper .content{
      margin: 25px 20px 35px;
    }
    .inputs input{
      height: 51px;
      width: 50px;
      margin: 3px;
      font-size: 22px;
    }
    .details p{
      font-size: 17px;
    }
    .content .reset-btn{
      padding: 14px 0;
      font-size: 16px;
    }
  }` + `codeJS: const wordList = [
    {
        word: "python",
        hint: "programming language"
    },
    {
        word: "guitar",
        hint: "a musical instrument"
    },
    {
        word: "aim",
        hint: "a purpose or intention"
    },
    {
        word: "venus",
        hint: "planet of our solar system"
    },
    {
        word: "gold",
        hint: "a yellow precious metal"
    },
    {
        word: "ebay",
        hint: "online shopping site"
    },
    {
        word: "golang",
        hint: "programming language"
    },
    {
        word: "coding",
        hint: "related to programming"
    },
    {
        word: "matrix",
        hint: "science fiction movie"
    },
    {
        word: "bugs",
        hint: "related to programming"
    },
    {
        word: "avatar",
        hint: "epic science fiction film"
    },
    {
        word: "gif",
        hint: "a file format for image"
    },
    {
        word: "mental",
        hint: "related to the mind"
    },
    {
        word: "map",
        hint: "diagram represent of an area"
    },
    {
        word: "island",
        hint: "land surrounded by water"
    },
    {
        word: "hockey",
        hint: "a famous outdoor game"
    },
    {
        word: "chess",
        hint: "related to an indoor game"
    },
    {
        word: "viber",
        hint: "a social media app"
    },
    {
        word: "github",
        hint: "code hosting platform"
    },
    {
        word: "png",
        hint: "a image file format"
    },
    {
        word: "silver",
        hint: "precious greyish-white metal"
    },
    {
        word: "mobile",
        hint: "an electronic device"
    },
    {
        word: "gpu",
        hint: "computer component"
    },
    {
        word: "java",
        hint: "programming language"
    },
    {
        word: "google",
        hint: "famous search engine"
    },
    {
        word: "venice",
        hint: "famous city of waters"
    },
    {
        word: "excel",
        hint: "microsoft product for windows"
    },
    {
        word: "mysql",
        hint: "a relational database system"
    },
    {
        word: "nepal",
        hint: "developing country name"
    },
    {
        word: "flute",
        hint: "a musical instrument"
    },
    {
        word: "crypto",
        hint: "related to cryptocurrency"
    },
    {
        word: "tesla",
        hint: "unit of magnetic flux density"
    },
    {
        word: "mars",
        hint: "planet of our solar system"
    },
    {
        word: "proxy",
        hint: "related to server application"
    },
    {
        word: "email",
        hint: "related to exchanging message"
    },
    {
        word: "html",
        hint: "markup language for the web"
    },
    {
        word: "air",
        hint: "related to a gas"
    },
    {
        word: "idea",
        hint: "a thought or suggestion"
    },
    {
        word: "server",
        hint: "related to computer or system"
    },
    {
        word: "svg",
        hint: "a vector image format"
    },
    {
        word: "jpeg",
        hint: "a image file format"
    },
    {
        word: "search",
        hint: "act to find something"
    },
    {
        word: "key",
        hint: "small piece of metal"
    },
    {
        word: "egypt",
        hint: "a country name"
    },
    {
        word: "joker",
        hint: "psychological thriller film"
    },
    {
        word: "dubai",
        hint: "developed country name"
    },
    {
        word: "photo",
        hint: "representation of person or scene"
    },
    {
        word: "nile",
        hint: "largest river in the world"
    },
    {
        word: "rain",
        hint: "related to a water"
    },
]

` + `name: Guess Word` + `language: HTML/CSS/JS`);

  // Redirigez vers la page de modification en passant une référence à la clé dans l'URL
  window.open("IDE.html?contentKey=IDE_guessword");

}
document.addEventListener('keydown', function (event) {
  // Vérifiez si les touches Ctrl (ou Cmd) et S sont enfoncées simultanément
  if ((event.ctrlKey || event.metaKey) && event.key === 's') {
    // Empêchez l'action par défaut (qui serait d'enregistrer la page)
    event.preventDefault();

    // Appelez la fonction de sauvegarde
    sauvegarderCode();
  }
});


// Fonction pour sauvegarder le code dans le stockage local
function sauvegarderCode() {
  const codeHTML = document.querySelector(".html .code_texterea").value;
  const title_code = document.querySelector(".title_code").textContent;
  const codeCSS = document.querySelector(".css .code_texterea").value;
  const codeJS = document.querySelector(".js .code_texterea").value;

  if (codeHTML) {
    // Sauvegarder le code dans le stockage local
    localStorage.setItem('codeHTML', codeHTML);
    localStorage.setItem('codeCSS', codeCSS);
    localStorage.setItem('codeJS', codeJS);

    // Récupérer la liste des codes sauvegardés depuis le stockage local
    const codeSavedList = JSON.parse(localStorage.getItem("var_code_saved")) || [];

    // Vérifier si un code avec le même titre existe déjà dans la liste
    const existingCodeIndex = codeSavedList.findIndex((code) => code.name === title_code);
    console.log(codeSavedList)
    console.log(existingCodeIndex)
    console.log(codeSavedList.findIndex((code) => code.name === "1"))
    if (existingCodeIndex !== -1) {
      // Mettre à jour le code existant s'il existe déjà
      codeSavedList[existingCodeIndex].code_html = codeHTML;
      codeSavedList[existingCodeIndex].code_css = codeCSS;
      codeSavedList[existingCodeIndex].code_js = codeJS;
    } else {
      // Ajouter un nouveau code à la liste s'il n'existe pas déjà
      codeSavedList.push({
        name: title_code,
        codeHTML: codeHTML,
        codeCSS: codeCSS,
        codeJS: codeJS
      });
    }

    // Sauvegarder la liste mise à jour dans le stockage local
    localStorage.setItem("var_code_saved", JSON.stringify(codeSavedList));

    // Alert pour indiquer que le code a été sauvegardé (vous pouvez personnaliser ceci)
    alert('Code sauvegardé avec succès!');
  }
}


// Reste de votre fichier js/ide.js

const deleteProjectType = document.querySelector('.delete');
if (deleteProjectType) {
  deleteProjectType.addEventListener("click",)
}

function execPythonCode() {
  var consoleMessages = [];
  var originalConsoleLog = console.log;
  // Surchargez la fonction console.log pour stocker les messages
  console.log = function (message) {
    consoleMessages.push(message);
    // Appelez la fonction d'origine si nécessaire
    originalConsoleLog.apply(console, arguments);
  };

  // Créez un identifiant unique pour chaque script
  const scriptId = 'text_python_' + Date.now();

  // Créez un nouvel élément script
  const scriptTextPython = document.createElement('script');
  scriptTextPython.type = 'text/python';
  scriptTextPython.id = scriptId;

  // Créez une fonction de rappel pour intercepter la console après l'exécution du script


  // Récupérez le code Python depuis le textarea
  const codeTextarea = document.getElementById('codeTextarea_python');
  const pythonCode = codeTextarea.value;

  // Ajoutez le code Python au script
  scriptTextPython.textContent = pythonCode;

  // Ajoutez le script à la fin du body
  document.head.appendChild(scriptTextPython);


  // Vérifiez s'il y a plus de 5 scripts, et supprimez le plus ancien si nécessaire
  const allScripts = document.querySelectorAll('script[type="text/python"]');
  if (allScripts.length > 5) {
    const oldestScript = allScripts[0];
    oldestScript.parentNode.removeChild(oldestScript);
  }
  console.log("finish")
  const consoleTextarea = document.querySelector('.console_texterea');
  consoleTextarea.value = '';
  setTimeout(function () {
    // Réinitialisez la fonction console.log à sa version d'origine
    var originalConsoleLog = console.log;

    // Capturez le dernier message de la console
    var dernierMessageIndex = -1;
    for (var i = consoleMessages.length - 1; i >= 0; i--) {
      if (consoleMessages[i] === "finish") {
        dernierMessageIndex = i;
        break;
      }
    }

    // Filtrer les messages après "finish"
    var messagesApresFinish = consoleMessages.slice(dernierMessageIndex + 1);

    // Afficher tous les messages dans consoleTextarea
    consoleTextarea.value = messagesApresFinish.join('\n');

    // Réinitialiser la fonction console.log à sa version d'origine
    console.log = originalConsoleLog;
  }, 1000);


};





