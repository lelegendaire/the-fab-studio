const socket = new WebSocket('wss://serveur-cq8x.onrender.com');


socket.addEventListener("open", () => {
    if (!localStorage.getItem("firstTime_client")) {
        console.log("C'est la première fois que l'utilisateur visite le site.");
        localStorage.setItem("firstTime_client", "false");
        socket.send(JSON.stringify({ action: "firstConnection", first: "true" }));
    } else {

        console.log("L'utilisateur a déjà visité le site auparavant 2.");

    }
    console.log("WebSocket est ouvert.");

});

socket.addEventListener("message", (event) => {
    console.log("Message reçu du serveur WebSocket:", event.data);
    handleServerMessage(JSON.parse(event.data));
});

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {

    }
});


function requestInitialSync_FT() {
    console.log("Demande de synchronisation initiale envoyée pour la première fois nouvelle connection.");
    getDatabaseDateTime_TF((dateTime) => {
        console.log(dateTime)
        //socket.send(JSON.stringify({ action: "clientDateTime", dateTime: dateTime, first: "true" }));
    });
}


function handleServerMessage(message) {
    if (message.action === 'latestDateTime') {
        const latestDateTime = message.dateTime;
        getDatabaseDateTime((localDateTime) => {
            if (localDateTime === latestDateTime) {
                sendDataToServer()
            }
            console.log("Date local:" + localDateTime + "|" + "Date récente" + latestDateTime)
        });
    } else if (message.action === 'syncData') {
        syncDataToDatabase(message.storeName, message.data);
    } else if (message.action === "sendDate") {

        getDatabaseDateTime_TF((dateTime) => {
            console.log("envoie de ma date:" + dateTime)
            socket.send(JSON.stringify({ action: "clientDateTime", dateTime: dateTime, first: "true" }));
        });
    }
}

function getDatabaseDateTime_TF(callback) {
    const request = indexedDB.open(dbName, dbVersion);
    request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(["Updating"], 'readonly');
        const store = transaction.objectStore("Updating");
        const getRequest = store.get("maj_hour");
        getRequest.onsuccess = () => {
            callback(getRequest.result.MAJ);
        };
    };
}
function getDatabaseDateTime(callback) {
    const request = indexedDB.open(dbName, dbVersion);
    request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(["Updating"], 'readonly');
        const store = transaction.objectStore("Updating");
        const getRequest = store.get("maj_hour");
        getRequest.onsuccess = () => {
            callback(getRequest.result.MAJ);
        };
    };
}

function syncDataToDatabase(storeName, data) {
    const request = indexedDB.open(dbName, dbVersion);
    request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);

        store.clear().onsuccess = () => {
            data.forEach(item => store.put(item));
            console.log(`Données synchronisées pour le store: ${storeName}`);
        };
    };
}


function sendDataToServer() {
    const request = indexedDB.open(dbName, dbVersion);
    request.onsuccess = (event) => {
        const db = event.target.result;
        const stores = Array.from(db.objectStoreNames);
        stores.forEach(storeName => {
            const transaction = db.transaction(storeName, 'readonly');
            const store = transaction.objectStore(storeName);
            const getAllRequest = store.getAll();
            getAllRequest.onsuccess = () => {
                socket.send(JSON.stringify({ action: 'syncData', storeName: storeName, data: getAllRequest.result }));
            };
        });
    };
}
