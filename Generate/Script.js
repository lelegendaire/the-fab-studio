import { api_key } from './config_key.js';
document.addEventListener("DOMContentLoaded", () => {
  let historyArray = [];
  let historyHeadArray = [];
  let currentIndex = -1;
  let currentIndexHead = -1;
  let clipboardDataFromAPI;
  const savedSiteName = localStorage.getItem("siteName");
  const savedLogo = localStorage.getItem("selectedLogo");
  const menuCounterScore = localStorage.getItem("menuCounterScore");
  const selectedImage = localStorage.getItem("selectedImage");
  const colorhex_site = localStorage.getItem("colorhex_site");
  const selectedSiteType_lang = localStorage.getItem("selectedSiteType");
  const selectedSiteType = siteTypeAliases[selectedSiteType_lang]
  const font_family = localStorage.getItem("font_family");
  const numberOfTimes = menuCounterScore; // Nombre de fois que vous voulez répéter le code 
  //nom du site
  const name_of_site = document.querySelector(".name_of_site");
  name_of_site.textContent = savedSiteName
  const body_index = document.querySelector(".body_index");



  function create_Site() {
    const number_pos = type_site.indexOf(selectedSiteType)

    function trucappendchild(block) {
      const selectedMenu = localStorage.getItem("selectedMenu");
      if (selectedMenu === "Vertical") {
        const section_home = document.querySelector(".home_side");
        if (section_home) {
          section_home.appendChild(block);
        } else {
          const section_home = document.createElement("div");
          section_home.classList.add("home_side")
          body_index.appendChild(section_home)
          section_home.appendChild(block);
        }





      } else {

        body_index.appendChild(block);
      }
    }
    const categorySwitchValue = localStorage.getItem("categorySwitchValue");
    const subscribeSwitchValue = localStorage.getItem("subscribeSwitchValue");
    const linkSwitchValue = localStorage.getItem("linkSwitchValue");
    const selectedBackground_lang = localStorage.getItem("selectedBackground");
    const selectedBackground = color_alias[selectedBackground_lang]
    if (selectedBackground) {
      const backgroundMappings = {
        Glassmorphisme: {

          headerBackground: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          border: "1px solid rgba(255,255,255,0.7)",
        },
        Gradiant: {
          headerBackground: "linear-gradient(45deg, #FFC3A0, #FFAFBD)",
        },
        Noir: { headerBackground: "#000" },
        Blanc: { headerBackground: "#fff" },
        Couleur: { headerBackground: "#bbab1a" },
        Transparent: { headerBackground: "#00000000" },
        // ... ajoutez les autres styles de fond ici
      };

      if (backgroundMappings[selectedBackground]) {
        const {
          bodyBackground,
          headerBackground,
          backdropFilter,
          boxShadow,
          borderBottomLeftRadius,
          borderBottomRightRadius,
          border,
        } = backgroundMappings[selectedBackground];

        // Appliquer le style au body
        body_index.style.background = bodyBackground;

        // Créer et styliser le header

        const selectedMenu = localStorage.getItem("selectedMenu");
        if (selectedMenu === "Horizontal") {
          const header_color_background = document.createElement("header");
          header_color_background.id = "background_color";
          header_color_background.style.background = headerBackground;
          header_color_background.style.backdropFilter = backdropFilter;
          header_color_background.style.boxShadow = boxShadow;
          header_color_background.style.borderBottomLeftRadius =
            borderBottomLeftRadius;
          header_color_background.style.borderBottomRightRadius =
            borderBottomRightRadius;
          header_color_background.style.borderBottom = border;
          if (selectedBackground === "Transparent" || selectedBackground === "Glassmorphisme") {
            const fond = document.createElement("div");
            fond.classList.add("fond_unie")
            body_index.appendChild(fond)
            fond.appendChild(header_color_background)
          } else {
            body_index.appendChild(header_color_background)

          }



          const background = document.getElementById("background_color");

          const logo_img = document.createElement("img");
          logo_img.classList.add("logo_img"); // Utilisation correcte de classList.add

          logo_img.src = savedLogo; // Assurez-vous d'affecter la source de l'image correctement

          background.appendChild(logo_img);
          const nav = document.createElement("nav");
          background.appendChild(nav);
          const nav_links = document.createElement("div");
          nav_links.classList.add("nav_links");
          nav.appendChild(nav_links);
          const splited_lien_site = link_header_thème_site[number_pos].split("¤")



          for (let i = 0; i < numberOfTimes; i++) {
            const li = document.createElement("li");
            // Personnalisez l'élément <li> ici si nécessaire
            // ...
            li.id = "li_" + (i + 1);
            // Ajoutez l'élément <li> à un parent approprié
            nav_links.appendChild(li);
            const a = document.createElement("a");
            a.href = "#";
            a.textContent = splited_lien_site[i];
            li.appendChild(a);

            // parentElement.appendChild(li);
          }

          const a_btn = document.createElement("a");
          background.appendChild(a_btn);

          //code login1
          if (selectedImage === "img/login.png") {
            const btn = document.createElement("button");
            btn.textContent = "Se connecter";
            a_btn.appendChild(btn);

            // Ajouter des styles au bouton
            btn.style.border = "none";
            btn.style.color = "#fff";
            btn.style.backgroundImage =
              "linear-gradient(30deg, #0400ff, #4ce3f7)";
            btn.style.borderRadius = "20px";
            btn.style.backgroundSize = "100% auto";
            btn.style.fontFamily = "inherit";

            btn.style.padding = "0.6em 1.5em";

            btn.addEventListener("mouseover", function () {
              btn.style.backgroundPosition = "right center";
              btn.style.backgroundSize = "200% auto";
              btn.style.webkitAnimation = "pulse 2s infinite";
              btn.style.animation = "pulse512 1.5s infinite";
            });

            // Ajouter les animations au bouton
            const styleSheet = document.createElement("style");

            styleSheet.innerHTML = `@keyframes pulse512 {
          0% {
            box-shadow: 0 0 0 0 #05bada66;
          }
          70% {
            box-shadow: 0 0 0 10px rgb(218 103 68 / 0%);
          }
          100% {
            box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
          }
        }`;
            document.head.appendChild(styleSheet);
          } else if (selectedImage === "img/login3.png") {
            const btn = document.createElement("button");
            btn.textContent = "Se connecter";
            a_btn.appendChild(btn);

            // Ajouter des styles au bouton
            btn.style.textDecoration = "none";
            btn.style.position = "relative";
            btn.style.border = "none";

            btn.style.fontFamily = "inherit";
            btn.style.color = "var(--text_color_white)";
            btn.style.width = "9em";
            btn.style.height = "3em";
            btn.style.lineHeight = "2em";
            btn.style.textAlign = "center";
            btn.style.background =
              "linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4)";
            btn.style.backgroundSize = "300%";
            btn.style.borderRadius = "30px";
            btn.style.zIndex = "1";

            btn.addEventListener("mouseover", function () {
              btn.style.animation = "ani 8s linear infinite";
              btn.style.border = "none";
            });

            const styleSheet = document.createElement("style");

            styleSheet.innerHTML = `
@keyframes ani {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
}

#background_color button:before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
  background-size: 400%;
  border-radius: 35px;
  transition: 1s;
}

#background_color button:hover::before {
  filter: blur(20px);
}

#background_color button:active {
  background: linear-gradient(32deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
}
`;

            document.head.appendChild(styleSheet);
          } else if (selectedImage === "img/login2.png") {
            const btn = document.createElement("button");
            btn.classList.add("button");
            const span = document.createElement("span");
            span.classList.add("button-content");
            span.textContent = "Login";
            btn.appendChild(span);
            a_btn.appendChild(btn);

            // Ajouter des styles au bouton
            btn.style.position = "relative";
            btn.style.overflow = "hidden";
            btn.style.height = "2rem";
            btn.style.padding = "0 2rem";
            btn.style.borderRadius = "1.5rem";
            btn.style.background = "#3d3a4e";
            btn.style.backgroundSize = "400%";
            btn.style.color = "#fff";
            btn.style.border = "none";

            const styleSheet = document.createElement("style");

            styleSheet.innerHTML = `
          #background_color .button-content {
          position: relative;
          z-index: 1;
        }
        
        #background_color .button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          transform: scaleX(0);
          transform-origin: 0 50%;
          width: 100%;
          height: inherit;
          border-radius: inherit;
          background: linear-gradient(82.3deg, rgba(150, 93, 233, 1) 10.8%, rgba(99, 88, 238, 1) 94.3%);
          transition: all 0.475s;
        }
        #background_color .button:hover::before {
          transform: scaleX(1);
        }
        `;

            document.head.appendChild(styleSheet);
          }
        } else if (selectedMenu === "Vertical") {
          const sidebar = document.createElement("nav");
          sidebar.classList.add("sidebar");
          body_index.appendChild(sidebar);
          const header = document.createElement("header");
          sidebar.appendChild(header);
          const image = document.createElement("div");
          image.classList.add("image-text");
          header.appendChild(image);
          const span_image = document.createElement("span");
          span_image.classList.add("image");
          image.appendChild(span_image);

          const img_span = document.createElement("img");
          img_span.src = savedLogo;
          span_image.appendChild(img_span);
          const menu_bar = document.createElement("div");
          menu_bar.classList.add("menu-bar");
          sidebar.appendChild(menu_bar);

          const menu = document.createElement("div");
          menu.classList.add("menu_nav");
          menu_bar.appendChild(menu);

          const menu_links = document.createElement("ul");
          menu_links.classList.add("menu_links");
          menu.appendChild(menu_links);
          for (let i = 0; i < numberOfTimes; i++) {
            const nav_link = document.createElement("li");
            nav_link.id = "li_" + (i + 1);
            nav_link.classList.add("nav-link");
            menu_links.appendChild(nav_link);

            const a_link = document.createElement("a");
            a_link.href = "#";
            nav_link.appendChild(a_link);
            const i_link = document.createElement("i");
            i_link.classList.add("bx");
            i_link.classList.add("bx-home");
            i_link.classList.add("icon");
            a_link.appendChild(i_link);

            // parentElement.appendChild(li);
          }
          const bottom_content = document.createElement("div");
          bottom_content.classList.add("bottom-content");
          menu_bar.appendChild(bottom_content);

          const nav_link = document.createElement("li");
          nav_link.classList.add("nav-link");
          bottom_content.appendChild(nav_link);

          const a_link = document.createElement("a");
          a_link.href = "#";
          nav_link.appendChild(a_link);
          const i_link = document.createElement("a");
          i_link.classList.add("bx");
          i_link.classList.add("bx-log-in");
          i_link.classList.add("icon");
          a_link.appendChild(i_link);

          sidebar.style.background = headerBackground;

        } else {
          const header_color_background = document.createElement("header");
          header_color_background.id = "background_color";
          header_color_background.style.background = headerBackground;
          header_color_background.style.backdropFilter = backdropFilter;
          header_color_background.style.boxShadow = boxShadow;
          header_color_background.style.borderBottomLeftRadius =
            borderBottomLeftRadius;
          header_color_background.style.borderBottomRightRadius =
            borderBottomRightRadius;
          header_color_background.style.borderBottom = border;

          body_index.appendChild(header_color_background);
        }
      }
    }
    //section hero
    if (selectedBackground === "Transparent") {
      if (selectedSiteType === "Restaurant") {
        // Banner Hero Section
        const heroSection = document.createElement('section');
        heroSection.classList.add("home");
        heroSection.classList.add("hero");
        heroSection.id = "hero";
        heroSection.style.position = 'relative';
        heroSection.style.height = '100vh';
        heroSection.style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(' + type_banner_hero[number_pos] + ') center center / cover no-repeat';
        heroSection.style.color = '#fff';
        heroSection.style.display = 'flex';
        heroSection.style.flexDirection = 'column';
        heroSection.style.justifyContent = 'center';
        heroSection.style.alignItems = 'center';
        heroSection.style.textAlign = 'center';
        heroSection.style.padding = '20px';
        const fond = document.querySelector(".fond_unie");
        fond.style.background = heroSection.style.background
        heroSection.style.background = "none"
        // Ajout de la section héroïque dans le container
        body_index.appendChild(heroSection);
        fond.appendChild(heroSection)
      } else if (selectedSiteType === "Agence de Voyage") {
        // Créer la section principale
        const homeSection = document.createElement('section');
        homeSection.classList.add("home");
        homeSection.classList.add("hero");
        homeSection.id = "hero";
        homeSection.style.cursor = 'auto';
        homeSection.style.position = 'relative';
        homeSection.style.height = '100vh';
        homeSection.style.background = 'linear-gradient(rgba(0,0,0,0.1),#333), url(' + type_banner_hero[number_pos] + ')';
        homeSection.style.color = '#fff';
        homeSection.style.display = 'flex';
        homeSection.style.flexDirection = 'column';
        homeSection.style.justifyContent = 'center';
        homeSection.style.alignItems = 'center';
        homeSection.style.textAlign = 'center';
        const fond = document.querySelector(".fond_unie");
        fond.style.background = homeSection.style.background
        homeSection.style.background = "none"
        // Ajout de la section principale au corps du document
        body_index.appendChild(homeSection);
        fond.appendChild(homeSection)
      }
      else {
        const section_1 = document.createElement("section");
        section_1.classList.add("home");
        section_1.classList.add("hero");
        section_1.id = "hero";
        section_1.style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),url(" + type_banner_hero[number_pos] + ") center center / cover no-repeat";

        const fond = document.querySelector(".fond_unie");

        fond.style.background = section_1.style.background
        section_1.style.background = "none";

        fond.appendChild(section_1)
      }

    } else if (selectedBackground === "Glassmorphisme") {
      if (selectedSiteType === "Restaurant") {
        // Banner Hero Section
        const heroSection = document.createElement('section');
        heroSection.classList.add("home");
        heroSection.classList.add("hero");
        heroSection.id = "hero";
        heroSection.style.position = 'relative';
        heroSection.style.height = '100vh';
        heroSection.style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(' + type_banner_hero[number_pos] + ') center center / cover no-repeat';
        heroSection.style.color = '#fff';
        heroSection.style.display = 'flex';
        heroSection.style.flexDirection = 'column';
        heroSection.style.justifyContent = 'center';
        heroSection.style.alignItems = 'center';
        heroSection.style.textAlign = 'center';
        heroSection.style.padding = '20px';
        const fond = document.querySelector(".fond_unie");
        fond.style.background = heroSection.style.background
        heroSection.style.background = "none"
        // Ajout de la section héroïque dans le container
        body_index.appendChild(heroSection);
        fond.appendChild(heroSection)
      } else if (selectedSiteType === "Agence de Voyage") {
        // Créer la section principale
        const homeSection = document.createElement('section');
        homeSection.classList.add("home");
        homeSection.classList.add("hero");
        homeSection.id = "hero";
        homeSection.style.cursor = 'auto';
        homeSection.style.position = 'relative';
        homeSection.style.height = '100vh';
        homeSection.style.background = 'linear-gradient(rgba(0,0,0,0.1),#333), url(' + type_banner_hero[number_pos] + ')';
        homeSection.style.color = '#fff';
        homeSection.style.display = 'flex';
        homeSection.style.flexDirection = 'column';
        homeSection.style.justifyContent = 'center';
        homeSection.style.alignItems = 'center';
        homeSection.style.textAlign = 'center';
        const fond = document.querySelector(".fond_unie");
        fond.style.background = homeSection.style.background
        homeSection.style.background = "none"
        // Ajout de la section principale au corps du document
        body_index.appendChild(homeSection);
        fond.appendChild(homeSection)
      }
      else {
        const section_1 = document.createElement("section");

        section_1.classList.add("home");
        section_1.classList.add("hero");
        section_1.id = "hero";
        section_1.style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),url(" + type_banner_hero[number_pos] + ") center center / cover no-repeat";

        const fond = document.querySelector(".fond_unie");

        fond.style.background = section_1.style.background
        section_1.style.background = "none";

        fond.appendChild(section_1)
      }

    } else {
      const section_1 = document.createElement("section");
      section_1.classList.add("home");
      section_1.classList.add("hero");
      section_1.id = "hero";
      section_1.style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),url(" + type_banner_hero[number_pos] + ") center center / cover no-repeat";

      body_index.appendChild(section_1)
    }


    if (selectedSiteType === "Agence de Design Graphique") {
      Agence_de_Design_Graphique()
    } else if (selectedSiteType === "Cabinet d'Avocats") {
      Cabinet_d_avocats()
    } else if (selectedSiteType === "Salon de Coiffure et Beauté") {
      Salon_de_Coiffure_et_Beaute()
    } else if (selectedSiteType === "Agence de Voyage") {
      Agence_de_Voyage()
    } else if (selectedSiteType === "Restaurant") {
      Restaurant()
    } else if (selectedSiteType === "Entreprise de Construction") {
      Entreprise_de_Construction()
    } else if (selectedSiteType === "Clinique Médicale") {
      Clinique_Medicale()
    } else if (selectedSiteType === "Magasin de Mode") {
      Magasin_de_Mode()
    } else if (selectedSiteType === "Agence Immobilière") {
      Agence_Immobilière()
    }
    function Agence_de_Design_Graphique() {
      if (selectedSiteType === "Agence de Design Graphique") {
        const newSection = Create_newSection("Citation");
        body_index.appendChild(newSection)
      }
      normal()
      about()
      if (selectedSiteType === "Agence de Design Graphique") {
        const newSection = Create_newSection("Équipe");
        body_index.appendChild(newSection)
      }
      if (selectedSiteType === "Agence de Design Graphique") {
        const newSection = Create_newSection("Nos clients");
        body_index.appendChild(newSection)
      }
      if (selectedSiteType === "Agence de Design Graphique") {

        const newSection = Create_newSection("Tarification");
        body_index.appendChild(newSection)
      }
      contact()
      footer()
    }
    function Cabinet_d_avocats() {
      if (selectedSiteType === "Cabinet d'Avocats") {
        const newSection = Create_newSection("Citation");
        body_index.appendChild(newSection)
      }
      normal()
      about()
      if (selectedSiteType === "Cabinet d'Avocats") {
        const newSection = Create_newSection("Équipe");
        body_index.appendChild(newSection)
      }
      if (selectedSiteType === "Cabinet d'Avocats") {
        const newSection = Create_newSection("Map");
        body_index.appendChild(newSection)
      }
      contact()
      footer()
    }
    function Salon_de_Coiffure_et_Beaute() {

      if (selectedSiteType === "Salon de Coiffure et Beauté") {
        const newSection = Create_newSection("Slider");
        body_index.appendChild(newSection)
      }
      normal()
      if (selectedSiteType === "Salon de Coiffure et Beauté") {
        const newSection = Create_newSection("Équipe");
        body_index.appendChild(newSection)
      }
      about()
      if (selectedSiteType === "Salon de Coiffure et Beauté") {
        const newSection = Create_newSection("FAQ");
        body_index.appendChild(newSection)
      }
      if (selectedSiteType === "Salon de Coiffure et Beauté") {
        const newSection = Create_newSection("Réseaux sociaux");
        body_index.appendChild(newSection)
      }
      if (selectedSiteType === "Salon de Coiffure et Beauté") {
        const newSection = Create_newSection("Partenaires");
        body_index.appendChild(newSection)
      }
      contact()
      footer()
    }
    function Agence_de_Voyage() {
      if (selectedSiteType === "Agence de Voyage") {
        // Div find_trip
        const findTripDiv = document.createElement('section');
        findTripDiv.classList.add('home');
        findTripDiv.classList.add('find_trip');
        findTripDiv.id = 'find_trip';
        findTripDiv.style.backgroundColor = '#222';
        findTripDiv.style.padding = '20px';
        findTripDiv.style.width = '100%';
        findTripDiv.style.position = 'relative';
        findTripDiv.style.display = 'flex';
        findTripDiv.style.alignItems = 'center';
        findTripDiv.style.backgroundColor = '#111';

        // Formulaire
        const form = document.createElement('form');
        form.action = '';
        form.style.display = 'flex';
        form.style.justifyContent = 'space-between';
        form.style.alignItems = 'flex-end';
        form.style.width = '100%';

        // Fonction pour créer une div avec label et input
        const createInputDiv = (labelText, placeholderText) => {
          const div = document.createElement('div');
          div.style.display = 'flex';
          div.style.flexDirection = 'column';
          div.style.width = '20%';

          const label = document.createElement('label');
          label.textContent = labelText;
          label.style.color = '#999';
          label.style.fontSize = '15px';
          label.style.marginBottom = '10px';

          const input = document.createElement('input');
          input.type = 'text';
          input.placeholder = placeholderText;
          input.style.padding = '5px 20px';
          input.style.backgroundColor = 'transparent';
          input.style.border = '1px solid #29d9d5';
          input.style.outline = '0';
          input.style.width = '100%';
          input.style.fontSize = '13px';
          input.style.color = '#fff';

          div.appendChild(label);
          div.appendChild(input);

          return div;
        };

        // Ajouter les divs pour Pays, Ville et Région
        form.appendChild(createInputDiv('Pays', 'Entrez un Pays'));
        form.appendChild(createInputDiv('Ville', 'Entrez une ville'));
        form.appendChild(createInputDiv('Région', 'Entrez une région'));

        // Bouton de soumission
        const submitButton = document.createElement('input');
        submitButton.type = 'submit';
        submitButton.value = 'voir';
        submitButton.style.display = 'flex';
        submitButton.style.flexDirection = 'column';
        submitButton.style.width = '20%';
        submitButton.style.alignItems = 'center';
        submitButton.style.textTransform = 'uppercase';
        submitButton.style.color = '#29d9d5';
        submitButton.style.cursor = 'pointer';
        submitButton.style.transition = '0.5s';
        submitButton.style.padding = '5px 20px';
        submitButton.style.backgroundColor = 'transparent';
        submitButton.style.border = '1px solid #29d9d5';
        submitButton.style.outline = '0';
        submitButton.style.fontSize = '13px';
        submitButton.style.color = '#fff';

        submitButton.addEventListener('mouseover', () => {
          submitButton.style.boxShadow = '0 0 10px #29d9d5';
        });

        submitButton.addEventListener('mouseout', () => {
          submitButton.style.boxShadow = 'none';
        });

        form.appendChild(submitButton);

        // Ajout du formulaire au find_trip div
        findTripDiv.appendChild(form);

        // Ajout du find_trip div à la section principale
        body_index.appendChild(findTripDiv);
      }
      //section destination si ag?
      if (selectedSiteType === "Agence de Voyage") {
        // Créer la section principale
        const aProposSection = document.createElement('section');
        aProposSection.classList.add('home');
        aProposSection.classList.add('Apropos');
        aProposSection.id = 'Apropos';

        aProposSection.style.padding = '0 10%';
        aProposSection.style.width = '100%';
        aProposSection.style.cursor = 'crosshair';
        aProposSection.style.display = 'flex';
        aProposSection.style.flexDirection = 'column';

        aProposSection.style.backgroundColor = '#111';

        // Titre h1
        const h1 = document.createElement('h1');
        h1.classList.add('title');
        h1.textContent = 'à propos';
        h1.style.textTransform = 'capitalize';
        h1.style.margin = '70px 0';
        h1.style.fontWeight = 'bold';
        h1.style.color = '#29d9d5';
        h1.style.position = 'relative';
        h1.style.marginLeft = '15px';
        h1.style.fontSize = '18px';

        // Ajouter le pseudo-élément ::after via JavaScript
        const titleAfter = document.createElement('div');
        titleAfter.style.position = 'absolute';
        titleAfter.style.left = '-15px';
        titleAfter.style.content = '""';
        titleAfter.style.height = '100%';
        titleAfter.style.backgroundColor = '#fff';
        titleAfter.style.width = '5px';
        h1.appendChild(titleAfter);

        aProposSection.appendChild(h1);

        // Div img-desc
        const imgDescDiv = document.createElement('div');
        imgDescDiv.classList.add('img-desc');
        imgDescDiv.style.display = 'flex';
        imgDescDiv.style.alignItems = 'center';
        imgDescDiv.style.justifyContent = 'space-between';
        imgDescDiv.style.width = '100%';

        // Div left
        const leftDiv = document.createElement('div');
        leftDiv.classList.add('left');
        leftDiv.style.position = 'relative';
        leftDiv.style.marginLeft = '10px';
        leftDiv.style.height = '250px';
        leftDiv.style.width = '40%';

        const img = document.createElement('img');
        img.src = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.position = 'relative';
        img.style.boxShadow = '0 0 10px #29d9d5';

        // Ajouter le pseudo-élément ::after via JavaScript
        const leftAfter = document.createElement('div');
        leftAfter.style.position = 'absolute';
        leftAfter.style.bottom = '-10px';
        leftAfter.style.right = '10px';
        leftAfter.style.content = '""';
        leftAfter.style.height = '100%';
        leftAfter.style.backgroundColor = '#29d9d5';
        leftAfter.style.width = '100%';
        leftAfter.style.zIndex = '-1';
        leftDiv.appendChild(leftAfter);

        leftDiv.appendChild(img);

        // Div right
        const rightDiv = document.createElement('div');
        rightDiv.classList.add('right');
        rightDiv.style.width = '57%';

        const h3 = document.createElement('h3');
        h3.textContent = 'Nous voyageons pour chercher d\'autres états, d\'autres vies, d\'autres, âmes.';
        h3.style.color = '#fff';
        h3.style.fontSize = '25px';
        h3.style.marginBottom = '20px';

        const p1 = document.createElement('p');
        p1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsam officiis atque, doloremque eos reprehenderit deleniti ipsum dicta aliquid .';
        p1.style.color = '#999';
        p1.style.fontSize = '14px';
        p1.style.marginBottom = '36px';

        const a = document.createElement('a');
        a.href = '#';
        a.textContent = 'Lire Plus';
        a.style.border = '1px solid #29d9d5';
        a.style.color = '#29d9d5';
        a.style.fontSize = '14px';
        a.style.padding = '8px 25px';
        a.style.fontWeight = 'bold';

        rightDiv.appendChild(h3);
        rightDiv.appendChild(p1);
        rightDiv.appendChild(a);

        imgDescDiv.appendChild(leftDiv);
        imgDescDiv.appendChild(rightDiv);

        aProposSection.appendChild(imgDescDiv);

        // Ajout de la section principale au corps du document
        body_index.appendChild(aProposSection);
      }
      //section destination pop si ag ?
      if (selectedSiteType === "Agence de Voyage") {
        // Créer la section principale
        const popularDestSection = document.createElement('section');
        popularDestSection.classList.add('home');
        popularDestSection.classList.add('popular_destination');
        popularDestSection.id = 'popular_destination';
        popularDestSection.style.padding = '0 10%';
        popularDestSection.style.display = 'flex';
        popularDestSection.style.flexDirection = 'column';
        popularDestSection.style.cursor = 'auto';
        popularDestSection.style.backgroundColor = '#111';

        // Titre h1
        const h1 = document.createElement('h1');
        h1.classList.add('title');
        h1.textContent = 'destinations populaires';
        h1.style.textTransform = 'capitalize';
        h1.style.margin = '70px 0';
        h1.style.fontWeight = 'bold';
        h1.style.color = '#29d9d5';
        h1.style.position = 'relative';
        h1.style.marginLeft = '15px';
        h1.style.fontSize = '18px';

        popularDestSection.appendChild(h1);

        // Div content
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');
        contentDiv.style.display = 'grid';
        contentDiv.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px,1fr))';
        contentDiv.style.gap = '32px';

        // Fonction pour créer une boîte de destination
        const createBox = (imgSrc, cityName) => {
          // Div box
          const boxDiv = document.createElement('div');
          boxDiv.classList.add('box');
          boxDiv.style.overflow = 'hidden';
          boxDiv.style.position = 'relative';
          boxDiv.style.height = '250px';
          boxDiv.style.transition = '0.5s';

          const img = document.createElement('img');
          img.src = imgSrc;
          img.style.height = '100%';
          img.style.width = '100%';
          img.style.objectFit = 'cover';

          // Div content
          const boxContent = document.createElement('div');
          boxContent.classList.add('content');
          boxContent.style.position = 'absolute';
          boxContent.style.top = '0';
          boxContent.style.left = '0';
          boxContent.style.height = '100%';
          boxContent.style.width = '100%';
          boxContent.style.backgroundColor = '#fff';
          boxContent.style.textAlign = 'center';
          boxContent.style.alignItems = 'center';
          boxContent.style.transform = 'translateX(100%)';
          boxContent.style.transition = '0.5s';

          const h4 = document.createElement('h4');
          h4.textContent = cityName;
          h4.style.fontSize = '25px';
          h4.style.marginBottom = '10px';

          const p1 = document.createElement('p');
          p1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
          p1.style.padding = '2px';
          p1.style.fontSize = '12px';

          const p2 = document.createElement('p');
          p2.textContent = 'Ea iusto ipsa repudiandae amet conseq.';
          p2.style.padding = '2px';
          p2.style.fontSize = '12px';
          p2.style.marginBottom = '25px';

          const a = document.createElement('a');
          a.href = '#';
          a.textContent = 'Lire Plus';
          a.style.marginTop = '60px';
          a.style.padding = '10px 60px';
          a.style.border = '2px solid #29d9d5';
          a.style.color = '#29d9d5';
          a.style.fontWeight = 'bold';

          boxContent.appendChild(h4);
          boxContent.appendChild(p1);
          boxContent.appendChild(p2);
          boxContent.appendChild(a);

          boxDiv.appendChild(img);
          boxDiv.appendChild(boxContent);

          // Ajouter les événements de survol
          boxDiv.addEventListener('mouseover', () => {
            boxDiv.style.boxShadow = '0 0 10px #29d9d5';
            boxContent.style.transform = 'translateX(0)';
          });
          boxDiv.addEventListener('mouseout', () => {
            boxDiv.style.boxShadow = 'none';
            boxContent.style.transform = 'translateX(100%)';
          });

          return boxDiv;
        };

        // Ajouter les boîtes de destinations
        contentDiv.appendChild(createBox('https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Paris'));
        contentDiv.appendChild(createBox('https://images.unsplash.com/photo-1495542779398-9fec7dc7986c?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Moscou'));
        contentDiv.appendChild(createBox('https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?q=80&w=1680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Miami'));
        contentDiv.appendChild(createBox('https://images.unsplash.com/photo-1597982087634-9884f03198ce?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Los-Angeles'));
        contentDiv.appendChild(createBox('https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1696&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Rome'));
        contentDiv.appendChild(createBox('https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Tokio'));

        popularDestSection.appendChild(contentDiv);

        // Ajout de la section principale au corps du document
        body_index.appendChild(popularDestSection);
      }
      if (selectedSiteType === "Agence de Voyage") {
        const section = Create_newSection("Partenaires")
        // Ajout de la section dans le corps du document
        trucappendchild(section)
      }
      contact()
      footer()
    }
    function Restaurant() {
      //section carte 
      if (selectedSiteType === "Restaurant") {
        const section = Create_newSection("Carte")
        // Ajout de la section dans le corps du document
        trucappendchild(section)
      }
      //section chef si rest
      if (selectedSiteType === "Restaurant") {
        const block = document.createElement('section');
        block.classList.add('home');
        block.classList.add('block_chief');
        block.id = 'block_chief';
        block.style.display = "flex"
        block.style.backgroundColor = "#fff"
        block.style.alignItems = "center"
        block.style.marginBottom = "0"
        const blockImg = document.createElement('div');
        blockImg.classList.add('block-img');
        blockImg.style.flex = "none"
        blockImg.style.maxWidth = "350px"
        blockImg.style.order = "2"
        const img = document.createElement('img');
        img.src = "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        img.alt = "";
        img.style.maxWidth = "100%"
        img.style.display = "block"
        img.style.position = "relative"
        img.style.zIndex = "1"
        blockImg.appendChild(img);

        const blockBody = document.createElement('div');
        blockBody.classList.add('block-body');
        blockBody.style.padding = "0 20px"
        const h2 = document.createElement('h2');
        h2.classList.add('title');
        h2.style.fontSize = "1.75rem"
        h2.style.lineHeight = "1.1"
        h2.style.letterSpacing = "2px"
        h2.style.fontWeight = "700"
        h2.style.textTransform = "uppercase"
        h2.style.margin = "1rem 0 0 0"
        h2.style.marginBottom = "1.2rem"
        h2.style.color = "var(--text_color_black)"
        h2.innerHTML = `<span class="selection_div_text" style="
        color: var(--text_color_black);
        font-size: 2.5rem;
        display: block;
        text-transform: none;">Chief</span> MEET OUR EXECUTIVE CHEF, CHRISTIAN JACOB`;

        const p1 = document.createElement('p');
        p1.classList.add('selection_div_text');
        p1.textContent = 'If you are considering purchasing a new grill, or barbecue, you will be faced with a multitude of options to choose between. However, there is one choice which you will need to make fairly quickly in your quest for the perfect grill for you. That decision is whether to buy a charcoal or gas grill.';
        p1.style.color = 'var(--text_color_black)';
        const p2 = document.createElement('p');
        p2.classList.add('selection_div_text');
        p2.textContent = 'Wow I have a hankering for some really good grill roasted chicken, the melt in your mouth variety with some fresh homemade salsa slathered right on top.';
        p2.style.color = 'var(--text_color_black)';
        const more = document.createElement('div');
        more.classList.add('more');
        more.style.marginTop = "1.3rem"

        const a = document.createElement('a');
        a.href = 'recipe.html';
        a.innerHTML = 'See more <i class="bx bx-chevron-right"></i>';
        a.style.textDecoration = "none"
        more.appendChild(a);

        // Append all elements
        blockBody.appendChild(h2);
        blockBody.appendChild(p1);
        blockBody.appendChild(p2);
        blockBody.appendChild(more);

        block.appendChild(blockImg);
        block.appendChild(blockBody);

        // Add the block to the container
        trucappendchild(block)

      }
      //section reservation si rest
      if (selectedSiteType === "Restaurant") {
        const section = Create_newSection("Réservation")
        trucappendchild(section)

      }
      if (selectedSiteType === "Restaurant") {
        const section = Create_newSection("Texte + Image")
        trucappendchild(section)

      }
      if (selectedSiteType === "Restaurant") {
        const section = Create_newSection("Partenaires")
        // Ajout de la section dans le corps du document
        trucappendchild(section)
      }
      contact()
      footer()
    }
    function Entreprise_de_Construction() {
      normal()
      about()
      if (selectedSiteType === "Entreprise de Construction") {
        const newSection = Create_newSection("Équipe");
        body_index.appendChild(newSection)
      }
      if (selectedSiteType === "Entreprise de Construction") {
        const newSection = Create_newSection("Map");
        body_index.appendChild(newSection)
      }
      if (selectedSiteType === "Entreprise de Construction") {
        const newSection = Create_newSection("Tarification");
        body_index.appendChild(newSection)
      }
      if (selectedSiteType === "Entreprise de Construction") {
        const newSection = Create_newSection("Partenaires");
        body_index.appendChild(newSection)
      }

      contact()
      footer()
    }
    function Clinique_Medicale() {
      if (selectedSiteType === "Clinique Médicale") {
        const newSection = Create_newSection("Citation");
        body_index.appendChild(newSection)
      }
      normal()
      about()
      if (selectedSiteType === "Clinique Médicale") {
        const newSection = Create_newSection("Équipe");
        body_index.appendChild(newSection)
      }
      if (selectedSiteType === "Clinique Médicale") {
        const newSection = Create_newSection("Map");
        body_index.appendChild(newSection)
      }

      if (selectedSiteType === "Clinique Médicale") {
        const newSection = Create_newSection("Partenaires");
        body_index.appendChild(newSection)
      }
      contact()
      footer()
    }
    function Magasin_de_Mode() {
      if (selectedSiteType === "Magasin de Mode") {
        const newSection = Create_newSection("Slider");
        body_index.appendChild(newSection)
      }
      about()

      if (selectedSiteType === "Magasin de Mode") {
        const newSection = Create_newSection("Nos clients");
        body_index.appendChild(newSection)
      }
      if (selectedSiteType === "Magasin de Mode") {
        const newSection = Create_newSection("Gallerie de photo");
        body_index.appendChild(newSection)
      }
      if (selectedSiteType === "Magasin de Mode") {
        const newSection = Create_newSection("Partenaires");
        body_index.appendChild(newSection)
      }

      contact()
      footer()
    }
    function Agence_Immobilière() {
      normal()
      about()
      if (selectedSiteType === "Agence Immobilière") {


        const newSection = Create_newSection("Nos clients");
        body_index.appendChild(newSection)
      }
      if (selectedSiteType === "Agence Immobilière") {


        const newSection = Create_newSection("Citation");
        body_index.appendChild(newSection)
      }
      if (selectedSiteType === "Agence Immobilière") {
        const newSection = Create_newSection("Équipe");
        body_index.appendChild(newSection)
      }
      if (selectedSiteType === "Agence Immobilière") {
        const newSection = Create_newSection("Partenaires");
        body_index.appendChild(newSection)
      }
      contact()
      footer()
    }
    function normal() {
      //section normal
      const section_2 = document.createElement("section");
      section_2.classList.add("home");
      section_2.classList.add("menu");
      section_2.id = "normal";
      trucappendchild(section_2)
    }
    function about() {
      //section about
      const section_3 = document.createElement("section");
      section_3.classList.add("home");
      section_3.classList.add("about");
      section_3.id = "about";
      trucappendchild(section_3)
      //text dans about
      const h2_about = document.createElement("h2");
      h2_about.textContent = "À Propos de Nous";
      h2_about.classList.add("selection_div_text")
      section_3.appendChild(h2_about);
      const p_about = document.createElement("p");
      p_about.textContent = type_about_site[number_pos];
      p_about.classList.add("selection_div_text")
      section_3.appendChild(p_about);
    }
    function contact() {
      //section contact

      const section_4 = document.createElement("section");
      section_4.classList.add("home");
      section_4.classList.add("contact");
      section_4.id = "contact";
      trucappendchild(section_4)
      //txt dans contact
      const h2_contact = document.createElement("h2");
      h2_contact.textContent = "Contactez-nous";
      h2_contact.classList.add("selection_div_text")

      section_4.appendChild(h2_contact);
    }
    function footer() {

      //section footer
      const section_4 = document.querySelector(".contact");
      const section_5 = document.createElement("section");
      section_5.classList.add("home");
      section_5.classList.add("footer");
      section_5.id = "footer";
      trucappendchild(section_5)
      const p_footer = document.createElement("p");
      const currentYear = new Date().getFullYear();
      p_footer.textContent =
        "© " + currentYear + " " + selectedSiteType + ". Tous droits réservés.";
      p_footer.classList.add("selection_div_text")
      section_5.appendChild(p_footer);
      const p_contact = document.createElement("p");
      p_contact.textContent = type_contact_site[number_pos];
      p_contact.classList.add("selection_div_text")

      section_4.appendChild(p_contact);
      if (categorySwitchValue === "Yes") {
        const list = document.createElement("ul");
        list.classList.add("list");
        section_5.appendChild(list);
        const splited_lien_site = link_header_thème_site[number_pos].split("¤")
        for (let i = 0; i < numberOfTimes; i++) {
          const li_category = document.createElement("li");
          list.appendChild(li_category);
          const a_category = document.createElement("a");
          a_category.href = "#";
          a_category.textContent = splited_lien_site[i];
          li_category.appendChild(a_category);

          // parentElement.appendChild(li);
        }
      }
      if (linkSwitchValue === "Yes") {
        const social = document.createElement("div");
        social.classList.add("social");
        section_5.appendChild(social);
        const link_insta = document.createElement("a");
        link_insta.href = "#";
        social.appendChild(link_insta);
        const link_snap = document.createElement("a");
        link_snap.href = "#";
        social.appendChild(link_snap);
        const link_facebook = document.createElement("a");
        link_facebook.href = "#";
        social.appendChild(link_facebook);
        const link_icon_insta = document.createElement("i");
        link_icon_insta.classList.add("bx");
        link_icon_insta.classList.add("bxl-instagram");
        link_insta.appendChild(link_icon_insta);
        const link_icon_snapchat = document.createElement("i");
        link_icon_snapchat.classList.add("bx");
        link_icon_snapchat.classList.add("bxl-snapchat");
        link_snap.appendChild(link_icon_snapchat);
        const link_icon_facebook = document.createElement("i");
        link_icon_facebook.classList.add("bx");
        link_icon_facebook.classList.add("bxl-facebook");
        link_facebook.appendChild(link_icon_facebook);
      }

      if (subscribeSwitchValue === "Yes") {
        const email = document.createElement("div");
        email.classList.add("email");
        section_4.appendChild(email);

        const input = document.createElement("ul");
        input.classList.add("box");
        input.classList.add("input-box");
        email.appendChild(input);
        const email_name = document.createElement("li");
        email_name.classList.add("email_name");
        email_name.textContent = "Contact";
        input.appendChild(email_name);

        const email_input = document.createElement("li");

        input.appendChild(email_input);
        const input_email_enter = document.createElement("input");
        input_email_enter.placeholder = "Entrer votre email";
        input_email_enter.type = "text";
        input_email_enter.spellcheck = "false";

        email_input.appendChild(input_email_enter);

        const email_btn = document.createElement("li");
        const email_btn_input = document.createElement("input");
        email_btn_input.type = "button";
        email_btn_input.value = "Envoyer";
        input.appendChild(email_btn);
        email_btn.appendChild(email_btn_input);
      }
    }
    if (selectedSiteType) {
      const section_1 = document.getElementById("hero");
      const hero_content = document.createElement("div");
      hero_content.classList.add("hero-content");
      section_1.appendChild(hero_content);
      const h1 = document.createElement("h1");
      const h3 = document.createElement("p");
      h1.textContent = "Bienvenue dans notre " + selectedSiteType + " : " + savedSiteName;
      h1.classList.add("selection_div_text")
      h1.style.fontSize = '3rem';
      h1.style.marginBottom = '20px';
      h3.textContent = thème_type_site[number_pos];
      h3.classList.add("selection_div_text")
      h3.style.fontSize = '1.5rem';
      h3.style.marginBottom = '30px';
      hero_content.appendChild(h1);
      hero_content.appendChild(h3);
    }
    //btn dans hero
    const hero_content = document.querySelector(".hero-content");
    const heroButton = document.createElement('a');
    heroButton.textContent = thème_btn_type_site[number_pos];
    heroButton.href = '#reservation';
    if (selectedSiteType === "Agence de Voyage") {
      heroButton.style.padding = '10px 20px';
      heroButton.style.backgroundColor = 'transparent';
      heroButton.style.color = 'var(--text_color_black)';
      heroButton.style.border = '2px solid #29d9d5';
      heroButton.style.transition = '0.5s';
      heroButton.style.textDecoration = 'none';
      heroButton.style.fontWeight = 'bolder';
    } else if (selectedSiteType === "Restaurant") {
      heroButton.style.display = 'inline-block';
      heroButton.style.padding = '10px 20px';
      heroButton.style.backgroundColor = '#ff5722';
      heroButton.style.color = 'var(--text_color_white)';
      heroButton.style.fontSize = '1rem';
      heroButton.style.textDecoration = 'none';
      heroButton.style.borderRadius = '5px';
      heroButton.style.transition = 'background-color 0.3s';
    } else {
      heroButton.style.display = 'inline-block';
      heroButton.style.padding = '10px 20px';
      heroButton.style.backgroundColor = '#ff5722';
      heroButton.style.color = 'var(--text_color_white)';
      heroButton.style.fontSize = '1rem';
      heroButton.style.textDecoration = 'none';
      heroButton.style.borderRadius = '5px';
      heroButton.style.transition = 'background-color 0.3s';
    }
    heroButton.addEventListener('mouseover', () => {
      if (selectedSiteType === "Restaurant") {
        heroButton.style.backgroundColor = '#e64a19';
      } else if (selectedSiteType === "Agence de Voyage") {
        heroButton.style.backgroundColor = '#29d9d5';
        heroButton.style.color = '#fff';

      }
    });
    heroButton.addEventListener('mouseout', () => {
      if (selectedSiteType === "Restaurant") {
        heroButton.style.backgroundColor = '#ff5722';
      } else if (selectedSiteType === "Agence de Voyage") {
        heroButton.style.backgroundColor = 'transparent'
        heroButton.style.color = '#29d9d5';
      }
    });
    hero_content.appendChild(heroButton);
    const style_site_normal = document.createElement("style");
    style_site_normal.textContent = style_sitenormal[0];
    // Ajouter l'élément <title> à <head>
    document.body.appendChild(style_site_normal);
    // Vérifiez si le logo est enregistré dans le localStorage
    if (font_family) {
      const body_index = document.getElementById("body_index");

      const linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.href = `https://fonts.googleapis.com/css2?family=${font_family}:wght@400;500&display=swap`;

      // Ajoutez l'élément de lien à la tête du document
      document.head.appendChild(linkElement);

      // Changez la police du corps
      document.body.style.cssText = `font-family: ${font_family.replace(
        /\+/g,
        " "
      )}, sans-serif !important`;

    }
    if (savedLogo) {
      // Créez un élément <link> pour le favicon
      const head = document.querySelector("head");
      const iconLink = document.createElement("link");
      iconLink.rel = "icon";
      iconLink.type = "image/png";

      // Remplacez le href avec le contenu du logo enregistré
      iconLink.href = savedLogo;

      // Supprimez l'ancien élément <link> du favicon s'il existe
      const existingIconLink = document.querySelector('link[rel="icon"]');
      if (existingIconLink) {
        head.removeChild(existingIconLink);
      }

      // Ajoutez le nouveau lien du favicon à <head>
      head.appendChild(iconLink);
    }
    if (colorhex_site) {

      const colors = colorhex_site.split(', ');

      // Assigner les couleurs en fonction de l'ordre dans la liste
      document.documentElement.style.setProperty('--text_color_white', colors[3]);
      document.documentElement.style.setProperty('--text_color_black', colors[0]);
      document.documentElement.style.setProperty('--link_color', colors[2]);
      document.documentElement.style.setProperty('--btn_color', colors[1]);
      document.documentElement.style.setProperty('--body_color', colors[0]);
    }
    if (savedSiteName) {
      const head = document.querySelector("head");
      // Créer un élément <title> et définir son contenu
      const titleElement = document.createElement("title");
      titleElement.textContent = savedSiteName;

      // Ajouter l'élément <title> à <head>
      head.appendChild(titleElement);
    }
  }

  function resetNotif() {
    const save_notif = document.querySelector(".save_notif");
    if (save_notif) {

      save_notif.remove();
    }
  }
  // Initialisation de l'historique
  // Fonction pour sauvegarder l'état actuel
  function saveState() {

    // Initialisation de l'historique
    const body_index2_init = document.querySelector(".body_index")

    // Supprimer les états suivants (si vous êtes dans le milieu de l'historique)
    historyArray = historyArray.slice(0, currentIndex + 1);
    historyHeadArray = historyHeadArray.slice(0, currentIndexHead + 1);

    // Ajouter le nouvel état à l'historique
    historyArray.push(body_index2_init.innerHTML);
    historyHeadArray.push(document.head.innerHTML);

    // Mettre à jour l'index actuel
    currentIndex = historyArray.length - 1;
    currentIndexHead = historyHeadArray.length - 1;

  }
  // Fonction pour annuler (undo) une modification
  function undo() {
    const body_index2_init = document.querySelector(".body_index")
    if (currentIndex > 0) {
      currentIndex--;
      body_index2_init.innerHTML = historyArray[currentIndex];
      bar()
    }
    if (currentIndexHead > 0) {
      currentIndexHead--;
      document.head.innerHTML = historyHeadArray[currentIndexHead];
    }
  }
  // Fonction pour refaire (redo) une modification
  function redo() {
    const body_index2_init = document.querySelector(".body_index")
    if (currentIndex < historyArray.length - 1) {
      currentIndex++;
      body_index2_init.innerHTML = historyArray[currentIndex];
      bar()
    }
    if (currentIndexHead < historyHeadArray.length - 1) {
      currentIndexHead++;
      document.head.innerHTML = historyHeadArray[currentIndexHead];
    }
  }
  // Fonction pour enregistrer une modification
  function saved_create_notif(etat_of_host) {

    resetNotif();
    saveState()

    localStorage.setItem("Site_save", "true");
    const save_notif = document.createElement("div");
    save_notif.classList.add("save_notif");
    save_notif.id = "save_notif";
    save_notif.style.transform = "translateY(-101px)";
    document.querySelector("body").appendChild(save_notif);

    const text_notif = document.createElement("p");
    text_notif.classList.add("text_notif");
    text_notif.textContent = "Voulez vous sauvegarder votre site ?";

    save_notif.appendChild(text_notif);
    const btn_notif = document.createElement("button");
    btn_notif.classList.add("btn_notif");
    btn_notif.textContent = "Sauvegarder";
    save_notif.appendChild(btn_notif);
    setTimeout(() => {
      save_notif.style.transform = "translateY(0px)";
    }, 100);
    const Save_temoin = document.querySelector(".Save_temoin");
    Save_temoin.classList.remove("active")
    btn_notif.addEventListener("click", function () {
      // Récupérez le contenu HTML de la page
      // Obtenez le style du corps



      const colors = colorhex_site.split(', ');

      // Assigner les couleurs en fonction de l'ordre dans la liste
      const style_couleur = '--text_color_white: ' + colors[3] + "; " + '--text_color_black: ' + colors[0] + "; " + '--link_color: ' + colors[2] + "; " + '--btn_color: ' + colors[1] + "; " + '--body_color: ' + colors[0] + ";"


      // Générez le contenu HTML de la page en incluant les styles personnalisés
      const generatedContent = `
      <!DOCTYPE html>
      <html lang="fr" style="${style_couleur}">
      ${document.documentElement.innerHTML}
      </html>`;


      const currentDate = new Date();
      const options = { timeZone: "Europe/Paris" };
      const date_save = currentDate.toLocaleDateString("fr-FR", options);

      const savedSiteName = localStorage.getItem("siteName");
      // Récupérez l'état du site depuis le localStorage
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


            const contentKey = new URLSearchParams(window.location.search).get(
              "contentKey"
            );
            if (contentKey) {
              const request = window.indexedDB.open("MaBaseDeDonnees", 1);

              request.addEventListener("success", function (event) {
                const db = event.target.result;
                const transaction_first = db.transaction(["GestionSite"], "readonly");
                const objectStore_first = transaction_first.objectStore("GestionSite");

                const request = objectStore_first.get(Number(contentKey));

                request.onsuccess = function (event) {
                  const code_site = event.target.result;
                  if (code_site) {

                    // Faites quelque chose avec les données récupérées
                    // Récupérez le contenu HTML à partir du localStorage en utilisant la clé

                    const [siteId, codeSite] = code_site.SiteContent.split('¤');
  if (etat_of_host === undefined || etat_of_host === null) {
                    if (generatedContent) {
                      const savedSiteInfo = {
                        userId: userId,
                        siteId: siteId,
                        name: savedSiteName,
                        logo: savedLogo,
                        content: generatedContent,
                        time: date_save,
                        type: selectedSiteType,
                        etat: etat_of_host,
                      };
                       

                      const request = window.indexedDB.open("MaBaseDeDonnees", 1);

                      // Gérer les événements associés à la requête
                      request.addEventListener("success", function (event) {
                        const db = event.target.result;
                        const transaction = db.transaction(["Site"], "readwrite");
                        const ObjectStore = transaction.objectStore("Site");

                        // Stocker le site

                        const site = { id: siteId, value: JSON.stringify(savedSiteInfo) };
                        ObjectStore.put(site);
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

                      })

                    }
    } else {
 if (generatedContent) {
                      const savedSiteInfo = {
                        userId: userId,
                        siteId: siteId,
                        name: savedSiteName,
                        logo: savedLogo,
                        content: generatedContent,
                        time: date_save,
                        type: selectedSiteType,
                        etat: "no_host",
                      };
                       

                      const request = window.indexedDB.open("MaBaseDeDonnees", 1);

                      // Gérer les événements associés à la requête
                      request.addEventListener("success", function (event) {
                        const db = event.target.result;
                        const transaction = db.transaction(["Site"], "readwrite");
                        const ObjectStore = transaction.objectStore("Site");

                        // Stocker le site

                        const site = { id: siteId, value: JSON.stringify(savedSiteInfo) };
                        ObjectStore.put(site);
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

                      })

                    }
                    }
                  }
                }
              });
            } else {
              const uniqueId = 'site_' + Math.random().toString(36).substr(2, 9);
 if (etat_of_host === undefined || etat_of_host === null) {
              if (generatedContent) {
                const savedSiteInfo = {
                  userId: userId,
                  siteId: uniqueId,
                  name: savedSiteName,
                  logo: savedLogo,
                  content: generatedContent,
                  time: date_save,
                  type: selectedSiteType,
                  etat: etat_of_host,
                };

                const request = window.indexedDB.open("MaBaseDeDonnees", 1);

                // Gérer les événements associés à la requête
                request.addEventListener("success", function (event) {
                  const db = event.target.result;
                  const transaction = db.transaction(["Site"], "readwrite");
                  const ObjectStore = transaction.objectStore("Site");

                  // Stocker le site

                  const site = { id: uniqueId, value: JSON.stringify(savedSiteInfo) };
                  ObjectStore.put(site);
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

                })

              }
   } else {
 if (generatedContent) {
                const savedSiteInfo = {
                  userId: userId,
                  siteId: uniqueId,
                  name: savedSiteName,
                  logo: savedLogo,
                  content: generatedContent,
                  time: date_save,
                  type: selectedSiteType,
                  etat: "no_host",
                };

                const request = window.indexedDB.open("MaBaseDeDonnees", 1);

                // Gérer les événements associés à la requête
                request.addEventListener("success", function (event) {
                  const db = event.target.result;
                  const transaction = db.transaction(["Site"], "readwrite");
                  const ObjectStore = transaction.objectStore("Site");

                  // Stocker le site

                  const site = { id: uniqueId, value: JSON.stringify(savedSiteInfo) };
                  ObjectStore.put(site);
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

                })

              }
                    }
            }
          }
        }
      })

      // Réinitialisez la notification (assurez-vous que resetNotif() est défini ailleurs dans votre code)
      resetNotif();


      toast_valid("Sauvegarder avec succès", "success");
      const Save_temoin = document.querySelector(".Save_temoin");
      Save_temoin.classList.add("active")

    });


  }


  function toast_valid(text, event) {
    const toastDiv = document.querySelector(".toast");
    if (toastDiv) {
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
   .toast{
    z-index: 999;
       position: absolute;
       top: 150px;
       box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.7), inset 0px 0px 10px rgb(0, 0, 0, 0.7);
       background: #242020;
       border: 2px solid rgb(66 66 66);
      
       border-radius: 10px;
    
       padding: 9px;
       overflow: hidden;
       transform: translateY(-250px);
       transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);
   }
   .toast.active{
       transform: translateY(0%);
   }
   .toast .toast-content{
       display: flex;
       align-items: center;
   }
   .toast-content .check{
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
   .toast-content .message{
       display: flex;
       flex-direction: column;
       margin: 0 12px;
   }
   .message .text{
       font-size: 20px;
       font-weight: 400;
       color: #666666;
   }
   .message .text.text-1{
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
      }, 5000); //1s = 1000 milliseconds
    }
  }
  const bar_edit = document.querySelector(".bar_edit");

  if (!bar_edit) {

    const bar_edit = document.createElement("div");
    bar_edit.classList.add("bar_edit");
    bar_edit.id = "bar_edit";
    document.querySelector("body").appendChild(bar_edit);
    const logo_bar = document.createElement("div");
    logo_bar.classList.add("logo_bar");
    bar_edit.appendChild(logo_bar);
    const logo_bar_img = document.createElement("img");
    logo_bar_img.src = "../img/Logo_fab_cvl_studio.png";
    logo_bar.appendChild(logo_bar_img);

    const select_bar = document.createElement("div");
    select_bar.classList.add("select_bar");
    bar_edit.appendChild(select_bar);
    const icon_select = document.createElement("i");
    icon_select.classList.add("bx");
    icon_select.classList.add("bx-navigation");
    select_bar.appendChild(icon_select);
    const edit_bar = document.createElement("div");
    edit_bar.classList.add("edit_bar");
    const icon_edit = document.createElement("i");
    icon_edit.classList.add("bx");
    icon_edit.classList.add("bx-edit");
    edit_bar.appendChild(icon_edit);
    bar_edit.appendChild(edit_bar);
    const generate_bar = document.createElement("div");
    generate_bar.classList.add("generate_bar");
    bar_edit.appendChild(generate_bar);
    const icon_generate = document.createElement("i");
    icon_generate.classList.add("bx");
    icon_generate.classList.add("bxs-magic-wand");
    generate_bar.appendChild(icon_generate);
    const reglageZoom = document.createElement('div');
    reglageZoom.classList.add('reglage_zoom');
    reglageZoom.id = 'reglage_zoom';

    // Créez la sous-division avec la classe 'nb_zoom'
    const nbZoom = document.createElement('div');
    nbZoom.classList.add('nb_zoom');

    // Ajoutez la sous-division au conteneur principal
    reglageZoom.appendChild(nbZoom);
    bar_edit.appendChild(reglageZoom);
    const plus = document.createElement("div");
    plus.classList.add("plus_edit_bar");
    bar_edit.appendChild(plus);
    const icon_plus = document.createElement("i");
    icon_plus.classList.add("bx");
    icon_plus.classList.add("bx-plus");

    plus.appendChild(icon_plus);

    const moins = document.createElement("div");
    moins.classList.add("moins_edit_bar");
    bar_edit.appendChild(moins);
    const icon_moins = document.createElement("i");
    icon_moins.classList.add("bx");
    icon_moins.classList.add("bx-minus");

    moins.appendChild(icon_moins);

    const Up = document.createElement("div");
    Up.classList.add("up");
    Up.style.display = "none";
    bar_edit.appendChild(Up);
    const icon_up = document.createElement("i");
    icon_up.classList.add("bx");
    icon_up.classList.add("bx-chevron-up");

    Up.appendChild(icon_up);

    const down = document.createElement("div");
    down.classList.add("down");
    down.style.display = "none";
    bar_edit.appendChild(down);
    const icon_down = document.createElement("i");
    icon_down.classList.add("bx");
    icon_down.classList.add("bx-chevron-down");

    down.appendChild(icon_down);


  }
  const saved = localStorage.getItem("Site_save");
  if (saved === "true") {

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
            // Réinitialisez la notification


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

                  const body_index = document.body.querySelector(".body_index")
                  body_index.innerHTML = body_index_cs
                  resetNotif();
                  saveState()

                  bar()
                } else {

                  const body_index = document.body.querySelector(".body_index")
                  body_index.innerHTML = body_index_tc
                  resetNotif();
                  saveState()


                  bar()
                }
              }
            };

            document.documentElement.innerHTML = codeSite
            // Créer une expression régulière pour trouver les variables CSS personnalisées
            const styleMatch = codeSite.match(/html lang="fr" style="(.*?)"/);

            // Vérifier si une correspondance a été trouvée
            if (styleMatch && styleMatch.length > 1) {
              // Extraire le style de la correspondance
              const style = styleMatch[1];

              // Afficher le style dans la console
              document.documentElement.setAttribute("style", style);
            }
            resetNotif()

          } else {
            console.error("Aucune donnée trouvée pour la clé : ", contentKey);
          }
        };



      });



    } else {
      create_Site()
      saveState()
      bar();
    }
  } else {
    create_Site()
    saveState()
    bar();
  }



  function Create_newSection(selectedCheckboxValue) {
    const number_pos = type_site.indexOf(selectedSiteType)
    // Créer un nouvel élément de section
    const newSection = document.createElement("section");
    newSection.classList.add("section"); // Ajouter la classe "section"
    newSection.style.height = "auto";

    newSection.id = selectedCheckboxValue;

    if (selectedCheckboxValue === "Citation") {

      newSection.style.display = "flex";
      newSection.style.justifyContent = "center";
      newSection.style.alignItems = "center";
      newSection.style.flexDirection = "column";
      newSection.style.minHeight = "40vh";
      newSection.style.padding = "10px";
      newSection.style.background = "#fff";

      const h1_citation = document.createElement("h1");

      h1_citation.textContent = categorizedQuotes[number_pos][Math.floor(Math.random() * categorizedQuotes[number_pos].length)].quote;
      const position = categorizedQuotes.indexOf(categorizedQuotes[Math.floor(Math.random() * categorizedQuotes[number_pos].length)]);
      newSection.appendChild(h1_citation);

      const br9 = document.createElement("br");

      newSection.appendChild(br9);
      const personn_citation = document.createElement("h4");


      personn_citation.textContent = "-" + categorizedQuotes[number_pos][position].author;
      newSection.appendChild(personn_citation);
    } else if (selectedCheckboxValue === "Normal") {
      newSection.style.backgroundColor = "#fff";

    } else if (selectedCheckboxValue === "Slider") {
      newSection.style.display = "flex";
      newSection.style.justifyContent = "center";
      newSection.style.alignItems = "center";
      newSection.style.minHeight = "50vh";
      newSection.style.background = "#fff";
      const wrapper = document.createElement("div");
      wrapper.classList.add("wrapper_carrousel");

      newSection.appendChild(wrapper);


      const container_carrossel = document.createElement("div");
      container_carrossel.classList.add("container-carrossel");
      wrapper.appendChild(container_carrossel);
      const carrossel = document.createElement("div");
      carrossel.classList.add("carrossel");
      container_carrossel.appendChild(carrossel);
      let img_matrix = [
        "https://images.unsplash.com/photo-1580191947416-62d35a55e71d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
        "https://images.unsplash.com/photo-1594323713852-9626155bfd37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
        "https://images.unsplash.com/photo-1543332164-6e82f355badc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        "https://images.unsplash.com/photo-1567284364258-30c429a24b81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      ];

      for (let i = 0; i < 4; i++) {
        const img1 = document.createElement("div");
        img1.classList.add("carrossel-item")
        img1.style.background = "url(" + img_matrix[i] + ") center center / cover no-repeat"
        carrossel.appendChild(img1);
      }
      const styleSheet = document.createElement("style");
      styleSheet.id = selectedCheckboxValue;
      styleSheet.innerHTML = `.wrapper_carrousel {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-carrossel {
  --widthItem: 375px;
  --heightItem: 300px;
  width: var(--widthItem);
  height: var(--heightItem);
  perspective: 1000px;
}

.carrossel {
  --rotatey: 0;
  font-size: 4rem;
  position: relative;
  transform: rotatey(var(--rotatey));
  transform-style: preserve-3d;
  user-select: none;
  cursor: grab;
}

.carrossel-item {
  opacity: 0.5;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: opacity 0.5s;
}

.carrossel-item:hover {
  opacity: 1;
}

.carrossel,
.carrossel-item {
  width: 100%;
  height: 100%;
}
/* background: linear-gradient(-229deg, #642B73, #C6426E); */

.carrossel-item:nth-child(1) {
  --rotatey: 0;
  transform: rotatey(var(--rotatey)) translatez(var(--tz));
  background: linear-gradient(-229deg, #fbd52d, #ef3a7b);
}

.carrossel-item:nth-child(2) {
  --rotatey: 0;
  transform: rotatey(var(--rotatey)) translatez(var(--tz));
  background: linear-gradient(-229deg, #ff70af, #5fa8f5);
}

.carrossel-item:nth-child(3) {
  --rotatey: 0;
  transform: rotatey(var(--rotatey)) translatez(var(--tz));
  background: linear-gradient(-229deg, #0cebeb, #29ffc6);
}
.carrossel-item:nth-child(4) {
  --rotatey: 0;
  transform: rotatey(var(--rotatey)) translatez(var(--tz));
  background: linear-gradient(-229deg, #88f7f9, #048fff);
}

.carrossel-item:nth-child(5) {
  --rotate: 0;
  transform: rotatey(var(--rotatey)) translatez(var(--tz));
  background: linear-gradient(-229deg, #0093e9, #80d0c7);
}

.carrossel-item:nth-child(6) {
  --rotatey: 0;
  transform: rotatey(var(--rotatey)) translatez(var(--tz));
  background: linear-gradient(-229deg, #cf91ff, #5782f5);
}

`
      document.head.appendChild(styleSheet)

    } else if (selectedCheckboxValue === "Vidéo") {
      newSection.style.display = "flex";
      newSection.style.justifyContent = "center";
      newSection.style.alignItems = "center";
      newSection.style.backgroundColor = "#fff";

      newSection.style.flexDirection = "column";
      const video_film = document.createElement("video");
      video_film.id = "video";
      video_film.setAttribute("controls", "controls"); // Ajouter l'attribut "controls"
      newSection.appendChild(video_film);

      const source_video = document.createElement("source");
      source_video.type = "video/mp4";
      source_video.src = "";
      video_film.appendChild(source_video);
    } else if (selectedCheckboxValue === "Formulaire de contact") {
      newSection.classList.add("home");
      newSection.classList.add("contact");
      newSection.id = "contact_copied";
      newSection.classList.remove("section");

      newSection.id = "contact";
      newSection.backgroundColor = "#222";
      const h2_contact = document.createElement("h2");
      h2_contact.textContent = "Contactez-nous";
      h2_contact.classList.add("selection_div_text")
      newSection.appendChild(h2_contact);
      const p_contact = document.createElement("p");
      p_contact.textContent = type_contact_site[number_pos];
      p_contact.classList.add("selection_div_text")
      newSection.appendChild(p_contact);
      const email = document.createElement("div");
      email.classList.add("email");
      newSection.appendChild(email);

      const input = document.createElement("ul");
      input.classList.add("box");
      input.classList.add("input-box");
      email.appendChild(input);
      const email_name = document.createElement("li");
      email_name.classList.add("email_name");
      email_name.textContent = "Contact";
      input.appendChild(email_name);

      const email_input = document.createElement("li");

      input.appendChild(email_input);
      const input_email_enter = document.createElement("input");
      input_email_enter.placeholder = "Entrer votre email";
      input_email_enter.type = "text";
      input_email_enter.spellcheck = "false";

      email_input.appendChild(input_email_enter);

      const email_btn = document.createElement("li");
      const email_btn_input = document.createElement("input");
      email_btn_input.type = "button";
      email_btn_input.value = "Envoyer";
      input.appendChild(email_btn);
      email_btn.appendChild(email_btn_input);
    } else if (selectedCheckboxValue === "FAQ") {
      newSection.style.display = "flex";
      newSection.style.justifyContent = "center";
      newSection.style.alignItems = "center";
      newSection.style.flexDirection = "column";
      newSection.style.backgroundColor = "#fff";

      const accordion = document.createElement("div");
      accordion.classList.add("accordion");
      newSection.appendChild(accordion);
      for (let i = 0; i < 3; i++) {
        const accordion_content = document.createElement("div");
        accordion_content.classList.add("accordion-content");
        accordion.appendChild(accordion_content);
        const header = document.createElement("header");

        accordion_content.appendChild(header);
        const title = document.createElement("h3");
        title.classList.add("title");
        title.textContent = qr_type_site[number_pos][i].question;
        title.id = "question_" + (i + 1);
        header.appendChild(title);
        const icon = document.createElement("i");
        icon.classList.add("bx");
        icon.classList.add("bx-plus");
        header.appendChild(icon);

        const p = document.createElement("p");
        p.classList.add("description");
        p.textContent = qr_type_site[number_pos][i].réponse;
        p.id = "reponse_" + (i + 1);
        accordion_content.appendChild(p);
      }
    } else if (selectedCheckboxValue === "Texte + Image") {
      newSection.style.padding = "40px";

      newSection.style.display = "flex";
      newSection.style.justifyContent = "space-around";

      newSection.style.backgroundColor = "#fff";
      newSection.style.alignItems = "center";
      const div_text_img = document.createElement("div");
      div_text_img.classList.add("div_text_img");
      div_text_img.style.display = "flex";
      div_text_img.style.alignItems = "center";
      div_text_img.style.justifyContent = "center";
      div_text_img.style.flexDirection = "column";

      newSection.appendChild(div_text_img);
      const title_text_img = document.createElement("h2");

      title_text_img.textContent = phrase_h1_p[number_pos].h1;

      div_text_img.appendChild(title_text_img);

      const text_img = document.createElement("h6");

      text_img.textContent = phrase_h1_p[number_pos].p;

      div_text_img.appendChild(text_img);
      const div_img = document.createElement("div");
      div_img.classList.add("div_img");
      div_img.style.display = "flex";
      div_img.style.alignItems = "center";
      div_img.style.justifyContent = "center";
      newSection.appendChild(div_img);
      const img_textand_img = document.createElement("img");
      img_textand_img.classList.add("img_textand_img");
      img_textand_img.style.borderRadius = "0.5em";

      img_textand_img.style.height = "270px";
      const randomimg_textand_img = Math.floor(
        Math.random() * Img.length
      );

      img_textand_img.src = Img[randomimg_textand_img];

      div_img.appendChild(img_textand_img);
    } else if (selectedCheckboxValue === "Nos clients") {
      newSection.style.display = "flex";
      newSection.style.justifyContent = "center";
      newSection.style.alignItems = "center";
      newSection.style.flexDirection = "column";
      newSection.style.backgroundColor = "#fff";

      const nos_clients = document.createElement("div");
      nos_clients.classList.add("nos_clients");

      newSection.appendChild(nos_clients);
      const title_nos_clients = document.createElement("h2");
      title_nos_clients.textContent = "Nos clients";

      nos_clients.appendChild(title_nos_clients);
      const flex_colum = document.createElement("div");

      flex_colum.classList.add("flex_colum");
      nos_clients.appendChild(flex_colum);
      for (let i = 0; i < 3; i++) {
        const block_list = document.createElement("div");

        block_list.classList.add("block_list");
        block_list.id = "block_list" + (i + 1);
        flex_colum.appendChild(block_list);
        const img_block_list = document.createElement("img");
        img_block_list.id = "img" + (i + 1);
        img_block_list.src = var_img_block_list[i];
        block_list.appendChild(img_block_list);
        const text_block_list = document.createElement("div");

        text_block_list.classList.add("text_block_list");
        block_list.appendChild(text_block_list);
        const text_p_title_block_list = document.createElement("p");
        text_p_title_block_list.classList.add(
          "text_p_title_block_list"
        );
        text_p_title_block_list.id =
          "text_p_title_block_list" + (i + 1);
        text_p_title_block_list.textContent =
          var_text_p_title_block_list[number_pos][Math.floor(Math.random() * var_text_p_title_block_list[number_pos].length)].nom;
        text_block_list.appendChild(text_p_title_block_list);
        const text_p_block_list = document.createElement("p");
        text_p_block_list.classList.add("text_p_block_list");
        text_p_block_list.id = "text_p_block_list" + (i + 1);

        text_p_block_list.textContent = var_text_p_title_block_list[number_pos][i].description;
        text_block_list.appendChild(text_p_block_list);
        const more_info = document.createElement("a");
        more_info.textContent = "Plus d'info";
        more_info.id = "more_info" + (i + 1);
        more_info.classList.add("more_info");
        text_block_list.appendChild(more_info);
      }
    } else if (selectedCheckboxValue === "Images") {
      newSection.style.background =
        "url(" + type_banner_hero[number_pos] + ")";
      newSection.style.backgroundRepeat = "no-repeat";
      newSection.style.backgroundSize = "cover";
    } else if (selectedCheckboxValue === "Réseaux sociaux") {
      newSection.style.display = "flex";
      newSection.style.justifyContent = "center";
      newSection.style.alignItems = "center";
      newSection.style.flexDirection = "column";
      newSection.style.backgroundColor = "#fff";

      const styleSheet = document.createElement("style");
      styleSheet.id = selectedCheckboxValue;
      styleSheet.innerHTML = `
       
       .wrapper_sociaux .button{
         display: inline-block;
         height: 60px;
         width: 60px;
         float: left;
         margin: 0 5px;
         overflow: hidden;
         background: #fff;
         border-radius: 50px;
         cursor: pointer;
         box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
         transition: all 0.3s ease-out;
       }
       .wrapper_sociaux .button:hover{
         width: 200px;
       }
       .wrapper_sociaux .button .icon{
         display: inline-block;
         height: 60px;
         width: 60px;
         text-align: center;
         border-radius: 50px;
         box-sizing: border-box;
         line-height: 60px;
         transition: all 0.3s ease-out;
       }
       
       .wrapper_sociaux .button .icon i{
         font-size: 25px;
         line-height: 60px;
         transition: all 0.3s ease-out;
         color: rgb(0, 0, 0);
       }
       .wrapper_sociaux .button:hover .icon i{
         color: #fff;
       }
       
       
       
       
       `;
      document.head.appendChild(styleSheet);
      const linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";
      document.head.appendChild(linkElement);

      const wrapper = document.createElement("div");
      wrapper.classList.add("wrapper_sociaux");

      const socialMedia = [
        {
          name: "Facebook",
          icon: "fab fa-facebook-f",
          color: "#4267B2",
          id: "rs_1",
        },
        { name: "Twitter", icon: "fab fa-x-twitter", color: "#1DA1F2", id: "rs_2", },
        {
          name: "Instagram",
          icon: "fab fa-instagram",
          color: "#E1306C",
          id: "rs_3",
        },
        { name: "Pinterest", icon: "fab fa-pinterest-p", color: "#E60023", id: "rs_4", },
        { name: "YouTube", icon: "fab fa-youtube", color: "#ff0000", id: "rs_5", },
        { name: "Tiktok", icon: "fab fa-tiktok", color: "#000000", id: "rs_6", },
      ];

      socialMedia.forEach((item) => {
        const button = document.createElement("div");
        button.classList.add("button");
        button.classList.add(item.name);

        const iconDiv = document.createElement("div");
        iconDiv.classList.add("icon");
        iconDiv.style.background = item.color;

        const icon = document.createElement("i");
        icon.classList.add(item.icon.split(" ")[0]); // Ajoute le premier mot de la classe d'icônes
        icon.classList.add(item.icon.split(" ")[1]); // Ajoute le deuxième mot de la classe d'icônes
        icon.style.fontSize = "25px";
        icon.style.color = "#fff";

        icon.style.lineHeight = "60px";
        icon.style.transition = "all 0.3s ease-out";
        iconDiv.appendChild(icon);

        button.appendChild(iconDiv);

        const span = document.createElement("span");
        span.style.fontSize = "20px";
        span.style.fontWeight = "500";
        span.style.lineHeight = "60px";
        span.style.marginLeft = "10px";
        span.style.transition = "all 0.3s ease-out";
        span.style.color = item.color;

        const a = document.createElement("a");
        a.href = "#"; // Définissez le href comme "#" ou votre lien désiré
        a.textContent = item.name;
        a.id = item.id;
        a.style.textDecoration = "none"; // Désactive la sélection

        span.appendChild(a);
        button.appendChild(span);

        wrapper.appendChild(button);
      });

      newSection.appendChild(wrapper);
    } else if (selectedCheckboxValue === "Partenaires") {
      newSection.style.display = "flex";
      newSection.style.backgroundColor = "#fff";

      newSection.classList.add("partners-section");
      newSection.style.justifyContent = "center";
      newSection.style.alignItems = "center";
      newSection.style.flexDirection = "column";
      const styleSheet = document.createElement("style");
      styleSheet.id = selectedCheckboxValue;
      styleSheet.innerHTML = `
       
                     .partners-section {
                       text-align: center;
                       padding: 40px 0;
                   }
                   
                   .partners-section h1 {
                       font-size: 2.5em;
                       margin-bottom: 20px;
                   }
                   
                   .partner-gallery {
                       display: flex;
                       overflow: hidden;
                       justify-content: space-between;
                       align-items: center;
                       margin: 0 auto;
                       margin-left: 150px;
                       width: calc(200px * 14);
                     animation: scroll 20s linear infinite;
                       height: 200px; /* Ajustez la hauteur en fonction de vos besoins */
                   }
                   
                   .partner-item {
                       flex: 0 0 auto;
                       transition: transform 0.5s;
                       height: 100%;
                       align-items: center;
                       display: flex;
                   }
                   
                   .partner-item img {
                       max-width: 100%;
                       max-height: 100%;
                   }
                   
                   /* Pour l'effet de transition du carrousel */
                @keyframes scroll{
                 0%{
                   transform: translateX(0);
                 }
                 100%{
                   transform: translateX(calc(-250px * 7))
                 }
                }
                   
                   
       `;
      document.head.appendChild(styleSheet);
      const title = document.createElement("h1");
      title.textContent = "Nos partenaires";
      newSection.appendChild(title);

      // Création de la galerie de partenaires
      const gallery = document.createElement("div");
      gallery.classList.add("partner-gallery");
      const partnerImages = [

      ];
      if (selectedSiteType === "Agence de Design Graphique") {
        const firstFiveImages = img_partenaire_type_site.slice(0, 5);
        partnerImages.push(...firstFiveImages);
      } else if (selectedSiteType === "Cabinet d'Avocats") {
        const firstFiveImages = img_partenaire_type_site.slice(5, 10);
        partnerImages.push(...firstFiveImages);
      } else if (selectedSiteType === "Salon de Coiffure et Beauté") {
        const firstFiveImages = img_partenaire_type_site.slice(10, 15);
        partnerImages.push(...firstFiveImages);
      } else if (selectedSiteType === "Agence de Voyage") {
        const firstFiveImages = img_partenaire_type_site.slice(15, 20);
        partnerImages.push(...firstFiveImages);
      } else if (selectedSiteType === "Restaurant") {
        const firstFiveImages = img_partenaire_type_site.slice(20, 25);
        partnerImages.push(...firstFiveImages);
      } else if (selectedSiteType === "Entreprise de Construction") {
        const firstFiveImages = img_partenaire_type_site.slice(25, 30);
        partnerImages.push(...firstFiveImages);
      } else if (selectedSiteType === "Clinique Médicale") {
        const firstFiveImages = img_partenaire_type_site.slice(30, 35);
        partnerImages.push(...firstFiveImages);
      } else if (selectedSiteType === "Magasin de Mode") {
        const firstFiveImages = img_partenaire_type_site.slice(35, 40);
        partnerImages.push(...firstFiveImages);
      } else if (selectedSiteType === "Agence Immobilière") {
        const firstFiveImages = img_partenaire_type_site.slice(40, 45);
        partnerImages.push(...firstFiveImages);
      }
      // Ajout des images de partenaires
      // Ajoutez plus d'images si nécessaire

      partnerImages.forEach((image, index) => {
        const partnerItem = document.createElement("div");
        partnerItem.classList.add("partner-item");
        partnerItem.id = "pi_img_partener_" + (index + 1)
        const partnerImage = document.createElement("img");
        partnerImage.src = image;
        partnerImage.alt = "Partner";
        partnerImage.id = "img_partener_" + (index + 1);;
        partnerItem.appendChild(partnerImage);

        gallery.appendChild(partnerItem);
      });

      newSection.appendChild(gallery);
    } else if (selectedCheckboxValue === "Tarification") {
      newSection.style.display = "flex";
      newSection.style.backgroundColor = "#fff";

      newSection.style.justifyContent = "center";
      newSection.style.alignItems = "center";
      newSection.style.height = "100vh";
      newSection.style.flexDirection = "column";
      const styleSheet = document.createElement("style");
      styleSheet.id = selectedCheckboxValue;
      styleSheet.innerHTML = `
                     .wrapper_prix{
                       position: relative;
                       
                       color: var(--text_color_white);
                       width: 400px;
                       background: var(--btn_color);
                         border-radius: 26px;
                         padding: 30px;
                         box-shadow: 12px 12px 16px -11px rgba(39, 33, 33, 0.7);
                       }
                       .wrapper_prix header{
                         height: 55px;
                         display: flex;
                         align-items: center;
                         border: 1px solid #ccc;
                         border-radius: 30px;
                         position: relative;
                         box-shadow: 20px 20px 60px var(--btn_color),-20px -20px 60px var(--link_color);
                         background: var(--btn-color);
                       }
                       header label{
                         height: 100%;
                         z-index: 2;
                         width: 30%;
                         display: flex;
                         cursor: pointer;
                         font-size: 18px;
                         position: relative;
                         align-items: center;
                         justify-content: center;
                         transition: color 0.3s ease;
                       }
                       #tab-1:checked ~ header .tab-1,
                       #tab-2:checked ~ header .tab-2,
                       #tab-3:checked ~ header .tab-3{
                         color: var(--text_color_white);
                       }
                       header label:nth-child(2){
                         width: 40%;
                       }
                       header .slider{
                         position: absolute;
                         height: 85%;
                         border-radius: inherit;
                         background: linear-gradient(145deg, var(--btn_color)0%, var(--link_color) 100%);
                         transition: all 0.3s ease;
                       }
                       #tab-1:checked ~ header .slider{
                         left: 0%;
                         width: 90px;
                         transform: translateX(5%);
                       }
                       #tab-2:checked ~ header .slider{
                         left: 50%;
                         width: 120px;
                         transform: translateX(-50%);
                       }
                       #tab-3:checked ~ header .slider{
                         left: 100%;
                         width: 95px;
                         transform: translateX(-105%);
                       }
                       .wrapper_prix input[type="radio"]{
                         display: none;
                       }
                       .card-area{
                         overflow: hidden;
                       }
                       .card-area .cards{
                         display: flex;
                         width: 300%;
                         color: var(--text_color_white);
                       }
                       .cards .row{
                         width: 33.4%;
                       }
                       .cards .row-1{
                         transition: all 0.3s ease;
                       }
                       #tab-1:checked ~ .card-area .cards .row-1{
                        margin-left: 0%;
                       }
                       #tab-2:checked ~ .card-area .cards .row-1{
                        margin-left: -33.4%;
                       }
                       #tab-3:checked ~ .card-area .cards .row-1{
                        margin-left: -66.8%;
                       }
                       .row .price-details{
                         margin: 20px 0;
                         text-align: center;
                         padding-bottom: 25px;
                         border-bottom: 1px solid #e6e6e6;
                         
                       }
                       .price-details .price{
                         font-size: 65px;
                         font-weight: 600;
                         position: relative;
                         font-family: 'Noto Sans', sans-serif;
                         text-shadow: 0 0 1px #6990F2,
                         0 0 2px #6990F2,
                         0 0 4px #6990F2,
                         0 0 8px #6990F2,
                         0 0 12px #6990F2;
                       }
                       .price-details .price2{
                         font-size: 65px;
                         font-weight: 600;
                         position: relative;
                         font-family: 'Noto Sans', sans-serif;
                         text-shadow: 0 0 1px #6990F2,
                         0 0 2px #6990F2,
                         0 0 4px #6990F2,
                         0 0 8px #6990F2,
                         0 0 12px #6990F2;
                       }
                       .price-details .price::before,
                       .price-details .price::after{
                         position: absolute;
                         font-weight: 400;
                         font-family: "Poppins", sans-serif;
                       }
                       .price-details .price2::before,
                       .price-details .price2::after{
                         position: absolute;
                         font-weight: 400;
                         font-family: "Poppins", sans-serif;
                       }
                     
                       .price-details .price::before{
                         content: "€";
                         left: 126px;
                         top: 17px;
                         font-size: 20px;
                       }
                       .price-details .price::after{
                         content: "/mois";
                         right: -33px;
                         bottom: 17px;
                         font-size: 13px;
                       }
                       .price-details .price2::before{
                         content: "€";
                         left: 126px;
                         top: 17px;
                         font-size: 20px;
                       }
                       .price-details .price2::after{
                         content: "à vie";
                         right: -33px;
                         bottom: 17px;
                         font-size: 13px;
                       }
                       .price-details p{
                         font-size: 18px;
                         margin-top: 5px;
                       }
                       .row .features li{
                         display: flex;
                         font-size: 15px;
                         list-style: none;
                         margin-bottom: 10px;
                         align-items: center;
                       }
                       .features li i{
                         background: linear-gradient(#D5A3FF 0%, #77A5F8 100%);
                         background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                       }
                       .features li span{
                         margin-left: 10px;
                       }
                       .wrapper_prix .choix {
                         display: flex;
                         justify-content: center;
                       }
                       .wrapper_prix a{
                         display: flex;
                         justify-content: center;
                         padding: 12px 22px;
                         text-decoration: none;
                         width: 80%;
                         border-radius: 25px;
                         border: none;
                         outline: none;
                         height: 50px;
                         font-size: 18px;
                         color: var(--text_color_black);
                         cursor: pointer;
                         margin-top: 20px;
                         background-color: var(--text_color_white);
                         transition: transform 0.3s ease;
                       }
                       .wrapper_prix a:hover{
                         transform: scale(0.98);
                       }
                   
       `;
      document.head.appendChild(styleSheet);
      // Créer les éléments et attributs
      const wrapper = document.createElement("div");
      wrapper.classList.add("wrapper_prix");
      const input1 = document.createElement("input");
      input1.setAttribute("type", "radio");
      input1.setAttribute("name", "slider");
      input1.setAttribute("id", "tab-1");
      input1.setAttribute("checked", true);
      wrapper.appendChild(input1);
      const input2 = document.createElement("input");
      input2.setAttribute("type", "radio");
      input2.setAttribute("name", "slider");
      input2.setAttribute("id", "tab-2");
      wrapper.appendChild(input2);
      const input3 = document.createElement("input");
      input3.setAttribute("type", "radio");
      input3.setAttribute("name", "slider");


      input3.setAttribute("id", "tab-3");
      wrapper.appendChild(input3);
      const header = document.createElement("header");

      const label1 = document.createElement("label");
      label1.htmlFor = "tab-1";
      label1.classList.add("tab-1");
      label1.textContent = "Gratuit";

      const label2 = document.createElement("label");
      label2.htmlFor = "tab-2";
      label2.classList.add("tab-2");
      label2.textContent = "Moyen";

      const label3 = document.createElement("label");
      label3.htmlFor = "tab-3";
      label3.classList.add("tab-3");
      label3.textContent = "Premium";

      const sliderDiv = document.createElement("div");
      sliderDiv.classList.add("slider");

      // ... Continuer à créer les autres éléments et à ajouter des attributs et des classes
      const cardArea = document.createElement("div");
      cardArea.classList.add("card-area");

      // Création des cartes
      const cards = document.createElement("div");
      cards.classList.add("cards");

      // Première carte
      const row1 = document.createElement("div");
      row1.classList.add("row", "row-1");
      const priceDetails1 = document.createElement("div");
      priceDetails1.classList.add("price-details");
      const price1 = document.createElement("span");
      price1.classList.add("price");
      price1.textContent = features[selectedSiteType].prix_gratuit;

      priceDetails1.appendChild(price1);

      row1.appendChild(priceDetails1);
      const features1 = document.createElement("ul");
      features1.classList.add("features");

      features[selectedSiteType].gratuit.forEach((feature) => {
        const li = document.createElement("li");
        const icon1 = document.createElement("i");
        icon1.classList.add("bx", "bx-check");
        const span1 = document.createElement("span");
        span1.textContent = feature;
        li.appendChild(icon1);
        li.appendChild(span1);
        features1.appendChild(li);
      });
      const choix1 = document.createElement("div");
      choix1.classList.add("choix");
      const link1 = document.createElement("a");
      link1.href = "#";
      link1.textContent = "Choisir le plan";
      choix1.appendChild(link1);
      features1.appendChild(choix1);
      row1.appendChild(features1);
      cards.appendChild(row1);

      // Deuxième carte
      const row2 = document.createElement("div");
      row2.classList.add("row");
      const priceDetails2 = document.createElement("div");
      priceDetails2.classList.add("price-details");
      const price2 = document.createElement("span");
      price2.classList.add("price");
      price2.textContent = features[selectedSiteType].prix_moyen;
      const br = document.createElement("br");
      const price3 = document.createElement("span");
      price3.classList.add("price2");
      price3.textContent = features[selectedSiteType].prix_premium;


      priceDetails2.appendChild(price2);
      priceDetails2.appendChild(br);
      priceDetails2.appendChild(price3);

      row2.appendChild(priceDetails2);
      const features2 = document.createElement("ul");
      features2.classList.add("features");

      features[selectedSiteType].moyen.forEach((feature) => {
        const li = document.createElement("li");
        const icon2 = document.createElement("i");
        icon2.classList.add("bx", "bx-check");
        const span2 = document.createElement("span");
        span2.textContent = feature;
        li.appendChild(icon2);
        li.appendChild(span2);
        features2.appendChild(li);
      });
      const choix2 = document.createElement("div");
      choix2.classList.add("choix");
      const link2 = document.createElement("a");
      link2.href = "#";
      link2.textContent = "Choisir le plan";
      choix2.appendChild(link2);
      features2.appendChild(choix2);
      row2.appendChild(features2);
      cards.appendChild(row2);

      // Troisième carte
      const row3 = document.createElement("div");
      row3.classList.add("row");
      const priceDetails3 = document.createElement("div");
      priceDetails3.classList.add("price-details");
      const price4 = document.createElement("span");
      price4.classList.add("price");
      price4.textContent = features[selectedSiteType].prix_premium;

      priceDetails3.appendChild(price4);

      row3.appendChild(priceDetails3);
      const features3 = document.createElement("ul");
      features3.classList.add("features");

      features[selectedSiteType].premium.forEach((feature) => {
        const li = document.createElement("li");
        const icon3 = document.createElement("i");
        icon3.classList.add("bx", "bx-check");
        const span3 = document.createElement("span");
        span3.textContent = feature;
        li.appendChild(icon3);
        li.appendChild(span3);
        features3.appendChild(li);
      });
      const choix3 = document.createElement("div");
      choix3.classList.add("choix");
      const link3 = document.createElement("a");
      link3.href = "#";
      link3.textContent = "Choisir le plan";
      choix3.appendChild(link3);
      features3.appendChild(choix3);
      row3.appendChild(features3);
      cards.appendChild(row3);

      // Ajouter tous les éléments au wrapper
      header.appendChild(label1);
      header.appendChild(label2);
      header.appendChild(label3);
      header.appendChild(sliderDiv);

      wrapper.appendChild(header);
      wrapper.appendChild(cardArea);
      wrapper.appendChild(cards);

      // Ajouter le wrapper au corps du document
      cardArea.appendChild(cards);
      newSection.appendChild(wrapper);
    } else if (selectedCheckboxValue === "Map") {
      newSection.style.display = "flex";
      newSection.style.backgroundColor = "#fff";

      newSection.style.justifyContent = "center";
      newSection.style.height = "70vh";
      newSection.style.alignItems = "center";
      newSection.style.flexDirection = "column";
      // Créer un élément iframe
      const iframe = document.createElement("iframe");
      iframe.setAttribute(
        "src",
        link_map[number_pos].src
      );
      iframe.setAttribute("width", "600");
      iframe.setAttribute("height", "450");
      iframe.setAttribute("style", "border:0;");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("loading", "lazy");
      iframe.setAttribute(
        "referrerpolicy",
        "no-referrer-when-downgrade"
      );

      // Ajouter l'élément iframe au corps du document
      iframe.style.width = "100%";

      newSection.appendChild(iframe);
    } else if (selectedCheckboxValue === "Produits") {
      newSection.style.display = "flex";

      newSection.style.justifyContent = "center";

      newSection.style.backgroundColor = "#fff";
      newSection.style.alignItems = "center";
      newSection.style.flexDirection = "column";
      newSection.style.padding = "40px 0px";
      // Créer le conteneur de la carte de produit
      const nos_produits = document.createElement("h1");
      nos_produits.classList.add("nos_produits");
      nos_produits.textContent = "Nos produits"
      newSection.appendChild(nos_produits)

      const list_productCard = document.createElement("div");
      list_productCard.classList.add("list_product_card");
      for (let i = 0; i < 3; i++) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");



        // Créer les images principales
        const mainImages = document.createElement("div");
        mainImages.classList.add("main-images");

        const blueImage = document.createElement("img");
        blueImage.id = "blue";
        blueImage.classList.add("blue", "active");
        blueImage.src = "../img/blue.png";
        blueImage.alt = "blue";
        mainImages.appendChild(blueImage);


        // Créer les détails de la chaussure
        const shoeDetails = document.createElement("div");
        shoeDetails.classList.add("shoe-details");
        const shoeName = document.createElement("span");
        shoeName.classList.add("shoe_name");
        shoeName.textContent = "ADDIDAS GAZE ZX";
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!";
        const stars = document.createElement("div");
        stars.classList.add("stars");
        for (let i = 0; i < 5; i++) {
          const starIcon = document.createElement("i");
          starIcon.classList.add("bx", i < 4 ? "bxs-star" : "bxs-star");
          stars.appendChild(starIcon);
        }
        shoeDetails.appendChild(shoeName);
        shoeDetails.appendChild(paragraph);
        shoeDetails.appendChild(stars);
        // Créer l'option de couleur et le prix
        const colorPrice = document.createElement("div");
        colorPrice.classList.add("color-price");
        const price = document.createElement("div");
        price.classList.add("price");
        const priceNum = document.createElement("span");
        priceNum.classList.add("price_num");
        priceNum.textContent = "$09.00";
        price.appendChild(priceNum);
        colorPrice.appendChild(price);
        // Créer le bouton d'ajout au panier
        const button = document.createElement("div");
        button.classList.add("button");
        const buttonLayer = document.createElement("div");
        buttonLayer.classList.add("button-layer");
        const addButton = document.createElement("button");
        addButton.textContent = "Add To Cart";
        button.appendChild(buttonLayer);
        button.appendChild(addButton);

        // Ajouter tous les éléments au conteneur de carte de produit
        list_productCard.appendChild(productCard);
        productCard.appendChild(mainImages);
        productCard.appendChild(shoeDetails);
        productCard.appendChild(colorPrice);
        colorPrice.appendChild(button);
      }
      // Ajouter le conteneur de carte de produit à la page
      newSection.appendChild(list_productCard);

      const styleSheet = document.createElement("style");
      styleSheet.id = selectedCheckboxValue;
      styleSheet.innerHTML = `
      .nos_produits{
        color: var(--text_color_black);
        font-size: 2.5em;
        margin-bottom: 20px;
      }
      .list_product_card{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
      }
      .product-card {
         position: relative;
         max-width: 355px;
         width: 100%;
         border-radius: 25px;
         padding: 20px 30px 30px 30px;
         background: #fff;
         box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
         z-index: 3;
         overflow: hidden;
       }
    
       .product-card .main-images{
         position: relative;
         height: 210px;
       }
       .product-card .main-images img{
         position: absolute;
         height: 300px;
         width: 300px;
         object-fit: cover;
         transform: rotate(18deg);
         left: 12px;
         top: -40px;
         z-index: -1;
         opacity: 0;
         transition: opacity 0.5s ease;
       }
       .product-card .main-images img.active{
         opacity: 1;
       }
       .product-card .shoe-details .shoe_name{
         font-size: 24px;
         font-weight: 500;
         color: var(--text_color_black);
       }
       .product-card .shoe-details {
        gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
       }
       .product-card .shoe-details p{
         font-size: 12px;
         font-weight: 400;
         color: var(--text_color_black);
         text-align: justify;
       }
       .product-card .shoe-details .stars {
     font-size: 21px;
     color: yellow;
     -webkit-text-stroke: 2px #333;
       }
       .product-card .shoe-details .stars i{
         margin: 0 -1px;
      
       }
       .product-card .shoe-details .stars i::last-child{
        -webkit-text-stroke: 0px #333;
        color: transparent;
      
       }
       .product-card .color-price .color-option{
         display: flex;
         align-items: center;
       }
       .color-price{
         display: flex;
         justify-content: space-between;
         align-items: center;
         margin-top: 30px;
         gap: 20px;
       }
      
       
       .color-price .price .price_num{
         font-size: 25px;
         font-weight: 600;
         color: var(--text_color_black);
       }
       .color-price .price .price_letter{
         font-size: 10px;
         font-weight: 600;
         margin-top: -4px;
         color: #707070;
       }
       .product-card .button{
         position: relative;
         height: 50px;
         width: 100%;
         border-radius: 25px;
         overflow: hidden;
       }
       .product-card .button .button-layer{
         position: absolute;
         height: 100%;
         width: 300%;
         left: -100%;
         background-image: linear-gradient(135deg,#9708CC, #43CBFF,#9708CC, #43CBFF );
         transition: all 0.4s ease;
         border-radius: 25PX;
       }
       .product-card .button:hover .button-layer{
         left: 0;
       }
       .product-card .button button{
         position: relative;
         height: 100%;
         width: 100%;
         background: none;
         outline: none;
         border: none;
         font-size: 18px;
         font-weight: 600;
         letter-spacing: 1px;
         color: #fff;
       }`;
      document.head.appendChild(styleSheet);


    } else if (selectedCheckboxValue === "Équipe") {
      newSection.style.display = "flex";
      newSection.style.backgroundColor = "#fff";

      newSection.style.justifyContent = "center";
      newSection.style.alignItems = "center";
      newSection.style.flexDirection = "column";
      const script = document.createElement("script");

      // Ajouter le lien source du script
      script.src = "js/swiper-bundle.min.js";

      // Ajouter le script au corps du document
      document.head.prepend(script);
      const styleSheet = document.createElement("style");
      styleSheet.id = selectedCheckboxValue;
      styleSheet.innerHTML = `.slide-container{
                       max-width: 1120px;
                       width: 100%;
                       padding: 40px 0;
                     }
                     .slide-content{
                       margin: 0 40px;
                       overflow: hidden;
                       border-radius: 25px;
                     }
                     .swiper-wrapper{
                       display: flex;
                       gap: 33px;
                     }
                     .card_eq{
                       border-radius: 25px;
                       background-color: #FFF;
                     }
                     .image-content,
                     .card-content_team{
                       display: flex;
                       flex-direction: column;
                       align-items: center;
                       padding: 10px 14px;
                     }
                     .image-content{
                       position: relative;
                       row-gap: 5px;
                       padding: 25px 0;
                     }
                     .overlay{
                       position: absolute;
                       left: 0;
                       top: 0;
                       height: 100%;
                       width: 100%;
                       background-color: var(--btn_color);
                       border-radius: 25px 25px 0 25px;
                     }
                     .overlay::before,
                     .overlay::after{
                       content: '';
                       position: absolute;
                       right: 0;
                       bottom: -40px;
                       height: 40px;
                       width: 40px;
                       background-color: var(--btn_color);
                     }
                     .overlay::after{
                       border-radius: 0 25px 0 0;
                       background-color: #FFF;
                     }
                     .card-image{
                       position: relative;
                       height: 150px;
                       width: 150px;
                       border-radius: 50%;
                       background: #FFF;
                       padding: 3px;
                     }
                     .card-image .card-img{
                       height: 100%;
                       width: 100%;
                       object-fit: cover;
                       border-radius: 50%;
                       border: 4px solid var(--btn_color);
                     }
                    .card-content_team .name{
                       font-size: 18px;
                       font-weight: 500;
                       color: var(--text_color_black);
                     }
                     .card-content_team .description{
                       font-size: 14px;
                       color: var(--text_color_black);
                       text-align: center;
                       z-index: 1;
                     }
                     .card-content_team .button{
                       border: none;
                       font-size: 16px;
                       color: var(--text_color_white);
                       padding: 8px 16px;
                       background-color: var(--btn_color);
                       border-radius: 6px;
                       margin: 14px;
                       cursor: pointer;
                       transition: all 0.3s ease;
                     }
                     .card-content_team .button:hover{
                       background-color: var(--text_color_white);
                       color: var(--text_color_black);
                     }
                     .swiper-navBtn{
                       color: #6E93f7;
                       transition: color 0.3s ease;
                     }
                     .swiper-navBtn:hover{
                       color: #4070F4;
                     }
                     .swiper-navBtn::before,
                     .swiper-navBtn::after{
                       font-size: 35px;
                     }
                     .swiper-button-next{
                       right: 0;
                     }
                     .swiper-button-prev{
                       left: 0;
                     }
                     .swiper-pagination-bullet{
                       background-color: #6E93f7;
                       opacity: 1;
                     }
                     .swiper-pagination-bullet-active{
                       background-color: #4070F4;
                     }
                     @media screen and (max-width: 768px) {
                       .slide-content{
                         margin: 0 10px;
                       }
                       .swiper-navBtn{
                         display: none;
                       }
                     }
                     `;
      document.head.appendChild(styleSheet);
      const slideContainer = document.createElement("div");
      slideContainer.classList.add("slide-container", "swiper");

      const slideContent = document.createElement("div");
      slideContent.classList.add("slide-content");

      const cardWrapper = document.createElement("div");
      cardWrapper.classList.add("card-wrapper", "swiper-wrapper");

      // Boucle pour créer les cartes
      for (let i = 0; i < 3; i++) {
        const card = document.createElement("div");
        card.classList.add("card_eq", "swiper-slide");

        const imageContent = document.createElement("div");
        imageContent.classList.add("image-content");

        const overlay = document.createElement("span");
        overlay.classList.add("overlay");
        imageContent.appendChild(overlay);

        const cardImage = document.createElement("div");
        cardImage.classList.add("card-image");
        const img = document.createElement("img");
        img.src = team[number_pos][i].photo; // Changer les noms des images en conséquence
        img.alt = `Profile ${i + 1}`;
        img.classList.add("card-img");
        cardImage.appendChild(img);
        imageContent.appendChild(cardImage);

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content_team");

        const name = document.createElement("h2");
        name.classList.add("name");
        name.textContent = team[number_pos][i].nom;
        cardContent.appendChild(name);

        const description = document.createElement("p");
        description.classList.add("description");
        description.textContent = team[number_pos][i].description;
        cardContent.appendChild(description);

        const button = document.createElement("button");
        button.classList.add("button");
        button.textContent = "Voir plus";
        cardContent.appendChild(button);

        card.appendChild(imageContent);
        card.appendChild(cardContent);

        cardWrapper.appendChild(card);
      }



      // Ajout des éléments au conteneur principal
      slideContent.appendChild(cardWrapper);
      slideContainer.appendChild(slideContent);


      // Ajout du conteneur principal au corps du document
      newSection.appendChild(slideContainer);
    } else if (selectedCheckboxValue === "3D") {
      newSection.style.display = "flex";
      newSection.style.backgroundColor = "#fff";

      newSection.style.justifyContent = "center";
      newSection.style.alignItems = "center";
      newSection.style.flexDirection = "column";
      // Create the script element
      const scriptElement = document.createElement("script");
      scriptElement.type = "module";
      scriptElement.src =
        "https://unpkg.com/@splinetool/viewer/build/spline-viewer.js";

      // Append the script element to the document body
      document.body.appendChild(scriptElement);

      // Create the spline-viewer element
      const splineViewerElement =
        document.createElement("spline-viewer");
      splineViewerElement.setAttribute(
        "url",
        tree_D_type_site[number_pos]
      );

      // Append the spline-viewer element to the document body or any desired container
      newSection.appendChild(splineViewerElement);
    } else if (selectedCheckboxValue === "Gallerie de photo") {
      newSection.style.display = "flex";
      newSection.style.backgroundColor = "#fff";

      newSection.style.justifyContent = "center";
      newSection.style.height = "70vh";
      newSection.style.alignItems = "center";
      newSection.style.flexDirection = "column";
      // Create the script element
      const container = document.createElement("div");
      container.classList.add("container");



      gallerieImg[number_pos].forEach((game) => {
        const card = document.createElement("div");
        card.classList.add("card");
        const img = document.createElement("img");
        img.classList.add("background");
        img.src = game.imgSrc;
        img.alt = "";
        card.appendChild(img);

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");
        const profileImage = document.createElement("div");
        profileImage.classList.add("profile-image");
        const icon = document.createElement("i");
        icon.classList.add("bx", "bx-joystick");
        profileImage.appendChild(icon);
        cardContent.appendChild(profileImage);
        const title = document.createElement("h3");
        title.classList.add("title");
        title.textContent = game.title;
        cardContent.appendChild(title);
        card.appendChild(cardContent);

        const backdrop = document.createElement("div");
        backdrop.classList.add("backdrop");
        card.appendChild(backdrop);

        container.appendChild(card);
      });

      // Append the script element to the document body
      newSection.appendChild(container);

      const styleSheet = document.createElement("style");
      styleSheet.id = selectedCheckboxValue;
      styleSheet.innerHTML = `
                     .card img {
                       width: 100%;
                       height: 100%;
                       display: block;
                     }
                     
                     .container {
                       width: 100%;
                       width: 900px;
                       height: 400px;
                       display: flex;
                       gap: 10px;
                       margin-inline: 50px;
                     }
                     
                     .card {
                       min-width: 70px;
                       height: 100%;
                       border-radius: 30px;
                       overflow: hidden;
                     
                       display: flex;
                       align-items: flex-end;
                       flex-grow: 1;
                       cursor: pointer;
                       position: relative;
                       transition: 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
                     
                       --transition-timing: 0.25s;
                     }
                     .card.active {
                       flex-grow: 100;
                     }
                     
                     .card > .background {
                       position: absolute;
                       inset: 0;
                       object-fit: cover;
                       object-position: left;
                       filter: brightness(0.8);
                  
                       transition: var(--transition-timing) ease;
                     }
                     .card.active > .background {
                       filter: brightness(1) grayscale(0);
                     }
                     
                     .card > .card-content {
                       display: flex;
                       align-items: center;
                       position: absolute;
                       left: 10px;
                       right: 10px;
                       bottom: 20px;
                       overflow: hidden;
                       transition: var(--transition-timing);
                       z-index: 10;
                       color: var(--text_color_white);
                     }
                     .card.active > .card-content {
                       inset: 20px;
                       top: auto;
                       color: var(--text_color_white);
                     }
                     
                     .card-content * {
                       transition: var(--transition-timing);
                     }
                     
                     .card-content > .profile-image {
                       min-width: 50px;
                       max-width: 50px;
                       height: 50px;
                       border: 1px solid white;
                       display: flex;
                       justify-content: center;
                       align-items: center;
                       border-radius: 50%;
                       overflow: hidden;
                     }
                     .card.active .profile-image {
                       border: 1px solid rgb(110, 252, 205);
                     }
                     .profile-image > svg {
                       stroke: #fefefe;
                     }
                     .card.active .profile-image > svg {
                       stroke: rgb(110, 252, 205);
                     }
                     
                     .card-content > .title {
                       white-space: pre;
                       margin-left: 10px;
                       translate: 0 100%;
                       opacity: 0;
                       transition-delay: 0.3s;
                     }
                     .card.active .title {
                       opacity: 1;
                       translate: 0 0;
                     }
                     
                     .card > .backdrop {
                       position: absolute;
                       left: 0;
                       right: 0;
                       bottom: 0;
                       height: 100px;
                       z-index: 0;
                       background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));
                     }
                     `;
      document.head.appendChild(styleSheet);

      container.addEventListener("click", (e) => {
        const target = e.target.closest(".card");

        if (!target) return;

        container.querySelectorAll(".card").forEach((card) => {
          card.classList.remove("active");
        });

        target.classList.add("active");
      });
    } else if (selectedCheckboxValue === "Section Soon") {
      newSection.style.display = "flex";
      newSection.classList.add("container_soon");

      newSection.style.justifyContent = "center";
      newSection.style.height = "70vh";
      newSection.style.alignItems = "center";
      newSection.style.flexDirection = "column";

      // Create a <style> element
      const style = document.createElement("style");
      style.id = selectedCheckboxValue;
      // Set the CSS rules as text content
      style.textContent = `
       .container_soon {
         display: flex;
         row-gap: 15px;
         align-items: center;
         justify-content: center;
         flex-direction: column;
         height: 100vh;
         width: 100%;
         overflow: hidden;
         background-size: cover;
       }
       
       .container_soon header {
         z-index: 1;
         font-size: 60px;
         color: var(--text_color_white);
         font-weight: 600;
         text-align: center;
       }
       .container_soon p {
         font-size: 16px;
         font-weight: 400;
         color: var(--text_color_white);
         max-width: 550px;
         text-align: center;
         z-index: 1;
       }
       .container_soon .time-content {
         display: flex;
         z-index: 1;
         column-gap: 30px;
         align-items: center;
       }
       .time-content .time {
         display: flex;
         align-items: center;
         flex-direction: column;
       }
       .time .number,
       .time .text {
         font-weight: 500;
         color: var(--text_color_white);
       }
       .time .number {
         font-size: 40px;
       }
       .time .text {
         text-transform: capitalize;
         font-size: 12px;
       }
       
       @media screen and (max-width: 300px) {
         .container_soon header {
           font-size: 50px;
         }
       }
       `;

      // Append the <style> element to the <head> of the document
      document.head.appendChild(style);

      // Create the image element

      newSection.style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(" + type_banner_hero[number_pos] + ")";


      // Create the header element
      const header = document.createElement("header");
      header.textContent = "Page bientôt disponible";
      header.classList.add("selection_div_text")
      // Create the paragraph element
      const paragraph = document.createElement("p");
      paragraph.textContent =
        "Notre site est en train de se construire. Nous travaillons dur pour délivrer notre site internet et j'espère vous serez prêt lors de notre ouverture.";
      paragraph.classList.add("selection_div_text")
      // Create the time-content div
      const timeContent = document.createElement("div");
      timeContent.className = "time-content";

      const daysDiv = document.createElement("div");
      daysDiv.classList.add("time", "days");
      const daysNumberSpan = document.createElement("span");
      daysNumberSpan.classList.add("number");
      daysNumberSpan.textContent = "00";
      const daysTextSpan = document.createElement("span");
      daysTextSpan.classList.add("text");
      daysTextSpan.textContent = "days";
      daysDiv.appendChild(daysNumberSpan);
      daysDiv.appendChild(daysTextSpan);
      timeContent.appendChild(daysDiv);

      // Créer le div pour les heures
      const hoursDiv = document.createElement("div");
      hoursDiv.classList.add("time", "hours");
      const hoursNumberSpan = document.createElement("span");
      hoursNumberSpan.classList.add("number");
      hoursNumberSpan.textContent = "00";
      const hoursTextSpan = document.createElement("span");
      hoursTextSpan.classList.add("text");
      hoursTextSpan.textContent = "hours";
      hoursDiv.appendChild(hoursNumberSpan);
      hoursDiv.appendChild(hoursTextSpan);
      timeContent.appendChild(hoursDiv);

      // Créer le div pour les minutes
      const minutesDiv = document.createElement("div");
      minutesDiv.classList.add("time", "minutes");
      const minutesNumberSpan = document.createElement("span");
      minutesNumberSpan.classList.add("number");
      minutesNumberSpan.textContent = "00";
      const minutesTextSpan = document.createElement("span");
      minutesTextSpan.classList.add("text");
      minutesTextSpan.textContent = "minutes";
      minutesDiv.appendChild(minutesNumberSpan);
      minutesDiv.appendChild(minutesTextSpan);
      timeContent.appendChild(minutesDiv);

      // Créer le div pour les secondes
      const secondsDiv = document.createElement("div");
      secondsDiv.classList.add("time", "seconds");
      const secondsNumberSpan = document.createElement("span");
      secondsNumberSpan.classList.add("number");
      secondsNumberSpan.textContent = "00";
      const secondsTextSpan = document.createElement("span");
      secondsTextSpan.classList.add("text");
      secondsTextSpan.textContent = "seconds";
      secondsDiv.appendChild(secondsNumberSpan);
      secondsDiv.appendChild(secondsTextSpan);
      timeContent.appendChild(secondsDiv);

      // Append all elements to the body or any desired container


      newSection.appendChild(header);
      newSection.appendChild(paragraph);
      newSection.appendChild(timeContent);




      // Exemple d'utilisation :
      startTimer(11, 2, 2, 9); // Démarrer le timer avec les valeurs initiales

    } else if (selectedCheckboxValue === "Carte") {

      newSection.style.display = "flex";


      newSection.style.justifyContent = "center";
      newSection.style.height = "70vh";
      newSection.style.alignItems = "center";
      newSection.style.flexDirection = "column";

      // Appliquer les styles à la section
      newSection.style.background = 'linear-gradient(180deg, rgba(0, 0, 0, .8), rgba(54, 54, 54, .5)), url("https://images.unsplash.com/photo-1546069901-eacef0df6022?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center center / cover no-repeat';
      newSection.style.color = 'rgba(255, 255, 255, .9)';
      newSection.style.padding = '50px 20px';
      newSection.style.textAlign = 'center';

      // Création du container
      const container = document.createElement('div');
      container.classList.add('container_carte');

      // Appliquer les styles au container
      container.style.maxWidth = '1200px';
      container.style.margin = '0 auto';
      container.style.padding = '20px';

      // Titre de la section
      const title = document.createElement('h2');
      title.classList.add('menu-title');
      title.classList.add('selection_div_text');
      title.textContent = 'Notre Menu';

      // Appliquer les styles au titre
      title.style.fontSize = '2.5rem';
      title.style.marginBottom = '20px';
      title.style.textTransform = 'uppercase';
      title.style.letterSpacing = '2px';
      title.style.color = 'var(--text_color_white)';
      // Description de la section
      const description = document.createElement('p');
      description.classList.add('menu-description');
      description.classList.add('selection_div_text');
      description.textContent = 'Découvrez notre délicieuse carte élaborée à partir des ingrédients les plus frais.';

      // Appliquer les styles à la description
      description.style.fontSize = '1.2rem';
      description.style.marginBottom = '40px';
      description.style.color = 'var(--text_color_white)';

      // Conteneur des éléments du menu
      const menuItemsContainer = document.createElement('div');
      menuItemsContainer.classList.add('menu-items');

      // Appliquer les styles au conteneur des éléments de menu
      menuItemsContainer.style.display = 'flex';
      menuItemsContainer.style.flexWrap = 'wrap';
      menuItemsContainer.style.justifyContent = 'space-around';

      // Liste des éléments de menu (ajoutez vos éléments ici)
      const menuItems = [
        { name: 'Salade César', description: 'Salade fraîche avec poulet grillé, croûtons et parmesan.', price: '9,99 €' },
        { name: 'Soupe du Jour', description: 'Une soupe chaude et réconfortante préparée quotidiennement.', price: '5,99 €' },
        { name: 'Tarte au Citron', description: 'Tarte au citron maison avec une pâte croustillante.', price: '6,99 €' },
        { name: 'Café Gourmand', description: 'Assortiment de mini-desserts accompagnés d’un café.', price: '7,99 €' },
        { name: 'Filet de Saumon', description: 'Saumon grillé servi avec des légumes de saison.', price: '14,99 €' },
        // Ajoutez d'autres éléments de menu si nécessaire
      ];


      // Création et ajout des éléments de menu
      menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        // Appliquer les styles aux éléments de menu
        menuItem.style.background = 'rgba(0, 0, 0, .6)';
        menuItem.style.borderRadius = '8px';
        menuItem.style.margin = '10px';
        menuItem.style.padding = '20px';
        menuItem.style.width = 'calc(33% - 40px)';
        menuItem.style.boxShadow = '0 4px 8px rgba(0, 0, 0, .3)';
        menuItem.style.transition = 'transform .3s';

        // Ajouter l'effet de survol
        menuItem.addEventListener('mouseover', () => {
          menuItem.style.transform = 'translateY(-10px)';
        });
        menuItem.addEventListener('mouseout', () => {
          menuItem.style.transform = 'translateY(0)';
        });

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        // Appliquer les styles au nom de l'élément
        itemName.style.fontSize = '1.5rem';
        itemName.style.marginBottom = '10px';

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        // Appliquer les styles à la description de l'élément
        itemDescription.style.fontSize = '1rem';
        itemDescription.style.marginBottom = '10px';

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('price');
        itemPrice.textContent = item.price;

        // Appliquer les styles au prix de l'élément
        itemPrice.style.fontSize = '1.2rem';
        itemPrice.style.fontWeight = 'bold';
        itemPrice.style.color = 'var(--text_color_black)';

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);

        menuItemsContainer.appendChild(menuItem);
      });

      // Ajout des éléments dans le container
      container.appendChild(title);
      container.appendChild(description);
      container.appendChild(menuItemsContainer);

      // Ajout du container dans la section

      newSection.appendChild(container);

      // Ajout de la section dans le corps du document


    } else if (selectedCheckboxValue === "Réservation") {
      // Create the section element
      newSection.style.display = "flex";


      newSection.style.justifyContent = "center";
      newSection.style.height = "65vh";
      newSection.style.alignItems = "center";
      newSection.style.flexDirection = "column";

      newSection.style.background = 'linear-gradient(180deg, rgba(0, 0, 0, .92), rgba(54, 54, 54, .5) 39.24%, rgba(28, 28, 28, .4)), url(https://images.unsplash.com/photo-1457904297262-2dcf97b883ef?q=80&w=1617&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) center center / cover no-repeat';
      newSection.style.color = 'rgba(255, 255, 255, .6)';

      newSection.style.padding = '15px';



      // Fonction utilitaire pour ajouter des styles
      function addStyles(element, styles) {
        Object.assign(element.style, styles);
      }

      // Créer la section principale pour la réservation


      // Ajouter la section à la page


      // Titre de la section
      const title = document.createElement('h2');
      title.textContent = 'Réservation';
      addStyles(title, {
        marginBottom: '20px',
        textAlign: 'center',
        fontSize: '24px',
        color: 'var(--text_color_white)'
      });
      newSection.appendChild(title);

      // Créer le formulaire
      const form = document.createElement('form');
      form.setAttribute('method', 'post');
      form.classList.add('reservation-form');
      form.style.width = "90%"
      newSection.appendChild(form);

      // Styles pour les champs de formulaire
      const formFieldStyles = {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxSizing: 'border-box',
        fontSize: '16px',
        backgroundColor: 'transparent',
        color: 'var(--text_color_white)'
      };

      // Créer la première rangée de champs
      const row1 = document.createElement('div');
      row1.classList.add('form-row');
      addStyles(row1, {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px'
      });
      form.appendChild(row1);

      // Champ "Nombre de personnes"
      const col1 = document.createElement('div');
      col1.classList.add('form-column');
      addStyles(col1, {
        flex: '1',
        marginRight: '10px'
      });
      row1.appendChild(col1);

      const labelPeople = document.createElement('label');
      labelPeople.setAttribute('for', 'people');
      labelPeople.textContent = 'Nombre de personnes';
      addStyles(labelPeople, { display: 'block', marginBottom: '5px', color: 'var(--text_color_white)' });
      col1.appendChild(labelPeople);

      const selectPeople = document.createElement('select');
      selectPeople.setAttribute('name', 'people');
      selectPeople.setAttribute('id', 'people');
      addStyles(selectPeople, formFieldStyles);
      ['1 personne', '2 personnes', '3 personnes', '4+ personnes'].forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText;
        option.textContent = optionText;
        selectPeople.appendChild(option);
      });
      col1.appendChild(selectPeople);

      // Champ "Date"
      const col2 = document.createElement('div');
      col2.classList.add('form-column');
      addStyles(col2, {
        flex: '1',
        marginLeft: '10px'
      });
      row1.appendChild(col2);

      const labelDate = document.createElement('label');
      labelDate.setAttribute('for', 'date');
      labelDate.textContent = 'Date';
      addStyles(labelDate, { display: 'block', marginBottom: '5px', color: 'var(--text_color_white)' });
      col2.appendChild(labelDate);

      const inputDate = document.createElement('input');
      inputDate.setAttribute('type', 'text');
      inputDate.setAttribute('id', 'date');
      inputDate.setAttribute('placeholder', 'YYYY-MM-DD');
      addStyles(inputDate, formFieldStyles);
      col2.appendChild(inputDate);

      // Champ "Heure"
      const col3 = document.createElement('div');
      col3.classList.add('form-column');
      addStyles(col3, {
        flex: '1',
        marginLeft: '10px'
      });
      row1.appendChild(col3);

      const labelTime = document.createElement('label');
      labelTime.setAttribute('for', 'time');
      labelTime.textContent = 'Heure';
      addStyles(labelTime, { display: 'block', marginBottom: '5px', color: 'var(--text_color_white)' });
      col3.appendChild(labelTime);

      const inputTime = document.createElement('input');
      inputTime.setAttribute('type', 'text');
      inputTime.setAttribute('id', 'time');
      inputTime.setAttribute('placeholder', 'HH:MM');
      addStyles(inputTime, formFieldStyles);
      col3.appendChild(inputTime);

      // Créer la deuxième rangée de champs
      const row2 = document.createElement('div');
      row2.classList.add('form-row');
      addStyles(row2, {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px'
      });
      form.appendChild(row2);

      // Champ "Nom"
      const col4 = document.createElement('div');
      col4.classList.add('form-column');
      addStyles(col4, {
        flex: '1',
        marginRight: '10px'
      });
      row2.appendChild(col4);

      const labelName = document.createElement('label');
      labelName.setAttribute('for', 'name');
      labelName.textContent = 'Nom';
      addStyles(labelName, { display: 'block', marginBottom: '5px', color: 'var(--text_color_white)' });
      col4.appendChild(labelName);

      const inputName = document.createElement('input');
      inputName.setAttribute('type', 'text');
      inputName.setAttribute('id', 'name');
      inputName.setAttribute('placeholder', 'Votre nom complet');
      addStyles(inputName, formFieldStyles);
      col4.appendChild(inputName);

      // Champ "Email"
      const col5 = document.createElement('div');
      col5.classList.add('form-column');
      addStyles(col5, {
        flex: '1',
        marginLeft: '10px'
      });
      row2.appendChild(col5);

      const labelEmail = document.createElement('label');
      labelEmail.setAttribute('for', 'email');
      labelEmail.textContent = 'Email';
      addStyles(labelEmail, { display: 'block', marginBottom: '5px', color: 'var(--text_color_white)' });
      col5.appendChild(labelEmail);

      const inputEmail = document.createElement('input');
      inputEmail.setAttribute('type', 'text');
      inputEmail.setAttribute('id', 'email');
      inputEmail.setAttribute('placeholder', 'Votre adresse email');
      addStyles(inputEmail, formFieldStyles);
      col5.appendChild(inputEmail);

      // Champ "Téléphone"
      const col6 = document.createElement('div');
      col6.classList.add('form-column');
      addStyles(col6, {
        flex: '1',
        marginLeft: '10px'
      });
      row2.appendChild(col6);

      const labelPhone = document.createElement('label');
      labelPhone.setAttribute('for', 'phone');
      labelPhone.textContent = 'Téléphone';
      addStyles(labelPhone, { display: 'block', marginBottom: '5px', color: 'var(--text_color_white)' });
      col6.appendChild(labelPhone);

      const inputPhone = document.createElement('input');
      inputPhone.setAttribute('type', 'text');
      inputPhone.setAttribute('id', 'phone');
      inputPhone.setAttribute('placeholder', 'Votre numéro de téléphone');
      addStyles(inputPhone, formFieldStyles);
      col6.appendChild(inputPhone);

      // Créer la troisième rangée pour le bouton
      const row3 = document.createElement('div');
      row3.classList.add('form-row');
      addStyles(row3, { textAlign: 'center', marginTop: '20px' });
      form.appendChild(row3);

      // Bouton de soumission
      const submitButton = document.createElement('button');
      submitButton.setAttribute('type', 'submit');
      submitButton.setAttribute('id', 'submit');
      submitButton.textContent = 'Soumettre';
      addStyles(submitButton, {
        backgroundColor: '#007bff',
        border: 'none',
        color: 'var(--text_color_white)',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px'
      });
      row3.appendChild(submitButton);

      // Créer un div pour le message de confirmation
      const confirmationMessage = document.createElement('div');
      confirmationMessage.setAttribute('id', 'confirmationMessage');
      addStyles(confirmationMessage, {
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '18px',
        color: '#28a745'
      });
      newSection.appendChild(confirmationMessage);
    }

    function startTimer(seconds, minutes, hours, days) {
      let timeFunction; // Déclare la variable pour stocker l'ID de l'intervalle 
      clearInterval(timeFunction); // Arrête le timer précédent s'il y en a un

      let secValue = seconds,
        minValue = minutes,
        hourValue = hours,
        dayValue = days;

      timeFunction = setInterval(() => {
        secValue--;

        if (secValue === 0) {
          minValue--;
          secValue = 60;
        }
        if (minValue === 0) {
          hourValue--;
          minValue = 60;
        }
        if (hourValue === 0) {
          dayValue--;
          hourValue = 24;
        }

        if (dayValue === 0) {
          clearInterval(timeFunction);
        }
        document.querySelector(".time.seconds .number").textContent =
          secValue < 10 ? `0${secValue}` : secValue;
        document.querySelector(".time.minutes .number").textContent =
          minValue < 10 ? `0${minValue}` : minValue;
        document.querySelector(".time.hours .number").textContent =
          hourValue < 10 ? `0${hourValue}` : hourValue;
        document.querySelector(".time.days .number").textContent =
          dayValue < 10 ? `0${dayValue}` : dayValue;
      }, 1000); //1000ms = 1s
    }
    // Ajouter du contenu ou d'autres propriétés à la nouvelle section si nécessaire

    // Ajouter la nouvelle section au corps du document

    return newSection
  }
  function card_create() {
    const body = document.querySelector("body");
    const card_i = document.querySelector(".card_index");
    if (card_i) {

    } else {
      const card = document.createElement("div");
      card.classList.add("card_index");
      card.style.transform = "translateX(500px)";
      body.appendChild(card);
      setTimeout(() => {
        card.style.transform = "translateX(0px)";
      }, 100);
    }




  }
  function bar() {
    const header = document.querySelector("header");
    const body_index = document.querySelector(".body_index");
    const nav_bar_vert = document.querySelector(".sidebar");
    const edit_bar = document.querySelector(".edit_bar");
    const icon_select = document.querySelector(".bx-navigation");
    const icon_generate = document.querySelector(".generate_bar");
    const icon_plus = document.querySelector(".plus_edit_bar");
    const icon_moins = document.querySelector(".moins_edit_bar");
    const reglage_zoom = document.querySelector(".reglage_zoom");

    const icon_up = document.querySelector(".bx-chevron-up");
    const icon_down = document.querySelector(".bx-chevron-down");
    const Up = document.querySelector(".up");
    const down = document.querySelector(".down");

    elementText()
    function elementText() {
      const element_text = body_index.querySelectorAll(".selection_div_text");
      element_text.forEach((text) => {
        setTimeout(() => {
          // Récupérer le style actuel de l'élément
          const currentDisplay = window.getComputedStyle(text).display;
          const currentWidth = window.getComputedStyle(text).width;
          const currentHeight = window.getComputedStyle(text).height;
          // Si le style actuel est "block", le changer en "inline-block", sinon le conserver
          text.style.display = currentDisplay === 'block' ? 'inline-block' : currentDisplay;
          text.style.width = currentWidth;
          text.style.height = currentHeight;
          text.style.position = "relative";
        }, 1000);
      });
    }
    divText()
    function divText() {
      const div_text = document.querySelectorAll(".selection_div_text");
      div_text.forEach((div_text_select) => {
        let isEditing = false;
        let previousText = "";
        div_text_select.addEventListener("click", (event) => {
          event.stopPropagation();
          resetHeader();
          resetLayout_div_text()
          resetCards();
          reset_nav_bar();
          if (!isEditing) {
            // Ajouter un fond sombre autour du texte
            div_text_select.classList.add("select_div_text");
            const blur_and_darklight = document.createElement("div");
            blur_and_darklight.classList.add("dark_text");
            div_text_select.appendChild(blur_and_darklight);
            const point_before = document.createElement("div");
            point_before.classList.add("point");
            point_before.classList.add("before");
            blur_and_darklight.appendChild(point_before);
            const point_after = document.createElement("div");
            point_after.classList.add("point");
            point_after.classList.add("after");
            blur_and_darklight.appendChild(point_after);
            // Stockez le texte actuel pour une utilisation ultérieure
            previousText = div_text_select.textContent.trim();
            isEditing = true;
          } else if (isEditing) {
            const computedWeight = window.getComputedStyle(div_text_select).fontWeight;
            const computedSize = window.getComputedStyle(div_text_select).fontSize;
            const computedSpacing = window.getComputedStyle(div_text_select).wordSpacing;
            const computedColor = window.getComputedStyle(div_text_select).color;
            const computedJustify = window.getComputedStyle(div_text_select).justifyContent;
            const computedFontFamilly = window.getComputedStyle(div_text_select).fontFamily;
            // Créez un champ d'édition de texte et pré-remplissez-le avec le texte actuel
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.style.fontWeight = computedWeight;
            inputField.style.fontSize = computedSize;
            inputField.style.wordSpacing = computedSpacing;
            inputField.style.color = computedColor;
            inputField.style.fontFamily = computedFontFamilly;
            inputField.style.textAlign = computedJustify;
            inputField.classList.add("editable_text");
            inputField.value = previousText;
            div_text_select.textContent = "";
            div_text_select.appendChild(inputField);
            inputField.focus();
            // Lorsque le champ de texte est édité, mettez à jour le texte dans la div
            inputField.addEventListener("blur", () => {
              previousText = inputField.value.trim();
              div_text_select.textContent = previousText;
              isEditing = false;
            });
          }
          const point_before = div_text_select.querySelector(".point.before")
          const point_after = div_text_select.querySelector(".point.after")
          // Sélectionnez les éléments .dark_text et leurs pseudo-éléments ::before et ::after
          // Variable pour stocker l'état du déplacement
          let isResizing = false;
          let startY;
          let startX;
          let MIN_SECTION_WIDTH = 500;
          let MIN_SECTION_HEIGHT = 100;
          if (point_before) {
            // Gestionnaire d'événement pour le redimensionnement vertical vers le haut
            point_before.addEventListener("mousedown", (event) => {
              event.preventDefault();
              isResizing = true;
              startY = event.clientY;
            });
          }
          if (point_after) {
            // Gestionnaire d'événement pour le redimensionnement vertical vers le bas
            point_after.addEventListener("mousedown", (event) => {
              event.preventDefault();
              isResizing = true;
              startY = event.clientY;
            });
          }
          // Gestionnaire d'événement pour le déplacement de la souris lors du redimensionnement
          document.addEventListener("mousemove", (event) => {
            if (isResizing) {
              const sectionWidth = div_text_select.offsetWidth;
              const sectionHeight = div_text_select.offsetHeight;
              const deltaX = event.clientX - startX;
              const deltaY = event.clientY - startY;
              const newWidth = sectionWidth + deltaX;
              const newHeight = sectionHeight + deltaY;
              // Vérifiez si les nouvelles dimensions ne dépassent pas une certaine limite
              if (newWidth >= MIN_SECTION_WIDTH && newHeight >= MIN_SECTION_HEIGHT) {
                div_text_select.style.width = `${newWidth}px`;
                div_text_select.style.height = `${newHeight}px`;
                // Déplacez le point avant vers le haut et la gauche si la section est redimensionnée dans ces directions
                if (deltaX < 0) {
                  div_text_select.style.left = `${parseFloat(div_text_select.style.left) + deltaX}px`;
                }
                if (deltaY < 0) {
                  div_text_select.style.top = `${parseFloat(div_text_select.style.top) + deltaY}px`;
                }
              }
              startX = event.clientX;
              startY = event.clientY;
            }
          });
          // Gestionnaire d'événement pour arrêter le redimensionnement
          document.addEventListener("mouseup", () => {
            isResizing = false;
          });
        });
      });
    }
    section()
    function section() {
      const sections = body_index.querySelectorAll("section");
      // Gestionnaire d'événement pour la sélection d'une section
      sections.forEach((section) => {
        section.addEventListener("click", () => {
          resetHeader();
          resetLayout_div_text()
          resetLayout(); // Réinitialiser la mise en page
          resetCards();
          reset_nav_bar();
          section.classList.add("select");
          section.style.position = "relative";
          body_index.style.cursor = "auto";
          down.style.display = "flex";
          Up.style.display = "flex";
          const sectionId = section.id; // Récupérer l'ID de la section cliquée
          const blur_and_darklight = document.createElement("div");
          blur_and_darklight.classList.add("dark");
          section.appendChild(blur_and_darklight);
          const point_before = document.createElement("div");
          point_before.classList.add("point");
          point_before.classList.add("before");
          blur_and_darklight.appendChild(point_before);
          const point_after = document.createElement("div");
          point_after.classList.add("point");
          point_after.classList.add("after");
          blur_and_darklight.appendChild(point_after);
          // Variable pour stocker l'état du déplacement
          let isResizing = false;
          let startY;
          let MIN_SECTION_HEIGHT = 100;
          // Gestionnaire d'événement pour le redimensionnement vertical vers le haut
          point_before.addEventListener("mousedown", (event) => {
            event.preventDefault();
            if (!section.previousElementSibling) return; // Empêcher le redimensionnement de la première section
            isResizing = true;
            startY = event.clientY;
          });
          // Gestionnaire d'événement pour le redimensionnement vertical vers le bas
          point_after.addEventListener("mousedown", (event) => {
            event.preventDefault();
            if (!section.nextElementSibling) return; // Empêcher le redimensionnement de la dernière section
            isResizing = true;
            startY = event.clientY;
          });
          // Gestionnaire d'événement pour le déplacement de la souris lors du redimensionnement
          document.addEventListener("mousemove", (event) => {
            if (isResizing) {
              const sectionHeight = section.offsetHeight;
              const deltaY = event.clientY - startY;
              const newHeight = sectionHeight + deltaY;
              // Vérifiez si la nouvelle hauteur ne dépasse pas une certaine limite
              if (newHeight >= MIN_SECTION_HEIGHT) {
                section.style.height = `${newHeight}px`;
                // Déplacez le point avant vers le haut si la section est redimensionnée vers le haut
                if (deltaY < 0) {
                  section.style.top = `${parseFloat(section.style.top) + deltaY}px`;
                }
              }
              startY = event.clientY;
            }
          });

          // Gestionnaire d'événement pour arrêter le redimensionnement
          document.addEventListener("mouseup", () => {
            isResizing = false;
          });
        });
        // Gestionnaire d'événement pour le survol d'une section
        section.addEventListener("mouseout", () => {
          if (!section.classList.contains("select")) {
            section.style.cursor = "auto";
          }
        });
        section.addEventListener("mousemove", () => {
          if (section.classList.contains("select")) {
            section.style.cursor = "move";
          }
          else { section.style.cursor = "crosshair"; }
        });
        // Variable pour stocker l'état du déplacement
        // Gestionnaire d'événement pour le survol d'une section
        section.addEventListener("mouseover", () => {
          if (section.classList.contains("select")) {
            section.style.cursor = "move";
          }
        });
      });
    }
    header.addEventListener("click", () => {
      resetHeader(); // Réinitialiser la mise en page
      resetCards();
      reset_nav_bar();
      const value_link_header = header.querySelectorAll(".nav_links li a")
      header.classList.add("select");
      header.style.position = "relative";
      body_index.style.cursor = "auto";
      const blur_and_darklight = document.createElement("div");
      blur_and_darklight.classList.add("dark");
      header.appendChild(blur_and_darklight);
      const point_before = document.createElement("div");
      point_before.classList.add("point");
      point_before.classList.add("before");
      blur_and_darklight.appendChild(point_before);
      const point_after = document.createElement("div");
      point_after.classList.add("point");
      point_after.classList.add("after");
      blur_and_darklight.appendChild(point_after);
      if (header.id === "background_color") {
        const font_family = localStorage.getItem("font_family");
        const menuCounterScore = localStorage.getItem("menuCounterScore");
        card_create();
        const card = document.querySelector(".card_index");
        const title_logo = document.createElement("div");
        title_logo.textContent = "Choissisez votre logo";
        card.appendChild(title_logo);
        const br_6 = document.createElement("br");
        card.appendChild(br_6);
        const input_img_logo = document.createElement("input");
        input_img_logo.type = "file";
        input_img_logo.id = "fileInput";
        input_img_logo.style.display = "none";
        card.appendChild(input_img_logo);
        const img_logo = document.createElement("img");
        img_logo.src = savedLogo;
        img_logo.classList.add("logo_change");
        card.appendChild(img_logo);
        img_logo.addEventListener("click", function () {
          input_img_logo.click();
        });
        input_img_logo.addEventListener("change", function (event) {
          const file = event.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
              const savedLogo = e.target.result;
              // Taille approximative des données en Base64
              const estimatedFileSize = Math.ceil(savedLogo.length * 0.75); // Base64 encodé est ~33% plus grand que les données binaires

              // Estimation de la taille actuelle utilisée par le localStorage
              const totalStorage = localStorage.length ? Object.entries(localStorage).reduce((total, [key, value]) => total + key.length + value.length, 0) : 0;

              // Taille totale disponible pour le stockage


              const MAX_LOCAL_STORAGE_SIZE = checkLocalStorageCapacity();

              // Vérifiez si la taille totale dépassera la limite
              if (totalStorage + estimatedFileSize > MAX_LOCAL_STORAGE_SIZE) {
                alert("Le fichier du logo est trop volumineux.");
                logoInput.value = ""
              } else {
                // Enregistrez le contenu du fichier dans le localStorage
                try {

                  localStorage.setItem("selectedLogo", savedLogo);
                  // Utilisez savedLogo pour la sauvegarde ou d'autres manipulations

                  img_logo.src = savedLogo;
                  alert("Le logo est sauvegardé avec succès.");
                } catch (e) {
                  alert("Erreur lors de l'enregistrement du fichier : " + e.message);
                }
              }

            };
            reader.readAsDataURL(file);
          }

        });
        const br_7 = document.createElement("br");
        card.appendChild(br_7);
        const Number_title = document.createElement("div");
        Number_title.textContent = "Choissisez votre nombre de lien";
        card.appendChild(Number_title);
        const br13 = document.createElement("br");
        card.appendChild(br13);
        const counter_img = document.createElement("div");
        counter_img.classList.add("counter_img");
        card.appendChild(counter_img);
        const btn_minus = document.createElement("button");
        counter_img.appendChild(btn_minus);
        const i_minus = document.createElement("i");
        i_minus.classList.add("bx");
        i_minus.classList.add("bx-minus");
        btn_minus.appendChild(i_minus);
        const input_counter = document.createElement("input");
        input_counter.classList.add("input_counter");
        input_counter.type = "text";
        input_counter.value = value_link_header.length;
        counter_img.appendChild(input_counter);
        const btn_plus = document.createElement("button");
        counter_img.appendChild(btn_plus);
        const i_plus = document.createElement("i");
        i_plus.classList.add("bx");
        i_plus.classList.add("bx-plus");
        btn_plus.appendChild(i_plus);
        let score = value_link_header.length;
        btn_plus.addEventListener("click", function () {
          score++;
          input_counter.value = score;
        });
        btn_minus.addEventListener("click", () => {
          if (score > 1) {
            score--;
            input_counter.value = score;
          }
        });

        value_link_header.forEach((value, i) => {
          const br_4 = document.createElement("br");
          card.appendChild(br_4);
          const name_title = document.createElement("div");
          name_title.textContent = "Personnalisez le nom du lien";
          card.appendChild(name_title);
          const br12 = document.createElement("br");
          card.appendChild(br12);
          const input_name_custom = document.createElement("input");
          input_name_custom.classList.add("input_name_custom");
          input_name_custom.type = "text";
          input_name_custom.id = "input_link_" + (i + 1);
          input_name_custom.placeholder = value.textContent;
          input_name_custom.value = value.textContent;
          card.appendChild(input_name_custom);
        })
        const br_20 = document.createElement("br");
        card.appendChild(br_20);
        // input name
        const savedSiteName = localStorage.getItem("siteName");
        const name_custom = document.createElement("div");
        name_custom.classList.add("name_custom");
        name_custom.textContent = "Changer le nom";
        card.appendChild(name_custom);
        const br_13 = document.createElement("br");
        card.appendChild(br_13);
        const input_name_site_custom = document.createElement("input");
        input_name_site_custom.classList.add("input_name_site_custom");
        input_name_site_custom.value = savedSiteName;
        input_name_site_custom.type = "text";
        card.appendChild(input_name_site_custom);
        // choix font-familly
        // Création de la div principale
        const fontHeroDiv = document.createElement("div");
        fontHeroDiv.classList.add("font_hero");
        // Création du titre
        const title = document.createElement("h3");
        title.textContent = "Selectionner votre police pour votre site";
        fontHeroDiv.appendChild(title);
        // Création de la section de sélection
        const selectFontHeroSection = document.createElement("div");
        selectFontHeroSection.classList.add("select-font_hero_section");
        fontHeroDiv.appendChild(selectFontHeroSection);
        // Création du bouton de sélection
        const selectBtn = document.createElement("div");
        selectBtn.classList.add("select-btn");
        selectFontHeroSection.appendChild(selectBtn);
        const selectBtnText = document.createElement("span");
        selectBtnText.classList.add("sBtn-text_hero_section");
        selectBtnText.textContent = font_family;
        selectBtn.appendChild(selectBtnText);
        const selectBtnIcon = document.createElement("i");
        selectBtnIcon.classList.add("bx", "bx-chevron-down");
        selectBtn.appendChild(selectBtnIcon);
        // Création de la liste des options
        const optionsList = document.createElement("ul");
        optionsList.classList.add("options");
        selectFontHeroSection.appendChild(optionsList);
        // Ajout des différentes options à la liste
        const fontOptions = [
          "Montserrat",
          "Poppins",
          "Agbalumo",
          "Playpen+Sans",
          "Playfair+Display",
          "Kanit",
          "Anton",
          "Dancing+Script",
          "Lobster",
          "Pacifico",
          "Space+Grotesk",
          "Comfortaa",
          "Nosifer",
          "Black+Ops+One",
          "Lilita+One",
          "Pixelify+Sans",

        ];
        fontOptions.forEach((option, index) => {
          const linkElement = document.createElement("link");
          linkElement.rel = "stylesheet";
          linkElement.id = "font_provisoire";
          linkElement.href = `https://fonts.googleapis.com/css2?family=${option}:wght@400;500&display=swap`;
          document.head.appendChild(linkElement);
          const listItem = document.createElement("li");
          listItem.classList.add("option");
          const optionText = document.createElement("span");
          optionText.classList.add("option-text");
          optionText.textContent = option;

          optionText.style.fontFamily = option.replace(/\+/g, " "); // Replace + with space for display;

          listItem.appendChild(optionText);
          optionsList.appendChild(listItem);
        });
        // Ajout de la div principale au document body ou à un conteneur approprié
        card.appendChild(fontHeroDiv);
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

            optionFont_hero_section.classList.remove("active");
          });
        });
        const br_19 = document.createElement("br");
        card.appendChild(br_19);
        // btn connected
        const title_btn_co = document.createElement("div");
        title_btn_co.textContent = "Choissisez votre bouton ";
        card.appendChild(title_btn_co);
        const br_8 = document.createElement("br");
        card.appendChild(br_8);
        const br_9 = document.createElement("br");
        card.appendChild(br_9);
        // button fixed header ?
        const fixed = document.createElement("div");
        fixed.classList.add("fixed");
        fixed.textContent = "Voulez-vous que votre menu soit fixé ?";
        const br_2 = document.createElement("br");
        card.appendChild(br_2);
        const label_fixed = document.createElement("label");
        label_fixed.classList.add("switch");
        const input_label_fixed = document.createElement("input");
        input_label_fixed.classList.add("checkbox");
        input_label_fixed.type = "checkbox";
        input_label_fixed.id = "input_label_fixed";
        const slider_fixed = document.createElement("div");
        slider_fixed.classList.add("slider");
        card.appendChild(fixed);
        card.appendChild(label_fixed);
        label_fixed.appendChild(input_label_fixed);
        label_fixed.appendChild(slider_fixed);
        const br_3 = document.createElement("br");
        card.appendChild(br_3);
        if (localStorage.getItem("isChecked") === "true") {
          input_label_fixed.checked = true;
          header.style.position = "fixed";
          header.style.width = "90%";
        }
        // Ajouter un gestionnaire pour la case à cocher
        input_label_fixed.addEventListener("click", function () {
          if (input_label_fixed.checked) {
            localStorage.setItem("isChecked", "true");
            header.style.position = "fixed";
            header.style.width = "90%";
          } else {
            localStorage.setItem("isChecked", "false");
            header.style.position = ""; // Définissez ici la valeur par défaut souhaitée
            header.style.width = "100%";
          }
        });
        //fond header
        const computedStyle = window.getComputedStyle(header);
        // code fond
        const colorfond = computedStyle.getPropertyValue("background");
        const fond_card = document.createElement("div");
        fond_card.textContent = "Fond";
        card.appendChild(fond_card);
        const br12 = document.createElement("br");
        card.appendChild(br12);
        const input_fond = document.createElement("div");
        input_fond.classList.add("input_fond");
        card.appendChild(input_fond);
        const preview_fond_card = document.createElement("div");
        preview_fond_card.classList.add("preview_fond_card");
        if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {
          preview_fond_card.style.background = colorfond; // Utiliser la valeur récupérée ici
        } else {
          preview_fond_card.style.backgroundImage = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici
        }
        input_fond.appendChild(preview_fond_card);
        const input_fond_card = document.createElement("input");
        input_fond_card.type = "text";
        input_fond_card.placeholder = "#XXX, Lien";
        input_fond_card.classList.add("input_fond_card");
        if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {
          input_fond_card.value = colorfond; // Utiliser la valeur récupérée ici
        } else {
          if (colorfond === "rgba(0, 0, 0, 0)") {
            input_fond_card.value = "transparent"; // Utiliser la valeur récupérée ici
          } else {
            input_fond_card.value = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici
          }
        }
        input_fond.appendChild(input_fond_card);
        const btn_img_fond_card = document.createElement("button");
        btn_img_fond_card.type = "file";
        btn_img_fond_card.classList.add("btn_img_fond_card");
        input_fond.appendChild(btn_img_fond_card);
        const icon_btn_img = document.createElement("i");
        icon_btn_img.classList.add("bx");
        icon_btn_img.classList.add("bx-image");
        btn_img_fond_card.appendChild(icon_btn_img);
        const br11 = document.createElement("br");
        card.appendChild(br11);
        // custom html
        const html_custom = document.createElement("div");
        html_custom.classList.add("html_custom");
        html_custom.textContent = "Personnalisez le HTML";
        card.appendChild(html_custom);
        const br5 = document.createElement("br");
        card.appendChild(br5);
        const input_html_custom = document.createElement("textarea");
        input_html_custom.classList.add("input_html_custom");

        card.appendChild(input_html_custom);
        //custom css
        const br6 = document.createElement("br");
        card.appendChild(br6);
        const css_custom = document.createElement("div");
        css_custom.textContent = "Personnalisez le CSS";
        card.appendChild(css_custom);
        const input_css_custom = document.createElement("textarea");
        input_css_custom.classList.add("input_css_custom");

        const br7 = document.createElement("br");
        card.appendChild(br7);
        card.appendChild(input_css_custom);
        //code html pour html et css
        // custom html
        const br_5 = document.createElement("br");
        card.appendChild(br_5);
        const html_custom_forhtml = document.createElement("div");
        html_custom_forhtml.classList.add("html_custom_forhtml");
        html_custom_forhtml.textContent =
          "Personnalisez le HTML pour la page entière";
        card.appendChild(html_custom_forhtml);
        const br15 = document.createElement("br");
        card.appendChild(br15);
        const input_html_custom_forhtml = document.createElement("textarea");
        input_html_custom_forhtml.classList.add("input_html_custom_forhtml");

        card.appendChild(input_html_custom_forhtml);
        //custom css
        const br16 = document.createElement("br");
        card.appendChild(br16);
        const css_custom_forhtml = document.createElement("div");
        css_custom_forhtml.textContent =
          "Personnalisez le CSS pour la page entière";
        card.appendChild(css_custom_forhtml);
        const input_css_custom_forhtml = document.createElement("textarea");
        input_css_custom_forhtml.classList.add("input_css_custom_forhtml");

        const br17 = document.createElement("br");
        card.appendChild(br17);
        card.appendChild(input_css_custom_forhtml);
        // btn save
        const br8 = document.createElement("br");
        card.appendChild(br8);
        const div_save_notext = document.createElement("div");
        div_save_notext.classList.add("div_to_save");
        card.appendChild(div_save_notext);
        const btn_save_notext = document.createElement("button");
        btn_save_notext.textContent = "Sauvegarder";

        div_save_notext.classList.add("btn_save_notext");
        div_save_notext.appendChild(btn_save_notext);
        btn_save_notext.addEventListener("click", function () {
          const savedLogo = localStorage.getItem("selectedLogo");
          if (savedLogo) {
            const logo_img = document.querySelector(".logo_img");
            logo_img.src = savedLogo;

            const link = document.querySelector("link[rel~='icon']");
            if (link) {
              link.href = savedLogo; // Remplacez savedLogo par l'URL de votre nouvel icône
            }
          }
          const font_family = localStorage.getItem("font_family");
          if (font_family) {
            const selectedBackground_font_family = document.querySelector(".select-font_hero_section .select-btn .sBtn-text_hero_section");
            if (selectedBackground_font_family) {
              const font_family = selectedBackground_font_family.textContent;
              localStorage.setItem("font_family", font_family);

              const existingLinks = document.querySelectorAll('link[rel="stylesheet"][href^="https://fonts.googleapis.com"]');
              existingLinks.forEach((link) => {
                link.remove();
              });

              const linkElement = document.createElement("link");
              linkElement.rel = "stylesheet";
              linkElement.href = `https://fonts.googleapis.com/css2?family=${font_family}:wght@400;500&display=swap`;
              document.body.style.cssText = `font-family: ${font_family.replace(
                /\+/g,
                " "
              )}, sans-serif !important`;
              // Ajouter l'élément de lien à la tête du document
              document.head.appendChild(linkElement);

            }
          } else {
            const selectedBackground_font_family = document.querySelector(".select-font_hero_section .select-btn .sBtn-text_hero_section");
            if (selectedBackground_font_family) {
              const font_family = selectedBackground_font_family.textContent;
              localStorage.setItem("font_family", font_family);

              const existingLinks = document.querySelectorAll('link[rel="stylesheet"][href^="https://fonts.googleapis.com"]');
              existingLinks.forEach((link) => {
                link.remove();
              });

              const linkElement = document.createElement("link");
              linkElement.rel = "stylesheet";
              linkElement.href = `https://fonts.googleapis.com/css2?family=${font_family}:wght@400;500&display=swap`;
              document.body.style.cssText = `font-family: ${font_family.replace(
                /\+/g,
                " "
              )}, sans-serif !important`;
              // Ajouter l'élément de lien à la tête du document
              document.head.appendChild(linkElement);
            }
          }
          const number_img = document.querySelector(".input_counter").value;
          const name_custom =
            document.querySelector(".input_name_site_custom").value;
          const newFond = document.querySelector(".input_fond_card").value;
          const selectedBackground_font_family = document.querySelector(
            ".select-font_hero_section .select-btn .sBtn-text_hero_section"
          ).textContent;
          const newHTML = document.querySelector(".input_html_custom").value;
          const newCSS = document.querySelector(".input_css_custom").value;
          const newHTML_forhtml = document.querySelector(
            ".input_html_custom_forhtml"
          ).value;
          const newCSS_forhtml = document.querySelector(
            ".input_css_custom_forhtml"
          ).value;
          const length_name = document.querySelectorAll(
            ".card_index input.input_name_custom"
          );
          length_name.forEach((input_name, i) => {

            if (input_name) {
              const name = input_name.value;
              if (name) {
                const nav_links = document.querySelector(".nav_links");
                const li = document.getElementById("li_" + (i + 1));
                const list_li = document.querySelectorAll(".list li");

                list_li[i].querySelector("a").textContent = name

                const a = li.querySelector("a");
                a.textContent = name;
              }
            }
          })




          if (newHTML === "" && newCSS === "") {
            resetLayout();
            resetHeader();
            resetCards();
          } else if (newHTML_forhtml === "" && newCSS_forhtml === "") {
            resetLayout();
            resetHeader();
            resetCards();
          } else if (!newHTML === "" && newCSS === "") {
            selectedSection.style.cssText += newCSS;
            selectedSection.innerHTML += newHTML;

            resetLayout();
            resetHeader();
            resetCards();
            saved_create_notif();
          } else if (!newHTML_forhtml === "" && newCSS_forhtml === "") {
            const html = document.querySelector("html");
            html.style.cssText += newCSS_forhtml;
            html.innerHTML += newHTML_forhtml;
            let styleElement = document.querySelector("style");
            // Ajoutez des règles CSS à l'élément <style>
            styleElement.textContent = newCSS_forhtml;
            resetHeader();
            resetLayout();
            resetCards();
            saved_create_notif();
          }
          if (number_img === "") {
            resetLayout();
            resetCards();
            resetHeader();
          } else {
            resetLayout();
            resetHeader();
            resetCards();
            saved_create_notif();

            let nb_real = localStorage.getItem("menuCounterScore");
            const diff_nb = number_img - nb_real;
            localStorage.setItem("menuCounterScore", number_img);


            const nav_links = document.querySelector(".nav_links");
            const list = document.querySelector(".list");
            const number_pos = type_site.indexOf(selectedSiteType)
            const splited_lien_site = link_header_thème_site[number_pos].split("¤")
            if (diff_nb > 0) {
              for (let i = 0; i < diff_nb; i++) {
                const li = document.createElement("li");
                nb_real++;
                li.id = "li_" + nb_real;
                nav_links.appendChild(li);
                const a = document.createElement("a");
                a.href = "#";
                a.textContent = splited_lien_site[(Number(number_img) + i)];
                li.appendChild(a);
                const li2 = document.createElement("li");

                list.appendChild(li2);
                const a2 = document.createElement("a");
                a2.href = "#";
                a2.textContent = splited_lien_site[(Number(number_img) + i)];
                li2.appendChild(a2);
              }
            } else if (diff_nb < 0) {
              const allLis = document.querySelectorAll(".nav_links li");
              const allList = document.querySelectorAll(".list li");
              const lastIndex = allLis.length - 1;
              for (let i = 0; i < Math.abs(diff_nb); i++) {
                if (allLis.length > 0) {
                  allLis[lastIndex - i].remove();
                }
              }
              const lastIndex2 = allList.length - 1;
              for (let i = 0; i < Math.abs(diff_nb); i++) {
                if (allList.length > 0) {
                  allList[lastIndex2 - i].remove();
                }
              }
            }
          }
          if (name_custom === "") {
            resetLayout();
            resetCards();
            resetHeader();
          } else {
            const title = document.querySelector("title");
            title.textContent = name_custom;
            localStorage.setItem("siteName", name_custom);
            resetLayout();
            resetHeader();
            resetCards();
            saved_create_notif();
          }
          if (selectedBackground_font_family === "") {
            resetLayout();
            resetCards();
            resetHeader();
          } else {
            localStorage.setItem(
              "font_family",
              selectedBackground_font_family
            );
            resetLayout();
            resetHeader();
            resetCards();
            saved_create_notif();
          }
          if (newFond === "") {
            resetLayout();
            resetCards();
          } else {
            const img_fond = localStorage.getItem("Img_fond");
            const img_name = localStorage.getItem("img_name");
            if (newFond.startsWith("https")) {
              header.style.background = "url(" + newFond + ")";
              header.style.backgroundSize = "cover";
              header.style.backgroundPosition = "center";
            }
            if (img_fond) {
              if (newFond === img_name) {
                header.style.background = "url(" + img_fond + ")";
                header.style.backgroundSize = "cover";
                header.style.backgroundPosition = "center";
              }
            }
            header.style.background = newFond;

            resetLayout();
            resetCards();
            saved_create_notif();
          }
        });
      }
    });
    if (nav_bar_vert) {
      nav_bar_vert.addEventListener("click", () => {

        reset_nav_bar(); // Réinitialiser la mise en page
        resetCards();
        nav_bar_vert.classList.add("select");


        body_index.style.cursor = "auto";

        const blur_and_darklight = document.createElement("div");
        blur_and_darklight.classList.add("dark");
        nav_bar_vert.appendChild(blur_and_darklight);
        const point_before = document.createElement("div");
        point_before.classList.add("point");
        point_before.classList.add("before");
        blur_and_darklight.appendChild(point_before);
        const point_after = document.createElement("div");
        point_after.classList.add("point");
        point_after.classList.add("after");
        blur_and_darklight.appendChild(point_after);

      });
    }
    // Gestionnaire d'événement pour activer le curseur de sélection
    icon_select.addEventListener("click", () => {
      resetClassActive()
      const select_bar = document.querySelector(".select_bar")
      select_bar.classList.add("active")
      resetLayout();
      resetLayout_div_text();
      reset_nav_bar();
      resetCards();
      resetHeader();
      const body_index = document.querySelector(".body_index")
      body_index.style.cursor = "crosshair";
    });
    function create_generate_bar() {
      const generate_bar_div = document.createElement("div");
      generate_bar_div.classList.add("generate_bar_div")
      const search_container = document.createElement("div");
      search_container.classList.add("search_container")
      const input_generate = document.createElement("div");
      input_generate.classList.add("input_generate")
      input_generate.textContent = "Cliquer pour regénérer"
      const icon_generate_round = document.createElement("i");
      icon_generate_round.classList.add("bx")
      icon_generate_round.classList.add("bxs-magic-wand")


      generate_bar_div.appendChild(search_container)
      search_container.appendChild(input_generate)
      search_container.appendChild(icon_generate_round)
      document.body.appendChild(generate_bar_div)


    }
    function generation() {
      resetClassActive()
      const generate_bar = document.querySelector(".generate_bar")
      generate_bar.classList.add("active")
      const selectedSection = document.querySelector(".select");

      if (selectedSection) {
        const id = selectedSection.id;
        create_generate_bar()

        const icon_generate_round = document.querySelector(".search_container .bxs-magic-wand");


        icon_generate_round.addEventListener("click", () => {
          if (id === "hero") {
            applyGeneratedContent2(selectedSection, id, generatedContent);

          } else if (id === Name_label[0]) {

          } else if (id === Name_label[1]) {
            const randomIndex = Math.floor(Math.random() * personn.length);
            const generatedText_aléa = personn[randomIndex]
            const position = personn.indexOf(generatedText_aléa);
            if (position !== -1) {

              const generatedQuote = citation[position];
              const generatedContent = { text: generatedQuote }; // Créez un objet pour stocker le texte généré
              const generatedContent2 = { text: generatedText_aléa }; // Créez un objet pour stocker le texte généré
              applyGeneratedContent2(selectedSection, id, generatedContent, generatedContent2);
            }
          } else if (id === Name_label[2]) {

          } else if (id === Name_label[3]) {
          } else if (id === Name_label[4]) {
          } else if (id === Name_label[5]) {
          } else if (id === Name_label[6]) {
          } else if (id === Name_label[7]) {
          } else if (id === Name_label[8]) {
          } else if (id === Name_label[9]) {
          } else if (id === Name_label[10]) {
          } else if (id === Name_label[11]) {
          } else if (id === Name_label[12]) {
          } else if (id === Name_label[13]) {
          } else if (id === Name_label[14]) {
          } else if (id === Name_label[15]) {
          } else if (id === Name_label[16]) {
          } else if (id === Name_label[17]) {
          } else if (id === Name_label[18]) {
          } else if (id === Name_label[19]) {
          } else if (id === Name_label[20]) {
          } else if (id === "footer") {




          }

        });
      }
    }
    icon_generate.addEventListener("click", () => {
      generation()
    });
    function generateContent(categoryId) {
      // Définir les règles de génération pour chaque catégorie
      if (categoryId === "Citation") {
        const randomCitationIndex = Math.floor(Math.random() * citation.length);
        const randomPersonIndex = Math.floor(Math.random() * personn.length);

        return {
          h1: citation[randomCitationIndex],
          h4: "-" + personn[randomPersonIndex]
        };
      } else if (categoryId === "Texte + Image") {
        const randomTitleIndex = Math.floor(Math.random() * Title_txtandimg.length);
        const randomTextIndex = Math.floor(Math.random() * Text.length);
        const randomImgIndex = Math.floor(Math.random() * Img.length);

        return {
          h2: Title_txtandimg[randomTitleIndex],
          h6: "-" + Text[randomTextIndex],
          imgSrc: Img[randomImgIndex]
        };
      } else if (categoryId === "Images") {
        const randomImgIndex = Math.floor(Math.random() * Img.length);

        return {
          background: `url("${Img[randomImgIndex]}")`
        };
      }

      // Retourne un objet vide par défaut si la catégorie n'est pas reconnue
      return {};
    }
    function applyGeneratedContent(section, content) {
      // Appliquer le contenu généré à la section
      for (const [key, value] of Object.entries(content)) {
        if (key === "imgSrc") {
          section.querySelector(".img_textand_img").src = value;
        } else if (key === "background") {
          section.style.background = value;
        } else {
          section.querySelector(key).textContent = value;
        }
      }
    }
    function applyGeneratedContent2(section, id, content, content2, content3, content4, content5, content6, content7, content8, content9, content10) {
      // Appliquer le contenu généré à la section
      if (id === "hero") {
        section.style.backgroundImage = "url(" + content.img + ")"
      } else if (id === "Citation") {
        if (content.img) {
          section.style.background = "url(" + content.img.startsWith("https:") + ")" + "center / cover"

        } else {
          section.querySelector("h1").textContent = content.text
          section.querySelector("h4").textContent = "-" + content2.text
        }
      } else if (id === "Texte + Image") {
        if (content.img) {
          section.style.background = "url(" + content.img.startsWith("https:") + ")" + "center / cover"

        } else {
          section.querySelector("h2").textContent = content.text
          section.querySelector("h6").textContent = content2.text
          if (content3) {
            section.querySelector(".div_img").querySelector("img").src = content3.img
          }
        }
      } else if (id === "Nos clients") {
        if (content.img) {
          section.style.background = "url(" + content.img.startsWith("https:") + ")" + "center / cover"

        } else {
          section.querySelector("h2").textContent = content.text

          document.getElementById("text_p_title_block_list1").textContent = content2.text
          document.getElementById("text_p_title_block_list2").textContent = content3.text
          document.getElementById("text_p_title_block_list3").textContent = content4.text
          document.getElementById("text_p_block_list1").textContent = content5.text
          document.getElementById("text_p_block_list2").textContent = content6.text
          document.getElementById("text_p_block_list3").textContent = content7.text

          if (content8) {
            document.getElementById("img1").src = content8.img
            document.getElementById("img2").src = content9.img
            document.getElementById("img3").src = content10.img

          }
        }
      } else if (id === "about") {
        if (content.img) {
          section.style.background = "url(" + content.img.startsWith("https:") + ")" + " center / cover"

        } else {
          section.querySelector("h2").textContent = content.text
          section.querySelector("p").textContent = content2.text
          if (content3) {
            section.style.background = "url(" + content3.img + ")" + "center / cover"
          }
        }
      } else if (id === "contact") {
        if (content.img) {
          section.style.background = "url(" + content.img.startsWith("https:") + ")" + "center / cover"

        } else {
          section.querySelector("h2").textContent = content.text
          section.querySelector("p").textContent = content2.text
          if (content3) {
            section.style.background = "url(" + content3.img + ")" + "center / cover"
          }
        }

      }
    }
    function plus_card() {
      const body_index = document.querySelector(".body_index");
      const sections = body_index.querySelectorAll("section");
      const selectedSection = document.querySelector(".select"); // Rechercher la section avec la classe "select"
      const hero = document.querySelector(".hero");
      if (selectedSection) {
        card_create();
        const card_index = document.querySelector(".card_index");
        const card = document.querySelector(".body_plus");
        const body_edit = document.querySelector(".body_edit");
        if (card || body_edit) {
        } else {
          const card = document.createElement("div");
          card.classList.add("body_plus");
          card_index.appendChild(card);
          const h1_propo = document.createElement("h1");
          h1_propo.textContent = "Choisissez votre section à ajouter";
          card.appendChild(h1_propo);
          const br7 = document.createElement("br");
          card.appendChild(br7);
          let selectedCheckboxValue = null;
          let index = 0;
          //crétaion de choix 
          for (let i = 0; i < 7; i++) {
            const flex_checkbox = document.createElement("div");
            flex_checkbox.classList.add("flex_checkbox");
            card.appendChild(flex_checkbox);
            //ligne
            for (let j = 0; j < 3; j++) {
              const checkbox = document.createElement("div");
              checkbox.classList.add("checkbox-wrapper-16");
              flex_checkbox.appendChild(checkbox);
              const checkbox_wrapper = document.createElement("label");
              checkbox_wrapper.classList.add("checkbox-wrapper");
              checkbox.appendChild(checkbox_wrapper);
              const checkbox_input = document.createElement("input");
              checkbox_input.classList.add("checkbox-input");
              checkbox_input.type = "checkbox";
              checkbox_input.addEventListener("change", function () {
                if (this.checked) {
                  selectedCheckboxValue = Name_label[i * 3 + j];

                  // Désélectionner les autres checkboxes
                  checkbox_inputs.forEach((input) => {
                    if (input !== this) {
                      input.checked = false;
                    }
                  });
                }
              });
              checkbox_wrapper.appendChild(checkbox_input);
              const checkbox_tile = document.createElement("span");
              checkbox_tile.classList.add("checkbox-tile");
              checkbox_wrapper.appendChild(checkbox_tile);
              const checkbox_icon = document.createElement("span");
              checkbox_icon.classList.add("checkbox-icon");
              checkbox_tile.appendChild(checkbox_icon);
              const checkbox_label = document.createElement("span");
              checkbox_label.classList.add("checkbox-label");
              checkbox_label.textContent = Name_label[index];
              checkbox_tile.appendChild(checkbox_label);
              flex_checkbox.appendChild(checkbox);
              index++; // Passer à l'élément suivant de Name_label
            }
          }
          // Sélectionnez tous les inputs de type checkbox
          const checkbox_inputs = document.querySelectorAll(".checkbox-input");
          const div_save = document.createElement("div");
          div_save.classList.add("div_to_save");
          card.appendChild(div_save);
          const btn_save_propo = document.createElement("button");
          btn_save_propo.textContent = "Sauvegarder";
          div_save.appendChild(btn_save_propo);
          //btn save
          btn_save_propo.addEventListener("click", function () {
            if (selectedCheckboxValue) {
              const sections = body_index.querySelectorAll("section");
              let currentIndex = Array.from(sections).indexOf(selectedSection);
              const newSection = Create_newSection(selectedCheckboxValue)

              body_index.appendChild(newSection);

              if (selectedSection === hero) {

                const selectedBackground = localStorage.getItem("selectedBackground");

                if (selectedBackground === "Transparent" || selectedBackground === "Glassmorphisme") {
                  const selectedSection = document.querySelector(".fond_unie");
                  const sections = body_index.querySelectorAll("section");
                  const previousSection = sections[currentIndex + 1];
                  selectedSection.parentNode.insertBefore(
                    newSection,
                    previousSection
                  );
                } else {
                  const selectedSection = document.querySelector(".select"); // Rechercher la section avec la classe "select"
                  const sections = body_index.querySelectorAll("section");
                  const previousSection = sections[currentIndex + 1];
                  selectedSection.parentNode.insertBefore(
                    newSection,
                    previousSection
                  );
                }
              } else {
                const selectedSection = document.querySelector(".select"); // Rechercher la section avec la classe "select"
                const sections = body_index.querySelectorAll("section");
                const previousSection = sections[currentIndex + 1];
                selectedSection.parentNode.insertBefore(
                  newSection,
                  previousSection
                );
              }
              newSection.addEventListener("mousemove", () => {
                if (newSection.classList.contains("select")) {
                  newSection.style.cursor = "move";
                }
                else { newSection.style.cursor = "crosshair"; }
              });
              // Ajouter les gestionnaires d'événements pour la nouvelle section
              newSection.addEventListener("click", () => {
                resetLayout();
                resetCards();
                newSection.classList.add("select");
                newSection.style.position = "relative";
                body_index.style.cursor = "auto";
                down.style.display = "flex";
                Up.style.display = "flex";
                let currentIndex =
                  Array.from(sections).indexOf(selectedSection);
                const sectionId = newSection.id; // Récupérer l'ID de la section cliquée
                const blur_and_darklight = document.createElement("div");
                blur_and_darklight.classList.add("dark");
                newSection.appendChild(blur_and_darklight);
                const point_before = document.createElement("div");
          point_before.classList.add("point");
          point_before.classList.add("before");
          blur_and_darklight.appendChild(point_before);
          const point_after = document.createElement("div");
          point_after.classList.add("point");
          point_after.classList.add("after");
          blur_and_darklight.appendChild(point_after);
          // Variable pour stocker l'état du déplacement
          let isResizing = false;
          let startY;
          let MIN_SECTION_HEIGHT = 100;
          // Gestionnaire d'événement pour le redimensionnement vertical vers le haut
          point_before.addEventListener("mousedown", (event) => {
            event.preventDefault();
            if (!newSection.previousElementSibling) return; // Empêcher le redimensionnement de la première section
            isResizing = true;
            startY = event.clientY;
          });
          // Gestionnaire d'événement pour le redimensionnement vertical vers le bas
          point_after.addEventListener("mousedown", (event) => {
            event.preventDefault();
            if (!newSection.nextElementSibling) return; // Empêcher le redimensionnement de la dernière section
            isResizing = true;
            startY = event.clientY;
          });
          // Gestionnaire d'événement pour le déplacement de la souris lors du redimensionnement
          document.addEventListener("mousemove", (event) => {
            if (isResizing) {
              const sectionHeight = newSection.offsetHeight;
              const deltaY = event.clientY - startY;
              const newHeight = sectionHeight + deltaY;
              // Vérifiez si la nouvelle hauteur ne dépasse pas une certaine limite
              if (newHeight >= MIN_SECTION_HEIGHT) {
                newSection.style.height = `${newHeight}px`;
                // Déplacez le point avant vers le haut si la section est redimensionnée vers le haut
                if (deltaY < 0) {
                  newSection.style.top = `${parseFloat(newSection.style.top) + deltaY}px`;
                }
              }
              startY = event.clientY;
            }
          });

          // Gestionnaire d'événement pour arrêter le redimensionnement
          document.addEventListener("mouseup", () => {
            isResizing = false;
          });
     
              });
              resetCards();
              resetLayout();

              saved_create_notif();
            }
          });
        }
      }
    }

    function edit_card() {
      const selectedSection = document.querySelector(".select");
      const elements = document.querySelectorAll(".select");
      elements.forEach((section) => {
        const elementsWithText = selectedSection.querySelectorAll("header, h2, h3, h1, h6, h4, p");

        let h2Text = "";
        let pText = "";

        elementsWithText.forEach(element => {
          if (h2Text === "" && element.textContent.trim() !== "") {
            h2Text = element.textContent.trim();
          } else if (pText === "" && element.textContent.trim() !== "") {
            pText = element.textContent.trim();
          }
        });
        // Vérifier si h2Text existe, sinon utiliser selectedSection.id
        const h2Content = h2Text ? h2Text : selectedSection.id;

        // Vérifier si pText existe, sinon utiliser une chaîne vide
        const pContent = pText ? pText : h2Content;

        // Utiliser les variables h2Content et pContent comme nécessaire
        const excludedIds = ["FAQ", "Réseaux sociaux", "Nos clients", "Équipe", "Gallerie de photo", "Tarification", "Produits", "Images", "Slider", "Vidéo", "Partenaires", "Map", "3D", "Carte", "Réservation", "footer"];

        if (h2Content && pContent && !excludedIds.includes(selectedSection.id)) {

          if (selectedSection) {
            card_create();
            const card_index = document.querySelector(".card_index");
            const card = document.querySelector(".body_plus");
            const body_edit = document.querySelector(".body_edit");
            if (card || body_edit) {
            } else {

              const card = document.createElement("div");
              card.classList.add("body_edit");
              card_index.appendChild(card);
              const title_card = document.createElement("h1");
              title_card.textContent = "Titre";
              card.appendChild(title_card);
              const br1 = document.createElement("br");

              card.appendChild(br1);
              const input_title_card = document.createElement("input");
              input_title_card.type = "text";
              input_title_card.classList.add("input_title_card");
              input_title_card.value = h2Content; // Utiliser la valeur récupérée ici
              card.appendChild(input_title_card);
              const br2 = document.createElement("br");

              card.appendChild(br2);
              const paragraph_card = document.createElement("div");
              paragraph_card.textContent = "Paragraphe";
              card.appendChild(paragraph_card);
              const br3 = document.createElement("br");

              card.appendChild(br3);
              const input_paragraph_card = document.createElement("textarea");

              input_paragraph_card.classList.add("input_paragraph_card");
              input_paragraph_card.value = pContent; // Utiliser la valeur récupérée ici

              card.appendChild(input_paragraph_card);
              const br4 = document.createElement("br");

              card.appendChild(br4);
              //code images
              if (selectedSection.id === "Texte + Image") {
                const lien_title = document.createElement("div");

                lien_title.textContent = "Personnalisez le lien de l'image";
                card.appendChild(lien_title);
                const br12 = document.createElement("br");
                card.appendChild(br12);

                const input_link_custom = document.createElement("input");
                input_link_custom.classList.add("input_link_custom");
                input_link_custom.type = "text";
                input_link_custom.value =
                  document.querySelector(".img_textand_img").src;

                input_link_custom.placeholder = "https://images.unsplash.com/";

                card.appendChild(input_link_custom);
                const br14 = document.createElement("br");

                card.appendChild(br14);
                const position_title = document.createElement("div");

                position_title.textContent = "Personnalisez la position du texte et de l'image";
                card.appendChild(position_title);
                const brA1 = document.createElement("br");

                card.appendChild(brA1);
                const position_txt_img = document.createElement("div");

                position_txt_img.classList.add("position_txt_img")
                card.appendChild(position_txt_img);
                const i_bottom_pos = document.createElement("i");

                i_bottom_pos.classList.add("bx")
                i_bottom_pos.classList.add("bxs-dock-bottom")
                position_txt_img.appendChild(i_bottom_pos);
                const i_left_pos = document.createElement("i");

                i_left_pos.classList.add("bx")
                i_left_pos.classList.add("bxs-dock-left")
                position_txt_img.appendChild(i_left_pos);
                const i_right_pos = document.createElement("i");

                i_right_pos.classList.add("bx")
                i_right_pos.classList.add("bxs-dock-right")
                position_txt_img.appendChild(i_right_pos);
                const i_top_pos = document.createElement("i");

                i_top_pos.classList.add("bx")
                i_top_pos.classList.add("bxs-dock-top")
                position_txt_img.appendChild(i_top_pos);
                // Sélectionner toutes les icônes
                const icons = document.querySelectorAll(".position_txt_img i");
                const computedStyle = window.getComputedStyle(selectedSection);
                // code fond
                const direction_section = computedStyle.getPropertyValue("flex-direction");
                const div_text_img = document.querySelector(".div_text_img")
                const div_img = document.querySelector(".div_img")
                const div_img_avec_img = document.querySelector(".img_textand_img")
                const borderRadius_img = window.getComputedStyle(div_img_avec_img).borderRadius
                const display_img = window.getComputedStyle(div_img_avec_img).display
                // Ajouter un gestionnaire d'événements de clic à chaque icône
                icons.forEach(icon => {
                  icon.addEventListener("click", () => {
                    // Réinitialiser la couleur de toutes les icônes à leur couleur par défaut
                    icons.forEach(icon => {
                      icon.style.backgroundColor = "#1f1d1d"; // Réinitialiser la couleur
                    });

                    // Changer la couleur de l'icône cliquée
                    icon.style.backgroundColor = "#554e4e"; // Changer la couleur en blanc par exemple

                    // Identifier l'icône cliquée et effectuer les actions nécessaires

                  });
                  if (direction_section === "column") {
                    const position = div_text_img.compareDocumentPosition(div_img);

                    // Vérifier la position
                    if (position & Node.DOCUMENT_POSITION_FOLLOWING) {

                      if (icon.classList.contains("bxs-dock-bottom")) {
                        icon.style.backgroundColor = "#554e4e"; // Changer la couleur en blanc par exemple

                      }
                    } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {

                      if (icon.classList.contains("bxs-dock-top")) {
                        icon.style.backgroundColor = "#554e4e"; // Changer la couleur en blanc par exemple

                      }
                    }
                  } else {
                    const position = div_text_img.compareDocumentPosition(div_img);

                    // Vérifier la position
                    if (position & Node.DOCUMENT_POSITION_FOLLOWING) {

                      if (icon.classList.contains("bxs-dock-right")) {
                        icon.style.backgroundColor = "#554e4e"; // Changer la couleur en blanc par exemple

                      }
                    } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
                      if (icon.classList.contains("bxs-dock-left")) {
                        icon.style.backgroundColor = "#554e4e"; // Changer la couleur en blanc par exemple

                      }
                    }
                  }
                });
                const diff_img_txt = document.createElement("div")
                diff_img_txt.classList.add("diff_img_txt")
                const one_diff_img_txt = document.createElement("p")
                const two_diff_img_txt = document.createElement("p")
                const three_diff_img_txt = document.createElement("p")
                one_diff_img_txt.textContent = "1"
                one_diff_img_txt.classList.add("1")
                two_diff_img_txt.classList.add("2")
                three_diff_img_txt.classList.add("3")
                two_diff_img_txt.textContent = "2"
                three_diff_img_txt.textContent = "3"
                diff_img_txt.appendChild(one_diff_img_txt)
                diff_img_txt.appendChild(two_diff_img_txt)
                diff_img_txt.appendChild(three_diff_img_txt)
                position_txt_img.appendChild(diff_img_txt)
                const p_all = document.querySelectorAll(".position_txt_img .diff_img_txt p");
                // Ajouter un gestionnaire d'événements de clic à chaque icône
                p_all.forEach(icon => {
                  icon.addEventListener("click", () => {
                    // Réinitialiser la couleur de toutes les icônes à leur couleur par défaut
                    p_all.forEach(icon => {
                      icon.style.backgroundColor = "#1f1d1d"; // Réinitialiser la couleur
                    });

                    // Changer la couleur de l'icône cliquée
                    icon.style.backgroundColor = "#554e4e"; // Changer la couleur en blanc par exemple

                    // Identifier l'icône cliquée et effectuer les actions nécessaires

                  });
                  if (borderRadius_img === "8px" && !(display_img === "none")) {

                    if (icon.classList.contains("1")) {
                      icon.style.backgroundColor = "#554e4e"; // Changer la couleur en blanc par exemple

                    }


                  } else if (!(display_img === "none")) {
                    if (icon.classList.contains("2")) {
                      icon.style.backgroundColor = "#554e4e"; // Changer la couleur en blanc par exemple

                    }
                  } else {
                    if (icon.classList.contains("3")) {
                      icon.style.backgroundColor = "#554e4e"; // Changer la couleur en blanc par exemple

                    }
                  }
                });

              }
              if (selectedSection.id === "Section Soon") {
                const lien_title_ss = document.createElement("div");

                lien_title_ss.textContent = "Personnalisez le compte à rebours";
                card.appendChild(lien_title_ss);
                const br12_bis = document.createElement("br");
                card.appendChild(br12_bis);
                const line_car = document.createElement("div");
                line_car.classList.add("line_car")

                const two_line_car = document.createElement("div");
                two_line_car.classList.add("two_line_car")
                const input_dy_custom = document.createElement("input");

                input_dy_custom.classList.add("input_dy_custom");
                input_dy_custom.type = "text";
                input_dy_custom.value =
                  document.querySelector(".time.days .number").textContent;

                input_dy_custom.placeholder = "18";
                const days = document.createElement("p");

                days.textContent = "days";

                const input_hr_custom = document.createElement("input");
                input_hr_custom.classList.add("input_hr_custom");
                input_hr_custom.type = "text";
                input_hr_custom.value =
                  document.querySelector(".time.hours .number").textContent;

                input_hr_custom.placeholder = "27";
                const hours = document.createElement("p");

                hours.textContent = "hours";

                const input_mn_custom = document.createElement("input");
                input_mn_custom.classList.add("input_mn_custom");
                input_mn_custom.type = "text";
                input_mn_custom.value =
                  document.querySelector(".time.minutes .number").textContent;

                input_mn_custom.placeholder = "01";
                const minutes = document.createElement("p");

                minutes.textContent = "minutes";

                const input_sd_custom = document.createElement("input");
                input_sd_custom.classList.add("input_sd_custom");
                input_sd_custom.type = "text";
                input_sd_custom.value =
                  document.querySelector(".time.seconds .number").textContent;

                input_sd_custom.placeholder = "59";
                const seconds = document.createElement("p");

                seconds.textContent = "seconds";

                line_car.appendChild(input_dy_custom);
                two_line_car.appendChild(days)
                line_car.appendChild(input_hr_custom);
                two_line_car.appendChild(hours)
                line_car.appendChild(input_mn_custom);
                two_line_car.appendChild(minutes)
                line_car.appendChild(input_sd_custom);
                two_line_car.appendChild(seconds)
                card.appendChild(line_car);
                card.appendChild(two_line_car);

                const br14_bis = document.createElement("br");

                card.appendChild(br14_bis);
              }
              if (selectedSection.id === "block_chief") {
                const lien_title = document.createElement("div");

                lien_title.textContent = "Personnalisez le lien de l'image";
                card.appendChild(lien_title);
                const br12 = document.createElement("br");
                card.appendChild(br12);

                const input_link_custom = document.createElement("input");
                input_link_custom.classList.add("input_link_custom");
                input_link_custom.type = "text";
                input_link_custom.value =
                  document.querySelector(".img_textand_img").src;

                input_link_custom.placeholder = "https://images.unsplash.com/";

                card.appendChild(input_link_custom);
              }
              const computedStyle = window.getComputedStyle(selectedSection);
              // code fond
              const colorfond = computedStyle.getPropertyValue("background");


              const fond_card = document.createElement("div");
              fond_card.textContent = "Fond";
              card.appendChild(fond_card);
              const br12 = document.createElement("br");

              card.appendChild(br12);
              const input_fond = document.createElement("div");

              input_fond.classList.add("input_fond");

              card.appendChild(input_fond);

              const preview_fond_card = document.createElement("div");

              preview_fond_card.classList.add("preview_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {
                preview_fond_card.style.background = colorfond; // Utiliser la valeur récupérée ici
              } else {
                preview_fond_card.style.backgroundImage = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(preview_fond_card);
              const input_fond_card = document.createElement("input");
              input_fond_card.type = "text";
              input_fond_card.placeholder = "#XXX, Lien";
              input_fond_card.classList.add("input_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {
                input_fond_card.value = colorfond; // Utiliser la valeur récupérée ici
              } else {
                input_fond_card.value = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici
              }

              input_fond.appendChild(input_fond_card);
              const btn_img_fond_card = document.createElement("button");
              btn_img_fond_card.type = "file";
              btn_img_fond_card.classList.add("btn_img_fond_card");
              input_fond.appendChild(btn_img_fond_card);
              const icon_btn_img = document.createElement("i");
              icon_btn_img.classList.add("bx");
              icon_btn_img.classList.add("bx-image");

              btn_img_fond_card.appendChild(icon_btn_img);
              const br11 = document.createElement("br");

              card.appendChild(br11);
              // custom html
              const html_custom = document.createElement("div");
              html_custom.textContent = "Personnalisez le HTML";
              card.appendChild(html_custom);
              const br5 = document.createElement("br");

              card.appendChild(br5);
              const input_html_custom = document.createElement("textarea");
              input_html_custom.classList.add("input_html_custom");


              card.appendChild(input_html_custom);
              //custom css
              const br6 = document.createElement("br");

              card.appendChild(br6);
              const css_custom = document.createElement("div");
              css_custom.textContent = "Personnalisez le CSS";
              card.appendChild(css_custom);

              const input_css_custom = document.createElement("textarea");
              input_css_custom.classList.add("input_css_custom");

              const br7 = document.createElement("br");

              card.appendChild(br7);
              card.appendChild(input_css_custom);
              // btn save
              const br8 = document.createElement("br");

              card.appendChild(br8);
              const div_save_text = document.createElement("div");

              div_save_text.classList.add("div_to_save");

              card.appendChild(div_save_text);
              const btn_save_text = document.createElement("button");

              btn_save_text.textContent = "Sauvegarder";

              div_save_text.appendChild(btn_save_text);
              btn_img_fond_card.addEventListener("click", function () {
                const input = document.createElement("input");
                input.type = "file";
                function handleFileSelect(event) {
                  const selectedFile = event.target.files[0];

                  if (selectedFile) {
                    localStorage.setItem("img_name", selectedFile.name);
                    const reader = new FileReader();

                    reader.onload = function (event) {
                      const fileContent = event.target.result;

                      // Enregistrez le contenu du fichier dans le localStorage
                      localStorage.setItem("Img_fond", fileContent);

                      const textfond = document.querySelector(".input_fond_card");

                      textfond.value = selectedFile.name;
                    };

                    reader.readAsDataURL(selectedFile);
                  }
                }
                // Ajoutez un gestionnaire d'événements pour l'événement de changement (sélection de fichier)
                input.addEventListener("change", handleFileSelect);

                // Cliquez sur l'élément input (c'est-à-dire ouvrez l'explorateur de fichiers)
                input.click();
              });
              btn_save_text.addEventListener("click", function () {
                const newTitle =
                  document.querySelector(".input_title_card").value;
                const newPara = document.querySelector(
                  ".input_paragraph_card"
                ).value;

                const newFond = document.querySelector(".input_fond_card").value;
                const input_link_custom = document.querySelector(".input_link_custom")
                if (input_link_custom) {
                  const newImg = input_link_custom.value;
                  if (newImg) {
                    const img_de_txt_and_img = document.querySelector(".img_textand_img")
                    img_de_txt_and_img.src = newImg
                  }
                }

                // Identifier l'icône cliquée et effectuer les actions nécessaires





                const newHTML =
                  document.querySelector(".input_html_custom").value;
                const newCSS = document.querySelector(".input_css_custom").value;
                const elements_remplace = document.querySelectorAll(".select");

                elements_remplace.forEach((section) => {
                  const elementsWithText_remplace = section.querySelectorAll("header, h2, h3, h1, h6, p");
                  elementsWithText_remplace.forEach((element, index) => {
                    // Si c'est le premier élément contenant du texte, remplacer par newTitle
                    if (index === 0) {
                      // Mettre à jour le texte de l'élément avec newTitle
                      element.textContent = newTitle;
                    }
                    // Si c'est le deuxième élément contenant du texte, remplacer par newPara
                    else if (index === 1) {
                      // Mettre à jour le texte de l'élément avec newPara
                      element.textContent = newPara;
                    }
                  });
                });
                if (newFond === "") {
                  resetLayout();
                  resetCards();
                } else {
                  const img_fond = localStorage.getItem("Img_fond");
                  const img_name = localStorage.getItem("img_name");
                  if (newFond.startsWith("https")) {
                    selectedSection.style.backgroundImage = "url(" + newFond + ")";
                    selectedSection.style.backgroundSize = "cover";
                    selectedSection.style.backgroundPosition = "center";
                  }
                  if (img_fond) {
                    if (newFond === img_name) {
                      selectedSection.style.backgroundImage = "url(" + img_fond + ")";
                      selectedSection.style.backgroundSize = "cover";
                      selectedSection.style.backgroundPosition = "center";
                    }
                  }
                  selectedSection.style.background = newFond;

                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
                if (selectedSection.id === "Section Soon") {
                  const newDays = document.querySelector(".input_dy_custom").value;

                  const newHours = document.querySelector(".input_hr_custom").value;
                  const newMinutes = document.querySelector(".input_mn_custom").value;
                  const newSeconds = document.querySelector(".input_sd_custom").value;
                  if (newDays && newHours && newMinutes && newSeconds) {

                    startTimer(newSeconds, newMinutes, newHours, newDays); // Démarrer le timer avec les valeurs initiales

                  }
                } else if (selectedSection.id === "Texte + Image") {
                  const icons = document.querySelectorAll(".position_txt_img i");
                  const p_all = document.querySelectorAll(".position_txt_img .diff_img_txt p");
                  p_all.forEach(icon => {

                    const computedStyle = window.getComputedStyle(icon);
                    // code fond
                    const color_i_fond = computedStyle.getPropertyValue("background-color");

                    if (color_i_fond === "rgb(85, 78, 78)") {
                      if (icon.classList.contains("1")) {
                        // Action pour l'icône en bas
                        const img_textand_img = document.querySelector(".img_textand_img")
                        img_textand_img.style.display = "flex"
                        img_textand_img.style.borderRadius = "8px"
                        img_textand_img.style.height = "270px"

                        const div_text_img = document.querySelector(".div_text_img")


                        selectedSection.style.background = "#fff"
                        selectedSection.style.padding = "40px"
                        div_text_img.style.color = "var(--text_color_black)"
                      } else if (icon.classList.contains("2")) {
                        // Action pour l'icône à gauche
                        const div_text_img = document.querySelector(".div_text_img")
                        const div_img = document.querySelector(".div_img")


                        const position = div_text_img.compareDocumentPosition(div_img);
                        selectedSection.style.padding = "0px"
                        // Vérifier la position
                        if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
                          selectedSection.style.paddingLeft = "40px"

                        } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
                          selectedSection.style.paddingLeft = "-40px"

                        }

                        const img_textand_img = document.querySelector(".img_textand_img")
                        img_textand_img.style.display = "flex"



                        img_textand_img.style.borderRadius = "0px"
                        img_textand_img.style.height = "100%"
                        selectedSection.style.background = "#fff"
                        div_text_img.style.color = "var(--text_color_black)"
                      } else if (icon.classList.contains("3")) {

                        const div_text_img = document.querySelector(".div_text_img")

                        const img_textand_img = document.querySelector(".div_img img")
                        img_textand_img.style.display = "none"
                        if (selectedSection) {
                          selectedSection.style.background = "linear-gradient(rgba(0, 0, 0, 0.92), rgba(54, 54, 54, 0.5) 39.24%, rgba(28, 28, 28, 0.4))," + "url(" + img_textand_img.src + ") center center /cover"
                        }
                        div_text_img.style.color = "var(--text_color_white)"
                      }
                    }
                  });
                  // Ajouter un gestionnaire d'événements de clic à chaque icône
                  icons.forEach(icon => {
                    const computedStyle = window.getComputedStyle(icon);
                    // code fond
                    const color_i_fond = computedStyle.getPropertyValue("background-color");

                    if (color_i_fond === "rgb(85, 78, 78)") {
                      if (icon.classList.contains("bxs-dock-bottom")) {
                        // Action pour l'icône en bas
                        selectedSection.style.flexDirection = "column"
                        const div_text_img = document.querySelector(".div_text_img")

                        const div_img = document.querySelector(".div_img")

                        selectedSection.insertBefore(div_text_img, div_img)

                      } else if (icon.classList.contains("bxs-dock-left")) {
                        // Action pour l'icône à gauche
                        selectedSection.style.flexDirection = "initial"

                        const div_text_img = document.querySelector(".div_text_img")

                        const div_img = document.querySelector(".div_img")

                        selectedSection.insertBefore(div_img, div_text_img)
                      } else if (icon.classList.contains("bxs-dock-right")) {
                        // Action pour l'icône à droite
                        selectedSection.style.flexDirection = "initial"

                        const div_text_img = document.querySelector(".div_text_img")

                        const div_img = document.querySelector(".div_img")

                        selectedSection.insertBefore(div_text_img, div_img)

                      } else if (icon.classList.contains("bxs-dock-top")) {
                        selectedSection.style.flexDirection = "column"
                        const div_text_img = document.querySelector(".div_text_img")

                        const div_img = document.querySelector(".div_img")

                        selectedSection.insertBefore(div_img, div_text_img)

                      }
                    }
                  });

                }
                if (newHTML === "" && newCSS === "") {
                  resetLayout();
                  resetCards();
                  saved_create_notif();
                } else {
                  selectedSection.style.cssText += newCSS;
                  selectedSection.innerHTML += newHTML;
                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
              });
            }
          }
        } else if (selectedSection) {
          if (!selectedSection.id === "Vidéo") {
            card_create();
            const card_index = document.querySelector(".card_index");

            const card = document.querySelector(".body_plus");
            const body_edit = document.querySelector(".body_edit");
            if (card || body_edit) {
            } else {
              const card = document.createElement("div");
              card.classList.add("body_edit");
              card_index.appendChild(card);
              // custom html
              const html_custom = document.createElement("div");
              html_custom.classList.add("html_custom");

              html_custom.textContent = "Personnalisez le HTML";
              card.appendChild(html_custom);
              const br5 = document.createElement("br");

              card.appendChild(br5);
              const input_html_custom = document.createElement("textarea");
              input_html_custom.classList.add("input_html_custom");


              card.appendChild(input_html_custom);
              //custom css
              const br6 = document.createElement("br");

              card.appendChild(br6);
              const css_custom = document.createElement("div");
              css_custom.textContent = "Personnalisez le CSS";
              card.appendChild(css_custom);

              const input_css_custom = document.createElement("textarea");
              input_css_custom.classList.add("input_css_custom");

              const br7 = document.createElement("br");

              card.appendChild(br7);
              card.appendChild(input_css_custom);
              // btn save
              const br8 = document.createElement("br");

              card.appendChild(br8);
              const div_save_notext = document.createElement("div");

              div_save_notext.classList.add("div_to_save");

              card.appendChild(div_save_notext);
              const btn_save_notext = document.createElement("button");

              btn_save_notext.textContent = "Sauvegarder";

              div_save_notext.classList.add("btn_save_notext");
              div_save_notext.appendChild(btn_save_notext);
              btn_save_notext.addEventListener("click", function () {
                const newHTML =
                  document.querySelector(".input_html_custom").value;
                const newCSS = document.querySelector(".input_css_custom").value;

                if (newHTML === "" && newCSS === "") {
                  resetLayout();
                  resetCards();
                } else {
                  selectedSection.style.cssText += newCSS;
                  selectedSection.innerHTML += newHTML;

                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
              });
            }
          }
          if (selectedSection.id === "Images") {
            card_create();
            const card_index = document.querySelector(".card_index");
            const card = document.querySelector(".body_plus");
            const body_edit = document.querySelector(".body_edit");
            if (card || body_edit) {
            } else {
              const card = document.createElement("div");
              card.classList.add("body_edit");
              card_index.appendChild(card);
              const computedStyle = window.getComputedStyle(selectedSection);
              // code fond
              const colorfond = computedStyle.getPropertyValue("background");


              const fond_card = document.createElement("div");
              fond_card.textContent = "Fond";
              card.appendChild(fond_card);
              const br12_bis = document.createElement("br");

              card.appendChild(br12_bis);
              const input_fond = document.createElement("div");

              input_fond.classList.add("input_fond");

              card.appendChild(input_fond);

              const preview_fond_card = document.createElement("div");

              preview_fond_card.classList.add("preview_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                preview_fond_card.style.background = colorfond; // Utiliser la valeur récupérée ici
              } else {

                preview_fond_card.style.backgroundImage = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(preview_fond_card);
              const input_fond_card = document.createElement("input");
              input_fond_card.type = "text";
              input_fond_card.placeholder = "#XXX, Lien";
              input_fond_card.classList.add("input_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                input_fond_card.value = colorfond; // Utiliser la valeur récupérée ici
              } else {
                input_fond_card.value = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(input_fond_card);
              const btn_img_fond_card = document.createElement("button");
              btn_img_fond_card.type = "file";
              btn_img_fond_card.classList.add("btn_img_fond_card");
              input_fond.appendChild(btn_img_fond_card);
              const icon_btn_img = document.createElement("i");
              icon_btn_img.classList.add("bx");
              icon_btn_img.classList.add("bx-image");

              btn_img_fond_card.appendChild(icon_btn_img);
              const br11 = document.createElement("br");

              card.appendChild(br11);
              // code img
              const lien_title = document.createElement("div");

              lien_title.textContent = "Personnalisez le lien de l'image";
              card.appendChild(lien_title);
              const br12 = document.createElement("br");
              card.appendChild(br12);

              const input_link_custom = document.createElement("input");
              input_link_custom.classList.add("input_link_custom");
              input_link_custom.type = "text";
              input_link_custom.placeholder = "https://images.unsplash.com/";

              card.appendChild(input_link_custom);
              //code parallaxe
              const parallaxe = document.createElement("div");
              parallaxe.classList.add("parallaxe");

              parallaxe.textContent = "Voulez-vous que votre fond soit fixé ?";
              const br_2 = document.createElement("br");

              card.appendChild(br_2);
              const label_parallaxe = document.createElement("label");
              label_parallaxe.classList.add("switch");

              const input_label_parallaxe = document.createElement("input");
              input_label_parallaxe.classList.add("checkbox");
              input_label_parallaxe.type = "checkbox";
              input_label_parallaxe.id = "input_label_parallaxe";

              const slider_parallaxe = document.createElement("div");
              slider_parallaxe.classList.add("slider");

              card.appendChild(parallaxe);
              card.appendChild(label_parallaxe);
              label_parallaxe.appendChild(input_label_parallaxe);
              label_parallaxe.appendChild(slider_parallaxe);
              const br_3 = document.createElement("br");

              card.appendChild(br_3);

              if (localStorage.getItem("isChecked_parallax") === "true") {
                input_label_parallaxe.checked = true;
                 Images.style.backgroundAttachment = "fixed";
              }
              const Images = document.getElementById("Images");
              // Ajouter un gestionnaire pour la case à cocher
              input_label_parallaxe.addEventListener("click", function () {
                if (input_label_parallaxe.checked) {
                  localStorage.setItem("isChecked_parallax", "true");
                  Images.style.backgroundAttachment = "fixed";
                } else {
                  localStorage.setItem("isChecked_parallax", "false");
                  Images.style.backgroundAttachment = ""; // Définissez ici la valeur par défaut souhaitée
                }
              });
              // custom html
              const html_custom = document.createElement("div");
              html_custom.classList.add("html_custom");

              html_custom.textContent = "Personnalisez le HTML";
              card.appendChild(html_custom);
              const br5 = document.createElement("br");

              card.appendChild(br5);
              const input_html_custom = document.createElement("textarea");
              input_html_custom.classList.add("input_html_custom");


              card.appendChild(input_html_custom);
              //custom css
              const br6 = document.createElement("br");

              card.appendChild(br6);
              const css_custom = document.createElement("div");
              css_custom.textContent = "Personnalisez le CSS";
              card.appendChild(css_custom);

              const input_css_custom = document.createElement("textarea");
              input_css_custom.classList.add("input_css_custom");

              const br7 = document.createElement("br");

              card.appendChild(br7);
              card.appendChild(input_css_custom);
              // btn save
              const br8 = document.createElement("br");

              card.appendChild(br8);
              const div_save_notext = document.createElement("div");

              div_save_notext.classList.add("div_to_save");

              card.appendChild(div_save_notext);
              const btn_save_notext = document.createElement("button");

              btn_save_notext.textContent = "Sauvegarder";
              btn_img_fond_card.addEventListener("click", function () {
                const input = document.createElement("input");
                input.type = "file";
                function handleFileSelect(event) {
                  const selectedFile = event.target.files[0];

                  if (selectedFile) {
                    localStorage.setItem("img_name", selectedFile.name);
                    const reader = new FileReader();

                    reader.onload = function (event) {
                      const fileContent = event.target.result;

                      // Enregistrez le contenu du fichier dans le localStorage
                      localStorage.setItem("Img_fond", fileContent);

                      const textfond = document.querySelector(".input_fond_card");

                      textfond.value = selectedFile.name;
                    };

                    reader.readAsDataURL(selectedFile);
                  }
                }
                // Ajoutez un gestionnaire d'événements pour l'événement de changement (sélection de fichier)
                input.addEventListener("change", handleFileSelect);

                // Cliquez sur l'élément input (c'est-à-dire ouvrez l'explorateur de fichiers)
                input.click();
              });
              div_save_notext.classList.add("btn_save_notext");
              div_save_notext.appendChild(btn_save_notext);
              btn_save_notext.addEventListener("click", function () {
                const link = document.querySelector(".input_link_custom").value;
                const newHTML =
                  document.querySelector(".input_html_custom").value;
                const newCSS = document.querySelector(".input_css_custom").value;
                const newFond = document.querySelector(".input_fond_card").value;
                if (newHTML === "" && newCSS === "") {
                  resetLayout();
                  resetCards();
                } else {
                  selectedSection.style.cssText += newCSS;
                  selectedSection.innerHTML += newHTML;

                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }

                if (link.startsWith("https://images.unsplash.com/")) {
                  const img = document.querySelector("img");
                  if (img) {
                    img.remove();
                  }

                  const newSection = document.getElementById("Images");
                  const img_create = document.createElement("img");
                  img_create.src = link;

                  newSection.appendChild(img_create);
                }
                if (newFond === "") {
                  resetLayout();
                  resetCards();
                } else {
                  const img_fond = localStorage.getItem("Img_fond");
                  const img_name = localStorage.getItem("img_name");
                  if (newFond.startsWith("https")) {
                    selectedSection.style.background = "url(" + newFond + ")";
                    selectedSection.style.backgroundSize = "cover";
                    selectedSection.style.backgroundPosition = "center";
                  }
                  if (img_fond) {
                    if (newFond === img_name) {
                      selectedSection.style.background = "url(" + img_fond + ")";
                      selectedSection.style.backgroundSize = "cover";
                      selectedSection.style.backgroundPosition = "center";
                    }
                  }
                  selectedSection.style.background = newFond;
                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
              });
            }
          }
          if (selectedSection.id === "Slider") {
            card_create();

            const carrossel_item = document.querySelectorAll(".carrossel-item");
            const card_index = document.querySelector(".card_index");
            const card = document.querySelector(".body_plus");
            const body_edit = document.querySelector(".body_edit");
            if (card || body_edit) {
            } else {
              const card = document.createElement("div");
              card.classList.add("body_edit");
              card_index.appendChild(card);
              const Number_title = document.createElement("div");

              Number_title.textContent = "Choissisez votre nombre d'images";
              card.appendChild(Number_title);
              const br13 = document.createElement("br");
              card.appendChild(br13);
              const counter_img = document.createElement("div");
              counter_img.classList.add("counter_img");
              card.appendChild(counter_img);
              const btn_minus = document.createElement("button");
              counter_img.appendChild(btn_minus);
              const i_minus = document.createElement("i");
              i_minus.classList.add("bx");
              i_minus.classList.add("bx-minus");
              btn_minus.appendChild(i_minus);
              const input_counter = document.createElement("input");
              input_counter.classList.add("input_counter");
              input_counter.type = "text";
              input_counter.value = carrossel_item.length;

              counter_img.appendChild(input_counter);
              const btn_plus = document.createElement("button");
              counter_img.appendChild(btn_plus);
              const i_plus = document.createElement("i");
              i_plus.classList.add("bx");
              i_plus.classList.add("bx-plus");
              btn_plus.appendChild(i_plus);
              let score = parseInt(input_counter.value);
              btn_plus.addEventListener("click", function () {
                score++;
                input_counter.value = score;
              });
              btn_minus.addEventListener("click", () => {
                if (score > 1) {
                  score--;
                  input_counter.value = score;
                }
              });
              carrossel_item.forEach((link, i) => {
                const lien_title = document.createElement("div");

                lien_title.textContent = "Personnalisez le lien de l'image";
                card.appendChild(lien_title);
                const br12 = document.createElement("br");
                card.appendChild(br12);

                const input_link_custom = document.createElement("input");
                input_link_custom.classList.add("input_link_custom");
                input_link_custom.type = "text";
                input_link_custom.id = "input_link_custom_" + (i + 1);
                input_link_custom.placeholder = "https://images.unsplash.com/";
                input_link_custom.value = getComputedStyle(link).backgroundImage
                card.appendChild(input_link_custom);
              })

              // custom html
              const html_custom = document.createElement("div");
              html_custom.classList.add("html_custom");

              html_custom.textContent = "Personnalisez le HTML";
              card.appendChild(html_custom);
              const br5 = document.createElement("br");

              card.appendChild(br5);
              const input_html_custom = document.createElement("textarea");
              input_html_custom.classList.add("input_html_custom");


              card.appendChild(input_html_custom);
              //custom css
              const br6 = document.createElement("br");

              card.appendChild(br6);
              const css_custom = document.createElement("div");
              css_custom.textContent = "Personnalisez le CSS";
              card.appendChild(css_custom);

              const input_css_custom = document.createElement("textarea");
              input_css_custom.classList.add("input_css_custom");

              const br7 = document.createElement("br");

              card.appendChild(br7);
              card.appendChild(input_css_custom);
              // btn save
              const br8 = document.createElement("br");

              card.appendChild(br8);
              const div_save_notext = document.createElement("div");

              div_save_notext.classList.add("div_to_save");

              card.appendChild(div_save_notext);
              const btn_save_notext = document.createElement("button");

              btn_save_notext.textContent = "Sauvegarder";

              div_save_notext.classList.add("btn_save_notext");
              div_save_notext.appendChild(btn_save_notext);
              btn_save_notext.addEventListener("click", function () {
                const number_img = document.querySelector(".input_counter").value;

                const newHTML =
                  document.querySelector(".input_html_custom").value;
                const newCSS = document.querySelector(".input_css_custom").value;
                const carrossel_item = document.querySelectorAll(".carrossel-item");
                carrossel_item.forEach((content, i) => {
                  const inputElement = document.getElementById(
                    "input_link_custom_" + (i + 1)
                  );

                  if (inputElement) {
                    const name_question = inputElement.value;

                    if (name_question) {
                      content.style.background = "url(" + name_question + ") center center / cover no-repeat"
                    }
                  }

                })
                if (newHTML === "" && newCSS === "") {
                  resetLayout();
                  resetCards();
                } else {
                  selectedSection.style.cssText += newCSS;
                  selectedSection.innerHTML += newHTML;

                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
                if (number_img === "") {
                  resetLayout();
                  resetCards();
                } else {
                  resetLayout();
                  resetCards();
                  saved_create_notif();

                  let img_matrix4 = [
                    "https://images.unsplash.com/photo-1580191947416-62d35a55e71d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
                    "https://images.unsplash.com/photo-1594323713852-9626155bfd37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
                    "https://images.unsplash.com/photo-1543332164-6e82f355badc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                    "https://images.unsplash.com/photo-1567284364258-30c429a24b81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
                  ];
                  const carousel = document.querySelector(".carrossel");

                  if (number_img > carrossel_item.length) {
                    for (let i = 0; i < (number_img - carrossel_item.length); i++) {
                      const img1 = document.createElement("div");
                      img1.classList.add("carrossel-item")
                      img1.style.background = "url(" + img_matrix4[i] + ") center center / cover no-repeat"
                      carousel.appendChild(img1);
                    }
                  } else {
                    for (let i = 0; i < (number_img - carrossel_item.length); i++) {
                      const allAccordionContents =
                        document.querySelectorAll(".carrossel-item");
                      if (allAccordionContents.length > 0) {
                        allAccordionContents[
                          allAccordionContents.length - 1
                        ].remove();
                      }
                    }
                  }
                }


              });
            }
          }
          if (selectedSection.id === "Vidéo") {
            card_create();
            const card_index = document.querySelector(".card_index");
            const card = document.querySelector(".body_plus");
            const body_edit = document.querySelector(".body_edit");
            if (card || body_edit) {
            } else {
              const card = document.createElement("div");
              card.classList.add("body_edit");
              card_index.appendChild(card);
              const lien_title = document.createElement("div");

              lien_title.textContent = "Personnalisez le lien de la vidéo";
              card.appendChild(lien_title);
              const br12 = document.createElement("br");
              card.appendChild(br12);

              const input_link_custom = document.createElement("input");
              input_link_custom.classList.add("input_link_custom");
              input_link_custom.type = "text";
              input_link_custom.placeholder =
                "https://www.youtube.com/watch?v=XXXXX";

              card.appendChild(input_link_custom);
              // custom html
              const html_custom = document.createElement("div");
              html_custom.classList.add("html_custom");

              html_custom.textContent = "Personnalisez le HTML";
              card.appendChild(html_custom);
              const br5 = document.createElement("br");

              card.appendChild(br5);
              const input_html_custom = document.createElement("textarea");
              input_html_custom.classList.add("input_html_custom");


              card.appendChild(input_html_custom);
              //custom css
              const br6 = document.createElement("br");

              card.appendChild(br6);
              const css_custom = document.createElement("div");
              css_custom.textContent = "Personnalisez le CSS";
              card.appendChild(css_custom);

              const input_css_custom = document.createElement("textarea");
              input_css_custom.classList.add("input_css_custom");

              const br7 = document.createElement("br");

              card.appendChild(br7);
              card.appendChild(input_css_custom);
              // btn save
              const br8 = document.createElement("br");

              card.appendChild(br8);
              const div_save_notext = document.createElement("div");

              div_save_notext.classList.add("div_to_save");

              card.appendChild(div_save_notext);
              const btn_save_notext = document.createElement("button");

              btn_save_notext.textContent = "Sauvegarder";

              div_save_notext.classList.add("btn_save_notext");
              div_save_notext.appendChild(btn_save_notext);
              btn_save_notext.addEventListener("click", function () {
                const link = document.querySelector(".input_link_custom").value;
                const newHTML =
                  document.querySelector(".input_html_custom").value;
                const newCSS = document.querySelector(".input_css_custom").value;

                if (newHTML === "" && newCSS === "") {
                  resetLayout();
                  resetCards();
                } else {
                  selectedSection.style.cssText += newCSS;
                  selectedSection.innerHTML += newHTML;

                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }

                if (link.startsWith("https://www.youtube.com/watch?v=")) {
                  const video_film = document.getElementById("video");
                  if (video_film) {
                    video_film.remove();
                  }

                  var videoId = getYouTubeVideoId(link);
                  const newSection = document.getElementById("Vidéo");
                  const iframe_ytb = document.createElement("iframe");
                  iframe_ytb.src = "https://www.youtube.com/embed/" + videoId;
                  iframe_ytb.width = "100%";
                  iframe_ytb.height = "100%";
                  iframe_ytb.class = "border-0 w-full h-full";
                  iframe_ytb.allow = "autoplay; encrypted-media";
                  iframe_ytb.spellcheck = "false";
                  newSection.appendChild(iframe_ytb);
                }
              });
            }
          }
          if (selectedSection.id === "normal") {
            card_create();
            const card_index = document.querySelector(".card_index");
            const card = document.querySelector(".body_plus");
            const body_edit = document.querySelector(".body_edit");
            if (card || body_edit) {
            } else {
              const card = document.createElement("div");
              card.classList.add("body_edit");
              card_index.appendChild(card);
              const computedStyle = window.getComputedStyle(selectedSection);
              // code fond
              const colorfond = computedStyle.getPropertyValue("background");


              const fond_card = document.createElement("div");
              fond_card.textContent = "Fond";
              card.appendChild(fond_card);
              const br12 = document.createElement("br");

              card.appendChild(br12);
              const input_fond = document.createElement("div");

              input_fond.classList.add("input_fond");

              card.appendChild(input_fond);

              const preview_fond_card = document.createElement("div");

              preview_fond_card.classList.add("preview_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                preview_fond_card.style.background = colorfond; // Utiliser la valeur récupérée ici
              } else {

                preview_fond_card.style.backgroundImage = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(preview_fond_card);
              const input_fond_card = document.createElement("input");
              input_fond_card.type = "text";
              input_fond_card.placeholder = "#XXX, Lien";
              input_fond_card.classList.add("input_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                input_fond_card.value = colorfond; // Utiliser la valeur récupérée ici
              } else {
                input_fond_card.value = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(input_fond_card);
              const btn_img_fond_card = document.createElement("button");
              btn_img_fond_card.type = "file";
              btn_img_fond_card.classList.add("btn_img_fond_card");
              input_fond.appendChild(btn_img_fond_card);
              const icon_btn_img = document.createElement("i");
              icon_btn_img.classList.add("bx");
              icon_btn_img.classList.add("bx-image");

              btn_img_fond_card.appendChild(icon_btn_img);
              const br11 = document.createElement("br");

              card.appendChild(br11);
              // custom html
              const html_custom = document.createElement("div");
              html_custom.classList.add("html_custom");

              html_custom.textContent = "Personnalisez le HTML";
              card.appendChild(html_custom);
              const br5 = document.createElement("br");

              card.appendChild(br5);
              const input_html_custom = document.createElement("textarea");
              input_html_custom.classList.add("input_html_custom");


              card.appendChild(input_html_custom);
              //custom css
              const br6 = document.createElement("br");

              card.appendChild(br6);
              const css_custom = document.createElement("div");
              css_custom.textContent = "Personnalisez le CSS";
              card.appendChild(css_custom);

              const input_css_custom = document.createElement("textarea");
              input_css_custom.classList.add("input_css_custom");

              const br7 = document.createElement("br");

              card.appendChild(br7);
              card.appendChild(input_css_custom);
              // btn save
              const br8 = document.createElement("br");

              card.appendChild(br8);
              const div_save_notext = document.createElement("div");

              div_save_notext.classList.add("div_to_save");

              card.appendChild(div_save_notext);
              const btn_save_notext = document.createElement("button");

              btn_save_notext.textContent = "Sauvegarder";

              div_save_notext.classList.add("btn_save_notext");
              div_save_notext.appendChild(btn_save_notext);
              btn_img_fond_card.addEventListener("click", function () {
                const input = document.createElement("input");
                input.type = "file";
                function handleFileSelect(event) {
                  const selectedFile = event.target.files[0];

                  if (selectedFile) {
                    localStorage.setItem("img_name", selectedFile.name);
                    const reader = new FileReader();

                    reader.onload = function (event) {
                      const fileContent = event.target.result;

                      // Enregistrez le contenu du fichier dans le localStorage
                      localStorage.setItem("Img_fond", fileContent);

                      const textfond = document.querySelector(".input_fond_card");

                      textfond.value = selectedFile.name;
                    };

                    reader.readAsDataURL(selectedFile);
                  }
                }
                // Ajoutez un gestionnaire d'événements pour l'événement de changement (sélection de fichier)
                input.addEventListener("change", handleFileSelect);

                // Cliquez sur l'élément input (c'est-à-dire ouvrez l'explorateur de fichiers)
                input.click();
              });
              btn_save_notext.addEventListener("click", function () {
                const newHTML =
                  document.querySelector(".input_html_custom").value;
                const newCSS = document.querySelector(".input_css_custom").value;
                const newFond = document.querySelector(".input_fond_card").value;

                if (newHTML === "" && newCSS === "") {
                  resetLayout();
                  resetCards();
                } else {
                  selectedSection.style.cssText += newCSS;
                  selectedSection.innerHTML += newHTML;

                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
                if (newFond === "") {
                  resetLayout();
                  resetCards();
                } else {
                  const img_fond = localStorage.getItem("Img_fond");
                  const img_name = localStorage.getItem("img_name");
                  if (newFond.startsWith("https")) {
                    selectedSection.style.background = "url(" + newFond + ")";
                    selectedSection.style.backgroundSize = "cover";
                    selectedSection.style.backgroundPosition = "center";
                  }
                  if (img_fond) {
                    if (newFond === img_name) {
                      selectedSection.style.background = "url(" + img_fond + ")";
                      selectedSection.style.backgroundSize = "cover";
                      selectedSection.style.backgroundPosition = "center";
                    }
                  }
                  selectedSection.style.background = newFond;

                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
              });
            }
          }
          if (selectedSection.id === "FAQ") {
            card_create();
            const card_index = document.querySelector(".card_index");
            const accordion_content = document.querySelectorAll(".accordion .accordion-content");
            const card = document.querySelector(".body_plus");
            const body_edit = document.querySelector(".body_edit");
            if (card || body_edit) {
            } else {
              const card = document.createElement("div");
              card.classList.add("body_edit");
              card_index.appendChild(card);
              const Number_title = document.createElement("h1");

              Number_title.textContent = "Choissisez votre nombre de question";
              card.appendChild(Number_title);
              const br13 = document.createElement("br");
              card.appendChild(br13);
              const counter_q = document.createElement("div");
              counter_q.classList.add("counter_img");
              card.appendChild(counter_q);
              const btn_minus = document.createElement("button");
              counter_q.appendChild(btn_minus);
              const i_minus = document.createElement("i");
              i_minus.classList.add("bx");
              i_minus.classList.add("bx-minus");
              btn_minus.appendChild(i_minus);
              const input_counter = document.createElement("input");
              input_counter.classList.add("input_counter");
              input_counter.type = "text";
              input_counter.value = accordion_content.length;

              counter_q.appendChild(input_counter);
              const btn_plus = document.createElement("button");
              counter_q.appendChild(btn_plus);
              const i_plus = document.createElement("i");
              i_plus.classList.add("bx");
              i_plus.classList.add("bx-plus");
              btn_plus.appendChild(i_plus);
              let score = parseInt(input_counter.value);
              btn_plus.addEventListener("click", function () {
                score++;
                input_counter.value = score;
              });
              btn_minus.addEventListener("click", () => {
                if (score > 1) {
                  score--;
                  input_counter.value = score;
                }
              });
              accordion_content.forEach((content, i) => {
                const br_4 = document.createElement("br");

                card.appendChild(br_4);
                const q_title = document.createElement("div");

                q_title.textContent = "Personnalisez la question";
                card.appendChild(q_title);
                const br12 = document.createElement("br");
                card.appendChild(br12);

                const input_question_custom = document.createElement("input");
                input_question_custom.classList.add("input_question_custom");
                input_question_custom.type = "text";
                input_question_custom.id = "input_question_" + (i + 1);
                input_question_custom.placeholder = "Question ?";
                input_question_custom.value = content.querySelector(".title").textContent;

                card.appendChild(input_question_custom);
                const br_5 = document.createElement("br");

                card.appendChild(br_5);
                const rep_title = document.createElement("div");

                rep_title.textContent = "Personnalisez la réponse";
                card.appendChild(rep_title);
                const br14 = document.createElement("br");
                card.appendChild(br14);

                const input_reponse_custom = document.createElement("input");
                input_reponse_custom.classList.add("input_reponse_custom");
                input_reponse_custom.type = "text";
                input_reponse_custom.id = "input_reponse_" + (i + 1);
                input_reponse_custom.placeholder = "Réponse";
                input_reponse_custom.value = content.querySelector(".description").textContent;

                card.appendChild(input_reponse_custom);

              })

              const computedStyle = window.getComputedStyle(selectedSection);
              // code fond
              const colorfond = computedStyle.getPropertyValue("background");


              const fond_card = document.createElement("div");
              fond_card.textContent = "Fond";
              card.appendChild(fond_card);
              const br12 = document.createElement("br");

              card.appendChild(br12);
              const input_fond = document.createElement("div");

              input_fond.classList.add("input_fond");

              card.appendChild(input_fond);

              const preview_fond_card = document.createElement("div");

              preview_fond_card.classList.add("preview_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                preview_fond_card.style.background = colorfond; // Utiliser la valeur récupérée ici
              } else {

                preview_fond_card.style.backgroundImage = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(preview_fond_card);
              const input_fond_card = document.createElement("input");
              input_fond_card.type = "text";
              input_fond_card.placeholder = "#XXX, Lien";
              input_fond_card.classList.add("input_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                input_fond_card.value = colorfond; // Utiliser la valeur récupérée ici
              } else {
                input_fond_card.value = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(input_fond_card);
              const btn_img_fond_card = document.createElement("button");
              btn_img_fond_card.type = "file";
              btn_img_fond_card.classList.add("btn_img_fond_card");
              input_fond.appendChild(btn_img_fond_card);
              const icon_btn_img = document.createElement("i");
              icon_btn_img.classList.add("bx");
              icon_btn_img.classList.add("bx-image");

              btn_img_fond_card.appendChild(icon_btn_img);
              const br11 = document.createElement("br");

              card.appendChild(br11);
              // custom html
              const html_custom = document.createElement("div");
              html_custom.classList.add("html_custom");

              html_custom.textContent = "Personnalisez le HTML";
              card.appendChild(html_custom);
              const br5 = document.createElement("br");

              card.appendChild(br5);
              const input_html_custom = document.createElement("textarea");
              input_html_custom.classList.add("input_html_custom");


              card.appendChild(input_html_custom);
              //custom css
              const br6 = document.createElement("br");

              card.appendChild(br6);
              const css_custom = document.createElement("div");
              css_custom.textContent = "Personnalisez le CSS";
              card.appendChild(css_custom);

              const input_css_custom = document.createElement("textarea");
              input_css_custom.classList.add("input_css_custom");

              const br7 = document.createElement("br");

              card.appendChild(br7);
              card.appendChild(input_css_custom);
              // btn save
              const br8 = document.createElement("br");

              card.appendChild(br8);
              const div_save_notext = document.createElement("div");

              div_save_notext.classList.add("div_to_save");

              card.appendChild(div_save_notext);
              const btn_save_notext = document.createElement("button");

              btn_save_notext.textContent = "Sauvegarder";

              div_save_notext.classList.add("btn_save_notext");
              div_save_notext.appendChild(btn_save_notext);
              btn_img_fond_card.addEventListener("click", function () {
                const input = document.createElement("input");
                input.type = "file";
                function handleFileSelect(event) {
                  const selectedFile = event.target.files[0];

                  if (selectedFile) {
                    localStorage.setItem("img_name", selectedFile.name);
                    const reader = new FileReader();

                    reader.onload = function (event) {
                      const fileContent = event.target.result;

                      // Enregistrez le contenu du fichier dans le localStorage
                      localStorage.setItem("Img_fond", fileContent);

                      const textfond = document.querySelector(".input_fond_card");

                      textfond.value = selectedFile.name;
                    };

                    reader.readAsDataURL(selectedFile);
                  }
                }
                // Ajoutez un gestionnaire d'événements pour l'événement de changement (sélection de fichier)
                input.addEventListener("change", handleFileSelect);

                // Cliquez sur l'élément input (c'est-à-dire ouvrez l'explorateur de fichiers)
                input.click();
              });
              btn_save_notext.addEventListener("click", function () {
                const number_img = document.querySelector(".input_counter").value;
                const newHTML =
                  document.querySelector(".input_html_custom").value;
                const newCSS = document.querySelector(".input_css_custom").value;
                const newFond = document.querySelector(".input_fond_card").value;

                const accordion_content = document.querySelectorAll(".accordion .accordion-content");
                accordion_content.forEach((content, i) => {
                  const inputElement = document.getElementById(
                    "input_question_" + (i + 1)
                  );

                  if (inputElement) {
                    const name_question = inputElement.value;

                    if (name_question) {
                      content.querySelector(".title").textContent = name_question


                    }
                  }
                  const inputElement2 = document.getElementById(
                    "input_reponse_" + (i + 1)
                  );

                  if (inputElement2) {
                    const name_reponse = inputElement.value;

                    if (name_reponse) {
                      content.querySelector(".title").textContent = name_reponse
                    }
                  }
                })


                if (number_img === "") {
                  resetLayout();
                  resetCards();
                  resetHeader();
                } else {
                  resetLayout();
                  resetHeader();
                  resetCards();
                  saved_create_notif();


                  const header_title = document.querySelector(".accordion");

                  if (number_img > accordion_content.length) {
                    for (let i = 0; i < (number_img - accordion_content.length); i++) {

                      const accordion_content2 = document.createElement("div");
                      accordion_content2.classList.add("accordion-content");
                      const header = document.createElement("header");

                      const title = document.createElement("h3");
                      title.classList.add("title");
                      title.id = "question_" + (i + accordion_content.length + 1);
                      title.textContent = "Question ?";
                      const icon = document.createElement("i");
                      icon.classList.add("bx");
                      icon.classList.add("bx-plus");

                      const p = document.createElement("p");
                      p.classList.add("description");
                      p.textContent = "Réponse";

                      p.id = "reponse_" + (i + accordion_content.length + 1);

                      header_title.appendChild(accordion_content2);

                      accordion_content2.appendChild(header);
                      header.appendChild(title);
                      header.appendChild(icon);
                      accordion_content2.appendChild(p);
                    }
                  } else if (number_img < accordion_content.length) {
                    const allAccordionContents =
                      document.querySelectorAll(".accordion-content");
                    if (allAccordionContents.length > 0) {
                      allAccordionContents[
                        allAccordionContents.length - 1
                      ].remove();
                    }
                  }
                }
                if (newHTML === "" && newCSS === "") {
                  resetLayout();
                  resetCards();
                } else {
                  selectedSection.style.cssText += newCSS;
                  selectedSection.innerHTML += newHTML;

                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
                if (newFond === "") {
                  resetLayout();
                  resetCards();
                } else {
                  const img_fond = localStorage.getItem("Img_fond");
                  const img_name = localStorage.getItem("img_name");
                  if (newFond.startsWith("https")) {
                    selectedSection.style.background = "url(" + newFond + ")";
                    selectedSection.style.backgroundSize = "cover";
                    selectedSection.style.backgroundPosition = "center";
                  }
                  if (img_fond) {
                    if (newFond === img_name) {
                      selectedSection.style.background = "url(" + img_fond + ")";
                      selectedSection.style.backgroundSize = "cover";
                      selectedSection.style.backgroundPosition = "center";
                    }
                  }
                  selectedSection.style.background = newFond;
                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
              });
            }
          }
          if (selectedSection.id === "Nos clients") {
            card_create();
            const card_index = document.querySelector(".card_index");
            const card = document.querySelector(".body_plus");
            const body_edit = document.querySelector(".body_edit");
            if (card || body_edit) {
            } else {
              const card = document.createElement("div");
              card.classList.add("body_edit");
              card_index.appendChild(card);
              //code title "nos clients"
              const title_card = document.createElement("h1");
              title_card.textContent = "Titre";
              card.appendChild(title_card);
              const br1 = document.createElement("br");

              card.appendChild(br1);
              const input_title_card = document.createElement("input");
              input_title_card.type = "text";
              input_title_card.classList.add("input_title_card");
              input_title_card.value = selectedSection.querySelector("h2").textContent; // Utiliser la valeur récupérée ici
              card.appendChild(input_title_card);
              const br2 = document.createElement("br");

              card.appendChild(br2);
              const flex_colum = document.querySelectorAll(
                ".flex_colum .block_list"
              );
              for (let i = 0; i < flex_colum.length; i++) {
                // code lien
                const lien_title = document.createElement("div");

                lien_title.textContent = "Personnalisez le lien de l'image";
                card.appendChild(lien_title);
                const br_10 = document.createElement("br");
                card.appendChild(br_10);

                const input_link_custom = document.createElement("input");
                input_link_custom.classList.add("input_link_custom");
                input_link_custom.type = "text";
                input_link_custom.id = "input_link_" + (i + 1);
                input_link_custom.placeholder = "https://images.unsplash.com/";
                const block_list = document.getElementById(
                  "block_list" + (i + 1)
                );

                const img_block_list = document.getElementById("img" + (i + 1));

                input_link_custom.value = img_block_list.src;
                card.appendChild(input_link_custom);
                const br_1 = document.createElement("br");

                card.appendChild(br_1);
                const title_card_block_list = document.createElement("h2");
                title_card_block_list.textContent = "Titre";
                card.appendChild(title_card_block_list);
                const br_2 = document.createElement("br");

                card.appendChild(br_2);
                const input_title_card_block_list =
                  document.createElement("input");
                input_title_card_block_list.type = "text";
                input_title_card_block_list.id = "input_title_" + (i + 1);
                input_title_card_block_list.classList.add(
                  "input_title_card_block_list"
                );
                const text_p_title_block_list = document.getElementById(
                  "text_p_title_block_list" + (i + 1)
                );

                input_title_card_block_list.value =
                  text_p_title_block_list.textContent; // Utiliser la valeur récupérée ici
                card.appendChild(input_title_card_block_list);
                const br_3 = document.createElement("br");

                card.appendChild(br_3);
                //code para
                const paragraph_card = document.createElement("div");
                paragraph_card.textContent = "Paragraphe";
                card.appendChild(paragraph_card);
                const br_4 = document.createElement("br");

                card.appendChild(br_4);
                const input_paragraph_card = document.createElement("textarea");

                input_paragraph_card.id = "input_paragraph_" + (i + 1);
                input_paragraph_card.classList.add("input_paragraph_card");
                const text_p_block_list = document.getElementById(
                  "text_p_block_list" + (i + 1)
                );
                input_paragraph_card.value = text_p_block_list.textContent; // Utiliser la valeur récupérée ici

                card.appendChild(input_paragraph_card);
                const br_5 = document.createElement("br");

                card.appendChild(br_5);
                //code more_info
                const more_info_card = document.createElement("div");
                more_info_card.textContent = "Texte du Bouton";
                card.appendChild(more_info_card);
                const br_6 = document.createElement("br");

                card.appendChild(br_6);
                const input_more_info_card = document.createElement("textarea");

                input_more_info_card.id = "input_more_info_" + (i + 1);
                input_more_info_card.classList.add("input_more_info_card");
                const more_info = document.getElementById("more_info" + (i + 1));
                input_more_info_card.value = more_info.textContent; // Utiliser la valeur récupérée ici

                card.appendChild(input_more_info_card);
                const br_7 = document.createElement("br");

                card.appendChild(br_7);
              }


              const computedStyle = window.getComputedStyle(selectedSection);
              // code fond
              const colorfond = computedStyle.getPropertyValue("background");


              const fond_card = document.createElement("div");
              fond_card.textContent = "Fond";
              card.appendChild(fond_card);
              const br12 = document.createElement("br");

              card.appendChild(br12);
              const input_fond = document.createElement("div");

              input_fond.classList.add("input_fond");

              card.appendChild(input_fond);

              const preview_fond_card = document.createElement("div");

              preview_fond_card.classList.add("preview_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                preview_fond_card.style.background = colorfond; // Utiliser la valeur récupérée ici
              } else {

                preview_fond_card.style.backgroundImage = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(preview_fond_card);
              const input_fond_card = document.createElement("input");
              input_fond_card.type = "text";
              input_fond_card.placeholder = "#XXX, Lien";
              input_fond_card.classList.add("input_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                input_fond_card.value = colorfond; // Utiliser la valeur récupérée ici
              } else {
                input_fond_card.value = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(input_fond_card);
              const btn_img_fond_card = document.createElement("button");
              btn_img_fond_card.type = "file";
              btn_img_fond_card.classList.add("btn_img_fond_card");
              input_fond.appendChild(btn_img_fond_card);
              const icon_btn_img = document.createElement("i");
              icon_btn_img.classList.add("bx");
              icon_btn_img.classList.add("bx-image");

              btn_img_fond_card.appendChild(icon_btn_img);
              const br11 = document.createElement("br");

              card.appendChild(br11);
              // custom html
              const html_custom = document.createElement("div");
              html_custom.classList.add("html_custom");

              html_custom.textContent = "Personnalisez le HTML";
              card.appendChild(html_custom);
              const br5 = document.createElement("br");

              card.appendChild(br5);
              const input_html_custom = document.createElement("textarea");
              input_html_custom.classList.add("input_html_custom");


              card.appendChild(input_html_custom);
              //custom css
              const br6 = document.createElement("br");

              card.appendChild(br6);
              const css_custom = document.createElement("div");
              css_custom.textContent = "Personnalisez le CSS";
              card.appendChild(css_custom);

              const input_css_custom = document.createElement("textarea");
              input_css_custom.classList.add("input_css_custom");

              const br7 = document.createElement("br");

              card.appendChild(br7);
              card.appendChild(input_css_custom);
              // btn save
              const br8 = document.createElement("br");

              card.appendChild(br8);
              const div_save_notext = document.createElement("div");

              div_save_notext.classList.add("div_to_save");

              card.appendChild(div_save_notext);
              const btn_save_notext = document.createElement("button");

              btn_save_notext.textContent = "Sauvegarder";

              div_save_notext.classList.add("btn_save_notext");
              div_save_notext.appendChild(btn_save_notext);
              btn_img_fond_card.addEventListener("click", function () {
                const input = document.createElement("input");
                input.type = "file";
                function handleFileSelect(event) {
                  const selectedFile = event.target.files[0];

                  if (selectedFile) {
                    localStorage.setItem("img_name", selectedFile.name);
                    const reader = new FileReader();

                    reader.onload = function (event) {
                      const fileContent = event.target.result;

                      // Enregistrez le contenu du fichier dans le localStorage
                      localStorage.setItem("Img_fond", fileContent);

                      const textfond = document.querySelector(".input_fond_card");

                      textfond.value = selectedFile.name;
                    };

                    reader.readAsDataURL(selectedFile);
                  }
                }
                // Ajoutez un gestionnaire d'événements pour l'événement de changement (sélection de fichier)
                input.addEventListener("change", handleFileSelect);

                // Cliquez sur l'élément input (c'est-à-dire ouvrez l'explorateur de fichiers)
                input.click();
              });
              btn_save_notext.addEventListener("click", function () {
                const newHTML =
                  document.querySelector(".input_html_custom").value;
                const newCSS = document.querySelector(".input_css_custom").value;
                const newFond = document.querySelector(".input_fond_card").value;
                const title = document.querySelector(".input_title_card").value;

                const length_img = document.querySelectorAll(
                  ".card_index input.input_link_custom "
                );
                length_img.length;

                for (let i = 0; i < length_img.length; i++) {
                  const inputElement = document.getElementById(
                    "input_link_" + (i + 1)
                  );

                  if (inputElement) {
                    const name_img = inputElement.value;

                    if (name_img) {
                      const img = document.getElementById("img" + (i + 1));

                      img.textContent = name_img;
                    }
                  }
                }
                const length_text_p_title_block_list = document.querySelectorAll(
                  ".card_index input.input_title_card_block_list "
                );
                length_text_p_title_block_list.length;
                for (let i = 0; i < length_text_p_title_block_list.length; i++) {
                  const inputElement = document.getElementById(
                    "input_title_" + (i + 1)
                  );

                  if (inputElement) {
                    const name_title = inputElement.value;

                    if (name_title) {
                      const title = document.getElementById(
                        "text_p_title_block_list" + (i + 1)
                      );

                      title.textContent = name_title;
                    }
                  }
                }
                const length_text_p_block_list = document.querySelectorAll(
                  ".card_index textarea.input_paragraph_card"
                );
                length_text_p_block_list.length;
                for (let i = 0; i < length_text_p_block_list.length; i++) {
                  const inputElement = document.getElementById(
                    "input_paragraph_" + (i + 1)
                  );

                  if (inputElement) {
                    const name_paragraph = inputElement.value;

                    if (name_paragraph) {
                      const paragraph = document.getElementById(
                        "text_p_block_list" + (i + 1)
                      );

                      paragraph.textContent = name_paragraph;
                    }
                  }
                }
                const length_more_info = document.querySelectorAll(
                  ".card_index textarea.input_more_info_card"
                );
                length_more_info.length;
                for (let i = 0; i < length_more_info.length; i++) {
                  const inputElement = document.getElementById(
                    "input_more_info_" + (i + 1)
                  );

                  if (inputElement) {
                    const name_more_info = inputElement.value;

                    if (name_more_info) {
                      const more_info = document.getElementById(
                        "more_info" + (i + 1)
                      );

                      more_info.textContent = name_more_info;
                    }
                  }
                }
                if (title === "") {
                  resetLayout();
                  resetCards();
                } else {
                  const nos_clients = document.querySelector(".nos_clients");
                  const h2_nos_clients = nos_clients.querySelector("h2");
                  h2_nos_clients.textContent = title;
                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
                if (newHTML === "" && newCSS === "") {
                  resetLayout();
                  resetCards();
                } else {
                  selectedSection.style.cssText += newCSS;
                  selectedSection.innerHTML += newHTML;

                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
                if (newFond === "") {
                  resetLayout();
                  resetCards();
                } else {
                  const img_fond = localStorage.getItem("Img_fond");
                  const img_name = localStorage.getItem("img_name");
                  if (newFond.startsWith("https")) {
                    selectedSection.style.background = "url(" + newFond + ")";
                    selectedSection.style.backgroundSize = "cover";
                    selectedSection.style.backgroundPosition = "center";
                  }
                  if (img_fond) {
                    if (newFond === img_name) {
                      selectedSection.style.background = "url(" + img_fond + ")";
                      selectedSection.style.backgroundSize = "cover";
                      selectedSection.style.backgroundPosition = "center";
                    }
                  }
                  selectedSection.style.background = newFond;
                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
              });
            }
          }
          if (selectedSection.id === "Map") {
            card_create();
            const card_index = document.querySelector(".card_index");
            const card = document.querySelector(".body_plus");
            const body_edit = document.querySelector(".body_edit");
            if (card || body_edit) {
            } else {
              const card = document.createElement("div");
              card.classList.add("body_edit");
              card_index.appendChild(card);
              //code title "nos clients"
              const title_card = document.createElement("h1");
              title_card.textContent = "Lien pour l'embed de la map";
              card.appendChild(title_card);
              const br1 = document.createElement("br");

              card.appendChild(br1);
              const input_embed_card = document.createElement("input");
              input_embed_card.type = "text";
              input_embed_card.classList.add("input_embed_card");
              input_embed_card.value =
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57151.58778704201!2d2.307570282021989!3d48.859606023815694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1698594655945!5m2!1sfr!2sfr"; // Utiliser la valeur récupérée ici
              card.appendChild(input_embed_card);
              const br2 = document.createElement("br");

              card.appendChild(br2);

              // btn save
              const br8 = document.createElement("br");

              card.appendChild(br8);
              const div_save_notext = document.createElement("div");

              div_save_notext.classList.add("div_to_save");

              card.appendChild(div_save_notext);
              const btn_save_notext = document.createElement("button");

              btn_save_notext.textContent = "Sauvegarder";

              div_save_notext.classList.add("btn_save_notext");
              div_save_notext.appendChild(btn_save_notext);

              btn_save_notext.addEventListener("click", function () {
                const input_embed_card =
                  document.querySelector(".input_embed_card").value;

                if (input_embed_card === "") {
                  resetLayout();
                  resetCards();
                } else {
                  const embed_carte = selectedSection.querySelector("iframe");
                  embed_carte.src = input_embed_card;

                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
              });
            }
          }
          if (selectedSection.id === "3D") {
            card_create();
            const card_index = document.querySelector(".card_index");
            const card = document.querySelector(".body_plus");
            const body_edit = document.querySelector(".body_edit");
            if (card || body_edit) {
            } else {
              const card = document.createElement("div");
              card.classList.add("body_edit");
              card_index.appendChild(card);
              //code title "nos clients"
              const title_card = document.createElement("h1");
              title_card.textContent = "Lien pour l'embed de modèle 3D";
              card.appendChild(title_card);
              const br1 = document.createElement("br");

              card.appendChild(br1);
              const input_embed_card = document.createElement("input");
              input_embed_card.type = "text";
              input_embed_card.classList.add("input_embed_card");
              input_embed_card.value =
                "https://prod.spline.design/UWoeqiir20o49Dah/scene.splinecode"; // Utiliser la valeur récupérée ici
              card.appendChild(input_embed_card);
              const br2 = document.createElement("br");

              card.appendChild(br2);

              // btn save
              const br8 = document.createElement("br");

              card.appendChild(br8);
              const div_save_notext = document.createElement("div");

              div_save_notext.classList.add("div_to_save");

              card.appendChild(div_save_notext);
              const btn_save_notext = document.createElement("button");

              btn_save_notext.textContent = "Sauvegarder";

              div_save_notext.classList.add("btn_save_notext");
              div_save_notext.appendChild(btn_save_notext);

              btn_save_notext.addEventListener("click", function () {
                const input_embed_card =
                  document.querySelector(".input_embed_card").value;

                if (input_embed_card === "") {
                  resetLayout();
                  resetCards();
                } else {
                  const embed_carte =
                    selectedSection.querySelector("spline-viewer");
                  embed_carte.url = input_embed_card;

                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
              });
            }
          }
          if (selectedSection.id === "Réseaux sociaux") {
            card_create();
            const wrapper_btn_rs = document.querySelectorAll(".wrapper_sociaux .button");
            const card_index = document.querySelector(".card_index");
            const card = document.querySelector(".body_plus");
            const body_edit = document.querySelector(".body_edit");
            if (card || body_edit) {
            } else {
              const card = document.createElement("div");
              card.classList.add("body_edit");
              card_index.appendChild(card);
              //code title "nos clients"
              const title_card = document.createElement("h1");
              title_card.textContent = "Nombre de réseaux sociaux";
              card.appendChild(title_card);
              const br1 = document.createElement("br");

              card.appendChild(br1);

 for (let i = 0; i < wrapper_btn_rs.length; i++) {
                
                const br_4 = document.createElement("br");

                card.appendChild(br_4);
                const rs_title = document.createElement("div");

                rs_title.textContent = "Personnalisez le lien des réseaux sociaux (Dans l'ordre)";
                card.appendChild(rs_title);
                const br12 = document.createElement("br");
                card.appendChild(br12);

                const input_rs_custom = document.createElement("input");
                input_rs_custom.classList.add("input_rs_custom");
                input_rs_custom.type = "text";
                input_rs_custom.id = "input_rs_" + (i + 1);
                input_rs_custom.placeholder = "Lien";
                const link_rs_a = document.getElementById(
                  "rs_" + (i + 1)
                );

                const link_rs_a_href = link_rs_a.href

                if (link_rs_a_href && link_rs_a_href !== "http://127.0.0.1:3532/Generate/index_generate.html#") {
                  input_rs_custom.value = link_rs_a_href;
                }


                card.appendChild(input_rs_custom);
                const br_5 = document.createElement("br");

                card.appendChild(br_5);

              }
              const computedStyle = window.getComputedStyle(selectedSection);
              // code fond
              const colorfond = computedStyle.getPropertyValue("background");


              const fond_card = document.createElement("div");
              fond_card.textContent = "Fond";
              card.appendChild(fond_card);
              const br12 = document.createElement("br");

              card.appendChild(br12);
              const input_fond = document.createElement("div");

              input_fond.classList.add("input_fond");

              card.appendChild(input_fond);

              const preview_fond_card = document.createElement("div");

              preview_fond_card.classList.add("preview_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                preview_fond_card.style.background = colorfond; // Utiliser la valeur récupérée ici
              } else {

                preview_fond_card.style.backgroundImage = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(preview_fond_card);
              const input_fond_card = document.createElement("input");
              input_fond_card.type = "text";
              input_fond_card.placeholder = "#XXX, Lien";
              input_fond_card.classList.add("input_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                input_fond_card.value = colorfond; // Utiliser la valeur récupérée ici
              } else {
                input_fond_card.value = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(input_fond_card);
              const btn_img_fond_card = document.createElement("button");
              btn_img_fond_card.type = "file";
              btn_img_fond_card.classList.add("btn_img_fond_card");
              input_fond.appendChild(btn_img_fond_card);
              const icon_btn_img = document.createElement("i");
              icon_btn_img.classList.add("bx");
              icon_btn_img.classList.add("bx-image");

              btn_img_fond_card.appendChild(icon_btn_img);
              const br11 = document.createElement("br");

              card.appendChild(br11);
              // custom html
              const html_custom = document.createElement("div");
              html_custom.classList.add("html_custom");

              html_custom.textContent = "Personnalisez le HTML";
              card.appendChild(html_custom);
              const br5 = document.createElement("br");

              card.appendChild(br5);
              const input_html_custom = document.createElement("textarea");
              input_html_custom.classList.add("input_html_custom");


              card.appendChild(input_html_custom);
              //custom css
              const br6 = document.createElement("br");

              card.appendChild(br6);
              const css_custom = document.createElement("div");
              css_custom.textContent = "Personnalisez le CSS";
              card.appendChild(css_custom);

              const input_css_custom = document.createElement("textarea");
              input_css_custom.classList.add("input_css_custom");

              const br7 = document.createElement("br");

              card.appendChild(br7);
              card.appendChild(input_css_custom);

              const br2 = document.createElement("br");

              card.appendChild(br2);

              // btn save
              const br8 = document.createElement("br");

              card.appendChild(br8);
              const div_save_notext = document.createElement("div");

              div_save_notext.classList.add("div_to_save");

              card.appendChild(div_save_notext);
              const btn_save_notext = document.createElement("button");

              btn_save_notext.textContent = "Sauvegarder";

              div_save_notext.classList.add("btn_save_notext");
              div_save_notext.appendChild(btn_save_notext);

              btn_save_notext.addEventListener("click", function () {

                const newHTML =
                  document.querySelector(".input_html_custom").value;
                const newCSS = document.querySelector(".input_css_custom").value;
                const newFond = document.querySelector(".input_fond_card").value;
                const length_link_rs = document.querySelectorAll(
                  ".card_index input.input_rs_custom "
                );
                length_link_rs.length;
                for (let i = 0; i < length_link_rs.length; i++) {
                  const inputElement = document.getElementById(
                    "input_rs_" + (i + 1)
                  );

                  if (inputElement) {
                    const link_rs = inputElement.value;

                    if (link_rs) {
                      const link_rs_a = document.getElementById(
                        "rs_" + (i + 1)
                      );

                      link_rs_a.href = link_rs;
                      const btn_name_rs = link_rs_a.textContent
                      const div_name_rs = document.querySelector("." + btn_name_rs)

                      div_name_rs.style.display = "block"
                    } else {
                      const link_rs_a = document.getElementById(
                        "rs_" + (i + 1)
                      );

                      const btn_name_rs = link_rs_a.textContent
                      const div_name_rs = document.querySelector("." + btn_name_rs)

                      div_name_rs.style.display = "none"
                    }
                  }
                }



                if (newHTML === "" && newCSS === "") {
                  resetLayout();
                  resetCards();
                } else {
                  selectedSection.style.cssText += newCSS;
                  selectedSection.innerHTML += newHTML;

                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
                if (newFond === "") {
                  resetLayout();
                  resetCards();
                } else {
                  const img_fond = localStorage.getItem("Img_fond");
                  const img_name = localStorage.getItem("img_name");
                  if (newFond.startsWith("https")) {
                    selectedSection.style.background = "url(" + newFond + ")";
                    selectedSection.style.backgroundSize = "cover";
                    selectedSection.style.backgroundPosition = "center";
                  }
                  if (img_fond) {
                    if (newFond === img_name) {
                      selectedSection.style.background = "url(" + img_fond + ")";
                      selectedSection.style.backgroundSize = "cover";
                      selectedSection.style.backgroundPosition = "center";
                    }
                  }
                  selectedSection.style.background = newFond;
                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
              });
            }
          }
          if (selectedSection.id === "Partenaires") {
            const partenaire_item = document.querySelectorAll(".partner-gallery .partner-item");
            card_create();
            const card_index = document.querySelector(".card_index");
            const card = document.querySelector(".body_plus");
            const body_edit = document.querySelector(".body_edit");
            if (card || body_edit) {
            } else {
              const card = document.createElement("div");
              card.classList.add("body_edit");
              card_index.appendChild(card);
              //code title "nos clients"
              const title_card = document.createElement("h1");
              title_card.textContent = "Nombre d'images partenaires";
              card.appendChild(title_card);
              const br1 = document.createElement("br");

              card.appendChild(br1);
              const title_partener = document.createElement("input");
              title_partener.classList.add("title_partener")
              title_partener.placeholder = "Nos partenaires";
              title_partener.value = selectedSection.querySelector("h1").textContent;
              card.appendChild(title_partener)
              const br1_2 = document.createElement("br");

              card.appendChild(br1_2);
              const counter_img_partener = document.createElement("div");
              counter_img_partener.classList.add("counter_img_partener");
              card.appendChild(counter_img_partener);
              const btn_minus = document.createElement("button");
              counter_img_partener.appendChild(btn_minus);
              const i_minus = document.createElement("i");
              i_minus.classList.add("bx");
              i_minus.classList.add("bx-minus");
              btn_minus.appendChild(i_minus);
              const input_counter = document.createElement("input");
              input_counter.classList.add("input_counter");
              input_counter.type = "text";
              input_counter.value = partenaire_item.length;

              counter_img_partener.appendChild(input_counter);
              const btn_plus = document.createElement("button");
              counter_img_partener.appendChild(btn_plus);
              const i_plus = document.createElement("i");
              i_plus.classList.add("bx");
              i_plus.classList.add("bx-plus");
              btn_plus.appendChild(i_plus);
              let score = parseInt(input_counter.value);
              btn_plus.addEventListener("click", function () {
                score++;
                input_counter.value = score;
              });
              btn_minus.addEventListener("click", () => {
                if (score > 1) {
                  score--;
                  input_counter.value = score;
                }
              });
              partenaire_item.forEach((item, i) => {
                const br_4 = document.createElement("br");

                card.appendChild(br_4);
                const img_partener_title = document.createElement("div");

                img_partener_title.textContent = "Personnalisez le lien des images des partenaires";
                card.appendChild(img_partener_title);
                const br12 = document.createElement("br");
                card.appendChild(br12);

                const input_img_partener_title_custom = document.createElement("input");
                input_img_partener_title_custom.classList.add("input_img_partener_title_custom");
                input_img_partener_title_custom.type = "text";
                input_img_partener_title_custom.id = "input_img_partener_" + (i + 1);
                input_img_partener_title_custom.placeholder = "Lien";
                input_img_partener_title_custom.value = item.querySelector("img").src;

                card.appendChild(input_img_partener_title_custom);
                const br_5 = document.createElement("br");

                card.appendChild(br_5);
              })

              const computedStyle = window.getComputedStyle(selectedSection);
              // code fond
              const colorfond = computedStyle.getPropertyValue("background");


              const fond_card = document.createElement("div");
              fond_card.textContent = "Fond";
              card.appendChild(fond_card);
              const br12 = document.createElement("br");

              card.appendChild(br12);
              const input_fond = document.createElement("div");

              input_fond.classList.add("input_fond");

              card.appendChild(input_fond);

              const preview_fond_card = document.createElement("div");

              preview_fond_card.classList.add("preview_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                preview_fond_card.style.background = colorfond; // Utiliser la valeur récupérée ici
              } else {

                preview_fond_card.style.backgroundImage = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(preview_fond_card);
              const input_fond_card = document.createElement("input");
              input_fond_card.type = "text";
              input_fond_card.placeholder = "#XXX, Lien";
              input_fond_card.classList.add("input_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                input_fond_card.value = colorfond; // Utiliser la valeur récupérée ici
              } else {
                input_fond_card.value = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(input_fond_card);
              const btn_img_fond_card = document.createElement("button");
              btn_img_fond_card.type = "file";
              btn_img_fond_card.classList.add("btn_img_fond_card");
              input_fond.appendChild(btn_img_fond_card);
              const icon_btn_img = document.createElement("i");
              icon_btn_img.classList.add("bx");
              icon_btn_img.classList.add("bx-image");

              btn_img_fond_card.appendChild(icon_btn_img);
              const br11 = document.createElement("br");

              card.appendChild(br11);
              // custom html
              const html_custom = document.createElement("div");
              html_custom.classList.add("html_custom");

              html_custom.textContent = "Personnalisez le HTML";
              card.appendChild(html_custom);
              const br5 = document.createElement("br");

              card.appendChild(br5);
              const input_html_custom = document.createElement("textarea");
              input_html_custom.classList.add("input_html_custom");


              card.appendChild(input_html_custom);
              //custom css
              const br6 = document.createElement("br");

              card.appendChild(br6);
              const css_custom = document.createElement("div");
              css_custom.textContent = "Personnalisez le CSS";
              card.appendChild(css_custom);

              const input_css_custom = document.createElement("textarea");
              input_css_custom.classList.add("input_css_custom");

              const br7 = document.createElement("br");

              card.appendChild(br7);
              card.appendChild(input_css_custom);

              const br2 = document.createElement("br");

              card.appendChild(br2);

              // btn save
              const br8 = document.createElement("br");

              card.appendChild(br8);
              const div_save_notext = document.createElement("div");

              div_save_notext.classList.add("div_to_save");

              card.appendChild(div_save_notext);
              const btn_save_notext = document.createElement("button");

              btn_save_notext.textContent = "Sauvegarder";

              div_save_notext.classList.add("btn_save_notext");
              div_save_notext.appendChild(btn_save_notext);

              btn_save_notext.addEventListener("click", function () {

                const nb_img_partener =
                  document.querySelector(".input_counter").value;

                const title_partener_new =
                  document.querySelector(".title_partener").value;
                const newHTML =
                  document.querySelector(".input_html_custom").value;
                const newCSS = document.querySelector(".input_css_custom").value;
                const newFond = document.querySelector(".input_fond_card").value;
                const partenaire_item = document.querySelectorAll(".partner-gallery .partner-item");
                partenaire_item.forEach((img, i) => {
                  const inputElement = document.getElementById(
                    "input_img_partener_" + (i + 1)
                  );

                  if (inputElement) {
                    const link_img_partener = inputElement.value;

                    if (link_img_partener) {
                      const link_img_partener_img = document.getElementById(
                        "img_partener_" + (i + 1)
                      );
                      const div_name_link_img_partener_img = document.getElementById("pi_" + "img_partener_" + (i + 1))


                      link_img_partener_img.src = link_img_partener;
                      div_name_link_img_partener_img.style.display = "flex"
                    }
                  }
                })


                if (nb_img_partener === "") {
                  resetLayout();
                  resetCards();
                  resetHeader();
                } else {
                  resetLayout();
                  resetHeader();
                  resetCards();
                  saved_create_notif();


                  const header_title = document.querySelector(".partner-gallery");
                  if (nb_img_partener > partenaire_item.length) {
                    for (let i = 0; i < (nb_img_partener - partenaire_item.length); i++) {
                      const partner_item = document.createElement("div");
                      partner_item.classList.add("partner-item");
                      partner_item.id = "img_partener_" + (i + partenaire_item.length + 1);
                      const img = document.createElement("img");
                      img.id = "img_partener_" + (i + partenaire_item.length + 1);
                      img.src = document.getElementById("img_partener_" + (i + 1)).src


                      header_title.appendChild(partner_item);
                      partner_item.appendChild(img);


                    }
                  } else if (nb_img_partener < partenaire_item.length) {
                    const allpartner_item =
                      document.querySelectorAll(".partner-item");

                    if (allpartner_item.length > 0) {
                      allpartner_item[
                        allpartner_item.length - 1
                      ].remove();
                    }
                  }
                }
                if (title_partener_new) {
                  selectedSection.querySelector("h1").textContent = title_partener_new
                }

                if (newHTML === "" && newCSS === "") {
                  resetLayout();
                  resetCards();
                } else {
                  selectedSection.style.cssText += newCSS;
                  selectedSection.innerHTML += newHTML;

                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
                if (newFond === "") {
                  resetLayout();
                  resetCards();
                } else {
                  const img_fond = localStorage.getItem("Img_fond");
                  const img_name = localStorage.getItem("img_name");
                  if (newFond.startsWith("https")) {
                    selectedSection.style.background = "url(" + newFond + ")";
                    selectedSection.style.backgroundSize = "cover";
                    selectedSection.style.backgroundPosition = "center";
                  }
                  if (img_fond) {
                    if (newFond === img_name) {
                      selectedSection.style.background = "url(" + img_fond + ")";
                      selectedSection.style.backgroundSize = "cover";
                      selectedSection.style.backgroundPosition = "center";
                    }
                  }
                  selectedSection.style.background = newFond;
                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
              });
            }
          }
          if (selectedSection.id === "Équipe") {
            const info_section = selectedSection.querySelectorAll(".card_eq")
            card_create();
            const card_index = document.querySelector(".card_index");
            const card = document.querySelector(".body_plus");
            const body_edit = document.querySelector(".body_edit");
            if (card || body_edit) {
            } else {
              const card = document.createElement("div");
              card.classList.add("body_edit");
              card_index.appendChild(card);
              //code title "nos clients"
              const title_card = document.createElement("h1");
              title_card.textContent = "Modification dans Equipe";
              card.appendChild(title_card);
              const br1 = document.createElement("br");

              card.appendChild(br1);
              //code card pour equipe
              const equipe_card = document.createElement("div");
              equipe_card.classList.add("equipe_card")
              card.appendChild(equipe_card);
              info_section.forEach((name, index) => {
                const nb_equipe_card = document.createElement("div");
                nb_equipe_card.classList.add("nb_equipe_card")
                equipe_card.appendChild(nb_equipe_card);

                const photo_equipe_card = document.createElement("img");
                photo_equipe_card.id = "photo_equipe_card" + (index + 1);
                photo_equipe_card.classList.add("photo_equipe_card");
                photo_equipe_card.src = name.querySelector(".image-content .card-image .card-img").src;
                nb_equipe_card.appendChild(photo_equipe_card);

                // Ajouter un gestionnaire d'événements de clic à l'image
                photo_equipe_card.addEventListener("click", function () {
                  // Créer un nouvel élément input de type "file"
                  const fileInput = document.createElement("input");
                  fileInput.type = "file";

                  // Ajouter un gestionnaire d'événements pour l'événement de changement de fichier
                  fileInput.addEventListener("change", function () {
                    // Vérifier si un fichier a été sélectionné
                    if (this.files && this.files[0]) {
                      const reader = new FileReader();

                      // Lire le contenu de l'image sélectionnée
                      reader.onload = function (e) {
                        // Mettre à jour la source de l'image avec le contenu du fichier sélectionné
                        photo_equipe_card.src = e.target.result;
                      };

                      // Lire le contenu du fichier en tant que URL de données
                      reader.readAsDataURL(this.files[0]);
                    }
                  });

                  // Cacher l'élément input de type "file"
                  fileInput.style.display = "none";

                  // Ajouter l'élément input au corps du document
                  document.body.appendChild(fileInput);

                  // Simuler un clic sur l'élément input de type "file" pour ouvrir la boîte de dialogue de sélection de fichier
                  fileInput.click();

                  // Supprimer l'élément input après avoir sélectionné le fichier
                  fileInput.remove();
                });

                const name_equipe_card = document.createElement("input");
                name_equipe_card.type = "text"
                name_equipe_card.placeholder = "Name"
                name_equipe_card.classList.add("name_equipe_card" + (index + 1));
                name_equipe_card.value = name.querySelector(".card-content_team .name").textContent
                nb_equipe_card.appendChild(name_equipe_card);
                const desc_equipe_card = document.createElement("textarea");
                desc_equipe_card.placeholder = "Description"
                desc_equipe_card.classList.add("desc_equipe_card" + (index + 1));
                desc_equipe_card.value = name.querySelector(".card-content_team .description").textContent
                nb_equipe_card.appendChild(desc_equipe_card);
                const eye_equipe_card = document.createElement("div");

                eye_equipe_card.id = "eye_equipe_card"
                eye_equipe_card.classList.add("eye_equipe_card" + (index + 1))
                nb_equipe_card.appendChild(eye_equipe_card);

                const i_eye_equipe_card = document.createElement("i");
                i_eye_equipe_card.classList.add("bx")
                if (window.getComputedStyle(name).display === "none") {
                  i_eye_equipe_card.classList.add("bx-low-vision")

                  nb_equipe_card.style.background = "#6d6d7b"

                } else {
                  i_eye_equipe_card.classList.add("bx-show")
                  nb_equipe_card.style.background = "#171718"
                }
                eye_equipe_card.appendChild(i_eye_equipe_card);
                eye_equipe_card.addEventListener("click", function () {
                  // Sélectionne l'icône de l'œil de l'équipe
                  const i_eye_equipe_card_base = document.querySelector(".eye_equipe_card" + (index + 1));
                  const i_eye_equipe_card = i_eye_equipe_card_base.querySelector(".bx");


                  // Vérifie si l'icône actuelle est "bx-show"
                  if (i_eye_equipe_card.classList.contains("bx-show")) {
                    // Remplace la classe "bx-show" par "bx-low-vision"
                    i_eye_equipe_card.classList.remove("bx-show");
                    i_eye_equipe_card.classList.add("bx-low-vision");
                    nb_equipe_card.style.background = "#6d6d7b"
                  } else {
                    nb_equipe_card.style.background = "#171718"
                    // Remplace la classe "bx-low-vision" par "bx-show"
                    i_eye_equipe_card.classList.remove("bx-low-vision");
                    i_eye_equipe_card.classList.add("bx-show");
                  }
                });
              })


              const computedStyle = window.getComputedStyle(selectedSection);
              // code fond
              const colorfond = computedStyle.getPropertyValue("background");


              const fond_card = document.createElement("div");
              fond_card.textContent = "Fond";
              card.appendChild(fond_card);
              const br12 = document.createElement("br");

              card.appendChild(br12);
              const input_fond = document.createElement("div");

              input_fond.classList.add("input_fond");

              card.appendChild(input_fond);

              const preview_fond_card = document.createElement("div");

              preview_fond_card.classList.add("preview_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                preview_fond_card.style.background = colorfond; // Utiliser la valeur récupérée ici
              } else {

                preview_fond_card.style.backgroundImage = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(preview_fond_card);
              const input_fond_card = document.createElement("input");
              input_fond_card.type = "text";
              input_fond_card.placeholder = "#XXX, Lien";
              input_fond_card.classList.add("input_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                input_fond_card.value = colorfond; // Utiliser la valeur récupérée ici
              } else {
                input_fond_card.value = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(input_fond_card);
              const btn_img_fond_card = document.createElement("button");
              btn_img_fond_card.type = "file";
              btn_img_fond_card.classList.add("btn_img_fond_card");
              input_fond.appendChild(btn_img_fond_card);
              const icon_btn_img = document.createElement("i");
              icon_btn_img.classList.add("bx");
              icon_btn_img.classList.add("bx-image");

              btn_img_fond_card.appendChild(icon_btn_img);
              const br11 = document.createElement("br");

              card.appendChild(br11);
              // custom html
              const html_custom = document.createElement("div");
              html_custom.classList.add("html_custom");

              html_custom.textContent = "Personnalisez le HTML";
              card.appendChild(html_custom);
              const br5 = document.createElement("br");

              card.appendChild(br5);
              const input_html_custom = document.createElement("textarea");
              input_html_custom.classList.add("input_html_custom");

              card.appendChild(input_html_custom);
              //custom css
              const br6 = document.createElement("br");

              card.appendChild(br6);
              const css_custom = document.createElement("div");
              css_custom.textContent = "Personnalisez le CSS";
              card.appendChild(css_custom);

              const input_css_custom = document.createElement("textarea");
              input_css_custom.classList.add("input_css_custom");

              const br7 = document.createElement("br");

              card.appendChild(br7);
              card.appendChild(input_css_custom);

              const br2 = document.createElement("br");

              card.appendChild(br2);

              // btn save
              const br8 = document.createElement("br");

              card.appendChild(br8);
              const div_save_notext = document.createElement("div");

              div_save_notext.classList.add("div_to_save");

              card.appendChild(div_save_notext);
              const btn_save_notext = document.createElement("button");

              btn_save_notext.textContent = "Sauvegarder";

              div_save_notext.classList.add("btn_save_notext");
              div_save_notext.appendChild(btn_save_notext);
              btn_save_notext.addEventListener("click", function () {


                const newHTML =
                  document.querySelector(".input_html_custom").value;
                const newCSS = document.querySelector(".input_css_custom").value;
                const newFond = document.querySelector(".input_fond_card").value;
                const info_section2 = selectedSection.querySelectorAll(".card_eq")
                info_section2.forEach((card, index) => {
                  const i_eye_equipe_card_base = document.querySelector(".eye_equipe_card" + (index + 1));
                  const eyeIcon = i_eye_equipe_card_base.querySelector(".bx");
                  // Récupérer les éléments correspondants dans info_section
                  const new_photo_equipe = document.getElementById("photo_equipe_card" + (index + 1)).src;
                  const new_name_equipe = document.querySelector(".name_equipe_card" + (index + 1)).value;
                  const new_desc_equipe = document.querySelector(".desc_equipe_card" + (index + 1)).value;

                  // Récupérer les valeurs mises à jour pour la deuxième partie du code

                  if (eyeIcon.classList.contains("bx-low-vision")) {
                    // Si oui, cacher l'élément card
                    card.style.display = "none";
                  } else {
                    // Sinon, afficher l'élément card
                    card.style.display = "block"; // ou "flex", "grid", etc., selon le type d'affichage utilisé
                  }
                  // Mettre à jour les éléments dans info_section2
                  card.querySelector(".image-content .card-image .card-img").src = new_photo_equipe;
                  card.querySelector(".card-content_team .name").textContent = new_name_equipe;
                  card.querySelector(".card-content_team .description").textContent = new_desc_equipe;
                });


                if (newHTML === "" && newCSS === "") {
                  resetLayout();
                  resetCards();
                } else {
                  selectedSection.style.cssText += newCSS;
                  selectedSection.innerHTML += newHTML;

                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
                if (newFond === "") {
                  resetLayout();
                  resetCards();
                } else {
                  const img_fond = localStorage.getItem("Img_fond");
                  const img_name = localStorage.getItem("img_name");
                  if (newFond.startsWith("https")) {
                    selectedSection.style.background = "url(" + newFond + ")";
                    selectedSection.style.backgroundSize = "cover";
                    selectedSection.style.backgroundPosition = "center";
                  }
                  if (img_fond) {
                    if (newFond === img_name) {
                      selectedSection.style.background = "url(" + img_fond + ")";
                      selectedSection.style.backgroundSize = "cover";
                      selectedSection.style.backgroundPosition = "center";
                    }
                  }
                  selectedSection.style.background = newFond;
                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
              });
            }
          }
          if (selectedSection.id === "Gallerie de photo") {
            const info_section = selectedSection.querySelectorAll(".card")
            card_create();
            const card_index = document.querySelector(".card_index");
            const card = document.querySelector(".body_plus");
            const body_edit = document.querySelector(".body_edit");
            if (card || body_edit) {
            } else {
              const card = document.createElement("div");
              card.classList.add("body_edit");
              card_index.appendChild(card);
              //code title "nos clients"
              const title_card = document.createElement("h1");
              title_card.textContent = "Modification dans Gallerie de photo";
              card.appendChild(title_card);
              const br1 = document.createElement("br");

              card.appendChild(br1);
              //code card pour gallerie
              const gallerie_card = document.createElement("div");
              gallerie_card.classList.add("gallerie_card")
              card.appendChild(gallerie_card);
              info_section.forEach((name, index) => {
                const nb_gallerie_card = document.createElement("div");
                nb_gallerie_card.classList.add("nb_gallerie_card")
                gallerie_card.appendChild(nb_gallerie_card);

                const photo_gallerie_card = document.createElement("img");
                photo_gallerie_card.id = "photo_gallerie_card" + (index + 1);
                photo_gallerie_card.classList.add("photo_gallerie_card");
                photo_gallerie_card.src = name.querySelector(".background").src;
                nb_gallerie_card.appendChild(photo_gallerie_card);

                // Ajouter un gestionnaire d'événements de clic à l'image
                photo_gallerie_card.addEventListener("click", function () {
                  // Créer un nouvel élément input de type "file"
                  const fileInput = document.createElement("input");
                  fileInput.type = "file";

                  // Ajouter un gestionnaire d'événements pour l'événement de changement de fichier
                  fileInput.addEventListener("change", function () {
                    // Vérifier si un fichier a été sélectionné
                    if (this.files && this.files[0]) {
                      const reader = new FileReader();

                      // Lire le contenu de l'image sélectionnée
                      reader.onload = function (e) {
                        // Mettre à jour la source de l'image avec le contenu du fichier sélectionné
                        photo_gallerie_card.src = e.target.result;
                      };

                      // Lire le contenu du fichier en tant que URL de données
                      reader.readAsDataURL(this.files[0]);
                    }
                  });

                  // Cacher l'élément input de type "file"
                  fileInput.style.display = "none";

                  // Ajouter l'élément input au corps du document
                  document.body.appendChild(fileInput);

                  // Simuler un clic sur l'élément input de type "file" pour ouvrir la boîte de dialogue de sélection de fichier
                  fileInput.click();

                  // Supprimer l'élément input après avoir sélectionné le fichier
                  fileInput.remove();
                });
                const dipslay_input = document.createElement("div");


                dipslay_input.classList.add("dipslay_input")
                nb_gallerie_card.appendChild(dipslay_input);
                const icon_gallerie_card = document.createElement("input");
                icon_gallerie_card.type = "text"
                icon_gallerie_card.placeholder = `<i class="bx bx-joystick"></i>`
                icon_gallerie_card.classList.add("icon_gallerie_card" + (index + 1));
                icon_gallerie_card.value = name.querySelector(".card-content .profile-image .bx").outerHTML
                dipslay_input.appendChild(icon_gallerie_card);
                const name_gallerie_card = document.createElement("input");
                name_gallerie_card.placeholder = "Nom"
                name_gallerie_card.classList.add("name_gallerie_card" + (index + 1));
                name_gallerie_card.value = name.querySelector(".card-content .title").textContent
                dipslay_input.appendChild(name_gallerie_card);
                const eye_gallerie_card = document.createElement("div");

                eye_gallerie_card.id = "eye_gallerie_card"
                eye_gallerie_card.classList.add("eye_gallerie_card" + (index + 1))
                nb_gallerie_card.appendChild(eye_gallerie_card);

                const i_eye_gallerie_card = document.createElement("i");
                i_eye_gallerie_card.classList.add("bx")
                if (window.getComputedStyle(name).display === "none") {
                  i_eye_gallerie_card.classList.add("bx-low-vision")

                  nb_gallerie_card.style.background = "#6d6d7b"

                } else {
                  i_eye_gallerie_card.classList.add("bx-show")
                  nb_gallerie_card.style.background = "#171718"
                }
                eye_gallerie_card.appendChild(i_eye_gallerie_card);
                eye_gallerie_card.addEventListener("click", function () {
                  // Sélectionne l'icône de l'œil de l'équipe
                  const i_eye_gallerie_card_base = document.querySelector(".eye_gallerie_card" + (index + 1));
                  const i_eye_gallerie_card = i_eye_gallerie_card_base.querySelector(".bx");


                  // Vérifie si l'icône actuelle est "bx-show"
                  if (i_eye_gallerie_card.classList.contains("bx-show")) {
                    // Remplace la classe "bx-show" par "bx-low-vision"
                    i_eye_gallerie_card.classList.remove("bx-show");
                    i_eye_gallerie_card.classList.add("bx-low-vision");
                    nb_gallerie_card.style.background = "#6d6d7b"
                  } else {
                    nb_gallerie_card.style.background = "#171718"
                    // Remplace la classe "bx-low-vision" par "bx-show"
                    i_eye_gallerie_card.classList.remove("bx-low-vision");
                    i_eye_gallerie_card.classList.add("bx-show");
                  }
                });
              })


              const computedStyle = window.getComputedStyle(selectedSection);
              // code fond
              const colorfond = computedStyle.getPropertyValue("background");


              const fond_card = document.createElement("div");
              fond_card.textContent = "Fond";
              card.appendChild(fond_card);
              const br12 = document.createElement("br");

              card.appendChild(br12);
              const input_fond = document.createElement("div");

              input_fond.classList.add("input_fond");

              card.appendChild(input_fond);

              const preview_fond_card = document.createElement("div");

              preview_fond_card.classList.add("preview_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                preview_fond_card.style.background = colorfond; // Utiliser la valeur récupérée ici
              } else {

                preview_fond_card.style.backgroundImage = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(preview_fond_card);
              const input_fond_card = document.createElement("input");
              input_fond_card.type = "text";
              input_fond_card.placeholder = "#XXX, Lien";
              input_fond_card.classList.add("input_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                input_fond_card.value = colorfond; // Utiliser la valeur récupérée ici
              } else {
                input_fond_card.value = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(input_fond_card);
              const btn_img_fond_card = document.createElement("button");
              btn_img_fond_card.type = "file";
              btn_img_fond_card.classList.add("btn_img_fond_card");
              input_fond.appendChild(btn_img_fond_card);
              const icon_btn_img = document.createElement("i");
              icon_btn_img.classList.add("bx");
              icon_btn_img.classList.add("bx-image");

              btn_img_fond_card.appendChild(icon_btn_img);
              const br11 = document.createElement("br");

              card.appendChild(br11);
              // custom html
              const html_custom = document.createElement("div");
              html_custom.classList.add("html_custom");

              html_custom.textContent = "Personnalisez le HTML";
              card.appendChild(html_custom);
              const br5 = document.createElement("br");

              card.appendChild(br5);
              const input_html_custom = document.createElement("textarea");
              input_html_custom.classList.add("input_html_custom");

              card.appendChild(input_html_custom);
              //custom css
              const br6 = document.createElement("br");

              card.appendChild(br6);
              const css_custom = document.createElement("div");
              css_custom.textContent = "Personnalisez le CSS";
              card.appendChild(css_custom);

              const input_css_custom = document.createElement("textarea");
              input_css_custom.classList.add("input_css_custom");

              const br7 = document.createElement("br");

              card.appendChild(br7);
              card.appendChild(input_css_custom);

              const br2 = document.createElement("br");

              card.appendChild(br2);

              // btn save
              const br8 = document.createElement("br");

              card.appendChild(br8);
              const div_save_notext = document.createElement("div");

              div_save_notext.classList.add("div_to_save");

              card.appendChild(div_save_notext);
              const btn_save_notext = document.createElement("button");

              btn_save_notext.textContent = "Sauvegarder";

              div_save_notext.classList.add("btn_save_notext");
              div_save_notext.appendChild(btn_save_notext);
              btn_save_notext.addEventListener("click", function () {


                const newHTML =
                  document.querySelector(".input_html_custom").value;
                const newCSS = document.querySelector(".input_css_custom").value;
                const newFond = document.querySelector(".input_fond_card").value;
                const info_section2 = selectedSection.querySelectorAll(".card")
                info_section2.forEach((card, index) => {
                  const i_eye_equipe_card_base = document.querySelector(".eye_gallerie_card" + (index + 1));
                  const eyeIcon = i_eye_equipe_card_base.querySelector(".bx");
                  // Récupérer les éléments correspondants dans info_section
                  const new_photo_equipe = document.getElementById("photo_gallerie_card" + (index + 1)).src;
                  const new_icon_equipe = document.querySelector(".icon_gallerie_card" + (index + 1)).value;
                  const new_name_equipe = document.querySelector(".name_gallerie_card" + (index + 1)).value;

                  // Récupérer les valeurs mises à jour pour la deuxième partie du code

                  if (eyeIcon.classList.contains("bx-low-vision")) {
                    // Si oui, cacher l'élément card
                    card.style.display = "none";
                  } else {
                    // Sinon, afficher l'élément card
                    card.style.display = "block"; // ou "flex", "grid", etc., selon le type d'affichage utilisé
                  }
                  // Mettre à jour les éléments dans info_section2
                  card.querySelector(".background").src = new_photo_equipe;
                  if (new_icon_equipe === card.querySelector(".card-content .profile-image .bx").outerHTML) {

                  } else {
                    card.querySelector(".card-content .profile-image .bx").innerHTML = new_icon_equipe;
                  }
                  card.querySelector(".card-content .title").textContent = new_name_equipe;
                });


                if (newHTML === "" && newCSS === "") {
                  resetLayout();
                  resetCards();
                } else {
                  selectedSection.style.cssText += newCSS;
                  selectedSection.innerHTML += newHTML;

                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
                if (newFond === "") {
                  resetLayout();
                  resetCards();
                } else {
                  const img_fond = localStorage.getItem("Img_fond");
                  const img_name = localStorage.getItem("img_name");
                  if (newFond.startsWith("https")) {
                    selectedSection.style.background = "url(" + newFond + ")";
                    selectedSection.style.backgroundSize = "cover";
                    selectedSection.style.backgroundPosition = "center";
                  }
                  if (img_fond) {
                    if (newFond === img_name) {
                      selectedSection.style.background = "url(" + img_fond + ")";
                      selectedSection.style.backgroundSize = "cover";
                      selectedSection.style.backgroundPosition = "center";
                    }
                  }
                  selectedSection.style.background = newFond;
                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
              });
            }
          }
          if (selectedSection.id === "Tarification") {
            const info_section = selectedSection.querySelectorAll(".wrapper_prix .card-area .cards .row")
            const header_label = selectedSection.querySelectorAll(".wrapper_prix header label")
            card_create();
            const card_index = document.querySelector(".card_index");
            const card = document.querySelector(".body_plus");
            const body_edit = document.querySelector(".body_edit");
            if (card || body_edit) {
            } else {
              const card = document.createElement("div");
              card.classList.add("body_edit");
              card_index.appendChild(card);
              //code title "nos clients"
              const title_card = document.createElement("h1");
              title_card.textContent = "Modification dans Tarification";
              card.appendChild(title_card);
              const br1 = document.createElement("br");

              card.appendChild(br1);
              //code card pour Tarification
              const tarification_card = document.createElement("div");
              tarification_card.classList.add("tarification_card")
              card.appendChild(tarification_card);
              info_section.forEach((name, index) => {
                const nb_tarification_card = document.createElement("div");
                nb_tarification_card.classList.add("nb_tarification_card")
                tarification_card.appendChild(nb_tarification_card);

                const eye_tarification_card = document.createElement("div");

                eye_tarification_card.id = "eye_tarification_card"
                eye_tarification_card.classList.add("eye_tarification_card" + (index + 1))
                nb_tarification_card.appendChild(eye_tarification_card);


                const header_tarification_card = document.createElement("input");
                header_tarification_card.type = "text"
                header_tarification_card.placeholder = `Free`
                header_tarification_card.classList.add("header_tarification_card" + (index + 1));

                header_tarification_card.value = header_label[index].textContent
                nb_tarification_card.appendChild(header_tarification_card);


                const prix_tarification_card = document.createElement("input");
                prix_tarification_card.placeholder = "99$"
                prix_tarification_card.classList.add("prix_tarification_card" + (index + 1));
                prix_tarification_card.value = name.querySelector(".price-details .price").textContent
                nb_tarification_card.appendChild(prix_tarification_card);

                const feature_nb = name.querySelectorAll(".features li")
                feature_nb.forEach((li, index) => {
                  const li_feature_tarification_card = document.createElement("input");
                  li_feature_tarification_card.placeholder = "une chose..."
                  li_feature_tarification_card.classList.add("li_feature_tarification_card" + (index + 1));
                  li_feature_tarification_card.value = li.querySelector("span").textContent
                  nb_tarification_card.appendChild(li_feature_tarification_card);
                })




                const i_eye_tarification_card = document.createElement("i");
                i_eye_tarification_card.classList.add("bx")
                if (window.getComputedStyle(name).display === "none") {
                  i_eye_tarification_card.classList.add("bx-low-vision")

                  nb_tarification_card.style.background = "#6d6d7b"

                } else {
                  i_eye_tarification_card.classList.add("bx-show")
                  nb_tarification_card.style.background = "#171718"
                }
                eye_tarification_card.appendChild(i_eye_tarification_card);
                eye_tarification_card.addEventListener("click", function () {
                  // Sélectionne l'icône de l'œil de l'équipe
                  const i_eye_tarification_card_base = document.querySelector(".eye_tarification_card" + (index + 1));
                  const i_eye_tarification_card = i_eye_tarification_card_base.querySelector(".bx");


                  // Vérifie si l'icône actuelle est "bx-show"
                  if (i_eye_tarification_card.classList.contains("bx-show")) {
                    // Remplace la classe "bx-show" par "bx-low-vision"
                    i_eye_tarification_card.classList.remove("bx-show");
                    i_eye_tarification_card.classList.add("bx-low-vision");
                    nb_tarification_card.style.background = "#6d6d7b"
                  } else {
                    nb_tarification_card.style.background = "#171718"
                    // Remplace la classe "bx-low-vision" par "bx-show"
                    i_eye_tarification_card.classList.remove("bx-low-vision");
                    i_eye_tarification_card.classList.add("bx-show");
                  }
                });
              })


              const computedStyle = window.getComputedStyle(selectedSection);
              // code fond
              const colorfond = computedStyle.getPropertyValue("background");


              const fond_card = document.createElement("div");
              fond_card.textContent = "Fond";
              card.appendChild(fond_card);
              const br12 = document.createElement("br");

              card.appendChild(br12);
              const input_fond = document.createElement("div");

              input_fond.classList.add("input_fond");

              card.appendChild(input_fond);

              const preview_fond_card = document.createElement("div");

              preview_fond_card.classList.add("preview_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                preview_fond_card.style.background = colorfond; // Utiliser la valeur récupérée ici
              } else {

                preview_fond_card.style.backgroundImage = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(preview_fond_card);
              const input_fond_card = document.createElement("input");
              input_fond_card.type = "text";
              input_fond_card.placeholder = "#XXX, Lien";
              input_fond_card.classList.add("input_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                input_fond_card.value = colorfond; // Utiliser la valeur récupérée ici
              } else {
                input_fond_card.value = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(input_fond_card);
              const btn_img_fond_card = document.createElement("button");
              btn_img_fond_card.type = "file";
              btn_img_fond_card.classList.add("btn_img_fond_card");
              input_fond.appendChild(btn_img_fond_card);
              const icon_btn_img = document.createElement("i");
              icon_btn_img.classList.add("bx");
              icon_btn_img.classList.add("bx-image");

              btn_img_fond_card.appendChild(icon_btn_img);
              const br11 = document.createElement("br");

              card.appendChild(br11);
              // custom html
              const html_custom = document.createElement("div");
              html_custom.classList.add("html_custom");

              html_custom.textContent = "Personnalisez le HTML";
              card.appendChild(html_custom);
              const br5 = document.createElement("br");

              card.appendChild(br5);
              const input_html_custom = document.createElement("textarea");
              input_html_custom.classList.add("input_html_custom");


              card.appendChild(input_html_custom);
              //custom css
              const br6 = document.createElement("br");

              card.appendChild(br6);
              const css_custom = document.createElement("div");
              css_custom.textContent = "Personnalisez le CSS";
              card.appendChild(css_custom);

              const input_css_custom = document.createElement("textarea");
              input_css_custom.classList.add("input_css_custom");

              const br7 = document.createElement("br");

              card.appendChild(br7);
              card.appendChild(input_css_custom);

              const br2 = document.createElement("br");

              card.appendChild(br2);

              // btn save
              const br8 = document.createElement("br");

              card.appendChild(br8);
              const div_save_notext = document.createElement("div");

              div_save_notext.classList.add("div_to_save");

              card.appendChild(div_save_notext);
              const btn_save_notext = document.createElement("button");

              btn_save_notext.textContent = "Sauvegarder";

              div_save_notext.classList.add("btn_save_notext");
              div_save_notext.appendChild(btn_save_notext);
              btn_save_notext.addEventListener("click", function () {


                const newHTML =
                  document.querySelector(".input_html_custom").value;
                const newCSS = document.querySelector(".input_css_custom").value;
                const newFond = document.querySelector(".input_fond_card").value;
                const info_section2 = selectedSection.querySelectorAll(".wrapper_prix .card-area .cards .row")
                info_section2.forEach((card, index) => {
                  const i_eye_tarification_card_base = document.querySelector(".eye_tarification_card" + (index + 1));
                  const eyeIcon = i_eye_tarification_card_base.querySelector(".bx");
                  // Récupérer les éléments correspondants dans info_section
                  const new_header_tarif = document.querySelector(".header_tarification_card" + (index + 1)).value;
                  const new_prix_tarif = document.querySelector(".prix_tarification_card" + (index + 1)).value;
                  const new_tl_prix_tarif = document.querySelector(".title_prix_tarification_card" + (index + 1)).value;


                  // Récupérer les valeurs mises à jour pour la deuxième partie du code

                  if (eyeIcon.classList.contains("bx-low-vision")) {
                    // Si oui, cacher l'élément card
                    card.style.display = "none";
                  } else {
                    // Sinon, afficher l'élément card
                    card.style.display = "block"; // ou "flex", "grid", etc., selon le type d'affichage utilisé
                  }
                  // Mettre à jour les éléments dans info_section2
                  header_label[index].textContent = new_header_tarif;

                  card.querySelector(".price-details .price").textContent = new_prix_tarif;
                  card.querySelector(".price-details p").textContent = new_tl_prix_tarif;
                  card.querySelectorAll(".features li").forEach((li, index) => { const new_li_feat_tarif = document.querySelector(".li_feature_tarification_card" + (index + 1)).value; li.querySelector("span").textContent = new_li_feat_tarif; })
                });


                if (newHTML === "" && newCSS === "") {
                  resetLayout();
                  resetCards();
                } else {
                  selectedSection.style.cssText += newCSS;
                  selectedSection.innerHTML += newHTML;

                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
                if (newFond === "") {
                  resetLayout();
                  resetCards();
                } else {
                  const img_fond = localStorage.getItem("Img_fond");
                  const img_name = localStorage.getItem("img_name");
                  if (newFond.startsWith("https")) {
                    selectedSection.style.background = "url(" + newFond + ")";
                    selectedSection.style.backgroundSize = "cover";
                    selectedSection.style.backgroundPosition = "center";
                  }
                  if (img_fond) {
                    if (newFond === img_name) {
                      selectedSection.style.background = "url(" + img_fond + ")";
                      selectedSection.style.backgroundSize = "cover";
                      selectedSection.style.backgroundPosition = "center";
                    }
                  }
                  selectedSection.style.background = newFond;
                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
              });
            }
          }
          if (selectedSection.id === "Produits") {
            const list_product_card = document.querySelectorAll(".list_product_card .product-card");
            card_create();
            const card_index = document.querySelector(".card_index");
            const card = document.querySelector(".body_plus");
            const body_edit = document.querySelector(".body_edit");
            if (card || body_edit) {
            } else {
              const card = document.createElement("div");
              card.classList.add("body_edit");
              card_index.appendChild(card);
              //code title "nos clients"
              const title_card = document.createElement("h1");
              title_card.textContent = "Nombre de carte de produits";
              card.appendChild(title_card);
              const br1 = document.createElement("br");

              card.appendChild(br1);
              const nos_produits_input = document.createElement("input");
              nos_produits_input.classList.add("nos_produits_input")
              nos_produits_input.placeholder = "Nos produits";
              nos_produits_input.value = selectedSection.querySelector("h1").textContent;
              card.appendChild(nos_produits_input)
              const br1_2 = document.createElement("br");
              card.appendChild(br1_2)

              const counter_img_partener = document.createElement("div");
              counter_img_partener.classList.add("counter_img_partener");
              card.appendChild(counter_img_partener);
              const btn_minus = document.createElement("button");
              counter_img_partener.appendChild(btn_minus);
              const i_minus = document.createElement("i");
              i_minus.classList.add("bx");
              i_minus.classList.add("bx-minus");
              btn_minus.appendChild(i_minus);
              const input_counter = document.createElement("input");
              input_counter.classList.add("input_counter");
              input_counter.type = "text";
              input_counter.value = list_product_card.length;

              counter_img_partener.appendChild(input_counter);
              const btn_plus = document.createElement("button");
              counter_img_partener.appendChild(btn_plus);
              const i_plus = document.createElement("i");
              i_plus.classList.add("bx");
              i_plus.classList.add("bx-plus");
              btn_plus.appendChild(i_plus);
              let score = parseInt(input_counter.value);
              btn_plus.addEventListener("click", function () {
                score++;
                input_counter.value = score;
              });
              btn_minus.addEventListener("click", () => {
                if (score > 1) {
                  score--;
                  input_counter.value = score;
                }
              });
              list_product_card.forEach((card_produit, i) => {


                const br_4 = document.createElement("br");

                card.appendChild(br_4);
                const img_card_product = document.createElement("div");

                img_card_product.textContent = "Personnalisez le lien des images des cartes produits";
                card.appendChild(img_card_product);
                const br12 = document.createElement("br");
                card.appendChild(br12);

                const input_card_product_custom = document.createElement("input");
                input_card_product_custom.classList.add("input_card_product_custom");
                input_card_product_custom.type = "text";
                input_card_product_custom.id = "input_card_product_custom_" + (i + 1);
                input_card_product_custom.placeholder = "Lien";
                input_card_product_custom.value = card_produit.querySelector("img").src;
                card.appendChild(input_card_product_custom);
                const br_5 = document.createElement("br");
                card.appendChild(br_5);

                const title_name_product = document.createElement("div");

                title_name_product.textContent = "Personnalisez le nom des cartes produits";
                card.appendChild(title_name_product);
                const br12_bis = document.createElement("br");
                card.appendChild(br12_bis);

                const input_card_product_custom_name = document.createElement("input");
                input_card_product_custom_name.classList.add("input_card_product_custom_name");
                input_card_product_custom_name.type = "text";
                input_card_product_custom_name.id = "input_card_product_custom_name_" + (i + 1);
                input_card_product_custom_name.placeholder = "Nom";
                input_card_product_custom_name.value = card_produit.querySelector(".shoe_name").textContent;
                card.appendChild(input_card_product_custom_name);
                const br_5_bis = document.createElement("br");
                card.appendChild(br_5_bis);
                const desc_product = document.createElement("div");

                desc_product.textContent = "Personnalisez la description des cartes produits";
                card.appendChild(desc_product);
                const br12_bis2 = document.createElement("br");
                card.appendChild(br12_bis2);

                const input_card_product_custom_desc = document.createElement("input");
                input_card_product_custom_desc.classList.add("input_card_product_custom_desc");
                input_card_product_custom_desc.type = "text";
                input_card_product_custom_desc.id = "input_card_product_custom_desc_" + (i + 1);
                input_card_product_custom_desc.placeholder = "Nom";
                input_card_product_custom_desc.value = card_produit.querySelector(".shoe-details p").textContent;
                card.appendChild(input_card_product_custom_desc);
                const br_5_bis2 = document.createElement("br");
                card.appendChild(br_5_bis2);
                const prix_product = document.createElement("div");

                prix_product.textContent = "Personnalisez le prix des cartes produits";
                card.appendChild(prix_product);
                const br12_bis3 = document.createElement("br");
                card.appendChild(br12_bis3);

                const input_card_product_custom_prix = document.createElement("input");
                input_card_product_custom_prix.classList.add("input_card_product_custom_prix");
                input_card_product_custom_prix.type = "text";
                input_card_product_custom_prix.id = "input_card_product_custom_prix_" + (i + 1);
                input_card_product_custom_prix.placeholder = "Nom";
                input_card_product_custom_prix.value = card_produit.querySelector(".price_num").textContent;
                card.appendChild(input_card_product_custom_prix);
                const br_5_bis3 = document.createElement("br");
                card.appendChild(br_5_bis3);

              })
              const computedStyle = window.getComputedStyle(selectedSection);
              // code fond
              const colorfond = computedStyle.getPropertyValue("background");
              const fond_card = document.createElement("div");
              fond_card.textContent = "Fond";
              card.appendChild(fond_card);
              const br12 = document.createElement("br");
              card.appendChild(br12);
              const input_fond = document.createElement("div");
              input_fond.classList.add("input_fond");
              card.appendChild(input_fond);
              const preview_fond_card = document.createElement("div");
              preview_fond_card.classList.add("preview_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                preview_fond_card.style.background = colorfond; // Utiliser la valeur récupérée ici
              } else {

                preview_fond_card.style.backgroundImage = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }
              input_fond.appendChild(preview_fond_card);
              const input_fond_card = document.createElement("input");
              input_fond_card.type = "text";
              input_fond_card.placeholder = "#XXX, Lien";
              input_fond_card.classList.add("input_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                input_fond_card.value = colorfond; // Utiliser la valeur récupérée ici
              } else {
                input_fond_card.value = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }
              input_fond.appendChild(input_fond_card);
              const btn_img_fond_card = document.createElement("button");
              btn_img_fond_card.type = "file";
              btn_img_fond_card.classList.add("btn_img_fond_card");
              input_fond.appendChild(btn_img_fond_card);
              const icon_btn_img = document.createElement("i");
              icon_btn_img.classList.add("bx");
              icon_btn_img.classList.add("bx-image");
              btn_img_fond_card.appendChild(icon_btn_img);
              const br11 = document.createElement("br");
              card.appendChild(br11);
              // custom html
              const html_custom = document.createElement("div");
              html_custom.classList.add("html_custom");
              html_custom.textContent = "Personnalisez le HTML";
              card.appendChild(html_custom);
              const br5 = document.createElement("br");
              card.appendChild(br5);
              const input_html_custom = document.createElement("textarea");
              input_html_custom.classList.add("input_html_custom");

              card.appendChild(input_html_custom);
              //custom css
              const br6 = document.createElement("br");
              card.appendChild(br6);
              const css_custom = document.createElement("div");
              css_custom.textContent = "Personnalisez le CSS";
              card.appendChild(css_custom);
              const input_css_custom = document.createElement("textarea");
              input_css_custom.classList.add("input_css_custom");

              const br7 = document.createElement("br");
              card.appendChild(br7);
              card.appendChild(input_css_custom);
              const br2 = document.createElement("br");
              card.appendChild(br2);
              // btn save
              const br8 = document.createElement("br");
              card.appendChild(br8);
              const div_save_notext = document.createElement("div");
              div_save_notext.classList.add("div_to_save");
              card.appendChild(div_save_notext);
              const btn_save_notext = document.createElement("button");
              btn_save_notext.textContent = "Sauvegarder";
              div_save_notext.classList.add("btn_save_notext");
              div_save_notext.appendChild(btn_save_notext);
              //click
              btn_save_notext.addEventListener("click", function () {

                const nb_card_product =
                  document.querySelector(".input_counter").value;

                const new_nos_produits_input =
                  document.querySelector(".nos_produits_input").value;
                const newHTML =
                  document.querySelector(".input_html_custom").value;
                const newCSS = document.querySelector(".input_css_custom").value;
                const newFond = document.querySelector(".input_fond_card").value;
                const list_product_card = document.querySelectorAll(".list_product_card .product-card");
                list_product_card.forEach((card_produuits, i) => {
                  const inputElement = document.getElementById(
                    "input_card_product_custom_" + (i + 1)
                  );
                  const inputElement_name = document.getElementById(
                    "input_card_product_custom_name_" + (i + 1)
                  );
                  const inputElement_desc = document.getElementById(
                    "input_card_product_custom_desc_" + (i + 1)
                  );
                  const inputElement_prix = document.getElementById(
                    "input_card_product_custom_prix_" + (i + 1)
                  );

                  if (inputElement) {
                    const link_img_partener = inputElement.value;

                    if (link_img_partener) {
                      card_produuits.querySelector("img").src = link_img_partener
                    }
                  }
                  if (inputElement_name) {
                    card_produuits.querySelector(".shoe_name").textContent = inputElement_name.value
                  }
                  if (inputElement_desc) {
                    card_produuits.querySelector(".shoe-details p").textContent = inputElement_desc.value

                  }
                  if (inputElement_prix) {
                    card_produuits.querySelector(".price_num").textContent = inputElement_prix.value

                  }
                })


                if (nb_card_product === "") {
                  resetLayout();
                  resetCards();
                  resetHeader();
                } else {
                  resetLayout();
                  resetHeader();
                  resetCards();
                  saved_create_notif();


                  const header_title = document.querySelector(".list_product_card");
                  if (nb_card_product > list_product_card.length) {
                    for (let i = 0; i < (nb_card_product - list_product_card.length); i++) {
                      const productCard = document.createElement("div");
                      productCard.classList.add("product-card");



                      // Créer les images principales
                      const mainImages = document.createElement("div");
                      mainImages.classList.add("main-images");

                      const blueImage = document.createElement("img");
                      blueImage.id = "blue";
                      blueImage.classList.add("blue", "active");
                      blueImage.src = "../img/blue.png";
                      blueImage.alt = "blue";
                      mainImages.appendChild(blueImage);


                      // Créer les détails de la chaussure
                      const shoeDetails = document.createElement("div");
                      shoeDetails.classList.add("shoe-details");
                      const shoeName = document.createElement("span");
                      shoeName.classList.add("shoe_name");
                      shoeName.textContent = "ADDIDAS GAZE ZX";
                      const paragraph = document.createElement("p");
                      paragraph.textContent =
                        "Lorem ipsum dolor sit lorenm i amet, consectetur adipisicing elit. Eum, ea, ducimus!";
                      const stars = document.createElement("div");
                      stars.classList.add("stars");
                      for (let i = 0; i < 5; i++) {
                        const starIcon = document.createElement("i");
                        starIcon.classList.add("bx", i < 4 ? "bxs-star" : "bxs-star");
                        stars.appendChild(starIcon);
                      }
                      shoeDetails.appendChild(shoeName);
                      shoeDetails.appendChild(paragraph);
                      shoeDetails.appendChild(stars);
                      // Créer l'option de couleur et le prix
                      const colorPrice = document.createElement("div");
                      colorPrice.classList.add("color-price");
                      const price = document.createElement("div");
                      price.classList.add("price");
                      const priceNum = document.createElement("span");
                      priceNum.classList.add("price_num");
                      priceNum.textContent = "$09.00";
                      price.appendChild(priceNum);
                      colorPrice.appendChild(price);
                      // Créer le bouton d'ajout au panier
                      const button = document.createElement("div");
                      button.classList.add("button");
                      const buttonLayer = document.createElement("div");
                      buttonLayer.classList.add("button-layer");
                      const addButton = document.createElement("button");
                      addButton.textContent = "Add To Cart";
                      button.appendChild(buttonLayer);
                      button.appendChild(addButton);

                      // Ajouter tous les éléments au conteneur de carte de produit
                      productCard.appendChild(mainImages);
                      productCard.appendChild(shoeDetails);
                      productCard.appendChild(colorPrice);
                      colorPrice.appendChild(button);
                      header_title.appendChild(productCard);



                    }
                  } else if (nb_card_product < list_product_card.length) {
                    const allpartner_item = document.querySelectorAll(".list_product_card .product-card");

                    if (allpartner_item.length > 0) {
                      allpartner_item[
                        allpartner_item.length - 1
                      ].remove();
                    }
                  }
                }
                if (new_nos_produits_input) {
                  selectedSection.querySelector("h1").textContent = new_nos_produits_input
                }

                if (newHTML === "" && newCSS === "") {
                  resetLayout();
                  resetCards();
                } else {
                  selectedSection.style.cssText += newCSS;
                  selectedSection.innerHTML += newHTML;

                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
                if (newFond === "") {
                  resetLayout();
                  resetCards();
                } else {
                  const img_fond = localStorage.getItem("Img_fond");
                  const img_name = localStorage.getItem("img_name");
                  if (newFond.startsWith("https")) {
                    selectedSection.style.background = "url(" + newFond + ")";
                    selectedSection.style.backgroundSize = "cover";
                    selectedSection.style.backgroundPosition = "center";
                  }
                  if (img_fond) {
                    if (newFond === img_name) {
                      selectedSection.style.background = "url(" + img_fond + ")";
                      selectedSection.style.backgroundSize = "cover";
                      selectedSection.style.backgroundPosition = "center";
                    }
                  }
                  selectedSection.style.background = newFond;
                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
              });
            }
          }
          if (selectedSection.id === "Carte") {
            const menu_item = selectedSection.querySelectorAll(".container .menu-items .menu-item")
            card_create();
            const card_index = document.querySelector(".card_index");
            const card = document.querySelector(".body_plus");
            const body_edit = document.querySelector(".body_edit");
            if (card || body_edit) {
            } else {
              const card = document.createElement("div");
              card.classList.add("body_edit");
              card_index.appendChild(card);
              //code title "nos clients"
              const title_card = document.createElement("h1");
              title_card.textContent = "Modification dans Réservation";
              card.appendChild(title_card);
              const br1 = document.createElement("br");
              const menu_item_edit = document.createElement("div");
              menu_item_edit.classList.add("form_column")
              card.appendChild(menu_item_edit);

              menu_item.forEach((item, index) => {
                const div_menu_item = document.createElement("div");
                div_menu_item.classList.add("div_menu_item_" + (index + 1))
                div_menu_item.id = "div_menu_item"
                const input_menu_item_title = document.createElement("input");
                input_menu_item_title.classList.add("input_menu_item_title_" + (index + 1))
                input_menu_item_title.id = "input_menu_item_title"
                input_menu_item_title.value = item.querySelector("h3").textContent
                const input_menu_item_desc = document.createElement("input");
                input_menu_item_desc.classList.add("input_menu_item_desc_" + (index + 1))
                input_menu_item_desc.id = "input_menu_item_desc"
                input_menu_item_desc.value = item.querySelector("p").textContent
                const input_menu_item_price = document.createElement("input");
                input_menu_item_price.classList.add("input_menu_item_price_" + (index + 1))
                input_menu_item_price.id = "input_menu_item_price"
                input_menu_item_price.value = item.querySelector(".price").textContent

                const i_eye_item = document.createElement("i");
                i_eye_item.classList.add("bx")
                div_menu_item.appendChild(i_eye_item);
                div_menu_item.appendChild(input_menu_item_title);
                div_menu_item.appendChild(input_menu_item_desc);
                div_menu_item.appendChild(input_menu_item_price);

                menu_item_edit.appendChild(div_menu_item);
                if (window.getComputedStyle(item).display === "none") {
                  i_eye_item.classList.add("bx-low-vision")

                  i_eye_item.style.background = "#4c4c57"
                  div_menu_item.style.background = "#6d6d7b"


                } else {
                  i_eye_item.classList.add("bx-show")
                  i_eye_item.style.background = "#202020ba"
                  div_menu_item.style.background = "#383838ba"

                }
                i_eye_item.addEventListener("click", function () {
                  // Sélectionne l'icône de l'œil de l'équipe
                  const i_eye_equipe_card_base = document.querySelector(".div_menu_item_" + (index + 1));
                  const i_eye_equipe_card = i_eye_equipe_card_base.querySelector(".bx");


                  // Vérifie si l'icône actuelle est "bx-show"
                  if (i_eye_equipe_card.classList.contains("bx-show")) {
                    // Remplace la classe "bx-show" par "bx-low-vision"
                    i_eye_equipe_card.classList.remove("bx-show");
                    i_eye_equipe_card.classList.add("bx-low-vision");
                    i_eye_equipe_card.style.background = "#4c4c57"
                    i_eye_equipe_card_base.style.background = "#6d6d7b"
                  } else {
                    i_eye_equipe_card.style.background = "#202020ba"
                    i_eye_equipe_card_base.style.background = "#383838ba"
                    // Remplace la classe "bx-low-vision" par "bx-show"
                    i_eye_equipe_card.classList.remove("bx-low-vision");
                    i_eye_equipe_card.classList.add("bx-show");
                  }
                });
              })
              const computedStyle = window.getComputedStyle(selectedSection);
              // code fond
              const colorfond = computedStyle.getPropertyValue("background");


              const fond_card = document.createElement("div");
              fond_card.textContent = "Fond";
              card.appendChild(fond_card);
              const br12 = document.createElement("br");

              card.appendChild(br12);
              const input_fond = document.createElement("div");

              input_fond.classList.add("input_fond");

              card.appendChild(input_fond);

              const preview_fond_card = document.createElement("div");

              preview_fond_card.classList.add("preview_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                preview_fond_card.style.background = colorfond; // Utiliser la valeur récupérée ici
              } else {

                preview_fond_card.style.backgroundImage = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(preview_fond_card);
              const input_fond_card = document.createElement("input");
              input_fond_card.type = "text";
              input_fond_card.placeholder = "#XXX, Lien";
              input_fond_card.classList.add("input_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                input_fond_card.value = colorfond; // Utiliser la valeur récupérée ici
              } else {
                input_fond_card.value = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(input_fond_card);
              const btn_img_fond_card = document.createElement("button");
              btn_img_fond_card.type = "file";
              btn_img_fond_card.classList.add("btn_img_fond_card");
              input_fond.appendChild(btn_img_fond_card);
              const icon_btn_img = document.createElement("i");
              icon_btn_img.classList.add("bx");
              icon_btn_img.classList.add("bx-image");

              btn_img_fond_card.appendChild(icon_btn_img);
              const br11 = document.createElement("br");

              card.appendChild(br11);
              // custom html
              const html_custom = document.createElement("div");
              html_custom.classList.add("html_custom");

              html_custom.textContent = "Personnalisez le HTML";
              card.appendChild(html_custom);
              const br5 = document.createElement("br");

              card.appendChild(br5);
              const input_html_custom = document.createElement("textarea");
              input_html_custom.classList.add("input_html_custom");


              card.appendChild(input_html_custom);
              //custom css
              const br6 = document.createElement("br");

              card.appendChild(br6);
              const css_custom = document.createElement("div");
              css_custom.textContent = "Personnalisez le CSS";
              card.appendChild(css_custom);

              const input_css_custom = document.createElement("textarea");
              input_css_custom.classList.add("input_css_custom");

              const br7 = document.createElement("br");

              card.appendChild(br7);
              card.appendChild(input_css_custom);

              const br2 = document.createElement("br");

              card.appendChild(br2);

              // btn save
              const br8 = document.createElement("br");

              card.appendChild(br8);
              const div_save_notext = document.createElement("div");

              div_save_notext.classList.add("div_to_save");

              card.appendChild(div_save_notext);
              const btn_save_notext = document.createElement("button");

              btn_save_notext.textContent = "Sauvegarder";

              div_save_notext.classList.add("btn_save_notext");
              div_save_notext.appendChild(btn_save_notext);
              btn_save_notext.addEventListener("click", function () {


                const newHTML =
                  document.querySelector(".input_html_custom").value;
                const newCSS = document.querySelector(".input_css_custom").value;
                const newFond = document.querySelector(".input_fond_card").value;
                const menu_item = selectedSection.querySelectorAll(".container .menu-items .menu-item")
                menu_item.forEach((card, index) => {
                  const i_eye_tarification_card_base = document.querySelector(".div_menu_item_" + (index + 1));
                  const eyeIcon = i_eye_tarification_card_base.querySelector(".bx");
                  // Récupérer les éléments correspondants dans info_section
                  const new_input_menu_item_title = document.querySelector(".input_menu_item_title_" + (index + 1)).value;
                  const new_input_menu_item_desc = document.querySelector(".input_menu_item_desc_" + (index + 1)).value;
                  const new_input_menu_item_price = document.querySelector(".input_menu_item_price_" + (index + 1)).value;


                  // Récupérer les valeurs mises à jour pour la deuxième partie du code

                  if (eyeIcon.classList.contains("bx-low-vision")) {
                    // Si oui, cacher l'élément card
                    card.style.display = "none";
                  } else {
                    // Sinon, afficher l'élément card
                    card.style.display = "block"; // ou "flex", "grid", etc., selon le type d'affichage utilisé
                  }


                  card.querySelector("h3").textContent = new_input_menu_item_title;
                  card.querySelector("p").textContent = new_input_menu_item_desc;
                  card.querySelector(".price").textContent = new_input_menu_item_price;

                });


                if (newHTML === "" && newCSS === "") {
                  resetLayout();
                  resetCards();
                } else {
                  selectedSection.style.cssText += newCSS;
                  selectedSection.innerHTML += newHTML;

                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
                if (newFond === "") {
                  resetLayout();
                  resetCards();
                } else {
                  const img_fond = localStorage.getItem("Img_fond");
                  const img_name = localStorage.getItem("img_name");
                  if (newFond.startsWith("https")) {
                    selectedSection.style.background = "url(" + newFond + ")";
                    selectedSection.style.backgroundSize = "cover";
                    selectedSection.style.backgroundPosition = "center";
                  }
                  if (img_fond) {
                    if (newFond === img_name) {
                      selectedSection.style.background = "url(" + img_fond + ")";
                      selectedSection.style.backgroundSize = "cover";
                      selectedSection.style.backgroundPosition = "center";
                    }
                  }
                  selectedSection.style.background = newFond;
                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
              });

            }
          }
          if (selectedSection.id === "Réservation") {
            const form_column = selectedSection.querySelectorAll(".reservation-form .form-column")
            card_create();
            const card_index = document.querySelector(".card_index");
            const card = document.querySelector(".body_plus");
            const body_edit = document.querySelector(".body_edit");
            if (card || body_edit) {
            } else {
              const card = document.createElement("div");
              card.classList.add("body_edit");
              card_index.appendChild(card);
              //code title "nos clients"
              const title_card = document.createElement("h1");
              title_card.textContent = "Modification dans Réservation";
              card.appendChild(title_card);
              const br1 = document.createElement("br");
              const form_column_edit = document.createElement("div");
              form_column_edit.classList.add("form_column")
              card.appendChild(form_column_edit);

              form_column.forEach((form, index) => {
                const div_input_form = document.createElement("div");
                div_input_form.classList.add("div_input_form_" + (index + 1))
                div_input_form.id = "div_input_form"
                const input_form = document.createElement("input");
                input_form.classList.add("input_form_" + (index + 1))
                input_form.id = "input_form"
                input_form.value = form.querySelector("label").textContent
                const i_eye_form = document.createElement("i");
                i_eye_form.classList.add("bx")
                div_input_form.appendChild(input_form);
                div_input_form.appendChild(i_eye_form);
                form_column_edit.appendChild(div_input_form);
                if (window.getComputedStyle(form).display === "none") {
                  i_eye_form.classList.add("bx-low-vision")

                  i_eye_form.style.background = "#4c4c57"
                  div_input_form.style.background = "#6d6d7b"


                } else {
                  i_eye_form.classList.add("bx-show")
                  i_eye_form.style.background = "#202020ba"
                  div_input_form.style.background = "#383838ba"

                }
                i_eye_form.addEventListener("click", function () {
                  // Sélectionne l'icône de l'œil de l'équipe
                  const i_eye_equipe_card_base = document.querySelector(".div_input_form_" + (index + 1));
                  const i_eye_equipe_card = i_eye_equipe_card_base.querySelector(".bx");


                  // Vérifie si l'icône actuelle est "bx-show"
                  if (i_eye_equipe_card.classList.contains("bx-show")) {
                    // Remplace la classe "bx-show" par "bx-low-vision"
                    i_eye_equipe_card.classList.remove("bx-show");
                    i_eye_equipe_card.classList.add("bx-low-vision");
                    i_eye_equipe_card.style.background = "#4c4c57"
                    i_eye_equipe_card_base.style.background = "#6d6d7b"
                  } else {
                    i_eye_equipe_card.style.background = "#202020ba"
                    i_eye_equipe_card_base.style.background = "#383838ba"
                    // Remplace la classe "bx-low-vision" par "bx-show"
                    i_eye_equipe_card.classList.remove("bx-low-vision");
                    i_eye_equipe_card.classList.add("bx-show");
                  }
                });
              })
              const computedStyle = window.getComputedStyle(selectedSection);
              // code fond
              const colorfond = computedStyle.getPropertyValue("background");


              const fond_card = document.createElement("div");
              fond_card.textContent = "Fond";
              card.appendChild(fond_card);
              const br12 = document.createElement("br");

              card.appendChild(br12);
              const input_fond = document.createElement("div");

              input_fond.classList.add("input_fond");

              card.appendChild(input_fond);

              const preview_fond_card = document.createElement("div");

              preview_fond_card.classList.add("preview_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                preview_fond_card.style.background = colorfond; // Utiliser la valeur récupérée ici
              } else {

                preview_fond_card.style.backgroundImage = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(preview_fond_card);
              const input_fond_card = document.createElement("input");
              input_fond_card.type = "text";
              input_fond_card.placeholder = "#XXX, Lien";
              input_fond_card.classList.add("input_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                input_fond_card.value = colorfond; // Utiliser la valeur récupérée ici
              } else {
                input_fond_card.value = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(input_fond_card);
              const btn_img_fond_card = document.createElement("button");
              btn_img_fond_card.type = "file";
              btn_img_fond_card.classList.add("btn_img_fond_card");
              input_fond.appendChild(btn_img_fond_card);
              const icon_btn_img = document.createElement("i");
              icon_btn_img.classList.add("bx");
              icon_btn_img.classList.add("bx-image");

              btn_img_fond_card.appendChild(icon_btn_img);
              const br11 = document.createElement("br");

              card.appendChild(br11);
              // custom html
              const html_custom = document.createElement("div");
              html_custom.classList.add("html_custom");

              html_custom.textContent = "Personnalisez le HTML";
              card.appendChild(html_custom);
              const br5 = document.createElement("br");

              card.appendChild(br5);
              const input_html_custom = document.createElement("textarea");
              input_html_custom.classList.add("input_html_custom");


              card.appendChild(input_html_custom);
              //custom css
              const br6 = document.createElement("br");

              card.appendChild(br6);
              const css_custom = document.createElement("div");
              css_custom.textContent = "Personnalisez le CSS";
              card.appendChild(css_custom);

              const input_css_custom = document.createElement("textarea");
              input_css_custom.classList.add("input_css_custom");

              const br7 = document.createElement("br");

              card.appendChild(br7);
              card.appendChild(input_css_custom);

              const br2 = document.createElement("br");

              card.appendChild(br2);

              // btn save
              const br8 = document.createElement("br");

              card.appendChild(br8);
              const div_save_notext = document.createElement("div");

              div_save_notext.classList.add("div_to_save");

              card.appendChild(div_save_notext);
              const btn_save_notext = document.createElement("button");

              btn_save_notext.textContent = "Sauvegarder";

              div_save_notext.classList.add("btn_save_notext");
              div_save_notext.appendChild(btn_save_notext);
              btn_save_notext.addEventListener("click", function () {


                const newHTML =
                  document.querySelector(".input_html_custom").value;
                const newCSS = document.querySelector(".input_css_custom").value;
                const newFond = document.querySelector(".input_fond_card").value;
                const form_column = selectedSection.querySelectorAll(".reservation-form .form-column")
                form_column.forEach((card, index) => {
                  const i_eye_tarification_card_base = document.querySelector(".div_input_form_" + (index + 1));
                  const eyeIcon = i_eye_tarification_card_base.querySelector(".bx");
                  // Récupérer les éléments correspondants dans info_section
                  const new_input_form = document.querySelector(".input_form_" + (index + 1)).value;


                  // Récupérer les valeurs mises à jour pour la deuxième partie du code

                  if (eyeIcon.classList.contains("bx-low-vision")) {
                    // Si oui, cacher l'élément card
                    card.style.display = "none";
                  } else {
                    // Sinon, afficher l'élément card
                    card.style.display = "block"; // ou "flex", "grid", etc., selon le type d'affichage utilisé
                  }


                  card.querySelector("label").textContent = new_input_form;

                });


                if (newHTML === "" && newCSS === "") {
                  resetLayout();
                  resetCards();
                } else {
                  selectedSection.style.cssText += newCSS;
                  selectedSection.innerHTML += newHTML;

                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
                if (newFond === "") {
                  resetLayout();
                  resetCards();
                } else {
                  const img_fond = localStorage.getItem("Img_fond");
                  const img_name = localStorage.getItem("img_name");
                  if (newFond.startsWith("https")) {
                    selectedSection.style.background = "url(" + newFond + ")";
                    selectedSection.style.backgroundSize = "cover";
                    selectedSection.style.backgroundPosition = "center";
                  }
                  if (img_fond) {
                    if (newFond === img_name) {
                      selectedSection.style.background = "url(" + img_fond + ")";
                      selectedSection.style.backgroundSize = "cover";
                      selectedSection.style.backgroundPosition = "center";
                    }
                  }
                  selectedSection.style.background = newFond;
                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
              });

            }
          }
          if (selectedSection.id === "footer") {
            const list_li = selectedSection.querySelectorAll(".list li")
            const social_a = selectedSection.querySelectorAll(".social a")
            card_create();
            const card_index = document.querySelector(".card_index");
            const card = document.querySelector(".body_plus");
            const body_edit = document.querySelector(".body_edit");
            if (card || body_edit) {
            } else {
              const card = document.createElement("div");
              card.classList.add("body_edit");
              card_index.appendChild(card);
              //code title "nos clients"
              const title_card = document.createElement("h1");
              title_card.textContent = "Modification dans Réservation";
              card.appendChild(title_card);
              const div_input_list = document.createElement("div");
              div_input_list.classList.add("div_input_list");
              card.appendChild(div_input_list);
              list_li.forEach((li, index) => {
                const div_input_li = document.createElement("div");
                div_input_li.classList.add("div_input_li_" + (index + 1))
                div_input_li.id = "div_input_li"
                div_input_list.appendChild(div_input_li)
                const input_li = document.createElement("input");
                input_li.classList.add("input_li_" + (index + 1))
                input_li.id = "input_li"
                input_li.value = li.querySelector("a").textContent
                div_input_li.appendChild(input_li)
                const i_input_li = document.createElement("i");
                i_input_li.classList.add("bx")
                i_input_li.id = "i_input_li"
                div_input_li.appendChild(i_input_li)
                if (window.getComputedStyle(li).display === "none") {
                  i_input_li.classList.add("bx-low-vision")
                  i_input_li.style.background = "#4c4c57"
                  div_input_li.style.background = "#6d6d7b"
                } else {
                  i_input_li.classList.add("bx-show")
                  i_input_li.style.background = "#202020ba"
                  div_input_li.style.background = "#383838ba"
                }
                i_input_li.addEventListener("click", function () {
                  // Sélectionne l'icône de l'œil de l'équipe
                  const i_eye_equipe_card_base = document.querySelector(".div_input_li_" + (index + 1));
                  const i_eye_equipe_card = i_eye_equipe_card_base.querySelector(".bx");
                  // Vérifie si l'icône actuelle est "bx-show"
                  if (i_eye_equipe_card.classList.contains("bx-show")) {
                    // Remplace la classe "bx-show" par "bx-low-vision"
                    i_eye_equipe_card.classList.remove("bx-show");
                    i_eye_equipe_card.classList.add("bx-low-vision");
                    i_eye_equipe_card.style.background = "#4c4c57"
                    i_eye_equipe_card_base.style.background = "#6d6d7b"
                  } else {
                    i_eye_equipe_card.style.background = "#202020ba"
                    i_eye_equipe_card_base.style.background = "#383838ba"
                    // Remplace la classe "bx-low-vision" par "bx-show"
                    i_eye_equipe_card.classList.remove("bx-low-vision");
                    i_eye_equipe_card.classList.add("bx-show");
                  }
                });

              })
              const div_input_social = document.createElement("div");
              div_input_social.classList.add("div_input_social");
              card.appendChild(div_input_social);
              social_a.forEach((li, index) => {
                const div_input_a = document.createElement("div");
                div_input_a.classList.add("div_input_a_" + (index + 1))
                div_input_a.id = "div_input_a"
                div_input_social.appendChild(div_input_a)

                const input_a = document.createElement("input");
                input_a.classList.add("input_a_" + (index + 1))
                input_a.id = "input_a"
                input_a.value = li.querySelector("i").classList[1]
                div_input_a.appendChild(input_a)
                const i_input_a = document.createElement("i");
                i_input_a.classList.add("bx")
                i_input_a.id = "i_input_a"

                div_input_a.appendChild(i_input_a)
                if (window.getComputedStyle(li).display === "none") {
                  i_input_a.classList.add("bx-low-vision")

                  i_input_a.style.background = "#4c4c57"
                  div_input_a.style.background = "#6d6d7b"


                } else {
                  i_input_a.classList.add("bx-show")
                  i_input_a.style.background = "#202020ba"
                  div_input_a.style.background = "#383838ba"

                }
                i_input_a.addEventListener("click", function () {
                  // Sélectionne l'icône de l'œil de l'équipe
                  const i_eye_equipe_card_base = document.querySelector(".div_input_a_" + (index + 1));
                  const i_eye_equipe_card = i_eye_equipe_card_base.querySelector(".bx");


                  // Vérifie si l'icône actuelle est "bx-show"
                  if (i_eye_equipe_card.classList.contains("bx-show")) {
                    // Remplace la classe "bx-show" par "bx-low-vision"
                    i_eye_equipe_card.classList.remove("bx-show");
                    i_eye_equipe_card.classList.add("bx-low-vision");
                    i_eye_equipe_card.style.background = "#4c4c57"
                    i_eye_equipe_card_base.style.background = "#6d6d7b"
                  } else {
                    i_eye_equipe_card.style.background = "#202020ba"
                    i_eye_equipe_card_base.style.background = "#383838ba"
                    // Remplace la classe "bx-low-vision" par "bx-show"
                    i_eye_equipe_card.classList.remove("bx-low-vision");
                    i_eye_equipe_card.classList.add("bx-show");
                  }
                });
              })
              const computedStyle = window.getComputedStyle(selectedSection);
              // code fond
              const colorfond = computedStyle.getPropertyValue("background");


              const fond_card = document.createElement("div");
              fond_card.textContent = "Fond";
              card.appendChild(fond_card);
              const br12 = document.createElement("br");

              card.appendChild(br12);
              const input_fond = document.createElement("div");

              input_fond.classList.add("input_fond");

              card.appendChild(input_fond);

              const preview_fond_card = document.createElement("div");

              preview_fond_card.classList.add("preview_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                preview_fond_card.style.background = colorfond; // Utiliser la valeur récupérée ici
              } else {

                preview_fond_card.style.backgroundImage = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(preview_fond_card);
              const input_fond_card = document.createElement("input");
              input_fond_card.type = "text";
              input_fond_card.placeholder = "#XXX, Lien";
              input_fond_card.classList.add("input_fond_card");
              if (colorfond && colorfond !== "rgba(0, 0, 0, 0)") {

                input_fond_card.value = colorfond; // Utiliser la valeur récupérée ici
              } else {
                input_fond_card.value = computedStyle.getPropertyValue("background-image"); // Utiliser la valeur récupérée ici

              }

              input_fond.appendChild(input_fond_card);
              const btn_img_fond_card = document.createElement("button");
              btn_img_fond_card.type = "file";
              btn_img_fond_card.classList.add("btn_img_fond_card");
              input_fond.appendChild(btn_img_fond_card);
              const icon_btn_img = document.createElement("i");
              icon_btn_img.classList.add("bx");
              icon_btn_img.classList.add("bx-image");

              btn_img_fond_card.appendChild(icon_btn_img);
              const br11 = document.createElement("br");

              card.appendChild(br11);
              // custom html
              const html_custom = document.createElement("div");
              html_custom.classList.add("html_custom");

              html_custom.textContent = "Personnalisez le HTML";
              card.appendChild(html_custom);
              const br5 = document.createElement("br");

              card.appendChild(br5);
              const input_html_custom = document.createElement("textarea");
              input_html_custom.classList.add("input_html_custom");


              card.appendChild(input_html_custom);
              //custom css
              const br6 = document.createElement("br");

              card.appendChild(br6);
              const css_custom = document.createElement("div");
              css_custom.textContent = "Personnalisez le CSS";
              card.appendChild(css_custom);

              const input_css_custom = document.createElement("textarea");
              input_css_custom.classList.add("input_css_custom");

              const br7 = document.createElement("br");

              card.appendChild(br7);
              card.appendChild(input_css_custom);

              const br2 = document.createElement("br");

              card.appendChild(br2);

              // btn save
              const br8 = document.createElement("br");

              card.appendChild(br8);
              const div_save_notext = document.createElement("div");

              div_save_notext.classList.add("div_to_save");

              card.appendChild(div_save_notext);
              const btn_save_notext = document.createElement("button");

              btn_save_notext.textContent = "Sauvegarder";

              div_save_notext.classList.add("btn_save_notext");
              div_save_notext.appendChild(btn_save_notext);
              btn_save_notext.addEventListener("click", function () {


                const newHTML =
                  document.querySelector(".input_html_custom").value;
                const newCSS = document.querySelector(".input_css_custom").value;
                const newFond = document.querySelector(".input_fond_card").value;
                const list_li = selectedSection.querySelectorAll(".list li")

                const social_a = selectedSection.querySelectorAll(".social a")
                social_a.forEach((a, index) => {
                  const i_eye_tarification_card_base = document.querySelector(".div_input_a_" + (index + 1));
                  const eyeIcon = i_eye_tarification_card_base.querySelector(".bx");
                  // Récupérer les éléments correspondants dans info_section
                  const new_input_a = document.querySelector(".input_a_" + (index + 1)).value;



                  // Récupérer les valeurs mises à jour pour la deuxième partie du code

                  if (eyeIcon.classList.contains("bx-low-vision")) {
                    // Si oui, cacher l'élément card
                    a.style.display = "none";
                  } else {
                    // Sinon, afficher l'élément card
                    a.style.display = "inline-block"; // ou "flex", "grid", etc., selon le type d'affichage utilisé
                  }


                  a.querySelector("i").classList.remove(a.querySelector("i").classList[1])
                  a.querySelector("i").classList.add(new_input_a)



                });
                list_li.forEach((li, index) => {
                  const i_eye_tarification_card_base = document.querySelector(".div_input_li_" + (index + 1));
                  const eyeIcon = i_eye_tarification_card_base.querySelector(".bx");
                  // Récupérer les éléments correspondants dans info_section
                  const new_input_li = document.querySelector(".input_li_" + (index + 1)).value;



                  // Récupérer les valeurs mises à jour pour la deuxième partie du code

                  if (eyeIcon.classList.contains("bx-low-vision")) {
                    // Si oui, cacher l'élément card
                    li.style.display = "none";
                  } else {
                    // Sinon, afficher l'élément card
                    li.style.display = "block"; // ou "flex", "grid", etc., selon le type d'affichage utilisé
                  }


                  li.querySelector(".list li a").textContent = new_input_li;
                  const li_in_header = document.querySelectorAll(".nav_links li")
                  li_in_header[index].querySelector("a").textContent = new_input_li

                });


                if (newHTML === "" && newCSS === "") {
                  resetLayout();
                  resetCards();
                } else {
                  selectedSection.style.cssText += newCSS;
                  selectedSection.innerHTML += newHTML;

                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
                if (newFond === "") {
                  resetLayout();
                  resetCards();
                } else {
                  const img_fond = localStorage.getItem("Img_fond");
                  const img_name = localStorage.getItem("img_name");
                  if (newFond.startsWith("https")) {
                    selectedSection.style.background = "url(" + newFond + ")";
                    selectedSection.style.backgroundSize = "cover";
                    selectedSection.style.backgroundPosition = "center";
                  }
                  if (img_fond) {
                    if (newFond === img_name) {
                      selectedSection.style.background = "url(" + img_fond + ")";
                      selectedSection.style.backgroundSize = "cover";
                      selectedSection.style.backgroundPosition = "center";
                    }
                  }
                  selectedSection.style.background = newFond;
                  resetLayout();
                  resetCards();
                  saved_create_notif();
                }
              });
            }
          }
        }
      });
    }
    function edit_card_div_text() {
      const selectedDiv_text = document.querySelector(".select_div_text");
      if (selectedDiv_text) {
        const value_select_text = selectedDiv_text.textContent;
        const computedHeight = window.getComputedStyle(selectedDiv_text).height;
        const computedWidth = window.getComputedStyle(selectedDiv_text).width;
        const computedRotate = window.getComputedStyle(selectedDiv_text).rotate;
        const computedWeight = window.getComputedStyle(selectedDiv_text).fontWeight;
        const computedSize = window.getComputedStyle(selectedDiv_text).fontSize;
        const computedSpacing = window.getComputedStyle(selectedDiv_text).wordSpacing;
        const computedColor = window.getComputedStyle(selectedDiv_text).color;
        const computedBorderColor = window.getComputedStyle(selectedDiv_text).borderColor;
        const computedBorderSize = window.getComputedStyle(selectedDiv_text).borderWidth;
        const computedBorderRadius = window.getComputedStyle(selectedDiv_text).borderRadius;
        const computedBackgroundcolor = window.getComputedStyle(selectedDiv_text).backgroundColor;
        const computedOpacity = window.getComputedStyle(selectedDiv_text).opacity;
        card_create();
        const card_index = document.querySelector(".card_index");
        const card = document.querySelector(".body_plus");
        const body_edit = document.querySelector(".body_edit");
        if (card || body_edit) {
        } else {
          const card = document.createElement("div");
          card.classList.add("body_edit");
          card_index.appendChild(card);
          const title_card = document.createElement("h1");
          title_card.textContent = "Modification du texte";
          card.appendChild(title_card);
          const br1 = document.createElement("br");
          card.appendChild(br1);
          const input_text_modif = document.createElement("input");
          input_text_modif.classList.add("modif_text")
          input_text_modif.value = value_select_text;
          card.appendChild(input_text_modif);
          const br1_bis = document.createElement("br");
          card.appendChild(br1_bis);
          const Divp_DivText_position = document.createElement("div");
          Divp_DivText_position.style.display = "flex"
          Divp_DivText_position.style.alignItems = "center"
          Divp_DivText_position.style.gap = "10px"
          const p_DivText_position = document.createElement("p");
          p_DivText_position.textContent = "Position";
          card.appendChild(Divp_DivText_position);
          Divp_DivText_position.appendChild(p_DivText_position);
          const input_title_cardX = document.createElement("input");
          input_title_cardX.type = "text";
          input_title_cardX.style.width = "60%"
          input_title_cardX.classList.add("input_title_cardX");
          input_title_cardX.value = "0px"; // Utiliser la valeur récupérée ici
          Divp_DivText_position.appendChild(input_title_cardX);
          const p_DivText_X = document.createElement("p");
          p_DivText_X.textContent = "X";
          Divp_DivText_position.appendChild(p_DivText_X);
          const input_title_cardY = document.createElement("input");
          input_title_cardY.type = "text";
          input_title_cardY.style.width = "60%"
          input_title_cardY.classList.add("input_title_cardY");
          input_title_cardY.value = "0px"; // Utiliser la valeur récupérée ici
          Divp_DivText_position.appendChild(input_title_cardY);
          const p_DivText_Y = document.createElement("p");
          p_DivText_Y.textContent = "Y";
          Divp_DivText_position.appendChild(p_DivText_Y);
          const br2 = document.createElement("br");
          card.appendChild(br2);
          const Divp_DivText_size = document.createElement("div");
          Divp_DivText_size.style.display = "flex"
          Divp_DivText_size.style.alignItems = "center"
          Divp_DivText_size.style.gap = "10px"
          const p_DivText_size = document.createElement("p");
          p_DivText_size.textContent = "Cadre";
          card.appendChild(Divp_DivText_size);
          Divp_DivText_size.appendChild(p_DivText_size);
          const input_title_cardSizeWidth = document.createElement("input");
          input_title_cardSizeWidth.type = "text";
          input_title_cardSizeWidth.style.width = "50%";
          input_title_cardSizeWidth.classList.add("input_title_cardSizeWidth");
          input_title_cardSizeWidth.value = computedWidth; // Utiliser la valeur récupérée ici
          Divp_DivText_size.appendChild(input_title_cardSizeWidth);
          const p_DivText_W = document.createElement("p");
          p_DivText_W.textContent = "W";
          Divp_DivText_size.appendChild(p_DivText_W);
          const input_title_cardSizeHeight = document.createElement("input");
          input_title_cardSizeHeight.type = "text";
          input_title_cardSizeHeight.style.width = "50%";
          input_title_cardSizeHeight.classList.add("input_title_cardSizeHeight");
          input_title_cardSizeHeight.value = computedHeight; // Utiliser la valeur récupérée ici
          Divp_DivText_size.appendChild(input_title_cardSizeHeight);
          const p_DivText_H = document.createElement("p");
          p_DivText_H.textContent = "H";
          Divp_DivText_size.appendChild(p_DivText_H);
          const br3 = document.createElement("br");
          card.appendChild(br3);
          const Divp_DivText_rotation = document.createElement("div");
          Divp_DivText_rotation.style.display = "flex"
          Divp_DivText_rotation.style.alignItems = "center"
          Divp_DivText_rotation.style.gap = "10px"
          const p_DivText_rotation = document.createElement("p");
          p_DivText_rotation.textContent = "Rotation";
          card.appendChild(Divp_DivText_rotation);
          Divp_DivText_rotation.appendChild(p_DivText_rotation);
          const input_title_cardRotation = document.createElement("input");
          input_title_cardRotation.type = "text";
          input_title_cardRotation.classList.add("input_title_cardRotation");
          if (computedRotate === "none") {
            input_title_cardRotation.value = "0deg";
          } else {
            input_title_cardRotation.value = computedRotate; // Utiliser la valeur récupérée ici
          }
          Divp_DivText_rotation.appendChild(input_title_cardRotation);
          const br4 = document.createElement("br");
          card.appendChild(br4);
          const Divp_DivText_line = document.createElement("div");
          Divp_DivText_line.style.height = "1px"
          Divp_DivText_line.style.background = "#ccc"
          Divp_DivText_line.style.width = "100%"
          card.appendChild(Divp_DivText_line);
          const br5 = document.createElement("br");
          card.appendChild(br5);
          const Divp_DivText_weigth = document.createElement("div");
          Divp_DivText_weigth.style.display = "flex"
          Divp_DivText_weigth.style.alignItems = "center"
          Divp_DivText_weigth.style.gap = "10px"
          const p_DivText_weigth = document.createElement("p");
          p_DivText_weigth.textContent = "Gras";
          card.appendChild(Divp_DivText_weigth);
          Divp_DivText_weigth.appendChild(p_DivText_weigth);
          const input_title_cardWeigth = document.createElement("input");
          input_title_cardWeigth.type = "text";
          input_title_cardWeigth.classList.add("input_title_cardWeigth");
          input_title_cardWeigth.value = computedWeight; // Utiliser la valeur récupérée ici
          Divp_DivText_weigth.appendChild(input_title_cardWeigth);
          const br6 = document.createElement("br");
          card.appendChild(br6);
          const Divp_DivText_sizeText = document.createElement("div");
          Divp_DivText_sizeText.style.display = "flex"
          Divp_DivText_sizeText.style.alignItems = "center"
          Divp_DivText_sizeText.style.gap = "10px"
          const p_DivText_sizeText = document.createElement("p");
          p_DivText_sizeText.textContent = "Taille du texte";
          card.appendChild(Divp_DivText_sizeText);
          Divp_DivText_sizeText.appendChild(p_DivText_sizeText);
          const input_title_cardSizeText = document.createElement("input");
          input_title_cardSizeText.type = "text";
          input_title_cardSizeText.classList.add("input_title_cardSizeText");
          input_title_cardSizeText.value = computedSize; // Utiliser la valeur récupérée ici
          Divp_DivText_sizeText.appendChild(input_title_cardSizeText);
          const br7 = document.createElement("br");
          card.appendChild(br7);
          const Divp_DivText_spacing = document.createElement("div");
          Divp_DivText_spacing.style.display = "flex"
          Divp_DivText_spacing.style.alignItems = "center"
          Divp_DivText_spacing.style.gap = "10px"
          const p_DivText_spacing = document.createElement("p");
          p_DivText_spacing.textContent = "Espacement";
          card.appendChild(Divp_DivText_spacing);
          Divp_DivText_spacing.appendChild(p_DivText_spacing);
          const input_title_cardSpacing = document.createElement("input");
          input_title_cardSpacing.type = "text";
          input_title_cardSpacing.classList.add("input_title_cardSpacing");
          input_title_cardSpacing.value = computedSpacing // Utiliser la valeur récupérée ici
          Divp_DivText_spacing.appendChild(input_title_cardSpacing);
          const br8 = document.createElement("br");
          card.appendChild(br8);
          const Divp_DivText_color = document.createElement("div");
          Divp_DivText_color.style.display = "flex"
          Divp_DivText_color.style.alignItems = "center"
          Divp_DivText_color.style.gap = "10px"
          const p_DivText_color = document.createElement("p");
          p_DivText_color.textContent = "Couleur";
          card.appendChild(Divp_DivText_color);
          Divp_DivText_color.appendChild(p_DivText_color);
          const input_title_cardColor = document.createElement("input");
          input_title_cardColor.type = "color";
          input_title_cardColor.classList.add("input_title_cardColor");
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
          // Utiliser la fonction pour convertir la valeur RGB en hexadécimal
          const hexColor = rgbToHex(computedColor);
          input_title_cardColor.value = hexColor;
          Divp_DivText_color.appendChild(input_title_cardColor);
          const br9 = document.createElement("br");
          card.appendChild(br9);
          const Divp_DivText_borders = document.createElement("div");
          Divp_DivText_borders.style.display = "flex"
          Divp_DivText_borders.style.alignItems = "center"
          Divp_DivText_borders.style.gap = "10px"
          const p_DivText_borders = document.createElement("p");
          p_DivText_borders.textContent = "Bordure";
          card.appendChild(Divp_DivText_borders);
          Divp_DivText_borders.appendChild(p_DivText_borders);
          const input_title_cardBorders_color = document.createElement("input");
          input_title_cardBorders_color.type = "color";
          input_title_cardBorders_color.classList.add("input_title_cardBorders_color");
          const hexColor_border = rgbToHex(computedBorderColor);
          input_title_cardBorders_color.value = hexColor_border; // Utiliser la valeur récupérée ici
          Divp_DivText_borders.appendChild(input_title_cardBorders_color);
          const input_title_cardBorders_size = document.createElement("input");
          input_title_cardBorders_size.type = "text";
          input_title_cardBorders_size.classList.add("input_title_cardBorders_size");
          input_title_cardBorders_size.value = computedBorderSize; // Utiliser la valeur récupérée ici
          Divp_DivText_borders.appendChild(input_title_cardBorders_size);
          const input_title_cardBorders_radius = document.createElement("input");
          input_title_cardBorders_radius.type = "text";
          input_title_cardBorders_radius.classList.add("input_title_cardBorders_radius");
          input_title_cardBorders_radius.value = computedBorderRadius; // Utiliser la valeur récupérée ici
          Divp_DivText_borders.appendChild(input_title_cardBorders_radius);
          const input_title_cardBorders_radius_icon = document.createElement("div");
          input_title_cardBorders_radius_icon.classList.add("bx");
          input_title_cardBorders_radius_icon.classList.add("bx-border-radius");
          Divp_DivText_borders.appendChild(input_title_cardBorders_radius_icon);
          const br9bis = document.createElement("br");
          card.appendChild(br9bis);
          const Divp_DivText_align = document.createElement("div");
          Divp_DivText_align.classList.add("Divp_DivText_align")
          Divp_DivText_align.style.display = "flex"
          Divp_DivText_align.style.alignItems = "center"
          Divp_DivText_align.style.gap = "10px"
          const p_DivText_align = document.createElement("p");
          p_DivText_align.textContent = "Alignement";
          card.appendChild(Divp_DivText_align);
          Divp_DivText_align.appendChild(p_DivText_align);
          const icon_left_DivText_align = document.createElement("i");
          icon_left_DivText_align.classList.add("bx")
          icon_left_DivText_align.classList.add("bx-align-left")
          Divp_DivText_align.appendChild(icon_left_DivText_align);
          const icon_middle_DivText_align = document.createElement("i");
          icon_middle_DivText_align.classList.add("bx")
          icon_middle_DivText_align.classList.add("bx-align-middle")
          Divp_DivText_align.appendChild(icon_middle_DivText_align);
          const icon_right_DivText_align = document.createElement("i");
          icon_right_DivText_align.classList.add("bx")
          icon_right_DivText_align.classList.add("bx-align-right")
          Divp_DivText_align.appendChild(icon_right_DivText_align);
          const icon_justify_DivText_align = document.createElement("i");
          icon_justify_DivText_align.classList.add("bx")
          icon_justify_DivText_align.classList.add("bx-align-justify")
          Divp_DivText_align.appendChild(icon_justify_DivText_align);
          // Sélectionnez toutes les icônes
          const icons = document.querySelectorAll('.Divp_DivText_align .bx');
          const alignement_style = window.getComputedStyle(selectedDiv_text).justifyContent;
          // Ajoutez un gestionnaire d'événements de clic à chaque icône
          icons.forEach(icon => {
            icon.addEventListener('click', function () {
              // Vérifiez si l'icône cliquée est différente de celle qui possède déjà la classe 'active'
              if (!icon.classList.contains('active')) {
                // Supprimez la classe 'active' de toutes les icônes
                icons.forEach(otherIcon => {
                  otherIcon.classList.remove('active');
                });
                // Ajoutez la classe 'active' à l'icône cliquée
                icon.classList.add('active');
              }
            });
          });
          // Vérifiez l'alignement actuel du texte sélectionné et ajoutez la classe 'active' à l'icône correspondante
          if (alignement_style === "flex-start") {
            document.querySelector(".bx-align-left").classList.add('active');
          } else if (alignement_style === "center") {
            document.querySelector(".bx-align-middle").classList.add('active');
          } else if (alignement_style === "flex-end") {
            document.querySelector(".bx-align-right").classList.add('active');
          } else if (alignement_style === "space-around") {
            document.querySelector(".bx-align-justify").classList.add('active');
          } else if (alignement_style === "normal") {
            document.querySelector(".bx-align-middle").classList.add('active');
          }
          const br10 = document.createElement("br");
          card.appendChild(br10);
          const Divp_DivText_style = document.createElement("div");
          Divp_DivText_style.classList.add("Divp_DivText_style")
          Divp_DivText_style.style.display = "flex"
          Divp_DivText_style.style.alignItems = "center"
          Divp_DivText_style.style.gap = "10px"
          const p_DivText_style = document.createElement("p");
          p_DivText_style.textContent = "Style";
          card.appendChild(Divp_DivText_style);
          Divp_DivText_style.appendChild(p_DivText_style);
          const icon_bold_DivText_align = document.createElement("i");
          icon_bold_DivText_align.classList.add("bx")
          icon_bold_DivText_align.classList.add("bx-bold")
          Divp_DivText_style.appendChild(icon_bold_DivText_align);
          const icon_italic_DivText_align = document.createElement("i");
          icon_italic_DivText_align.classList.add("bx")
          icon_italic_DivText_align.classList.add("bx-italic")
          Divp_DivText_style.appendChild(icon_italic_DivText_align);
          const icon_underline_DivText_align = document.createElement("i");
          icon_underline_DivText_align.classList.add("bx")
          icon_underline_DivText_align.classList.add("bx-underline")
          Divp_DivText_style.appendChild(icon_underline_DivText_align);
          // Sélectionnez toutes les icônes de style
          const styleIcons = Divp_DivText_style.querySelectorAll('i');
          const computedfontSTYLE = window.getComputedStyle(selectedDiv_text).fontStyle;
          const computedtextDecorationLINE = window.getComputedStyle(selectedDiv_text).textDecorationLine;
          const computedfontWEIGHT = window.getComputedStyle(selectedDiv_text).fontWeight;

          // Ajoutez un gestionnaire d'événements de clic à chaque icône de style
          styleIcons.forEach(icon => {
            icon.addEventListener('click', function () {
              // Basculez la classe 'active' de l'icône cliquée
              icon.classList.toggle('active');


            });
            // Vérifiez si le style correspondant est déjà appliqué au texte sélectionné
            if (icon.classList.contains("bx-italic") && computedfontSTYLE === "italic") {
              icon.classList.add('active');
            } else if (icon.classList.contains("bx-underline") && computedtextDecorationLINE === "underline") {
              icon.classList.add('active');
            } else if (icon.classList.contains("bx-bold") && computedfontWEIGHT === "700") {
              icon.classList.add('active');
            }
          });

          const br11 = document.createElement("br");

          card.appendChild(br11);
          const title_card_2 = document.createElement("h1");
          title_card_2.textContent = "Autres effets";
          card.appendChild(title_card_2);
          const br12 = document.createElement("br");

          card.appendChild(br12);

          const Divp_DivText_background = document.createElement("div");
          Divp_DivText_background.style.display = "flex"
          Divp_DivText_background.style.alignItems = "center"
          Divp_DivText_background.style.gap = "10px"
          const p_DivText_background = document.createElement("p");
          p_DivText_background.textContent = "Fond";
          card.appendChild(Divp_DivText_background);
          Divp_DivText_background.appendChild(p_DivText_background);
          const input_title_cardBackground = document.createElement("input");
          input_title_cardBackground.type = "color";
          input_title_cardBackground.classList.add("input_title_cardBackground");

          const hexColor_back = rgbToHex(computedBackgroundcolor);
          input_title_cardBackground.value = hexColor_back
          Divp_DivText_background.appendChild(input_title_cardBackground);
          const input_title_transparent_value = document.createElement("input");
          input_title_transparent_value.type = "text";
          input_title_transparent_value.style.width = "55px";
          input_title_transparent_value.classList.add("input_title_transparent_value");
          input_title_transparent_value.value = "0"; // Utiliser la valeur récupérée ici
          Divp_DivText_background.appendChild(input_title_transparent_value);
          const br13 = document.createElement("br");

          card.appendChild(br13);
          const Divp_DivText_opacity = document.createElement("div");
          Divp_DivText_opacity.style.display = "flex"
          Divp_DivText_opacity.style.alignItems = "center"
          Divp_DivText_opacity.style.gap = "10px"
          const p_DivText_opacity = document.createElement("p");
          p_DivText_opacity.textContent = "Opacité";
          card.appendChild(Divp_DivText_opacity);
          Divp_DivText_opacity.appendChild(p_DivText_opacity);
          const input_title_opacity = document.createElement("input");
          input_title_opacity.type = "range";
          input_title_opacity.classList.add("input_title_opacity");
          input_title_opacity.value = computedOpacity * 100; // Utiliser la valeur récupérée ici
          Divp_DivText_opacity.appendChild(input_title_opacity);
          const input_title_opacity_value = document.createElement("input");
          input_title_opacity_value.type = "text";
          input_title_opacity_value.style.width = "55px";
          input_title_opacity_value.classList.add("input_title_opacity_value");
          input_title_opacity_value.value = computedOpacity * 100; // Utiliser la valeur récupérée ici
          Divp_DivText_opacity.appendChild(input_title_opacity_value);
          input_title_opacity.addEventListener("input", function () {
            // Met à jour la valeur de l'input de type text avec la valeur actuelle de l'input range
            input_title_opacity_value.value = this.value;
          });
          const br14 = document.createElement("br");

          card.appendChild(br14);

          const iconNames = ['bold', 'italic', 'underline'];

          // Fonction pour récupérer les valeurs avec des noms associés

          // btn save

          const div_save_text = document.createElement("div");

          div_save_text.classList.add("div_to_save");

          card.appendChild(div_save_text);
          const btn_save_text = document.createElement("button");

          btn_save_text.textContent = "Sauvegarder";

          div_save_text.appendChild(btn_save_text);
          div_save_text.addEventListener("click", function () {
            let align = [
              "flex-start",
              "center",
              "flex-end",
              "space-around"
            ]
            let style = [
              "bold",
              "italic",
              "auto",
              "#000",
              "underline",

            ]

            const newText = document.querySelector(".modif_text").value;
            const newPositionX = document.querySelector(".input_title_cardX").value;
            const newPositionY = document.querySelector(".input_title_cardY").value;
            const newCadreW = document.querySelector(".input_title_cardSizeWidth").value;
            const newCadreH = document.querySelector(".input_title_cardSizeHeight").value;
            const newrotation = document.querySelector(".input_title_cardRotation").value;
            const newGras = document.querySelector(".input_title_cardWeigth").value;

            const newSize = document.querySelector(".input_title_cardSizeText").value;
            const newSpacing = document.querySelector(".input_title_cardSpacing").value;
            const newColor = document.querySelector(".input_title_cardColor").value;
            const newBorderColor = document.querySelector(".input_title_cardBorders_color").value;
            const newBorderSize = document.querySelector(".input_title_cardBorders_size").value;
            const newBorderRaidus = document.querySelector(".input_title_cardBorders_radius").value;
            const Divp_DivText_align_value = document.querySelector(".Divp_DivText_align");
            const icon_Divp_DivText_align_value = Divp_DivText_align_value.querySelectorAll("i")
            const Divp_DivText_style_value = document.querySelector(".Divp_DivText_style");
            const icon_Divp_DivText_style_value = Divp_DivText_style_value.querySelectorAll("i")

            const newBackcolor = document.querySelector(".input_title_cardBackground").value;
            function hexToRgb(hex) {
              // Supprimer le caractère '#' s'il est présent
              hex = hex.replace(/^#/, '');

              // Séparer les composants de couleur
              var bigint = parseInt(hex, 16);
              var r = (bigint >> 16) & 255;
              var g = (bigint >> 8) & 255;
              var b = bigint & 255;

              // Retourner la couleur en format RGB
              return `rgb(${r}, ${g}, ${b})`;
            }

            // Utiliser la fonction pour convertir la couleur
            const rgbColor = hexToRgb(newBackcolor);
            var newBackcolorWithoutLastLetter = rgbColor.slice(0, -1);
            const newTransparent = document.querySelector(".input_title_transparent_value").value;
            const newOpacity = document.querySelector(".input_title_opacity_value").value;
            selectedDiv_text.style.position = "relative"
            selectedDiv_text.textContent = newText
            selectedDiv_text.style.left = newPositionX
            selectedDiv_text.style.top = newPositionY
            selectedDiv_text.style.width = newCadreW
            selectedDiv_text.style.height = newCadreH
            selectedDiv_text.style.rotate = newrotation
            selectedDiv_text.style.fontWeight = newGras
            selectedDiv_text.style.fontSize = newSize
            selectedDiv_text.style.wordSpacing = newSpacing
            selectedDiv_text.style.color = newColor
            selectedDiv_text.style.borderColor = newBorderColor
            if (newBorderSize) {
              selectedDiv_text.style.borderWidth = newBorderSize
              selectedDiv_text.style.borderBottomStyle = "solid"
              selectedDiv_text.style.borderTopStyle = "solid"
              selectedDiv_text.style.borderLeftStyle = "solid"
              selectedDiv_text.style.borderRightStyle = "solid"

            }

            selectedDiv_text.style.borderRadius = newBorderRaidus
            selectedDiv_text.style.display = "flex"

            icon_Divp_DivText_align_value.forEach((icon_align) => {
              if (icon_align.classList.contains("active")) {
                if (icon_align.classList.contains("bx-align-left")) {
                  selectedDiv_text.style.justifyContent = "flex-start"
                } else if (icon_align.classList.contains("bx-align-middle")) {
                  selectedDiv_text.style.justifyContent = "center"

                } else if (icon_align.classList.contains("bx-align-right")) {
                  selectedDiv_text.style.justifyContent = "flex-end"

                } else if (icon_align.classList.contains("bx-align-justify")) {
                  selectedDiv_text.style.justifyContent = "space-around"

                }
              }
            })
            let fontWeight = "normal";
            let fontStyle = "normal";
            let textDecorationLine = "none";

            icon_Divp_DivText_style_value.forEach((icon_style) => {
              if (icon_style.classList.contains("active")) {

                if (icon_style.classList.contains("bx-bold")) {
                  fontWeight = "bold";
                } else if (icon_style.classList.contains("bx-italic")) {
                  fontStyle = "italic";
                } else if (icon_style.classList.contains("bx-underline")) {
                  textDecorationLine = "underline";
                }
              }
            });

            selectedDiv_text.style.fontWeight = fontWeight;
            selectedDiv_text.style.fontStyle = fontStyle;
            selectedDiv_text.style.textDecorationLine = textDecorationLine;





            selectedDiv_text.style.backgroundColor = newBackcolorWithoutLastLetter + "," + newTransparent + "%)"

            selectedDiv_text.style.opacity = newOpacity / 100
          })
        }
      }
    }
    edit_bar.addEventListener("click", () => {
      resetClassActive()

      const edit_bar = document.querySelector(".edit_bar")
      edit_bar.classList.add("active")
      const selectedSection = document.querySelector(".select");

      if (selectedSection) {
        edit_card();
      } else {
        edit_card_div_text()
      }

    });

    function getYouTubeVideoId(url) {
      // Modèle d'expression régulière pour extraire l'ID de la vidéo
      var regExp = /^.*((youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*)/;
      var match = url.match(regExp);

      if (match && match[3].length == 11) {
        // L'ID de la vidéo a une longueur de 11 caractères
        return match[3];
      } else {
        // L'URL n'est pas une URL YouTube valide
        return null;
      }
    }

    icon_plus.addEventListener("click", () => {

      plus_card();
    });
    function Deleted() {

      const selectedSection = document.querySelector(".select"); // Rechercher la section avec la classe "select"
      selectedSection.style.cssText += "view-transition-name: t-1";
      if (selectedSection) {
        let confirmation = confirm(
          "Êtes-vous sûr de vouloir supprimer cette section ?"
        );
        if (confirmation) {
          const selectedId = selectedSection.id; // Récupérer l'ID de la section sélectionnée
          const selectedElement = document.getElementById(selectedId);
          document.startViewTransition(() => {
            // Réinitialiser le style ou supprimer des propriétés spécifiques
            selectedElement.remove(); // Réinitialiser le style complètement
            selectedSection.remove(); // Supprimer la section sélectionnée
          });
          resetLayout();
          resetCards();
          saved_create_notif();
        }
      }
      resetCards();
    }
    icon_moins.addEventListener("click", () => {
      Deleted()


    });


    function from_haut() {
      const body_index = document.querySelector(".body_index");
      const sections = body_index.querySelectorAll("section");
      const selectedSection = document.querySelector(".select");
      selectedSection.style.cssText += "view-transition-name: none";
      if (selectedSection) {

        let currentIndex = Array.from(sections).indexOf(selectedSection);

        if (currentIndex > 0) {
          const previousSection = sections[currentIndex - 1];
          document.startViewTransition(() => {
            selectedSection.parentNode.insertBefore(
              selectedSection,
              previousSection
            )
            selectedSection.style.removeProperty('view-transition-name');
          })

        }
      }

      resetLayout();
      resetHeader();
      resetCards();
      saved_create_notif()
    }
    icon_up.addEventListener("click", () => {
      from_haut();

    });
    const ctrlZ = document.querySelector(".ctrlZ");
    ctrlZ.addEventListener("click", () => {
      undo()


    });
    const Shift_ctrlZ = document.querySelector(".Shift_ctrlZ");

    let alreadyClicked2 = false;
    Shift_ctrlZ.addEventListener("click", () => {
      if (alreadyClicked2) return; // Si déjà cliqué, ne pas exécuter le reste du code
      alreadyClicked2 = true; // Indiquer que le bouton a été cliqué

      redo()

    });

    const custom_menu = document.getElementById("custom-menu");
    const body_index2 = document.querySelector(".body_index");

    body_index2.addEventListener("contextmenu", function (event) {

      // Empêcher le menu contextuel par défaut
      event.preventDefault();

      // Afficher le menu contextuel à la position du clic droit
      custom_menu.style.display = "block";
      custom_menu.style.left = event.clientX + "px";
      custom_menu.style.top = event.clientY + "px";
    });

    // Cacher le menu contextuel lorsque l'utilisateur clique en dehors
    document.addEventListener("click", function (event) {
      if (!custom_menu.contains(event.target)) {
        custom_menu.style.display = "none";
      }
    });

    custom_menu.addEventListener("click", function (event) {
      // Gérer les clics sur le menu
      const target = event.target;
      if (target.classList.contains("Copie")) {
        copied_section()
      }
      if (target.classList.contains("Coller")) {
        paste_section()
      }
      if (target.classList.contains("Cut")) {
        controll_x()
      }
      if (target.classList.contains("from_haut")) {
        // Exécutez une action en fonction de l'option sélectionnée
        from_haut();
      }
      if (target.classList.contains("from_bas")) {
        // Exécutez une action en fonction de l'option sélectionnée
        from_bas();
      }
      if (target.classList.contains("Deleted")) {
        const selectedSection = document.querySelector(".select");
        const selectedDiv_text = document.querySelector(".select_div_text");
        if (selectedSection) {
          Deleted();
        } else {

        }
        // Exécutez une action en fonction de l'option sélectionnée

      }
      if (target.classList.contains("Edit")) {
        // Exécutez une action en fonction de l'option sélectionnée

        const selectedSection = document.querySelector(".select");
        const selectedDiv_text = document.querySelector(".select_div_text");
        if (selectedSection) {
          edit_card();
        } else {
          edit_card_div_text()
        }
      }
      if (target.classList.contains("Plus")) {
        // Exécutez une action en fonction de l'option sélectionnée
        plus_card();
      }

      // Cacher le menu contextuel après le clic
      custom_menu.style.display = "none";
    });

    function copied_section() {
      const selectedSection = document.querySelector(".select");

      if (selectedSection) {
        const copiedsection = selectedSection.outerHTML
        const create_copiedsection = document.createElement("div")
        create_copiedsection.innerHTML = copiedsection
        // Supprimer l'élément '.dark' et tout son contenu
        const darkElements = create_copiedsection.querySelectorAll('.dark');
        darkElements.forEach(darkElement => darkElement.remove());

        // Modifier l'ID en ajoutant '_copied'
        const copiedId = selectedSection.id + '_copied';

        create_copiedsection.querySelector("section").id = copiedId;

        // Enregistrer le HTML modifié dans le localStorage
        localStorage.setItem("copied", create_copiedsection.outerHTML);
      }
    }
    function paste_section() {
      const selectedSection = document.querySelector(".select");
      const copied = localStorage.getItem("copied")
      const copied_and_supp = localStorage.getItem("copied_and_supp")
      if (selectedSection && copied) {
        selectedSection.insertAdjacentHTML('beforebegin', copied);
        section()
        elementText()
        divText()
        saved_create_notif()
      } else if (selectedSection && copied_and_supp) {
        selectedSection.insertAdjacentHTML('beforebegin', copied_and_supp);
        section()
        elementText()
        divText()
        saved_create_notif()

      }
    }
    function controll_x() {
      const selectedSection = document.querySelector(".select");
      if (selectedSection) {
        let html_selectsection = selectedSection.outerHTML
        html_selectsection = html_selectsection.replace(/<div class="dark"><\/div>/g, '');
        localStorage.setItem("copied_and_supp", html_selectsection)
        Deleted()
      }
    }

    document.addEventListener('keydown', function (event) {

      // Vérifiez si les touches Shift, Alt et la flèche vers le bas sont enfoncées simultanément
      if ((event.ctrlKey || event.metaKey) && event.key === 'e') {
        event.preventDefault();
        const selectedSection = document.querySelector(".select");
        if (selectedSection) {
          edit_card();
        } else {
          edit_card_div_text()
        }
      }
      if ((event.ctrlKey || event.metaKey) && event.key === 'g') {
        event.preventDefault();
        const selectedSection = document.querySelector(".select");
        if (selectedSection) {
          generation()
        }
      }

      // Vérifiez si les touches Shift, Alt et la flèche vers le haut sont enfoncées simultanément
      if ((event.ctrlKey || event.metaKey) && event.key === 'a') {

        event.preventDefault();
        const selectedSection = document.querySelector(".select");
        if (selectedSection) {
          plus_card();
        }

      }
      if ((event.ctrlKey || event.metaKey) && event.key === 'z') {
        event.preventDefault();
        undo();

      }
      if (event.shiftKey && (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'z') {
        event.preventDefault();

        redo();
      }



      if ((event.ctrlKey || event.metaKey) && event.key === 'ArrowUp') {
        event.preventDefault();
        const selectedSection = document.querySelector(".select");
        if (selectedSection) {
          from_haut();
        }

      }


      if ((event.ctrlKey || event.metaKey) && event.key === 'ArrowDown') {
        event.preventDefault();
        const selectedSection = document.querySelector(".select");
        if (selectedSection) {
          from_bas();
        }

      }
      if ((event.ctrlKey || event.metaKey) && event.key === 'c') {
        event.preventDefault();
        copied_section()

      }

      if ((event.ctrlKey || event.metaKey) && event.key === 'v') {
        event.preventDefault();
        paste_section()


      }
      if ((event.ctrlKey || event.metaKey) && event.key === 'x') {
        event.preventDefault();
        controll_x()


      }
    });

    function from_bas() {
      const body_index = document.querySelector(".body_index");
      const sections = body_index.querySelectorAll("section");
      const selectedSection = document.querySelector(".select");
      selectedSection.style.cssText += "view-transition-name: none";
      if (selectedSection) {

        let currentIndex = Array.from(sections).indexOf(selectedSection);

        if (currentIndex < sections.length) {
          const nextSection = sections[currentIndex + 2];
          document.startViewTransition(() => {
            selectedSection.parentNode.insertBefore(selectedSection, nextSection);
            selectedSection.style.removeProperty('view-transition-name');
          });
        }
      }

      resetLayout();
      resetHeader();
      resetCards();
      saved_create_notif()
    }
    icon_down.addEventListener("click", () => {
      from_bas();


    });

    localStorage.setItem("nb_zoom", 100);
    const nb_zoom_var = localStorage.getItem("nb_zoom");
    const nb_zoom = document.querySelector(".nb_zoom");
    nb_zoom.textContent = nb_zoom_var + "%";
    nb_zoom.classList.add("open");
    nb_zoom.addEventListener("click", function () {
      if (nb_zoom.classList.contains("open")) {
        const bar_zoom = document.createElement("div")
        bar_zoom.classList.add("bar_zoom")
        const moins_zoom = document.createElement("div")
        moins_zoom.classList.add("moins_zoom")
        const i_moins_zoom = document.createElement("div")
        i_moins_zoom.classList.add("bx", "bx-minus")
        moins_zoom.appendChild(i_moins_zoom)

        const phone = document.createElement("div")
        phone.classList.add("device", "phone")
        const i_phone = document.createElement("i")
        i_phone.classList.add("bx", "bx-mobile")
        phone.appendChild(i_phone)
        phone.addEventListener("click", function () {
          body_index.style.width = "360px"
          body_index.style.height = "640px"
        })
        const tablette = document.createElement("div")
        tablette.classList.add("device", "tab")

        const i_tablette = document.createElement("i")
        i_tablette.classList.add("bx", "bx-tab")
        tablette.appendChild(i_tablette)
        tablette.addEventListener("click", function () {
          body_index.style.width = "768px"
          body_index.style.height = "1024px"
        })
        const laptop = document.createElement("div")
        laptop.classList.add("device", "laptop")

        const i_laptop = document.createElement("i")
        i_laptop.classList.add("bx", "bx-laptop")
        laptop.appendChild(i_laptop)
        laptop.addEventListener("click", function () {
          body_index.style.width = "1152px"
          body_index.style.height = "648px"
        })
        const plus_zoom = document.createElement("div")
        plus_zoom.classList.add("plus_zoom")
        const i_plus_zoom = document.createElement("div")
        i_plus_zoom.classList.add("bx", "bx-plus")
        plus_zoom.appendChild(i_plus_zoom)

        bar_zoom.appendChild(moins_zoom)
        bar_zoom.appendChild(phone)
        bar_zoom.appendChild(tablette)
        bar_zoom.appendChild(laptop)
        bar_zoom.appendChild(plus_zoom)
        reglage_zoom.appendChild(bar_zoom)

        nb_zoom.classList.remove("open");

        moins_zoom.addEventListener("click", function () {
          let nb_zoom_var = parseInt(localStorage.getItem("nb_zoom"), 10);
  if (nb_zoom_var > 10) { // Assurez-vous que le zoom ne descend pas en dessous de 10%
    nb_zoom_var -= 10;
    localStorage.setItem("nb_zoom", nb_zoom_var);

    const nb_zoom = document.querySelector(".nb_zoom");
    nb_zoom.textContent = nb_zoom_var + "%";

    const body_index = document.querySelector(".body_index");
    body_index.style.transform = "scale(" + (nb_zoom_var / 100) + ")";
  }
        });
        plus_zoom.addEventListener("click", function () {
           let nb_zoom_var = parseInt(localStorage.getItem("nb_zoom"), 10);
  if (nb_zoom_var < 200) { // Assurez-vous que le zoom ne dépasse pas 200%
    nb_zoom_var += 10;
    localStorage.setItem("nb_zoom", nb_zoom_var);

    const nb_zoom = document.querySelector(".nb_zoom");
    nb_zoom.textContent = nb_zoom_var + "%";

    const body_index = document.querySelector(".body_index");
    body_index.style.transform = "scale(" + (nb_zoom_var / 100) + ")";
  }
        });
      } else {
        const phone = document.querySelector(".phone");
        const tablette = document.querySelector(".tab");
        const laptop = document.querySelector(".laptop");
        const moins_zoom = document.querySelector(".moins_zoom");
        const plus_zoom = document.querySelector(".plus_zoom");
        if (phone) {
          phone.remove()
        }
        if (tablette) {
          tablette.remove()
        }
        if (laptop) {
          laptop.remove()
        }
        if (moins_zoom) {
          moins_zoom.remove()
        }
        if (plus_zoom) {
          plus_zoom.remove()
        }


        body_index.style.width = "90%"
        body_index.style.height = "747px"
        nb_zoom.classList.add("open");
      }
    });


  }

  function resetLayout_div_text() {
    resetGenerateBar();

    const Up = document.querySelector(".up");
    const down = document.querySelector(".down");
    const selection_div_text = document.querySelectorAll(".selection_div_text");
    selection_div_text.forEach((s) => {
      s.classList.remove("select_div_text");
      down.style.display = "none";
      Up.style.display = "none";
      const blur_and_darklight = document.querySelector(".dark_text");

      if (blur_and_darklight) {
        blur_and_darklight.remove();
      }
    });
  }
  function resetLayout() {
    resetGenerateBar();

    const Up = document.querySelector(".up");
    const down = document.querySelector(".down");
    const body_index = document.querySelector(".body_index");
    const sections = body_index.querySelectorAll("section");
    sections.forEach((s) => {
      s.classList.remove("select");
      s.style.cursor = "auto";
      down.style.display = "none";
      Up.style.display = "none";
      const parallaxe = localStorage.getItem("isChecked_parallax");
      const Images = document.getElementById("Images");
      if (Images) {
        if (parallaxe === "true") {
          Images.style.backgroundAttachment = "fixed";
        } else {
          Images.style.backgroundAttachment = ""; // Définissez ici la valeur par défaut souhaitée
        }
      }
      const blur_and_darklight = document.querySelector(".dark");
      if (blur_and_darklight) {
        blur_and_darklight.remove();
      }
    });

  }
  function resetGenerateBar() {
    const generate_bar_div = document.querySelector(".generate_bar_div");
    if (generate_bar_div) {
      generate_bar_div.remove();
    }
  }
  function resetCards() {
    const card = document.querySelector(".card_index");
    if (card) {
      card.style.transform = "translateX(500px)";
      setTimeout(() => {
        card.remove();
      }, 300);
    }
  }
  function reset_nav_bar() {
    const nav_bar_vert = document.querySelector(".sidebar");

    const Up = document.querySelector(".up");
    const down = document.querySelector(".down");
    if (nav_bar_vert) {
      nav_bar_vert.classList.remove("select");
      nav_bar_vert.style.cursor = "auto";
      down.style.display = "none";
      Up.style.display = "none";
      const blur_and_darklight = document.querySelector(".dark");
      if (blur_and_darklight) {
        blur_and_darklight.remove();
      }
    }
  }
  function resetHeader() {
    const header = document.querySelector("header");

    const Up = document.querySelector(".up");
    const down = document.querySelector(".down");
    header.classList.remove("select");
    header.style.cursor = "auto";
    down.style.display = "none";
    Up.style.display = "none";
    const blur_and_darklight = document.querySelector(".dark");
    const link_provisoire = document.querySelectorAll("#font_provisoire");
    link_provisoire.forEach((link) => {
      link.remove()
    })
    if (blur_and_darklight) {
      blur_and_darklight.remove();
    }
  }
  function resetClassActive() {
    const select_bar = document.querySelector(".select_bar")
    select_bar.classList.remove("active")
    const edit_bar = document.querySelector(".edit_bar")
    edit_bar.classList.remove("active")
    const generate_bar = document.querySelector(".generate_bar")
    generate_bar.classList.remove("active")
  }
  // Utilisez un ancêtre statique déjà présent dans le DOM
  function resetCards() {
    const card = document.querySelector(".card_index");
    if (card) {
      card.style.transform = "translateX(500px)";
      setTimeout(() => {
        card.remove();
      }, 300);
    }
  }
  setTimeout(() => {
    const icon_download = document.querySelector(".download");
    const icon_share = document.querySelector(".share");
    const body_index3 = document.querySelector(".body_index");
    const voir_mon_site = document.querySelector(".voir_mon_site");
    voir_mon_site.addEventListener("click", function (event) {
      resetLayout()
      resetCards()
      resetHeader()
      resetLayout_div_text()
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
      body_index3.style.marginBottom = "0px";
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
      const HtmlStyle = document.documentElement.getAttribute("style");
      localStorage.setItem("html_style", HtmlStyle)
      // Générer le contenu à télécharger
      const generatedContent = `<!DOCTYPE html>
<html lang="fr" style="${HtmlStyle || ''}>
${clonedDocument.documentElement.innerHTML}
</html>`;
      const contentKey = new URLSearchParams(window.location.search).get(
        "contentKey"
      );
      if (contentKey) {
        const request = window.indexedDB.open("MaBaseDeDonnees", 1);
        request.addEventListener("success", function (event) {
          const db = event.target.result;
          const transaction_first = db.transaction(["GestionSite"], "readonly");
          const objectStore_first = transaction_first.objectStore("GestionSite");
          const request = objectStore_first.get(Number(contentKey));
          request.onsuccess = function (event) {
            const code_site = event.target.result;
            if (code_site) {
              // Faites quelque chose avec les données récupérées
              // Récupérez le contenu HTML à partir du localStorage en utilisant la clé
              const [siteId, codeSite] = code_site.SiteContent.split('¤');
              localStorage.setItem("Index_view_site", siteId);
              console.log("true")
            }
          }
        });
      } else {
        localStorage.setItem("Index_view_site", generatedContent);
      }
      body_index3.style.width = "90%"
      body_index3.style.height = "747px"
      body_index3.style.overflowY = 'scroll';
      body_index3.style.borderRadius = "15px"

      body_index3.style.marginBottom = "90px";
    });
    // Sélectionnez toutes les icônes du panneau latéral
    const iconElements = document.querySelectorAll('.cache_tool i');
    // Ajoutez un gestionnaire d'événements de clic à chaque icône
    iconElements.forEach(icon => {
      icon.addEventListener('click', function () {
        // Supprimez la classe 'active' de toutes les icônes
        iconElements.forEach(otherIcon => {
          otherIcon.classList.remove('active');
        });
        // Ajoutez la classe 'active' à l'icône cliquée
        icon.classList.add('active');
      });
    });
    const name_of_site2 = document.querySelector(".name_of_site");
    if (name_of_site2) {
      // Affichez le contenu du nom du site dans la console pour le débogage
      name_of_site2.addEventListener("click", function (event) {
        // Demander à l'utilisateur le nouveau nom du site
        const newName = prompt("Entrez le nouveau nom du site :");
        if (newName !== null) {  // Si l'utilisateur clique sur "Annuler", prompt retourne null
          // Mettez à jour l'affichage avec le nouveau nom
          name_of_site2.textContent = newName;
          const ancien_name = localStorage.getItem("siteName")
          const element = document.querySelector(".hero-content h1.selection_div_text");
          if (element.textContent.includes(ancien_name)) {
            element.innerHTML = element.innerHTML.replace(ancien_name, newName);
          }
          document.head.querySelector('title').textContent = newName;
          localStorage.setItem("siteName", newName)
          const contentKey = new URLSearchParams(window.location.search).get(
            "contentKey"
          );
          if (contentKey) {
            // Récupérez le contenu HTML à partir du localStorage en utilisant la clé
            const code_site = localStorage.getItem(contentKey);
            const [siteId, codeSite] = code_site.split('¤');
            // Mettez à jour le nom du site dans la base de données
            const request = window.indexedDB.open("MaBaseDeDonnees", 1);
            request.addEventListener("success", function (event) {
              const db = event.target.result;
              const transaction = db.transaction(["Site"], "readwrite");
              const objectStore = transaction.objectStore("Site");
              // Utilisez la clé "SiteId" pour mettre à jour l'entrée
              const updateRequest = objectStore.put({ id: siteId, name: newName });
              updateRequest.onsuccess = function (event) {
                console.log("Nom du site mis à jour avec succès dans la base de données.");
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
              saved_create_notif()
              updateRequest.onerror = function (event) {
                console.error("Erreur lors de la mise à jour du nom du site dans la base de données :", event.target.error);
              };
            });
          }
        }
      });
    }
    icon_download.addEventListener("click", () => {
      resetLayout();
      resetLayout_div_text();
      reset_nav_bar();
      resetCards();
      card_create();
      const card_index = document.querySelector(".card_index");
      const card = document.querySelector(".body_plus");
      const body_edit = document.querySelector(".body_edit");
      const body_dowload = document.querySelector(".body_dowload");
      if (card || body_edit || body_dowload) {
      } else {

        // Création de l'élément div
        const body_dowload = document.createElement("div");
        body_dowload.classList.add("body_dowload");
        const button_div = document.createElement("div");
        button_div.classList.add("installer");
        card_index.appendChild(body_dowload)
        // Création de l'élément label
        const label = document.createElement("label");
        label.setAttribute("for", "progressLinux");

        // Création de l'élément input
        const input = document.createElement("input");
        input.setAttribute("id", "progressLinux");
        input.setAttribute("type", "radio");

        // Création de l'élément span
        const span = document.createElement("span");

        // Ajout de l'input et du span à l'élément label
        label.appendChild(input);
        label.appendChild(span);

        // Ajout de l'élément label à l'élément div
        button_div.appendChild(label);



        card_index.id = "download_id"
        const type_file = document.createElement("h2")
        type_file.textContent = "Choissisez vos fichiers à télécharger"
        body_dowload.appendChild(type_file)
        const choix_file = document.createElement("div")
        choix_file.classList.add("choix_file")
        body_dowload.appendChild(choix_file)
        const divFileSM = document.createElement("div")
        divFileSM.style.display = "flex"

        const container_label = document.createElement("label")
        container_label.classList.add("container_label")

        const checkmark = document.createElement("div")
        checkmark.classList.add("checkmark")
        const fileSIteMap = document.createElement("input")
        fileSIteMap.type = "Checkbox"
        fileSIteMap.id = "sitemapCheckbox"
        fileSIteMap.checked = "checked"


        const textFileSM = document.createElement("p")

        textFileSM.textContent = "Fichier info (README.txt)"
        container_label.appendChild(fileSIteMap)
        container_label.appendChild(checkmark)
        divFileSM.appendChild(container_label)
        divFileSM.appendChild(textFileSM)
        choix_file.appendChild(divFileSM)
        const divFileCode = document.createElement("div")
        divFileCode.style.display = "flex"
        const container_label2 = document.createElement("label")
        container_label2.classList.add("container_label")

        const checkmark2 = document.createElement("div")
        checkmark2.classList.add("checkmark")
        const fileHTMLCSSJS = document.createElement("input")
        fileHTMLCSSJS.type = "Checkbox"
        fileHTMLCSSJS.id = "htmlCssJsCheckbox"

        fileHTMLCSSJS.checked = "checked"

        const textfileCode = document.createElement("p")

        textfileCode.textContent = "Fichier HTML/CSS/JS (.html/.css/.js)"
        container_label2.appendChild(fileHTMLCSSJS)
        container_label2.appendChild(checkmark2)
        divFileCode.appendChild(container_label2)
        divFileCode.appendChild(textfileCode)
        choix_file.appendChild(divFileCode)
        const divFileImg = document.createElement("div")
        divFileImg.style.display = "flex"
        const container_label3 = document.createElement("label")
        container_label3.classList.add("container_label")

        const checkmark3 = document.createElement("div")
        checkmark3.classList.add("checkmark")
        const fileEmbedImg = document.createElement("input")
        fileEmbedImg.type = "Checkbox"
        fileEmbedImg.id = "imgCheckbox"
        fileEmbedImg.checked = "checked"

        const textfileImg = document.createElement("p")

        textfileImg.textContent = "Fichier IMG (.jpeg)"

        const figma_design = document.createElement("div")
        figma_design.classList.add("figma_design")

        const bx_copy = document.createElement("i")
        bx_copy.classList.add("bx")
        bx_copy.classList.add("bx-copy")
        const p_figma = document.createElement("p")
        p_figma.textContent = "Design pour Figma"
        const bx_design = document.createElement("i")
        bx_design.classList.add("bx")
        bx_design.classList.add("bxl-figma")


        figma_design.appendChild(bx_copy)

        figma_design.appendChild(p_figma)
        figma_design.appendChild(bx_design)
        body_dowload.appendChild(figma_design)
        container_label3.appendChild(fileEmbedImg)
        container_label3.appendChild(checkmark3)
        divFileImg.appendChild(container_label3)
        divFileImg.appendChild(textfileImg)
        choix_file.appendChild(divFileImg)

        // Ajout de l'élément div à la page (par exemple, à la fin du corps)
        body_dowload.appendChild(button_div);


      }

      const figma_design = document.querySelector(".figma_design")
      const installer = document.querySelector(".installer")
      let alreadyClicked = false;
      installer.addEventListener("click", function () {

        // Votre code ici
        if (alreadyClicked) return; // Si déjà cliqué, ne pas exécuter le reste du code
        alreadyClicked = true; // Indiquer que le bouton a été cliqué
        setTimeout(() => {
          resetCards()
        }, 5000)

        const body_index_vraie = document.querySelector(".body_index");

        const cssContent = document.getElementById("codeTextarea_css").value;
        const jsContent = document.getElementById("codeTextarea_js").value;

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
          document.getElementById("variable"), // Ajoutez l'élément à exclure ici
          document.getElementById("side_bar_tool"), // Ajoutez l'élément à exclure ici
          document.getElementById("header_language"), // Ajoutez l'élément à exclure ici
          document.getElementById("card_code"), // Ajoutez l'élément à exclure ici
          document.getElementById("console"), // Ajoutez l'élément à exclure ici
          document.getElementById("download_id"), // Ajoutez l'élément à exclure ici
          document.getElementById("infinity_space"), // Ajoutez l'élément à exclure ici
        ];
        body_index_vraie.style.width = "100%"

        body_index_vraie.style.height = "100%"
        body_index_vraie.style.overflow = 'hidden';
        body_index_vraie.style.borderRadius = "0px"
        body_index3.style.marginBottom = "0px";
        body_index_vraie.style.background = "white"
        const colors = colorhex_site.split(', ');

        // Assigner les couleurs en fonction de l'ordre dans la liste
        const style_couleur = '--text_color_white: ' + colors[3] + "; " + '--text_color_black: ' + colors[0] + "; " + '--link_color: ' + colors[2] + "; " + '--btn_color: ' + colors[1] + "; " + '--body_color: ' + colors[0] + ";"



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
        <html lang="fr" style="${style_couleur}">
     
          ${clonedDocument.documentElement.innerHTML}
      
        </html>`;

        let imageCounter = 1;
        let imageCounter2 = 1;
        function getFormattedDate() {
          const date = new Date();
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const day = String(date.getDate()).padStart(2, '0');
          return `${year}${month}${day}`;
        }
        const updatedContent = generatedContent.replace(/src="sitemap\.js"/gi, 'src="script.js"');
        console.log(updatedContent);
        // Supprimer toutes les balises <script> (sauf celles qui incluent src="script.js") et les balises <style>
        const withoutScriptsAndStyles = updatedContent.replace(
          /<script\b(?![^>]*\bsrc="script\.js")\b[^<]*>[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>|<style\b[^<]*>[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi,
          ''
        );

        // Afficher ou utiliser le contenu modifié sans les scripts et styles non désirés
        console.log(withoutScriptsAndStyles);
        const htmlContent = withoutScriptsAndStyles.replace(
          /data:image\/png;base64,[^\"]+/gi,
          function (match) {
            // Vérifier si l'image correspond à `savedLogo`
            if (match === savedLogo) {
              return 'logo.png';
            } else {
              // Générer un nom d'image unique
              const formattedDate = getFormattedDate();
              const imageName = `image_${formattedDate}_${imageCounter++}.png`;


              return imageName + `&quot;) center center / cover `;
            }
          }
        );
        let README =
          `# [title]
      
        ## Description
        Ce projet est un site web créer par The Fab Studio, destiné pour [type_de_site].
      
        ## Installation
        
        1. Cloner ce dépôt sur votre machine locale.
        2. Ouvrir le dossier du projet dans votre éditeur de code préféré.
        3. Ouvrir le fichier index.html dans un navigateur web pour visualiser le site.
        
        ## Configuration
        Aucune configuration supplémentaire n'est requise pour exécuter le site.
        
        
        ## Utiles
        -Nombre de liens externes: [nb_lien_int]
        -Nombre de liens internes: [nb_lien_ext]
        -Nombre d'element dans le site: [nb_element_body]
        -Nombre de sections: [nb_section]
        
        ## Contributeurs
        - Vous
       
        
        ## Licence
        Ce projet est sous licence libre.
        `

        const title_of_site = localStorage.getItem("siteName")
        const type_of_site = localStorage.getItem("selectedSiteType")
        const ext_of_site = localStorage.getItem("link_ext_of_site")
        const int_of_site = localStorage.getItem("link_int_of_site")
        const section_of_site = localStorage.getItem("nb_section_of_site")
        const element_of_site = localStorage.getItem("element_body_of_site")
        // Remplacement des placeholders par les valeurs réelles
        README = README.replace("[title]", title_of_site);

        README = README.replace("[type_de_site]", type_of_site);
        README = README.replace("[nb_lien_int]", ext_of_site);
        README = README.replace("[nb_lien_ext]", int_of_site);
        README = README.replace("[nb_element_body]", element_of_site);
        README = README.replace("[nb_section]", section_of_site);

        const sitemapContent = localStorage.getItem('sitemapChecked') === 'true';
        const htmlCssJsContent = localStorage.getItem('htmlCssJsChecked') === 'true';
        const imgContent = localStorage.getItem('imgChecked') === 'true';



        if (typeof JSZip === 'undefined') {
          console.error('JSZip n\'est pas défini. Assurez-vous de l\'avoir inclus dans votre projet.');
        } else {

          // Créez un fichier zip
          const zip = new JSZip();

          // Ajoutez chaque fichier au zip
          if (sitemapContent) {
            const blob_txtContent = new Blob([README], { type: "text/txt" });
            zip.file('README.txt', blob_txtContent);
          }

          if (htmlCssJsContent) {
            const blob_htmlContent = new Blob([htmlContent], { type: "text/html" });



            zip.file('index.html', blob_htmlContent);
            const blob_cssContent = new Blob([cssContent], { type: "text/css" });

            zip.file('style_css.css', blob_cssContent);
            const blob_jsContent = new Blob([jsContent], { type: "text/js" });
            zip.file('script.js', blob_jsContent);

            // Vérifier si l'URL est au format base64

            const updatedContent2 = generatedContent.replace(/src="Script\.js"/gi, 'src="script.js"');

            // Supprimer toutes les balises <script> (sauf celles qui incluent src="script.js") et les balises <style>
            const withoutScriptsAndStyles2 = updatedContent2.replace(
              /<script\b(?![^>]*\bsrc="script\.js")\b[^<]*>[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>|<style\b[^<]*>[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi,
              ''
            );
            const Img_saved = withoutScriptsAndStyles2.replace(
              /data:image\/png;base64,[^\"]+/gi,
              function (match) {
                // Vérifier si l'image correspond à `savedLogo`
                if (match === savedLogo) {
                  if (savedLogo.startsWith("data:image/png;base64,")) {
                    const [, base64Data] = savedLogo.split(',');
                    const imageBlob = base64toBlob(base64Data, 'image/png');
                    // Pour tester, téléchargez directement le Blob sans l'ajouter au Zip


                    // Ajouter le Blob au zip
                    zip.file('logo.png', imageBlob);
                  }
                } else {
                  // Générer un nom d'image unique
                  const formattedDate = getFormattedDate();
                  const imageName = `image_${formattedDate}_${imageCounter2++}.png`;

                  // Créer un Blob pour cette image base64
                  const [, base64Data2] = match.split(',');

                  const index = base64Data2.indexOf('=&');

                  if (index !== -1) {
                    // Extraire tout avant l'index trouvé
                    const base64Data2_match = base64Data2.substring(0, index).trim();
                    const imageBlob = base64toBlob((base64Data2_match + "="), 'image/png');
                    zip.file(imageName, imageBlob);
                  }





                }
              }
            );
          }

          if (imgContent) {
            const request = window.indexedDB.open("MaBaseDeDonnees", 1);

            request.addEventListener("success", function (event) {
              const db = event.target.result;
              const transaction = db.transaction(["Image_du_site"], "readonly");
              const objectStore = transaction.objectStore("Image_du_site");
              const img_cool = objectStore.get("img");

              img_cool.onsuccess = function (event) {

                const link_img = event.target.result;

                if (link_img) {
                  const link_img_url = link_img.url;

                  // Logguer l'URL de l'image


                  // Vérifier si l'URL est au format base64
                  if (link_img_url.startsWith("data:image/png;base64,")) {
                    const [, base64Data] = link_img_url.split(',');
                    const imageBlob = base64toBlob(base64Data, 'image/png');
                    // Pour tester, téléchargez directement le Blob sans l'ajouter au Zip


                    // Ajouter le Blob au zip
                    zip.file('image.png', imageBlob);
                    // Générez le contenu du zip
                    zip.generateAsync({ type: 'blob' })
                      .then((blob) => {
                        // Créez un objet URL pour le zip
                        const zipUrl = URL.createObjectURL(blob);

                        // Créez un élément d'ancre pour le téléchargement
                        const a = document.createElement('a');
                        a.href = zipUrl;
                        a.download = 'my_website.zip';

                        // Ajoutez l'élément d'ancre à la page et déclenchez le téléchargement
                        document.body.appendChild(a);
                        a.click();

                        // Supprimez l'élément d'ancre de la page
                        document.body.removeChild(a);
                      })
                  } else {
                    console.error("L'URL de l'image n'est pas au format base64 attendu.");
                  }
                } else {
                  alert(`Veuillez appuyer sur le bouton "Voir" pour charger l'image`)
                }
              };
              img_cool.onerror = function () {
                alert("Appuyer sur Voir pour charger la photo")
              }

            });




          } else {

            zip.generateAsync({ type: 'blob' })
              .then((blob) => {

                // Créez un objet URL pour le zip
                const zipUrl = URL.createObjectURL(blob);

                // Créez un élément d'ancre pour le téléchargement
                const a = document.createElement('a');
                a.href = zipUrl;
                a.download = 'my_website.zip';

                // Ajoutez l'élément d'ancre à la page et déclenchez le téléchargement
                document.body.appendChild(a);
                a.click();

                // Supprimez l'élément d'ancre de la page
                document.body.removeChild(a);

              })
          }
          function base64toBlob(base64Data, contentType = 'image/png') {
            const sliceSize = 1024;

            const byteCharacters = atob(base64Data);
            const byteArrays = [];

            for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
              const slice = byteCharacters.slice(offset, offset + sliceSize);
              const byteNumbers = new Array(slice.length);

              for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
              }

              const byteArray = new Uint8Array(byteNumbers);
              byteArrays.push(byteArray);
            }

            return new Blob(byteArrays, { type: contentType });
          }
        }
        body_index_vraie.style.width = "90%"
        body_index_vraie.style.height = "747px"
        body_index_vraie.style.overflowY = 'scroll';
        body_index_vraie.style.borderRadius = "15px"
        body_index_vraie.style.background = "#1b1b1b"
        body_index3.style.marginBottom = "90px";


      });
      figma_design.addEventListener("click", async function () {

        // Contenu CSS
        const cssContentElement = document.getElementById("codeTextarea_css");
        let cssContent = cssContentElement.textContent;

        cssContent = cssContent.replace(/\.body_index\s*\{[^}]*\}/g, '');
        // Élément à exclure
        const excludedElements = [
          "button_div", "bar_edit", "header_bar_div", "save_notif", "toast", "header_bar",
          "page", "reglage_zoom", "custom-menu", "code_ide", "database",
          "script", "variable", "side_bar_tool", "header_language",
          "card_code", "console", "download_id"
        ];

        // Cloner le document
        const clonedDocument = document.cloneNode(true);

        // Supprimer les éléments exclus
        excludedElements.forEach((elementId) => {
          const excludedElementClone = clonedDocument.getElementById(elementId);
          if (excludedElementClone) {
            excludedElementClone.remove();
          }
        });
        const bodyIndexElement = clonedDocument.querySelector('.body_index');
        bodyIndexElement.style.borderRadius = "0px"
        bodyIndexElement.style.marginBottom = "0px";
        bodyIndexElement.style.width = "100%"
        bodyIndexElement.style.height = "100vh"
        const fontFamily = localStorage.getItem("font_family")
        bodyIndexElement.style.fontFamily = fontFamily
        const colors = colorhex_site.split(', ');

        // Assigner les couleurs en fonction de l'ordre dans la liste
        const style_couleur = {
          '--text_color_white': colors[0],
          '--text_color_black': colors[1],
          '--link_color': colors[1],
          '--btn_color': colors[1],
          '--body_color': colors[2]
        };

        // Appliquer les variables CSS à l'élément
        for (const [property, value] of Object.entries(style_couleur)) {
          bodyIndexElement.style.setProperty(property, value);
        }
        // Extraire le contenu du body
        let bodyContent = clonedDocument.body.innerHTML;

        // Enlever les balises script et style
        bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>|<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

        // Encodage de la chaîne en JSON


        const options = {
          method: 'POST',
          headers: {
            Authorization: 'Bearer {api_key.api_key}',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ html: bodyContent + `<style>${cssContent}`, clip: true })
        };
        async function copyToClipboard(html) {
          // Essayez d'utiliser la Clipboard API
          try {
            // Créez un Blob avec le type MIME pour HTML
            const blob = new Blob([html], { type: 'text/html' });
            // Utilisez un DataTransfer pour préparer le contenu à copier
            const clipboardItem = new ClipboardItem({ 'text/html': blob });

            // Copiez le contenu dans le presse-papiers
            await navigator.clipboard.write([clipboardItem]);

            toast_valid("Copier avec succès", "success");



          } catch (err) {
            console.error('Erreur lors de la copie:', err);
            toast_valid("Erreurs lors de la copie", "error");

          }
        }
        try {
          // Envoyer la requête à l'API
          const response = await fetch('https://api.to.design/html', options);
          // Lire la réponse en texte brut
          const clipboardDataFromAPI = await response.text();

          // Afficher la réponse dans la console


          // Vérifier si la réponse contient un indicateur d'erreur ou un autre format
          if (clipboardDataFromAPI.startsWith("<!DOCTYPE html>")) {
            console.error("The API returned an HTML document, not JSON:", clipboardDataFromAPI);
          } else {

            copyToClipboard(clipboardDataFromAPI);
          }
        } catch (error) {
          // Gérer les erreurs de la requête
          console.error('Error:', error);
        }
        document.addEventListener('copy', (e) => {
          if (clipboardDataFromAPI) {
            // Spécifie que nous copions du contenu HTML
            e.clipboardData.setData('text/html', clipboardDataFromAPI);
            // Pour le texte brut, si nécessaire (facultatif)
            e.preventDefault();
            clipboardDataFromAPI = undefined;

          }
        });
      })
      // Récupérer les éléments de case à cocher
      const sitemapCheckbox = document.getElementById('sitemapCheckbox');
      const htmlCssJsCheckbox = document.getElementById('htmlCssJsCheckbox');
      const imgCheckbox = document.getElementById('imgCheckbox');
      // Charger l'état initial depuis le local storage
      function loadInitialState() {
        sitemapCheckbox.checked = localStorage.getItem('sitemapChecked') === 'true';
        htmlCssJsCheckbox.checked = localStorage.getItem('htmlCssJsChecked') === 'true';
        imgCheckbox.checked = localStorage.getItem('imgChecked') === 'true';
      }
      if (sitemapCheckbox) {
        loadInitialState();
      }

      function updateLocalStorage() {
        localStorage.setItem('sitemapChecked', sitemapCheckbox.checked);
        localStorage.setItem('htmlCssJsChecked', htmlCssJsCheckbox.checked);
        localStorage.setItem('imgChecked', imgCheckbox.checked);
      }
      sitemapCheckbox.addEventListener('change', function () {
        updateLocalStorage();

      });

      htmlCssJsCheckbox.addEventListener('change', function () {
        updateLocalStorage();

      });

      imgCheckbox.addEventListener('change', function () {
        updateLocalStorage();

      });
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        section.classList.remove("select"); // Supprimer la classe "select" de toutes les sections
        section.style.border = "none"; // Remettre la bordure à son état initial
        section.style.borderRadius = "0";
      });





    });
    icon_share.addEventListener("click", function () {
      resetLayout();
      resetLayout_div_text();
      reset_nav_bar();
      resetCards();
      card_create();
      const card_index = document.querySelector(".card_index");
      const card = document.querySelector(".body_plus");
      const body_edit = document.querySelector(".body_edit");
      const body_share = document.querySelector(".body_share");
      if (card || body_edit || body_share) {
      } else {


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
                // Création de l'élément div
                const body_share = document.createElement("div");
                body_share.classList.add("body_share");
                card_index.appendChild(body_share)
                const h1_link_temp = document.createElement("h2");
                h1_link_temp.innerHTML = `<i class='bx bx-link-alt' ></i> Lien de visualisation temporaire`
                body_share.appendChild(h1_link_temp)
                const br_share1 = document.createElement("br")
                body_share.appendChild(br_share1)

                const [siteId, codeSite] = code_site.SiteContent.split('¤');
                console.log(siteId)
                const time = "30min"
                const transformedPart = transformUniqueId(siteId, time);
                const div_input_link_temp = document.createElement("div");
                div_input_link_temp.classList.add("div_input_link_temp")
                const i_input_link_temp2 = document.createElement("i");
                i_input_link_temp2.classList.add("bx", "bx-link-external")
                const input_link_temp = document.createElement("input");
                input_link_temp.type = "text"
                input_link_temp.style.width = "100%"
                input_link_temp.value = transformedPart
                div_input_link_temp.appendChild(i_input_link_temp2)
                div_input_link_temp.appendChild(input_link_temp)
                const i_input_link_temp = document.createElement("i");
                i_input_link_temp.classList.add("bx", "bx-copy")
                div_input_link_temp.appendChild(i_input_link_temp)
                i_input_link_temp.addEventListener("click", () => {
                  // Sélectionner le contenu de l'input
                  input_link_temp.select();
                  input_link_temp.setSelectionRange(0, 99999); // Pour les navigateurs mobiles

                  // Copier le texte sélectionné dans le presse-papiers
                  document.execCommand('copy');

                  // Désélectionner le texte après la copie (pour éviter de garder la sélection)
                  input_link_temp.setSelectionRange(0, 0);

                  // Optionnel : Afficher une confirmation à l'utilisateur
                  toast_valid("Copier avec succès", "success");
                });
                i_input_link_temp2.addEventListener("click", () => {
                  // Sélectionner le contenu de l'input
                  input_link_temp.select();
                  input_link_temp.setSelectionRange(0, 99999); // Pour les navigateurs mobiles

                  // Copier le texte sélectionné dans le presse-papiers
                  window.open(input_link_temp.value)

                  // Désélectionner le texte après la copie (pour éviter de garder la sélection)
                  input_link_temp.setSelectionRange(0, 0);

                  // Optionnel : Afficher une confirmation à l'utilisateur
                });
                body_share.appendChild(div_input_link_temp)
                const br_share2 = document.createElement("br")
                body_share.appendChild(br_share2)
                const details_link_temp = document.createElement("details");
                const summary_link_temp = document.createElement("summary");
                summary_link_temp.textContent = "Temps de visualisation: 30min"
                details_link_temp.appendChild(summary_link_temp)
                const p_link_temp1 = document.createElement("p");
                p_link_temp1.textContent = "30min"
                const p_link_temp2 = document.createElement("p");
                p_link_temp2.textContent = "1h"
                const p_link_temp3 = document.createElement("p");
                p_link_temp3.textContent = "6h"



                details_link_temp.appendChild(p_link_temp1)
                details_link_temp.appendChild(p_link_temp2)
                details_link_temp.appendChild(p_link_temp3)
                body_share.appendChild(details_link_temp)
                // Fonction pour mettre à jour le texte du <summary>
                function updateSummaryText(event) {
                  summary_link_temp.textContent = `Temps de visualisation: ${event.target.textContent}`;
                  const transformedPart = transformUniqueId(siteId, event.target.textContent);
                  input_link_temp.value = transformedPart;
                  const details_share = document.querySelector(".body_share details")
                  details_share.removeAttribute("open")
                }

                // Ajouter des gestionnaires d'événements aux éléments <p>
                p_link_temp1.addEventListener('click', updateSummaryText);
                p_link_temp2.addEventListener('click', updateSummaryText);
                p_link_temp3.addEventListener('click', updateSummaryText);
                const br_share3 = document.createElement("br")
                body_share.appendChild(br_share3)
                const h1_Widget_int = document.createElement("h2");
                h1_Widget_int.innerHTML = `<i class='bx bx-code-alt' ></i> Widget de Partage Intégrable`
                body_share.appendChild(h1_Widget_int)
                const br_share4 = document.createElement("br")
                body_share.appendChild(br_share4)

                const div_input_widget_int = document.createElement("div");
                div_input_widget_int.classList.add("div_input_widget_int")
                const input_widget_int = document.createElement("input");
                input_widget_int.type = "text"
                input_widget_int.style.width = "100%"

                const url = Generate_linkWidgetIntegrate(siteId)

                input_widget_int.value = url
                const i_input_widget_int = document.createElement("i");
                i_input_widget_int.classList.add("bx", "bx-copy")
                div_input_widget_int.appendChild(input_widget_int)
                div_input_widget_int.appendChild(i_input_widget_int)
                i_input_widget_int.addEventListener("click", () => {
                  // Sélectionner le contenu de l'input
                  input_widget_int.select();
                  input_widget_int.setSelectionRange(0, 99999); // Pour les navigateurs mobiles

                  // Copier le texte sélectionné dans le presse-papiers
                  document.execCommand('copy');

                  // Désélectionner le texte après la copie (pour éviter de garder la sélection)
                  input_widget_int.setSelectionRange(0, 0);

                  // Optionnel : Afficher une confirmation à l'utilisateur
                  toast_valid("Copier avec succès", "success");
                });

                body_share.appendChild(div_input_widget_int)
                const br_share6 = document.createElement("br")
                body_share.appendChild(br_share6)
                const div_textarea_widget_int = document.createElement("div");
                div_textarea_widget_int.classList.add("div_textarea_widget_int")
                const textarea_widget_int = document.createElement("pre");
                textarea_widget_int.style.width = "100%"
                const link_section = "the-fab-studio.js"
                textarea_widget_int.textContent = `<script type="module" src="${link_section}">
<the-fab-studio url="${url}"><the-fab-studio>`
                textarea_widget_int.setAttribute("readonly", "true")
                textarea_widget_int.style.height = " 100%"
                const i_textarea_widget_int = document.createElement("i");
                i_textarea_widget_int.classList.add("bx", "bx-copy")
                div_textarea_widget_int.appendChild(textarea_widget_int)
                div_textarea_widget_int.appendChild(i_textarea_widget_int)
                body_share.appendChild(div_textarea_widget_int)
                i_textarea_widget_int.addEventListener("click", () => {
                  // Sélectionner le contenu de l'input
                  const selection = window.getSelection();
                  const range = document.createRange();
                  range.selectNodeContents(textarea_widget_int);
                  selection.removeAllRanges();
                  selection.addRange(range);

                  // Copier le texte sélectionné dans le presse-papiers
                  document.execCommand('copy');

                  // Désélectionner le texte après la copie (pour éviter de garder la sélection)

                  // Optionnel : Afficher une confirmation à l'utilisateur
                  toast_valid("Copier avec succès", "success");
                  selection.removeAllRanges();
                });
                const br_share5 = document.createElement("br")
                body_share.appendChild(br_share5)
const h1_create_host = document.createElement("h2");
                h1_create_host.innerHTML = `<i class='bx bx-server'></i> Création d'un hébergement de votre site`
                body_share.appendChild(h1_create_host)
const div_input_create_host = document.createElement("div");
                div_input_create_host.classList.add("div_input_create_host")
                const i_input_create_host = document.createElement("i");
                i_input_create_host.classList.add("bx", "bx-link-external")
                const input_create_host = document.createElement("input");
                input_create_host.type = "text"
                input_create_host.style.width = "100%"
                input_create_host.value = ""
                div_input_create_host.appendChild(i_input_create_host)
                div_input_create_host.appendChild(input_create_host)
                const i_input_create_host2 = document.createElement("i");
                i_input_create_host2.classList.add("bx", "bx-copy")
                div_input_create_host.appendChild(i_input_create_host2)
                i_input_create_host2.addEventListener("click", () => {
                  // Sélectionner le contenu de l'input
                  input_create_host.select();
                  input_create_host.setSelectionRange(0, 99999); // Pour les navigateurs mobiles

                  // Copier le texte sélectionné dans le presse-papiers
                  document.execCommand('copy');

                  // Désélectionner le texte après la copie (pour éviter de garder la sélection)
                  input_create_host.setSelectionRange(0, 0);

                  // Optionnel : Afficher une confirmation à l'utilisateur
                  toast_valid("Copier avec succès", "success");
                });
                i_input_create_host.addEventListener("click", () => {
                  // Sélectionner le contenu de l'input
                  input_create_host.select();
                  input_create_host.setSelectionRange(0, 99999); // Pour les navigateurs mobiles

                  // Copier le texte sélectionné dans le presse-papiers
                  window.open(input_create_host.value)

                  // Désélectionner le texte après la copie (pour éviter de garder la sélection)
                  input_create_host.setSelectionRange(0, 0);

                  // Optionnel : Afficher une confirmation à l'utilisateur
                });
                body_share.appendChild(div_input_create_host)
const btn_create_host = document.createElement("button");
              btn_create_host.classList.add("btn_create_host")
                btn_create_host.textContent = "Créer un hébergement"
                body_share.appendChild(btn_create_host)
                btn_create_host.addEventListener("click",function(){
                  const savedSiteName = localStorage.getItem("siteName");
                  const formattedSiteName = savedSiteName.replace(/\s+/g, '-');
                 const request = window.indexedDB.open("MaBaseDeDonnees", 1);

          request.addEventListener("success", function (event) {
            const db = event.target.result;
            const transaction_first = db.transaction(["Connexion"], "readonly");
            const objectStore_first = transaction_first.objectStore("Connxeion");

            const request2 = objectStore_first.index("Connected");

            request2.onsuccess = function (event) {
              const user_name = event.target.result;
              if (user_name) {

         input_create_host.value = "https://the-fab-studio.onrender.com/#/" + user_name + "/" + formattedSiteName  + "/index.html"  
                saved_create_notif("host")
              }
            }
          });
                 
                });
                function Generate_linkWidgetIntegrate(uniqueId) {
                  const randomPart = uniqueId.split('_')[1].slice(0, 9); // Obtient 'tbi3usvo'
                  const alphanumericPart = randomPart.replace(/[^0-9a-zA-Z]/g, ''); // Extraire uniquement les caractères alphanumériques
                  let transformedPart = '';

                  for (let i = 0; i < alphanumericPart.length; i++) {
                    const char = alphanumericPart.charAt(i);
                    if (/[A-Z]/.test(char)) { // Si le caractère est une majuscule
                      const asciiCode = char.charCodeAt(0); // Récupérer le code ASCII du caractère
                      console.log(asciiCode)
                      if (asciiCode === 65) {
                        transformedPart += String.fromCharCode(asciiCode); // Convertir le code ASCII en caractère
                      } else {
                        const originalCharCode = 90 - (asciiCode - 66); // Calculer le code ASCII original
                        transformedPart += String.fromCharCode(originalCharCode); // Convertir le code ASCII en caractère
                      }

                    } else if (/[a-z]/.test(char)) { // Si le caractère est une minuscule
                      const asciiCode = char.charCodeAt(0); // Récupérer le code ASCII du caractère
                      console.log(asciiCode)
                      if (asciiCode === 97) {
                        transformedPart += String.fromCharCode(asciiCode); // Convertir le code ASCII en caractère
                      } else {

                        const originalCharCode = 122 - (asciiCode - 98); // Calculer le code ASCII original
                        transformedPart += String.fromCharCode(originalCharCode); // Convertir le code ASCII en caractère
                      }
                    } else if (/[0-9]/.test(char)) { // Si le caractère est un chiffre
                      const number = parseInt(char, 10); // Convertir en nombre
                      const multipliedNumber = number - 1; // - 1
                      transformedPart += multipliedNumber;
                    }
                  }

                  const transformedPart2 = `https://the-fab-studio.onrender.com/index.html?widget_integrate=${transformedPart}`;
                  return transformedPart2;

                }
                function transformUniqueId(uniqueId, time) {
                  const randomPart = uniqueId.split('_')[1].slice(0, 9); // Obtient 'tbi3usvo'
                  const alphanumericPart = randomPart.replace(/[^0-9a-zA-Z]/g, ''); // Extraire uniquement les caractères alphanumériques
                  let transformedPart = '';

                  for (let i = 0; i < alphanumericPart.length; i++) {
                    const char = alphanumericPart.charAt(i);
                    if (/[A-Z]/.test(char)) { // Si le caractère est une majuscule
                      const asciiCode = char.charCodeAt(0); // Récupérer le code ASCII du caractère
                      const invertedCharCode = 90 - (asciiCode - 65); // Calculer le code ASCII inversé (A -> Z, B -> Y, ...)
                      transformedPart += String.fromCharCode(invertedCharCode); // Convertir le code ASCII en caractère
                    } else if (/[a-z]/.test(char)) { // Si le caractère est une minuscule
                      const asciiCode = char.charCodeAt(0); // Récupérer le code ASCII du caractère
                      const invertedCharCode = 122 - (asciiCode - 97); // Calculer le code ASCII inversé (a -> z, b -> y, ...)
                      transformedPart += String.fromCharCode(invertedCharCode); // Convertir le code ASCII en caractère
                    } else if (/[0-9]/.test(char)) { // Si le caractère est un chiffre
                      const number = parseInt(char, 10); // Convertir en nombre
                      const multipliedNumber = number + 1; // +1
                      transformedPart += multipliedNumber; // 
                    }
                  }
                  const numberFromTime = parseInt(time.match(/\d+/)[0]); // Récupère le nombre de `time`
                  if (numberFromTime === 30) {
                    const currentTime = Date.now(); // Temps actuel en millisecondes
                    const expirationTime = currentTime + numberFromTime * 60 * 1000; // Ajoute la durée en millisecondes
                    const transformedPart2 = `https://the-fab-studio.onrender.com/index.html?preview=${transformedPart}&expires=${expirationTime}`;
                    return transformedPart2;
                  } else if (numberFromTime === 1 || numberFromTime === 6) {
                    const currentTime = Date.now(); // Temps actuel en millisecondes
                    const expirationTime = currentTime + numberFromTime * 60 * 60 * 1000; // Ajoute la durée en millisecondes
                    const transformedPart2 = `https://the-fab-studio.onrender.com/index.html?preview=${transformedPart}&expires=${expirationTime}`;
                    return transformedPart2;
                  }


                }

                // Fonction pour additionner les chiffres d'un nombre

              }
            }
          });
        } else {
          alert("Il faut d'abord enregsitrer votre site")
          resetCards()
        }



        // Exemple d'utilisation avec le résultat transformé






      }


    })
  }, 1000);


});



