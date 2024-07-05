
const dbVersion = 1;
let dbName = "MaBaseDeDonnees";
function openDatabase() {
    const request = indexedDB.open(dbName, dbVersion);
    request.onupgradeneeded = (event) => {
        const db = event.target.result;
        createObjectStores(db);
    };

    request.onsuccess = (event) => {
        const db = event.target.result;
        monitorChanges(db);
        if (!localStorage.getItem("firstTime")) {
            console.log("C'est la première fois que l'utilisateur visite le site.");
            localStorage.setItem("firstTime", "false");
            updateDateTimeInUpdating();

        } else {

            console.log("L'utilisateur a déjà visité le site auparavant.");

        }

        setInterval(updateDateTimeInUpdating, 3600000); // Mise à jour toutes les heures
    };
}

function createObjectStores(db) {
    // Créer un objet de stockage (store) pour les FAQ
    const ObjectStore = db.createObjectStore("Site", { keyPath: "id", autoIncrement: true });

    // Ajouter un index pour rechercher par nom si nécessaire
    ObjectStore.createIndex("SiteId", "id", { unique: false });
    const ObjectStore_code = db.createObjectStore("Code", { keyPath: "id", autoIncrement: true });

    // Ajouter un index pour rechercher par nom si nécessaire
    ObjectStore_code.createIndex("CodeId", "id", { unique: false });
    const ObjectStore2 = db.createObjectStore("Compte", { keyPath: "id", autoIncrement: true });
    const ObjectStore3 = db.createObjectStore("Connexion", { keyPath: "connexion", autoIncrement: true });
    const Updating = db.createObjectStore("Updating", { keyPath: "update", autoIncrement: true });
    const preferencesStore = db.createObjectStore("preferences", {
        keyPath: "name",
        autoIncrement: true,
    });
    const Image_du_site = db.createObjectStore("Image_du_site", {
        keyPath: "link",
        autoIncrement: true,
    });
    const GestionSIte = db.createObjectStore("GestionSite", {
        keyPath: "site_gestion",
        autoIncrement: true,
    });
    // Ajouter un index pour rechercher par nom si nécessaire
    ObjectStore2.createIndex("User", "username", { unique: false });
    ObjectStore3.createIndex("Connected", "connected", { unique: false });
    GestionSIte.createIndex("SiteGestion", "site", { unique: false });
    ObjectStore3.createIndex("Name", "name_to_profil", { unique: false });
    ObjectStore3.createIndex("userId", "id_to_create", { unique: false });
    Image_du_site.createIndex("Image", "url", { unique: false });
    Updating.createIndex("Updating", "MAJ", { unique: false });

    // Ajoutez un index pour rechercher par nom de préférence
    preferencesStore.createIndex("nameIndex", "name", { unique: true });
    const formattedDateTime = getFormattedDateTime();
    Updating.add({ MAJ: formattedDateTime, update: "maj_hour" });

}

function monitorChanges(db) {
    const stores = Array.from(db.objectStoreNames); // Convertir en tableau
    stores.forEach(storeName => {
        const transaction = db.transaction(storeName, 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.openCursor();

        request.onsuccess = (event) => {
            const cursor = event.target.result;
            if (cursor) {
                cursor.continue();
            }
        };

        transaction.oncomplete = () => {

        };
    });
}

function updateDateTimeInUpdating() {
    const formattedDateTime = getFormattedDateTime();
    const request = indexedDB.open(dbName, dbVersion);
    request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(["Updating"], "readwrite");
        const store = transaction.objectStore("Updating");
        store.put({ MAJ: formattedDateTime, update: "maj_hour" });
    };
}

function getFormattedDateTime() {
    const currentTime = new Date();
    const day = currentTime.getDate();
    const month = currentTime.getMonth() + 1;
    const year = currentTime.getFullYear();
    const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    return `${formattedDate} ${formattedTime}`;
}

openDatabase();
