
// Fonction pour formater la date et l'heure
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
// Fonction pour ouvrir la base de données
function openDatabase() {
    const request = indexedDB.open("MaBaseDeDonnees", 1);
    const requestedBytes = 1024 * 1024 * 1000; // 10 Mo
    let db;
    navigator.storage.persist().then((granted) => {
        if (granted) {
            console.log("Quota accordé !");
        } else {
            console.error("Quota non accordé. L'utilisateur a refusé ou le quota maximal a été atteint.");
        }
    });

    request.onupgradeneeded = function (event) {
        // Cette méthode est appelée lorsqu'une nouvelle version de la base de données est créée
        const db = event.target.result;

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

        // Initialiser la date et l'heure dans Updating lors de la création de la base de données

        // Concaténer la date et l'heure dans la chaîne de caractères finale
        const formattedDateTime = getFormattedDateTime();

        console.log(formattedDateTime); // Résultat : "24-03-2024 19:34"

        Updating.add({ MAJ: formattedDateTime, update: "maj_hour" });
    };

    request.onsuccess = function (event) {
        db = event.target.result;
        // Mettre à jour la date et l'heure dans Updating à chaque modification dans la base de données

        updateDateTimeInUpdating();

        // Mettre à jour l'heure dans la base de données toutes les heures
        setInterval(updateDateTimeInUpdating, 3600000); // 3600000 ms = 1 heure

        db.onerror = function (event) {
            console.error("Database error: " + event.target.errorCode);
        };
        // Mettre à jour la date et l'heure dans Updating chaque heure

    };

    function updateDateTimeInUpdating() {
        const formattedDateTime = getFormattedDateTime();
        // Mettre à jour l'heure dans Updating
        const transaction = db.transaction(["Updating"], "readwrite");
        const objectStore = transaction.objectStore("Updating");
        objectStore.put({ MAJ: formattedDateTime, update: "maj_hour" });
    }

}


// Exécuter la fonction pour ouvrir la base de données au chargement de la page
openDatabase();


