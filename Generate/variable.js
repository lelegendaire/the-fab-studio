let Name_label = [
  "Slider",
  "Citation",
  "Vidéo",
  "Formulaire de contact",
  "FAQ",
  "Texte + Image",
  "Normal",
  "Nos clients",
  "Images",
  "Réseaux sociaux",
  "Partenaires",
  "Tarification",
  "Map",
  "Équipe",
  "Produits",
  "3D",
  "Section Soon",
  "Gallerie de photo",
  "Carte",
  "Réservation"
];
let citation = [
  "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
  "La simplicité est la sophistication suprême.",
  "Le succès, c'est tomber sept fois et se relever huit.",
  "L'avenir appartient à ceux qui croient à la beauté de leurs rêves.",
  "La vie est une fleur dont l'amour est le miel.",
  "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
  "Rien n'est impossible, le mot lui-même dit 'je suis possible' !",
  "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.",
  "La vie est une aventure audacieuse ou rien du tout.",
  "La créativité, c'est l'intelligence qui s'amuse.",
  "La beauté commence au moment où vous décidez d'être vous-même.",
  "La vie n'est pas d'attendre que les orages passent, c'est d'apprendre comment danser sous la pluie.",
  "Rien ne se perd, rien ne se crée, tout se transforme.",
  "La vie est faite de petits bonheurs.",
  "La connaissance parle, mais la sagesse écoute.",
  "La folie, c'est de se comporter de la même manière et de s'attendre à un résultat différent.",
  "La vie, ce n'est pas d'attendre que les orages passent, c'est d'apprendre à danser sous la pluie.",
  "La gentillesse est la clé du cœur humain.",
  "La plus grande découverte de ma génération, c'est que l'être humain peut changer sa vie en changeant d'attitude d'esprit.",
  "La seule façon d'avoir un ami est d'en être un.",
  "La confiance en soi est le premier secret du succès.",
  "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
  "La liberté est le droit de faire ce que les lois permettent.",
  "La tolérance est la meilleure religion.",
  "La vie est un défi à relever, un bonheur à mériter, une aventure à tenter.",
  "La seule véritable erreur est celle dont on ne tire aucun enseignement.",
  "La seule chose que nous ayons à craindre, c'est la peur elle-même.",
  "La véritable éducation consiste à tirer le meilleur de soi-même.",
  "La vie est un jeu dont l'amour est le prix.",
  "La joie est en tout, il faut savoir l'extraire.",
  "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.",
  "La vie est une fleur dont l'amour est le miel.",
  "La simplicité est la sophistication suprême.",
  "La beauté commence au moment où vous décidez d'être vous-même.",
  "La plus grande récompense du travail n'est pas ce qu'on y gagne, mais ce qu'on devient en le faisant.",
];
let personn = [
  "Mahatma Gandhi",
  "Léonard de Vinci",
  "Proverbe japonais",
  "Eleanor Roosevelt",
  "Victor Hugo",
  "Steve Jobs",
  "Audrey Hepburn",
  "Nelson Mandela",
  "Helen Keller",
  "Albert Einstein",
  "Coco Chanel",
  "Sénèque",
  "Antoine Lavoisier",
  "Anonyme",
  "Jimi Hendrix",
  "Albert Einstein",
  "Sénèque",
  "Bouddha",
  "William James",
  "Ralph Waldo Emerson",
  "Ralph Waldo Emerson",
  "Albert Einstein",
  "Montesquieu",
  "Victor Hugo",
  "Mère Teresa",
  "Confucius",
  "Franklin D. Roosevelt",
  "Gandhi",
  "Sainte Thérèse",
  "Confucius",
  "Confucius",
  "Victor Hugo",
  "Léonard de Vinci",
  "Coco Chanel",
  "John Ruskin",
];
const categorizedQuotes = [
  //Agence de Design Graphique
  [
    { quote: "La simplicité est la sophistication suprême.", author: "Léonard de Vinci" },
    { quote: "La créativité, c'est l'intelligence qui s'amuse.", author: "Albert Einstein" },
    { quote: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", author: "Mahatma Gandhi" },
    { quote: "La beauté commence au moment où vous décidez d'être vous-même.", author: "Coco Chanel" },
    { quote: "La vie est une fleur dont l'amour est le miel.", author: "Victor Hugo" },
    { quote: "La plus grande récompense du travail n'est pas ce qu'on y gagne, mais ce qu'on devient en le faisant.", author: "John Ruskin" },
  ],
  //Cabinet d'Avocats
  [
    { quote: "La seule véritable erreur est celle dont on ne tire aucun enseignement.", author: "Confucius" },
    { quote: "La seule façon d'avoir un ami est d'en être un.", author: "Ralph Waldo Emerson" },
    { quote: "La liberté est le droit de faire ce que les lois permettent.", author: "Montesquieu" },
    { quote: "La connaissance parle, mais la sagesse écoute.", author: "Jimi Hendrix" },
    { quote: "La tolérance est la meilleure religion.", author: "Victor Hugo" },
    { quote: "La gentillesse est la clé du cœur humain.", author: "Bouddha" },
  ],
  //Salon de Coiffure et Beauté
  [
    { quote: "La beauté commence au moment où vous décidez d'être vous-même.", author: "Coco Chanel" },
    { quote: "La simplicité est la sophistication suprême.", author: "Léonard de Vinci" },
    { quote: "La vie est faite de petits bonheurs.", author: "Anonyme" },
    { quote: "Rien n'est impossible, le mot lui-même dit 'je suis possible' !", author: "Audrey Hepburn" },
    { quote: "La vie n'est pas d'attendre que les orages passent, c'est d'apprendre comment danser sous la pluie.", author: "Sénèque" },
    { quote: "La seule façon de faire du bon travail est d'aimer ce que vous faites.", author: "Steve Jobs" },
  ],
  //Agence de Voyage
  [
    { quote: "La vie est une aventure audacieuse ou rien du tout.", author: "Helen Keller" },
    { quote: "L'avenir appartient à ceux qui croient à la beauté de leurs rêves.", author: "Eleanor Roosevelt" },
    { quote: "La vie est un jeu dont l'amour est le prix.", author: "Gandhi" },
    { quote: "La joie est en tout, il faut savoir l'extraire.", author: "Sainte Thérèse" },
    { quote: "La vie est un défi à relever, un bonheur à mériter, une aventure à tenter.", author: "Mère Teresa" },
    { quote: "La vie est une fleur dont l'amour est le miel.", author: "Victor Hugo" },
  ],
  //Restaurant
  [
    { quote: "La vie est une fleur dont l'amour est le miel.", author: "Victor Hugo" },
    { quote: "La joie est en tout, il faut savoir l'extraire.", author: "Sainte Thérèse" },
    { quote: "La plus grande récompense du travail n'est pas ce qu'on y gagne, mais ce qu'on devient en le faisant.", author: "John Ruskin" },
    { quote: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", author: "Albert Einstein" },
    { quote: "Rien ne se perd, rien ne se crée, tout se transforme.", author: "Antoine Lavoisier" },
    { quote: "La vie est faite de petits bonheurs.", author: "Anonyme" },
  ],
  //Entreprise de Construction
  [
    { quote: "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.", author: "Nelson Mandela" },
    { quote: "La vie est faite de petits bonheurs.", author: "Anonyme" },
    { quote: "Rien n'est impossible, le mot lui-même dit 'je suis possible' !", author: "Audrey Hepburn" },
    { quote: "La seule véritable erreur est celle dont on ne tire aucun enseignement.", author: "Confucius" },
    { quote: "La vie est un défi à relever, un bonheur à mériter, une aventure à tenter.", author: "Mère Teresa" },
    { quote: "Le succès, c'est tomber sept fois et se relever huit.", author: "Proverbe japonais" },
  ],
  //Clinique Médicale
  [
    { quote: "La gentillesse est la clé du cœur humain.", author: "Bouddha" },
    { quote: "La vie, ce n'est pas d'attendre que les orages passent, c'est d'apprendre à danser sous la pluie.", author: "Sénèque" },
    { quote: "La confiance en soi est le premier secret du succès.", author: "Ralph Waldo Emerson" },
    { quote: "La véritable éducation consiste à tirer le meilleur de soi-même.", author: "Gandhi" },
    { quote: "La plus grande découverte de ma génération, c'est que l'être humain peut changer sa vie en changeant d'attitude d'esprit.", author: "William James" },
    { quote: "Rien n'est impossible, le mot lui-même dit 'je suis possible' !", author: "Audrey Hepburn" },
  ],
  //Magasin de Mode 
  [
    { quote: "La beauté commence au moment où vous décidez d'être vous-même.", author: "Coco Chanel" },
    { quote: "La simplicité est la sophistication suprême.", author: "Léonard de Vinci" },
    { quote: "La vie est une aventure audacieuse ou rien du tout.", author: "Helen Keller" },
    { quote: "La créativité, c'est l'intelligence qui s'amuse.", author: "Albert Einstein" },
    { quote: "La mode se démode, le style jamais.", author: "Coco Chanel" }, // ajoutée pour la pertinence
    { quote: "La vie est faite de petits bonheurs.", author: "Anonyme" },
  ],
  //Agence Immobilière 
  [
    { quote: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", author: "Albert Einstein" },
    { quote: "La confiance en soi est le premier secret du succès.", author: "Ralph Waldo Emerson" },
    { quote: "La liberté est le droit de faire ce que les lois permettent.", author: "Montesquieu" },
    { quote: "La seule chose que nous ayons à craindre, c'est la peur elle-même.", author: "Franklin D. Roosevelt" },
    { quote: "La vie est un défi à relever, un bonheur à mériter, une aventure à tenter.", author: "Mère Teresa" },
    { quote: "Rien ne se perd, rien ne se crée, tout se transforme.", author: "Antoine Lavoisier" },
  ],
];
const var_text_p_title_block_list = [
  // Agence de Design Graphique
  [
    {
      nom: "Sophie Design",
      description: "Sophie Design est une entreprise dynamique spécialisée dans la création de concepts graphiques innovants. Leur équipe talentueuse offre des solutions personnalisées qui captivent et inspirent."
    },
    {
      nom: "Creative Studio Martin",
      description: "Creative Studio Martin est réputé pour ses designs uniques et sa capacité à transformer des idées en visuels percutants. Leur approche créative et leur expertise technique garantissent des résultats exceptionnels."
    },
    {
      nom: "Artistic Solutions",
      description: "Artistic Solutions est une agence renommée pour son approche artistique et ses solutions de design sur mesure. Leur équipe créative transforme chaque projet en une œuvre d'art visuelle."
    },
    {
      nom: "Graphique Excellence",
      description: "Graphique Excellence se distingue par son engagement envers l'innovation et la qualité. Leur portfolio varié démontre leur capacité à créer des designs impactants qui dépassent les attentes."
    },
    {
      nom: "Studio Créatif Lefevre",
      description: "Studio Créatif Lefevre est spécialisé dans la conception de marques et d'identités visuelles distinctives. Leur approche collaborative garantit des résultats qui reflètent parfaitement la vision de leurs clients."
    },
    {
      nom: "Design Innovations Rousseau",
      description: "Design Innovations Rousseau repousse les limites du design avec des solutions innovantes et avant-gardistes. Leur approche stratégique et leur expertise technique assurent des créations qui se démarquent."
    },
    {
      nom: "Graphique Express",
      description: "Graphique Express offre des services de design graphique rapide et efficace pour répondre aux besoins urgents de leurs clients. Leur souplesse et leur qualité font d'eux un choix de confiance."
    },
    {
      nom: "Artistry Design Bernard",
      description: "Artistry Design Bernard combine l'art et la science du design pour créer des expériences visuelles mémorables. Leur attention aux détails et leur passion pour l'esthétique transparaissent dans chaque projet."
    },
    {
      nom: "Studio Graphique Lambert",
      description: "Studio Graphique Lambert se spécialise dans la création de designs élégants et fonctionnels. Leur approche axée sur le client garantit une collaboration étroite et des résultats qui répondent aux objectifs commerciaux."
    },
    {
      nom: "Visual Impact Agency",
      description: "Visual Impact Agency est reconnue pour ses créations visuelles percutantes qui génèrent un impact durable. Leur expertise en communication visuelle aide les entreprises à se démarquer dans un marché compétitif."
    },
  ],

  // Cabinet d'Avocats
  [
    {
      nom: "Cabinet Legalis",
      description: "Cabinet Legalis est réputé pour ses conseils juridiques précis et personnalisés. Leur équipe d'avocats expérimentés offre des solutions juridiques adaptées aux besoins de chaque client."
    },
    {
      nom: "Juris Conseil",
      description: "Juris Conseil offre des services juridiques complets avec une expertise approfondie dans divers domaines du droit. Leur approche professionnelle assure une représentation efficace et stratégique."
    },
    {
      nom: "Avocats Associés Martin & Co",
      description: "Avocats Associés Martin & Co se distingue par leur engagement envers l'excellence et leur capacité à résoudre les défis juridiques complexes. Leur réputation repose sur des résultats probants pour leurs clients."
    },
    {
      nom: "Legal Experts Group",
      description: "Legal Experts Group est spécialisé dans la gestion de litiges et la consultation juridique pour les entreprises. Leur approche proactive et leur compréhension approfondie de la loi garantissent des solutions efficaces."
    },
    {
      nom: "Law Firm Consult",
      description: "Law Firm Consult offre des conseils juridiques stratégiques avec une attention particulière à la conformité réglementaire. Leur expertise juridique aide les clients à naviguer avec succès dans un environnement juridique complexe."
    },
  ],

  // Salon de Coiffure et Beauté
  [
    {
      nom: "Beauty Studio Sophie",
      description: "Beauty Studio Sophie propose des services de coiffure et de beauté de haute qualité. Leur équipe experte offre des traitements personnalisés pour chaque client, garantissant satisfaction et bien-être."
    },
    {
      nom: "Hair & Beauty Lounge",
      description: "Hair & Beauty Lounge offre une expérience luxueuse avec des services de coiffure et de beauté haut de gamme. Leur approche attentive et leur expertise esthétique font d'eux un choix préféré pour le bien-être personnel."
    },
    {
      nom: "Beauté et Style Martin",
      description: "Beauté et Style Martin se spécialise dans la création de looks personnalisés et de tendances de beauté. Leur équipe passionnée utilise des techniques innovantes pour sublimer chaque client."
    },
    {
      nom: "Chic Beauty Salon",
      description: "Chic Beauty Salon offre des services de beauté raffinés dans une atmosphère relaxante. Leur engagement envers l'excellence et le confort des clients est au cœur de leur philosophie."
    },
    {
      nom: "Glamour Hair & Beauty",
      description: "Glamour Hair & Beauty propose des services de coiffure et de beauté élégants et sophistiqués. Leur équipe dédiée assure des résultats impeccables et une expérience client exceptionnelle."
    },
  ],

  // Agence de Voyage
  [
    {
      nom: "Voyage Express",
      description: "Voyage Express offre des services de voyage personnalisés avec une expertise dans la planification de voyages sur mesure. Leur équipe passionnée aide les clients à découvrir des destinations uniques à travers le monde."
    },
    {
      nom: "Adventure Seekers Travel",
      description: "Adventure Seekers Travel organise des voyages d'aventure excitants pour les passionnés de découvertes. Leur connaissance approfondie des destinations garantit des expériences mémorables et enrichissantes."
    },
    {
      nom: "Dream Destinations Agency",
      description: "Dream Destinations Agency propose des voyages de luxe et des escapades exclusives. Leur service personnalisé et leur attention aux détails garantissent des vacances parfaitement organisées pour chaque client."
    },
    {
      nom: "Explore World Travel",
      description: "Explore World Travel offre des voyages culturels et des circuits uniques pour les explorateurs curieux. Leur réseau mondial leur permet de créer des itinéraires enrichissants et des expériences authentiques."
    },
    {
      nom: "Global Adventure Tours",
      description: "Global Adventure Tours organise des voyages d'aventure personnalisés pour les passionnés de plein air. Leur équipe expérimentée guide les clients à travers des destinations spectaculaires avec sécurité et confort."
    },
  ],

  // Restaurant
  [
    {
      nom: "Gastronomy Palace",
      description: "Gastronomy Palace offre une expérience culinaire raffinée avec des plats innovants et des saveurs exquises. Leur atmosphère élégante et leur service attentif créent une expérience gastronomique inoubliable."
    },
    {
      nom: "Chez Marcel",
      description: "Chez Marcel est célèbre pour sa cuisine traditionnelle et son ambiance conviviale. Leur menu varié et leur hospitalité chaleureuse en font une destination de choix pour les amateurs de bonne cuisine."
    },
    {
      nom: "Fine Dining Bistro",
      description: "Fine Dining Bistro propose une cuisine française moderne avec une touche créative. Leur chef talentueux et leur ambiance sophistiquée offrent une expérience gastronomique mémorable."
    },
    {
      nom: "Seafood Haven",
      description: "Seafood Haven est spécialisé dans les fruits de mer frais et les plats côtiers. Leur engagement envers la qualité et la fraîcheur fait d'eux une destination prisée pour les amateurs de fruits de mer."
    },
    {
      nom: "Taste of Italy",
      description: "Taste of Italy offre une cuisine italienne authentique avec des plats traditionnels et des saveurs méditerranéennes. Leur passion pour la cuisine italienne transparaît dans chaque assiette servie."
    },
  ],

  // Entreprise de Construction
  [
    {
      nom: "Build Masters",
      description: "Build Masters est reconnu pour son expertise en construction résidentielle et commerciale. Leur approche axée sur la qualité et l'efficacité assure des projets terminés à temps et selon les spécifications."
    },
    {
      nom: "Construction Innovations",
      description: "Construction Innovations se distingue par son engagement envers l'innovation et la durabilité dans le domaine de la construction. Leur équipe expérimentée utilise des techniques modernes pour des résultats exceptionnels."
    },
    {
      nom: "MegaBuilders",
      description: "MegaBuilders est spécialisé dans les projets de construction de grande envergure. Leur capacité à gérer des chantiers complexes et leur rigueur en matière de sécurité en font un partenaire de confiance."
    },
    {
      nom: "Urban Development Group",
      description: "Urban Development Group est réputé pour ses développements urbains novateurs et durables. Leur approche intégrée comprend la conception, la construction et la gestion de projets immobiliers de qualité."
    },
    {
      nom: "Quality Builders Inc.",
      description: "Quality Builders Inc. s'engage à fournir des services de construction de haute qualité avec une attention particulière aux détails. Leur réputation repose sur la fiabilité et la satisfaction des clients."
    },
    {
      nom: "Green Build Solutions",
      description: "Green Build Solutions se spécialise dans la construction écologique et durable. Leur expertise en matériaux écologiques et en design éco-responsable contribue à des projets respectueux de l'environnement."
    },
    {
      nom: "Coastal Construction Experts",
      description: "Coastal Construction Experts offre des solutions de construction adaptées aux environnements côtiers. Leur expérience dans la gestion des défis environnementaux garantit des résultats robustes et durables."
    },
    {
      nom: "Infinity Builders",
      description: "Infinity Builders excelle dans la construction de bâtiments contemporains et innovants. Leur approche créative et leur attention aux détails assurent des réalisations architecturales exceptionnelles."
    },
    {
      nom: "Elite Construction Services",
      description: "Elite Construction Services propose des services de construction haut de gamme pour des résidences et des bâtiments commerciaux. Leur engagement envers l'excellence se reflète dans chaque projet réalisé."
    },
    {
      nom: "Skyline Contractors",
      description: "Skyline Contractors est spécialisé dans la construction de gratte-ciels et de structures complexes. Leur expertise technique et leur gestion efficace de projet assurent des résultats de haute qualité à chaque étape."
    },
  ],
  [
    {
      nom: "HealthCare Clinic",
      description: "HealthCare Clinic offre des services médicaux complets avec un accent sur le bien-être général et la prévention. Leur équipe dévouée assure des soins de santé personnalisés et de haute qualité."
    },
    {
      nom: "Wellness Center",
      description: "Wellness Center propose des programmes de bien-être holistiques pour améliorer la santé physique et mentale. Leur approche intégrative inclut la médecine traditionnelle et les thérapies alternatives."
    },
    {
      nom: "Family Medical Practice",
      description: "Family Medical Practice se spécialise dans les soins de santé primaires pour toute la famille. Leur engagement envers la médecine préventive et les traitements personnalisés assure la santé à long terme."
    },
    {
      nom: "Specialist Medical Group",
      description: "Specialist Medical Group réunit des spécialistes médicaux pour offrir des soins spécialisés de haute qualité. Leur expertise et leur équipement de pointe assurent des diagnostics précis et des traitements efficaces."
    },
    {
      nom: "Pediatric Care Clinic",
      description: "Pediatric Care Clinic se consacre aux soins de santé pédiatriques avec une approche douce et attentive. Leur équipe compétente garantit un environnement rassurant pour les enfants et les parents."
    },
    {
      nom: "Dental Care Specialists",
      description: "Dental Care Specialists propose des services dentaires complets pour adultes et enfants. Leur approche moderne et leur attention aux détails assurent des soins dentaires de haute qualité et sans stress."
    },
    {
      nom: "Women's Health Center",
      description: "Women's Health Center offre des services de santé spécialisés pour les femmes. Leur équipe experte fournit des soins gynécologiques et obstétriques personnalisés dans un environnement accueillant."
    },
    {
      nom: "Rehabilitation Clinic",
      description: "Rehabilitation Clinic offre des services de réadaptation professionnelle pour les patients récupérant d'une blessure ou d'une intervention chirurgicale. Leur programme de réhabilitation personnalisé favorise une récupération rapide et complète."
    },
    {
      nom: "Mental Health Services",
      description: "Mental Health Services propose un soutien psychologique et psychiatrique pour traiter une gamme de troubles mentaux. Leur approche thérapeutique et leur compassion favorisent le bien-être mental des patients."
    },
    {
      nom: "Senior Care Specialists",
      description: "Senior Care Specialists se spécialise dans les soins de santé pour les personnes âgées. Leur programme de soins personnalisés et leur environnement bienveillant assurent une qualité de vie optimale pour les aînés."
    },
  ],

  // Magasin de Mode
  [
    {
      nom: "Fashion Forward Boutique",
      description: "Fashion Forward Boutique propose une collection de mode contemporaine pour hommes et femmes. Leur sélection de créateurs et leur service clientèle exceptionnel en font une destination de choix pour les amateurs de mode."
    },
    {
      nom: "Chic Trends Outlet",
      description: "Chic Trends Outlet offre des vêtements et accessoires à la mode à des prix abordables. Leur engagement envers la qualité et les dernières tendances assure une expérience shopping agréable et stylée."
    },
    {
      nom: "Urban Streetwear Store",
      description: "Urban Streetwear Store se spécialise dans les vêtements et accessoires de style urbain pour les jeunes adultes. Leur esthétique moderne et leur sélection de marques populaires attirent une clientèle branchée."
    },
    {
      nom: "Designer Boutique Gallery",
      description: "Designer Boutique Gallery présente une collection exclusive de vêtements de créateurs et d'accessoires de luxe. Leur boutique élégante et leur service personnalisé créent une expérience shopping sophistiquée."
    },
    {
      nom: "Casual Chic Emporium",
      description: "Casual Chic Emporium propose des vêtements décontractés élégants pour hommes et femmes. Leur combinaison de confort et de style fait d'eux une destination prisée pour le quotidien et les occasions spéciales."
    },
    {
      nom: "Vintage Couture Shop",
      description: "Vintage Couture Shop offre une sélection soigneusement choisie de vêtements vintage et de pièces de collection. Leur passion pour l'histoire de la mode et la qualité artisanale se reflète dans chaque article unique."
    },
    {
      nom: "High Fashion Emporium",
      description: "High Fashion Emporium propose des pièces de créateurs haut de gamme pour une clientèle exigeante. Leur engagement envers l'élégance intemporelle et la qualité supérieure en fait un lieu de shopping de luxe."
    },
    {
      nom: "Trendy Youth Boutique",
      description: "Trendy Youth Boutique offre une gamme de vêtements et accessoires tendance pour adolescents et jeunes adultes. Leur style moderne et leur atmosphère dynamique attirent une clientèle jeune et branchée."
    },
    {
      nom: "Bohemian Chic Store",
      description: "Bohemian Chic Store propose une esthétique bohème avec une collection de vêtements et accessoires uniques. Leur engagement envers l'artisanat et les matériaux durables séduit les adeptes du style boho."
    },
    {
      nom: "Luxury Fashion Gallery",
      description: "Luxury Fashion Gallery offre une expérience de shopping de luxe avec une sélection exclusive de marques prestigieuses. Leur service clientèle exceptionnel et leur ambiance raffinée garantissent une satisfaction totale."
    },
  ],

  // Agence Immobilière
  [
    {
      nom: "Dream Home Realty",
      description: "Dream Home Realty aide les clients à trouver leur maison de rêve avec un service personnalisé et une connaissance approfondie du marché immobilier local. Leur engagement envers l'excellence et l'intégrité assure une transaction immobilière transparente."
    },
    {
      nom: "Urban Living Properties",
      description: "Urban Living Properties offre une gamme de biens immobiliers urbains, de lofts modernes à des appartements de luxe. Leur expertise en immobilier urbain et leur réseau étendu offrent des opportunités uniques aux acheteurs et investisseurs."
    },
    {
      nom: "Coastal Homes Agency",
      description: "Coastal Homes Agency se spécialise dans les propriétés côtières et les maisons de vacances exclusives. Leur connaissance des marchés côtiers et leur service client dévoué font d'eux un leader dans l'immobilier côtier."
    },
    {
      nom: "Commercial Realty Experts",
      description: "Commercial Realty Experts propose des services immobiliers commerciaux pour les entreprises et les investisseurs. Leur expertise en transactions immobilières commerciales assure des résultats rentables et stratégiques."
    },
    {
      nom: "Luxury Estates Group",
      description: "Luxury Estates Group offre une sélection de propriétés de luxe avec des équipements exclusifs et des designs architecturaux uniques. Leur service personnalisé et leur discrétion en font un choix de confiance pour les acheteurs de biens haut de gamme."
    },
    {
      nom: "Investment Property Advisors",
      description: "Investment Property Advisors conseille les investisseurs sur les opportunités immobilières et les stratégies d'investissement. Leur analyse de marché approfondie et leur expertise en gestion d'actifs assurent des rendements attractifs."
    },
    {
      nom: "Rural Retreat Realty",
      description: "Rural Retreat Realty se spécialise dans les propriétés rurales et les domaines exclusifs. Leur connaissance des marchés ruraux et leur service clientèle personnalisé répondent aux besoins uniques des acheteurs et vendeurs ruraux."
    },
    {
      nom: "Cityscape Homes",
      description: "Cityscape Homes propose des maisons et appartements dans les quartiers les plus prisés de la ville. Leur expertise locale et leur engagement envers la satisfaction client garantissent une recherche de propriété efficace et sans stress."
    },
    {
      nom: "Eco-Friendly Realty",
      description: "Eco-Friendly Realty se concentre sur les propriétés écologiques et durables. Leur engagement envers la durabilité environnementale et leur sélection de biens respectueux de l'environnement attirent les acheteurs soucieux de l'écologie."
    },
  ]
];

let var_img_block_list = [
  "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80",
  "https://images.unsplash.com/photo-1695290689014-8b1886d0e1a7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1675392771657-2cfb43092b72?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1697368684102-58c5907d12d4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1697662639070-ace058e43e30?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8cVBZc0R6dkpPWWN8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1697659625407-d559047f1fac?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1697652428485-37b5ca59535f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1697637592814-8e44a4ec089a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1697137031949-5795e4dc476e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1697519957932-3c6133314458?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Qm4tRGpyY0Jyd298fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1691006962698-99b19d83ad4d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfEJuLURqcmNCcndvfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1697716080597-be01c4946985?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D",
];
let Title_txtandimg = [
  "Les psychologues sont des professionnels de la santé mentale qui évaluent et traitent les problèmes émotionnels et psychologiques des individus.",
  "Les policiers sont des agents chargés de faire respecter la loi et l'ordre, de maintenir la paix et de protéger les citoyens.",
  "Les entrepreneurs sont des personnes qui lancent et gèrent leurs propres entreprises, prenant des risques pour développer des idées innovantes.",
  "Les infirmières sont des professionnels de la santé qui dispensent des soins directs aux patients dans divers contextes médicaux.",
  "Les consultants en gestion sont des experts qui conseillent les entreprises sur des questions stratégiques et opérationnelles pour améliorer leur performance.",
  "Les électriciens sont des professionnels qualifiés qui installent, entretiennent et réparent les systèmes électriques dans les bâtiments et les structures.",
  "Les banquiers sont des professionnels des services financiers qui gèrent les opérations bancaires, fournissent des conseils financiers et traitent les transactions monétaires.",
  "Les mécaniciens automobiles sont des techniciens qui réparent et entretiennent les voitures et les véhicules motorisés.",
  "Les pharmaciens sont des professionnels de la santé qui délivrent des médicaments sur ordonnance, offrent des conseils sur les médicaments et surveillent les interactions médicamenteuses.",
  "Les chercheurs scientifiques mènent des expériences, recueillent des données et effectuent des analyses pour faire progresser la compréhension dans des domaines tels que la biologie, la chimie, la physique, etc.",
];
let Text = [
  "Les médecins sont des professionnels de la santé qui diagnostiquent et traitent les maladies et les blessures.",
  "Les enseignants sont des éducateurs qui fournissent des connaissances et des compétences à leurs élèves dans divers sujets académique",
  "Les avocats sont des professionnels du droit qui conseillent leurs clients sur des questions juridiques et les représentent devant les tribunaux.",
  "Les ingénieurs sont des professionnels qui conçoivent, construisent et entretiennent des structures, des machines et des systèmes complexes.",
  "Les architectes sont des concepteurs qui conçoivent des bâtiments et des espaces en tenant compte à la fois des considérations esthétiques et fonctionnelles.",
  "Les journalistes sont des professionnels des médias qui enquêtent sur les événements, rédigent des articles et rapportent des informations au public.",
  "Les artistes sont des créateurs qui s'expriment à travers différentes formes d'art, comme la peinture, la sculpture, la musique ou la danse.",
  "Les chefs cuisiniers sont des professionnels de la cuisine qui planifient et préparent des plats de haute qualité dans les restaurants et les hôtels.",
  "Les développeurs de logiciels sont des professionnels de l'informatique qui conçoivent, développent et testent des programmes informatiques et des applications.",
  "Les agriculteurs sont des professionnels qui cultivent des terres agricoles, élèvent du bétail et produisent des aliments pour la consommation humaine et animale.",
];
let Img = [
  "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80",
  "https://images.unsplash.com/photo-1695290689014-8b1886d0e1a7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1675392771657-2cfb43092b72?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1697368684102-58c5907d12d4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1697662639070-ace058e43e30?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8cVBZc0R6dkpPWWN8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1697659625407-d559047f1fac?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1697652428485-37b5ca59535f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1697637592814-8e44a4ec089a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1697137031949-5795e4dc476e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1697519957932-3c6133314458?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Qm4tRGpyY0Jyd298fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1691006962698-99b19d83ad4d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfEJuLURqcmNCcndvfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1697716080597-be01c4946985?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D",
];

let team = [
  //Agence de Deisgn Graphique
  [
    {
      nom: "Emma Girard",
      description: "Emma est une jeune femme dynamique et déterminée. Elle est passionnée par l'art et la créativité, ce qui l'a amenée à poursuivre des études en design graphique. Dotée d'une personnalité chaleureuse et sociable, Emma aime passer du temps avec ses amis, découvrir de nouveaux cafés branchés et voyager pour s'inspirer de différentes cultures.",
      photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      nom: "Thomas Bernard",
      description: "Thomas est un homme calme et réfléchi, doté d'un esprit analytique et d'une curiosité sans fin. Passionné par les sciences et la technologie, il s'est engagé dans des études d'ingénierie informatique. En dehors de ses études, Thomas aime passer du temps dans la nature, pratiquer la randonnée et la photographie.",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      nom: "Sarah Moreau",
      description: "Sarah est une jeune femme ambitieuse et charismatique. En tant qu'étudiante en droit, elle est passionnée par la justice sociale et travaille dur pour défendre les droits des plus vulnérables. En dehors de ses études, Sarah est une danseuse talentueuse et une fervente adepte du yoga.",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },

  ],
  // Cabinet d'Avocats
  [
    {
      nom: "Maître Anne Laurent",
      description: "Maître Laurent est une avocate spécialisée en droit civil et en droit des affaires. Elle représente ses clients avec détermination et compétence, offrant des conseils juridiques précieux pour résoudre les litiges et protéger leurs intérêts. En dehors de son travail, elle aime la lecture et les arts visuels.",
      photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      nom: "Maître Julien Garcia",
      description: "Maître Garcia est un avocat pénaliste reconnu pour sa défense efficace et stratégique. Il possède une vaste expérience dans la représentation des accusés et des victimes, garantissant un procès équitable et équilibré. En dehors de son travail, il aime le football et la musique classique.",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      nom: "Maître Camille Leroux",
      description: "Maître Leroux est une avocate spécialisée en droit de la famille et en droit des successions. Elle offre un soutien juridique compassionné et expert aux familles confrontées à des questions sensibles. En dehors de son travail, elle pratique le théâtre amateur et la méditation.",
      photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    }
  ],
  // Salon de Coiffure et Beauté
  [
    {
      nom: "Sophie Martin",
      description: "Sophie est une coiffeuse talentueuse et passionnée par l'art de la coiffure. Avec une expertise en coloration et en coupe de cheveux, elle crée des looks personnalisés qui mettent en valeur la beauté naturelle de ses clients. En dehors de son travail, Sophie est une amatrice de yoga et une amoureuse des animaux.",
      photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      nom: "David Dupont",
      description: "David est un esthéticien expérimenté, spécialisé dans les soins de la peau et le maquillage. Il utilise des produits de haute qualité et des techniques avancées pour offrir à ses clients une expérience de beauté luxueuse et relaxante. En dehors de son travail, David est un passionné de photographie et un amateur de gastronomie.",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      nom: "Julie Lefevre",
      description: "Julie est une spécialiste en manucure et en soins des ongles, offrant à ses clients des services personnalisés pour des mains et des pieds impeccables. Avec une attention méticuleuse aux détails, Julie crée des designs d'ongles uniques et élégants. En dehors de son travail, Julie pratique le jardinage et la lecture.",
      photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    }
  ],
  // Agence de Voyage
  [
    {
      nom: "Alexandre Bertrand",
      description: "Alexandre est un passionné de voyages et un expert en destinations exotiques. En tant qu'agent de voyage expérimenté, il aide ses clients à planifier des vacances inoubliables, offrant des conseils avisés sur les meilleures destinations et expériences à découvrir. En dehors de son travail, Alexandre aime la photographie et la plongée sous-marine.",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      nom: "Julie Dubois",
      description: "Julie est une globe-trotteuse passionnée par la découverte de nouvelles cultures et destinations. Avec une formation en tourisme, elle est spécialisée dans la création de voyages sur mesure, adaptés aux besoins et aux préférences de ses clients. En dehors de son travail, Julie aime la peinture et l'escalade.",
      photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      nom: "Pierre Lemoine",
      description: "Pierre est un passionné de nature et d'aventure, spécialisé dans les voyages d'exploration et d'écotourisme. En tant que guide touristique expérimenté, il partage sa connaissance des habitats naturels et des espèces locales avec enthousiasme. En dehors de son travail, Pierre pratique le trail running et la photographie animalière.",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    }
  ],
  // Restaurant
  [
    {
      nom: "Chef Émilie Bouchard",
      description: "Chef Émilie est passionnée par la cuisine française traditionnelle et la création de plats gourmands qui réveillent les papilles. Avec une formation culinaire internationale, elle met en avant des produits locaux et de saison pour offrir une expérience gastronomique authentique. En dehors de son travail, Émilie aime la musique jazz et la peinture.",
      photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      nom: "Sommelier Marc Lefevre",
      description: "Marc est un sommelier passionné par l'art de la dégustation du vin et la création d'accords mets-vins parfaits. Avec une expertise approfondie des vignobles régionaux, il guide les clients à travers une expérience sensorielle riche et éducative. En dehors de son travail, Marc pratique le vélo et la photographie urbaine.",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      nom: "Serveuse Alice Renard",
      description: "Alice est une serveuse attentionnée et souriante, passionnée par l'art de la gastronomie et le service à la clientèle. Elle crée une atmosphère chaleureuse et accueillante, offrant aux clients une expérience agréable et mémorable à chaque visite. En dehors de son travail, Alice aime la lecture et les randonnées en montagne.",
      photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    }
  ],
  //entreprise construction
  [
    {
      nom: "Marc Dubois",
      description: "Marc est un entrepreneur passionné par la construction durable et écologique. Il supervise chaque projet avec précision et engagement, assurant des normes élevées de qualité et de sécurité. En dehors de son travail, il aime le jardinage et la restauration de voitures anciennes.",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      nom: "Sophie Lambert",
      description: "Sophie est une ingénieure en construction talentueuse, spécialisée dans la gestion de projets complexes. Elle supervise l'exécution de chaque détail technique, assurant une construction efficace et innovante. En dehors de son travail, elle aime la photographie et la cuisine internationale.",
      photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      nom: "Pierre Dupont",
      description: "Pierre est un architecte visionnaire qui transforme les idées en structures architecturales élégantes et fonctionnelles. Son approche créative et son expertise technique garantissent des résultats qui dépassent les attentes. En dehors de son travail, il aime la randonnée et la peinture.",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    }
  ],
  // Clinique Médicale
  [
    {
      nom: "Dr. Marie Dubois",
      description: "Dr. Dubois est une médecin dévouée avec une passion pour la médecine familiale. Elle se spécialise dans les soins préventifs et traite une gamme de conditions médicales. En dehors de son travail, elle aime la lecture et la cuisine française.",
      photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      nom: "Dr. Ahmed Khan",
      description: "Dr. Khan est un spécialiste en médecine interne avec une expertise dans la gestion des maladies chroniques. Il est connu pour son approche patiente et compatissante envers ses patients. En dehors de son travail, il aime jouer au tennis et voyager.",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      nom: "Dr. Emily Wang",
      description: "Dr. Wang est une pédiatre attentionnée qui se consacre au bien-être des enfants. Elle possède une vaste expérience dans le traitement des maladies pédiatriques et encourage des habitudes de vie saines chez ses jeunes patients. En dehors de son travail, elle est passionnée par la peinture et la musique.",
      photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    }
  ],

  // Magasin de Mode
  [
    {
      nom: "Ella Smith",
      description: "Ella est une styliste créative avec une passion pour la mode éthique. Elle conçoit des collections élégantes et durables qui célèbrent l'individualité et le confort. En dehors de son travail, elle aime le yoga et la photographie.",
      photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      nom: "David Lee",
      description: "David est un acheteur de mode expérimenté avec un œil pour les tendances émergentes. Il sélectionne soigneusement les pièces pour offrir une expérience shopping distinctive. En dehors de son travail, il aime le jardinage et la cuisine internationale.",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      nom: "Sophie Chen",
      description: "Sophie est une passionnée de mode avec une expertise en marketing numérique. Elle collabore avec des marques de luxe pour promouvoir leurs collections à travers des campagnes créatives. En dehors de son travail, elle aime le cinéma et le vélo.",
      photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    }
  ],






  // Agence Immobilière
  [
    {
      nom: "Sophie Martin",
      description: "Sophie est une agente immobilière passionnée par l'immobilier résidentiel. Elle guide ses clients à travers le processus d'achat et de vente avec professionnalisme et intégrité. En dehors de son travail, elle aime la peinture et la randonnée en montagne.",
      photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      nom: "Lucas Dupont",
      description: "Lucas est un courtier immobilier expérimenté avec une connaissance approfondie du marché local. Il se spécialise dans les propriétés commerciales et résidentielles haut de gamme. En dehors de son travail, il aime jouer au golf et voyager.",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      nom: "Claire Lambert",
      description: "Claire est une agent immobilier passionnée par l'architecture et le design d'intérieur. Elle aide ses clients à trouver des propriétés qui correspondent à leur style de vie et à leurs besoins uniques. En dehors de son travail, elle aime le théâtre et la cuisine française.",
      photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    }
  ]
]

let style_sitenormal = [
  `
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap");


:root {
  --body_color: #f1f1f1;
  --text_color_white: #fff;
  --text_color_black: #000;
  --link_color: #1751cc;
  --btn_color: #1751cc;
}


.logo_img {
  border-radius: 10px;
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: auto;
}
.nav_links {
  list-style: none;
}
.nav_links li {
  display: inline-block;
  padding: 0px 20px;
}
.nav_links li a {
  text-decoration: none;
  transition: all 0.3s ease 0s;
  color: var(--text_color_white);
}
.nav_links li a:hover {
  color: var(--text_color_black);
}

.section1 {
  width: 100%;
  height: 50vh;
  background-image: url(https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80);
  background-repeat: no-repeat;
  background-size: cover;
}
.section1 h1,
h3 {
  padding: 10px;
}
#background_color {
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 10%;
  z-index: 11;
}
.hero {
 
  color: var(--text_color_white);
  text-align: center;
  padding: 150px 0;
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 36px;
  margin-bottom: 20px;
  color: var(--text_color_white);
}

.hero p {
  font-size: 18px;
  margin-bottom: 30px;
  color: var(--text_color_white);
}



/* Menu section styles */
.menu {
  background: #fff;
  padding: 80px 0;
  text-align: center;
}

.menu h2 {
  font-size: 32px;
  margin-bottom: 30px;
}

.menu-item {
  margin: 30px;
}

.menu-item img {
  max-width: 100%;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu-item h3 {
  font-size: 24px;
  margin-top: 10px;
}

.menu-item p {
  font-size: 16px;
  margin-top: 10px;
}

/* About section styles */
.about {
  padding: 80px 0;
  text-align: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.about h2 {
  font-size: 32px;
  margin-bottom: 30px;
  color: var(--text_color_black);
}

.about p {
  font-size: 18px;
  line-height: 1.6;
  color: var(--text_color_black);
}

/* Footer styles */
.footer {
  background: var(--body_color);
  color: var(--text_color_white);
  text-align: center;
  padding: 20px;
}
.footer .social {
  text-align: center;
  padding-bottom: 25px;
  color: black;
  position: relative;
  font-size: 26px;
}
.footer .social a {
  font-size: 24px;
  border: 1px solid #ccc;
  width: 40px;
  height: 40px;
  line-height: 38px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  color: var(--text_color_white);
  margin: 0.8px;
}
.footer ul {
  margin-top: 0;
  padding: 10px 10px;
  list-style: none;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.footer p {
  color: var(--text_color_white);
}
.footer ul li {
  display: inline-block;
  padding: 0.15px;
}
.footer ul li a {
  text-decoration: none;
  opacity: 0.8;
  color: var(--text_color_white);
}
/* Responsive styles */
@media screen and (max-width: 768px) {
  .nav-list {
    flex-direction: column;
    align-items: center;
  }

  .nav-list li {
    margin: 10px 0;
  }
}
.sidebar {
  position: absolute;
  height: 96%;
  width: 80px;
  padding: 10px 14px;
border-top-left-radius: 15px;
border-bottom-left-radius: 15px;
  transition: var(--tran-05);
  z-index: 100;
}

/* ===== Reusable code - Here ===== */
.sidebar li {
  height: 50px;
  list-style: none;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.sidebar header .image,
.sidebar .icon {
  min-width: 60px;
  border-radius: 6px;
}
.sidebar header .image:hover img {
  scale: 120%;
}
.sidebar header .image img {
  transition: scale 400ms;
  overflow: hidden;
}

.sidebar .icon {
  min-width: 60px;
  border-radius: 6px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.sidebar .icon {
  color: black;
  transition: var(--tran-03);
}

/* =========================== */

.sidebar header {
  position: relative;
}

.sidebar header .image-text {
  display: flex;
  align-items: center;
}

.sidebar header .image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar header .image img {
  width: 40px;
  border-radius: 6px;
}

.sidebar .menu_nav {
  margin-top: 40px;
}

.sidebar li a {
  list-style: none;
  height: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  text-decoration: none;
  transition: var(--tran-03);
}

.sidebar li a:hover {
  background-color: var(--primary-color);
}
.sidebar li a:hover .icon,
.sidebar li a:hover .text {
  color: var(--sidebar-color);
}
body.dark .sidebar li a:hover .icon,
body.dark .sidebar li a:hover .text {
  color: var(--text-color);
}

.sidebar .menu-bar {
  height: calc(100% - 55px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
}
.sidebar .menu-links .nav-link a .icon.active {
  color: blue;
}

.menu-bar::-webkit-scrollbar {
  display: none;
}
.sidebar ~ .home_side {
  left: 80px;
height: 100%;
  width: calc(100% - 80px);
}

.home_side {
  position: relative;
  height: calc(100% - 55px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}
.home_side::-webkit-scrollbar {
  display: none;
}

section[id="Images"] {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
section[id="Citation"] {
  color: var(--text_color_black);
}
section[id="Texte + Image"] {
  color: var(--text_color_black);
}
section[id="Nos clients"] {
  color: var(--text_color_black);
}
section[id="Partenaires"] {
  color: var(--text_color_black);
}
section[id="Équipe"] {
  color: var(--text_color_black);
}
`
]

const animaux = [
  "https://images.unsplash.com/photo-1489924034176-2e678c29d4c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNoaWVuJTIwaHVza3l8ZW58MHwwfDB8fHww",
  "https://images.unsplash.com/photo-1615038239758-4ea1495fd580?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYXQlMjBiZWF1fGVufDB8MHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1589952283406-b53a7d1347e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwaW58ZW58MHwwfDB8fHww",
  "T: Venez découvrir les animaux comme vous les avez jamais vu",
  "ST: Découvrez une collection exclusive d'articles et de photos mettant en lumière la beauté et la diversité du monde animal.",
  "TS: Nos clients",
  "T: Découvrez le monde fascinant des animaux !",
  "ST: Plongez au cœur de la nature avec des récits captivants sur les habitudes, les comportements et les modes de vie des animaux sauvages.",
  "TS: Nos serveurs",
  "T: Explorez la diversité incroyable du règne animal.",
  "ST: Apprenez-en davantage sur les efforts de conservation et de préservation des espèces menacées à travers le globe.",
  "TS: Nos animaux",
];
const objet = [
  "https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R5bG98ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGl2cmV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dCVDMyVBOWwlQzMlQTlwaG9uZXxlbnwwfDB8MHx8fDA%3D"
];
const paysages = [
  "lien_paysage_1",
  "lien_paysage_2",
  "lien_paysage_3"
];
const nourriture = [
  "lien_nourriture_1",
  "lien_nourriture_2",
  "lien_nourriture_3"
];
const technologie = [
  "lien_technologie_1",
  "lien_technologie_2",
  "lien_technologie_3"
];
const architecture = [
  "lien_architecture_1",
  "lien_architecture_2",
  "lien_architecture_3"
];
const personnes = [
  "lien_personnes_1",
  "lien_personnes_2",
  "lien_personnes_3"
];
const vehicules = [
  "lien_vehicules_1",
  "lien_vehicules_2",
  "lien_vehicules_3"
];
const nature = [
  "lien_nature_1",
  "lien_nature_2",
  "lien_nature_3"
];
const art = [
  "lien_art_1",
  "lien_art_2",
  "lien_art_3"
];
const musique = [
  "lien_musique_1",
  "lien_musique_2",
  "lien_musique_3"
];
const sport = [
  "lien_sport_1",
  "lien_sport_2",
  "lien_sport_3"
];
const films = [
  "lien_films_1",
  "lien_films_2",
  "lien_films_3"
];
const livres = [
  "lien_livres_1",
  "lien_livres_2",
  "lien_livres_3"
];
const jeux = [
  "lien_jeux_1",
  "lien_jeux_2",
  "lien_jeux_3"
];
const vacances = [
  "lien_vacances_1",
  "lien_vacances_2",
  "lien_vacances_3"
];
const fetes = [
  "lien_fetes_1",
  "lien_fetes_2",
  "lien_fetes_3"
];
const sciences = [
  "lien_sciences_1",
  "lien_sciences_2",
  "lien_sciences_3"
];
const histoire = [
  "lien_histoire_1",
  "lien_histoire_2",
  "lien_histoire_3"
];
const culture = [
  "lien_culture_1",
  "lien_culture_2",
  "lien_culture_3"
];
const voyage = [
  "lien_voyage_1",
  "lien_voyage_2",
  "lien_voyage_3"
];
const education = [
  "lien_education_1",
  "lien_education_2",
  "lien_education_3"
];
const sante = [
  "lien_sante_1",
  "lien_sante_2",
  "lien_sante_3"
];
const mode = [
  "lien_mode_1",
  "lien_mode_2",
  "lien_mode_3"
];
const economie = [
  "lien_economie_1",
  "lien_economie_2",
  "lien_economie_3"
];
const politique = [
  "lien_politique_1",
  "lien_politique_2",
  "lien_politique_3"
];
const religion = [
  "lien_religion_1",
  "lien_religion_2",
  "lien_religion_3"
];
const environnement = [
  "lien_environnement_1",
  "lien_environnement_2",
  "lien_environnement_3"
];
const astronomie = [
  "lien_astronomie_1",
  "lien_astronomie_2",
  "lien_astronomie_3"
];
const fantastique = [
  "lien_fantastique_1",
  "lien_fantastique_2",
  "lien_fantastique_3"
];
const horreur = [
  "lien_horreur_1",
  "lien_horreur_2",
  "lien_horreur_3"
];
const comedie = [
  "lien_comedie_1",
  "lien_comedie_2",
  "lien_comedie_3"
];
const romance = [
  "lien_romance_1",
  "lien_romance_2",
  "lien_romance_3"
];
const action = [
  "lien_action_1",
  "lien_action_2",
  "lien_action_3"
];
const thriller = [
  "lien_thriller_1",
  "lien_thriller_2",
  "lien_thriller_3"
];
const drame = [
  "lien_drame_1",
  "lien_drame_2",
  "lien_drame_3"
];
const animation = [
  "lien_animation_1",
  "lien_animation_2",
  "lien_animation_3"
];
const documentaire = [
  "lien_documentaire_1",
  "lien_documentaire_2",
  "lien_documentaire_3"
];
const serie = [
  "lien_serie_1",
  "lien_serie_2",
  "lien_serie_3"
];
const languageAliases = {
  "Anglais": "Anglais",
  "English": "Anglais",
  "Inglés": "Anglais",
  "Français": "Français",
  "French": "Français",
  "Francés": "Français",
  "Espagnol": "Espagnol",
  "Spanish": "Espagnol",
  "Español": "Espagnol"
};
const data_lang = {
  "Anglais": {
    cookie: ["We use cookies 🍪", `We use cookies to ensure that you have the best experience on our website <br /><a href="condition.html">Read the conditions</a>.`, "Accept", "Reject"],
    header: ["Home", "Generate", "Add-on", "IDE"],
    account: ["Name", "Email", "Password", "New password", "Valid", `<i class="bx bx-trash"></i> Delete my account`],
    widget_chatpass: ["Password", "Proxy", "We've created an extension that lets you manage your passwords.", "Our extension is a <u>practical tool</u> for web browser users looking to secure their online browsing experience. It allows you to <u>protect your personal data</u>. With our extension, you can : Change generate stronger passwords from your passwords, <u>Save your passwords securely</u>, so you don't have to remember them manually in a file manager Check your passwords if they are weak, medium or strong. Our extension is easy to install and use, and is compatible with most popular web browsers. It is regularly updated to guarantee a secure and reliable browsing experience for our users.", "See more", "We've created a Proxy extension.", "Our extension, featuring an integrated <u>proxy</u>, is a <u>convenient tool</u> designed to enhance the security of your online browsing experience. It offers advanced protection for your personal data. Thanks to our extension, you can:", "Generate stronger passwords from your existing passwords.", "<u>Save your passwords securely</u>, eliminating the need to store them manually in a file manager.", "Check the strength of your passwords, classifying them as weak, medium or strong.", "Our extension is easy to install and use, and compatible with most popular web browsers. It includes a built-in proxy to reinforce the confidentiality of your online activities. We are committed to keeping it regularly updated, ensuring a secure and reliable browsing experience for our users.", "See more"],
    widget_cloud: ["We've created an extension to store your files.", "Our extension offers a wide range of features for an exceptional web browsing experience. It's designed to enhance your online experience, with a focus on security and productivity:", "Explore <u>more secure web browsing</u> with our extension.", "<u>Organize your bookmarks intuitively</u>, simplifying access to your favorite sites.", "Take advantage of <u>simplified tab management</u> for smooth navigation.", "<u>Customize your experience</u> with themes and settings tailored to your preferences.", "Our extension is designed to be easy to install and use, compatible with most popular web browsers. It is regularly updated to incorporate new features and guarantee an unrivalled browsing experience for our users.", "See more"],
    widget_focus: ["We've also created an extension that lets you stay focused with music during your study hours.", "Our extension is a practical tool for web browser users looking to retser focus to work and improve their online productivity.", "See more"],
    widget_livre_audio: ["We've created an audio book.", "The audiobook is a Soon creation, immersing you in an adventure with inspiring, touching characters. Available free of charge in 2 languages (French and English) to improve your English, it's also free. With a simple, easy-to-use interface, we recommend you go for it!", "See more", "In a once tranquil town, an exceptional trio undergoes trials and tribulations. M. Khyller, a successful lawyer, defends his reputation M. Night, a courageous policeman, unravels an elusive, mysterious crime; Athena, a talented architect, struggles with a crucial project of global significance. Their paths cross as they brave adversity, finding strength and solace in friendship and love."],
    widget_film: ["We've created a site to watch your movies.", "If you're fed up with ads, or not being able to find your films, or even a site to watch your films, then this site is for you. It works well, apparently, to say that this site offers films for free, with a description, the film's rating and all that. What's more, every month we add a film by vote, i.e. there's a vote between 3 films on Instagram, so join in by pressing the icon at the top, and the film with the most votes will be added.", "See more"],
    how_use: ["How does it work?", "Create an account", "Setting up your site", "Generate your site", "Edit your site", `Click on the blue button next to the center bar, then select "Sign Up" to register. Once registered, all you have to do is log in. You can always change your data by clicking on your profile.`, "Personalize your site the way you want! Choose a name, colors, logo and font you like. You can adjust these elements at any time to create the perfect ambience and offer your visitors a unique experience.", `Then, once you've customized all aspects of your site according to your preferences, simply click on the blue "Generate your site" button. This will start the process of creating your website`, `Finally, you will be able to modify your site with almost infinite functionality and incryable ease. You can upload your site in HTML/CSS/JS, copy your site to Figma, download a full-view image of your site, as well as an interesting README to start programming. `],
    generation: [`Welcome to "The Fab Studio".`, "Your Intelligent Website Builder! Design customized without programming. Customize every element to your identity.", "Customized", `Discover the incredible availability of "The Fab Studio" website on all platforms! Whether you're on your desktop tablet or smartphone, you can access our revolutionary our revolutionary website-building platform wherever you are wherever and whenever you want. Thanks to our responsive and adaptive design, our site automatically adjusts to your screen size, giving you a smooth and optimal user experience.`],
    info: ["High Performance Guaranteed:", "Intuitive simplified operation:", "Sites generated by The Fab Studio are optimized to offer a fluid, fast user experience. user experience. Thanks to our attention to detail and technical optimization your visitors will enjoy smooth navigation, whatever device or browser they use.", "We believe that creating shouldn't be complex. Our user-friendly intuitive interface guides you through the entire generation process. You don't need to be a programming expert programming - with The Fab Studio, creating your website is simple and enjoyable.", "Information", "Fast Generation Speed:", "Confidentiality assured:", "Our platform, The Fab Studio, is designed to generate websites with impressive speed. Thanks to our advanced technology, your sites will be created in record time, bringing your project to life quickly and efficiently.", "The confidentiality of your data is our top priority. We implement robust security protocols protocols in place to ensure that all the information you provide during the creation of your site remains private and secure. Your trust is our commitment.", "See more"],
    personnalisation_step1: ["Enter your site name", "Site name", "Confirm", "Select your logo", "Confirm", "Choose your connection button type", "Confirm"],
    personnalisation_step2: ["Select your menu type", "Confirm", "Select your menu color", "Color", "Glassmorphism", "Gradiant", "Black", "White", "Color", "Transparent", "Confirm", "Select the number of links in your menu", "Confirm"],
    personnalisation_step3: ["Select your site type", "Confirm", "Graphic Design Agency", "Law firm", "Hair and Beauty Salon", "Travel Agency", "Restaurant", "Construction Company", "Medical Clinic", "Fashion Store", "Real Estate Agency", "Select your font for your site", "Confirm", "Select your 4 colors for your site", "Confirm"],
    personnalisation_step4: ["You'll be able to customize your site."],
    personnalisation_step5: ["You'll be able to customize your site."],
    personnalisation_step6: ["Network links:", "Confirm", "Subcribe:", "Confirm", "Category:", "Confirm"],
    p_row: ["This is the upper part of the website, generally containing the logo, the site name, the navigation menu and possibly other important elements such as login or search links. search links.", "The navigation menu is an important part of a website's layout. layout of a website. It can be located in the header or in the sidebar. sidebar, allowing users to navigate easily between site pages.", "This section is often placed at the top of the home page and generally usually features a large, attractive visual accompanied by a eye-catching text. It attracts visitors' attention and highlights key elements of the site.", "This is the central part of the website, where the main content content. This can include text, images, videos, blog posts, products, etc. This is the that site visitors generally consult for information.", `The "Pre-footer" is a section located just before the footer area footer area of a web page. It's an important important element in the layout of a site, as it provides a visual visual transition between the main content and the bottom of the page. In this area, you can include elements such as additional information, important links, action buttons action buttons, or calls to action to prompt visitors to perform a visitors to perform a specific action.`, "The footer is located at the bottom of the website and generally contains additional information such as contact details contact details, links to important pages, copyright information, links to privacy policies or terms of use, etc."],
    part: ["Part 1", "Part 3", "Part 5", "Part 2", "Part 4", "Part 6"],
    view: ["Generate", `<i class="bx bx-link"></i> View your site`],
    footer: ["Contact us", "Need help", "You can contact us by email", `<a href="mailto:studiochatbot2@gmail.com?subject=Contact%on%the%support">studiochatbot2@gmail.com</a>`, "French", "Spanish", "English", `<a href="index.html">Home</a>`, `<a href="#generation">Generate</a>`, `<a href="#widget">Add-on</a>`, `<a href="menu_IDE.html">IDE</a>`, `<a href="condition.html">Privacy policy</a>`],
    perso: ["Customized"]

  },
  "Espagnol": {
    cookie: [
      "Usamos cookies 🍪",
      `Usamos cookies para asegurarnos de que tenga la mejor experiencia en nuestro sitio web <br /><a href="condition.html">Leer las condiciones</a>.`,
      "Aceptar",
      "Rechazar"
    ],
    header: ["Inicio", "Generar", "Complemento", "IDE"],
    account: ["Nombre", "Correo electrónico", "Contraseña", "Nueva contraseña", "Valido", `<i class="bx bx-trash"></i> Eliminar mi cuenta`],
    widget_chatpass: [
      "Contraseña",
      "Proxy",
      "Hemos creado una extensión que le permite gestionar sus contraseñas.",
      "Nuestra extensión es una <u>herramienta práctica</u> para los usuarios de navegadores web que buscan asegurar su experiencia de navegación en línea. Le permite <u>proteger sus datos personales</u>. Con nuestra extensión, puede: Cambiar generar contraseñas más fuertes de sus contraseñas, <u>Guardar sus contraseñas de manera segura</u>, para que no tenga que recordarlas manualmente en un gestor de archivos Verifique sus contraseñas si son débiles, medianas o fuertes. Nuestra extensión es fácil de instalar y usar, y es compatible con la mayoría de los navegadores web más populares. Se actualiza regularmente para garantizar una experiencia de navegación segura y confiable para nuestros usuarios.",
      "Ver más",
      "Hemos creado una extensión de Proxy.",
      "Nuestra extensión, con un <u>proxy</u> integrado, es una <u>herramienta conveniente</u> diseñada para mejorar la seguridad de su experiencia de navegación en línea. Ofrece una protección avanzada para sus datos personales. Gracias a nuestra extensión, puede:",
      "Generar contraseñas más fuertes de sus contraseñas existentes.",
      "<u>Guardar sus contraseñas de manera segura</u>, eliminando la necesidad de almacenarlas manualmente en un gestor de archivos.",
      "Verifique la fortaleza de sus contraseñas, clasificándolas como débiles, medianas o fuertes.",
      "Nuestra extensión es fácil de instalar y usar, y es compatible con la mayoría de los navegadores web más populares. Incluye un proxy integrado para reforzar la confidencialidad de sus actividades en línea. Nos comprometemos a mantenerla actualizada regularmente, garantizando una experiencia de navegación segura y confiable para nuestros usuarios.",
      "Ver más"
    ],
    widget_cloud: [
      "Hemos creado una extensión para almacenar sus archivos.",
      "Nuestra extensión ofrece una amplia gama de características para una experiencia de navegación web excepcional. Está diseñada para mejorar su experiencia en línea, con un enfoque en la seguridad y la productividad:",
      "Explore una <u>navegación web más segura</u> con nuestra extensión.",
      "<u>Organice sus marcadores intuitivamente</u>, simplificando el acceso a sus sitios favoritos.",
      "Aproveche la <u>gestión simplificada de pestañas</u> para una navegación fluida.",
      "<u>Personalice su experiencia</u> con temas y configuraciones adaptados a sus preferencias.",
      "Nuestra extensión está diseñada para ser fácil de instalar y usar, compatible con la mayoría de los navegadores web más populares. Se actualiza regularmente para incorporar nuevas características y garantizar una experiencia de navegación inigualable para nuestros usuarios.",
      "Ver más"
    ],
    widget_focus: [
      "También hemos creado una extensión que le permite mantenerse enfocado con música durante sus horas de estudio.",
      "Nuestra extensión es una herramienta práctica para los usuarios de navegadores web que buscan restablecer el enfoque para trabajar y mejorar su productividad en línea.",
      "Ver más"
    ],
    widget_livre_audio: [
      "Hemos creado un audiolibro.",
      "El audiolibro es una creación de Soon, sumergiéndote en una aventura con personajes inspiradores y conmovedores. Disponible de forma gratuita en 2 idiomas (francés e inglés) para mejorar tu inglés, también es gratuito. Con una interfaz simple y fácil de usar, ¡te recomendamos que lo pruebes!",
      "Ver más",
      "En una ciudad que alguna vez fue tranquila, un trío excepcional atraviesa pruebas y tribulaciones. El Sr. Khyller, un abogado exitoso, defiende su reputación; el Sr. Night, un valiente policía, desentraña un crimen elusivo y misterioso; Athena, una talentosa arquitecta, lucha con un proyecto crucial de importancia mundial. Sus caminos se cruzan mientras enfrentan la adversidad, encontrando fuerza y consuelo en la amistad y el amor."
    ],
    widget_film: [
      "Hemos creado un sitio para ver sus películas.",
      "Si estás harto de los anuncios, o de no poder encontrar tus películas, o incluso de un sitio para ver tus películas, entonces este sitio es para ti. Funciona bien, aparentemente, para decir que este sitio ofrece películas gratis, con una descripción, la calificación de la película y todo eso. Además, cada mes añadimos una película por votación, es decir, hay una votación entre 3 películas en Instagram, así que únete presionando el ícono en la parte superior, y la película con más votos será añadida.",
      "Ver más"
    ],
    how_use: [
      "¿Cómo funciona?",
      "Crear una cuenta",
      "Configurando su sitio",
      "Generar su sitio",
      "Editar su sitio",
      `Haga clic en el botón azul al lado de la barra central, luego seleccione "Regístrate" para registrarse. Una vez registrado, solo tiene que iniciar sesión. Siempre puede cambiar sus datos haciendo clic en su perfil.`,
      "¡Personalice su sitio como desee! Elija un nombre, colores, logotipo y fuente que le gusten. Puede ajustar estos elementos en cualquier momento para crear la atmósfera perfecta y ofrecer a sus visitantes una experiencia única.",
      `Luego, una vez que haya personalizado todos los aspectos de su sitio según sus preferencias, simplemente haga clic en el botón azul "Generar su sitio". Esto iniciará el proceso de creación de su sitio web`,
      `Finalmente, podrá modificar su sitio con funcionalidades casi infinitas y una facilidad increíble. Puede subir su sitio en HTML/CSS/JS, copiar su sitio a Figma, descargar una imagen de vista completa de su sitio, así como un README interesante para comenzar a programar.`
    ],
    generation: [
      `Bienvenido a "The Fab Studio".`,
      "¡Su Generador Inteligente de Sitios Web! Diseñe personalizados sin programación. Personalice cada elemento a su identidad.",
      "Personalizado",
      `¡Descubra la increíble disponibilidad del sitio web "The Fab Studio" en todas las plataformas! Ya sea que esté en su tableta de escritorio o en su teléfono inteligente, puede acceder a nuestra plataforma revolucionaria de creación de sitios web donde quiera que esté cuando quiera. Gracias a nuestro diseño receptivo y adaptable, nuestro sitio se ajusta automáticamente al tamaño de su pantalla, brindándole una experiencia de usuario fluida y óptima.`
    ],
    info: [
      "Alto Rendimiento Garantizado:",
      "Operación intuitiva simplificada:",
      "Los sitios generados por The Fab Studio están optimizados para ofrecer una experiencia de usuario fluida y rápida. Gracias a nuestra atención al detalle y optimización técnica, sus visitantes disfrutarán de una navegación fluida, sin importar el dispositivo o navegador que utilicen.",
      "Creemos que la creación no debería ser compleja. Nuestra interfaz intuitiva y fácil de usar lo guía a través de todo el proceso de generación. No necesita ser un experto en programación; con The Fab Studio, crear su sitio web es simple y agradable.",
      "Información",
      "Velocidad de Generación Rápida:",
      "Confidencialidad asegurada:",
      "Nuestra plataforma, The Fab Studio, está diseñada para generar sitios web con una velocidad impresionante. Gracias a nuestra tecnología avanzada, sus sitios serán creados en tiempo récord, dando vida a su proyecto de manera rápida y eficiente.",
      "La confidencialidad de sus datos es nuestra máxima prioridad. Implementamos protocolos de seguridad robustos para garantizar que toda la información que proporcione durante la creación de su sitio permanezca privada y segura. Su confianza es nuestro compromiso.",
      "Ver más"
    ],
    personnalisation_step1: [
      "Ingrese el nombre de su sitio",
      "Nombre del sitio",
      "Confirmar",
      "Seleccione su logotipo",
      "Confirmar",
      "Elija su tipo de botón de conexión",
      "Confirmar"
    ],
    personnalisation_step2: [
      "Seleccione su tipo de menú",
      "Confirmar",
      "Seleccione el color de su menú",
      "Color",
      "Vidriomorfismo",
      "Gradiente",
      "Negro",
      "Blanco",
      "Color",
      "Transparente",
      "Confirmar",
      "Seleccione el número de enlaces en su menú",
      "Confirmar"
    ],
    personnalisation_step3: [
      "Seleccione su tipo de sitio",
      "Confirmar",
      "Agencia de Diseño Gráfico",
      "Firma de Abogados",
      "Salón de Belleza y Peluquería",
      "Agencia de Viajes",
      "Restaurante",
      "Empresa de Construcción",
      "Clínica Médica",
      "Tienda de Moda",
      "Agencia Inmobiliaria",
      "Seleccione su fuente para su sitio",
      "Confirmar",
      "Seleccione sus 4 colores para su sitio",
      "Confirmar"
    ],
    personnalisation_step4: [
      "Podrá personalizar su sitio."
    ],
    personnalisation_step5: [
      "Podrá personalizar su sitio."
    ],
    personnalisation_step6: [
      "Enlaces de red:",
      "Confirmar",
      "Suscribirse:",
      "Confirmar",
      "Categoría:",
      "Confirmar"
    ],
    p_row: [
      "Esta es la parte superior del sitio web, que generalmente contiene el logotipo, el nombre del sitio, el menú de navegación y posiblemente otros elementos importantes, como enlaces de inicio de sesión o de búsqueda.",
      "El menú de navegación es una parte importante de la estructura de un sitio web. Puede estar ubicado en el encabezado o en la barra lateral, permitiendo a los usuarios navegar fácilmente entre las páginas del sitio.",
      "Esta sección a menudo se coloca en la parte superior de la página principal y generalmente presenta un visual grande y atractivo acompañado de un texto llamativo. Atrae la atención de los visitantes y resalta los elementos clave del sitio.",
      "Esta es la parte central del sitio web, donde se encuentra el contenido principal. Esto puede incluir texto, imágenes, videos, publicaciones de blog, productos, etc. Es lo que generalmente consultan los visitantes del sitio para obtener información.",
      `El "Pre-pie de página" es una sección ubicada justo antes del área del pie de página de una página web. Es un elemento importante en la estructura de un sitio, ya que proporciona una transición visual entre el contenido principal y la parte inferior de la página. En esta área, puede incluir elementos como información adicional, enlaces importantes, botones de acción o llamados a la acción para incitar a los visitantes a realizar una acción específica.`,
      "El pie de página se encuentra en la parte inferior del sitio web y generalmente contiene información adicional, como datos de contacto, enlaces a páginas importantes, información de copyright, enlaces a políticas de privacidad o términos de uso, etc."
    ],
    part: [
      "Parte 1",
      "Parte 3",
      "Parte 5",
      "Parte 2",
      "Parte 4",
      "Parte 6"
    ],
    view: [
      "Generar",
      `<i class="bx bx-link"></i> Ver su sitio`
    ],
    footer: [
      "Contáctanos",
      "¿Necesitas ayuda?",
      "Puedes contactarnos por correo electrónico",
      `<a href="mailto:studiochatbot2@gmail.com?subject=Contacto%en%el%soporte">studiochatbot2@gmail.com</a>`,
      "Francés",
      "Español",
      "Inglés",
      `<a href="index.html">Inicio</a>`,
      `<a href="#generation">Generar</a>`,
      `<a href="#widget">Complemento</a>`,
      `<a href="menu_IDE.html">IDE</a>`,
      `<a href="condition.html">Política de privacidad</a>`
    ],
    perso: ["Personalizado "]
  },
  "Français": {
    cookie: [
      "Nous utilisons les cookies 🍪",
      `Nous utilisons les cookies pour assurer de  vous donnez la meilleur expérience sur notre site web.<br /><a href="condition.html">Lire les conditions</a>.`,
      "Accepter",
      "Rejeter"
    ],
    header: ["Accueil", "Générer", "Add-on", "IDE"],
    account: ["Nom", "Email", "Mot de passe", "Nouveau mot de passe", "Valider", `<i class="bx bx-trash"></i> Supprimer mon compte`],
    widget_chatpass: [
      "Mot de passe",
      "Proxy",
      "Nous avons créer une extension qui permet de gestionner vos mot de passes.",
      "Notre extension est un <u>outil pratique</u> pour les utilisateurs de navigateurs web qui cherchent à sécuriser leur expérience de navigation en ligne. Elle permet de <u>protéger vos données personnelles</u>. Avec notre extension, vous pouvez : Changer générer des mots de passe plus fort à partir de vos mots de passe, <u>Enregistrer vos mots de passe de manière sécurisée</u>, afin de ne plus avoir à les mémoriser manuellement dans un gestionnaire de fichier Vérifier vos mots de passe si ils sont faible, moyen ou fort. Notre extension est facile à installer et à utiliser, et elle est compatible avec la plupart des navigateurs web populaires. Elle est régulièrement mise à jour pour garantir une expérience de navigation sécurisée et fiable pour nos utilisateurs.",
      "Voir plus",
      "Nous avons créer une extension qui permet d'avoir un Proxy.",
      "Notre extension, dotée d'un <u>proxy intégré</u>, est un <u>outil pratique</u> conçu pour renforcer la sécurité de votre expérience de navigation en ligne. Elle offre une protection avancée de vos données personnelles. Grâce à notre extension, vous pouvez :",
      "Générer des mots de passe plus forts à partir de vos mots de passe existants.",
      "<u>Enregistrer vos mots de passe de manière sécurisée</u>, éliminant ainsi le besoin de les mémoriser manuellement dans un gestionnaire de fichiers.",
      "Vérifier la robustesse de vos mots de passe, les classant en faibles, moyens ou forts.",
      "Notre extension est facile à installer et à utiliser, compatible avec la plupart des navigateurs web populaires. Elle intègre un proxy intégré pour renforcer la confidentialité de vos activités en ligne. Nous nous engageons à la maintenir régulièrement à jour, assurant ainsi une expérience de navigation sécurisée et fiable pour nos utilisateurs.",
      "Voir plus"
    ],
    widget_cloud: [
      "Nous avons créer une extension qui permet stocker vos fichiers.",
      "Notre extension propose une panoplie de fonctionnalités pour vous offrir une expérience de navigation web exceptionnelle. Elle vise à améliorer votre quotidien en ligne en mettant l'accent sur la sécurité et la productivité :",
      "Explorez une <u>navigation web plus sécurisée</u> avec notre extension.",
      "<u>Organisez vos signets de manière intuitive</u>, simplifiant ainsi l'accès à vos sites préférés.",
      "Profitez d'une <u>gestion simplifiée des onglets</u> pour une navigation fluide.",
      "<u>Personnalisez votre expérience</u> avec des thèmes et des paramètres adaptés à vos préférences.",
      "Notre extension est conçue pour être facile à installer et à utiliser, compatible avec la plupart des navigateurs web couramment utilisés. Elle est régulièrement mise à jour pour intégrer de nouvelles fonctionnalités et garantir une expérience de navigation inégalée pour nos utilisateurs.",
      "Voir plus"
    ],
    widget_focus: [
      "Nous également avons créer une extension qui permet de rester concentré avec de la musique pendant vos heures d'études.",
      "Notre extension est un outil pratique pour les utilisateurs de navigateurs web qui cherchent à retser concentrer pour travailler et améliorer leur productivité en ligne.",
      "Voir plus"
    ],
    widget_livre_audio: [
      "Nous avons créer un livre audio.",
      "Le livre audio est une création de Soon, plonger dans une aventure avec des personnages inspirants, touchants. Disponible gratuitement dans 2 langues en Français et en Anglais pour améliorer son Anglais, de plus libre et gratuit. Avec une interface simple et facile à utiliser, nous vous recommandons d'y aller!",
      "Voir plus",
      "Dans une ville jadis tranquille, un trio exceptionnel traverse des épreuves : M. Khyller, avocat victorieux, défend sa réputation face à des procès de plus en plus ardus ; M. Night, policier courageux, démêle un crime insaisissable, et mystérieux ; Athéna, architecte talentueuse, lutte pour un projet crucial à portée mondiale. Leurs chemins se croisent alors qu'ils bravent l'adversité, trouvant force et réconfort dans leur amitié et leur amour."
    ],
    widget_film: [
      "Nous avons créer un site pour regarder vos films.",
      "Vous en avez marre d'avoir des pubs, où de ne pas trouver vos films ou encore de site pour regarder vos films, et bien ce site est fait pour vous, ça marche bien apparemmet de dire ça, ce site offre des films gratuitement, avec une description, la note du film tout ça. En plus chaque mois, nous rajoutons un film par vote, c'est-à-dire qu'il y a un vote entre 3 films sur Instagram, d'ailleurs rejoingnez nous en appuyant sur l'icon en haut, et le film qui aura le plus de voix sera rajouté.",
      "Voir plus"
    ],
    how_use: [
      "Comment ça marche ?",
      "Créer un compte",
      "Paramétrer votre site",
      "Générer votre site",
      "Modifier votre site",
      `Cliquez sur le bouton bleu à côté de la barre centrale, puis sélectionnez "Sign Up" pour vous inscrire. Une fois inscrit, il ne vous restera plus qu'à vous connecter. Vous pourrez toujours changez vos données en cliquant sur votre profil.`,
      "Personnalisez votre site comme vous le souhaitez ! Choisissez un nom, des couleurs, un logo et une police qui vous plaisent. Vous pouvez ajuster ces éléments à tout moment pour créer l'ambiance parfaite et offrir une expérience unique à vos visiteurs.",
      `Ensuite, une fois que vous avez personnalisé tous les aspects de votre site selon vos préférences, il vous suffit de cliquer sur le bouton bleu "Générer votre site". Cette action lancera le processus de création de votre site web.`,
      `Pour finir vous pourrez modifier votre site avec des fonctionnalitées presque infini et une facilité incryable. Vous pouvez télécharger votre site en HTML/CSS/JS, copier votre site sur Figma, télécharger une image en pleine vue de votre site, mais aussi un README intéressant pour commencer à programmer.`
    ],
    generation: [
      `Bienvenue sur "The Fab Studio"`,
      "Votre Créateur de Sites Web Intelligent ! Concevez des sites sur mesure sans programmation. Personnalisez chaque élément pour refléter votre identité.",
      "Personnalisé",
      `Découvrez l'incroyable disponibilité du site "The Fab Studio" sur toutes les plateformes ! Que vous soyez sur votre ordinateur de bureau, votre tablette ou votre smartphone, vous pouvez accéder à notre plateforme de création de sites web révolutionnaire où que vous soyez et quand vous le souhaitez. Grâce à notre conception réactive et adaptative, notre site s'ajuste automatiquement à la taille de votre écran, vous offrant ainsi une expérience utilisateur fluide et optimale.`
    ],
    info: [
      "Haute Performance Garantie:",
      "Utilisation Intuitive Simplifiée:",
      "Les sites générés par The Fab Studio sont optimisés pour offrir une expérience utilisateur fluide et rapide. Grâce à notre attention aux détails et à l'optimisation technique, vos visiteurs bénéficieront d'une navigation sans accroc, quel que soit le dispositif ou le navigateur utilisé.",
      "Nous pensons que la création d'un site web ne devrait pas être complexe. Notre interface conviviale et intuitive vous guide tout au long du processus de génération. Vous n'avez pas besoin d'être un expert en programmation – avec The Fab Studio , la création de votre site est simple et agréable.",
      "Informations",
      "Vitesse de Génération Rapide:",
      "Confidentialité Assurée:",
      "Notre plateforme, The Fab Studio ,est conçue pour générer des sites web avec une vitesse impressionnante. Grâce à notre technologie avancée, vos sites seront créés en un temps record, permettant à votre projet de prendre vie rapidement et efficacement.",
      "La confidentialité de vos données est notre priorité. Nous mettons en place des protocoles de sécurité robustes pour garantir que toutes les informations que vous fournissez lors de la création de votre site restent privées et sécurisées. Votre confiance est notre engagement.",
      "Voir plus"
    ],
    personnalisation_step1: [
      "Entrez votre nom de votre site",
      "Nom du site",
      "Valider",
      "Selectionner votre logo",
      "Valider",
      "Choissisez votre type de bouton de connexion",
      "Valider"
    ],
    personnalisation_step2: [
      "Selectionner votre type de menu",
      "Valider",
      "Selectionner votre couleur de votre menu",
      "Couleur",
      "Glassmorphisme",
      "Gradiant",
      "Noir",
      "Blanc",
      "Couleur",
      "Transparent",
      "Valider",
      "Selectionner votre nombre de lien dans votre menu",
      "Valider"
    ],
    personnalisation_step3: [
      "Selectionner votre type de site",
      "Valider",
      "Agence de Design Graphique",
      "Cabinet d'Avocats",
      "Salon de Coiffure et Beauté",
      "Agence de Voyage",
      "Restaurant",
      "Entreprise de Construction",
      "Clinique Médicale",
      "Magasin de Mode",
      "Agence Immobilière",
      "Selectionner votre police pour votre site",
      "Valider",
      "Selectionner vos 4 couleurs pour votre site",
      "Valider"
    ],
    personnalisation_step4: [
      "Vous pourrez personnalisé lors de vous avez votre site."
    ],
    personnalisation_step5: [
      "Vous pourrez personnalisé lors de vous avez votre site."
    ],
    personnalisation_step6: [
      "Liens réseaux:",
      "Valider",
      "S'abonner:",
      "Valider",
      "Catégorie:",
      "Valider"
    ],
    p_row: [
      "C'est la partie supérieure du site web qui contient généralement le logo, le nom du site, le menu de navigation et éventuellement d'autres éléments importants tels que les liens de connexion ou de recherche.",
      "Le menu de navigation est une partie importante de la mise en page du site web. Il peut être situé dans l'en-tête ou dans la barre latérale et permet aux utilisateurs de naviguer facilement entre les différentes pages du site.",
      "Cette section est souvent placée en haut de la page d'accueil et présente généralement un grand visuel attractif accompagné d'un texte accrocheur. Cela permet d'attirer l'attention des visiteurs et de mettre en avant les éléments clés du site.",
      "C'est la partie centrale du site web où se trouve le contenu principal. Cela peut inclure du texte, des images, des vidéos, des articles de blog, des produits, etc. C'est la section principale que les visiteurs du site consultent généralement pour obtenir des informations.",
      `Le "Pré-footer" est une section située juste avant la zone du pied de page (footer) sur une page web. C'est un élément important de la mise en page d'un site, car il offre une transition visuelle entre le contenu principal et le bas de la page. Dans cette zone, on peut inclure divers éléments tels que des informations complémentaires, des liens importants, des boutons d'action, ou encore des appels à l'action pour inciter les visiteurs à effectuer une action spécifique.`,
      "Le pied de page se trouve en bas du site web et contient généralement des informations supplémentaires telles que les coordonnées, les liens vers les pages importantes, les informations de copyright, les liens vers les politiques de confidentialité ou les conditions d'utilisation, etc."
    ],
    part: [
      "Partie 1",
      "Partie 3",
      "Partie 5",
      "Partie 2",
      "Partie 4",
      "Partie 6"
    ],
    view: [
      "Générer",
      `<i class="bx bx-link"></i> Voir mon site`
    ],
    footer: [
      "Nous contacter",
      "Besoin d'aide ?",
      "Vous pouvez nous contacter par mail",
      `<a href="mailto:studiochatbot2@gmail.com?subject=Contact%sur%le%support">studiochatbot2@gmail.com</a>`,
      "Français",
      "Espagnol",
      "Anglais",
      `<a href="index.html">Accueil</a>`,
      `<a href="#generation">Générer</a>`,
      `<a href="#widget">Add-on</a>`,
      `<a href="menu_IDE.html">IDE</a>`,
      `<a href="condition.html">Politique de confidentialité</a>`
    ],
    perso: ["Personnalisé"]
  }
}



// Stocker les variables dans un objet
const variables = {
  animaux,
  objet,
  paysages,
  nourriture,
  technologie,
  architecture,
  personnes,
  vehicules,
  nature,
  art,
  musique,
  sport,
  films,
  livres,
  jeux,
  vacances,
  fetes,
  sciences,
  histoire,
  culture,
  voyage,
  education,
  sante,
  mode,
  economie,
  politique,
  religion,
  environnement,
  astronomie,
  fantastique,
  horreur,
  comedie,
  romance,
  action,
  thriller,
  drame,
  animation,
  documentaire,
  serie
};
const color_alias = {
  "Glassmorphisme": "Glassmorphisme",
  "Glassmorphism": "Glassmorphisme",
  "Vidriomorfismo": "Glassmorphisme",

  "Gradiant": "Gradiant",
  "Gradient": "Gradiant",
  "Gradiente": "Gradiant",

  "Noir": "Noir",
  "Black": "Noir",
  "Negro": "Noir",

  "Blanc": "Blanc",
  "White": "Blanc",
  "Blanco": "Blanc",

  "Couleur": "Couleur",
  "Color": "Couleur",
  "Color": "Couleur",

  "Transparent": "Transparent",
  "Transparent": "Transparent",
  "Transparente": "Transparent",

}
const siteTypeAliases = {
  // Agence de Design Graphique
  "Agence de Design Graphique": "Agence de Design Graphique",
  "Graphic Design Agency": "Agence de Design Graphique",
  "Agencia de Diseño Gráfico": "Agence de Design Graphique",

  // Cabinet d'Avocats
  "Cabinet d'Avocats": "Cabinet d'Avocats",
  "Law firm": "Cabinet d'Avocats",
  "Bufete de Abogados": "Cabinet d'Avocats",

  // Salon de Coiffure et Beauté
  "Salon de Coiffure et Beauté": "Salon de Coiffure et Beauté",
  "Hair and Beauty Salon": "Salon de Coiffure et Beauté",
  "Salón de Peluquería y Belleza": "Salon de Coiffure et Beauté",

  // Agence de Voyage
  "Agence de Voyage": "Agence de Voyage",
  "Travel Agency": "Agence de Voyage",
  "Agencia de Viajes": "Agence de Voyage",

  // Restaurant
  "Restaurant": "Restaurant",
  "Restaurant": "Restaurant",
  "Restaurante": "Restaurant",

  // Entreprise de Construction
  "Entreprise de Construction": "Entreprise de Construction",
  "Construction Company": "Entreprise de Construction",
  "Empresa de Construcción": "Entreprise de Construction",

  // Clinique Médicale
  "Clinique Médicale": "Clinique Médicale",
  "Medical Clinic": "Clinique Médicale",
  "Clínica Médica": "Clinique Médicale",

  // Magasin de Mode
  "Magasin de Mode": "Magasin de Mode",
  "Fashion Store": "Magasin de Mode",
  "Tienda de Moda": "Magasin de Mode",

  // Agence Immobilière
  "Agence Immobilière": "Agence Immobilière",
  "Real Estate Agency": "Agence Immobilière",
  "Agencia Inmobiliaria": "Agence Immobilière"
};
let type_site = [
  "Agence de Design Graphique",
  "Cabinet d'Avocats",
  "Salon de Coiffure et Beauté",
  "Agence de Voyage",
  "Restaurant",
  "Entreprise de Construction",
  "Clinique Médicale",
  "Magasin de Mode",
  "Agence Immobilière",
]
let thème_type_site = [
  "Transformez vos idées en réalité visuelle",
  "Votre justice, notre priorité",
  "Révélez votre beauté intérieure",
  "Voyager en sécurité",
  "Savourez chaque instant",
  "Construisons ensemble vos rêves",
  "Votre santé, notre engagement",
  "Style et élégance à portée de main",
  "Trouvez votre maison idéale",
]
let thème_btn_type_site = [
  "Découvrez nos créations",
  "Prenez rendez-vous",
  "Réservez votre séance",
  "Réservez un Vol",
  "Réservez une table",
  "Demandez un devis",
  "Prenez rendez-vous",
  "Découvrez nos collections",
  "Voir les offres",
]
let link_header_thème_site = [
  "Accueil¤Services¤Portfolio¤Équipe¤Blog¤Contact", // Agence de Design Graphique
  "Accueil¤À propos¤Domaines d'expertise¤Équipe¤Témoignages¤Contact", // Cabinet d'Avocats
  "Accueil¤Services¤Galerie¤Tarifs¤Avis¤Contact", // Salon de Coiffure et Beauté
  "Accueil¤Destinations¤Offres spéciales¤Blog¤Témoignages¤Contact", // Agence de Voyage
  "Accueil¤Menu¤Réservations¤Événements¤Galerie¤Contact", // Restaurant
  "Accueil¤Nos services¤Projets¤Témoignages¤Blog¤Contact", // Entreprise de Construction
  "Accueil¤À propos¤Services¤Équipe médicale¤Témoignages¤Contact", // Clinique Médicale
  "Accueil¤Nouveautés¤Femmes¤Hommes¤Promotions¤Contact", // Magasin de Mode
  "Accueil¤Annonces¤Acheter¤Louer¤À propos¤Contact" // Agence Immobilière
];
const type_contact_site = [
  "Contactez-nous pour discuter de vos projets de design et découvrir nos créations innovantes.", // Agence de Design Graphique
  "Prenez rendez-vous avec nos avocats experts pour obtenir des conseils juridiques personnalisés.", // Cabinet d'Avocats
  "Réservez votre séance de coiffure et beauté en ligne et bénéficiez de nos services professionnels.", // Salon de Coiffure et Beauté
  "Contactez-nous pour réserver votre prochain voyage et profiter de nos offres exclusives.", // Agence de Voyage
  "Réservez une table en ligne et venez savourer nos délicieux plats dans une ambiance chaleureuse.", // Restaurant
  "Demandez un devis gratuit pour vos projets de construction et bénéficiez de notre expertise.", // Entreprise de Construction
  "Prenez rendez-vous avec nos spécialistes pour des soins médicaux de qualité.", // Clinique Médicale
  "Découvrez nos collections tendance en nous contactant pour plus d'informations.", // Magasin de Mode
  "Voir les offres immobilières en nous contactant pour organiser une visite ou obtenir plus de détails." // Agence Immobilière
];
const type_about_site = [
  "Nous sommes une agence de design graphique passionnée par la création d'identités visuelles uniques et mémorables pour nos clients. Notre équipe de designers talentueux travaille en étroite collaboration avec vous pour transformer vos idées en réalité visuelle.", // Agence de Design Graphique
  "Notre cabinet d'avocats offre des services juridiques spécialisés et personnalisés pour répondre à vos besoins. Avec une expertise approfondie dans divers domaines du droit, nous nous engageons à défendre vos intérêts avec professionnalisme et intégrité.", // Cabinet d'Avocats
  "Bienvenue dans notre salon de coiffure et beauté, où nous vous offrons une expérience de soins personnalisés dans une ambiance relaxante. Nos stylistes professionnels sont dédiés à vous aider à révéler votre beauté naturelle.", // Salon de Coiffure et Beauté
  "Nous sommes une agence de voyage passionnée par la découverte du monde. Que vous cherchiez une aventure exotique, une escapade relaxante ou un voyage d'affaires, nous nous engageons à rendre chaque voyage mémorable et sans souci.", // Agence de Voyage
  "Notre restaurant vous accueille dans un cadre chaleureux et convivial, où la gastronomie rencontre l'hospitalité. Nous nous efforçons de vous offrir une expérience culinaire exceptionnelle avec des plats préparés à partir d'ingrédients frais et locaux.", // Restaurant
  "Nous sommes une entreprise de construction dédiée à la réalisation de projets de haute qualité. Avec des années d'expérience et une équipe de professionnels qualifiés, nous transformons vos visions architecturales en structures durables et esthétiques.", // Entreprise de Construction
  "Notre clinique médicale est engagée à fournir des soins de santé de qualité avec compassion et respect. Notre équipe de professionnels de la santé qualifiés est dédiée à votre bien-être et à votre santé, offrant une gamme complète de services médicaux.", // Clinique Médicale
  "Bienvenue dans notre magasin de mode, où nous vous proposons les dernières tendances et styles pour chaque occasion. Nous croyons que chaque vêtement raconte une histoire, et nous sommes ici pour vous aider à trouver la vôtre.", // Magasin de Mode
  "Notre agence immobilière est votre partenaire de confiance pour toutes vos transactions immobilières. Que vous cherchiez à acheter, vendre ou louer, notre équipe expérimentée est là pour vous guider à chaque étape du processus." // Agence Immobilière
];
const type_banner_hero = [
  "https://images.unsplash.com/photo-1498075702571-ecb018f3752d?q=80&w=1756&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1604928141064-207cea6f571f?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fHJlc3RhdXJhbnR8ZW58MHx8fHwxNjI5NDI2MjQ0&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]
const img_partenaire_type_site = [
  "https://imgs.search.brave.com/VWRVEeG5SF18XhJCHd3bU-YKm2PazNlBd0vAryoSfOg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZW1nLXNlcnZpY2Vz/Lm5ldC9pbnN0aXR1/dGVzL2luc3RpdHV0/ZTM4NjczL2xvZ29z/L2xvZ28ucG5n",
  "https://imgs.search.brave.com/mdNXa-OMWNSAME4cAi0ywqyg5u9Zhaimu4k3YeQhpRY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdG9y/YWdlLmxldHVkaWFu/dC5mci9lZHUvc2No/b29sQ2VudGVyLzY5/NTcvbG9nby1lY3Yt/Y3NjLXZlcnQtcnZi/LTItZm9uZC1ibGFu/Yy0yMjAxMjgwNTE2/MTIucG5n",
  "https://imgs.search.brave.com/l-3BMhyQIVeTJMy3SsmY-5OdvloNWdSgBqLCNaN2eUs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQyYTYyOWE2NTE1/YjFlMGFkNzVhZmEu/cG5n",
  "https://imgs.search.brave.com/0IajtB5WjBlmq21E3pr5fF4Hszwd-XAfpJPykNuMwKw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzEwNS0x/MDU3NTUxX3Zpc3Rh/cHJpbnQtbG9nby12/aXN0YXByaW50LWxv/Z28tcG5nLXRyYW5z/cGFyZW50LXBuZy5w/bmc",
  "https://imgs.search.brave.com/O5uiSNGVZ7re8U_eAIBzdASV_rI0X7PYPTGSn_2FA7g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9hZG9iZS1tYXgt/bG9nby5wbmc", // Agence de Design Graphique
  "https://imgs.search.brave.com/iWe5xS-0y9-y6uK4vZXeGwoT9TuI-k16_sMRj1_ke7k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/bm9pZC5jb20vaW1h/Z2VzL2xleGlzbmV4/aXMtbG9nby5wbmc",
  "https://imgs.search.brave.com/vitoB7otRLLcehJqBtBy9EJn4fcL5gCizJo1IA89l2s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pY29u/YXBlLmNvbS93cC1j/b250ZW50L3BuZ19s/b2dvX3ZlY3Rvci9m/b25kYXRpb24tYm5w/LXBhcmliYXMtbG9n/by5wbmc",
  "https://imgs.search.brave.com/OvoXSc8gK-ysHo6VAubBPmVBXlrISnvUNY2SGESakVg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2FiaW5ldC1kLWF2/b2NhdC5vcmcvd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDkv/bG9nby1jYWJpbmV0/LWQtYXZvY2F0LnBu/Zw",
  "https://imgs.search.brave.com/u7Djt2tfHAt8vTfvgxVvS9XYaX18MKR_U1rBxmtC0DY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MGZkN2NlZjEw/MTRjMGI1ZTQ5NDMu/cG5n",
  "https://imgs.search.brave.com/EX6RfIAoH-oIyIr0ZU2q5_3qZqEr86Bf4cGSSw3QkMs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YXNzYXMtdW5pdmVy/c2l0ZS5mci9zaXRl/cy9kZWZhdWx0L2Zp/bGVzL3N0eWxlcy91/bml2X2xvZ28vcHVi/bGljL2Fzc2FzLXVu/aXYtbG9nby1tYWlz/b24tc2NpZW5jZXMt/Z2VzdGlvbi5wbmc_/aXRvaz1NVC1UTzBL/Tw", // Cabinet d'Avocats
  "https://imgs.search.brave.com/MEyIwvB00mkFJRHlxAKKbfrLoFqaN7GDZ9xteBI7mNg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0wvTF9PcmVh/bF9Qcm9mZXNzaW9u/bmVsLWxvZ28tMjI0/QjlGQ0IwNi1zZWVr/bG9nby5jb20ucG5n",
  "https://imgs.search.brave.com/YPHmMnKsIRRHEdWFq24RDsvIbUItGJ0AILmouDFGVEg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dC5icmFuZGZldGNo/LmlvL2lkX0lScWkz/Z00vaWR1T0FfbEg5/bS5wbmc_dXBkYXRl/ZD0xNzEyMTExNjkw/NTIw",
  "https://imgs.search.brave.com/WyetV6EF9EpN15l9rtF6UinS9SeilNPbZMVvllPcgn0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1ODU4NzU5/N2luc3RhZ3JhbS1w/bmctaW1hZ2UucG5n",
  "https://imgs.search.brave.com/2m7QRq0ueyUXV7Jynnwp0mCIU9mnwYjkLCPg7nYSkdQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0kvaW5ub3Zh/dGl2ZS1zYWxvbi1s/b2dvLUUwN0IwQkMz/NkEtc2Vla2xvZ28u/Y29tLnBuZw",
  "https://imgs.search.brave.com/O9Dsnwzlb3DY0YU9IAKoagnUTNYTPCgYBuDo9DMt92U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ZWNkMTQ4ZGQwYTM5/NjAwMDRkNzQ0NzIu/cG5n",//Salon de Coiffure et Beauté
  "https://imgs.search.brave.com/6719bsn9WaPXmAqjQ9p0PXSD3YxsXh7Z5hWJzRITzvY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODdiNTE1ZTQ0MDYw/OTA5YWE2MDNhODgu/cG5n",
  "https://imgs.search.brave.com/nfZ_fmKV47oaE5i9aQaa5qmpobQyLSqtpcy-7bh13iU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODlhNDc0ZTVhYTYy/OTNhNGFhYzQ4YjUu/cG5n",
  "https://imgs.search.brave.com/v17Xhppt4HwwrsQBK2HBXVZBDRMsG2tRsYDNordtn_k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pY29u/YXBlLmNvbS93cC1j/b250ZW50L3BuZ19s/b2dvX3ZlY3Rvci92/aWF0b3ItbG9nby5w/bmc",
  "https://imgs.search.brave.com/NNJ75o-_WR4Cpw8ow3g5ByY4fvs--TzQbCUJ1vlOy1k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dC5icmFuZGZldGNo/LmlvL2lkNTdtWFVr/R2wvaWRHT3NsQWJm/ei5wbmc_dXBkYXRl/ZD0xNjg4NTI2MDk2/ODEx",
  "https://imgs.search.brave.com/_4xTzXfyS7SownQc2MZc8KkjPEWRkp1IO6hzSOa6LrE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzA0L2hlcnR6LWxv/Z28ucG5n",//Agence de Voyage
  "https://imgs.search.brave.com/j7GoApEZVo6BhCnVfyrnt8-AKstHOkc39I1YOT3mZHM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1tYXJxdWVzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wMy9VYmVyLUVh/dHMtTG9nby01MDB4/MjgzLnBuZw",
  "https://imgs.search.brave.com/KNZWAvZ6uEYZCUyGyDLMKnHtBkAOKiMaixCtoNWLZJ0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDMvTWNEb25h/bGRzX0xvZ29fMTk2/OC03MDB4NDc2LnBu/Zw",
  "https://imgs.search.brave.com/Ggtth-JqA-bVBmwNyXx5fFy5VmTuUQZoGQw1wVOtDDc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0MvQ3Vpc2lu/ZV9kZV9GcmFuY2Ut/bG9nby1EMzRFRjI0/NDk1LXNlZWtsb2dv/LmNvbS5wbmc",
  "https://imgs.search.brave.com/3da8GQQbUYvCsoNm6YsW0BulJd2NNBT2uJAEWi2YNP8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9saXJw/LmNkbi13ZWJzaXRl/LmNvbS9kODVjYTMx/Ni9kbXMzcmVwL211/bHRpL29wdC9Mb2dv/X1dlYnNlbGZfZ3Jl/eS0xOTIwdy5wbmc",
  "https://imgs.search.brave.com/a6j79E7MUztSjln32jN4f4M8gBbaZq7q5hnTqtbAqpo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzA3/L0tGQy1sb2dvLTE5/NTIlRTIlODAlOTMx/OTc4LTUwMHgyODEu/cG5n",//Restaurant
  "https://imgs.search.brave.com/UtMfb1yyX1fgzSXxfoVPEGfugRAkoQL_tU8rW1Hoaz0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1tYXJxdWVzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wMS9TYWludC1H/b2JhaW4tTG9nby01/MDB4MzEzLnBuZw",
  "https://imgs.search.brave.com/ylM4-pUPzpSfiA_L7d_kWzlSX1D45gs__cAzseJgAtQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2Zvc3RlcnMt/bG9nby1wbmctZm9z/dGVyLXMtbG9nby0x/MDAwLnBuZw",
  "https://imgs.search.brave.com/vitoB7otRLLcehJqBtBy9EJn4fcL5gCizJo1IA89l2s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pY29u/YXBlLmNvbS93cC1j/b250ZW50L3BuZ19s/b2dvX3ZlY3Rvci9m/b25kYXRpb24tYm5w/LXBhcmliYXMtbG9n/by5wbmc",
  "https://imgs.search.brave.com/QsbUhszmXI2adDcsyOMAUK9p9jCbJgsxYc5gP7I-AX4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDgvU2VjdXJp/dGFzX2xvZ28tNzAw/eDQwMy5wbmc",
  "https://imgs.search.brave.com/H14V-0JHsSEtXU6LDX-g8ynteY46LEObMTNjUoJ_xDM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0YvZmVkZXJh/dGlvbi1mcmFuY2Fp/c2UtZGUtdGVubmlz/LWxvZ28tNzkwN0Mx/Qjg4OC1zZWVrbG9n/by5jb20ucG5n",//Entreprise de Construction
  "https://imgs.search.brave.com/LfbLwBvTWgCdm2DqBmuwyG9uM1WhTlu9x54fMJP7XNg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9tZWR0cm9uaWMt/bG9nby5wbmc",
  "https://imgs.search.brave.com/6p0zPVNWrlu091xhc88mIyW01YRf7QbgOxykU9kuCH0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDcvQVhBX2xv/Z29fbG9nb3R5cGUt/NzAweDcwMC5wbmc",
  "https://imgs.search.brave.com/W4lzi8aplEuwqn7pzifCvlCCCinSXXIX1LpspjLRUJM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMTEvU2Fub2Zp/X2xvZ29fc3ltYm9s/LTcwMHg1ODQucG5n",
  "https://imgs.search.brave.com/SqvMfm6rzumIcfSRs8o5IW2LsuPv5M9gmH91kiiW8Ig/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZG9jdG9saWIu/ZnIvaW1nL2Ntcy9s/b2dvLWJsdWUucG5n",
  "https://imgs.search.brave.com/WrXlxrM2Xpga91lYCEkL0fhbCJltRFBRQVGZMH7BcrU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWxvZ292ZWN0/b3JzLm5ldC93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOC8wMy9D/ZXJuZXItQ29ycG9y/YXRpb24tbG9nby5w/bmc",//Clinique Médicale
  "https://imgs.search.brave.com/viFjf4xiPzMK98VKD8N4ZiUgpnPcGSWFx_xZ26_8zvE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvWmFyYS1Mb2dv/LTcwMHgzOTQucG5n",
  "https://imgs.search.brave.com/MbFPV2jbLJqIb-0UUBD-XUExUCMAgzmkbpaKC_ZArL4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA4/L1Nob3BpZnktTG9n/by01MDB4MzEzLnBu/Zw",
  "https://imgs.search.brave.com/fML42Nt3NZ827qsSbtQdvswl9q6-xNHUAu4HWfcNWlE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mYXNo/aW9ud2Vla29ubGlu/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTYvMDEvRldP/LWxvZ28tVkVSVElD/QUwtd2hpdGUtdHJh/bnNwYXJlbnQtMS5w/bmc",
  "https://imgs.search.brave.com/GSOzcIuiT87cd3OGBrAUvL5-f44iv6F6qlfjGMO8EGk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE4/LzAzL2RlZXplci1s/b2dvLTkucG5n",
  "https://imgs.search.brave.com/8lDNcxvfQZnAyfjNi5wAIE1Z6uAJ7pcbwcmNWx8Fmy0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0EvYXRlbGll/ci1jb2xvZ25lLWxv/Z28tQjMyOUExMUM3/OS1zZWVrbG9nby5j/b20ucG5n",//Magasin de Mode
  "https://imgs.search.brave.com/rytfB2bj8FHmJWjPW3M0sULXm09H3xraJOqGIB95nNU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0EvYWdlbmNl/LWltcGFjdC1sb2dv/LUZFNzg1NEU3Qjkt/c2Vla2xvZ28uY29t/LnBuZw",
  "https://imgs.search.brave.com/rZ0qkiFXKQO5PvObV4sAmhWdkRD-w8Y2n5Nmmn-vWog/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9jcmVkaXQtYWdy/aWNvbGUtbG9nby0x/LnBuZw",
  "https://imgs.search.brave.com/sX1gCgF5qBf1WvFxpiti9-OLh9Zkj7g_TUaPCTKF-Bo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0EvYXJjaGl0/ZWN0cy1lbmdpbmVl/cnMtbG9nby1DMzA3/MzZGODhFLXNlZWts/b2dvLmNvbS5wbmc",
  "https://imgs.search.brave.com/7kSbc1bEgDfkB12Igq1JScuOUpln5WOrOLqofaEefX0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/emFybGEuY29tL2lt/YWdlcy96YXJsYS1m/cmFuY2Utbm90YWly/ZS0xeDEtMjQwMHgy/NDAwLTIwMjEwNjAz/LW03d3Q0M3F5Mzk2/cHY2cmtndDhyLnBu/Zz9jcm9wPTE6MSxz/bWFydCZ3aWR0aD0y/NTAmZHByPTI",
  "https://imgs.search.brave.com/_s4Lw3jAPR63OvUpLQS8Jjjqc3NuYAMUHIeppyCvdbg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2M2L0NCUkVfTG9n/by5wbmc",//Agence Immobilière
]

const img_type_site = [
  "https://images.unsplash.com/photo-1530105953482-0c817a07f9f2?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", // Agence de Design Graphique
  "https://images.unsplash.com/photo-1607525456241-437b2d63e1fa?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", // Cabinet d'Avocats
  "https://images.unsplash.com/photo-1568485260142-7cc4c7ba1d58?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", // Salon de Coiffure et Beauté
  "https://images.unsplash.com/photo-1541673514447-2b97204911f3?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", // Agence de Voyage
  "https://images.unsplash.com/photo-1583914202224-86c990b86f94?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", // Restaurant
  "https://images.unsplash.com/photo-1529236187763-66a5e88c8fe2?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", // Entreprise de Construction
  "https://images.unsplash.com/photo-1607091897539-9603828799b1?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", // Clinique Médicale
  "https://images.unsplash.com/photo-1597745437303-1ed542820a4f?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", // Magasin de Mode
  "https://images.unsplash.com/photo-1609420577183-6548b485f076?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", // Agence Immobilière
];
const qr_type_site = [
  // Agence de Design Graphique
  [
    {
      question: "Quels services proposez-vous en tant qu'agence de design graphique ?",
      réponse: "Nous offrons une gamme complète de services de design graphique incluant la création de logos, d'identités visuelles, de supports imprimés et numériques, ainsi que la conception de sites web et d'interfaces utilisateur."
    },
    {
      question: "Comment puis-je démarrer un projet avec votre agence de design ?",
      réponse: "Pour démarrer un projet, vous pouvez nous contacter par téléphone ou via notre formulaire de contact sur notre site web. Nous planifierons ensuite une réunion initiale pour discuter de vos besoins et objectifs."
    },
    {
      question: "Quelle est votre approche créative pour les projets de design ?",
      réponse: "Notre approche créative est centrée sur une compréhension approfondie de votre marque et de votre public cible. Nous combinons créativité et stratégie pour concevoir des solutions qui captivent et engagent votre audience."
    }
  ],

  // Cabinet d'Avocats
  [
    {
      question: "Quels domaines de droit couvrez-vous dans votre cabinet ?",
      réponse: "Nous sommes spécialisés dans divers domaines du droit, y compris le droit des affaires, le droit de la famille, le droit pénal, et le droit immobilier. Nos avocats expérimentés offrent des conseils juridiques personnalisés dans chacun de ces domaines."
    },
    {
      question: "Comment puis-je prendre rendez-vous pour une consultation juridique ?",
      réponse: "Pour prendre rendez-vous, vous pouvez nous appeler directement ou utiliser notre système de prise de rendez-vous en ligne sur notre site web. Nous nous efforçons de répondre rapidement à toutes les demandes."
    },
    {
      question: "Quelle est votre approche envers la confidentialité des informations des clients ?",
      réponse: "La confidentialité est une priorité absolue pour nous. Nous respectons strictement toutes les règles d'éthique professionnelle et protégeons la confidentialité de toutes les informations que vous partagez avec notre cabinet."
    }
  ],

  // Salon de Coiffure et Beauté
  [
    {
      question: "Quels sont vos services principaux en salon de coiffure et beauté ?",
      réponse: "Nous offrons une gamme complète de services de coiffure, de soins de la peau, d'onglerie, ainsi que des services de maquillage et de coiffure pour des occasions spéciales."
    },
    {
      question: "Comment puis-je réserver un rendez-vous en ligne ?",
      réponse: "Vous pouvez facilement réserver un rendez-vous en ligne via notre site web ou notre application mobile. Choisissez le service souhaité, sélectionnez un créneau horaire disponible, et confirmez votre rendez-vous en quelques clics."
    },
    {
      question: "Quelles sont vos mesures d'hygiène et de sécurité ?",
      réponse: "Nous suivons strictement toutes les normes d'hygiène et de sécurité recommandées. Tous nos outils et équipements sont désinfectés après chaque utilisation, et nos stylistes et esthéticiennes respectent des protocoles stricts pour assurer votre sécurité."
    }
  ],

  // Agence de Voyage
  [
    {
      question: "Quels services proposez-vous en tant qu'agence de voyage ?",
      réponse: "Nous proposons des services de réservation de vols, d'hébergement, de circuits touristiques, et de conseils personnalisés pour votre voyage. Notre objectif est de rendre votre expérience de voyage aussi agréable et sans souci que possible."
    },
    {
      question: "Comment puis-je obtenir des informations sur vos offres de voyage ?",
      réponse: "Pour obtenir des informations sur nos offres de voyage, vous pouvez visiter notre site web où nous présentons nos destinations, itinéraires et promotions actuelles. Vous pouvez également nous contacter directement par téléphone ou par email."
    },
    {
      question: "Quels sont les avantages de réserver avec votre agence de voyage ?",
      réponse: "En réservant avec nous, vous bénéficiez de notre expertise locale, de conseils personnalisés, et d'un soutien continu tout au long de votre voyage. Nous nous assurons que chaque détail de votre voyage soit pris en charge pour une expérience sans stress."
    }
  ],

  // Restaurant
  [
    {
      question: "Quel type de cuisine propose votre restaurant ?",
      réponse: "Notre restaurant propose une cuisine variée, allant des plats locaux traditionnels à des créations gastronomiques contemporaines. Nous nous engageons à utiliser des ingrédients frais et de qualité pour offrir une expérience culinaire exceptionnelle."
    },
    {
      question: "Comment puis-je faire une réservation dans votre restaurant ?",
      réponse: "Pour réserver une table, vous pouvez nous appeler directement ou utiliser notre système de réservation en ligne sur notre site web. Nous recommandons de réserver à l'avance, surtout les weekends et pendant les périodes de haute affluence."
    },
    {
      question: "Proposez-vous des options pour les régimes alimentaires spécifiques ?",
      réponse: "Oui, nous proposons des options végétariennes, végétaliennes et sans gluten dans notre menu. Notre équipe est également disponible pour répondre à d'autres besoins alimentaires spécifiques de nos clients."
    }
  ],

  // Entreprise de Construction
  [
    {
      question: "Quels types de projets de construction prenez-vous en charge ?",
      réponse: "Nous nous spécialisons dans la construction résidentielle, commerciale et industrielle. Nos services incluent la gestion de projet, la construction neuve, la rénovation, ainsi que des services d'entretien et de réparation."
    },
    {
      question: "Comment puis-je demander un devis pour mon projet de construction ?",
      réponse: "Pour obtenir un devis gratuit, vous pouvez nous contacter par téléphone ou remplir notre formulaire de demande de devis sur notre site web. Nous évaluerons vos besoins et vous fournirons une estimation détaillée."
    },
    {
      question: "Quelles sont vos certifications et assurances pour les projets de construction ?",
      réponse: "Nous sommes pleinement agréés et assurés pour tous nos projets de construction. Nous respectons les normes de sécurité et de qualité les plus strictes pour assurer la satisfaction et la tranquillité d'esprit de nos clients."
    }
  ],

  // Clinique Médicale
  [
    {
      question: "Quels services médicaux proposez-vous dans votre clinique ?",
      réponse: "Nous offrons une large gamme de services médicaux incluant les consultations générales, les soins spécialisés, les examens diagnostiques, et les services de santé préventive pour tous les âges."
    },
    {
      question: "Comment puis-je prendre rendez-vous pour une consultation médicale ?",
      réponse: "Pour prendre rendez-vous, vous pouvez nous appeler ou utiliser notre système de prise de rendez-vous en ligne sur notre site web. Nous nous engageons à offrir des rendez-vous dans les délais les plus courts possibles."
    },
    {
      question: "Quelles sont vos mesures pour assurer la sécurité des patients dans votre clinique ?",
      réponse: "Nous avons mis en place des protocoles rigoureux pour assurer la sécurité de nos patients, y compris la désinfection régulière des installations, le port d'équipements de protection par notre personnel, et la distanciation sociale dans nos espaces d'attente."
    }
  ],

  // Magasin de Mode
  [
    {
      question: "Quelles marques et collections proposez-vous dans votre magasin de mode ?",
      réponse: "Nous proposons une sélection soigneusement choisie de marques de mode renommées ainsi que des collections exclusives qui reflètent les dernières tendances. Notre objectif est de vous offrir un choix diversifié qui répond à tous les styles et préférences."
    },
    {
      question: "Comment puis-je savoir si un article spécifique est disponible dans votre magasin ?",
      réponse: "Vous pouvez vérifier la disponibilité d'un article spécifique en nous contactant directement par téléphone ou en visitant notre magasin. Nous sommes également disponibles pour vous fournir des recommandations personnalisées et des conseils sur les dernières tendances."
    },
    {
      question: "Offrez-vous des services de conseil en stylisme ou d'essayage personnalisé ?",
      réponse: "Oui, nous offrons des services de conseil en stylisme pour vous aider à trouver les tenues parfaites pour toute occasion. Nos stylistes sont là pour vous offrir une expérience de shopping personnalisée et professionnelle."
    }
  ],

  // Agence Immobilière
  [
    {
      question: "Quels types de biens immobiliers proposez-vous à la vente ou à la location ?",
      réponse: "Nous proposons une large gamme de biens immobiliers incluant des maisons, des appartements, des terrains et des propriétés commerciales. Notre équipe est là pour vous guider à chaque étape de votre projet immobilier."
    },
    {
      question: "Comment puis-je organiser une visite pour un bien immobilier qui m'intéresse ?",
      réponse: "Pour organiser une visite, vous pouvez nous contacter directement par téléphone ou remplir notre formulaire de demande de visite sur notre site web. Nous planifierons une visite selon vos disponibilités."
    },
    {
      question: "Quelles sont vos stratégies pour aider les clients à vendre ou louer leur propriété ?",
      réponse: "Nous utilisons une combinaison de marketing digital efficace, de réseautage local et d'expertise du marché pour maximiser la visibilité et l'attrait de votre propriété. Nous sommes déterminés à obtenir les meilleurs résultats pour nos clients."
    }
  ]
];
const features = {
  "Agence de Design Graphique": {
    gratuit: [
      "Consultation initiale gratuite",
      "Accès à des ressources de design basiques",
      "Modèles prédéfinis pour démarrer rapidement",
      "Support par email",
      "Publication limitée de projets",
    ],
    moyen: [
      "Consultations régulières avec un designer",
      "Accès à une bibliothèque étendue de ressources de design",
      "Personnalisation avancée des projets",
      "Support prioritaire",
      "Publication de projets illimitée",
      "Accès à des outils de collaboration en ligne",
    ],
    premium: [
      "Consultations personnalisées avec un designer principal",
      "Accès exclusif à des ressources premium et à des technologies de pointe",
      "Création de design haut de gamme sur mesure",
      "Support dédié 24/7",
      "Publication de projets prioritaires",
      "Accès à des outils avancés de gestion de projet et de suivi",
      "Participation à des événements exclusifs et des webinaires",
    ],
    prix_gratuit: [
      "0.00"
    ],
    prix_moyen: [
      "5.99"
    ],
    prix_premium: [
      "9.99"
    ],
  },

  "Cabinet d'Avocats": {
    gratuit: [
      "Consultation initiale gratuite",
      "Conseils juridiques de base",
      "Support par email",
      "Accès à des ressources juridiques en ligne",
    ],
    moyen: [
      "Consultations avec un avocat spécialisé",
      "Analyse approfondie des cas juridiques",
      "Représentation lors des procédures légales",
      "Support prioritaire",
      "Accès à des documents juridiques standardisés",
    ],
    premium: [
      "Consultations personnalisées avec un avocat principal",
      "Accès exclusif à des conseils juridiques stratégiques",
      "Représentation légale dédiée",
      "Support dédié 24/7",
      "Accès à des ressources juridiques premium",
      "Participation à des événements juridiques et séminaires",
    ],
    prix_gratuit: [
      "0.00"
    ],
    prix_moyen: [
      "8.99"
    ],
    prix_premium: [
      "14.99"
    ],
  },

  "Salon de Coiffure et Beauté": {
    gratuit: [
      "Consultation initiale gratuite",
      "Coupe de cheveux de base",
      "Produits de beauté standard",
      "Support par email",
    ],
    moyen: [
      "Consultations personnalisées avec un coiffeur",
      "Services de coiffure avancés",
      "Soins de beauté spécialisés",
      "Support prioritaire",
      "Accès à des produits de beauté de qualité supérieure",
    ],
    premium: [
      "Consultations privées avec un coiffeur principal",
      "Soins de coiffure et de beauté de luxe",
      "Produits exclusifs et traitements spéciaux",
      "Support dédié 24/7",
      "Accès à des services VIP et événements spéciaux",
    ],
    prix_gratuit: [
      "0.00"
    ],
    prix_moyen: [
      "12.99"
    ],
    prix_premium: [
      "19.99"
    ],
  },

  "Agence de Voyage": {
    gratuit: [
      "Consultation initiale gratuite",
      "Recherche de destinations de base",
      "Offres promotionnelles par email",
      "Support par email",
      "Accès limité aux itinéraires et aux informations sur les voyages",
    ],
    moyen: [
      "Consultations régulières avec un conseiller en voyage",
      "Accès à une large gamme de destinations",
      "Personnalisation des itinéraires de voyage",
      "Support prioritaire",
      "Accès complet aux informations sur les voyages et aux recommandations",
      "Accès à des outils de réservation en ligne",
    ],
    premium: [
      "Consultations personnalisées avec un expert voyage",
      "Accès exclusif à des offres premium et à des expériences uniques",
      "Conception d'itinéraires de luxe sur mesure",
      "Support dédié 24/7",
      "Accès prioritaire aux réservations et aux services VIP",
      "Accès à des événements et expériences exclusifs",
    ],
    prix_gratuit: [
      "0.00"
    ],
    prix_moyen: [
      "6.99"
    ],
    prix_premium: [
      "12.99"
    ],
  },

  "Restaurant": {
    gratuit: [
      "Consultation initiale gratuite",
      "Menu de base et informations sur les plats",
      "Offres spéciales par email",
      "Support par email",
    ],
    moyen: [
      "Consultations avec un chef spécialisé",
      "Menu étendu avec options personnalisées",
      "Gestion des réservations en ligne",
      "Support prioritaire",
      "Accès à des recommandations culinaires exclusives",
    ],
    premium: [
      "Consultations privées avec le chef principal",
      "Menus dégustation et plats exclusifs",
      "Expériences gastronomiques personnalisées",
      "Support dédié 24/7",
      "Accès à des événements culinaires exclusifs",
    ],
    prix_gratuit: [
      "0.00"
    ],
    prix_moyen: [
      "9.99"
    ],
    prix_premium: [
      "16.99"
    ],
  },

  "Entreprise de Construction": {
    gratuit: [
      "Consultation initiale gratuite",
      "Estimation de base des projets",
      "Conseils généraux en construction",
      "Support par email",
    ],
    moyen: [
      "Consultations avec un architecte ou un ingénieur",
      "Planification détaillée des projets",
      "Supervision des travaux de construction",
      "Support prioritaire",
      "Accès à des matériaux de construction de qualité supérieure",
    ],
    premium: [
      "Consultations personnalisées avec un architecte principal",
      "Gestion complète de projet de construction",
      "Utilisation de technologies de construction avancées",
      "Support dédié 24/7",
      "Accès à des fournisseurs et des partenaires exclusifs",
      "Participation à des événements de l'industrie de la construction",
    ],
    prix_gratuit: [
      "0.00"
    ],
    prix_moyen: [
      "19.99"
    ],
    prix_premium: [
      "29.99"
    ],
  },

  "Clinique Médicale": {
    gratuit: [
      "Consultation initiale gratuite",
      "Examens médicaux de base",
      "Prescriptions standard",
      "Support par email",
    ],
    moyen: [
      "Consultations avec un médecin spécialisé",
      "Examens et tests médicaux approfondis",
      "Traitements médicaux spécialisés",
      "Support prioritaire",
      "Accès à des prescriptions et traitements avancés",
    ],
    premium: [
      "Consultations privées avec un médecin principal",
      "Soins médicaux personnalisés de haute qualité",
      "Accès à des technologies médicales avancées",
      "Support dédié 24/7",
      "Accès à des services de santé exclusifs et spécialisés",
      "Participation à des conférences médicales et séminaires",
    ],
    prix_gratuit: [
      "0.00"
    ],
    prix_moyen: [
      "12.99"
    ],
    prix_premium: [
      "24.99"
    ],
  },

  "Magasin de Mode": {
    gratuit: [
      "Consultation initiale gratuite",
      "Accès aux articles de mode de base",
      "Offres promotionnelles par email",
      "Support par email",
    ],
    moyen: [
      "Consultations avec un styliste professionnel",
      "Accès à une large gamme d'articles de mode",
      "Conseils de style personnalisés",
      "Support prioritaire",
      "Accès à des collections exclusives et à des marques de créateurs",
    ],
    premium: [
      "Consultations privées avec un styliste principal",
      "Accès anticipé aux nouvelles collections et tendances",
      "Expérience shopping VIP avec des services personnalisés",
      "Support dédié 24/7",
      "Accès à des événements de mode exclusifs",
      "Participation à des défilés de mode et soirées VIP",
    ],
    prix_gratuit: [
      "0.00"
    ],
    prix_moyen: [
      "9.99"
    ],
    prix_premium: [
      "19.99"
    ],
  },

  "Agence Immobilière": {
    gratuit: [
      "Consultation initiale gratuite",
      "Recherche de biens immobiliers de base",
      "Alertes email pour les nouvelles propriétés",
      "Support par email",
    ],
    moyen: [
      "Consultations avec un agent immobilier professionnel",
      "Accès à une large gamme de biens immobiliers",
      "Visites guidées des propriétés",
      "Support prioritaire",
      "Accès à des informations détaillées sur les propriétés",
    ],
    premium: [
      "Consultations privées avec un agent immobilier principal",
      "Accès anticipé à des propriétés exclusives",
      "Gestion personnalisée de l'achat ou de la vente de propriétés",
      "Support dédié 24/7",
      "Accès à des offres immobilières VIP",
      "Participation à des événements immobiliers exclusifs",
    ],
    prix_gratuit: [
      "0.00"
    ],
    prix_moyen: [
      "14.99"
    ],
    prix_premium: [
      "29.99"
    ],
  },


  // Ajoutez ici d'autres types de sites avec leurs fonctionnalités respectives
};
const video_type_site = [
  ""
]
const phrase_h1_p = [
  {
    type: "Agence de Design Graphique",
    h1: "Donnez Vie à Vos Idées",
    p: "Notre agence de design graphique transforme vos concepts en créations visuelles percutantes. Que ce soit pour un logo, un site web, ou une campagne publicitaire, nous donnons vie à vos idées avec créativité et innovation."
  },
  {
    type: "Cabinet d'Avocats",
    h1: "Protection Juridique de Confiance",
    p: "Notre cabinet d'avocats offre des services juridiques spécialisés pour vous accompagner dans toutes vos démarches légales. Faites confiance à notre expertise pour défendre vos droits et vos intérêts avec professionnalisme et intégrité."
  },
  {
    type: "Salon de Coiffure et Beauté",
    h1: "Transformez Votre Style",
    p: "Bienvenue dans notre salon de coiffure et beauté, où chaque visite est une expérience de détente et de transformation. Nous vous proposons des soins personnalisés pour révéler la beauté naturelle de vos cheveux et de votre peau."
  },
  {
    type: "Agence de Voyage",
    h1: "Explorez le Monde avec Nous",
    p: "Découvrez des destinations de rêve et vivez des aventures inoubliables avec notre agence de voyage. Nous planifions chaque détail pour vous offrir des expériences uniques et sur mesure, adaptées à vos envies de découverte."
  },
  {
    type: "Restaurant",
    h1: "Un Voyage Culinaire Inoubliable",
    p: "Bienvenue dans notre restaurant où chaque plat est une œuvre d'art. Nous vous invitons à savourer des mets délicieux, préparés avec des ingrédients frais et de qualité, pour une expérience gastronomique exceptionnelle."
  },
  {
    type: "Entreprise de Construction",
    h1: "Construisez Votre Futur avec Nous",
    p: "Notre entreprise de construction est dédiée à la réalisation de vos projets, des plus simples aux plus ambitieux. Avec une expertise solide et un engagement envers l'excellence, nous construisons des structures durables et de haute qualité."
  },
  {
    type: "Clinique Médicale",
    h1: "Votre Santé, Notre Priorité",
    p: "À notre clinique médicale, nous nous engageons à fournir des soins de santé de qualité pour vous et votre famille. Notre équipe de professionnels est à votre écoute pour vous offrir des soins personnalisés et un suivi attentif."
  },
  {
    type: "Magasin de Mode",
    h1: "Exprimez Votre Style",
    p: "Découvrez les dernières tendances et exprimez votre style unique avec notre sélection de vêtements et accessoires. Notre magasin de mode vous propose des pièces variées pour toutes les occasions, afin que vous puissiez toujours être à la pointe de la mode."
  },
  {
    type: "Agence Immobilière",
    h1: "Trouvez la Maison de Vos Rêves",
    p: "Avec notre agence immobilière, trouvez la maison qui correspond à vos rêves et à vos besoins. Nous vous accompagnons dans chaque étape de votre projet immobilier pour vous offrir une expérience d'achat ou de location simple et sereine."
  }
];
const tree_D_type_site = [
  "https://prod.spline.design/41eOt60AkY5dRE22/scene.splinecode", // Ag De G
  "https://prod.spline.design/s-QV0QhvuT1YTIRZ/scene.splinecode", //CA
  "https://prod.spline.design/DwJWt2pmyRlcFvTe/scene.splinecode", //coif
  "https://prod.spline.design/kZmhVXqfjeadivqq/scene.splinecode", //Ag v
  "https://prod.spline.design/sE3TALvmZn13VCyP/scene.splinecode", //restau
  "https://prod.spline.design/ktQNELWlHSLJA7aH/scene.splinecode", //construction 
  "https://prod.spline.design/li6h3ZT0DQ1VKZih/scene.splinecode", //clinique 
  "https://prod.spline.design/HvoPFurQird19jVN/scene.splinecode", //mode 
  "https://prod.spline.design/9GjFfGq2Gg3TXW50/scene.splinecode", //Ag I
]
const link_map = [
  {
    type: "Agence de Design Graphique",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.990005636551!2d2.347059815674935!3d48.85467637928714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d67e10313f%3A0xa76f94b8f110ff80!2sAgence%20de%20Design%20Graphique!5e0!3m2!1sfr!2sfr!4v1628510106142!5m2!1sfr!2sfr"
  },
  {
    type: "Cabinet d'Avocats",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.094870939645!2d4.834269115650874!3d45.7640439791057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea5171f476b3%3A0x5a8e4e8985c29a85!2sCabinet%20d%27Avocats!5e0!3m2!1sfr!2sfr!4v1628510156543!5m2!1sfr!2sfr"
  },
  {
    type: "Salon de Coiffure et Beauté",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.4441108048335!2d-0.5791806850978397!3d44.83778937909838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bfc5e83ef108ab%3A0x112e02f657e5ad87!2sSalon%20de%20Coiffure%20et%20Beaut%C3%A9!5e0!3m2!1sfr!2sfr!4v1628510184392!5m2!1sfr!2sfr"
  },
  {
    type: "Agence de Voyage",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.8884541814147!2d7.261953315561275!3d43.69909497911978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd9f27b5c9b69%3A0xb7dfc7512a7c70b3!2sAgence%20de%20Voyage!5e0!3m2!1sfr!2sfr!4v1628510216231!5m2!1sfr!2sfr"
  },
  {
    type: "Restaurant",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.9385735151047!2d5.379929815555092!3d43.29648297913511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bff7eefd10c7%3A0x8a1a3c7b5f5fcd36!2sRestaurant!5e0!3m2!1sfr!2sfr!4v1628510245025!5m2!1sfr!2sfr"
  },
  {
    type: "Entreprise de Construction",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.4815231644984!2d1.4436723155425628!3d43.60465207912109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb0b019b7b7f%3A0x4b8f9cfd1f6c47a1!2sEntreprise%20de%20Construction!5e0!3m2!1sfr!2sfr!4v1628510273312!5m2!1sfr!2sfr"
  },
  {
    type: "Clinique Médicale",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.937594158018!2d3.0572565157010984!3d50.62924177950021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d5974e6f92ab%3A0x83812e93a98c2e9b!2sClinique%20M%C3%A9dicale!5e0!3m2!1sfr!2sfr!4v1628510300229!5m2!1sfr!2sfr"
  },
  {
    type: "Magasin de Mode",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.172695402304!2d7.749792515676106!3d48.58314847926851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c9d72e896ffd%3A0x2bd17b4c2a714cfa!2sMagasin%20de%20Mode!5e0!3m2!1sfr!2sfr!4v1628510332456!5m2!1sfr!2sfr"
  },
  {
    type: "Agence Immobilière",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.334270257345!2d-1.553621915555021!3d47.218637379121236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805efada7c0de85%3A0xa5f1c9b743144cb7!2sAgence%20Immobili%C3%A8re!5e0!3m2!1sfr!2sfr!4v1628510359983!5m2!1sfr!2sfr"
  }
];
const gallerieImg = [
  [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1576079289400-c64c9c07b1f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGhpc21lfGVufDB8MHwwfHx8Mg%3D%3D",
      title: "Projet 1: La nuit",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1611443609367-15892f03e715?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhcGhpc21lfGVufDB8MHwwfHx8Mg%3D%3D",
      title: "Projet 2: Un dragon",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhcGhpc21lfGVufDB8MHwwfHx8Mg%3D%3D",
      title: "Projet 3: Design Abstrait",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1614519679773-4ea6ddf17420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JhcGhpc21lfGVufDB8MHwwfHx8Mg%3D%3D",
      title: "Projet 4: Design Abstrait Fleur",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1543333750-7224e19d5e72?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Projet 5: Design Abstrait Numérique",
    }
  ],
  [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1576079289400-c64c9c07b1f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGhpc21lfGVufDB8MHwwfHx8Mg%3D%3D",
      title: "Projet 1: La nuit",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1611443609367-15892f03e715?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhcGhpc21lfGVufDB8MHwwfHx8Mg%3D%3D",
      title: "Projet 2: Un dragon",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhcGhpc21lfGVufDB8MHwwfHx8Mg%3D%3D",
      title: "Projet 3: Design Abstrait",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1614519679773-4ea6ddf17420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JhcGhpc21lfGVufDB8MHwwfHx8Mg%3D%3D",
      title: "Projet 4: Design Abstrait Fleur",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1543333750-7224e19d5e72?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Projet 5: Design Abstrait Numérique",
    }
  ],

];
