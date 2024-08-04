    // Fonction asynchrone pour récupérer l'utilisateur par son nom
async function getUserByName(userName) {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open("MaBaseDeDonnees", 1);

        request.addEventListener("success", function (event) {
            const db = event.target.result;
            const transaction = db.transaction(['Compte'], 'readonly');
            const store = transaction.objectStore('Compte');
            const index = store.index('User');
            const request = index.openCursor();

            request.onsuccess = (event) => {
                const cursor = event.target.result;
                if (cursor) {
                    const user = cursor.value;
                    const user_name = user.value
                    
                   const json_username = JSON.parse(user_name)
                       
                    if (json_username.name === userName) {
                        resolve(json_username.userId);
                    }
                    cursor.continue();
                } else {
                    reject('User not found');
                }
            };

            request.onerror = (event) => {
                reject('Error fetching user: ' + event.target.errorCode);
            };
        });
    });
}

// Fonction asynchrone pour récupérer le site par l'ID de l'utilisateur et le nom du site
async function getSiteByUserId(userId, siteName) {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open("MaBaseDeDonnees", 1);

        request.addEventListener("success", function (event) {
            const db = event.target.result;
            const transaction = db.transaction(['Site'], 'readonly');
            const store = transaction.objectStore('Site');
            const index = store.index('SiteId');
            const request = index.openCursor();

            request.onsuccess = (event) => {
                const cursor = event.target.result;
                if (cursor) {
                    const site = cursor.value;
                
                    const site_name = site.value
                    
                   const json_siteName = JSON.parse(site_name)
           console.log(json_siteName)
                    if (json_siteName.userId === userId && json_siteName.name === siteName) {
                        resolve(json_siteName.siteId);
                    }
                    cursor.continue();
                } else {
                    reject('Site not found');
                }
            };

            request.onerror = (event) => {
                reject('Error fetching site: ' + event.target.errorCode);
            };
        });
    });
}

// Fonction asynchrone pour afficher le contenu fictif en fonction du hash de l'URL
async function afficherContenuFictif() {
    try {
        // Récupérer le chemin de l'URL après le domaine
        const hash = window.location.hash;
        const regex = /^#\/([^/]+)\/([^/]+)\/index\.html$/;
        const match = hash.match(regex);
        if (match) {
            const user_name = match[1];
            const name_of_site = match[2];

            // Vérifier si le hash correspond à notre modèle souhaité
            if (hash === `#/${user_name}/${name_of_site}/index.html`) {
                const userId = await getUserByName(user_name);
           
                const siteId = await getSiteByUserId(userId, name_of_site);

                const request = window.indexedDB.open("MaBaseDeDonnees", 1);

                request.addEventListener("success", function (event) {
                    const db = event.target.result;
                    const transaction_first = db.transaction(["Site"], "readonly");
                    const objectStore_first = transaction_first.objectStore("Site");

                    const request2 = objectStore_first.get(siteId);

                    request2.onsuccess = function (event) {
                        const code_site = event.target.result;
                        if (code_site) {
                            const codesite = JSON.parse(code_site.value);
if(codesite.etat === "host"){
                            document.documentElement.innerHTML = codesite.content;
                            const htmlTagMatch = codesite.content.match(/<html\s+([^>]*)>/i);

                            // Vérifier si une correspondance a été trouvée
                            if (htmlTagMatch) {
                                const htmlTag = htmlTagMatch[0]; // La balise <html ...>
                                const attributes = htmlTagMatch[1]; // Les attributs de la balise

                                

                                // Expression régulière pour capturer les attributs lang et style
                                const langMatch = attributes.match(/lang="([^"]*)"/i);
                                const styleMatch = attributes.match(/style="([^"]*)"/i);

                                const langValue = langMatch ? langMatch[1] : '';
                                const styleValue = styleMatch ? styleMatch[1] : '';

                              
                                document.documentElement.setAttribute("style", styleValue);
                            } else {
                                console.log('Aucune balise HTML trouvée.');
                            }

                            const tempDiv = document.createElement("div");
                            tempDiv.innerHTML = codesite.content;
                            const scripts = tempDiv.querySelectorAll("script");
                            scripts.forEach((script) => {
                                const newScript = document.createElement("script");
                                if (script.textContent !== "") {
                                    newScript.textContent = script.textContent;
                                }
                                document.head.appendChild(newScript);
                            });

                            const body_index3 = document.documentElement.querySelector(".body_index");

                            const excludedElements = [
                                document.getElementById("button_div"),
                                document.getElementById("bar_edit"), // Ajoutez l'élément à exclure ici
                                document.getElementById("header_bar_div"), // Ajoutez l'élément à exclure ici
                                document.getElementById("save_notif"), // Ajoutez l'élément à exclure ici
                                document.getElementById("toast"), // Ajoutez l'élément à exclure ici
                                document.getElementById("header_bar"), // Ajoutez l'élément à exclure ici
                                document.getElementById("page"), // Ajoutez l'élément à exclure ici
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

                            body_index3.style.width = "100%";
                            body_index3.style.marginBottom = "0px";
                            body_index3.style.height = "100%";
                            body_index3.style.overflow = "hidden";
                            body_index3.style.borderRadius = "0px";

                            excludedElements.forEach((excludedElement) => {
                                if (excludedElement) {
                                    const excludedElementClone = document.getElementById(excludedElement.id);
                                    if (excludedElementClone) {
                                        excludedElementClone.remove();
                                    }
                                }
                            });

                        }else {
                            alert("Votre site n'est pas encore hébergé")
                        }
                        } 
                    }
                });
            }
        }
    } catch (error) {
        console.error('Error:', error);
        // Gérer l'erreur ici, par exemple afficher un message à l'utilisateur
    }
}
window.addEventListener('hashchange', afficherContenuFictif);
// Appeler la fonction au chargement de la page
window.onload = afficherContenuFictif;

const color_forEach = document.querySelectorAll(".color")

    color_forEach.forEach((hex_value_all, index) => {
        const hex_value = hex_value_all.querySelector(".hex-value")
        const rect_box = hex_value_all.querySelector(".rect-box")
        let matrix_color = []
        for (let i = 0; i < 4; i++) {

            const color_back = rect_box.querySelector(".color_" + (i + 1))

            const color_background = getComputedStyle(color_back).backgroundColor
            const hex = rgbToHex(color_background)
            function rgbToHex(rgb) {
                // Vérifier si la chaîne RGB est déjà en hexadécimal
                if (/^#[0-9A-F]{6}$/i.test(rgb)) {
                    return rgb;
                }

                // Diviser la chaîne RGB en valeurs de couleur individuelles
                const colors = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                if (!colors) {
                    // La chaîne n'est pas dans un format valide, retourner une valeur par défaut
                    return "#000000";
                }
                // Convertir les valeurs de couleur en hexadécimal et les concaténer
                const hex = "#" +
                    ("0" + parseInt(colors[1], 10).toString(16)).slice(-2) +
                    ("0" + parseInt(colors[2], 10).toString(16)).slice(-2) +
                    ("0" + parseInt(colors[3], 10).toString(16)).slice(-2);
                return hex;
            }
            matrix_color.push(" " + hex)
        }


        hex_value.textContent = matrix_color





    })

