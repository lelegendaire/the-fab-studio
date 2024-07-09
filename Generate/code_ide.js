
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {


        const body_index = document.querySelector(".body_index")
        const header_language = document.querySelector(".header_language")

        if (header_language) { } else {
            const header_language = document.createElement("div");
            header_language.classList.add("header_language")
            header_language.id = "header_language"
            const carCode = document.createElement("div");
            carCode.classList.add("card_code")
            carCode.id = "card_code"

            document.body.appendChild(header_language)
            document.body.appendChild(carCode)
            // Fonction pour créer un élément de l'en-tête
            function createHeaderElement(iconClassBx, iconClassBxName, titleText, header_name) {
                const headerElement = document.createElement("div");
                headerElement.classList.add(header_name);

                const icon = document.createElement("i");
                icon.classList.add(iconClassBx);
                icon.classList.add(iconClassBxName);

                const title = document.createElement("span");
                title.classList.add("title_head");
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
            header_language.appendChild(htmlHeader);
            header_language.appendChild(cssHeader);
            header_language.appendChild(jsHeader);
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
                textarea.setAttribute("readonly", "true");
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


            carCode.appendChild(htmlCodeEditor)
            carCode.appendChild(cssCodeEditor)
            carCode.appendChild(jsCodeEditor)
            const consoleDiv = document.createElement('div');
            consoleDiv.classList.add('console');
            consoleDiv.id = "console"

            // Création de l'élément div avec la classe "header"
            const headerDiv = document.createElement('div');
            headerDiv.classList.add('header');

            // Création de l'élément span avec la classe "title"
            const titleSpan = document.createElement('span');
            titleSpan.classList.add('title_console');
            titleSpan.textContent = 'Console';

            // Ajout du span à l'élément div avec la classe "header"
            headerDiv.appendChild(titleSpan);

            // Création de l'élément div avec la classe "console_editor"
            const editorDiv = document.createElement('div');
            editorDiv.classList.add('console_editor');

            // Création de l'élément textarea avec la classe "console_texterea"
            const textarea = document.createElement('textarea');
            textarea.classList.add('console_texterea');

            // Ajout du textarea à l'élément div avec la classe "console_editor"
            editorDiv.appendChild(textarea);

            // Ajout des éléments créés à l'élément div avec la classe "console"
            consoleDiv.appendChild(headerDiv);
            consoleDiv.appendChild(editorDiv);
            document.body.appendChild(consoleDiv);
        }

        const header_html = document.querySelector(".header_html");
        const header_css = document.querySelector(".header_css");
        const header_js = document.querySelector(".header_js");
        const page_of_preview = document.querySelector(".voir_mon_site");
        page_of_preview.addEventListener("click", function () {
            window.open("index_view_site.html");
        });
        const html = document.querySelector(".html");
        const css = document.querySelector(".css");
        const js = document.querySelector(".js");
        const codeTextarea_html = document.getElementById("codeTextarea_html");
        const codeTextarea_css = document.getElementById("codeTextarea_css");
        const codeTextarea_js = document.getElementById("codeTextarea_js");

        const contentKey = new URLSearchParams(window.location.search).get(
            "contentKey"
        );
        if (contentKey) {
            const request = window.indexedDB.open("MaBaseDeDonnees", 1);

            request.addEventListener("success", function (event) {
                const db = event.target.result;
                const transaction_first = db.transaction(["GestionSite"], "readonly");
                const objectStore_first = transaction_first.objectStore("GestionSite");

                const request2 = objectStore_first.get(Number(contentKey));

                request2.onsuccess = function (event) {
                    const code_site = event.target.result;
                    if (code_site) {

                        // Faites quelque chose avec les données récupérées
                        // Récupérez le contenu HTML à partir du localStorage en utilisant la clé

                        const [siteId, codeSite] = code_site.SiteContent.split('¤');



                        const transaction = db.transaction(["Site"], "readonly");
                        const objectStore = transaction.objectStore("Site");
                        const updateRequest = objectStore.get(siteId)
                        // Utilisez la clé "SiteId" pour mettre à jour l'entrée


                        updateRequest.onsuccess = function (event) {
                            const code_site_extract = event.target.result;


                            if (code_site_extract) {
                                const TrueCode = JSON.parse(code_site_extract.value).content;
                                const tempElement = document.createElement('div');
                                tempElement.innerHTML = codeSite;
                                const tempElement2 = document.createElement('div');
                                tempElement2.innerHTML = TrueCode;
                                const body_index_cs = tempElement.querySelector(".body_index").innerHTML
                                const body_index_tc = tempElement2.querySelector(".body_index").innerHTML

                                if (body_index_cs === body_index_tc) {
                                    console.log("Same")

                                    const body_index3 = document.querySelector(".body_index")
                                    const excludedElements = [
                                        document.getElementById("button_div"),
                                        document.getElementById("bar_edit"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("header_bar_div"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("save_notif"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("toast"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("header_bar"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("reglage_zoom"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("custom-menu"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("code_ide"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("database"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("script"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("script_zip"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("site_map"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("variable"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("side_bar_tool"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("header_language"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("card_code"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("console"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("download_id"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("infinity_space"), // Ajoutez l'élément à exclure ici
                                    ];
                                    body_index3.style.width = "100%"
                                    body_index3.style.height = "100%"
                                    body_index3.style.overflow = 'hidden';
                                    body_index3.style.borderRadius = "0px"
                                    // Cloner le document pour ne pas altérer l'original
                                    const clonedDocument = document.cloneNode(true);
                                    // Supprimer les éléments à exclure du clonage
                                    excludedElements.forEach((excludedElement) => {
                                        if (excludedElement) {
                                            const excludedElementClone = clonedDocument.getElementById(
                                                excludedElement.id
                                            );
                                            if (excludedElementClone) {
                                                excludedElementClone.remove();
                                            }
                                        }
                                    });

                                    // Générer le contenu à télécharger
                                    const generatedContent = `<!DOCTYPE html>
                          <html lang="fr">
                          ${clonedDocument.documentElement.innerHTML}
                          </html>`;
                                    clonedDocument.querySelector(".body_index").innerHTML = body_index_cs
                                    extract_code_with_body(generatedContent)
                                } else {
                                    console.log("Diff")

                                    const body_index3 = document.querySelector(".body_index")
                                    const excludedElements = [
                                        document.getElementById("button_div"),
                                        document.getElementById("bar_edit"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("header_bar_div"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("save_notif"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("toast"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("header_bar"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("reglage_zoom"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("custom-menu"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("code_ide"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("database"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("script"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("script_zip"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("site_map"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("variable"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("side_bar_tool"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("header_language"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("card_code"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("console"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("download_id"), // Ajoutez l'élément à exclure ici
                                        document.getElementById("infinity_space"), // Ajoutez l'élément à exclure ici
                                    ];
                                    body_index3.style.width = "100%"
                                    body_index3.style.height = "100%"
                                    body_index3.style.overflow = 'hidden';
                                    body_index3.style.borderRadius = "0px"
                                    // Cloner le document pour ne pas altérer l'original
                                    const clonedDocument = document.cloneNode(true);
                                    console.log("yes?")
                                    // Supprimer les éléments à exclure du clonage
                                    excludedElements.forEach((excludedElement) => {
                                        if (excludedElement) {
                                            const excludedElementClone = clonedDocument.getElementById(
                                                excludedElement.id
                                            );
                                            if (excludedElementClone) {
                                                excludedElementClone.remove();
                                            }
                                        }
                                    });

                                    // Générer le contenu à télécharger
                                    const generatedContent = `<!DOCTYPE html>
      <html lang="fr">
      ${clonedDocument.documentElement.innerHTML}
      </html>`;
                                    clonedDocument.querySelector(".body_index").innerHTML = body_index_tc
                                    extract_code_with_body(generatedContent)
                                }
                            }
                        };

                    }
                }
            });






            function extract_code_with_body(generatedContent) {
                const htmlCode = generatedContent;
                const body_index3 = document.querySelector(".body_index")
                body_index3.style.width = "90%"

                body_index3.style.height = "747px"
                body_index3.style.overflowY = 'scroll';
                body_index3.style.borderRadius = "15px"
                // Sélectionner le code HTML de la page actuelle

                // Sélectionner tous les styles de la page actuelle
                const styleElements = document.querySelectorAll('style');
                const styleCode = Array.from(styleElements).map(style => style.textContent).join('\n');

                // Sélectionner tous les scripts de la page actuelle
                const scriptElements = document.querySelectorAll('script');

                const scriptCode = Array.from(scriptElements).slice(5).map(script => script.textContent).join('\n');
                const savedLogo = localStorage.getItem("selectedLogo");
                // Injecter le code dans les zones de texte
                let imageCounter = 1;
                function getFormattedDate() {
                    const date = new Date();
                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const day = String(date.getDate()).padStart(2, '0');
                    return `${year}${month}${day}`;
                }
                const updatedContent = htmlCode.replace(/src="sitemap\.js"/gi, 'src="script.js"');

                // Supprimer toutes les balises <script> (sauf celles qui incluent src="script.js") et les balises <style>
                const excludedScriptsStylesHTML = updatedContent.replace(
                    /<script\b(?![^>]*\bsrc="script\.js")\b[^<]*>[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>|<style\b[^<]*>[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi,
                    ''
                );

                // Afficher ou utiliser le contenu modifié sans les scripts et styles non désirés

                const htmlContent = excludedScriptsStylesHTML.replace(
                    /data:image\/png;base64,[^\"]+/gi,
                    function (match) {
                        // Vérifier si l'image correspond à `savedLogo`
                        if (match === savedLogo) {
                            return 'logo.png';
                        } else if (match.match("center")) {
                            // Générer un nom d'image unique
                            const formattedDate = getFormattedDate();
                            const imageName = `image_${formattedDate}_${imageCounter++}.png`;


                            return imageName + `&quot;) center center / cover `;
                        } else {
                            // Générer un nom d'image unique
                            const formattedDate = getFormattedDate();
                            const imageName = `image_${formattedDate}_${imageCounter++}.png`;


                            return imageName
                        }
                    }
                );
                // Injecter le code sans les balises <script> et <style> dans la zone de texte HTML

                // Fonction pour indenter le code HTML


                // Utiliser la fonction pour indenter le code HTML
                const indentedHTML = indentHTML(htmlContent);

                // Injecter le code HTML indénté dans la zone de texte HTML
                codeTextarea_html.textContent = indentedHTML;



                codeTextarea_css.textContent = styleCode;
                // Expression régulière pour cibler la partie du code incluant window.addEventListener et window.location.replace("../index.html");
                const regex = /window\.addEventListener\([\s\S]*?window\.location\.replace\("\.\.\/index\.html"\);\s*\}\);/;

                // Remplacer la partie du code par une chaîne vide
                const cleanedScript = scriptCode.replace(regex, '');

                // Afficher le code nettoyé dans la zone de texte JS
                codeTextarea_js.textContent = cleanedScript;
            }

        } else {

            const excludedElements = [
                document.getElementById("button_div"),
                document.getElementById("bar_edit"), // Ajoutez l'élément à exclure ici
                document.getElementById("save_notif"), // Ajoutez l'élément à exclure ici
                document.getElementById("toast"), // Ajoutez l'élément à exclure ici
                document.getElementById("header_bar"), // Ajoutez l'élément à exclure ici
                document.getElementById("reglage_zoom"), // Ajoutez l'élément à exclure ici
                document.getElementById("custom-menu"), // Ajoutez l'élément à exclure ici
                document.getElementById("code_ide"), // Ajoutez l'élément à exclure ici
                document.getElementById("database"), // Ajoutez l'élément à exclure ici
                document.getElementById("script"), // Ajoutez l'élément à exclure ici
                document.getElementById("script_zip"), // Ajoutez l'élément à exclure ici
                document.getElementById("site_map"), // Ajoutez l'élément à exclure ici
                document.getElementById("variable"), // Ajoutez l'élément à exclure ici
                document.getElementById("side_bar_tool"), // Ajoutez l'élément à exclure ici
                document.getElementById("header_language"), // Ajoutez l'élément à exclure ici
                document.getElementById("card_code"), // Ajoutez l'élément à exclure ici
                document.getElementById("console"), // Ajoutez l'élément à exclure ici
                document.getElementById("download_id"), // Ajoutez l'élément à exclure ici
                document.getElementById("infinity_space"), // Ajoutez l'élément à exclure ici

            ];
            const clonedDocument = document.cloneNode(true);

            // Supprimer les éléments à exclure du clonage
            excludedElements.forEach((excludedElement) => {
                if (excludedElement) {
                    const excludedElementClone = clonedDocument.getElementById(
                        excludedElement.id
                    );
                    if (excludedElementClone) {
                        excludedElementClone.remove();
                    }
                }
            });
            const htmlCode = `<!DOCTYPE html>
        <html lang="fr">
     
          ${clonedDocument.documentElement.innerHTML}
      
        </html>`;

            // Sélectionner le code HTML de la page actuelle

            // Sélectionner tous les styles de la page actuelle
            const styleElements = document.querySelectorAll('style');
            const styleCode = Array.from(styleElements).map(style => style.textContent).join('\n');

            // Sélectionner tous les scripts de la page actuelle
            const scriptElements = document.querySelectorAll('script');

            const scriptCode = Array.from(scriptElements).slice(6).map(script => script.textContent).join('\n');
            const savedLogo = localStorage.getItem("selectedLogo");
            // Injecter le code dans les zones de texte
            const updatedContent = htmlCode.replace(/src="sitemap\.js"/gi, 'src="script.js"');

            // Supprimer toutes les balises <script> (sauf celles qui incluent src="script.js") et les balises <style>
            const excludedScriptsStylesHTML = updatedContent.replace(
                /<script\b(?![^>]*\bsrc="script\.js")\b[^<]*>[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>|<style\b[^<]*>[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi,
                ''
            ); const htmlContent = excludedScriptsStylesHTML.replace(
                /data:image\/png;base64,[^\"]+/gi,
                function (match) {
                    // Vérifier si l'image correspond à `savedLogo`
                    if (match === savedLogo) {
                        return 'logo.png';
                    } else if (match.match("center")) {
                        // Générer un nom d'image unique
                        const formattedDate = getFormattedDate();
                        const imageName = `image_${formattedDate}_${imageCounter++}.png`;


                        return imageName + `&quot;) center center / cover `;
                    } else {
                        // Générer un nom d'image unique
                        const formattedDate = getFormattedDate();
                        const imageName = `image_${formattedDate}_${imageCounter++}.png`;


                        return imageName
                    }
                }
            );
            // Injecter le code sans les balises <script> et <style> dans la zone de texte HTML

            // Fonction pour indenter le code HTML


            // Utiliser la fonction pour indenter le code HTML
            const indentedHTML = indentHTML(htmlContent);

            // Injecter le code HTML indénté dans la zone de texte HTML
            codeTextarea_html.textContent = indentedHTML;


            // Expression régulière pour cibler la partie du code incluant window.addEventListener et window.location.replace("../index.html");
            const regex = /window\.addEventListener\([\s\S]*?window\.location\.replace\("\.\.\/index\.html"\);\s*\}\);/;

            // Remplacer la partie du code par une chaîne vide
            const cleanedScript = scriptCode.replace(regex, '');

            // Afficher le code nettoyé dans la zone de texte JS
            codeTextarea_js.textContent = cleanedScript;


            codeTextarea_css.textContent = styleCode;

        }
        function indentHTML(code) {
            let output = '';
            let indentation = 0;

            // Ajouter 2 espaces de plus pour chaque niveau d'indentation
            const spaces = '  ';

            // Splitter le code HTML en lignes
            const lines = code.split(/>\s*</);

            lines.forEach((line) => {
                if (line.match(/^\/\w/)) {
                    indentation--;
                }

                const pad = spaces.repeat(indentation);
                output += pad + '<' + line + '>\n';

                if (line.match(/^<?\w[^>]*[^\/]$/)) {
                    indentation++;
                }
            });

            return output.slice(1, -2).trim();


        }
        if (header_html) {

            header_html.addEventListener("click", function () {

                html.style.display = "block";
                header_css.classList.remove("active");
                header_js.classList.remove("active");
                header_html.classList.add("active");
                css.style.display = "none";
                js.style.display = "none";
            });
            header_css.addEventListener("click", function () {
                css.style.display = "block";
                header_html.classList.remove("active");
                header_js.classList.remove("active");
                header_css.classList.add("active");
                html.style.display = "none";
                js.style.display = "none";
            });
            header_js.addEventListener("click", function () {
                js.style.display = "block";
                header_html.classList.remove("active");
                header_css.classList.remove("active");
                header_js.classList.add("active");
                html.style.display = "none";
                css.style.display = "none";
            });
        }

        function number_scroll_html() {
            // Sélectionnez les éléments
            const textarea = document.getElementById("codeTextarea_html");
            const lineNumbers = document.getElementById("lineNumbers_html");
            if (textarea) {
                // Ajoutez un gestionnaire d'événements de défilement à la zone de texte
                textarea.addEventListener("scroll", syncScroll);
                textarea.addEventListener("input", updateLineNumbers);

                const resizeObserver = new ResizeObserver(sizeSync);

                // Ajoutez la zone de texte à la liste des éléments à surveiller
                resizeObserver.observe(textarea);

                function syncScroll() {
                    lineNumbers.scrollTop = textarea.scrollTop;
                }
                // Initialisez les numéros de ligne
                updateLineNumbers();

                // Ajoutez un gestionnaire d'événements de défilement à la fenêtre pour mettre à jour les numéros de ligne lors du redimensionnement

                function updateLineNumbers() {
                    // Réinitialisez les numéros de ligne
                    lineNumbers.innerHTML = "";

                    // Séparez le contenu de la zone de texte en lignes
                    const lines = textarea.value.split("\n");
                    const totalLines = lines.length;

                    // Ajoutez les numéros de ligne à la division des numéros de ligne
                    for (let i = 1; i <= totalLines; i++) {
                        const lineNum = document.createElement("div");
                        lineNum.textContent = i;
                        lineNumbers.appendChild(lineNum);
                    }
                }
                function sizeSync() {
                    // Récupérez la largeur de la zone de texte
                    const textareaHeight = textarea.clientHeight + "px";

                    // Appliquez la largeur aux numéros de ligne
                    lineNumbers.style.height = textareaHeight;
                }
            }
        }
        function number_scroll_css() {
            // Sélectionnez les éléments
            const textarea = document.getElementById("codeTextarea_css");
            const lineNumbers = document.getElementById("lineNumbers_css");
            if (textarea) {
                textarea.addEventListener("scroll", syncScroll);
                textarea.addEventListener("input", updateLineNumbers);

                // Ajoutez un gestionnaire d'événements à la fenêtre pour mettre à jour les numéros de ligne lors du redimensionnement
                const resizeObserver = new ResizeObserver(sizeSync);

                // Ajoutez la zone de texte à la liste des éléments à surveiller
                resizeObserver.observe(textarea);
                updateLineNumbers();
                function sizeSync() {
                    // Récupérez la largeur de la zone de texte
                    const textareaHeight = textarea.clientHeight + "px";

                    // Appliquez la largeur aux numéros de ligne
                    lineNumbers.style.height = textareaHeight;
                }
                // Fonction pour synchroniser le défilement avec les numéros de ligne
                function syncScroll() {
                    lineNumbers.scrollTop = textarea.scrollTop;
                }

                function updateLineNumbers() {
                    // Réinitialisez les numéros de ligne
                    lineNumbers.innerHTML = "";

                    // Séparez le contenu de la zone de texte en lignes
                    const lines = textarea.value.split("\n");
                    const totalLines = lines.length;

                    // Ajoutez les numéros de ligne à la division des numéros de ligne
                    for (let i = 1; i <= totalLines; i++) {
                        const lineNum = document.createElement("div");
                        lineNum.textContent = i;
                        lineNumbers.appendChild(lineNum);
                    }
                }
            }
        }

        function number_scroll_js() {
            // Sélectionnez les éléments
            const textarea = document.getElementById("codeTextarea_js");
            const lineNumbers = document.getElementById("lineNumbers_js");
            if (textarea) {
                // Ajoutez un gestionnaire d'événements de défilement à la zone de texte
                textarea.addEventListener("scroll", syncScroll);
                textarea.addEventListener("input", updateLineNumbers);

                // Ajoutez un gestionnaire d'événements à la fenêtre pour mettre à jour les numéros de ligne lors du redimensionnement
                const resizeObserver = new ResizeObserver(sizeSync);

                // Ajoutez la zone de texte à la liste des éléments à surveiller
                resizeObserver.observe(textarea);
                updateLineNumbers();
                function sizeSync() {
                    // Récupérez la largeur de la zone de texte
                    const textareaHeight = textarea.clientHeight + "px";

                    // Appliquez la largeur aux numéros de ligne
                    lineNumbers.style.height = textareaHeight;
                }
                function syncScroll() {
                    lineNumbers.scrollTop = textarea.scrollTop;
                }
                function updateLineNumbers() {
                    setTimeout(() => {
                        // Réinitialisez les numéros de ligne
                        lineNumbers.innerHTML = "";

                        // Séparez le contenu de la zone de texte en lignes
                        const lines = textarea.value.split("\n");
                        const totalLines = lines.length;

                        // Ajoutez les numéros de ligne à la division des numéros de ligne
                        for (let i = 1; i <= totalLines; i++) {
                            const lineNum = document.createElement("div");
                            lineNum.textContent = i;
                            lineNumbers.appendChild(lineNum);
                        }
                    }, 1000);
                }
            }
        }

        number_scroll_html();
        number_scroll_css();
        number_scroll_js();
        const code_btn = document.querySelector(".code_ide")
        const embed_view = document.querySelector(".embed_view")
        const bar_edit = document.querySelector(".bar_edit")

        
        const reglage_zoom = document.querySelector(".reglage_zoom")
        const headerLanguage = document.querySelector(".header_language")
        const console_log = document.querySelector(".console")
        const infinitySpace = document.querySelector('.infinity_space');

        const card_code = document.querySelector(".card_code")
        embed_view.addEventListener("click", function () {
            document.body.style.overflowY = "scroll"

            body_index.style.display = "block"
            bar_edit.style.display = "flex"
            
            reglage_zoom.style.display = "flex"
            body_index.style.display = "block"
            bar_edit.style.display = "flex"
            headerLanguage.style.display = "none"
            card_code.style.display = "none"
            console_log.style.display = "none"

            if (infinitySpace) {

                infinitySpace.style.display = "none"
            }

        });
        code_btn.addEventListener("click", function () {
            document.body.style.overflowY = "scroll"
            body_index.style.display = "none"
            bar_edit.style.display = "none"
            
            reglage_zoom.style.display = "none"
            headerLanguage.style.display = "flex"
            card_code.style.display = "flex"
            console_log.style.display = "block"

            if (infinitySpace) {

                infinitySpace.style.display = "none"
            }
        });

        document.addEventListener('keydown', function (event) {
            // Vérifiez si les touches Ctrl (ou Cmd) et L sont enfoncées simultanément
            if ((event.ctrlKey || event.metaKey) && event.key === 'l') {
                // Empêchez l'action par défaut (qui serait de placer le curseur dans la barre d'adresse)
                event.preventDefault();

                // Appelez la fonction pour sélectionner la ligne
                selectCurrentLine();
            }
        });

        function selectCurrentLine() {
            const textarea = document.querySelector(".html .code_texterea");

            // Récupérez la position du curseur
            const cursorPosition = textarea.selectionStart;

            // Trouvez le début de la ligne actuelle en reculant depuis la position du curseur
            let startOfLine = cursorPosition;
            while (startOfLine > 0 && textarea.value[startOfLine - 1] !== '\n') {
                startOfLine--;
            }

            // Trouvez la fin de la ligne actuelle en avançant depuis la position du curseur
            let endOfLine = cursorPosition;
            while (endOfLine < textarea.value.length && textarea.value[endOfLine] !== '\n') {
                endOfLine++;
            }

            // Sélectionnez la ligne
            textarea.setSelectionRange(startOfLine, endOfLine);
        }
        document.addEventListener('keydown', function (event) {
            // Vérifiez si les touches Shift, Alt et la flèche vers le bas sont enfoncées simultanément
            if (event.shiftKey && event.altKey && event.key === 'ArrowDown') {
                event.preventDefault();
                duplicateSelection('down');
            }

            // Vérifiez si les touches Shift, Alt et la flèche vers le haut sont enfoncées simultanément
            if (event.shiftKey && event.altKey && event.key === 'ArrowUp') {
                event.preventDefault();
                duplicateSelection('up');
            }
        });

        function duplicateSelection(direction) {
            const textarea = document.querySelector(".html .code_texterea");

            // Vérifiez s'il y a une sélection dans le champ de texte
            if (textarea.selectionStart !== textarea.selectionEnd) {
                const selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);

                // Déterminez la position du curseur après la sélection
                let cursorPosition = textarea.selectionEnd;

                // Insérez le texte sélectionné dans la direction opposée
                if (direction === 'down') {
                    const textBefore = textarea.value.substring(0, cursorPosition);
                    const textAfter = textarea.value.substring(cursorPosition);
                    textarea.value = textBefore + '\n' + selectedText + textAfter;
                } else if (direction === 'up') {
                    const textBefore = textarea.value.substring(0, cursorPosition - selectedText.length);
                    const textAfter = textarea.value.substring(cursorPosition - selectedText.length);
                    textarea.value = textBefore + '\n' + selectedText + textAfter;
                }

                // Mise à jour de la sélection après duplication
                textarea.setSelectionRange(cursorPosition, cursorPosition + selectedText.length + 1);
            }
        }
        setTimeout(() => {// Réinitialisez les numéros de ligne
            const codeTextarea_html = document.getElementById('codeTextarea_html');
            const codeTextarea_css = document.getElementById('codeTextarea_css');


            if (codeTextarea_html) {
                codeTextarea_html.addEventListener('input', function (event) {
                    const cursorPos = codeTextarea_html.selectionStart;
                    const code = codeTextarea_html.value;

                    // Auto-fermeture des balises
                    if (code[cursorPos - 1] === '>') {
                        const lastOpenBracket = code.lastIndexOf('<', cursorPos - 1);
                        const textBetweenBrackets = code.substring(lastOpenBracket + 1, cursorPos - 1);
                        const match = textBetweenBrackets.match(/^(\w+)/);

                        if (match) {
                            const nomBalise = match[1].toLowerCase();
                            const baliseFermante = `</${nomBalise}>`;
                            codeTextarea_html.value = code.substring(0, cursorPos) +
                                baliseFermante +
                                code.substring(cursorPos);

                            codeTextarea_html.setSelectionRange(cursorPos, cursorPos);
                        }
                    }

                    // Ajout automatique des guillemets après le signe égal (=) pour "class" ou "id"
                    const beforeCursor = code.substring(0, cursorPos).toLowerCase();
                    const lastIndexOfClassOrId = Math.max(
                        beforeCursor.lastIndexOf("class="),
                        beforeCursor.lastIndexOf("id=")
                    );

                    if (lastIndexOfClassOrId !== -1 && !/["']/.test(beforeCursor.slice(lastIndexOfClassOrId))) {
                        codeTextarea_html.value = code.substring(0, cursorPos) +
                            '""' +
                            code.substring(cursorPos);

                        const newCursorPos = cursorPos + 1;
                        codeTextarea_html.setSelectionRange(newCursorPos, newCursorPos);
                    }
                    // Auto-fermeture des accolades
                    if (code[cursorPos - 1] === `{`) {
                        codeTextarea_html.value = code.substring(0, cursorPos) +
                            `}` +
                            code.substring(cursorPos);

                        codeTextarea_html.setSelectionRange(cursorPos, cursorPos);
                    }
                    // Auto-fermeture des accolades
                    if (code[cursorPos - 1] === '"') {
                        codeTextarea_html.value = code.substring(0, cursorPos) +
                            '"' +
                            code.substring(cursorPos);

                        codeTextarea_html.setSelectionRange(cursorPos, cursorPos);
                    }

                });


                codeTextarea_css.addEventListener('input', function (event) {
                    const cursorPos = codeTextarea_css.selectionStart;
                    const code = codeTextarea_css.value;

                    if (code[cursorPos - 1] === `{`) {
                        codeTextarea_css.value = code.substring(0, cursorPos) +
                            `}` +
                            code.substring(cursorPos);

                        codeTextarea_css.setSelectionRange(cursorPos, cursorPos);
                    }
                })
            }
        }, 1000);
    }, 1000)
});
