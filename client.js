const socket = new WebSocket('wss://serveur-cq8x.onrender.com');

function generateUniqueID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function getCookie(name) {
    let cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        let [key, value] = cookie.split('=').map(c => c.trim());
        if (key === name) return value;
    }
    return null;
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

let deviceID = getCookie('deviceID');
if (!deviceID) {
    deviceID = generateUniqueID();
    setCookie('deviceID', deviceID, 365);
}

console.log('Identifiant unique pour cet appareil:', deviceID);

socket.addEventListener("open", () => {
    if (!localStorage.getItem("firstTime_client")) {
        console.log("C'est la première fois que l'utilisateur visite le site.");
        localStorage.setItem("firstTime_client", "false");
        socket.send(JSON.stringify({ action: "firstConnection", first: "true" }));
        socket.send(JSON.stringify({ action: "getData" }));
    } else {
        console.log("L'utilisateur a déjà visité le site auparavant.");
        socket.send(JSON.stringify({ action: "getData" }));
    }
    console.log("WebSocket est ouvert.");
});

socket.addEventListener("message", (event) => {
    console.log("Message reçu du serveur WebSocket:", event.data);
    handleServerMessage(JSON.parse(event.data));
});

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Logic to handle visibility change if needed
    }
});

function handleServerMessage(message) {
    if (message.action === 'latestDateTime') {
        const latestDateTime = message.dateTime;
        getDatabaseDateTime((localDateTime) => {
            if (localDateTime === latestDateTime) {
                sendDataToServer();
            }
            console.log("Date local:" + localDateTime + "|" + "Date récente" + latestDateTime);
        });
    } else if (message.action === 'syncData') {
        syncDataToDatabase(message.storeName, message.data);
    } else if (message.action === "sendDate") {
        getDatabaseDateTime_TF((dateTime) => {
            console.log("envoie de ma date:" + dateTime);
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
                socket.send(JSON.stringify({ action: 'saveData', storeName: storeName, data: getAllRequest.result }));
            };
        });
    };
}

// Créer un nouveau Broadcast Channel
const channel = new BroadcastChannel('device-check');

// Envoyer l'identifiant de l'appareil aux autres fenêtres
channel.postMessage({ action: 'checkDevice', deviceID: deviceID });

// Écouter les messages des autres fenêtres
channel.onmessage = function (event) {
    if (event.data.action === 'checkDevice') {
        if (event.data.deviceID === deviceID) {
            console.log("Les fenêtres appartiennent au même appareil");
        } else {
            const request = window.indexedDB.open("MaBaseDeDonnees", 1);
            request.addEventListener("success", function (event) {
                const db = event.target.result;
                console.log("Les fenêtres appartiennent à des appareils différents");
                const newTransaction = db.transaction(["Connexion"], "readwrite");
                const newObjectStore = newTransaction.objectStore("Connexion");

                const newRequest = newObjectStore.put({
                    connexion: 1,
                    connected: "no",
                    name_to_profil: "",
                    email: "",
                    id_to_create: "",
                });
            });
        }
    }
};