function selectColor(element) {
    const selectedElements = document.querySelectorAll('.color');
    selectedElements.forEach((el) => {
        el.classList.remove('selected');
    });

    element.classList.add('selected');
    const hexValue = element.querySelector('.hex-value').textContent;

    localStorage.setItem('colorhex_site', hexValue);
}
document.addEventListener("DOMContentLoaded", () => {
const step = localStorage.getItem("step")
if (step) {

} else {
    localStorage.setItem("step", "1")
    localStorage.setItem("check_link", false)
}

 


const delog = document.querySelector(".delog");
const login = document.querySelector(".log_in");
const request = window.indexedDB.open("MaBaseDeDonnees", 1);
request.addEventListener("success", function (event) {
    const db = event.target.result;

    const transaction = db.transaction(["Connexion"], "readonly");
    const objectStore = transaction.objectStore("Connexion");


    // Si vous avez un index nommé "Connected", vous pouvez également l'utiliser
    const connectedStatusIndex = objectStore.index("Connected");
    const getRequestByConnectedStatus = connectedStatusIndex.get("yes");
    // Gérez l'événement onsuccess pour obtenir les données récupérées
    getRequestByConnectedStatus.onsuccess = function (event) {
        const dataByConnectedStatus = event.target.result;

        if (dataByConnectedStatus) {
            const connectedValue = dataByConnectedStatus.connected;
            const getRequest = objectStore.get(1);

            localStorage.setItem("Compte?", true)

            // Gérez l'événement onsuccess pour obtenir les données récupérées
            getRequest.onsuccess = function (event) {

                const data = event.target.result;

                if (data) {
                    const name_to_profil = data.name_to_profil;
                    const email_data = data.email;
                    const id_data = data.id_to_create;

                    if (connectedValue === "yes") {
                        const accueilLink = document.querySelector(".accueil_log");


                        // Supprimez la classe "bx-log-in" de l'élément <i>
                        const iconElement = accueilLink.querySelector("i");
                        iconElement.remove();

                        accueilLink.href = "#";

                        // Créez un élément <h3> pour afficher la première lettre du nom d'utilisateur
                        const letter = document.createElement("h3");
                        letter.textContent = name_to_profil.charAt(0).toUpperCase();
                        accueilLink.appendChild(letter);

                        // Mettez en forme le lien de connexion
                        login.style.border = "2px solid #fff";

                        // Masquez l'élément de déconnexion par défaut


                        // Ajoutez un écouteur d'événements pour le lien d'accueil
                        accueilLink.addEventListener("click", function () {
                            delog.style.transform = delog.style.transform === "translateY(0px)" ? "translateY(-500px)" : "translateY(0px)";
                            // Toggle l'affichage de l'élément de déconnexion


                            const logo_letter = delog.querySelector(".logo_log");
                            const name_input = delog.querySelector(".input3_log");
                            const email_input = delog.querySelector(".input4_log");
                            const mdp_input = delog.querySelector(".input_log");
                            const newMdp_input = delog.querySelector(".input2_log");
                            const btn_valid_log = delog.querySelector(".btn_valid_log");
                            const delete_account = delog.querySelector(".delete_account");
                            const se_deco = delog.querySelector(".se_deco");
                            logo_letter.textContent = name_to_profil.charAt(0).toUpperCase()
                            name_input.value = name_to_profil
                            email_input.value = email_data
                            se_deco.addEventListener("click", function () {
                                const newTransaction = db.transaction(["Connexion"], "readwrite");
                                const newObjectStore = newTransaction.objectStore("Connexion");

                                const newRequest = newObjectStore.put({
                                    connexion: 1,
                                    connected: "no",
                                    name_to_profil: "",
                                    email: "",
                                    id_to_create: "",
                                });
                                newRequest.onsuccess = function (event) {
                                    console.log(
                                        "Variable mis à jour donc reset avec succès à la base de données."
                                    );
                                    function getFormattedDateTime() {
                                        const currentTime = new Date();

                                        // Obtention des composants de la date
                                        const day = currentTime.getDate();
                                        const month = currentTime.getMonth() + 1; // Les mois sont indexés à partir de 0
                                        const year = currentTime.getFullYear();

                                        // Formater la date au format "dd-mm-yyyy"
                                        const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;

                                        // Obtention des composants de l'heure
                                        const hours = currentTime.getHours();
                                        const minutes = currentTime.getMinutes();

                                        // Formater l'heure au format "hh:mm"
                                        const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

                                        // Concaténer la date et l'heure dans la chaîne de caractères finale
                                        return `${formattedDate} ${formattedTime}`;
                                    }
                                    updateDateTimeInUpdating();
                                    function updateDateTimeInUpdating() {
                                        const formattedDateTime = getFormattedDateTime();
                                        // Mettre à jour l'heure dans Updating
                                        const transaction = db.transaction(["Updating"], "readwrite");
                                        const objectStore = transaction.objectStore("Updating");
                                        objectStore.put({ MAJ: formattedDateTime, update: "maj_hour" });
                                    }
                                };
                            })
                            delete_account.addEventListener("click", function () {
                                const confirmation = confirm("Êtes-vous sûr de vouloir supprimer votre compte ?");
                                if (confirmation) {
                                    // Ouvrir une transaction pour accéder à l'object store
                                    const transaction = db.transaction(["Compte"], "readwrite");

                                    // Récupérer l'object store à partir de la transaction
                                    const objectStoreCompte = transaction.objectStore("Compte");

                                    // Supprimer le compte en utilisant la clé associée (email dans cet exemple)
                                    const deleteRequest = objectStoreCompte.delete(email_data);

                                    deleteRequest.onsuccess = function (event) {
                                        console.log("Compte supprimé avec succès.");
                                        function getFormattedDateTime() {
                                            const currentTime = new Date();

                                            // Obtention des composants de la date
                                            const day = currentTime.getDate();
                                            const month = currentTime.getMonth() + 1; // Les mois sont indexés à partir de 0
                                            const year = currentTime.getFullYear();

                                            // Formater la date au format "dd-mm-yyyy"
                                            const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;

                                            // Obtention des composants de l'heure
                                            const hours = currentTime.getHours();
                                            const minutes = currentTime.getMinutes();

                                            // Formater l'heure au format "hh:mm"
                                            const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

                                            // Concaténer la date et l'heure dans la chaîne de caractères finale
                                            return `${formattedDate} ${formattedTime}`;
                                        }
                                        updateDateTimeInUpdating();
                                        function updateDateTimeInUpdating() {
                                            const formattedDateTime = getFormattedDateTime();
                                            // Mettre à jour l'heure dans Updating
                                            const transaction = db.transaction(["Updating"], "readwrite");
                                            const objectStore = transaction.objectStore("Updating");
                                            objectStore.put({ MAJ: formattedDateTime, update: "maj_hour" });
                                        }
                                    };

                                    deleteRequest.onerror = function (event) {
                                        console.error("Erreur lors de la suppression du compte :", event.target.error);
                                    };
                                }
                            });
                            btn_valid_log.addEventListener("click", function () {
                                const emailValue = delog.querySelector(".input4_log").value;

                                // Fonction pour vérifier si l'adresse e-mail existe déjà dans la base de données
                                function checkExistingEmail(email, userId) {
                                    return new Promise((resolve, reject) => {
                                        const transaction = db.transaction(["Compte"]);
                                        const objectStoreCompte = transaction.objectStore("Compte");
                                        const index = objectStoreCompte.index("User");

                                        const request = index.openCursor(IDBKeyRange.only(email));

                                        request.onsuccess = function (event) {
                                            const cursor = event.target.result;
                                            if (cursor) {
                                                // L'adresse e-mail existe déjà dans la base de données
                                                // Vérifier si l'identifiant correspond également
                                                const existingUserId = cursor.value.id;

                                                if (existingUserId === userId) {
                                                    // L'adresse e-mail existe déjà avec le même identifiant, ne rien faire

                                                    resolve({ exists: true, sameId: existingUserId });

                                                } else {
                                                    // L'adresse e-mail existe déjà mais avec un autre identifiant


                                                    resolve({ exists: false, sameId: existingUserId });

                                                }
                                            } else {


                                                // L'adresse e-mail n'existe pas encore dans la base de données
                                                resolve({ exists: false, sameId: existingUserId });

                                            }
                                        };

                                        request.onerror = function (event) {
                                            // Une erreur s'est produite lors de la recherche de l'adresse e-mail
                                            reject(event.target.error);
                                        };
                                    });
                                }

                                // Utilisation de la fonction pour vérifier si l'adresse e-mail existe déjà avant d'ajouter un nouveau compte
                                checkExistingEmail(emailValue, id_data)
                                    .then((result) => {
                                        const exists = result.exists;
                                        const sameId = result.sameId;
                                        if (exists) {

                                            if (sameId === id_data) {
                                                async function hashPassword(password) {
                                                    // Convert password to ArrayBuffer
                                                    const encoder = new TextEncoder();
                                                    const data = encoder.encode(password);

                                                    // Generate a salt
                                                    const salt = crypto.getRandomValues(new Uint8Array(16));

                                                    // Combine password and salt
                                                    const saltedData = new Uint8Array(data.length + salt.length);
                                                    saltedData.set(salt);
                                                    saltedData.set(data, salt.length);

                                                    // Hash the salted password
                                                    const hashBuffer = await crypto.subtle.digest('SHA-256', saltedData);
                                                    const hashArray = Array.from(new Uint8Array(hashBuffer));

                                                    // Convert hash to hex string
                                                    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

                                                    // Convert salt to hex string
                                                    const saltHex = Array.from(salt).map(b => b.toString(16).padStart(2, '0')).join('');

                                                    // Return the combined salt and hash
                                                    return `${saltHex}:${hashHex}`;
                                                }
                                                async function verifyPassword(password, storedHash) {
                                                    // Split the stored hash into salt and hash
                                                    const [saltHex, hashHex] = storedHash.split(':');

                                                    // Convert salt from hex to ArrayBuffer
                                                    const salt = new Uint8Array(saltHex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));

                                                    // Convert password to ArrayBuffer
                                                    const encoder = new TextEncoder();
                                                    const data = encoder.encode(password);

                                                    // Combine password and salt
                                                    const saltedData = new Uint8Array(data.length + salt.length);
                                                    saltedData.set(salt);
                                                    saltedData.set(data, salt.length);

                                                    // Hash the salted password
                                                    const hashBuffer = await crypto.subtle.digest('SHA-256', saltedData);
                                                    const hashArray = Array.from(new Uint8Array(hashBuffer));

                                                    // Convert hash to hex string
                                                    const hashHexToCompare = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

                                                    // Compare the hashes
                                                    return hashHex === hashHexToCompare;
                                                }
                                                const transactionCompte = db.transaction(["Compte"], "readwrite");
                                                const objectStoreCompte = transactionCompte.objectStore("Compte");
                                                // Récupérez les données existantes du compte
                                                const userIndex = objectStoreCompte.index("User");
                                                const getRequestByUserId = userIndex.get(email_data);

                                                getRequestByUserId.onsuccess = function (event) {
                                                    const compteData = event.target.result;

                                                    if (compteData) {

                                                        // Mise à jour des champs nécessaires
                                                        const password_data = JSON.parse(compteData.value).password

                                                        const userId = id_data
                                                        const name = name_input.value
                                                        const email = email_input.value
                                                        const password_before = newMdp_input.value
                                                        // Vérifier si le mot de passe respecte les critères
                                                        const lowercaseRegex = /[a-z]/;
                                                        const uppercaseRegex = /[A-Z]/;
                                                        const numberRegex = /[0-9]/;
                                                        const specialCharRegex = /[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
                                                        const lengthRegex = /.{8,}/;

                                                        const isValidPassword =
                                                            lowercaseRegex.test(password_before) &&
                                                            uppercaseRegex.test(password_before) &&
                                                            numberRegex.test(password_before) &&
                                                            specialCharRegex.test(password_before) &&
                                                            lengthRegex.test(password_before);

                                                        if (!isValidPassword) {
                                                            alert(
                                                                "Le mot de passe doit respecter les critères suivants :\n- Au moins une lettre minuscule\n- Au moins une lettre majuscule\n- Au moins un chiffre\n- Au moins un caractère spécial\n- Au moins 8 caractères"
                                                            );
                                                            return; // Sortir de la fonction si le mot de passe ne respecte pas les critères
                                                        }

                                                        (async () => {
                                                            const password_before = newMdp_input.value
                                                            const password_input_value = mdp_input.value

                                                            // Vérification du mot de passe
                                                            const isCorrect = await verifyPassword(password_input_value, password_data);

                                                            if (isCorrect === true) {

                                                                const password = await hashPassword(password_before);
                                                                const updateTransaction = db.transaction(["Compte"], "readwrite");
                                                                const updateObjectStore = updateTransaction.objectStore("Compte");

                                                                const updateRequest = updateObjectStore.put({
                                                                    username: email_input.value,
                                                                    id: userId,
                                                                    value: JSON.stringify({ userId, name, email, password }),
                                                                });

                                                                updateRequest.onsuccess = function () {
                                                                    alert("Votre mot de passe a bien été changé");
                                                                    function getFormattedDateTime() {
                                                                        const currentTime = new Date();

                                                                        // Obtention des composants de la date
                                                                        const day = currentTime.getDate();
                                                                        const month = currentTime.getMonth() + 1; // Les mois sont indexés à partir de 0
                                                                        const year = currentTime.getFullYear();

                                                                        // Formater la date au format "dd-mm-yyyy"
                                                                        const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;

                                                                        // Obtention des composants de l'heure
                                                                        const hours = currentTime.getHours();
                                                                        const minutes = currentTime.getMinutes();

                                                                        // Formater l'heure au format "hh:mm"
                                                                        const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

                                                                        // Concaténer la date et l'heure dans la chaîne de caractères finale
                                                                        return `${formattedDate} ${formattedTime}`;
                                                                    }
                                                                    updateDateTimeInUpdating();
                                                                    function updateDateTimeInUpdating() {
                                                                        const formattedDateTime = getFormattedDateTime();
                                                                        // Mettre à jour l'heure dans Updating
                                                                        const transaction = db.transaction(["Updating"], "readwrite");
                                                                        const objectStore = transaction.objectStore("Updating");
                                                                        objectStore.put({ MAJ: formattedDateTime, update: "maj_hour" });
                                                                    }
                                                                };


                                                            }

                                                        })();



                                                    } else {
                                                        alert(
                                                            "Le mot de passe n'est pas bon"
                                                        );
                                                    }
                                                    delog.style.transform = "translateY(-500px)"
                                                };
                                            }
                                            // L'adresse e-mail existe déjà avec le même identifiant, ne rien faire


                                        } else {
                                            alert("Cette adresse e-mail est déjà utilisée. Veuillez choisir une autre adresse e-mail.");

                                        }
                                    })
                                    .catch((error) => {
                                        console.error("Erreur lors de la vérification de l'adresse e-mail :", error);
                                    });

                            })
                        });


                    }
                }
            };



        } else {

            localStorage.setItem("Compte?", false)
        }
    };
})



const personnalisé_btn_header = document.getElementById(
    "personnalisé_btn_header"
);
const personnalisé_btn_nav = document.getElementById(
    "personnalisé_btn_nav"
);
const personnalisé_btn_prefooter = document.getElementById(
    "personnalisé_btn_prefooter"
);
const personnalisé_btn_footer = document.getElementById(
    "personnalisé_btn_footer"
);
const personnalisé_btn_hero_section = document.getElementById(
    "personnalisé_btn_hero_section"
);
const personnalisé_btn_main_content = document.getElementById(
    "personnalisé_btn_main_content"
);
const header_cards = document.querySelector(".header_cards");
const nav_cards = document.querySelector(".nav_cards");
const prefooter_cards = document.querySelector(".prefooter_cards");
const footer_cards = document.querySelector(".footer_cards");
const hero_section_cards = document.querySelector(".hero_section_cards");
const main_content_cards = document.querySelector(".main_content_cards");
const validateBtn = document.getElementById("validateBtn");
const logoHeader = document.querySelector(".logo_header");
const siteNameHeader = document.querySelector(".site_name_header");
const row_1 = document.querySelectorAll(".row-1");
const row_2 = document.querySelectorAll(".row-2");
resetBtnActive()
function resetBtnActive() {
    const step = localStorage.getItem("step")
    if (step === "1") {
        personnalisé_btn_header.style.boxShadow = "0 0 0 5px rgb(129 140 248 / 30%)"

        personnalisé_btn_nav.style.boxShadow = "none"
        personnalisé_btn_hero_section.style.boxShadow = "none"
        personnalisé_btn_prefooter.style.boxShadow = "none"
        personnalisé_btn_footer.style.boxShadow = "none"
        personnalisé_btn_main_content.style.boxShadow = "none"
    } else if (step === "2") {
        personnalisé_btn_nav.style.boxShadow = "0 0 0 5px rgb(129 140 248 / 30%)"
        personnalisé_btn_header.style.boxShadow = "none"

        personnalisé_btn_hero_section.style.boxShadow = "none"
        personnalisé_btn_prefooter.style.boxShadow = "none"
        personnalisé_btn_footer.style.boxShadow = "none"
        personnalisé_btn_main_content.style.boxShadow = "none"
    } else if (step === "3") {
        personnalisé_btn_hero_section.style.boxShadow = "0 0 0 5px rgb(129 140 248 / 30%)"
        personnalisé_btn_header.style.boxShadow = "none"
        personnalisé_btn_nav.style.boxShadow = "none"

        personnalisé_btn_prefooter.style.boxShadow = "none"
        personnalisé_btn_footer.style.boxShadow = "none"
        personnalisé_btn_main_content.style.boxShadow = "none"
    } else if (step === "4") {
        personnalisé_btn_main_content.style.boxShadow = "0 0 0 5px rgb(129 140 248 / 30%)"
        personnalisé_btn_header.style.boxShadow = "none"
        personnalisé_btn_nav.style.boxShadow = "none"
        personnalisé_btn_hero_section.style.boxShadow = "none"
        personnalisé_btn_prefooter.style.boxShadow = "none"
        personnalisé_btn_footer.style.boxShadow = "none"

    } else if (step === "5") {
        personnalisé_btn_prefooter.style.boxShadow = "0 0 0 5px rgb(129 140 248 / 30%)"
        personnalisé_btn_header.style.boxShadow = "none"
        personnalisé_btn_nav.style.boxShadow = "none"
        personnalisé_btn_hero_section.style.boxShadow = "none"

        personnalisé_btn_footer.style.boxShadow = "none"
        personnalisé_btn_main_content.style.boxShadow = "none"
    } else if (step === "6") {
        personnalisé_btn_footer.style.boxShadow = "0 0 0 5px rgb(129 140 248 / 30%)"
        personnalisé_btn_header.style.boxShadow = "none"
        personnalisé_btn_nav.style.boxShadow = "none"
        personnalisé_btn_hero_section.style.boxShadow = "none"
        personnalisé_btn_prefooter.style.boxShadow = "none"

        personnalisé_btn_main_content.style.boxShadow = "none"

    } else {
        personnalisé_btn_header.style.boxShadow = "none"
        personnalisé_btn_nav.style.boxShadow = "none"
        personnalisé_btn_hero_section.style.boxShadow = "none"
        personnalisé_btn_prefooter.style.boxShadow = "none"
        personnalisé_btn_footer.style.boxShadow = "none"
        personnalisé_btn_main_content.style.boxShadow = "none"
    }
}

personnalisé_btn_header.addEventListener("click", () => {
    const step = localStorage.getItem("step")
    if (step === "1") {
        const personnalisé_header_overflow = document.querySelector(".personnalisé_header");
        personnalisé_header_overflow.style.overflow = "visible";
        header_cards.style.transform = "translateX(-200px) scale(2.5)";
        header_cards.style.zIndex = "11";
        row_2.forEach((row) => {
            row.style.zIndex = "-1";
        })


    }

});
personnalisé_btn_nav.addEventListener("click", () => {
    const step = localStorage.getItem("step")
    if (step === "2") {
        const personnalisé_nav_overflow = document.querySelector(".personnalisé_nav");
        personnalisé_nav_overflow.style.overflow = "visible";
        nav_cards.style.transform = "translateX(200px) scale(2.5)";
        nav_cards.style.zIndex = "11";
        row_1.forEach((row) => {
            row.style.zIndex = "-1";
        })

    }

});
personnalisé_btn_prefooter.addEventListener("click", () => {
    const step = localStorage.getItem("step")
    if (step === "5") {
        const personnalisé_prefooter_overflow = document.querySelector(".personnalisé_prefooter");
        personnalisé_prefooter_overflow.style.overflow = "visible";
        main_content_cards.style.transform = "translateX(485px)";
        main_content_cards.style.zIndex = "-11";
        prefooter_cards.style.transform = "translateX(-200px) scale(2.5)";
        prefooter_cards.style.zIndex = "11";
        row_2.forEach((row) => {
            row.style.zIndex = "-1";
        })
        localStorage.setItem("step", "6")
        row_2.forEach((row) => {
            row.style.zIndex = "1";
        })
        resetBtnActive()
    }

});
personnalisé_btn_footer.addEventListener("click", () => {
    const step = localStorage.getItem("step")
    if (step === "6") {
        const personnalisé_footer_overflow = document.querySelector(".personnalisé_footer");
        personnalisé_footer_overflow.style.overflow = "visible";
        prefooter_cards.style.transform = "translateX(-485px)";
        prefooter_cards.style.zIndex = "-11";
        footer_cards.style.transform = "translateX(200px) scale(2.5)";
        footer_cards.style.zIndex = "11";
        row_1.forEach((row) => {
            row.style.zIndex = "-1";
        })
    }

});
personnalisé_btn_hero_section.addEventListener("click", () => {
    const step = localStorage.getItem("step")
    if (step === "3") {
        const personnalisé_hero_section_overflow = document.querySelector(".personnalisé_hero_section");
        personnalisé_hero_section_overflow.style.overflow = "visible";
        hero_section_cards.style.transform = "translateX(-200px) scale(2.5)";
        hero_section_cards.style.zIndex = "11";
        row_2.forEach((row) => {
            row.style.zIndex = "-1";
        })
    }

});
personnalisé_btn_main_content.addEventListener("click", () => {
    const step = localStorage.getItem("step")
    if (step === "4") {
        const personnalisé_main_content_overflow = document.querySelector(".personnalisé_main_content");
        personnalisé_main_content_overflow.style.overflow = "visible";
        main_content_cards.style.transform = "translateX(200px) scale(2.5)";
        main_content_cards.style.zIndex = "11";
        row_1.forEach((row) => {
            row.style.zIndex = "-1";
        })
        localStorage.setItem("step", "5")
        row_1.forEach((row) => {
            row.style.zIndex = "1";
        })
        resetBtnActive()
    }

});
const validateBtn_logo = document.getElementById("validateBtn_logo");
const validateBtn_background = document.getElementById("validateBtn_background");
const validateBtn_menu = document.getElementById("validateBtn_menu");
const menu_nav_header = document.querySelector(".menu_nav_header");
const counter_nav_header = document.querySelector(".counter_nav_header");
const menu_hero = document.querySelector(".menu_hero");
const font_hero = document.querySelector(".font_hero");
const color_hero = document.querySelector(".color_hero");
const background_nav_header = document.querySelector(".background_nav_header");
const validateBtnHeroSection = document.getElementById("validateBtn_hero_section");
const validateBtnHeroSectionFont = document.getElementById("validateBtn_hero_section_font");
const logoInput = document.getElementById("logoInput");
validateBtn_logo.addEventListener("click", () => {
    if (logoInput.value) {
        btn_co_header.style.transform = "translateX(-530px)";
        logoHeader.style.transform = "translateX(-630px)";
    } else { alert("Vous devez choisir un logo") }
});
const validateBtn_link = document.getElementById("validateBtn_link");
const validateBtn_sub = document.getElementById("validateBtn_sub");
const link = document.querySelector(".link");
const subscribe_footer = document.querySelector(".subscribe_footer");
const category_footer = document.querySelector(".category_footer");
validateBtn_link.addEventListener("click", () => {
    link.style.transform = "translateX(-480px)";
    subscribe_footer.style.transform = "translateX(-110px)";
});
validateBtn_sub.addEventListener("click", () => {
    subscribe_footer.style.transform = "translateX(-480px)";
    category_footer.style.transform = "translateX(-240px)";
});
// Sélectionnez les éléments pertinents
const cardCounter = document.querySelector(".card__counter");
const scoreElement = document.querySelector(".card__counter-score");
const plusButton = document.querySelector(".card__btn-plus");
const minusButton = document.querySelector(".card__btn");
let score = parseInt(scoreElement.textContent); // Obtenez le score initial
// Ajoutez un écouteur de clic sur le bouton "+" pour augmenter le score
plusButton.addEventListener("click", () => {
    score++;
    scoreElement.textContent = score;
});

// Ajoutez un écouteur de clic sur le bouton "-" pour diminuer le score
minusButton.addEventListener("click", () => {
    if (score > 0) {
        score--;
        scoreElement.textContent = score;
    }
});
// Sélectionnez les éléments pertinents
const validateButton = document.getElementById("validateBtn_counter");
// Ajoutez un écouteur de clic sur le bouton "Valider"
validateButton.addEventListener("click", () => {
    const score = parseInt(scoreElement.textContent); // Obtenez le score actuel
    localStorage.setItem("menuCounterScore", score); // Enregistrez le score dans le LocalStorage
    nav_cards.style.transform = "translateX(485px)";
    nav_cards.style.zIndex = "-11";
    localStorage.setItem("step", "3")
    row_1.forEach((row) => {
        row.style.zIndex = "1";
    })
    resetBtnActive()
});
const validateBtn_hero_section_color = document.getElementById("validateBtn_hero_section_color");
// Ajoutez un écouteur de clic sur le bouton "Valider"
validateBtn_hero_section_color.addEventListener("click", () => {
    const hexValue = localStorage.getItem('colorhex_site');
    if (hexValue) {
        const personnalisé_hero_section_overflow = document.querySelector(".personnalisé_hero_section");
        personnalisé_hero_section_overflow.style.overflow = "hidden";
        hero_section_cards.style.transform = "translateX(-507px) scale(0.5)";
        hero_section_cards.style.zIndex = "-11";
        localStorage.setItem("step", "4")
    } else {
        alert("Vous devez choisir les couleurs du site")
    }
    row_2.forEach((row) => {
        row.style.zIndex = "1";
    })
    resetBtnActive()
});
const checkboxes = document.querySelectorAll('.checkbox-input');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            checkboxes.forEach(cb => {
                if (cb !== this) {
                    cb.checked = false;
                }
            });
            localStorage.setItem('selectedImage', this.getAttribute('data-img'));

        } else {
            localStorage.removeItem('selectedImage');
        }
    });
});
const validateBtn_btn_co = document.getElementById("validateBtn_btn_co");
const validateBtn_header_logo = document.getElementById("validateBtn_header_logo");
logoInput.addEventListener("change", handleFileSelect);
function checkLocalStorageCapacity() {
    let testKey = 'test', testValue = 'x', multiplier = 1024, size = 0;

    try {
        while (true) {
            localStorage.setItem(testKey + size, new Array(size * multiplier).join(testValue));
            size++;
        }
    } catch (e) {
        console.log(`LocalStorage capacity reached: ${size * multiplier} bytes (${(size * multiplier / (1024 * 1024)).toFixed(2)} MB)`);
        return (size * multiplier);
    } finally {
        // Clean up
        for (let i = 0; i < size; i++) {
            localStorage.removeItem(testKey + i);
        }
    }
}
function handleFileSelect(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const fileContent = event.target.result;

            // Taille approximative des données en Base64
            const estimatedFileSize = Math.ceil(fileContent.length * 0.75); // Base64 encodé est ~33% plus grand que les données binaires

            // Estimation de la taille actuelle utilisée par le localStorage
            const totalStorage = localStorage.length ? Object.entries(localStorage).reduce((total, [key, value]) => total + key.length + value.length, 0) : 0;

            // Taille totale disponible pour le stockage


            const MAX_LOCAL_STORAGE_SIZE = checkLocalStorageCapacity();

            // Vérifiez si la taille totale dépassera la limite
            if (totalStorage + estimatedFileSize > MAX_LOCAL_STORAGE_SIZE) {
                alert("Le fichier est trop volumineux.");
                logoInput.value = ""
            } else {
                // Enregistrez le contenu du fichier dans le localStorage
                try {
                    localStorage.setItem("selectedLogo", fileContent);
                    alert("Fichier sauvegardé avec succès.");
                } catch (e) {
                    alert("Erreur lors de l'enregistrement du fichier : " + e.message);
                }
            }
        };

        reader.readAsDataURL(selectedFile);
    }
}

