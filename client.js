const socket = new WebSocket('wss://serveur-cq8x.onrender.com')
console.log(socket)
let isFirstTime = localStorage.getItem("isFirstTime");

// Si isFirstTime est null (n'a pas encore été défini), définissez-le sur true
if (isFirstTime === null) {
    isFirstTime = true;
    localStorage.setItem("isFirstTime", true);
}



// Événement déclenché lorsque la connexion WebSocket est ouverte
socket.addEventListener("open", function (event) {
    console.log("La connexion WebSocket est ouverte.");
    console.log(isFirstTime)
    // Vérifier si c'est la première fois
    if (isFirstTime === true) {
        const request2 = window.indexedDB.open("MaBaseDeDonnees", 1);
        request2.addEventListener("success", function (event) {
            const db = event.target.result;
            const transaction = db.transaction("Updating", 'readwrite');
            const objectStore = transaction.objectStore("Updating");

            const currentTime = new Date();

            // Obtention des composants de la date
            const day = currentTime.getDate();
            const month = currentTime.getMonth() + 1; // Les mois sont indexés à partir de 0
            const year = currentTime.getFullYear();

            // Formater la date au format "dd-mm-yyyy"
            const formattedDate = `${day - 1 < 10 ? '0' : ''}${day - 1}-${month < 10 ? '0' : ''}${month}-${year}`;


            // Obtention des composants de l'heure
            const hours = currentTime.getHours();
            const minutes = currentTime.getMinutes();

            // Formater l'heure au format "hh:mm"
            const formattedTime = `${(hours) < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

            // Concaténer la date et l'heure dans la chaîne de caractères finale
            const formattedDateTime = `${formattedDate} ${formattedTime}`;
            objectStore.put({ MAJ: formattedDateTime, update: "maj_hour" })
            console.log("C'est la première fois que la connexion WebSocket est ouverte. Ne rien faire.");
            console.log(formattedDateTime);

            isFirstTime = false; // Marquer que ce n'est plus la première fois
            localStorage.setItem("isFirstTime", false); // Mettre à jour isFirstTime dans localStorage
            return; // Sortir de la fonction
        })
    }

    // Récupérer l'heure et la date stockées dans l'object store "Updating"
    const request = window.indexedDB.open("MaBaseDeDonnees", 1);
    request.addEventListener("success", function (event) {
        const db = event.target.result;
        const transaction = db.transaction("Updating", 'readonly');
        const objectStore = transaction.objectStore("Updating");
        const getRequest = objectStore.get("maj_hour"); // 1 étant l'identifiant unique dans l'object store "Updating"
        console.log(getRequest)
        getRequest.addEventListener('success', function (event) {
            const serverDateTime = event.target.result.MAJ;

            // Comparer l'heure et la date du client avec celle du serveur
            console.log("envoie donne date", serverDateTime)

            socket.send(JSON.stringify({ action: "clientDateTime", dateTime: serverDateTime, first: "true" }));
        });
    });
});


function toast_valid(text, event) {
    const toastDiv = document.querySelector(".toast");
    if (toastDiv) {
        // Toast already exists
        return;
    } else {
        // Créer la div principale avec la classe "toast"
        const toastDiv = document.createElement("div");
        toastDiv.classList.add("toast");
        toastDiv.id = "toast";

        // Créer le contenu du toast
        const toastContentDiv = document.createElement("div");
        toastContentDiv.classList.add("toast-content");

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");

        const text2Span = document.createElement("span");
        text2Span.classList.add("text", "text-2");
        text2Span.textContent = text;

        messageDiv.appendChild(text2Span);
        toastContentDiv.appendChild(messageDiv);

        if (event === "success") {
            const checkIcon = document.createElement("i");
            checkIcon.classList.add("bx", "bxs-check-circle");
            checkIcon.style.color = "#0dff8ca8";
            checkIcon.style.fontSize = "31px";
            toastContentDiv.appendChild(checkIcon);
        } else if (event === "error") {
            const checkIcon = document.createElement("i");
            checkIcon.classList.add("bx", "bxs-error-circle");
            checkIcon.style.color = "#ff0d0da8";
            checkIcon.style.fontSize = "31px";
            toastContentDiv.appendChild(checkIcon);
        }

        // Ajouter les éléments au toastDiv
        toastDiv.appendChild(toastContentDiv);

        // Ajouter le toastDiv à un élément parent existant (par exemple, le body)
        document.body.appendChild(toastDiv);

        const style = `
            .toast {
                z-index: 999;
                position: absolute;
                top: 150px;
                left: 0;
                box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.7), inset 0px 0px 10px rgb(0, 0, 0, 0.7);
                background: #242020;
                border: 2px solid rgb(66 66 66);
                border-radius: 10px;
                padding: 9px;
                overflow: hidden;
                transform: translateY(-250px) translateX(1050px);
                transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);
            }
            .toast.active {
                transform: translateY(0%) translateX(1050px);
            }
            .toast .toast-content {
                display: flex;
                align-items: center;
            }
            .toast-content .check {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 35px;
                width: 35px;
                background-color: #4070f4;
                color: #fff;
                font-size: 20px;
                border-radius: 50%;
            }
            .toast-content .message {
                display: flex;
                flex-direction: column;
                margin: 0 12px;
            }
            .message .text {
                font-size: 20px;
                font-weight: 400;
                color: #666666;
            }
            .message .text.text-1 {
                font-weight: 600;
                color: #333;
            }
        `;

        // Créer une balise style
        const styleElement = document.createElement("style");

        // Ajouter le style au contenu
        styleElement.appendChild(document.createTextNode(style));

        // Ajouter le style au head du document
        document.head.appendChild(styleElement);

        setTimeout(() => {
            toastDiv.classList.add("active");
        }, 500); //1s = 1000 milliseconds
        setTimeout(() => {
            toastDiv.classList.remove("active");
            setTimeout(() => {
                document.body.removeChild(toastDiv);
            }, 5000);
        }, 5000); //1s = 1000 milliseconds

    }
}

// Événement déclenché lorsque le client reçoit un message du serveur WebSocket
// Fonction pour traiter les données JSON
function handleJSONData(jsonData) {
    try {
        console.log(jsonData)
        const message = JSON.parse(jsonData);

        // Vérifier l'action du message
        if (message.action === 'update') {
            // Mettre à jour la base de données côté client avec les données reçues
            updateDatabaseWithData(message.data);
        }
    } catch (error) {
        console.error("Erreur lors de l'analyse des données JSON:", error);
    }
}
function handleBlobMessage(Blobdata) {
    // Convertir les données Blob en chaîne
    const blobReader = new FileReader();
    blobReader.onload = function () {
        const jsonData = blobReader.result;

        // Traiter les données JSON
        handleJSONData(jsonData);
    };
    blobReader.readAsText(Blobdata);
}
// Fonction pour mettre à jour la base de données avec les données reçues

function updateDatabaseWithData(data) {
    const request = window.indexedDB.open("MaBaseDeDonnees", 1);
    request.addEventListener("success", function (event) {
        const db = event.target.result;

        data.forEach(function (item) {
            const storeName = item.storeName;

            const transaction = db.transaction(storeName, 'readwrite');
            const objectStore = transaction.objectStore(storeName);

            const request = objectStore.put(item.data);
            request.addEventListener('success', function (event) {
                console.log("Données mises à jour avec succès dans l'object store:", storeName);
                // Afficher une notification de succès après la mise à jour des données
                toast_valid("Mise à jour des données réussie", "success");
            });
            request.addEventListener('error', function (event) {
                console.error("Erreur lors de la mise à jour des données dans l'object store:", storeName);
                // Afficher une notification d'erreur en cas d'échec
                toast_valid("Erreur lors de la mise à jour des données", "error");
            });
        });
    });
}


// Fonction pour traiter le message reçu du serveur WebSocket
function handleMessageFromServer(event) {
    console.log("Message reçu du serveur WebSocket:", event.data);
    if (!(event.data instanceof Blob)) {
        const message = JSON.parse(event.data);
        if (message.action === 'latestDateTime') {


            handleLatestDateTimeMessage(message);

        } else {


            handleJSONData(event.data);
        }
    } else if (event.data instanceof Blob) {

        handleBlobMessage(event.data);
    }
}

// Fonction pour traiter le message "latestDateTime" et comparer les dates
function handleLatestDateTimeMessage(message) {
    const latestDateTime = message.dateTime;
    const request = window.indexedDB.open("MaBaseDeDonnees", 1);
    request.addEventListener("success", function (event) {
        const db = event.target.result;
        const transaction = db.transaction("Updating", 'readonly');
        const objectStore = transaction.objectStore("Updating");
        const getRequest = objectStore.get("maj_hour"); // 1 étant l'identifiant unique dans l'object store "Updating"
        getRequest.addEventListener('success', function (event) {
            const serverDateTime = event.target.result.MAJ;
            console.log(serverDateTime)
            console.log(latestDateTime)
            if (serverDateTime >= latestDateTime) {
                saveDataToServer();
            } else {
                console.log("Les données du serveur sont plus récentes. Aucune action requise.");
            }
        });
    });
}

// Fonction pour sauvegarder les données sur le serveur

function saveDataToServer() {
    const request = window.indexedDB.open("MaBaseDeDonnees", 1);
    request.addEventListener("success", function (event) {
        const db = event.target.result;
        const objectStoreNames = db.objectStoreNames;
        const allData = [];
        const transaction = db.transaction(Array.from(objectStoreNames), 'readonly');
        transaction.addEventListener('complete', function () {
            if (allData.length > 0) {
                socket.send(JSON.stringify({ action: "update", data: allData }));
                // Afficher une notification de succès après l'envoi des données
                toast_valid("Synchronisation terminée avec succès", "success");
            } else {
                console.log("Aucune donnée à envoyer au serveur.");
            }
        });
        for (const storeName of objectStoreNames) {
            if (storeName !== "Connexion") {
                const objectStore = transaction.objectStore(storeName);
                const cursorRequest = objectStore.openCursor();
                cursorRequest.addEventListener('success', function (event) {
                    const cursor = event.target.result;
                    if (cursor) {
                        allData.push({ storeName: storeName, data: cursor.value });
                        cursor.continue();
                    }
                });
            }
        }
    });
}


// Traitement des messages reçus du serveur WebSocket
socket.addEventListener("message", handleMessageFromServer);

// Initialisation de l'indicateur isFirstMessageReceived



