document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {



        const sitemap = document.querySelector(".sitemap")
        const bar_edit = document.querySelector(".bar_edit")
       
        const reglage_zoom = document.querySelector(".reglage_zoom")
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



            // Générer le contenu à télécharger



            function extract_code_with_body(generatedContent) {
                const body_index3 = document.querySelector(".body_index")
                document.body.style.overflowY = "hidden"
                create_webMap(generatedContent)
                body_index3.style.width = "90%"
                body_index3.style.height = "747px"
                body_index3.style.overflowY = 'scroll';
                body_index3.style.borderRadius = "15px"
                body_index3.style.marginBottom = "90px";

                document.body.style.overflowY = "scroll"


            }
        } else {
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

            document.body.style.overflowY = "hidden"

            create_webMap(generatedContent)
            body_index3.style.width = "90%"
            body_index3.style.height = "747px"
            body_index3.style.overflowY = 'scroll';
            body_index3.style.borderRadius = "15px"
            document.body.style.overflowY = "scroll"
            body_index3.style.marginBottom = "90px";

        }
        sitemap.addEventListener("click", function () {
            resetSiteMap()
        })
        function resetSiteMap() {
            const headerLanguage = document.querySelector(".header_language")
            const console_log = document.querySelector(".console")
            const infinity_space = document.querySelector(".infinity_space");
            const body_index = document.querySelector(".body_index");
            const card_code = document.querySelector(".card_code")
            document.body.style.overflowY = "hidden"
            body_index.style.display = "block"
            infinity_space.style.display = "flex"
            body_index.style.display = "block"
            headerLanguage.style.display = "none"
            card_code.style.display = "none"
            console_log.style.display = "none"
            body_index.style.display = "none"
            bar_edit.style.display = "none"
            reglage_zoom.style.display = "none"

        }
        function create_webMap(codeSite) {
            // Créer un élément temporaire pour analyser la chaîne JSON
            const tempElement = document.createElement('div');
            tempElement.innerHTML = codeSite;
            const parser = new DOMParser();
            const doc = parser.parseFromString(codeSite, 'text/html');
            // Accéder aux éléments du DOM
            const title = tempElement.querySelector('title').textContent;
            const logo = tempElement.querySelector('link[type="image/png"]').href;
            const head = doc.head;
            const body = doc.body;
            const externalLinks = Array.from(tempElement.querySelectorAll('link[href^="http"]')).length;
            const externalLinks_to_res = Array.from(tempElement.querySelectorAll('link[href^="http"]'));
            const internalLinks = Array.from(tempElement.querySelectorAll('link:not([href^="http"])')).length;
            const internalLinks_to_res = Array.from(tempElement.querySelectorAll('link:not([href^="http"])'));
            const scriptsHead = head.querySelectorAll('script').length;
            const stylesHead = head.querySelectorAll('style').length;
            const scriptsHead_all = head.querySelectorAll('script');
            const stylesHead_all = head.querySelectorAll('style');
            const scriptsBody = body.querySelectorAll('script').length;
            const stylesBody = body.querySelectorAll('style').length;
            const divCount = tempElement.querySelectorAll('div').length;
            const aCount = body.querySelectorAll('header a').length;
            const bodyElementsCount = body.querySelectorAll('body *').length;
            const SectionCount = body.querySelectorAll('section');
            const selectedImage = localStorage.getItem("selectedImage");
            // Afficher les résultats dans la console
            console.log('Title:', title);


            console.log('Logo:', logo);
            console.log('External Links:', externalLinks);
            console.log('Internal Links:', internalLinks);
            localStorage.setItem("link_ext_of_site", externalLinks)
            localStorage.setItem("link_int_of_site", internalLinks)
            console.log('Scripts in Head:', scriptsHead);
            console.log('Styles in Head:', stylesHead);
            console.log('Scripts in Body:', scriptsBody);
            console.log('Styles in Body:', stylesBody);
            console.log('Number of divs:', divCount);
            console.log('Number of section:', SectionCount.length);
            localStorage.setItem("nb_section_of_site", SectionCount.length)
            console.log('Number of a dans header:', aCount);
            console.log('Number of elements in body:', bodyElementsCount);
            localStorage.setItem("element_body_of_site", bodyElementsCount)

            const infinitySpace = document.querySelector('.infinity_space');
            if (infinitySpace) {

                // Appliquer le glisser-déposer aux éléments "Head"
                const headElements = document.querySelectorAll('.title_border');
                //mvt arrière plan
                const infinitySpace = document.querySelector('.infinity_space');
                // Ajouter des événements de déplacement pour l'éditeur
                let isEditorDragging = false;
                let editorStartX, editorStartY;
                let editorOffsetX, editorOffsetY;

                infinitySpace.addEventListener('mousedown', (e) => {

                    isEditorDragging = true;
                    editorStartX = parseFloat(getComputedStyle(infinitySpace).left);
                    editorStartY = parseFloat(getComputedStyle(infinitySpace).top);
                    editorOffsetX = e.clientX;
                    editorOffsetY = e.clientY;
                });
                document.addEventListener('mousemove', (e) => {
                    if (isEditorDragging) {
                        const newEditorX = e.clientX - editorOffsetX;
                        const newEditorY = e.clientY - editorOffsetY;
                        // Calculer la nouvelle position
                        let newX = editorStartX + newEditorX;
                        let newY = editorStartY + newEditorY;
                        newX = Math.max(-3200, Math.min(3200, newX));
                        newY = Math.max(-3200, Math.min(-30, newY));
                        infinitySpace.style.left = newX + 'px';
                        infinitySpace.style.top = newY + 'px';
                    }
                });
                document.addEventListener('mouseup', () => {
                    isEditorDragging = false;
                });
                //mvt block
                headElements.forEach(head => {

                    let isHeadDragging = false;
                    let headStartX, headStartY;
                    let headOffsetX, headOffsetY;
                    const elementBorders = head.querySelectorAll('.element_border');
                    // Faites quelque chose avec les éléments .element_border
                    elementBorders.forEach(elementBorder => {
                        // Votre code ici  
                        elementBorder.addEventListener('mousemove', (e) => {
                            const rect = elementBorder.getBoundingClientRect();
                            const borderWidth = parseFloat(getComputedStyle(elementBorder).borderWidth);

                            const isOnBorder = (
                                e.clientX >= rect.left &&
                                e.clientX <= rect.left + borderWidth ||
                                e.clientX <= rect.right &&
                                e.clientX >= rect.right - borderWidth ||
                                e.clientY >= rect.top &&
                                e.clientY <= rect.top + borderWidth ||
                                e.clientY <= rect.bottom &&
                                e.clientY >= rect.bottom - borderWidth
                            );

                            if (isOnBorder) {
                                // Le curseur est sur la bordure
                                elementBorder.style.cursor = 'move';
                            } else {
                                // Le curseur est à l'intérieur
                                elementBorder.style.cursor = 'auto';
                            }
                        });



                        head.addEventListener('mousedown', (e) => {
                            if (elementBorder.style.cursor === 'move') {
                                isHeadDragging = true;
                                headStartX = parseFloat(getComputedStyle(head).left);
                                headStartY = parseFloat(getComputedStyle(head).top);
                                headOffsetX = e.clientX;
                                headOffsetY = e.clientY;
                                e.stopPropagation();
                            }
                        });
                    });
                    document.addEventListener('mousemove', (e) => {
                        if (isHeadDragging) {
                            const newHeadX = e.clientX - headOffsetX;
                            const newHeadY = e.clientY - headOffsetY;
                            let headX = headStartX + newHeadX;
                            let headY = headStartY + newHeadY;
                            head.style.left = `${headX}px`;
                            head.style.top = `${headY}px`;
                        }
                    });

                    document.addEventListener('mouseup', () => {
                        isHeadDragging = false;
                    });
                });
            } else {

                //base
                const infinity_space = document.createElement("div");
                infinity_space.classList.add("infinity_space")
                infinity_space.id = "infinity_space"
                infinity_space.style.display = "none"
                document.body.appendChild(infinity_space)
                //doctype
                const doctype = document.createElement("div");
                doctype.classList.add("doctype")

                infinity_space.appendChild(doctype)
                //head
                const title_head_border = document.createElement("div");
                title_head_border.classList.add("title_border")
                title_head_border.textContent = "Head"
                doctype.appendChild(title_head_border)
                const head_border = document.createElement("div");
                head_border.classList.add("element_border")
                head_border.classList.add("head_border")

                title_head_border.appendChild(head_border)
                const head_card = document.createElement("div");
                head_card.classList.add("element_card")
                head_card.classList.add("element_head")
                head_border.appendChild(head_card)
                //partie dans head
                //logo and name
                const header_ln = document.createElement("header");
                header_ln.classList.add("header_ln")
                head_card.appendChild(header_ln)
                const logo_img = document.createElement("img");
                logo_img.classList.add("logo")
                logo_img.src = logo
                header_ln.appendChild(logo_img)
                const name_txt = document.createElement("div");
                name_txt.classList.add("name_title")
                name_txt.textContent = title
                header_ln.appendChild(name_txt)
                //external links
                const external_links_section = document.createElement("div");
                external_links_section.classList.add("external_links_section")
                head_card.appendChild(external_links_section)
                const external_links = document.createElement("div");
                external_links.classList.add("external_links")
                const i_link_external = document.createElement("i");
                i_link_external.classList.add("bx")
                i_link_external.classList.add("bx-link-external")
                external_links.appendChild(i_link_external)
                const p_link_external = document.createElement("p");
                p_link_external.textContent = "Liens externes: " + externalLinks
                const i_plus_link_external = document.createElement("i");
                i_plus_link_external.classList.add("bx")
                i_plus_link_external.classList.add("bx-sitemap")
                i_plus_link_external.classList.add("bx-rotate-270")
                external_links.appendChild(i_link_external)
                external_links.appendChild(p_link_external)
                external_links_section.appendChild(external_links)
                external_links_section.appendChild(i_plus_link_external)
                //internal link
                const internal_links_section = document.createElement("div");
                internal_links_section.classList.add("internal_links_section")
                head_card.appendChild(internal_links_section)
                const internal_links = document.createElement("div");
                internal_links.classList.add("internal_links")
                const i_link_internal = document.createElement("i");
                i_link_internal.classList.add("bx")
                i_link_internal.classList.add("bx-link")
                internal_links.appendChild(i_link_internal)
                const p_link_internal = document.createElement("p");
                p_link_internal.textContent = "Liens internes: " + externalLinks
                const i_plus_link_internal = document.createElement("i");
                i_plus_link_internal.classList.add("bx")
                i_plus_link_internal.classList.add("bx-sitemap")
                i_plus_link_internal.classList.add("bx-rotate-270")
                internal_links.appendChild(i_link_internal)
                internal_links.appendChild(p_link_internal)
                internal_links_section.appendChild(internal_links)
                internal_links_section.appendChild(i_plus_link_internal)
                //script head
                const script_head_section = document.createElement("div");
                script_head_section.classList.add("script_head_section")
                head_card.appendChild(script_head_section)
                const script_head = document.createElement("div");
                script_head.classList.add("script_head")
                const i_script_head = document.createElement("i");
                i_script_head.classList.add("bx")
                i_script_head.classList.add("bxs-file-js")
                script_head.appendChild(i_script_head)
                const p_script_head = document.createElement("p");
                p_script_head.textContent = "Script dans Head: " + scriptsHead
                const i_plus_script_head = document.createElement("i");
                i_plus_script_head.classList.add("bx")
                i_plus_script_head.classList.add("bx-sitemap")
                i_plus_script_head.classList.add("bx-rotate-90")
                script_head_section.appendChild(i_plus_script_head)
                script_head.appendChild(i_script_head)
                script_head.appendChild(p_script_head)
                script_head_section.appendChild(script_head)
                //style head
                const style_head_section = document.createElement("div");
                style_head_section.classList.add("style_head_section")
                head_card.appendChild(style_head_section)
                const style_head = document.createElement("div");
                style_head.classList.add("style_head")
                const i_style_head = document.createElement("i");
                i_style_head.classList.add("bx")
                i_style_head.classList.add("bxs-file-css")
                style_head.appendChild(i_style_head)
                const p_style_head = document.createElement("p");
                p_style_head.textContent = "Style dans Head: " + stylesHead
                const i_plus_style_head = document.createElement("i");
                i_plus_style_head.classList.add("bx")
                i_plus_style_head.classList.add("bx-sitemap")
                i_plus_style_head.classList.add("bx-rotate-90")
                style_head_section.appendChild(i_plus_style_head)
                style_head.appendChild(i_style_head)
                style_head.appendChild(p_style_head)
                style_head_section.appendChild(style_head)
                //partie à l'extérieur
                const out_head = document.createElement("div");
                out_head.classList.add("out_head")
                head_border.appendChild(out_head)
                //body
                const title_body_border = document.createElement("div");
                title_body_border.classList.add("title_border")
                title_body_border.textContent = "Body"
                doctype.appendChild(title_body_border)
                const body_border = document.createElement("div");
                body_border.classList.add("element_border")
                body_border.classList.add("body_border")
                title_body_border.appendChild(body_border)
                const body_card = document.createElement("div");
                body_card.classList.add("element_card")
                body_card.classList.add("element_body")
                body_border.appendChild(body_card)
                //partie du body
                //header
                const header_body = document.createElement("div");
                header_body.classList.add("header_body");
                body_card.appendChild(header_body);

                const h4_header = document.createElement("h4");
                h4_header.textContent = "Header";
                header_body.appendChild(h4_header);

                const div_img_header = document.createElement("div");
                div_img_header.classList.add("div_img_header");
                header_body.appendChild(div_img_header);

                const img_header = document.createElement("img");
                img_header.src = logo;
                img_header.id = "logo";
                div_img_header.appendChild(img_header);

                const p_in_div_img_header = document.createElement("p");
                p_in_div_img_header.textContent = "Logo";
                div_img_header.appendChild(p_in_div_img_header);
                const div_p_header = document.createElement("div");
                div_p_header.classList.add("div_p_header");
                header_body.appendChild(div_p_header);

                const i_link_header = document.createElement("i");
                i_link_header.classList.add("bx", "bx-link-alt");
                div_p_header.appendChild(i_link_header);

                const p_link_header = document.createElement("p");
                p_link_header.textContent = "Lien dans Header: " + (aCount - 1);
                div_p_header.appendChild(p_link_header);

                const div_p_btn_header = document.createElement("div");
                div_p_btn_header.classList.add("div_p_btn_header");
                header_body.appendChild(div_p_btn_header);

                const img_btn_header = document.createElement("img");
                img_btn_header.src = `../${selectedImage}`;
                div_p_btn_header.appendChild(img_btn_header);

                const p_btn_header = document.createElement("p");
                p_btn_header.textContent = "Lien";
                div_p_btn_header.appendChild(p_btn_header);

                //section
                const section_partie = document.createElement("div");
                section_partie.classList.add("section_partie");
                body_card.appendChild(section_partie);
                SectionCount.forEach((section) => {
                    // Créer une div_section
                    const div_section = document.createElement("div");
                    div_section.classList.add("div_section");
                    section_partie.appendChild(div_section);

                    // Récupérer tous les éléments de la section
                    const element_section = section.id;
                    div_section.textContent = element_section
                    div_section.id = element_section + "_div_section"
                });
                // Appliquer le glisser-déposer aux éléments "Head"
                const headElements = document.querySelectorAll('.title_border');
                //mvt arrière plan
                const infinitySpace = document.querySelector('.infinity_space');
                // Ajouter des événements de déplacement pour l'éditeur
                let isEditorDragging = false;
                let editorStartX, editorStartY;
                let editorOffsetX, editorOffsetY;

                infinitySpace.addEventListener('mousedown', (e) => {

                    isEditorDragging = true;
                    editorStartX = parseFloat(getComputedStyle(infinitySpace).left);
                    editorStartY = parseFloat(getComputedStyle(infinitySpace).top);
                    editorOffsetX = e.clientX;
                    editorOffsetY = e.clientY;
                });
                document.addEventListener('mousemove', (e) => {
                    if (isEditorDragging) {
                        const newEditorX = e.clientX - editorOffsetX;
                        const newEditorY = e.clientY - editorOffsetY;
                        // Calculer la nouvelle position
                        let newX = editorStartX + newEditorX;
                        let newY = editorStartY + newEditorY;
                        newX = Math.max(-3200, Math.min(3200, newX));
                        newY = Math.max(-3200, Math.min(-30, newY));
                        infinitySpace.style.left = newX + 'px';
                        infinitySpace.style.top = newY + 'px';
                    }
                });
                document.addEventListener('mouseup', () => {
                    isEditorDragging = false;
                });
                //mvt block
                headElements.forEach(head => {

                    let isHeadDragging = false;
                    let headStartX, headStartY;
                    let headOffsetX, headOffsetY;
                    const elementBorders = head.querySelectorAll('.element_border');
                    // Faites quelque chose avec les éléments .element_border
                    elementBorders.forEach(elementBorder => {
                        // Votre code ici  
                        elementBorder.addEventListener('mousemove', (e) => {
                            const rect = elementBorder.getBoundingClientRect();
                            const borderWidth = parseFloat(getComputedStyle(elementBorder).borderWidth);

                            const isOnBorder = (
                                e.clientX >= rect.left &&
                                e.clientX <= rect.left + borderWidth ||
                                e.clientX <= rect.right &&
                                e.clientX >= rect.right - borderWidth ||
                                e.clientY >= rect.top &&
                                e.clientY <= rect.top + borderWidth ||
                                e.clientY <= rect.bottom &&
                                e.clientY >= rect.bottom - borderWidth
                            );

                            if (isOnBorder) {
                                // Le curseur est sur la bordure
                                elementBorder.style.cursor = 'move';
                            } else {
                                // Le curseur est à l'intérieur
                                elementBorder.style.cursor = 'auto';
                            }
                        });



                        head.addEventListener('mousedown', (e) => {
                            if (elementBorder.style.cursor === 'move') {
                                isHeadDragging = true;
                                headStartX = parseFloat(getComputedStyle(head).left);
                                headStartY = parseFloat(getComputedStyle(head).top);
                                headOffsetX = e.clientX;
                                headOffsetY = e.clientY;
                                e.stopPropagation();
                            }
                        });
                    });
                    document.addEventListener('mousemove', (e) => {
                        if (isHeadDragging) {
                            const newHeadX = e.clientX - headOffsetX;
                            const newHeadY = e.clientY - headOffsetY;
                            let headX = headStartX + newHeadX;
                            let headY = headStartY + newHeadY;
                            head.style.left = `${headX}px`;
                            head.style.top = `${headY}px`;
                        }
                    });

                    document.addEventListener('mouseup', () => {
                        isHeadDragging = false;
                    });
                });
            }
            const head_border_ajout = document.querySelector(".head_border");
            const out_head = document.querySelector(".out_head");
            out_head.setAttribute("draggabe", "true")
            const external_links_i = document.querySelector(".external_links_section i.bx.bx-sitemap");
            external_links_i.addEventListener("click", function () {

                const external_details_sec = document.querySelector(".external_details_sec");
                const internal_details_sec = document.querySelector(".internal_details_sec");
                const script_head_sec = document.querySelector(".script_head_sec");
                const style_head_sec = document.querySelector(".style_head_sec");
                const svg_details_internal_links = document.getElementById("svg_details_internal_links");


                if (external_details_sec) {
                    external_details_sec.remove()
                    svg_details_internal_links.remove()


                } else {
                    if (style_head_sec) {
                        style_head_sec.remove()
                    }
                    if (script_head_sec) {
                        script_head_sec.remove()
                    }
                    if (internal_details_sec) {
                        internal_details_sec.remove()
                    }




                    const external_details_sec = document.createElement("div")
                    external_details_sec.classList.add("details_div")
                    external_details_sec.classList.add("external_details_sec")
                    out_head.appendChild(external_details_sec)
                    // Exemple de création dynamique du path
                    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svg.id = "svg_details_internal_links";
                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.id = "path_details_internal_links";

                    svg.appendChild(path);
                    head_border_ajout.appendChild(svg)
                    out_head.parentNode.insertBefore(document.querySelector(".element_card.element_head"), out_head);
                    const details_external_links = document.createElement("div")
                    details_external_links.classList.add("details_external_links")
                    const btn_racord = document.createElement("div")
                    btn_racord.classList.add("btn_racord")
                    const tru_link_ex = document.createElement("div")
                    tru_link_ex.classList.add("tru_link_ex")
                    details_external_links.appendChild(btn_racord)
                    details_external_links.appendChild(tru_link_ex)
                    externalLinks_to_res.forEach((link, txt) => {
                        const each_tru_link_ex = document.createElement("a")
                        each_tru_link_ex.textContent = link.href
                        each_tru_link_ex.href = link.href

                        tru_link_ex.appendChild(each_tru_link_ex)
                    })
                    external_details_sec.appendChild(details_external_links)
                    out_head.style.left = "50px"
                    updatePath(20, 70);

                }
                move_details()

            })
            const internal_links_i = document.querySelector(".internal_links_section i.bx.bx-sitemap");
            internal_links_i.addEventListener("click", function () {
                const internal_details_sec = document.querySelector(".internal_details_sec");
                const external_details_sec = document.querySelector(".external_details_sec");
                const script_head_sec = document.querySelector(".script_head_sec");
                const style_head_sec = document.querySelector(".style_head_sec");
                const svg_details_internal_links = document.getElementById("svg_details_internal_links");
                if (internal_details_sec) {
                    internal_details_sec.remove()
                    svg_details_internal_links.remove()
                } else {
                    if (style_head_sec) {
                        style_head_sec.remove()
                    }
                    if (script_head_sec) {
                        script_head_sec.remove()
                    }
                    if (external_details_sec) {
                        external_details_sec.remove()
                    }
                    const internal_details_sec = document.createElement("div")
                    internal_details_sec.classList.add("details_div")
                    internal_details_sec.classList.add("internal_details_sec")

                    out_head.appendChild(internal_details_sec)
                    // Exemple de création dynamique du path
                    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svg.id = "svg_details_internal_links";
                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.id = "path_details_internal_links";

                    svg.appendChild(path);
                    head_border_ajout.appendChild(svg)
                    // Fonction pour mettre à jour la position du chemin
                    out_head.parentNode.insertBefore(document.querySelector(".element_card.element_head"), out_head);
                    const details_internal_links = document.createElement("div")
                    details_internal_links.classList.add("details_internal_links")

                    const btn_racord = document.createElement("div")
                    btn_racord.classList.add("btn_racord")
                    const tru_link_in = document.createElement("div")
                    tru_link_in.classList.add("tru_link_in")
                    details_internal_links.appendChild(btn_racord)
                    details_internal_links.appendChild(tru_link_in)

                    internalLinks_to_res.forEach((link) => {
                        const link_nes = link.href

                        if (link_nes.startsWith("data")) {

                            const each_tru_link_in_img = document.createElement("img")
                            each_tru_link_in_img.src = link_nes
                            tru_link_in.appendChild(each_tru_link_in_img)
                        } else {
                            const each_tru_link_in = document.createElement("a")
                            each_tru_link_in.textContent = link_nes
                            each_tru_link_in.href = link_nes

                            tru_link_in.appendChild(each_tru_link_in)
                        }

                    })
                    internal_details_sec.appendChild(details_internal_links)

                    out_head.style.left = "50px"

                    updatePath(120, 20);




                }
                move_details()

            })
            const script_head_section = document.querySelector(".script_head_section i.bx.bx-sitemap");
            script_head_section.addEventListener("click", function () {
                const script_head_sec = document.querySelector(".script_head_sec");
                const external_details_sec = document.querySelector(".external_details_sec");
                const internal_details_sec = document.querySelector(".internal_details_sec");
                const style_head_sec = document.querySelector(".style_head_sec");
                const svg_details_internal_links = document.getElementById("svg_details_internal_links");
                if (script_head_sec) {
                    script_head_sec.remove()
                    svg_details_internal_links.remove()
                } else {
                    if (style_head_sec) {
                        style_head_sec.remove()
                    }
                    if (external_details_sec) {
                        external_details_sec.remove()
                    }
                    if (internal_details_sec) {
                        internal_details_sec.remove()
                    }
                    const script_head_sec = document.createElement("div")
                    script_head_sec.classList.add("details_div")
                    script_head_sec.classList.add("script_head_sec")

                    out_head.appendChild(script_head_sec)
                    // Exemple de création dynamique du path
                    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svg.id = "svg_details_internal_links";
                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.id = "path_details_internal_links";

                    svg.appendChild(path);
                    head_border_ajout.appendChild(svg);

                    document.querySelector(".element_card.element_head").parentNode.insertBefore(out_head, document.querySelector(".element_card.element_head"));
                    const script_head_sec_links = document.createElement("div")
                    script_head_sec_links.classList.add("script_head_sec_links")
                    const btn_racord = document.createElement("div")
                    btn_racord.classList.add("btn_racord")
                    const tru_link_ex = document.createElement("div")
                    tru_link_ex.classList.add("tru_link_ex")

                    script_head_sec_links.appendChild(tru_link_ex)
                    script_head_sec_links.appendChild(btn_racord)
                    scriptsHead_all.forEach((link, txt) => {
                        const each_tru_link_ex = document.createElement("a")
                        each_tru_link_ex.textContent = link.src
                        each_tru_link_ex.href = link.src

                        tru_link_ex.appendChild(each_tru_link_ex)
                    })
                    script_head_sec.appendChild(script_head_sec_links)

                    out_head.style.left = "-50px"

                    updatePath(20);




                }
                move_details()

            })
            const style_head_section = document.querySelector(".style_head_section i.bx.bx-sitemap");
            style_head_section.addEventListener("click", function () {
                const style_head_sec = document.querySelector(".style_head_sec");
                const external_details_sec = document.querySelector(".external_details_sec");
                const internal_details_sec = document.querySelector(".internal_details_sec");
                const script_head_sec = document.querySelector(".script_head_sec");
                const svg_details_internal_links = document.getElementById("svg_details_internal_links");
                if (style_head_sec) {
                    style_head_sec.remove()
                    svg_details_internal_links.remove()
                } else {
                    if (external_details_sec) {
                        external_details_sec.remove()
                    }
                    if (script_head_sec) {
                        script_head_sec.remove()
                    }
                    if (internal_details_sec) {
                        internal_details_sec.remove()
                    }
                    const style_head_sec = document.createElement("div")
                    style_head_sec.classList.add("details_div")
                    style_head_sec.classList.add("style_head_sec")

                    out_head.appendChild(style_head_sec)
                    // Exemple de création dynamique du path
                    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svg.id = "svg_details_internal_links";
                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.id = "path_details_internal_links";

                    svg.appendChild(path);
                    head_border_ajout.appendChild(svg);

                    document.querySelector(".element_card.element_head").parentNode.insertBefore(out_head, document.querySelector(".element_card.element_head"));
                    const style_head_sec_links = document.createElement("div")
                    style_head_sec_links.classList.add("style_head_sec_links")
                    const btn_racord = document.createElement("div")
                    btn_racord.classList.add("btn_racord")
                    const tru_link_ex = document.createElement("div")
                    tru_link_ex.classList.add("tru_link_ex")

                    style_head_sec_links.appendChild(tru_link_ex)
                    style_head_sec_links.appendChild(btn_racord)
                    scriptsHead_all.forEach((link, txt) => {
                        const each_tru_link_ex = document.createElement("a")
                        each_tru_link_ex.textContent = link.src
                        each_tru_link_ex.href = "#"

                        tru_link_ex.appendChild(each_tru_link_ex)
                    })
                    style_head_sec.appendChild(style_head_sec_links)

                    out_head.style.left = "-50px"

                    updatePath(20);




                }
                move_details()

            })




            function updatePath(nb_y1, nb_y2) {
                nb_y1 = Number(nb_y1) || 0;
                nb_y2 = Number(nb_y2) || 0;
                if (isNaN(nb_y1)) nb_y1 = 0;
                if (isNaN(nb_y2)) nb_y2 = 0;
                const svg_path = document.querySelector("#svg_details_internal_links");

                svg_path.style.width = getComputedStyle(document.querySelector(".element_border.head_border")).width
                svg_path.style.height = getComputedStyle(document.querySelector(".element_border.head_border")).height


                const box1 = document.querySelector(".details_external_links, .details_internal_links,.script_head_sec_links,.style_head_sec_links");
                const box2 = document.querySelector(".element_card.element_head");
                const container = document.querySelector(".title_border");
                const linkPath = document.querySelector("#path_details_internal_links");
                const rect1 = box1.getBoundingClientRect();
                const rect2 = box2.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();

                if (box1.classList.contains("details_external_links")) {
                    // Calculer les positions des divs par rapport au conteneur
                    const x1 = rect1.left - containerRect.left; // Côté gauche de box1
                    const y1 = (rect1.top + rect1.bottom) / 2 - containerRect.top - nb_y1; // Centre vertical de box1
                    const x2 = rect2.right - containerRect.left; // Côté droit de box2
                    const y2 = (rect2.top + rect2.bottom) / 2 - containerRect.top - nb_y2; // Centre vertical de box2


                    const d = `M ${x1} ${y1} L ${x2} ${y2}`;

                    linkPath.setAttribute("d", d);


                } else if (box1.classList.contains("details_internal_links")) {
                    // Calculer les positions des divs par rapport au conteneur
                    const x1 = rect1.left - containerRect.left; // Côté gauche de box1
                    const y1 = (rect1.top + rect1.bottom) / 2 - containerRect.top - nb_y1; // Centre vertical de box1
                    const x2 = rect2.right - containerRect.left; // Côté droit de box2
                    const y2 = (rect2.top + rect2.bottom) / 2 - containerRect.top - nb_y2; // Centre vertical de box2


                    const d = `M ${x1} ${y1} L ${x2} ${y2}`;
                    linkPath.setAttribute("d", d);
                } else if (box1.classList.contains("script_head_sec_links")) {
                    // Calculer les positions des divs par rapport au conteneur
                    const x1 = rect1.right - containerRect.left; // Côté gauche de box1
                    const y1 = (rect1.top + rect1.bottom) / 2 - containerRect.top - nb_y1; // Centre vertical de box1
                    const x2 = rect2.left - containerRect.left; // Côté droit de box2
                    const y2 = (rect2.top + rect2.bottom) / 2 - containerRect.top + 20; // Centre vertical de box2


                    const d = `M ${x1} ${y1} L ${x2} ${y2}`;
                    linkPath.setAttribute("d", d);
                } else if (box1.classList.contains("style_head_sec_links")) {
                    // Calculer les positions des divs par rapport au conteneur
                    const x1 = rect1.right - containerRect.left; // Côté gauche de box1
                    const y1 = (rect1.top + rect1.bottom) / 2 - containerRect.top - nb_y1; // Centre vertical de box1
                    const x2 = rect2.left - containerRect.left; // Côté droit de box2
                    const y2 = (rect2.top + rect2.bottom) / 2 - containerRect.top + 70; // Centre vertical de box2


                    const d = `M ${x1} ${y1} L ${x2} ${y2}`;
                    linkPath.setAttribute("d", d);

                }

            }
            let isDetailsDragging = false;
            let detailsStartX, detailsStartY;
            let detailsOffsetX, detailsOffsetY;
            function move_details() {



                const elementBorders = out_head.querySelectorAll('.details_div');

                if (elementBorders) {
                    elementBorders.forEach(elementBorder => {
                        const border_element = elementBorder.querySelector(".details_external_links, .details_internal_links,.script_head_sec_links,.style_head_sec_links")
                        border_element.addEventListener('mousemove', (e) => {
                            const rect = border_element.getBoundingClientRect();
                            const borderWidth = parseFloat(getComputedStyle(border_element).borderWidth);

                            const isOnBorder = (
                                e.clientX >= rect.left &&
                                e.clientX <= rect.left + borderWidth ||
                                e.clientX <= rect.right &&
                                e.clientX >= rect.right - borderWidth ||
                                e.clientY >= rect.top &&
                                e.clientY <= rect.top + borderWidth ||
                                e.clientY <= rect.bottom &&
                                e.clientY >= rect.bottom - borderWidth
                            );

                            if (isOnBorder) {
                                // Le curseur est sur la bordure
                                border_element.style.cursor = 'move';
                            } else {
                                // Le curseur est à l'intérieur
                                border_element.style.cursor = 'auto';
                            }
                        });
                        border_element.addEventListener('mousedown', (e) => {

                            if (border_element.style.cursor === 'move') {
                                isDetailsDragging = true;
                                detailsStartX = parseFloat(getComputedStyle(elementBorder).left);
                                detailsStartY = parseFloat(getComputedStyle(elementBorder).top);
                                detailsOffsetX = e.clientX;
                                detailsOffsetY = e.clientY;

                                e.stopPropagation();
                            }
                        });

                        document.addEventListener('mousemove', (e) => {
                            if (isDetailsDragging) {
                                const newHeadX = e.clientX - detailsOffsetX;
                                const newHeadY = e.clientY - detailsOffsetY;
                                let headX = detailsStartX + newHeadX;
                                let headY = detailsStartY + newHeadY;

                                out_head.style.left = `${headX}px`;
                                out_head.style.top = `${headY}px`;
                                if (border_element.classList.contains("details_external_links")) {
                                    updatePath(20, 70);
                                } else if (border_element.classList.contains("details_internal_links")) {
                                    updatePath(120, 20);
                                } else if (border_element.classList.contains("script_head_sec_links")) {
                                    updatePath(20);
                                } else if (border_element.classList.contains("style_head_sec_links")) {
                                    updatePath(20);

                                }

                            }
                        });

                        document.addEventListener('mouseup', () => {
                            isDetailsDragging = false;

                        });

                        // Ajoutez un gestionnaire de clic pour éviter de remettre au milieu lors d'un nouveau clic
                        border_element.addEventListener('click', (e) => {
                            e.stopPropagation();

                            if (border_element.classList.contains("active")) {
                                border_element.classList.remove("active")

                            } else {
                                border_element.classList.add("active")

                            }

                        });

                    });
                }
            }
        }


        const card_code = document.querySelector(".card_code")
    }, 1000);
})