const btn_co_header = document.querySelector(".btn_co_header");
validateBtn_header_logo.addEventListener("click", () => {
    const selectedImage = localStorage.getItem("selectedImage");
    if (selectedImage) {
        header_cards.style.transform = "translateX(-485px)";
        header_cards.style.zIndex = "-11";
        localStorage.setItem("step", "2")
        row_2.forEach((row) => {
            row.style.zIndex = "0";
        })
        resetBtnActive()
    } else {
        alert("Vous devez choisir un bouton")
    }
});
const validateBtn_hero_section_font = document.getElementById("validateBtn_hero_section_font");
validateBtn_hero_section_font.addEventListener("click", function () {
    // Récupérez le contenu du fichier enregistré dans le localStorage
    const font_family = localStorage.getItem("font_family");
    if (font_family) {
        const selectedBackground_font_family = document.querySelector(".select-font_hero_section .select-btn .sBtn-text_hero_section");
        if (selectedBackground_font_family.textContent !== "Font") {

            localStorage.setItem("font_family", selectedBackground_font_family.textContent);
            font_hero.style.transform = "translateX(-1050px) scale(0.5)";
            color_hero.style.transform = "translateX(-1310px) scale(0.5)";
        } else {
            alert("Vous devez choisir un type de font")
        }

    } else {
        const selectedBackground_font_family = document.querySelector(".select-font_hero_section .select-btn .sBtn-text_hero_section");
        if (selectedBackground_font_family.textContent !== "Font") {

            localStorage.setItem("font_family", selectedBackground_font_family.textContent);
            font_hero.style.transform = "translateX(-850px) scale(0.5)";
            color_hero.style.transform = "translateX(-1086px) scale(0.5)";
        } else {
            alert("Vous devez choisir un type de font")
        }


    }
});
const siteNameInput = document.getElementById("siteNameInput");
const siteNameInput_valid = document.getElementById("siteNameInput");
// Chargement de la valeur précédemment enregistrée dans le localStorage
const savedSiteName = localStorage.getItem("siteName");
if (savedSiteName) {
    siteNameInput.value = savedSiteName;
}

