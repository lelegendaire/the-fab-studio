document.addEventListener("DOMContentLoaded", () => {
  const ui_play = document.querySelector(".ui_play");
  ui_play.style.zIndex = "0";
  const list_fleche_icon = document.querySelector(".bx-chevron-down");
  const list_audio = document.querySelector(".list_audio");
  const imgBackground = document.querySelector(".cards .img_background");
  const img = document.querySelector(".cards .img_background img");
  img.addEventListener("click", function () {
    if (imgBackground.style.width === "17em") {
      imgBackground.style.width = "20em";
      imgBackground.style.height = "25em";
      imgBackground.style.boxShadow = "6px 6px 15px rgba(0, 0, 0, 0.5)";
    } else if (imgBackground.style.width === "7em") {
      imgBackground.style.width = "18em";
      imgBackground.style.height = "18em";
      imgBackground.style.right = "-16px";
      imgBackground.style.boxShadow = "4px 4px 10px rgba(0, 0, 0, 0.5)";
    } else {
      if (imgBackground.style.width === "18em") {
        imgBackground.style.width = "7em";
        imgBackground.style.height = "9em";
        imgBackground.style.right = "-110px";
        imgBackground.style.boxShadow = "4px 4px 10px rgba(0, 0, 0, 0.5)";
      } else {
        imgBackground.style.width = "17em";
        imgBackground.style.height = "9em";
        imgBackground.style.boxShadow = "4px 4px 10px rgba(0, 0, 0, 0.5)";
      }
    }
  });
  list_fleche_icon.addEventListener("click", function () {
    const list_fleche_icon = document.querySelector(".bx-chevron-down");

    if (list_fleche_icon.style.transform === "rotate(180deg)") {
      list_audio.style.zIndex = "-1";
      list_fleche_icon.style.transform = "rotate(0deg)";
      list_audio.style.transform = "translateY(-200px)";
    } else {
      list_fleche_icon.style.transform = "rotate(180deg)";
      list_audio.style.zIndex = "1";
      list_audio.style.transform = "translateY(0)";
    }
  });


  const audioElement = document.getElementById("main-audio");
  const playButton = document.getElementById("play");
  const currentTimeSpan = document.querySelector(".current-time");
  const maxDurationSpan = document.querySelector(".max-duration");
  const progressBar = document.querySelector(".progress-bar");
  const replayButton = document.getElementById("10avant");
  const forwardButton = document.getElementById("10après");
  const translateButton = document.getElementById("translate");

  let currentAudioIndex_chap1 = 0;
  let currentAudioIndex_chap2 = 0;
  function loadAudio(url) {
    audioElement.src = url;
    console.log(url);
    audioElement.load();
  }

  playButton.addEventListener("click", () => {
    if (audioElement.paused) {
      audioElement.play();
      playButton.classList.remove("bx-play-circle");
      playButton.classList.add("bx-pause-circle");
    } else {
      audioElement.pause();
      playButton.classList.add("bx-play-circle");
      playButton.classList.remove("bx-pause-circle");
    }
  });
  replayButton.addEventListener("click", () => {
    audioElement.currentTime -= 10; // Réduit le temps de lecture de 10 secondes
  });

  // Événement de clic sur le bouton forward
  forwardButton.addEventListener("click", () => {
    audioElement.currentTime += 10; // Augmente le temps de lecture de 10 secondes
  });

  audioElement.addEventListener("timeupdate", (e) => {
    const minutes = Math.floor(audioElement.currentTime / 60);
    const seconds = Math.floor(audioElement.currentTime % 60);
    currentTimeSpan.textContent = `${minutes}:${seconds < 10 ? "0" : ""
      }${seconds}`;

    const currentTime = e.target.currentTime; //getting playing song currentTime
    const duration = e.target.duration; //getting playing song total duration

    let progressWidth = (currentTime / duration) * 100;

    progressBar.style.width = `${progressWidth}%`;
  });
  // Code pour Chapitre 1

  const play_chap1 = document.querySelector(".chap1");

  play_chap1.addEventListener("click", function () {
    const audio = document.querySelector(".audio");
    const img_background = document.querySelector(".img_background");
    const description = document.querySelector(".description");
    const ui_play = document.querySelector(".ui_play");
    const des_play = document.querySelector(".des_play");
    img.src = "img/chap1.jpg";
    img_background.style.right = "-110px";
    img_background.style.width = "7em";
    img_background.style.top = "-80px";
    description.style.transform = "translateX(-289px)";
    description.style.width = "0px";
    ui_play.style.transform = "translateX(-10px)";
    ui_play.style.width = "100%";
    ui_play.style.zIndex = "2";
    audio.style.backgroundColor = "transparent";
    des_play.style.overflowY = "hidden";
    console.log("yes");

    const audioURLs_chap1 = [
      "../sound/chap1_fr.mp3",
      "../sound/chap1_en.mp3",

      // Ajoutez ici d'autres URLs d'audios
    ];

    loadAudio(audioURLs_chap1[currentAudioIndex_chap1]);

    translateButton.addEventListener("click", () => {
      const url = audioElement.src;
      console.log(url);
      if (
        url ===
        "file:///C:/Users/pcparents/Desktop/Fabien/Codage/Livre%20audio/chap1_fr.mp3"
      ) {
        // Changer l'audio actuel
        console.log("yes_chap1");
        currentAudioIndex_chap1 =
          (currentAudioIndex_chap1 + 1) % audioURLs_chap1.length;
        loadAudio(audioURLs_chap1[currentAudioIndex_chap1]);

        console.log(audioURLs_chap1[currentAudioIndex_chap1]);

        // Mettre à jour l'affichage de la durée maximale
        audioElement.addEventListener("loadedmetadata", () => {
          const minutes = Math.floor(audioElement.duration / 60);
          const seconds = Math.floor(audioElement.duration % 60);
          maxDurationSpan.textContent = `${minutes}:${seconds < 10 ? "0" : ""
            }${seconds}`;
        });
      } else if (
        url ===
        "file:///C:/Users/pcparents/Desktop/Fabien/Codage/Livre%20audio/chap2_fr.mp3"
      ) {
        console.log("yes_chap2");
        // Changer l'audio actuel
        currentAudioIndex_chap2 =
          (currentAudioIndex_chap2 + 1) % audioURLs_chap2.length;
        loadAudio(audioURLs_chap2[currentAudioIndex_chap2]);
        console.log(audioURLs_chap2[currentAudioIndex_chap2]);

        // Mettre à jour l'affichage de la durée maximale
        audioElement.addEventListener("loadedmetadata", () => {
          const minutes = Math.floor(audioElement.duration / 60);
          const seconds = Math.floor(audioElement.duration % 60);
          maxDurationSpan.textContent = `${minutes}:${seconds < 10 ? "0" : ""
            }${seconds}`;
        });
      }
    });
    audioElement.addEventListener("loadedmetadata", () => {
      const minutes = Math.floor(audioElement.duration / 60);
      const seconds = Math.floor(audioElement.duration % 60);
      maxDurationSpan.textContent = `${minutes}:${seconds < 10 ? "0" : ""
        }${seconds}`;
    });
    audioElement.addEventListener("ended", () => {
      let currentAudioIndex_chap2 = 0;
      currentAudioIndex_chap2 =
        currentAudioIndex_chap2 % audioURLs_chap2.length;
      loadAudio(audioURLs_chap2[currentAudioIndex_chap2]);
      progressBar.style.width = `0px`;
      audioElement.play();
      // Mettre à jour la durée maximale
      audioElement.addEventListener("loadedmetadata", () => {
        const minutes = Math.floor(audioElement.duration / 60);
        const seconds = Math.floor(audioElement.duration % 60);
        maxDurationSpan.textContent = `${minutes}:${seconds < 10 ? "0" : ""
          }${seconds}`;
      });
      const audioCards = document.querySelectorAll(".audio");
      audioCards.forEach((card, index) => {
        card.style.backgroundColor =
          index === currentAudioIndex_chap1 ? "#41414" : "transparent";
      });
    });
  });
  // Code pour chapitre 2

  const play_chap2 = document.querySelector(".chap2");
  const audioURLs_chap2 = [
    "chap2_fr.mp3",
    "chap2_en.mp3",

    // Ajoutez ici d'autres URLs d'audios
  ];
  play_chap2.addEventListener("click", function () {
    const img_background = document.querySelector(".img_background");
    const description = document.querySelector(".description");
    const ui_play = document.querySelector(".ui_play");
    img_background.style.right = "-110px";
    img_background.style.width = "7em";
    img_background.style.top = "-80px";
    description.style.transform = "translateX(-289px)";
    description.style.width = "0px";
    ui_play.style.transform = "translateX(-10px)";
    ui_play.style.width = "100%";
    ui_play.style.zIndex = "2";
    console.log("yes");

    loadAudio(audioURLs_chap2[currentAudioIndex_chap2]);

    audioElement.addEventListener("ended", () => {
      let currentAudioIndex_chap3 = 0;
      currentAudioIndex_chap3 =
        (currentAudioIndex_chap3 + 1) % audioURLs_chap3.length;
      loadAudio(audioURLs_chap3[currentAudioIndex_chap3]);

      // Mettre à jour la durée maximale
      audioElement.addEventListener("loadedmetadata", () => {
        const minutes = Math.floor(audioElement.duration / 60);
        const seconds = Math.floor(audioElement.duration % 60);
        maxDurationSpan.textContent = `${minutes}:${seconds < 10 ? "0" : ""
          }${seconds}`;
      });
      const audioCards = document.querySelectorAll(".audio");
      audioCards.forEach((card, index) => {
        card.style.backgroundColor =
          index === currentAudioIndex_chap1 ? "red" : "transparent";
      });
    });
  });
  const audioURLs_chap3 = [
    "chap2_fr.mp3",
    "chap2_en.mp3",

    // Ajoutez ici d'autres URLs d'audios
  ];
});
