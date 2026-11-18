/* ============================================================
   VÉLOCITÉ MOTORS — Données du site (fictives mais cohérentes)
   Marques et modèles 100 % imaginaires.
   ============================================================ */
"use strict";

const VM = {
  infos: {
    nom: "Vélocité Motors",
    ville: "Lille",
    adresse: "24 avenue du Peuple Belge",
    cp: "59000",
    ville2: "Lille",
    tel: "+33 1 99 00 32 10",
    telAffiche: "01 99 00 32 10",
    email: "matricestudio@protonmail.com",
    horaires: [
      { j: "Lundi – Vendredi", h: "08 h 30 – 12 h 30 · 14 h – 19 h" },
      { j: "Samedi", h: "09 h – 18 h (sans interruption)" },
      { j: "Dimanche", h: "Fermé" },
    ],
    atelierHoraires: [
      { j: "Lundi – Vendredi", h: "08 h – 12 h 30 · 13 h 30 – 18 h" },
      { j: "Samedi", h: "09 h – 12 h 30 (entretien rapide uniquement)" },
      { j: "Dimanche", h: "Fermé" },
    ],
  },

  marques: {
    aurelis: {
      nom: "Aurelis",
      origine: "France · depuis 1954",
      signature: "L'élégance à la française",
      logo: "assets/logos/aurelis.svg",
      desc: "Marque premium tricolore, Aurelis dessine des berlines, SUV et coupés raffinés où le confort prime sans jamais sacrifier le plaisir de conduire.",
    },
    borgvik: {
      nom: "Borgvik",
      origine: "Suède · depuis 2009",
      signature: "L'électrique, simplement",
      logo: "assets/logos/borgvik.svg",
      desc: "Née en Scandinavie, Borgvik conçoit des véhicules 100 % électriques épurés et intelligents, pensés pour les climats exigeants comme pour la planète.",
    },
    tessari: {
      nom: "Tessari",
      origine: "Italie · depuis 1962",
      signature: "La passion à l'état pur",
      logo: "assets/logos/tessari.svg",
      desc: "Constructeur de Modène, Tessari perpétue l'art des moteurs atmosphériques et des lignes enfiévrées : chaque modèle est une œuvre qui respire la course.",
    },
  },

  /* ======================= GAMME NEUVE ======================= */
  modeles: [
    {
      slug: "aurelis-saphir",
      marque: "aurelis",
      nom: "Saphir",
      carrosserie: "Berline",
      accroche: "La berline executive qui avale les autoroutes comme les boulevards.",
      desc: "Avec son habitacle feutré de cuir bi-ton, sa suspension pilotée et son insonorisation digne d'un cabinet d'acoustique, la Saphir transforme chaque trajet en salon roulant. Son bloc combiné de 215 ch la rend aussi à l'aise en ville qu'à 130 km/h sur autoroute.",
      img: "assets/img/cars/aur-saphir.webp",
      imgAlt: "assets/img/cars/aur-saphir-nuit.webp",
      imgAlt2: "assets/img/cars/aur-etoile-street.webp",
      dimensions: { L: "4 932 mm", l: "1 893 mm", h: "1 452 mm", coffre: "530 L" },
      motorisations: [
        { nom: "Saphir 215", energie: "Essence", boite: "Automatique 8", puissance: "215 ch", conso: "6,7 L/100 km", zeroCent: "7,4 s", vitesse: "238 km/h", co2: "152 g/km", prixBase: 47900 },
        { nom: "Saphir 180 BlueDrive", energie: "Diesel", boite: "Automatique 8", puissance: "180 ch", conso: "4,9 L/100 km", zeroCent: "8,6 s", vitesse: "224 km/h", co2: "129 g/km", prixBase: 49200 },
        { nom: "Saphir Hybride 330 e", energie: "Hybride rechargeable", boite: "Automatique 8", puissance: "330 ch", conso: "1,8 L/100 km", zeroCent: "5,9 s", vitesse: "250 km/h", co2: "41 g/km", prixBase: 56800 },
      ],
      finitions: [
        { nom: "Business", prix: 0, equipements: ["Sellerie cuir/tissu « Loft »", "Écran tactile 12,3 »", "Régulateur adaptatif", "Feux Full LED", "Caméra de recul 360°", "Sièges chauffants avant"] },
        { nom: "Élégance", prix: 3800, equipements: ["Sellerie cuir « Milano »", "Sièges ventilés et massants", "Système audio AureSound 14 HP", "Suspension pilotée", "Affichage tête haute", "Hayon électrique"] },
        { nom: "Prestige", prix: 8600, equipements: ["Pack éclairage d'ambiance 64 couleurs", "Toit ouvrant panoramique", "Conduite semi-autonome Niv. 2+", "Sièges arrière électriques", "Système audio AureSound Signature 20 HP", "Jantes 20 » spécifiques"] },
      ],
      couleurs: [
        { nom: "Blanc Minéral", hex: "#E9E7E1", prix: 0, type: "solide" },
        { nom: "Gris Orage", hex: "#6E747C", prix: 720, type: "métal" },
        { nom: "Bleu Saphir", hex: "#1E3A5F", prix: 720, type: "métal" },
        { nom: "Noir Encre", hex: "#101418", prix: 720, type: "métal" },
        { nom: "Rouge Grenat", hex: "#7A1F2B", prix: 1150, type: "nacré" },
        { nom: "Vert Empire", hex: "#2E4B3C", prix: 1150, type: "nacré" },
      ],
      jantes: [
        { nom: "Lumière 18 »", prix: 0, desc: "Alliage bicolore argent" },
        { nom: "Zéphyr 19 »", prix: 950, desc: "Alliage gris anthracite" },
        { nom: "Constellation 20 »", prix: 1800, desc: "Alliage usiné noir brillant" },
      ],
      interieurs: [
        { nom: "Loft Noir", prix: 0, desc: "Cuir/tissu anthracite, surpiqûres grises" },
        { nom: "Milano Sienne", prix: 2100, desc: "Cuir plein grain brun sienne, boiseries noyers" },
        { nom: "Milano Ivoire", prix: 2100, desc: "Cuir plein grain ivoire, boiseries frêne clair" },
      ],
      options: [
        { nom: "Toit ouvrant panoramique", prix: 1250, cat: "confort" },
        { nom: "Pack Hiver (volant + sièges chauffants AR)", prix: 640, cat: "confort" },
        { nom: "Attelage escamotable électrique", prix: 890, cat: "confort" },
        { nom: "Conduite semi-autonome Niv. 2+", prix: 1900, cat: "aide" },
        { nom: "Caméra 360° + aide au stationnement avancée", prix: 780, cat: "aide" },
        { nom: "AureSound Signature 20 HP", prix: 1100, cat: "multimédia" },
        { nom: "Peinture de protection céramique", prix: 690, cat: "protection" },
        { nom: "Tapis et tapis de coffre sur mesure", prix: 180, cat: "protection" },
      ],
    },
    {
      slug: "aurelis-onyx",
      marque: "aurelis",
      nom: "Onyx",
      carrosserie: "SUV 7 places",
      accroche: "Sept places, zéro compromis.",
      desc: "Le Onyx accueille sept passagers sans jamais entasser : trois vrais sièges arrière, un coffre de 705 L et des rangements partout. Sa garde au sol pilotée affronte les chemins de fortune, ses sièges massants apaisent les longues vacances.",
      img: "assets/img/cars/aur-onyx.webp",
      imgAlt: "assets/img/cars/aur-onyx-desert.webp",
      imgAlt2: "assets/img/cars/aur-onyx.webp",
      dimensions: { L: "4 986 mm", l: "1 976 mm", h: "1 742 mm", coffre: "705 L (5 places)" },
      motorisations: [
        { nom: "Onyx 240 Mild-Hybrid", energie: "Essence micro-hybride", boite: "Automatique 8", puissance: "240 ch", conso: "7,4 L/100 km", zeroCent: "7,7 s", vitesse: "215 km/h", co2: "168 g/km", prixBase: 44900 },
        { nom: "Onyx 200 BlueDrive", energie: "Diesel", boite: "Automatique 8", puissance: "200 ch", conso: "5,6 L/100 km", zeroCent: "9,1 s", vitesse: "207 km/h", co2: "147 g/km", prixBase: 47500 },
        { nom: "Onyx Hybride 385 e AWD", energie: "Hybride rechargeable", boite: "Automatique 8", puissance: "385 ch", conso: "2,1 L/100 km", zeroCent: "6,2 s", vitesse: "225 km/h", co2: "48 g/km", prixBase: 58900 },
      ],
      finitions: [
        { nom: "Famille", prix: 0, equipements: ["7 places (2+3+2)", "3 sièges ISOFIX", "Climatisation trizone", "Barres de toit", "Caméra de recul", "Jantes 18 »"] },
        { nom: "Voyage", prix: 4500, equipements: ["Sellerie cuir « Horizon »", "Sièges massants avant", "Toit panoramique", "Hayon électrique à détection", "Suspension pneumatique", "Pack remorquage 2 500 kg"] },
        { nom: "Aventure", prix: 7900, equipements: ["Transmission intégrale pilotée", "Garde au sol majorée +40 mm", "Platine de protection sous moteur", "Mode Tout-terrain dédié", "Jantes 20 » tout-chemin", "Éclairage tout-terrain"] },
      ],
      couleurs: [
        { nom: "Blanc Onyx", hex: "#EDEBE6", prix: 0, type: "solide" },
        { nom: "Argent Lune", hex: "#A8ABB0", prix: 720, type: "métal" },
        { nom: "Bleu Ardennes", hex: "#2C4A63", prix: 720, type: "métal" },
        { nom: "Noir Obsidienne", hex: "#121417", prix: 720, type: "métal" },
        { nom: "Terre de Sienne", hex: "#8C5B3F", prix: 1150, type: "nacré" },
      ],
      jantes: [
        { nom: "Massif 18 »", prix: 0, desc: "Alliage argent, pneus toutes saisons" },
        { nom: "Roc 20 »", prix: 1200, desc: "Alliage anthracite, flancs renforcés" },
        { nom: "Expédition 20 »", prix: 2100, desc: "Alliage usiné, look tout-terrain" },
      ],
      interieurs: [
        { nom: "Horizon Anthracite", prix: 0, desc: "Tissu technique déperlant, surpiqûres grises" },
        { nom: "Horizon Camel", prix: 1900, desc: "Cuir camel, placages frêne" },
        { nom: "Horizon Aventure", prix: 2400, desc: "Cuir et Alcantara, tapis tout-terrain" },
      ],
      options: [
        { nom: "Toit panoramique ouvrant", prix: 1350, cat: "confort" },
        { nom: "Pack Enfants (store, miroir, tablettes AR)", prix: 520, cat: "confort" },
        { nom: "Attelage escamotable 2 500 kg", prix: 980, cat: "confort" },
        { nom: "Conduite semi-autonome Niv. 2+", prix: 1900, cat: "aide" },
        { nom: "Barres de toit transversales renforcées", prix: 420, cat: "confort" },
        { nom: "AureSound Signature 20 HP", prix: 1100, cat: "multimédia" },
        { nom: "Protection sous-caisse renforcée", prix: 560, cat: "protection" },
      ],
    },
    {
      slug: "aurelis-etoile",
      marque: "aurelis",
      nom: "Étoile",
      carrosserie: "Citadine",
      accroche: "Petite par la taille, immense par le raffinement.",
      desc: "L'Étoile se faufile dans Lille comme aucune autre : 3,98 m, un diamètre de braquage record et un habitacle plus cossu que bien des berlines. Sa version Héritage célèbre les années 60 avec sa peinture pastel et ses jantes à flancs blancs.",
      img: "assets/img/cars/aur-etoile.webp",
      imgAlt: "assets/img/cars/aur-etoile-street.webp",
      imgAlt2: "assets/img/cars/occ-etoile.webp",
      dimensions: { L: "3 985 mm", l: "1 765 mm", h: "1 448 mm", coffre: "311 L" },
      motorisations: [
        { nom: "Étoile 100", energie: "Essence", boite: "Manuelle 6", puissance: "100 ch", conso: "5,3 L/100 km", zeroCent: "10,4 s", vitesse: "188 km/h", co2: "121 g/km", prixBase: 27900 },
        { nom: "Étoile 130", energie: "Essence", boite: "Automatique 7", puissance: "130 ch", conso: "5,6 L/100 km", zeroCent: "8,9 s", vitesse: "198 km/h", co2: "128 g/km", prixBase: 30200 },
        { nom: "Étoile e-130", energie: "Hybride", boite: "Automatique 6", puissance: "130 ch", conso: "4,2 L/100 km", zeroCent: "9,3 s", vitesse: "185 km/h", co2: "96 g/km", prixBase: 32900 },
      ],
      finitions: [
        { nom: "Chic", prix: 0, equipements: ["Écran tactile 10 »", "Caméra de recul", "Climatisation automatique", "Feux LED", "Radar de stationnement AR"] },
        { nom: "Rive Gauche", prix: 2900, equipements: ["Sellerie cuir « Rive »", "Toit ouvrant électrique", "Sièges chauffants", "Jantes alliage 17 »", "Éclairage d'ambiance"] },
        { nom: "Héritage", prix: 4200, equipements: ["Peinture pastel exclusive", "Jantes rétro à flancs blancs", "Sellerie tissu jacquard period", "Chromes habillés", "Numérotée sur plaque intérieure"] },
      ],
      couleurs: [
        { nom: "Bleu Céleste", hex: "#9FBEDC", prix: 0, type: "solide" },
        { nom: "Crème Vanille", hex: "#F1E9D8", prix: 0, type: "solide" },
        { nom: "Rouge Coquelicot", hex: "#C22F3A", prix: 640, type: "métal" },
        { nom: "Gris Perle", hex: "#B9BAC0", prix: 640, type: "métal" },
        { nom: "Vert Menthe", hex: "#9CC6B2", prix: 980, type: "nacré" },
      ],
      jantes: [
        { nom: "Étoile 16 »", prix: 0, desc: "Tôleries habillées chromées" },
        { nom: "Rive 17 »", prix: 720, desc: "Alliage bicolore" },
        { nom: "Héritage 15 »", prix: 890, desc: "Jantes rétro à flancs blancs" },
      ],
      interieurs: [
        { nom: "Rive Anthracite", prix: 0, desc: "Tissu anthracite, planche laquée noire" },
        { nom: "Rive Cognac", prix: 1400, desc: "Cuir cognac, planche bois clair" },
        { nom: "Héritage Jacquard", prix: 1600, desc: "Tissu jacquard bicolore des années 60" },
      ],
      options: [
        { nom: "Toit ouvrant panoramique", prix: 950, cat: "confort" },
        { nom: "Pack City (radars AV + caméra 360°)", prix: 690, cat: "aide" },
        { nom: "Recharge smartphone à induction", prix: 240, cat: "confort" },
        { nom: "Peinture de protection céramique", prix: 590, cat: "protection" },
        { nom: "Pack Hiver", prix: 480, cat: "confort" },
      ],
    },
    {
      slug: "aurelis-zenith",
      marque: "aurelis",
      nom: "Zénith",
      carrosserie: "Coupé GT",
      accroche: "Le grand tourisme, l'accent français.",
      desc: "Le Zénith couvre Paris–Marseille sans jamais faire.patienter son conducteur : 4 places cossues, un coffre à valises, un V6 biturbo feutré et une suspension à amortissement contrôlé qui avale les pavés lillois. Le luxe qui avance vite, sans jamais crier.",
      img: "assets/img/cars/aur-zenith.webp",
      imgAlt: "assets/img/cars/aur-zenith-automne.webp",
      imgAlt2: "assets/img/cars/occ-zenith.webp",
      dimensions: { L: "4 760 mm", l: "1 930 mm", h: "1 395 mm", coffre: "390 L" },
      motorisations: [
        { nom: "Zénith 420 V6", energie: "Essence", boite: "Automatique 8", puissance: "420 ch", conso: "8,9 L/100 km", zeroCent: "4,7 s", vitesse: "270 km/h", co2: "203 g/km", prixBase: 79900 },
        { nom: "Zénith 480 V6 Sport", energie: "Essence", boite: "Automatique 8", puissance: "480 ch", conso: "9,6 L/100 km", zeroCent: "4,2 s", vitesse: "285 km/h", co2: "218 g/km", prixBase: 87900 },
      ],
      finitions: [
        { nom: "Grand Tourisme", prix: 0, equipements: ["Sellerie cuir « Grand Tour »", "Suspension pilotée", "AureSound Signature 20 HP", "Sièges sport chauffants et ventilés", "Jantes 19 »"] },
        { nom: "Signature", prix: 9800, equipements: ["Peinture bicolore artisanales", "Inserts carbone verni", "Échappement sport piloté", "Freins céramique-carbone", "Sellerie cuir cousu main", "Plaque « Signature » numérotée"] },
      ],
      couleurs: [
        { nom: "Gris Caire", hex: "#5A5D63", prix: 0, type: "métal" },
        { nom: "Noir Nuit", hex: "#0F1216", prix: 720, type: "métal" },
        { nom: "Bleu Nuit Étoilé", hex: "#16233C", prix: 1150, type: "nacré" },
        { nom: "Bordeaux Impérial", hex: "#4A1620", prix: 1150, type: "nacré" },
        { nom: "Bicolore Nuit/Or", hex: "#14161B", prix: 4200, type: "spéciale" },
      ],
      jantes: [
        { nom: "Tourbillon 19 »", prix: 0, desc: "Alliage argent diamanté" },
        { nom: "Éclipse 20 »", prix: 1600, desc: "Noir brillant, jante turbine" },
        { nom: "Signature Forged 21 »", prix: 3200, desc: "Forgées monobloc, finition or brossé" },
      ],
      interieurs: [
        { nom: "Grand Tour Noir", prix: 0, desc: "Cuir noir, fil rouge, alu brossé" },
        { nom: "Grand Tour Cognac", prix: 2600, desc: "Cuir cognac, placage noyer fumé" },
        { nom: "Signature Cuir Main", prix: 4900, desc: "Cuir cousu main, initiales brodées" },
      ],
      options: [
        { nom: "Freins céramique-carbone", prix: 4900, cat: "performance" },
        { nom: "Échappement sport à clapets", prix: 1650, cat: "performance" },
        { nom: "Toit carbone", prix: 2900, cat: "performance" },
        { nom: "Peinture bicolore artisanales", prix: 4200, cat: "style" },
        { nom: "Conduite semi-autonome Niv. 2+", prix: 1900, cat: "aide" },
        { nom: "Housses sur mesure monogrammées", prix: 390, cat: "protection" },
      ],
    },
    {
      slug: "borgvik-nord",
      marque: "borgvik",
      nom: "Nord",
      carrosserie: "Berline électrique",
      accroche: "L'électrique qui dédramatise.",
      desc: "La Nord propose jusqu'à 610 km d'autonomie WLTP, une recharge 10-80 % en 26 minutes et un habitacle scandinave dépourvu de toute agitation : un écran, du bois FSC, du tissu recyclé. Sa conduite semi-autonome de série rassure sur autoroute comme dans les bouchons lillois.",
      img: "assets/img/cars/borg-nord.webp",
      imgAlt: "assets/img/cars/borg-nord-blanc.webp",
      imgAlt2: "assets/img/cars/borg-nord-route.webp",
      dimensions: { L: "4 754 mm", l: "1 891 mm", h: "1 442 mm", coffre: "480 L + 90 L avant" },
      motorisations: [
        { nom: "Nord Standard 245", energie: "Électrique", boite: "Automatique 1", puissance: "245 ch", conso: "14,9 kWh/100 km", zeroCent: "6,3 s", vitesse: "180 km/h", autonomie: "470 km", batterie: "62 kWh", prixBase: 46500 },
        { nom: "Nord Long Range 335", energie: "Électrique", boite: "Automatique 1", puissance: "335 ch", conso: "15,4 kWh/100 km", zeroCent: "5,1 s", vitesse: "200 km/h", autonomie: "610 km", batterie: "82 kWh", prixBase: 52900 },
        { nom: "Nord Performance 456 AWD", energie: "Électrique", boite: "Automatique 1", puissance: "456 ch", conso: "16,8 kWh/100 km", zeroCent: "3,9 s", vitesse: "220 km/h", autonomie: "560 km", batterie: "82 kWh", prixBase: 59900 },
      ],
      finitions: [
        { nom: "Essentiel", prix: 0, equipements: ["Écran central 14,5 »", "Recharge 150 kW DC", "Pompe à chaleur", "Sièges chauffants avant", "Aide au maintien de voie", "Toit vitré fixe"] },
        { nom: "Haut de gamme Ultima", prix: 5200, equipements: ["Sellerie textile recyclé « Birka »", "Suspension pneumatique", "Audio Borealis 25 HP", "Conduite semi-autonome Niv. 2+", "Hayon électrique", "Recharge 11 kW AC embarquée"] },
      ],
      couleurs: [
        { nom: "Neige", hex: "#F2F1ED", prix: 0, type: "solide" },
        { nom: "Ciel Polaire", hex: "#AFC4CE", prix: 690, type: "métal" },
        { nom: "Lacs de Suède", hex: "#31505C", prix: 690, type: "métal" },
        { nom: "Basalte", hex: "#2B2E33", prix: 690, type: "métal" },
        { nom: "Aurore", hex: "#5E8C7A", prix: 1100, type: "nacré" },
      ],
      jantes: [
        { nom: "Aero 19 »", prix: 0, desc: "Jantes optimisées aérodynamique" },
        { nom: "Boreal 20 »", prix: 1100, desc: "Alliage bicolore" },
        { nom: "Isbrytning 21 »", prix: 1900, desc: "Forgées, finition givré" },
      ],
      interieurs: [
        { nom: "Birka Graphite", prix: 0, desc: "Textile recyclé graphite, bois frêne" },
        { nom: "Birka Fjord", prix: 1500, desc: "Textile recyclé bleu fjord, chêne clair" },
        { nom: "Nordic Wool", prix: 2300, desc: "Laine mélangée grise, tapis textiles naturels" },
      ],
      options: [
        { nom: "Remorquage 2 000 kg", prix: 750, cat: "confort" },
        { nom: "Chargeur mural Borgvik Wall 11 kW (pose incluse)", prix: 1290, cat: "recharge" },
        { nom: "Suspension pneumatique", prix: 1800, cat: "confort" },
        { nom: "Conduite semi-autonome Niv. 2+", prix: 1650, cat: "aide" },
        { nom: "Pack Hiver Nordique (volant, sièges, batteries)", prix: 690, cat: "confort" },
        { nom: "Audio Borealis 25 HP", prix: 950, cat: "multimédia" },
      ],
    },
    {
      slug: "borgvik-fjord",
      marque: "borgvik",
      nom: "Fjord",
      carrosserie: "SUV électrique",
      accroche: "Le SUV électrique taillé pour les hivers du Nord.",
      desc: "Le Fjord combine 547 km d'autonomie, une transmission intégrale intelligente et un mode « Hiver Nordique » qui préchauffe batteries et habitacle. Sept places en option, remorquage 2 tonnes : l'électrique qui ne renonce à rien.",
      img: "assets/img/cars/borg-fjord.webp",
      imgAlt: "assets/img/cars/borg-fjord-aurore.webp",
      imgAlt2: "assets/img/cars/borg-fjord.webp",
      dimensions: { L: "4 784 mm", l: "1 936 mm", h: "1 666 mm", coffre: "585 L" },
      motorisations: [
        { nom: "Fjord Single 265", energie: "Électrique", boite: "Automatique 1", puissance: "265 ch", conso: "16,4 kWh/100 km", zeroCent: "6,8 s", vitesse: "180 km/h", autonomie: "520 km", batterie: "75 kWh", prixBase: 52900 },
        { nom: "Fjord Dual 428 AWD", energie: "Électrique", boite: "Automatique 1", puissance: "428 ch", conso: "17,9 kWh/100 km", zeroCent: "5,0 s", vitesse: "200 km/h", autonomie: "547 km", batterie: "82 kWh", prixBase: 59900 },
      ],
      finitions: [
        { nom: "Essentiel", prix: 0, equipements: ["Écran 14,5 »", "Recharge 150 kW DC", "Sièges chauffants AV/AR", "Caméra 360°", "Barres de toit intégrées"] },
        { nom: "Haut de gamme Ultima", prix: 5600, equipements: ["7 places", "Suspension pneumatique", "Audio Borealis 25 HP", "Sellerie Birka", "Conduite semi-autonome Niv. 2+", "Toit panoramique"] },
      ],
      couleurs: [
        { nom: "Neige", hex: "#F2F1ED", prix: 0, type: "solide" },
        { nom: "Granit", hex: "#8C8F94", prix: 690, type: "métal" },
        { nom: "Baltique", hex: "#3A5A70", prix: 690, type: "métal" },
        { nom: "Mousse", hex: "#4F6650", prix: 1100, type: "nacré" },
      ],
      jantes: [
        { nom: "Aero 19 »", prix: 0, desc: "Jantes optimisées aérodynamique" },
        { nom: "Terrain 20 »", prix: 1300, desc: "Alliage sombre, pneus mixtes" },
      ],
      interieurs: [
        { nom: "Birka Graphite", prix: 0, desc: "Textile recyclé graphite, bois frêne" },
        { nom: "Nordic Wool", prix: 2300, desc: "Laine mélangée, surpiqûres contrastées" },
      ],
      options: [
        { nom: "7 places", prix: 2200, cat: "confort" },
        { nom: "Attelage 2 000 kg", prix: 850, cat: "confort" },
        { nom: "Chargeur mural Borgvik Wall 11 kW (pose incluse)", prix: 1290, cat: "recharge" },
        { nom: "Pack Hiver Nordique", prix: 690, cat: "confort" },
        { nom: "Conduite semi-autonome Niv. 2+", prix: 1650, cat: "aide" },
        { nom: "Toit panoramique", prix: 1250, cat: "confort" },
      ],
    },
    {
      slug: "borgvik-lumen",
      marque: "borgvik",
      nom: "Lumen",
      carrosserie: "Citadine électrique",
      accroche: "La citadine 100 % électrique, 100 % géniale.",
      desc: "385 km d'autonomie, 3,99 m et un rayon de braquage de folie : la Lumen est la compagne idéale des rues de Vieux-Lille. Son écran pivotant et son habitacle sans cuir séduisent les esprits (et les consciences).",
      img: "assets/img/cars/borg-lumen.webp",
      imgAlt: "assets/img/cars/borg-lumen.webp",
      imgAlt2: "assets/img/cars/borg-lumen.webp",
      dimensions: { L: "3 990 mm", l: "1 780 mm", h: "1 510 mm", coffre: "355 L" },
      motorisations: [
        { nom: "Lumen Urban 170", energie: "Électrique", boite: "Automatique 1", puissance: "170 ch", conso: "13,8 kWh/100 km", zeroCent: "7,9 s", vitesse: "160 km/h", autonomie: "385 km", batterie: "54 kWh", prixBase: 33900 },
        { nom: "Lumen Boost 220", energie: "Électrique", boite: "Automatique 1", puissance: "220 ch", conso: "14,3 kWh/100 km", zeroCent: "6,6 s", vitesse: "170 km/h", autonomie: "355 km", batterie: "54 kWh", prixBase: 36900 },
      ],
      finitions: [
        { nom: "Essentiel", prix: 0, equipements: ["Écran pivotant 12 »", "Recharge 130 kW DC", "Climatisation", "Caméra de recul", "Sièges chauffants avant"] },
        { nom: "Haut de gamme Ultima", prix: 3900, equipements: ["Toit vitré panoramique", "Audio Borealis 14 HP", "Sellerie Birka", "Feux matrix LED", "Recharge 11 kW AC"] },
      ],
      couleurs: [
        { nom: "Neige", hex: "#F2F1ED", prix: 0, type: "solide" },
        { nom: "Soleil Pâle", hex: "#E4C87F", prix: 690, type: "métal" },
        { nom: "Corail Nordique", hex: "#D0705A", prix: 690, type: "métal" },
        { nom: "Basalte", hex: "#2B2E33", prix: 690, type: "métal" },
      ],
      jantes: [
        { nom: "Aero 18 »", prix: 0, desc: "Optimisées pour l'autonomie" },
        { nom: "Boreal 19 »", prix: 950, desc: "Alliage bicolore" },
      ],
      interieurs: [
        { nom: "Birka Graphite", prix: 0, desc: "Textile recyclé graphite" },
        { nom: "Birka Soleil", prix: 1200, desc: "Textile recyclé sable, coutures ambre" },
      ],
      options: [
        { nom: "Toit vitré panoramique", prix: 990, cat: "confort" },
        { nom: "Chargeur mural Borgvik Wall 7,4 kW (pose incluse)", prix: 1090, cat: "recharge" },
        { nom: "Pack Hiver Nordique", prix: 590, cat: "confort" },
        { nom: "Aide au stationnement automatisé", prix: 850, cat: "aide" },
      ],
    },
    {
      slug: "borgvik-saga",
      marque: "borgvik",
      nom: "Saga",
      carrosserie: "GT électrique",
      accroche: "Le grand tourisme électrique scandinave.",
      desc: "670 km d'autonomie, 3,6 s de 0 à 100 km/h et une berline de tir qui rend chaque autoroute silencieuse. La Saga prouve qu'on peut relier Lille à Milan sans une seule pause recharge prolongée — et arriver détendu.",
      img: "assets/img/cars/borg-saga.webp",
      imgAlt: "assets/img/cars/borg-saga.webp",
      imgAlt2: "assets/img/cars/occ-saga.webp",
      dimensions: { L: "4 990 mm", l: "1 940 mm", h: "1 410 mm", coffre: "450 L + 92 L avant" },
      motorisations: [
        { nom: "Saga Long Range 480 AWD", energie: "Électrique", boite: "Automatique 1", puissance: "480 ch", conso: "17,2 kWh/100 km", zeroCent: "4,1 s", vitesse: "210 km/h", autonomie: "670 km", batterie: "103 kWh", prixBase: 71500 },
        { nom: "Saga Plaid 620 AWD", energie: "Électrique", boite: "Automatique 1", puissance: "620 ch", conso: "19,1 kWh/100 km", zeroCent: "3,6 s", vitesse: "250 km/h", autonomie: "610 km", batterie: "103 kWh", prixBase: 79900 },
      ],
      finitions: [
        { nom: "Essentiel", prix: 0, equipements: ["Écran 14,5 »", "Recharge 250 kW DC", "Suspension pneumatique", "Sièges sport ventilés", "Toit vitré"] },
        { nom: "Haut de gamme Ultima", prix: 6400, equipements: ["Audio Borealis Signature 30 HP", "Sellerie cuir végétal « Saga »", "Conduite semi-autonome Niv. 2+", "Freins avant renforcés", "Éclairage d'ambiance nordique"] },
      ],
      couleurs: [
        { nom: "Neige", hex: "#F2F1ED", prix: 0, type: "solide" },
        { nom: "Ciel Polaire", hex: "#AFC4CE", prix: 690, type: "métal" },
        { nom: "Basalte", hex: "#2B2E33", prix: 690, type: "métal" },
        { nom: "Aurore", hex: "#5E8C7A", prix: 1100, type: "nacré" },
        { nom: "Feu Nordique", hex: "#B04A3A", prix: 1100, type: "nacré" },
      ],
      jantes: [
        { nom: "Aero 20 »", prix: 0, desc: "Turbines aérodynamiques" },
        { nom: "Isbrytning 21 »", prix: 2100, desc: "Forgées, finition givré" },
      ],
      interieurs: [
        { nom: "Birka Graphite", prix: 0, desc: "Textile recyclé graphite, bois sombre" },
        { nom: "Saga Cuir Végétal", prix: 2800, desc: "Cuir végétal ivoire, tapis laine" },
      ],
      options: [
        { nom: "Chargeur mural Borgvik Wall 22 kW (pose incluse)", prix: 1590, cat: "recharge" },
        { nom: "Conduite semi-autonome Niv. 2+", prix: 1650, cat: "aide" },
        { nom: "Pack Hiver Nordique", prix: 690, cat: "confort" },
        { nom: "Audio Borealis Signature 30 HP", prix: 1450, cat: "multimédia" },
      ],
    },
    {
      slug: "tessari-vento",
      marque: "tessari",
      nom: "Vento",
      carrosserie: "Coupé sport",
      accroche: "Le vent, domestiqué.",
      desc: "Sous son capot chante un V8 biturbo de 620 ch dont la signature sonore est étudiée en soufflerie comme en salle de concert. Chaque Vento est assemblé à la main à Modène en 62 heures, puis rodé 200 km par un pilote d'essai maison.",
      img: "assets/img/cars/tes-vento.webp",
      imgAlt: "assets/img/cars/tes-vento-nuit.webp",
      imgAlt2: "assets/img/cars/tes-vento-bleu.webp",
      dimensions: { L: "4 620 mm", l: "1 935 mm", h: "1 278 mm", coffre: "210 L" },
      motorisations: [
        { nom: "Vento 620 V8", energie: "Essence", boite: "Automatique 8", puissance: "620 ch", conso: "11,8 L/100 km", zeroCent: "3,3 s", vitesse: "318 km/h", co2: "268 g/km", prixBase: 98000 },
        { nom: "Vento 670 V8 Track", energie: "Essence", boite: "Automatique 8", puissance: "670 ch", conso: "12,4 L/100 km", zeroCent: "3,1 s", vitesse: "326 km/h", co2: "281 g/km", prixBase: 112000 },
      ],
      finitions: [
        { nom: "Corsa", prix: 0, equipements: ["Suspension à amortissement magnétique", "Sièges baquets carbone", "Échappement Inconell à clapets", "Jantes 20 » forgées", "Mode Corsa + lancement"] },
        { nom: "Lusso", prix: 8900, equipements: ["Sellerie cuir « Siena »", "Lève-vitres et rétroviseurs assourdis", "Échappement réglable silencieux", "Suspension relevable avant", "Carbone extérieur packs", "Audio Tessari Sonata 12 HP"] },
      ],
      couleurs: [
        { nom: "Rosso Modena", hex: "#B5231F", prix: 0, type: "solide" },
        { nom: "Giallo Raggio", hex: "#D9A521", prix: 1450, type: "solide" },
        { nom: "Blanco Astrale", hex: "#E8E9E4", prix: 1450, type: "métal" },
        { nom: "Blu Notturno", hex: "#1B2A4A", prix: 2100, type: "nacré" },
        { nom: "Verde Bosco", hex: "#25402F", prix: 2100, type: "nacré" },
        { nom: "Grigio Piombo", hex: "#707479", prix: 2100, type: "nacré" },
      ],
      jantes: [
        { nom: "Raggio 19/20 »", prix: 0, desc: "Forgées, argent" },
        { nom: "Scatto 20/21 »", prix: 2400, desc: "Forgées, noir diamanté" },
        { nom: "Corsa Carbon 20/21 »", prix: 4800, desc: "Carbone apparent monobloc" },
      ],
      interieurs: [
        { nom: "Siena Nero", prix: 0, desc: "Cuir noir, Alcantara, fil rouge" },
        { nom: "Siena Cuoio", prix: 3200, desc: "Cuir cognac, moquette laine" },
        { nom: "Corsa Carbonio", prix: 4100, desc: "Alcantara et carbone, coques baquets apparentes" },
      ],
      options: [
        { nom: "Freins céramique-carbone", prix: 5900, cat: "performance" },
        { nom: "Pack carbone extérieur", prix: 4600, cat: "style" },
        { nom: "Échappement sport Titane", prix: 3200, cat: "performance" },
        { nom: "Sièges baquets carbone course", prix: 5400, cat: "performance" },
        { nom: "Suspension relevable avant", prix: 1800, cat: "confort" },
        { nom: "Adhésif circuits Tessari (livrée)", prix: 2900, cat: "style" },
      ],
    },
    {
      slug: "tessari-furia",
      marque: "tessari",
      nom: "Furia",
      carrosserie: "Supercar V10",
      accroche: "Le dernier V10 atmosphérique. Et il hurle.",
      desc: "830 ch, 9 500 tr/min, aucune suralimentation : la Furia est l'ultime chant du cygne du V10 atmosphérique, assemblée à la main et vendue sur invitation. Ses portières papillon et son châssis monocoque carbone en font une pièce de collection qui s'apprécie aussi à l'arrêt.",
      img: "assets/img/cars/tes-furia.webp",
      imgAlt: "assets/img/cars/tes-furia-jaune.webp",
      imgAlt2: "assets/img/cars/tes-furia-ciel.webp",
      dimensions: { L: "4 540 mm", l: "2 020 mm", h: "1 165 mm", coffre: "100 L" },
      motorisations: [
        { nom: "Furia 830 V10", energie: "Essence", boite: "Automatique 7", puissance: "830 ch", conso: "14,5 L/100 km", zeroCent: "2,8 s", vitesse: "340 km/h", co2: "330 g/km", prixBase: 187000 },
      ],
      finitions: [
        { nom: "Furia", prix: 0, equipements: ["Monocoque carbone", "Portières papillon", "Aérodynamique active ALA", "Jantes forgées 20/21 »", "Châssis relevable avant", "Échappement Inconell"] },
        { nom: "Furia Omaggio", prix: 18900, equipements: ["Peinture tricolore à la main", "Intérieur cuir cousu Modène", "Plaque d'identité gravée", "Coffre cuir sur mesure", "Journée sur circuit avec pilote Tessari", "Housse intérieure monogrammée"] },
      ],
      couleurs: [
        { nom: "Arancio Furia", hex: "#D2611E", prix: 0, type: "solide" },
        { nom: "Giallo Furia", hex: "#DBA522", prix: 2400, type: "solide" },
        { nom: "Rosso Furia", hex: "#B5231F", prix: 2400, type: "solide" },
        { nom: "Verde Scandalo", hex: "#2E5C3A", prix: 3400, type: "nacré" },
        { nom: "Tricolore Omaggio", hex: "#8C1D24", prix: 9800, type: "spéciale" },
      ],
      jantes: [
        { nom: "Dito 20/21 »", prix: 0, desc: "Forgées, argent" },
        { nom: "Leva 20/21 »", prix: 2900, desc: "Forgées, noir mat" },
        { nom: "Corsa Carbonio 20/21 »", prix: 6200, desc: "Carbone apparent" },
      ],
      interieurs: [
        { nom: "Nero Corsa", prix: 0, desc: "Alcantara noir, surpiqûres contraste" },
        { nom: "Cuoio Modena", prix: 4800, desc: "Cuir cognac cousu main" },
      ],
      options: [
        { nom: "Peinture spéciale à la main", prix: 9800, cat: "style" },
        { nom: "Pack carbone intégral", prix: 14500, cat: "style" },
        { nom: "Sièges course carbone harnais 4 points", prix: 8900, cat: "performance" },
        { nom: "Système télémétrie circuit", prix: 3400, cat: "performance" },
        { nom: "Journée circuit Tessari avec coach", prix: 1900, cat: "expérience" },
      ],
    },
    {
      slug: "tessari-rondine",
      marque: "tessari",
      nom: "Rondine",
      carrosserie: "Cabriolet",
      accroche: "Ciel ouvert, cœur battant.",
      desc: "La Rondine dévoile son V8 590 ch à ciel ouvert en 14 secondes, jusqu'à 50 km/h. Sa capote en toile multilayer rend l'habitacle aussi feutré qu'un coupé, et son diffuseur arrière actif garde la nuque au chaud — la dolce vita, version française du Nord.",
      img: "assets/img/cars/tes-rondine.webp",
      imgAlt: "assets/img/cars/tes-rondine-blanc.webp",
      imgAlt2: "assets/img/cars/tes-rondine.webp",
      dimensions: { L: "4 590 mm", l: "1 910 mm", h: "1 290 mm", coffre: "180 L" },
      motorisations: [
        { nom: "Rondine 590 V8", energie: "Essence", boite: "Automatique 8", puissance: "590 ch", conso: "11,2 L/100 km", zeroCent: "3,5 s", vitesse: "308 km/h", co2: "256 g/km", prixBase: 84500 },
      ],
      finitions: [
        { nom: "Spiaggia", prix: 0, equipements: ["Capote toile multilayer", "Diffuseur d'air chaud nuque", "Sièges sport ventilés", "Jantes 19/20 »", "Échappement à clapets"] },
        { nom: "Riviera", prix: 7400, equipements: ["Sellerie cuir aqua-résistant", "Capote colorée sur mesure", "Pack carbone intérieur", "Audio Tessari Sonata 12 HP", "Pare-vent électrique"] },
      ],
      couleurs: [
        { nom: "Rosso Rondine", hex: "#B5231F", prix: 0, type: "solide" },
        { nom: "Azzurro Riviera", hex: "#2A5D8C", prix: 1900, type: "nacré" },
        { nom: "Blanco Spiaggia", hex: "#E8E9E4", prix: 1450, type: "métal" },
        { nom: "Nero Notte", hex: "#111318", prix: 1450, type: "métal" },
      ],
      jantes: [
        { nom: "Raggio 19/20 »", prix: 0, desc: "Forgées, argent" },
        { nom: "Scatto 20/21 »", prix: 2200, desc: "Forgées, gris graphite" },
      ],
      interieurs: [
        { nom: "Nero Riviera", prix: 0, desc: "Cuir noir, surpiqûres azur" },
        { nom: "Cuoio Sabbia", prix: 2900, desc: "Cuir sable, tapis weave marin" },
      ],
      options: [
        { nom: "Capote colorée sur mesure", prix: 2400, cat: "style" },
        { nom: "Freins céramique-carbone", prix: 5400, cat: "performance" },
        { nom: "Pack carbone extérieur", prix: 3900, cat: "style" },
        { nom: "Pare-vent électrique", prix: 950, cat: "confort" },
      ],
    },
    {
      slug: "tessari-stradale",
      marque: "tessari",
      nom: "Stradale",
      carrosserie: "Édition limitée piste",
      accroche: "Homologuée pour la route. Née pour le circuit.",
      desc: "99 exemplaires numérotés, 750 ch, un aileron actif et un châssis allégé de 90 kg : la Stradale est la Furia passée à la meule. Elle est livrée avec une journée de réglages sur le circuit de Croix-en-Ternois avec l'équipe usine.",
      img: "assets/img/cars/tes-stradale.webp",
      imgAlt: "assets/img/cars/tes-stradale-noir.webp",
      imgAlt2: "assets/img/cars/tes-stradale.webp",
      dimensions: { L: "4 560 mm", l: "2 030 mm", h: "1 150 mm", coffre: "80 L" },
      motorisations: [
        { nom: "Stradale 750 V10", energie: "Essence", boite: "Automatique 7", puissance: "750 ch", conso: "15,1 L/100 km", zeroCent: "2,7 s", vitesse: "350 km/h", co2: "344 g/km", prixBase: 240000 },
      ],
      finitions: [
        { nom: "Stradale", prix: 0, equipements: ["Aileron actif carbone", "Châssis -90 kg", "Sièges course carbone", "Telemetria Pro", "Jantes magnésium centrées", "Numérotée 1/99"] },
      ],
      couleurs: [
        { nom: "Rosso Stradale", hex: "#A81E1B", prix: 0, type: "solide" },
        { nom: "Nero Carbonio", hex: "#141518", prix: 3400, type: "nacré" },
        { nom: "Argento Vivace", hex: "#C7C9CC", prix: 3400, type: "métal" },
      ],
      jantes: [
        { nom: "Corsa Magnesio 20/21 »", prix: 0, desc: "Magnésium forgé, centrées circuit" },
      ],
      interieurs: [
        { nom: "Corsa Alcantara", prix: 0, desc: "Alcantara, harnais 4 points, carbone apparent" },
      ],
      options: [
        { nom: "Kit pneus slicks homologués circuit", prix: 4200, cat: "performance" },
        { nom: "Capot carbone apparent peint", prix: 6900, cat: "style" },
        { nom: "Programme Tessari Corse (3 journées circuit)", prix: 4900, cat: "expérience" },
      ],
    },
  ],

  /* ======================= OCCASIONS ======================= */
  occasions: [
    { id: "vo1", marque: "aurelis", modele: "Saphir", version: "215 Business", annee: 2021, km: 28400, energie: "Essence", boite: "Automatique", couleur: "Noir Encre", img: "assets/img/cars/occ-saphir.webp", prix: 38900, puissance: "215 ch", conso: "6,7 L/100 km", portes: 4, garant: "Garantie 12 mois", desc: "Première main, carnet d'entretien complet, aucun accident. Pneus neufs à la livraison.", equipements: ["Sellerie cuir/tissu Loft", "Écran 12,3 »", "Régulateur adaptatif", "Full LED", "Caméra 360°", "Apple CarPlay / Android Auto", "Sièges chauffants", "Hayon électrique"] },
    { id: "vo2", marque: "aurelis", modele: "Zénith", version: "420 V6 Grand Tourisme", annee: 2019, km: 41200, energie: "Essence", boite: "Automatique", couleur: "Gris Caire", img: "assets/img/cars/occ-zenith.webp", prix: 56900, puissance: "420 ch", conso: "8,9 L/100 km", portes: 2, garant: "Garantie 24 mois", desc: "Entretien exclusivement en atelier agréé, courroie et vidange faites. Options Signature d'origine.", equipements: ["Sellerie cuir Grand Tour", "Suspension pilotée", "AureSound Signature", "Sièges massants", "Jantes 19 »", "Affichage tête haute", "Toit ouvrant", "Freins sport"] },
    { id: "vo3", marque: "aurelis", modele: "Étoile", version: "Héritage 100", annee: 2020, km: 18900, energie: "Essence", boite: "Manuelle", couleur: "Bleu Céleste", img: "assets/img/cars/occ-etoile.webp", prix: 23400, puissance: "100 ch", conso: "5,3 L/100 km", portes: 3, garant: "Garantie 12 mois", desc: "Série Héritage numérotée, jantes à flancs blancs, état de concours. Une future collection.", equipements: ["Tissu jacquard Héritage", "Jantes rétro flancs blancs", "Chromes habillés", "Écran 10 »", "Caméra de recul", "Climatisation auto"] },
    { id: "vo4", marque: "aurelis", modele: "Cantata", version: "180 BlueDrive Estate", annee: 2018, km: 68000, energie: "Diesel", boite: "Automatique", couleur: "Gris Orage", img: "assets/img/cars/occ-cantata.webp", prix: 19400, puissance: "180 ch", conso: "4,9 L/100 km", portes: 5, garant: "Garantie 12 mois", desc: "Le break familial par excellence : coffre de 620 L, attelage, attelé régulièrement. Idéal gros rouleurs.", equipements: ["Attelage", "Barres de toit", "Navigation", "Full LED", "Sièges chauffants", "Régulateur adaptatif", "Pack Hiver"] },
    { id: "vo5", marque: "borgvik", modele: "Nord", version: "Long Range 335", annee: 2023, km: 9800, energie: "Électrique", boite: "Automatique", couleur: "Neige", img: "assets/img/cars/occ-nord.webp", prix: 41900, puissance: "335 ch", conso: "15,4 kWh/100 km", portes: 4, garant: "Garantie batterie 8 ans", desc: "Quasi neuve, batterie certifiée 96 % de capacité. Chargeur mural inclus dans la vente.", equipements: ["Écran 14,5 »", "Pompe à chaleur", "Recharge 150 kW", "Sièges chauffants", "Aide au maintien de voie", "Toit vitré", "Chargeur mural Borgvik inclus"] },
    { id: "vo6", marque: "borgvik", modele: "Nord", version: "Performance 456 AWD", annee: 2022, km: 21500, energie: "Électrique", boite: "Automatique", couleur: "Ciel Polaire", img: "assets/img/cars/occ-nord-perf.webp", prix: 44400, puissance: "456 ch", conso: "16,8 kWh/100 km", portes: 4, garant: "Garantie batterie 8 ans", desc: "Version Performance : 0 à 100 km/h en 3,9 s. Suspensions pneumatiques d'origine.", equipements: ["Suspension pneumatique", "Audio Borealis", "Conduite Niv. 2+", "Sellerie Birka", "Jantes 20 »", "Hayon électrique"] },
    { id: "vo7", marque: "borgvik", modele: "Saga", version: "Long Range 480 AWD", annee: 2021, km: 15700, energie: "Électrique", boite: "Automatique", couleur: "Neige", img: "assets/img/cars/occ-saga.webp", prix: 52900, puissance: "480 ch", conso: "17,2 kWh/100 km", portes: 4, garant: "Garantie batterie 8 ans", desc: "GT électrique de 670 km d'autonomie, livrée et suivie chez nous depuis 2021. Impeccable.", equipements: ["Suspension pneumatique", "Toit vitré", "Sièges ventilés", "Recharge 250 kW", "Écran 14,5 »", "Audio Borealis"] },
    { id: "vo8", marque: "tessari", modele: "Vento", version: "620 V8 Corsa", annee: 2020, km: 24300, energie: "Essence", boite: "Automatique", couleur: "Rosso Modena", img: "assets/img/cars/occ-vento-rouge.webp", prix: 76900, puissance: "620 ch", conso: "11,8 L/100 km", portes: 2, garant: "Garantie 24 mois", desc: "Révision des 24 000 km effectuée, échappement d'origine, pneus Michelin neufs. Historique Tessari complet.", equipements: ["Amortissement magnétique", "Baquets carbone", "Échappement Inconell", "Jantes forgées 20 »", "Caméra 360°", "Lancement Corsa+"] },
    { id: "vo9", marque: "tessari", modele: "Vento", version: "620 V8 Lusso", annee: 2018, km: 47800, energie: "Essence", boite: "Automatique", couleur: "Blu Notturno", img: "assets/img/cars/occ-vento-bleu.webp", prix: 62400, puissance: "620 ch", conso: "11,8 L/100 km", portes: 2, garant: "Garantie 12 mois", desc: "Finition Lusso : suspension relevable, échappement silencieux commutable. Le Vento de tous les jours.", equipements: ["Sellerie cuir Siena", "Suspension relevable", "Échappement réglable", "Audio Sonata", "Rétroviseurs assourdis", "Carbone intérieur"] },
    { id: "vo10", marque: "tessari", modele: "Furia", version: "830 V10", annee: 2019, km: 12600, energie: "Essence", boite: "Automatique", couleur: "Giallo Furia", img: "assets/img/cars/occ-furia.webp", prix: 152000, puissance: "830 ch", conso: "14,5 L/100 km", portes: 2, garant: "Garantie 24 mois", desc: "Furia de première main, jamais accidentée, numérotée. Livrée neuve chez nous en 2019, reprise possible.", equipements: ["Monocoque carbone", "Portières papillon", "Aéro ALA active", "Jantes forgées", "Châssis relevable", "Échappement Inconell", "Telemetria"] },
    { id: "vo11", marque: "tessari", modele: "Furia", version: "Verde Scandalo", annee: 2021, km: 8900, energie: "Essence", boite: "Automatique", couleur: "Verde Scandalo", img: "assets/img/cars/occ-furia-verde.webp", prix: 178000, puissance: "830 ch", conso: "14,5 L/100 km", portes: 2, garant: "Garantie 24 mois", desc: "Peinture Verde Scandalo nacrée sur carbone apparent. Une des 12 Vertes produites en 2021.", equipements: ["Monocoque carbone", "Pack carbone intégral", "Portières papillon", "Jantes Leva noires", "Telemetria Pro", "Housse monogrammée"] },
    { id: "vo12", marque: "tessari", modele: "Ombra", version: "GT 5.0", annee: 2019, km: 33000, energie: "Essence", boite: "Automatique", couleur: "Nero Notte", img: "assets/img/cars/occ-ombra.webp", prix: 39900, puissance: "450 ch", conso: "10,9 L/100 km", portes: 2, garant: "Garantie 12 mois", desc: "L'Ombra, le coupé V8 abordable de Tessari : brutal, mélodieux, et plutôt raisonnable en assurance.", equipements: ["Sièges sport cuir", "Échappement double", "Jantes 19 »", "Caméra de recul", "Modes de conduite", "Feux LED"] },
    { id: "vo13", marque: "tessari", modele: "Bianca", version: "S Roadster", annee: 2018, km: 39500, energie: "Essence", boite: "Manuelle", couleur: "Blanco Astrale", img: "assets/img/cars/occ-bianca.webp", prix: 34900, puissance: "370 ch", conso: "9,8 L/100 km", portes: 2, garant: "Garantie 12 mois", desc: "Roadster à boîte manuelle, rare. Capote neuve 2023, intérieur impeccable.", equipements: ["Capote électrique", "Sièges sport cuir", "Échappement sport", "Bluetooth", "Jantes 19 »", "Pare-vent"] },
    { id: "vo14", marque: "tessari", modele: "Tempesta", version: "SS 480", annee: 2019, km: 36500, energie: "Essence", boite: "Automatique", couleur: "Azzurro Tempesta", img: "assets/img/cars/occ-tempesta.webp", prix: 42900, puissance: "480 ch", conso: "11,4 L/100 km", portes: 2, garant: "Garantie 12 mois", desc: "Muscle-car européen : V8 480 ch, freins Brembo, échappement Quad. Une truc d'amateur de son.", equipements: ["Échappement Quad", "Freins Brembo 6 pistons", "Sièges baquets cuir", "Jantes 20 »", "Mode Track", "Feux Full LED"] },
    { id: "vo15", marque: "aurelis", modele: "Ombra Mono", version: "V8 600 Roadster", annee: 2017, km: 44700, energie: "Essence", boite: "Automatique", couleur: "Rosso Corsa", img: "assets/img/cars/occ-ombra-mono.webp", prix: 68900, puissance: "600 ch", conso: "11,6 L/100 km", portes: 2, garant: "Garantie 12 mois", desc: "Le roadster Aurelis le plus sportif jamais produit : châssis carbone, V8 600 ch, intérieur mono.", equipements: ["Châssis carbone", "Roll-bar titane", "Sièges sport cuir", "Échappement sport", "Navigation", "Jantes forgées"] },
  ],

  /* ======================= ÉQUIPE ======================= */
  equipe: [
    { nom: "Claire Vasseur", role: "Directrice de la concession", dept: "Direction", img: "assets/img/team/claire-vasseur.webp", bio: "Dans l'automobile depuis 22 ans, Claire a repris la concession familiale en 2016. Sa devise : « On ne vend pas une voiture, on accompagne un projet. »" },
    { nom: "Mehdi Lefebvre", role: "Responsable des ventes", dept: "Ventes", img: "assets/img/team/mehdi-lefebvre.webp", bio: "Connaisseur incontesté de la gamme Tessari, Mehdi organise chaque année le rassemblement Vélocité Classics sur la Grand-Place." },
    { nom: "Sophie Delfosse", role: "Conseillère ventes — marques Aurelis & Borgvik", dept: "Ventes", img: "assets/img/team/sophie-delfosse.webp", bio: "Spécialiste des véhicules électriques, Sophie accompagne chaque transition vers l'électrique avec pédagogie et sans jargon." },
    { nom: "Antoine Carlier", role: "Conseiller ventes — occasions & export", dept: "Ventes", img: "assets/img/team/antoine-carlier.webp", bio: "Vingt ans de marché de l'occasion dans les bagages. Antoine sait dénicher la perle rare et négocier votre reprise au juste prix." },
    { nom: "Léa Fontaine", role: "Conseillère financement & LOA", dept: "Financement", img: "assets/img/team/lea-fontaine.webp", bio: "Léa construit des solutions de financement sur mesure : LOA, crédit classique ou leasing long terme. Elle aime les chiffres qui parlent clair." },
    { nom: "Jean Mercier", role: "Chef d'atelier", dept: "Atelier", img: "assets/img/team/jean-mercier.webp", bio: "Formé chez les grands constructeurs premium, Jean dirige une équipe de 9 mécaniciens et veille à ce que chaque voiture ressorte comme un jeton." },
    { nom: "Karim Benali", role: "Maître-technicien moteur & électronique", dept: "Atelier", img: "assets/img/team/karim-benali.webp", bio: "Le diagnostiqueur que les autres ateliers appellent en renfort. Karim câble aussi nos bornes de recharge rapides." },
    { nom: "Élodie Renard", role: "Conseillère service après-vente", dept: "Atelier", img: "assets/img/team/elodie-renard.webp", bio: "Élodie prend vos rendez-vous, explique les devis ligne par ligne et vous prête un véhicule pendant l'immobilisation." },
  ],

  avis: [
    { nom: "Nicolas D.", ville: "Lille", note: 5, date: "Mars 2026", texte: "Configurateur magistral et livraison en 6 semaines. On m'a même prêté un véhicule pendant la pose de ma borne. Rien à redire." },
    { nom: "Amélie R.", ville: "Villeneuve-d'Ascq", note: 5, date: "Février 2026", texte: "Sophie a pris le temps de tout m'expliquer sur mon premier véhicule électrique. Aucune pression, que du conseil. Je recommande à 100 %." },
    { nom: "Julien M.", ville: "Roubaix", note: 4, date: "Janvier 2026", texte: "Très bonne expérience pour l'achat de mon occasion. Un léger retard sur la préparation, mais largement compensé par la qualité du suivi." },
    { nom: "Céline T.", ville: "Lambersart", note: 5, date: "Janvier 2026", texte: "Atelier nickel : devis limpide, voiture de courtoisie, et la Zénith rendue plus propre qu'à l'arrivée. Le top du SAV." },
    { nom: "Bertrand L.", ville: "Tourcoing", note: 5, date: "Décembre 2025", texte: "Essai de la Furia organisé par Mehdi : inoubliable. Et la négociation s'est faite en toute transparence, prix affiché = prix payé." },
    { nom: "Fatou B.", ville: "Armentières", note: 5, date: "Novembre 2025", texte: "Reprise de mon ancienne voiture estimée au-dessus de deux autres enseignes. Formalités faites en une heure, exemplaire." },
    { nom: "Thomas V.", ville: "Lille", note: 4, date: "Octobre 2025", texte: "Bel espace d'exposition, accueil pro. Le configurateur en borne en salon est très pratique pour se projeter." },
    { nom: "Ingrid S.", ville: "Bondues", note: 5, date: "Octobre 2025", texte: "Troisième véhicule acheté chez Vélocité. Toujours la même rigueur : devis, délais, suivi. C'est pour ça qu'on revient." },
  ],

  /* ======================= ATELIER ======================= */
  prestations: [
    { nom: "Révision constructeur", prix: "dès 189 €", desc: "Vidange, filtres, contrôles constructeur en 27 points, remise à zéro du témoin d'entretien.", duree: "2 h à 3 h" },
    { nom: "Diagnostic électronique", prix: "dès 59 €", desc: "Lecture complète des calculateurs, rapport écrit remis, devis détaillé avant toute intervention.", duree: "1 h" },
    { nom: "Plaquettes + disques de frein AV", prix: "dès 249 €", desc: "Pièces d'origine ou équivalent constructeur, purge du circuit, contrôle ABS/ESP.", duree: "2 h" },
    { nom: "Montage pneumatiques", prix: "dès 25 €/pneu", desc: "Équilibrage électronique, valve neuve, géométrie conseillée. Toutes marques.", duree: "45 min" },
    { nom: "Climatisation — entretien complet", prix: "99 €", desc: "Recharge de fluide, désinfection du circuit, test d'étanchéité, filtre habitacle vérifié.", duree: "1 h 30" },
    { nom: "Pré-contractuelle VHC (contrôle 160 points)", prix: "0 €", desc: "Contrôle offert avant l'expiration de votre garantie constructeur ou avant un achat.", duree: "1 h 30" },
    { nom: "Remplacement batterie 12 V", prix: "dès 149 €", desc: "Batterie d'origine, codage au véhicule, test du circuit de charge.", duree: "1 h" },
    { nom: "Entretien véhicule électrique", prix: "dès 129 €", desc: "Contrôle batterie haute tension, freins, refroidissement, mise à jour logicielle.", duree: "1 h 30" },
    { nom: "Pose de borne de recharge domicile", prix: "dès 890 € pose comprise", desc: "Étude, pose par électricien certifié IRVE, déclarations, mise en service. Crédit d'impôt déduit.", duree: "sur rendez-vous" },
  ],

  /* ======================= ÉLECTRIQUE ======================= */
  aides: [
    { nom: "Bonus écologique", montant: "jusqu'à 4 000 €", desc: "Aide de l'État pour l'achat d'un véhicule électrique neuf, selon revenu fiscal et score environnemental." },
    { nom: "Prime à la conversion", montant: "jusqu'à 5 000 €", desc: "Pour le remplacement d'un véhicule ancien par un électrique neuf ou d'occasion." },
    { nom: "TVA récupérable", montant: "153 €/kWh", desc: "Professionnels : récupération de la TVA sur l'énergie de recharge dans la limite de 153 € par kWh." },
    { nom: "Crédit d'impôt borne", montant: "500 €", desc: "Crédit d'impôt sur la pose d'une borne de recharge à domicile (300 € si copropriété)." },
  ],
  recharge: [
    { nom: "Prise renforcée", puissance: "3,7 kW", temps: "± 14 h (0→100 %, Lumen)", usage: "Domicile, nuit" },
    { nom: "Borne murale 7,4 kW", puissance: "7,4 kW", temps: "± 7 h (0→100 %, Lumen)", usage: "Domicile, copropriété" },
    { nom: "Borne murale 11 kW", puissance: "11 kW", temps: "± 7 h (0→100 %, Nord)", usage: "Domicile triphasé" },
    { nom: "Charge rapide DC", puissance: "150 – 250 kW", temps: "26 – 32 min (10→80 %)", usage: "Autoroute, grands trajets" },
  ],
  faqVe: [
    { q: "Puis-je rouler en électrique sans borne à domicile ?", a: "Oui. Une prise renforcée suffit pour 40 à 60 km par nuit de charge, et les réseaux rapides du métropole lilloise (Illibee, Fastned) couvrent la recharge d'appoint. Notre équipe vous prépare un plan de charge personnalisé." },
    { q: "Quelle est la vraie autonomie en hiver ?", a: "Comptez 15 à 25 % de perte par grand froid avec le chauffage. La pompe à chaleur (série sur la gamme Borgvik) et le pré-conditionnement branché réduisent nettement cet écart." },
    { q: "Que vaut une électrique à la revente ?", a: "Les Borgvik bénéficient d'une garantie batterie de 8 ans ou 160 000 km. Notre atelier délivre un certificat de santé batterie, très valorisé à la revente." },
    { q: "L'entretien est-il vraiment moins cher ?", a: "Oui : pas de vidange, pas d'embrayage, freins sollicités bien plus tard grâce au freinage régénératif. L'entretien d'une Nord coûte environ 30 % de moins qu'une thermique équivalente." },
  ],

  /* ======================= AVIS / STATS ======================= */
  stats: [
    { valeur: 27, suffixe: " ans", label: "au service des automobilistes lillois" },
    { valeur: 8400, suffixe: "+", label: "véhicules vendus et livrés" },
    { valeur: 4.8, suffixe: "/5", label: "note moyenne sur 1 200 avis", decimal: true },
    { valeur: 96, suffixe: " %", label: "de clients qui nous recommandent" },
  ],

  financement: {
    tauxNominal: 3.9,
    tauxLoa: 2.9,
    apportMax: 0.5,
    dureesCredit: [24, 36, 48, 60, 72],
    dureesLoa: [24, 36, 48, 60],
    kmLoa: [10000, 15000, 20000, 30000],
    valeurResiduellePct: [0.52, 0.46, 0.41, 0.36],
  },
};

/* Helpers partagés */
function vmeur(n) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}
function vmnb(n) {
  return new Intl.NumberFormat("fr-FR").format(n);
}
function vmMarque(id) { return VM.marques[id] || { nom: id }; }
function vmModele(slug) { return VM.modeles.find((m) => m.slug === slug); }
function vmOccasion(id) { return VM.occasions.find((o) => o.id === id); }