validateBtn.addEventListener("click", () => {
    if (siteNameInput_valid.value) {
        const siteName = siteNameInput.value;

        // Enregistrement dans le localStorage
        localStorage.setItem("siteName", siteName);
        logoHeader.style.transform = "translateX(-360px)";
        siteNameHeader.style.transform = "translateX(-390px)";
    } else {

        alert("Vous devez mettre un nom")
    }



});
const validateBtnMenu = document.getElementById("validateBtn_menu");
const validateBtnBackground = document.getElementById("validateBtn_background");

validateBtnMenu.addEventListener("click", () => {
    const selectedMenu = document.querySelector(".select-menu .select-btn .sBtn-text_nav");
    var txt_selectedMenu = selectedMenu.textContent

    if (txt_selectedMenu !== "Menu") {
        localStorage.setItem("selectedMenu", selectedMenu.textContent);
        menu_nav_header.style.transform = "translateX(-510px)";
        background_nav_header.style.transform = "translateX(-570px)";
    } else {
        alert("Vous devez choisir un type de menu")
    }
});

validateBtnBackground.addEventListener("click", () => {
    const selectedBackground = document.querySelector(".select-menu_background .select-btn .sBtn-text_background");
    if (selectedBackground.textContent !== "Couleur") {
        localStorage.setItem("selectedBackground", selectedBackground.textContent);
        counter_nav_header.style.transform = "translateX(-990px) scale(0.5)";
        background_nav_header.style.transform = "translateX(-880px) scale(0.5)";
    } else {
        alert("Vous devez choisir un type de couleur")
    }
});


validateBtnHeroSection.addEventListener("click", () => {
    const selectedSiteType = document.querySelector(".select-menu_hero_section .select-btn .sBtn-text_hero_section");



    if (selectedSiteType.textContent !== "Site") {
        localStorage.setItem("selectedSiteType", selectedSiteType.textContent);
        localStorage.setItem("selectedSiteType_id", selectedSiteType.id);
        menu_hero.style.transform = "translateX(-480px) scale(0.5)";
        font_hero.style.transform = "translateX(-600px) scale(0.5)";
    } else {
        alert("Vous devez choisir un type de site")
    }
});

const link_index = document.querySelector(".link_index");
const angles_radius_card = document.querySelector(".angles_radius_card");
const angles_radius = document.querySelector(".angles_radius");
const btn = document.querySelector(".btn");
link_index.style.display = "none";
// Récupérer la valeur de "step" dans le localStorage
btn.addEventListener("click", function () {
    //compte ?

    const Compte_question = localStorage.getItem("Compte?")

    if (Compte_question && Compte_question !== "false") {
        // Si la valeur de "step" est égale à 6, afficher le lien
        const steps = localStorage.getItem("check_link")

        if (steps && steps !== "false") {
            // Si la valeur de "step" est égale à 6, afficher le lien
            link_index.style.display = "flex";
        } else {
            // Sinon, masquer le lien
            link_index.style.display = "none";
            alert("Veuillez remplir tous les champs")
        }
    } else {
        // Sinon, masquer le lien
        link_index.style.display = "none";
        alert("Veuillez créer un compte avant")
    }

    localStorage.setItem("Site_save", "false");
});
const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text_nav");
selectBtn.addEventListener("click", () =>
    optionMenu.classList.toggle("active")
);

options.forEach((option) => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});

const optionMenu_hero_section = document.querySelector(".select-menu_hero_section"),
    selectBtn_menu_hero_section = optionMenu_hero_section.querySelector(".select-btn"),
    options_menu_hero_section = optionMenu_hero_section.querySelectorAll(".option"),
    sBtn_text_menu_hero_section = optionMenu_hero_section.querySelector(".sBtn-text_hero_section");

selectBtn_menu_hero_section.addEventListener("click", () =>
    optionMenu_hero_section.classList.toggle("active")
);

options_menu_hero_section.forEach((option) => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text_menu_hero_section.innerText = selectedOption;

        optionMenu_hero_section.classList.remove("active");
    });
});

const optionMenu_background = document.querySelector(".select-menu_background"),
    selectBtn_menu_background = optionMenu_background.querySelector(".select-btn"),
    options_menu_background = optionMenu_background.querySelectorAll(".option"),
    sBtn_text_menu_background = optionMenu_background.querySelector(".sBtn-text_background");

selectBtn_menu_background.addEventListener("click", () =>
    optionMenu_background.classList.toggle("active")
);

options_menu_background.forEach((option) => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text_menu_background.innerText = selectedOption;

        optionMenu_background.classList.remove("active");
    });
});
const optionFont_hero_section = document.querySelector(".select-font_hero_section"),
    selectBtn_font_hero_section = optionFont_hero_section.querySelector(".select-btn"),
    options_font_hero_section = optionFont_hero_section.querySelectorAll(".option"),
    sBtn_text_font_hero_section = optionFont_hero_section.querySelector(".sBtn-text_hero_section");

selectBtn_font_hero_section.addEventListener("click", () =>
    optionFont_hero_section.classList.toggle("active")
);

options_font_hero_section.forEach((option) => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text_font_hero_section.innerText = selectedOption;
        sBtn_text_font_hero_section.style.fontFamily = selectedOption.replace(/\+/g, " ");;

        optionFont_hero_section.classList.remove("active");
    });
});

const option_langue = document.querySelector(".select-langue"),
    selectBtn_langue = option_langue.querySelector(".select-btn"),
    options_langue = option_langue.querySelectorAll(".option"),
    sBtn_text_langue = option_langue.querySelector(".sBtn-langue"),
    menu_nav_a = document.querySelectorAll(".Menu .nav_bar a"),
    header_log = document.querySelectorAll(".card_log .wrapper_log header"),
    btn_valid_txt = document.querySelector(".action_btn .btn_valid_log"),
    delete_account_a = document.querySelector(".delete_account a"),
    wrapper_log_group1 = document.querySelector(".wrapper_log .group"),
    wrapper_log_group2 = document.querySelector(".wrapper_log .group2"),
    wrapper_log_group3 = document.querySelector(".wrapper_log .group3"),
    wrapper_log_group4 = document.querySelector(".wrapper_log .group4"),
    cookie_title = document.querySelector(".cookie_faux .cookie_faux-warning .cookie_faux-warning__title"),
    cookie_txt = document.querySelector(".cookie_faux .cookie_faux-warning .cookie_faux-warning__text"),
    cookie_txt_btn = document.querySelectorAll(".cookie_faux .cookie_faux-warning .cookie_faux-warning__button"),
    h1_how_use = document.querySelector(".how_use h1"),
    how_use_hu_step = document.querySelectorAll(".how_use .hu_step"),
    description_h1 = document.querySelector(".description h1"),
    description_p = document.querySelector(".description p"),
    generate_btn_btn = document.querySelector(".generate_btn .button_top"),
    card_retro_p = document.querySelector(".card_retro p"),
    card__content_h3_content = document.querySelectorAll(".card__content h3"),
    card__content_p_content = document.querySelectorAll(".card__content p"),
    partie1_h1_content = document.querySelector(".partie1 h1"),
    partie1_h3_content = document.querySelector(".partie1 h3"),
    partie1_p_content = document.querySelector(".partie1 p"),
    partie2_h3_content = document.querySelector(".partie2 h3"),
    partie2_p_content = document.querySelector(".partie2 p"),
    btn_seeMore = document.querySelector(".partie2 button .span"),
    details_span1 = document.querySelectorAll(".row.row-1 .details span"),
    details_span2 = document.querySelectorAll(".row.row-2 .details span"),
    btn_personnalisé = document.querySelectorAll(".bottom a"),
    row_p = document.querySelectorAll(".row section"),
    btn_generate_text = document.querySelector(".btn_generate .btn .text"),
    link_index_a = document.querySelector(".link_index a"),
    site_name_header_h3 = document.querySelector(".site_name_header h3"),
    form_span = document.querySelectorAll(".site_name_header .form-control label span"),
    btn_valid_site_name = document.querySelector(".site_name_header .form-control button"),
    logo_header_h3 = document.querySelector(".logo_header h3"),
    logo_header_btn = document.querySelector(".logo_header button"),
    header_header_btn_co_h3 = document.querySelector(".header_header_btn_co h3"),
    header_header_btn_co_btn = document.querySelector(".header_header_btn_co button"),
    menu_nav_header_h3 = document.querySelector(".menu_nav_header h3"),
    menu_nav_header_btn = document.querySelector(".menu_nav_header button"),
    background_menu_h3 = document.querySelector(".background_menu h3"),
    background_menu_btn = document.querySelector(".background_menu button"),
    option_menu_color = document.querySelectorAll(".select-menu_background .options .option"),
    background_menu_span_text = document.querySelector(".select-menu_background .select-btn .sBtn-text_background"),
    counter_nav_header_h3 = document.querySelector(".counter_nav_header h3"),
    counter_nav_header_btn = document.querySelectorAll(".counter_nav_header button"),
    hero_section_cards_h3 = document.querySelector(".hero_section_cards h3"),
    hero_section_cards_btn = document.querySelector(".hero_section_cards button"),
    option_type_site = document.querySelectorAll(".select-menu_hero_section .options .option"),
    font_hero_h3 = document.querySelector(".font_hero h3"),
    font_hero_btn = document.querySelector(".font_hero button"),
    color_hero_h3 = document.querySelector(".color_hero h3"),
    color_hero_btn = document.querySelector(".color_hero button"),
    main_content_cards_h1 = document.querySelector(".main_content_cards h1"),
    prefooter_cards_h1 = document.querySelector(".prefooter_cards h1"),
    footer_cards_link_h3 = document.querySelector(".footer_cards .link h3"),
    footer_cards_link_btn = document.querySelector(".footer_cards .link button"),
    footer_cards_subscribe_footer_h3 = document.querySelector(".footer_cards .subscribe_footer h3"),
    footer_cards_subscribe_footer_btn = document.querySelector(".footer_cards .subscribe_footer button"),
    footer_cards_category_footer_h3 = document.querySelector(".footer_cards .category_footer h3"),
    footer_cards_category_footer_btn = document.querySelector(".footer_cards .category_footer button"),
    header_label_cp = document.querySelectorAll(".wrapper_ex header label"),
    home_menu_ex_cp_description_extension_h2 = document.querySelector(".wrapper_ex .home_menu_ex_cp .description_extension h2"),
    home_menu_ex_cp_description_extension_p = document.querySelector(".wrapper_ex .home_menu_ex_cp .description_extension p"),
    home_menu_ex_cp_description_extension_btn = document.querySelector(".wrapper_ex .home_menu_ex_cp .description_extension button"),
    vpn_ex_cp_description_extension_h2 = document.querySelector(".wrapper_ex .vpn_ex_cp .description_extension h2"),
    vpn_ex_cp_description_extension_ul = document.querySelectorAll(".wrapper_ex .vpn_ex_cp .description_extension ul li"),
    vpn_ex_cp_description_extension_p = document.querySelectorAll(".wrapper_ex .vpn_ex_cp .description_extension p"),
    vpn_ex_cp_description_extension_btn = document.querySelector(".wrapper_ex .vpn_ex_cp .description_extension button"),
    cloud_ex_cp_description_extension_h2 = document.querySelector(".card_bento.virage .cloud_ex_cp .description_extension h2"),
    cloud_ex_cp_description_extension_ul = document.querySelectorAll(".card_bento.virage .cloud_ex_cp .description_extension ul li"),
    cloud_ex_cp_description_extension_p = document.querySelectorAll(".card_bento.virage .cloud_ex_cp .description_extension p"),
    cloud_ex_cp_description_extension_btn = document.querySelector(".card_bento.virage .cloud_ex_cp .description_extension button"),
    extension_focus_description_extension_h2 = document.querySelector(".card_bento.icons .extension_focus .description_extension .h2_title_extension"),
    extension_focus_description_extension_p = document.querySelector(".card_bento.icons .extension_focus .description_extension .p_title_extension"),
    extension_focus_description_extension_btn = document.querySelector(".card_bento.icons .extension_focus .description_extension button .span"),
    Livre_audio_description_book_h1 = document.querySelector(".card_bento.mobile .Livre_audio .description_book h1"),
    Livre_audio_description_book_p = document.querySelector(".card_bento.mobile .Livre_audio .description_book p"),
    Livre_audio_description_book_btn = document.querySelector(".card_bento.mobile .Livre_audio .description_book button .span"),
    Livre_audio_description_book_bar_listen = document.querySelector(".card_bento.mobile .Livre_audio .center .bar_listen p"),
    Film_description_film_h1 = document.querySelector(".card_bento.ai-route .Film .description_film h2"),
    Film_description_film_p = document.querySelector(".card_bento.ai-route .Film .description_film p"),
    Film_description_film_btn = document.querySelector(".card_bento.ai-route .Film .description_film button .span"),
    li_social_footer = document.querySelectorAll(".list_info li"),
    li2_social_footer = document.querySelectorAll(".footer .footer_general .information .list_gen .list li"),
    option_lang_social_footer = document.querySelectorAll(".select-langue .options .option"),

    diff_menu_nav_a = document.querySelectorAll(".Menu .nav_bar a");

