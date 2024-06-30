document.addEventListener("DOMContentLoaded", () => {



    const script = document.createElement('script');
    script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.js';
    script.onload = function () {

        const elementToCapture = document.body;

        // Vérifiez si toutes les images de fond sont chargées
        const areBackgroundImagesLoaded = areAllBackgroundImagesLoaded(elementToCapture);

        if (areBackgroundImagesLoaded) {

            // Toutes les images de fond sont chargées, utilisez HTML2Canvas
            setTimeout(() => {
                captureWithHTML2Canvas(elementToCapture);
            }, 5000);  // Attendez 5 secondes avant de déclencher HTML2Canvas
        } else {

            // Attendez que toutes les images de fond soient chargées avant d'utiliser HTML2Canvas
            elementToCapture.addEventListener('loadBackgroundImages', () => {
                captureWithHTML2Canvas(elementToCapture);
            });
        }

        function areAllBackgroundImagesLoaded(element) {


            const backgroundImages = [];

            // Fonction récursive pour récupérer toutes les images de fond d'un élément
            function collectBackgroundImages(element) {
                const elementBackground = getComputedStyle(element).backgroundImage;

                if (elementBackground && elementBackground !== 'none') {
                    backgroundImages.push(elementBackground);
                }

                // Vérifiez le contenu récursivement
                for (const child of element.children) {
                    collectBackgroundImages(child);
                }
            }

            collectBackgroundImages(element);

            for (const backgroundImage of backgroundImages) {
                const matchResult = backgroundImage.match(/^url\(["']?(.*?)["']?\)/);

                // Ajoutez une condition pour vérifier si matchResult est défini et non null
                if (matchResult && matchResult[1]) {
                    const imageUrl = matchResult[1];

                    // Ajoutez une condition pour inclure seulement les images de fond qui commencent par "url("
                    if (imageUrl.startsWith("url(")) {
                        const image = new Image();
                        image.src = imageUrl;

                        if (!image.complete) {
                            console.log("Image not complete");
                            return false;
                        }
                    }
                }
            }

            return true;
        }

        function captureWithHTML2Canvas(element) {
            html2canvas(element, { useCORS: true }).then(canvas => {
                // Convertissez le canevas en image (base64)
                const imageDataUrl = canvas.toDataURL();
                if (imageDataUrl) {
                    const request = window.indexedDB.open("MaBaseDeDonnees", 1);

                    request.addEventListener("success", function (event) {
                        const db = event.target.result;
                        const transaction = db.transaction(["Image_du_site"], "readwrite");

                        const objectStore = transaction.objectStore("Image_du_site");

                        // Utilisez la clé "SiteId" pour mettre à jour l'entrée
                        const updateRequest = objectStore.put({ link: "img", url: imageDataUrl });

                        updateRequest.onsuccess = function (event) {
                            console.log("lien de l'img du site mis à jour avec succès dans la base de données.");
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

                        updateRequest.onerror = function (event) {
                            console.error("Erreur lors de la mise à jour du nom du site dans la base de données :", event.target.error);
                        };
                    });

                    console.log("Image capturée avec succès.");
                } else {
                    console.error("La capture de l'image a échoué.");
                }
            }).catch(error => {
                console.error("Erreur lors de la capture avec HTML2Canvas:", error);
            });

        }
    }
    document.head.appendChild(script);


});