selectBtn_langue.addEventListener("click", () =>
    option_langue.classList.toggle("active")
);
if (!localStorage.getItem("Language")) {
    localStorage.setItem("Language", "Français");
    sBtn_text_langue.innerText = "Français";
} else {
    const langue = localStorage.getItem("Language")
    const mainKey = languageAliases[langue];
    translate_auto(mainKey)
    sBtn_text_langue.innerText = mainKey;
}
function translate_auto(selectedOption) {
    for (let i = 0; i < 4; i++) {
        menu_nav_a[i].textContent = data_lang[selectedOption].header[i]
    }
    cookie_title.textContent = data_lang[selectedOption].cookie[0]
    cookie_txt.innerHTML = data_lang[selectedOption].cookie[1]
    cookie_txt_btn.forEach((btn, i) => {
        btn.textContent = data_lang[selectedOption].cookie[(2 + i)]
    })
    header_log.forEach((header_txt, i) => {
        header_txt.textContent = data_lang[selectedOption].account[(0 + i)]
    })
    wrapper_log_group1.querySelector(".input_log").placeholder = data_lang[selectedOption].account[2]
    wrapper_log_group2.querySelector(".input2_log").placeholder = data_lang[selectedOption].account[3]
    wrapper_log_group3.querySelector(".input3_log").placeholder = data_lang[selectedOption].account[0]
    wrapper_log_group4.querySelector(".input4_log").placeholder = data_lang[selectedOption].account[1]
    btn_valid_txt.textContent = data_lang[selectedOption].account[4]
    delete_account_a.innerHTML = data_lang[selectedOption].account[5]
    h1_how_use.textContent = data_lang[selectedOption].how_use[0]
    how_use_hu_step.forEach((step, i) => {
        step.querySelector(".desc_step .title_step h3").textContent = data_lang[selectedOption].how_use[(1 + i)]
        step.querySelector(".desc_step p").innerHTML = data_lang[selectedOption].how_use[(5 + i)]

    })
    description_h1.textContent = data_lang[selectedOption].generation[0]
    description_p.textContent = data_lang[selectedOption].generation[1]
    generate_btn_btn.textContent = data_lang[selectedOption].generation[2]
    card_retro_p.textContent = data_lang[selectedOption].generation[3]

    card__content_h3_content.forEach((content, i) => {
        content.textContent = data_lang[selectedOption].info[(0 + i)]
    })
    card__content_p_content.forEach((content, i) => {
        content.textContent = data_lang[selectedOption].info[(2 + i)]
    })
    partie1_h1_content.textContent = data_lang[selectedOption].info[4]
    partie1_h3_content.textContent = data_lang[selectedOption].info[5]

    partie1_p_content.textContent = data_lang[selectedOption].info[8]

    partie2_h3_content.textContent = data_lang[selectedOption].info[6]

    partie2_p_content.textContent = data_lang[selectedOption].info[8]
    btn_seeMore.textContent = data_lang[selectedOption].info[9]
    details_span1.forEach((content, i) => {
        if (i === 1) { // Si c'est le deuxième élément (index 1)
            content.textContent = data_lang[selectedOption].part[0]
            return
        }
        if (i === 3) { // Si c'est le deuxième élément (index 1)
            content.textContent = data_lang[selectedOption].part[1]
            return
        }
        if (i === 5) { // Si c'est le deuxième élément (index 1)
            content.textContent = data_lang[selectedOption].part[2]
            return
        }
    })
    details_span2.forEach((content, i) => {
      
        if (i === 1) { // Si c'est le deuxième élément (index 1)
            content.textContent = data_lang[selectedOption].part[3]
            return
        } if (i === 3) {
            content.textContent = data_lang[selectedOption].part[4]
            return
        }

        if (i === 5) { // Si c'est le deuxième élément (index 1)
            content.textContent = data_lang[selectedOption].part[5]
            return
        }
    })
    btn_personnalisé.forEach((content) => {
        content.textContent = data_lang[selectedOption].perso[0]
    })
    row_p.forEach((content, i) => {
        content.querySelector("p").textContent = data_lang[selectedOption].p_row[i]
    })
    btn_generate_text.textContent = data_lang[selectedOption].view[0]
    link_index_a.innerHTML = data_lang[selectedOption].view[1]

    site_name_header_h3.textContent = data_lang[selectedOption].personnalisation_step1[0]

    form_span.forEach((content, i) => {
        const split_letter = data_lang[selectedOption].personnalisation_step1[1].split("")
        content.textContent = split_letter[i]
    })

    btn_valid_site_name.textContent = data_lang[selectedOption].personnalisation_step1[2]

    logo_header_h3.textContent = data_lang[selectedOption].personnalisation_step1[3]
    logo_header_btn.textContent = data_lang[selectedOption].personnalisation_step1[4]

    header_header_btn_co_h3.textContent = data_lang[selectedOption].personnalisation_step1[5]
    header_header_btn_co_btn.textContent = data_lang[selectedOption].personnalisation_step1[6]

    menu_nav_header_h3.textContent = data_lang[selectedOption].personnalisation_step2[0]
    menu_nav_header_btn.textContent = data_lang[selectedOption].personnalisation_step2[1]

    background_menu_h3.textContent = data_lang[selectedOption].personnalisation_step2[2]
    background_menu_span_text.textContent = data_lang[selectedOption].personnalisation_step2[3]
    background_menu_btn.textContent = data_lang[selectedOption].personnalisation_step2[10]


    option_menu_color.forEach((content, i) => {
        content.querySelector("span").textContent = data_lang[selectedOption].personnalisation_step2[(4 + i)]
    })

    counter_nav_header_h3.textContent = data_lang[selectedOption].personnalisation_step2[11]
    counter_nav_header_btn[2].textContent = data_lang[selectedOption].personnalisation_step2[12]
    hero_section_cards_h3.textContent = data_lang[selectedOption].personnalisation_step3[0]
    hero_section_cards_btn.textContent = data_lang[selectedOption].personnalisation_step3[1]

    option_type_site.forEach((content, i) => {
        content.querySelector("span").textContent = data_lang[selectedOption].personnalisation_step3[(2 + i)]
    })

    font_hero_h3.textContent = data_lang[selectedOption].personnalisation_step3[11]
    font_hero_btn.textContent = data_lang[selectedOption].personnalisation_step3[12]
    color_hero_h3.textContent = data_lang[selectedOption].personnalisation_step3[13]
    color_hero_btn.textContent = data_lang[selectedOption].personnalisation_step3[14]
    main_content_cards_h1.textContent = data_lang[selectedOption].personnalisation_step4[0]
    prefooter_cards_h1.textContent = data_lang[selectedOption].personnalisation_step5[0]
    footer_cards_link_h3.textContent = data_lang[selectedOption].personnalisation_step6[0]
    footer_cards_link_btn.textContent = data_lang[selectedOption].personnalisation_step6[1]
    footer_cards_subscribe_footer_h3.textContent = data_lang[selectedOption].personnalisation_step6[2]
    footer_cards_subscribe_footer_btn.textContent = data_lang[selectedOption].personnalisation_step6[3]
    footer_cards_category_footer_h3.textContent = data_lang[selectedOption].personnalisation_step6[4]
    footer_cards_category_footer_btn.textContent = data_lang[selectedOption].personnalisation_step6[5]
    header_label_cp.forEach((content, i) => {
        content.textContent = data_lang[selectedOption].widget_chatpass[i]
    })
    home_menu_ex_cp_description_extension_h2.textContent = data_lang[selectedOption].widget_chatpass[2]
    home_menu_ex_cp_description_extension_p.innerHTML = data_lang[selectedOption].widget_chatpass[3]
    home_menu_ex_cp_description_extension_btn.textContent = data_lang[selectedOption].widget_chatpass[4]
    vpn_ex_cp_description_extension_ul.forEach((content, i) => {
        content.innerHTML = data_lang[selectedOption].widget_chatpass[(7 + i)]
    })

    vpn_ex_cp_description_extension_h2.textContent = data_lang[selectedOption].widget_chatpass[5]
    vpn_ex_cp_description_extension_btn.textContent = data_lang[selectedOption].widget_chatpass[11]
    vpn_ex_cp_description_extension_p[0].innerHTML = data_lang[selectedOption].widget_chatpass[6]
    vpn_ex_cp_description_extension_p[1].innerHTML = data_lang[selectedOption].widget_chatpass[10]

    cloud_ex_cp_description_extension_ul.forEach((content, i) => {
        content.innerHTML = data_lang[selectedOption].widget_cloud[(2 + i)]
    })
    cloud_ex_cp_description_extension_h2.textContent = data_lang[selectedOption].widget_cloud[0]
    cloud_ex_cp_description_extension_btn.textContent = data_lang[selectedOption].widget_cloud[7]
    cloud_ex_cp_description_extension_p[0].innerHTML = data_lang[selectedOption].widget_cloud[1]
    cloud_ex_cp_description_extension_p[1].innerHTML = data_lang[selectedOption].widget_cloud[6]

    extension_focus_description_extension_h2.textContent = data_lang[selectedOption].widget_focus[0]
    extension_focus_description_extension_p.textContent = data_lang[selectedOption].widget_focus[1]
    extension_focus_description_extension_btn.textContent = data_lang[selectedOption].widget_focus[2]
    Livre_audio_description_book_h1.textContent = data_lang[selectedOption].widget_livre_audio[0]
    Livre_audio_description_book_p.textContent = data_lang[selectedOption].widget_livre_audio[1]
    Livre_audio_description_book_btn.textContent = data_lang[selectedOption].widget_livre_audio[2]
    Livre_audio_description_book_bar_listen.textContent = data_lang[selectedOption].widget_livre_audio[3]
    Film_description_film_h1.textContent = data_lang[selectedOption].widget_film[0]
    Film_description_film_p.textContent = data_lang[selectedOption].widget_film[1]
    Film_description_film_btn.textContent = data_lang[selectedOption].widget_film[2]

    li_social_footer.forEach((content, i) => {
        content.innerHTML = data_lang[selectedOption].footer[(0 + i)]
    })
    li2_social_footer.forEach((content, i) => {
        content.innerHTML = data_lang[selectedOption].footer[(7 + i)]
    })
    option_lang_social_footer.forEach((content, i) => {
        content.querySelector("span").textContent = data_lang[selectedOption].footer[(4 + i)]
    })
}
options_langue.forEach((option, index) => {
    option.addEventListener("click", () => {

        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text_langue.innerText = selectedOption;
        localStorage.setItem("Language", selectedOption);
        option_langue.classList.remove("active");
        const mainKey = languageAliases[selectedOption];
       
        translate_auto(mainKey)
    });
});

const section = document.querySelector(".extension_focus");
const cursor_div = document.createElement("div");
cursor_div.classList.add("cursor");
section.appendChild(cursor_div);
for (let i = 0; i < 10; i++) {
    // Créez une div pour représenter la traînée de la souris
    const mouseTrail = document.createElement("div");
    mouseTrail.classList.add("circle");
    cursor_div.appendChild(mouseTrail);

}

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const cursor = document.querySelector(".cursor");
const h2_description_extension = document.querySelector(".description_extension .h2_title_extension");
const p_description_extension = document.querySelector(".description_extension .p_title_extension");

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = "white";
});

section.addEventListener("mousemove", function (e) {
    cursor.style.display = "block"
    coords.x = e.clientX;
    coords.y = e.clientY;

});
h2_description_extension.addEventListener("mousemove", function () {
    const circles = document.querySelector(".circle");
    circles.classList.add("grow")

});
h2_description_extension.addEventListener("mouseleave", function () {
    const circles = document.querySelector(".circle");
    circles.classList.remove("grow")

});
p_description_extension.addEventListener("mousemove", function () {
    const circles = document.querySelector(".circle");
    circles.classList.add("grow-small")

});
p_description_extension.addEventListener("mouseleave", function () {
    const circles = document.querySelector(".circle");
    circles.classList.remove("grow-small")

});
section.addEventListener("mouseleave", function (e) {
    cursor.style.display = "none"

});
const section_hero_banner = document.querySelector(".header_banner_hero");
section_hero_banner.addEventListener("mousemove", function (e) {
    cursor.style.display = "none";
    // Vérifiez si le curseur est en dehors des limites de la section au chargement de la page

});
const extension_chatpass = document.querySelector(".extension_chatpass");
const cloud_row = document.querySelector(".cloud_row");
extension_chatpass.addEventListener("mousemove", function (e) {
    cursor.style.display = "none";
    // Vérifiez si le curseur est en dehors des limites de la section au chargement de la page

});
const Livre_audio = document.querySelector(".Livre_audio");
Livre_audio.addEventListener("mousemove", function (e) {
    cursor.style.display = "none";
    // Vérifiez si le curseur est en dehors des limites de la section au chargement de la page

});

const Film = document.querySelector(".Film ");
Film.addEventListener("mousemove", function (e) {
    cursor.style.display = "none";
    // Vérifiez si le curseur est en dehors des limites de la section au chargement de la page

});
const generation = document.querySelector(".generation ");
generation.addEventListener("mousemove", function (e) {
    cursor.style.display = "none";
    // Vérifiez si le curseur est en dehors des limites de la section au chargement de la page

});
const info = document.querySelector(".info ");
info.addEventListener("mousemove", function (e) {
    cursor.style.display = "none";
    // Vérifiez si le curseur est en dehors des limites de la section au chargement de la page

});
const personnalisation = document.querySelector(".personnalisation ");
personnalisation.addEventListener("mousemove", function (e) {
    cursor.style.display = "none";
    // Vérifiez si le curseur est en dehors des limites de la section au chargement de la page

});
const save_site = document.querySelector(".save_site");
if (save_site) {
    save_site.addEventListener("mousemove", function (e) {
        cursor.style.display = "none";
        // Vérifiez si le curseur est en dehors des limites de la section au chargement de la page

    });
}
function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    cursor.style.top = x;
    cursor.style.left = y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 6 + "px";
        circle.style.top = y - 6 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}
animateCircles();
// Ajoutez un tableau pour stocker les références des éléments de traînée

// Récupérer les éléments de commutateur et les boutons de validation
const validateBtnLink = document.getElementById("validateBtn_link");
const validateBtnSub = document.getElementById("validateBtn_sub");
const validateBtnCat = document.getElementById("validateBtn_cat");

// Ajouter des gestionnaires d'événements pour les boutons de validation
validateBtnLink.addEventListener("click", () => {
    const linkSwitch = document.querySelector(".link .checkbox");
    if (linkSwitch) {
        const linkValue = linkSwitch.checked ? "Yes" : "No";
        localStorage.setItem("linkSwitchValue", linkValue);

    }
});

validateBtnSub.addEventListener("click", () => {
    const subSwitch = document.querySelector(".subscribe_footer .checkbox");
    if (subSwitch) {
        const subValue = subSwitch.checked ? "Yes" : "No";
        localStorage.setItem("subscribeSwitchValue", subValue);

    }
});

validateBtnCat.addEventListener("click", () => {
    const catSwitch = document.querySelector(".category_footer .checkbox");
    if (catSwitch) {
        const catValue = catSwitch.checked ? "Yes" : "No";
        localStorage.setItem("categorySwitchValue", catValue);
        footer_cards.style.transform = "translateX(485px)";
        footer_cards.style.zIndex = "-11";
        localStorage.setItem("step", "1")
        localStorage.setItem("check_link", true)
        row_2.forEach((row) => {
            row.style.zIndex = "-1";
        })
        row_1.forEach((row) => {
            row.style.zIndex = "1";
        })
        resetBtnActive()
    }
});

// Chargement initial des valeurs depuis le localStorage
document.addEventListener("DOMContentLoaded", () => {
    const linkSwitchValue = localStorage.getItem("linkSwitchValue");
    if (linkSwitchValue) {
        const linkSwitch = document.querySelector(".link .checkbox");
        if (linkSwitch) {
            linkSwitch.checked = linkSwitchValue === "Yes";
        }
    }

    const subSwitchValue = localStorage.getItem("subscribeSwitchValue");
    if (subSwitchValue) {
        const subSwitch = document.querySelector(".subscribe_footer .checkbox");
        if (subSwitch) {
            subSwitch.checked = subSwitchValue === "Yes";
        }
    }

    const catSwitchValue = localStorage.getItem("categorySwitchValue");
    if (catSwitchValue) {
        const catSwitch = document.querySelector(".category_footer .checkbox");
        if (catSwitch) {
            catSwitch.checked = catSwitchValue === "Yes";
        }
    }
    });
const extension_chatpass_btn = document.getElementById("extension_chatpass_btn")
extension_chatpass_btn.addEventListener("click", function () {
    window.open("https://chatpass-2.fabcvl.repl.co/")
})
const voir_plus_condition = document.getElementById("voir_plus_condition")
voir_plus_condition.addEventListener("click", function () {
    window.open("condition.html")
})
const voir_mes_sites = document.getElementById("voir_mes_sites")
    if(voir_mes_sites){
        
voir_mes_sites.addEventListener("click", function () {
    window.open("menu_IDE.html")
})
    }
const audiobook = document.getElementById("audiobook")
audiobook.addEventListener("click", function () {
    window.open("audiobook.html")
});
const film = document.getElementById("film")
film.addEventListener("click", function () {
    window.open("film.html")
});
const cookie_warning__button = document.querySelector(".cookie_faux-warning__button");
const cookie = document.querySelector(".cookie_faux");

// Fonction pour obtenir la valeur d'un cookie
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}

const accept_cookie = getCookie("cookies_accept");

if (accept_cookie === "Yes") {
    cookie.style.display = "none";
}

cookie_warning__button.addEventListener("click", function () {
    const cookieValue = "Yes";

    // Calculer la date d'expiration pour un an à partir de la date actuelle
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);

    // Définir le cookie avec la date d'expiration
    document.cookie = `cookies_accept=${cookieValue}; expires=${expirationDate.toUTCString()}; path=/`;

    cookie.style.display = "none";
});




const saved = localStorage.getItem("Site_save");

const Newrequest = window.indexedDB.open("MaBaseDeDonnees", 1);

// Gérer les événements associés à la requête
Newrequest.addEventListener("success", function (event) {
    const db = event.target.result;

    const transaction_to_connection = db.transaction(["Connexion"], "readonly");
    const objectStore_to_connection = transaction_to_connection.objectStore("Connexion");


    // Si vous avez un index nommé "Connected", vous pouvez également l'utiliser
    const getRequestByuserId2connection = objectStore_to_connection.get(1);

    getRequestByuserId2connection.onsuccess = function (event) {
        const dataByuserId = event.target.result;

        if (dataByuserId) {
            const userId = dataByuserId.id_to_create;

            // Stocker le site
            const transaction = db.transaction(["Site"], "readonly");
            const ObjectStore = transaction.objectStore("Site");
            const index = ObjectStore.index("SiteId");
const getAllRequest = index.getAll();

            getAllRequest.onsuccess = function (event) {
                const items = event.target.result;
                const savedSites = [];

                items.forEach((item) => {

                    const key = item.id;

                    if (key.startsWith('site_')) {

                        const storedItem = item.value;

                        try {
                            const parsedItem = JSON.parse(storedItem);

                            if (parsedItem.userId === userId) {
                           
                                savedSites.push(parsedItem);
                            }
                        } catch (error) {
                            console.error('Erreur de parsing pour la clé ', key, ':', error);
                        }
                    }
                });









                if (savedSites.length > 0) {





                    const save_site = document.createElement("section");
                    save_site.classList.add("save_site");
                    const border_perso = document.querySelector(".border_perso");
                    const personnalisation = document.querySelector(".personnalisation ");
                    border_perso.appendChild(save_site)
                    // Insérez la nouvelle section avant la section "footer"
                   
                    const title_save_site = document.createElement("h1");
                    title_save_site.textContent = "Vos sites";
                    save_site.appendChild(title_save_site);
                    const button = document.createElement('button');
button.className = 'cta';
button.id = 'voir_mes_sites';

// Création de la première icône
const iconPlus = document.createElement('i');
iconPlus.className = 'bx bx-dashboard';

// Création du texte
const span = document.createElement('span');
span.className = 'span';
span.textContent = 'Voir mes sites';

// Création de la deuxième icône
const iconArrow = document.createElement('i');
iconArrow.className = 'bx bx-right-arrow-alt';

// Ajout des éléments créés dans le bouton
button.appendChild(iconPlus);
button.appendChild(span);
button.appendChild(iconArrow);
                    save_site.appendChild(button);
                    const section_div_card_save_site = document.createElement("section");
                    section_div_card_save_site.classList.add("section_div_card_save_site");
                    save_site.appendChild(section_div_card_save_site);





                    savedSites.forEach((siteInfo) => {


                        
                        // Accédez aux informations de chaque carte
                        const name_card = siteInfo.name;
                        const img_card = siteInfo.logo;
                        const code_site = siteInfo.content;
                        const siteId = siteInfo.siteId;
                        const time_save = siteInfo.time;
                        const type = siteInfo.type;





                        // Create the article element
                        const article = document.createElement('article');
                        article.className = 'article-wrapper';

                        // Create the container project div
                        const containerProject = document.createElement('div');
                        containerProject.className = 'rounded-lg container-project';

                        const img_logo = document.createElement("img")
                        img_logo.src = img_card
                        containerProject.appendChild(img_logo)
                        // Create the project info div
                        const projectInfo = document.createElement('div');
                        projectInfo.className = 'project-info';

                        // Create the flex-pr div
                        const flexPr = document.createElement('div');
                        flexPr.className = 'flex-pr';

                        // Create the project title div
                        const projectTitle = document.createElement('div');
                        projectTitle.className = 'project-title text-nowrap';
                        projectTitle.textContent = name_card;

                        // Create the project hover div
                        const projectHover = document.createElement('div');
                        projectHover.className = 'project-hover';

                        // Create the right arrow icon
                        const rightArrowIcon = document.createElement('i');
                        rightArrowIcon.className = 'bx bx-right-arrow-alt';

                        // Append the right arrow icon to the project hover div
                        projectHover.appendChild(rightArrowIcon);

                        // Append the project title and project hover to the flex-pr div
                        flexPr.appendChild(projectTitle);
                        flexPr.appendChild(projectHover);

                        // Create the types div
                        const types = document.createElement('div');
                        types.className = 'types';

                        // Create the first project type span
                        const firstProjectType = document.createElement('span');
                        firstProjectType.style.backgroundColor = 'rgba(165, 96, 247, 0.43)';
                        firstProjectType.style.color = 'rgb(85, 27, 177)';
                        firstProjectType.className = 'project-type';
                        firstProjectType.textContent = '• ' + time_save;

                        // Create the second project type span
                        const secondProjectType = document.createElement('span');
                        secondProjectType.className = 'project-type';
                        secondProjectType.textContent = '• ' + type;

                        const deleteProjectType = document.createElement('span');
                        deleteProjectType.className = 'project-type delete';
                        deleteProjectType.innerHTML = `<i class='bx bx-trash' ></i>`;
                        // Append the project type spans to the types div
                        types.appendChild(firstProjectType);
                        types.appendChild(secondProjectType);
                        types.appendChild(deleteProjectType);
                        // Append all elements to the respective parent elements
                        projectInfo.appendChild(flexPr);
                        projectInfo.appendChild(types);

                        article.appendChild(containerProject);
                        article.appendChild(projectInfo);

                        // Append the article to the body or any desired container
                        section_div_card_save_site.appendChild(article);
                        deleteProjectType.addEventListener("click", function () {
                            let confirmation = confirm(
                                "Êtes-vous sûr de vouloir supprimer ce site ?"
                            );
                            if (confirmation) {
                                const siteId = siteInfo.siteId;

                                // Ouvrir une transaction en mode de lecture-écriture
                                const transaction = db.transaction(["Site"], "readwrite");

                                // Obtenir une référence à l'object store
                                const objectStore = transaction.objectStore("Site");

                                // Utiliser la méthode delete de l'object store pour supprimer l'objet spécifique
                                const deleteRequest = objectStore.delete(siteId);

                                deleteRequest.onsuccess = function (event) {
                                    console.log("Site supprimé avec succès de la base de données.");
                                    function getFormattedDateTime() {
                                        const currentTime = new Date();

                                        // Obtention des composants de la date
                                        const day = currentTime.getDate();
                                        const month = currentTime.getMonth() + 1; // Les mois sont indexés à partir de 0
                                        const year = currentTime.getFullYear();

                                        // Formater la date au format "dd-mm-yyyy"
                                        const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;

                                        // Obtention des composants de l'heure
                                        const hours = currentTime.getHours();
                                        const minutes = currentTime.getMinutes();

                                        // Formater l'heure au format "hh:mm"
                                        const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

                                        // Concaténer la date et l'heure dans la chaîne de caractères finale
                                        return `${formattedDate} ${formattedTime}`;
                                    }
                                    updateDateTimeInUpdating();
                                    function updateDateTimeInUpdating() {
                                        const formattedDateTime = getFormattedDateTime();
                                        // Mettre à jour l'heure dans Updating
                                        const transaction = db.transaction(["Updating"], "readwrite");
                                        const objectStore = transaction.objectStore("Updating");
                                        objectStore.put({ MAJ: formattedDateTime, update: "maj_hour" });
                                    }
                                };

                                deleteRequest.onerror = function (event) {
                                    console.error("Erreur lors de la suppression du site :", event.target.error);
                                };

                                // Mettre à jour savedSites
                                const index = savedSites.findIndex((site) => site.siteId === siteId);
                                if (index > -1) {
                                    savedSites.splice(index, 1);

                                    // Mettre à jour le localStorage

                                    // Supprimer l'élément du DOM
                                    section_div_card_save_site.removeChild(article);
                                }
                            }
                        });



                        projectHover.addEventListener("click", function () {
                            // Redirigez vers la page de modification en passant le code_site en tant que paramètre
                            const combinedData = `${siteId}¤${code_site}`;
                            const transaction = db.transaction(["GestionSite"], "readwrite");
                            const ObjectStore = transaction.objectStore("GestionSite");


                            const newRequest = ObjectStore.put({
                                site_gestion: 1,
                                SiteContent: combinedData,
                            });
                            newRequest.onsuccess = function (event) {
                                const contentKey = event.target.result;

                                window.open(`Generate/index_generate.html?contentKey=${contentKey}`);
                            };



                            // Redirigez vers la page de modification en passant une référence à la clé dans l'URL

                            localStorage.setItem("Site_save", "true");
                            function getFormattedDateTime() {
                                const currentTime = new Date();

                                // Obtention des composants de la date
                                const day = currentTime.getDate();
                                const month = currentTime.getMonth() + 1; // Les mois sont indexés à partir de 0
                                const year = currentTime.getFullYear();

                                // Formater la date au format "dd-mm-yyyy"
                                const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;

                                // Obtention des composants de l'heure
                                const hours = currentTime.getHours();
                                const minutes = currentTime.getMinutes();

                                // Formater l'heure au format "hh:mm"
                                const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

                                // Concaténer la date et l'heure dans la chaîne de caractères finale
                                return `${formattedDate} ${formattedTime}`;
                            }
                            updateDateTimeInUpdating();
                            function updateDateTimeInUpdating() {
                                const formattedDateTime = getFormattedDateTime();
                                // Mettre à jour l'heure dans Updating
                                const transaction = db.transaction(["Updating"], "readwrite");
                                const objectStore = transaction.objectStore("Updating");
                                objectStore.put({ MAJ: formattedDateTime, update: "maj_hour" });
                            }
                        });
                    }
                    )
                }
            };

        }
    }
})
const plus_bento = document.querySelector('.plus_bento');
const card_size_bento_plus = document.querySelector('.card_size_bento_plus');
const wave_h = document.querySelector('.wave_h');
const wave_b = document.querySelector('.wave_b');
const card_bento = document.querySelectorAll('.card_bento');
card_bento.forEach((card) => {
    card.addEventListener('click', function () {
        const isExpanded = card.classList.contains('expanded');

        // Réinitialiser toutes les cartes
        card_bento.forEach(c => c.classList.remove('expanded'));

        if (!isExpanded) {
            // Agrandir la carte cliquée
            card.classList.add('expanded');

            // Ajouter l'effet de flou sur les autres cartes
            document.querySelector('.card-grid').classList.add('blur');
            if (card.classList.contains("icons")) {
                section.style.display = "flex"
            }
            if (card.classList.contains("cycling")) {
                extension_chatpass.style.display = "flex"
            }
            if (card.classList.contains("virage")) {
                cloud_row.style.display = "flex"
            }
        } else {
            // Supprimer l'effet de flou si aucune carte n'est agrandie
            document.querySelector('.card-grid').classList.remove('blur');
            if (card.classList.contains("icons")) {
                section.style.display = "none"
            }
            if (card.classList.contains("virage")) {
                cloud_row.style.display = "none"
            }
            if (card.classList.contains("cycling")) {
                extension_chatpass.style.display = "none"
            }
        }
    })
})
document.addEventListener('click', (event) => {
    const isCard = event.target.closest('.card_bento');
    if (!isCard) {
        // Réinitialiser toutes les cartes
        card_bento.forEach((c) => {
            c.classList.remove('expanded')
            if (c.classList.contains("icons")) {
                section.style.display = "none"
            }
            if (c.classList.contains("virage")) {
                cloud_row.style.display = "none"
            }
            if (c.classList.contains("cycling")) {
                extension_chatpass.style.display = "none"
            }


        }); document.querySelector('.card-grid').classList.remove('blur');
    }
});
// Écouter les clics sur le bouton plus_bento
plus_bento.addEventListener("click", function () {


    // Sélectionner les éléments nécessaires
    const gradient_circle = document.querySelector('.gradient-circle');
    const card_grid = document.querySelector('.card-grid');
    const card_bento = document.querySelectorAll('.card_bento');
    const plus_bento_i = document.querySelectorAll('.plus_bento i');

    // Vérifier si l'icône "bxs-arrow-to-top" est actuellement visible
    let isArrowToTopVisible = false;
    plus_bento_i.forEach((icon) => {
        if (icon.classList.contains("bxs-arrow-to-top")) {
            if (icon.style.display === "block" || icon.style.display === "") {
                isArrowToTopVisible = true;
            }

        }
    });

    // Inverser les états d'affichage des icônes
    plus_bento_i.forEach((icon) => {
        if (icon.classList.contains("bxs-arrow-to-top")) {
            // Masquer l'icône "bxs-arrow-to-top" si elle est visible
            icon.style.display = isArrowToTopVisible ? "none" : "block";
            icon.style.right = isArrowToTopVisible ? "0px" : "auto";
        } else {
            // Afficher les autres icônes si "bxs-arrow-to-top" est masquée
            icon.style.display = isArrowToTopVisible ? "block" : "none";
        }
    });

    // Appliquer les modifications supplémentaires en fonction de l'état de "bxs-arrow-to-top"
    if (isArrowToTopVisible) {
        card_bento.forEach((card) => {
            if (card.classList.contains("time")) {
                card.style.animation = "scroll_ininity_inverse 20s linear infinite"
                if (card.classList.contains("distance")) {
                    card.style.animation = "scroll_ininity_inverse 20s linear infinite"

                }
            } else {
                card.style.animation = "scroll_ininity 20s linear infinite"
            }

        })
        // Si "bxs-arrow-to-top" est visible, faire les actions de désactivation
        wave_h.style.backgroundColor = "var(--body_color)"; // Remettre à la couleur par défaut
        wave_b.style.backgroundColor = "var(--body_color)"; // Remettre à la couleur par défaut
        gradient_circle.style.display = "block"; // Afficher à nouveau le gradient
        card_size_bento_plus.style.height = "135vh"; // Remettre à la hauteur par défaut
        card_grid.style.position = "absolute"; // Remettre la position par défaut
        card_grid.style.opacity = "0.2"; // Mettre une opacité par défaut
    } else {
        card_bento.forEach((card) => {
            card.style.animation = "none"
        })
        // Si "bxs-arrow-to-top" est masquée, faire les actions d'activation
        wave_h.style.backgroundColor = "#1a1a1a";
        wave_b.style.backgroundColor = "#1a1a1a";
        gradient_circle.style.display = "none";
        card_size_bento_plus.style.height = "15vh";
        card_grid.style.position = "relative";
        card_grid.style.opacity = "1";
    }
});






document.body.addEventListener("mousemove", (event) => {
    const bodyRect = document.body.getBoundingClientRect();
    const mouseX = event.clientX - bodyRect.left;
    const mouseY = event.clientY - bodyRect.top;

    const rotationY = (mouseX / bodyRect.width) * 100 - 10;
    const rotationX = -(mouseY / bodyRect.height) * 100 + 10;

    gsap.to(".cube", { rotationY: rotationY, rotationX: rotationX });
});


function changeTab(tabIndex) {
    // Obtenir les éléments
    var currentTabCard = document.getElementById('tabContent');
    var targetTabLink = document.getElementById('customTabLink' + tabIndex);

    // Calculer la différence de position
    var targetPosition = targetTabLink.getBoundingClientRect().left - currentTabCard.getBoundingClientRect().left;

    // Appliquer la translation
    currentTabCard.style.transform = 'translateX(' + targetPosition + 'px)';
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show_scroll");

        } else {
            entry.target.classList.remove("show_scroll");

        }
    })
})
const hiddenELements = document.querySelectorAll(".hidden_scroll")
hiddenELements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show_scroll2");

        }
    })
})
const hiddenELements2 = document.querySelectorAll(".hidden_scroll2")
hiddenELements2.forEach((el) => observer2.observe(el));
let activeIndex = 0;

const progressBar = document.querySelectorAll('.progress-bar');

const progress = document.querySelectorAll('.bar_progress');

const steps = document.querySelectorAll('.hu_step');
const videos = document.querySelectorAll('.hu_video video');

steps.forEach((step, index) => {
    if (step.classList.contains("active")) {
        const step_id = step.id

        videos.forEach((video, index) => {
            if (step_id === video.id) {
                video.style.display = "block"
                play_video(video, index)
            } else {
                video.style.display = "none"

            }

        })
    }
    step.addEventListener('click', function () {
        // Supprimez la classe 'active' de tous les éléments
        steps.forEach((s) => {
            s.classList.remove('active');
        });

        // Ajoutez la classe 'active' à l'élément cliqué
        step.classList.add('active');
        const step_id = step.id
        resetvideo(step_id)
        // Arrêter la vidéo actuelle
        videos[activeIndex].pause();
        videos[activeIndex].currentTime = 0;

        // Désactiver la section et la vidéo actuelle
        steps[activeIndex].classList.remove('active');
        steps[activeIndex].querySelector('.bar_progress').style.width = '0%';

        // Activer la nouvelle section et la vidéo correspondante
        activeIndex = index;
        steps[activeIndex].classList.add('active');
        videos[activeIndex].play();
    });
})
function play_video(video, index) {
    const progressBar = steps[index].querySelector('.bar_progress');
    video.addEventListener('timeupdate', () => updateProgressBar(video, progressBar));
    video.addEventListener('ended', () => handleVideoEnd(index));

}
function stop_video(index) {
    const currentVideo = videos[index];
    const currentStep = steps[index];

    currentVideo.pause();
    currentVideo.currentTime = 0;
    currentStep.querySelector('.bar_progress').style.width = '0%';

}

function resetvideo(step_id) {
    const hu_video = document.querySelectorAll(".hu_video video")
    hu_video.forEach((video, index) => {
        if (step_id === video.id) {
            video.style.transform = "scale(1)"
            setTimeout(() => {
                video.style.display = "block"
            }, 300);
            play_video(video, index)
        } else {
            video.style.transform = "scale(0.8)"
            setTimeout(() => {
                video.style.display = "none"
            }, 300);
            stop_video(index)

        }
    })
}

// Ajouter des écouteurs d'événements pour chaque vidéo
// Mettre à jour la barre de progression

function updateProgressBar(video, progressBar) {
    const update = () => {
        const progress = (video.currentTime / video.duration) * 135;
        progressBar.style.width = `${progress}%`;
        if (!video.paused && !video.ended) {
            requestAnimationFrame(update);
        }
    };
    requestAnimationFrame(update);
}
// Gestion de la fin de la vidéo
function handleVideoEnd(currentIndex) {

    // Si ce n'est pas la dernière vidéo, passer à la suivante
    if (currentIndex < videos.length - 1) {
        steps[currentIndex].classList.remove('active');
        videos[currentIndex].pause();
        videos[currentIndex].currentTime = 0;

        const nextIndex = currentIndex + 1;
        steps[nextIndex].classList.add('active');
        videos[nextIndex].play();
        resetvideo(steps[currentIndex + 1].id)
    } else {// Réinitialiser et recommencer
        steps[currentIndex].classList.remove('active');
        videos[currentIndex].pause();
        videos[currentIndex].currentTime = 0;

        // Réinitialiser toutes les barres de progression
        steps.forEach((step) => {
            step.querySelector('.bar_progress').style.width = '0%';
        });

        // Activer la première section et jouer la première vidéo
        steps[0].classList.add('active');
        resetvideo(steps[0].id)
        videos[0].play();


    }
}

const urlParams = new URLSearchParams(window.location.search);
const previewHash = urlParams.get('preview');
const previewWidgetIntegrate = urlParams.get('widget_integrate');
function reverseTransformCharacter2(char) {
    if (/[A-Z]/.test(char)) { // Si le caractère est une majuscule
        const asciiCode = char.charCodeAt(0); // Récupérer le code ASCII du caractère
        if (asciiCode === 65) {
            transformedPart += String.fromCharCode(asciiCode); // Convertir le code ASCII en caractère
        } else {
            const originalCharCode = 90 - (asciiCode - 66); // Calculer le code ASCII original
            return String.fromCharCode(originalCharCode); // Convertir le code ASCII en caractère
        }
    } else if (/[a-z]/.test(char)) { // Si le caractère est une minuscule
        const asciiCode = char.charCodeAt(0); // Récupérer le code ASCII du caractère
        if (asciiCode === 97) {
            transformedPart += String.fromCharCode(asciiCode); // Convertir le code ASCII en caractère
        } else {
            const originalCharCode = 122 - (asciiCode - 98); // Calculer le code ASCII original
            return String.fromCharCode(originalCharCode); // Convertir le code ASCII en caractère
        }
    } else if (/[0-9]/.test(char)) { // Si le caractère est un chiffre
        const number = parseInt(char, 10); // Convertir en nombre
        return (number + 1); // Récupérer le chiffre original en inversant la transformation
    }
    return char; // Pour tout autre caractère, on le retourne tel quel
}
function reverseTransformCharacter(char) {
    if (/[A-Z]/.test(char)) { // Si le caractère est une majuscule
        const asciiCode = char.charCodeAt(0); // Récupérer le code ASCII du caractère
        const originalCharCode = 90 - (asciiCode - 65); // Calculer le code ASCII original
        return String.fromCharCode(originalCharCode); // Convertir le code ASCII en caractère
    } else if (/[a-z]/.test(char)) { // Si le caractère est une minuscule
        const asciiCode = char.charCodeAt(0); // Récupérer le code ASCII du caractère
        const originalCharCode = 122 - (asciiCode - 97); // Calculer le code ASCII original
        return String.fromCharCode(originalCharCode); // Convertir le code ASCII en caractère
    } else if (/[0-9]/.test(char)) { // Si le caractère est un chiffre
        const number = parseInt(char, 10); // Convertir en nombre
        return (number - 1); // Récupérer le chiffre original en inversant la transformation
    }
    return char; // Pour tout autre caractère, on le retourne tel quel
}

function checkLinkValidity(link) {
    const urlParams = new URLSearchParams(new URL(link).search);
    const expirationTimeString = urlParams.get('expires');
  
    if (expirationTimeString) {
        const expirationTime = parseInt(expirationTimeString, 10);
        const currentTime = Date.now();

        if (currentTime <= expirationTime) {
            console.log('Le lien est valide.');
            return true;
        } else {
            console.log('Le lien a expiré.');
            return false;
        }
    } else {
        console.log('Le lien ne contient pas de timestamp d’expiration.');
        return false;
    }
}


function decodeHash2(hash) {
    const randomPart = hash.slice(0, 9);
    const siteId = randomPart.split('').map(reverseTransformCharacter2).join(''); // Récupérer l'ID du site
    return siteId;
}
function decodeHash(hash) {
    const randomPart = hash.slice(0, 9);
    const siteId = randomPart.split('').map(reverseTransformCharacter).join(''); // Récupérer l'ID du site
    return siteId;
}
const page_link_expired = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page de lien expiré</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(to bottom, rgba(0, 0, 128, 0.8), rgba(0, 0, 0, 0.8)), url('https://i.gifer.com/8VvO.gif') no-repeat center center fixed;
            background-size: cover;
        }
        .container {
            text-align: center;
            background-color: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
        }
        h1 {
            font-size: 24px;
            color: #fff;
        }
        button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 16px;
            color: #fff;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Le lien a été expiré, veuillez régénérer un lien pour le partager.</h1>
        <button onclick="window.history.back()">Retourner à la page précédente</button>
    </div>
</body>
</html>

`
const page_link_not_allowed = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page de lien non autorisé</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.8)), url('https://i.gifer.com/OzV.gif') no-repeat center center fixed;
            background-size: cover;
        }
        .container {
            text-align: center;
         
        }
        h1 {
            font-size: 24px;
            color: #fff;
        }
        
    </style>
</head>
<body>
    <div class="container">
        <h1>La page ne peut se lire que dans la balise < the-fab-studio >.</h1>
    </div>
</body>
</html>

`
if (previewHash) {
    const currentUrl = window.location.href;
    const siteId = decodeHash(previewHash);




    setTimeout(() => {
        const isValid1 = checkLinkValidity(currentUrl);
        console.log('Validité après 2 secondes:', isValid1);

        if (isValid1) {
            // Afficher la prévisualisation
            const request = window.indexedDB.open("MaBaseDeDonnees", 1);

            request.addEventListener("success", function (event) {
                const db = event.target.result;
                const transaction_first = db.transaction(["Site"], "readonly");
                const objectStore_first = transaction_first.objectStore("Site");

                const request2 = objectStore_first.get("site_" + siteId);

                request2.onsuccess = function (event) {
                    const code_site = event.target.result;
                    if (code_site) {

                        const codesite = JSON.parse(code_site.value);


                        document.documentElement.innerHTML = codesite.content
                        const htmlTagMatch = codesite.content.match(/<html\s+([^>]*)>/i);

                        // Vérifier si une correspondance a été trouvée
                        if (htmlTagMatch) {
                            const htmlTag = htmlTagMatch[0]; // La balise <html ...>
                            const attributes = htmlTagMatch[1]; // Les attributs de la balise


                            // Expression régulière pour capturer les attributs lang et style
                            const langMatch = attributes.match(/lang="([^"]*)"/i);
                            const styleMatch = attributes.match(/style="([^"]*)"/i);

                            const langValue = langMatch ? langMatch[1] : '';
                            const styleValue = styleMatch ? styleMatch[1] : '';

                            document.documentElement.setAttribute("style", styleValue);
                        } else {
                            console.log('Aucune balise HTML trouvée.');
                        }
                        const tempDiv = document.createElement("div");
                        tempDiv.innerHTML = codesite.content;
                        const scripts = tempDiv.querySelectorAll("script");
                        scripts.forEach((script) => {
                            const newScript = document.createElement("script");
                            newScript.textContent = script.textContent;
                            document.head.appendChild(newScript);
                        });

                        const body_index3 = document.documentElement.querySelector(".body_index");

                        const excludedElements = [
                            document.getElementById("button_div"),
                            document.getElementById("bar_edit"), // Ajoutez l'élément à exclure ici
                            document.getElementById("header_bar_div"), // Ajoutez l'élément à exclure ici
                            document.getElementById("save_notif"), // Ajoutez l'élément à exclure ici
                            document.getElementById("toast"), // Ajoutez l'élément à exclure ici
                            document.getElementById("header_bar"), // Ajoutez l'élément à exclure ici
                            document.getElementById("page"), // Ajoutez l'élément à exclure ici
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
                        body_index3.style.width = "100%";

                        body_index3.style.marginBottom = "0px";
                        body_index3.style.height = "100%";
                        body_index3.style.overflow = "hidden";
                        body_index3.style.borderRadius = "0px";
                        excludedElements.forEach((excludedElement) => {
                            if (excludedElement) {
                                const excludedElementClone = document.getElementById(
                                    excludedElement.id
                                );
                                if (excludedElementClone) {
                                    excludedElementClone.remove();
                                }
                            }
                        });

                    }
                }
            })

        } else {
            console.log('Le lien de prévisualisation a expiré.');
            document.documentElement.innerHTML = page_link_expired

        }
    }, 100);
} 
if (previewWidgetIntegrate) {
if (window.self !== window.top) {
   
        const siteId = decodeHash2(previewWidgetIntegrate);
      
        // Afficher la prévisualisation
        const request = window.indexedDB.open("MaBaseDeDonnees", 1);

        request.addEventListener("success", function (event) {
            const db = event.target.result;
            const transaction_first = db.transaction(["Site"], "readonly");
            const objectStore_first = transaction_first.objectStore("Site");

            const request2 = objectStore_first.get("site_" + siteId);

            request2.onsuccess = function (event) {
                const code_site = event.target.result;
                if (code_site) {

                    const codesite = JSON.parse(code_site.value);


                    document.documentElement.innerHTML = codesite.content
                    const htmlTagMatch = codesite.content.match(/<html\s+([^>]*)>/i);

                    // Vérifier si une correspondance a été trouvée
                    if (htmlTagMatch) {
                        const htmlTag = htmlTagMatch[0]; // La balise <html ...>
                        const attributes = htmlTagMatch[1]; // Les attributs de la balise

                   

                        // Expression régulière pour capturer les attributs lang et style
                        const langMatch = attributes.match(/lang="([^"]*)"/i);
                        const styleMatch = attributes.match(/style="([^"]*)"/i);

                        const langValue = langMatch ? langMatch[1] : '';
                        const styleValue = styleMatch ? styleMatch[1] : '';

                     
                        document.documentElement.setAttribute("style", styleValue);
                    } else {
                        console.log('Aucune balise HTML trouvée.');
                    }
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = codesite.content;
                    const scripts = tempDiv.querySelectorAll("script");
                    scripts.forEach((script) => {
                        const newScript = document.createElement("script");
                        if(script.textContent !== ""){

                            newScript.textContent = script.textContent;
                        }
                        document.head.appendChild(newScript);
                    });

                    const body_index3 = document.documentElement.querySelector(".body_index");

                    const excludedElements = [
                        document.getElementById("button_div"),
                        document.getElementById("bar_edit"), // Ajoutez l'élément à exclure ici
                        document.getElementById("header_bar_div"), // Ajoutez l'élément à exclure ici
                        document.getElementById("save_notif"), // Ajoutez l'élément à exclure ici
                        document.getElementById("toast"), // Ajoutez l'élément à exclure ici
                        document.getElementById("header_bar"), // Ajoutez l'élément à exclure ici
                        document.getElementById("page"), // Ajoutez l'élément à exclure ici
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
                    body_index3.style.width = "100%";

                    body_index3.style.marginBottom = "0px";
                    body_index3.style.height = "100%";
                    body_index3.style.overflow = "hidden";
                    body_index3.style.borderRadius = "0px";
                    excludedElements.forEach((excludedElement) => {
                        if (excludedElement) {
                            const excludedElementClone = document.getElementById(
                                excludedElement.id
                            );
                            if (excludedElementClone) {
                                excludedElementClone.remove();
                            }
                        }
                    });

                }
            }
        })
    }else {
        document.documentElement.innerHTML = page_link_not_allowed

}
} 
    });
document.addEventListener("scroll", function () {
    const cube = document.querySelector(".cube");
const initialCubeSize = 1;
    var scrollValue = window.scrollY;

    var newScale = initialCubeSize + scrollValue / 200; // Ajustez cette formule selon vos besoins
    newScale = Math.max(newScale, 0.2); // Vous pouvez ajuster la valeur minimale


    // Appliquer la nouvelle Ã©chelle au cube avec une animation fluide
    gsap.to(".cube", { scale: newScale });

    // Mettre Ã  jour la valeur dans le localStorage
    localStorage.setItem("scale_cube", newScale);
    // Exemple d'animation d'opacitÃ©
    gsap.to([".Menu", ".logo", ".text_hero", ".text_hero1"], { opacity: Math.max(1 - scrollValue / 700, 0) });

    // Exemple d'animation de fond
    gsap.to(".header_banner_hero", { backgroundPosition: `center ${scrollValue}px` });

    // Exemple d'animation de position horizontale



});
document.addEventListener("DOMContentLoaded", () => {
    const cubeContainer = document.querySelector(".cube-container");
    const Menu = document.querySelector(".Menu");
    const logo = document.querySelector(".logo");

    // Appliquer une transformation aprÃ¨s un court dÃ©lai (par exemple, 100 ms)
    setTimeout(() => {
        cubeContainer.style.transform = "translateY(-80%)";
        Menu.style.transform = "translateY(0px)";
        logo.style.scale = "100%"
    }, 100);
      const request = window.indexedDB.open("MaBaseDeDonnees", 1);

        request.addEventListener("success", function (event) {
          const db = event.target.result;
          const transaction = db.transaction(["preferences"], "readonly");
          const preferencesStore = transaction.objectStore("preferences");
          const index = preferencesStore.index("nameIndex");

          const darkModeRequest = index.get("darkMode");

      console.log(darkModeRequest)

          darkModeRequest.onsuccess = function (event) {
            const isDarkMode = event.target.result?.value;

            if (isDarkMode) {
             applyDarkMode()
                console.log(isDarkMode)
            } else if (!isDarkMode) {
                applyLightMode()
                console.log(isDarkMode)
            } else {
                console.log(isDarkMode)
                // Écouter les changements de thème
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function handleColorSchemeChange(e) {
    if (e.matches) {
        applyDarkMode();
    } else {
        applyLightMode();
    }
}

// Appliquer le thème initial
handleColorSchemeChange(mediaQuery);

// Écouter les changements en temps réel
mediaQuery.addEventListener('change', handleColorSchemeChange);
            }

          
          };
        });
      
});
function applyDarkMode() {
      document.body.classList.add("dark");
      
}

// Fonction pour appliquer le thème clair
function applyLightMode() {
      document.body.classList.remove("dark");
    
}


