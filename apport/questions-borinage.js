/* ============================================================================
   APPORT DE QUESTIONS — Quaregnon, le Borinage, le borain.

   Rien ici n'a été écrit de mémoire. Chaque réponse vient d'une page ouverte
   et lue le 12 août 2026 ; la clé de source pointe vers cette page précise,
   dans `apport/sources-borinage.js`.

   Les questions marquées `toiDeVoir: true` sont celles de langue. Elles
   sortent du lexique d'André Capron, du dictionnaire de Georges Larcin et des
   travaux de Pierre Ruelle — jamais de l'oreille de celui qui les a écrites.
   Hugo est du coin : si l'une sonne faux, c'est elle qui a tort.
   ============================================================================ */

"use strict";

const QUESTIONS_APPORT = [
  /* ====================================================================== */
  /* ============================= QUAREGNON ============================== */
  /* ====================================================================== */

  /* ------------------------ niveau 1 — touriste ------------------------- */

  {
    id: "q-wasmuel-rattachee",
    theme: "quaregnon", niveau: 1,
    q: "Quelle ancienne commune a été rattachée à Quaregnon lors de la fusion des communes ?",
    r: ["Wasmuël", "Hornu", "Jemappes", "Flénu"],
    bonne: 0,
    pourquoi: "Wasmuël est l'autre moitié de la commune. Hornu est parti à Boussu, "
            + "Jemappes et Flénu à Mons.",
    sources: ["a-wp-quaregnon", "a-quaregnon-tourisme"]
  },
  {
    id: "q-limitrophe-boussu",
    theme: "quaregnon", niveau: 1,
    q: "Laquelle de ces communes touche Quaregnon ?",
    r: ["Boussu", "Dour", "Quiévrain", "Hensies"],
    bonne: 0,
    pourquoi: "Quaregnon a cinq voisines : Saint-Ghislain, Boussu, Mons, Frameries "
            + "et Colfontaine. Dour, Quiévrain et Hensies sont plus loin vers l'ouest.",
    sources: ["a-wp-quaregnon"]
  },
  {
    id: "q-cavalcade-nom",
    theme: "quaregnon", niveau: 1,
    q: "Quelle grande fête costumée descend les rues de Quaregnon chaque année depuis 1925 ?",
    r: ["La cavalcade", "Le Doudou", "Le carnaval de Binche", "La ducasse d'Ath"],
    bonne: 0,
    pourquoi: "La cavalcade de Quaregnon, avec ses gilles et ses sociétés, a fêté "
            + "son centenaire il y a peu.",
    sources: ["a-quaregnon-festivites", "a-wp-quaregnon"]
  },
  {
    id: "q-hotel-ville-annee",
    theme: "quaregnon", niveau: 1,
    q: "De quelle année date l'hôtel de ville de Quaregnon ?",
    r: ["1938", "1894", "1848", "1972"],
    bonne: 0,
    pourquoi: "Première pierre en octobre 1937, inauguration le 11 septembre 1938. "
            + "1894, c'est la Charte, pas la maison communale.",
    sources: ["a-wp-quaregnon", "a-quaregnon-tourisme"]
  },
  {
    id: "q-gare-ligne",
    theme: "quaregnon", niveau: 1,
    q: "La gare de Quaregnon est sur la ligne de chemin de fer qui relie Mons à quelle ville ?",
    r: ["Quiévrain", "Tournai", "Charleroi", "Ath"],
    bonne: 0,
    pourquoi: "C'est la ligne 97, Mons–Quiévrain, mise en service à Quaregnon en 1865.",
    sources: ["a-wp-quaregnon"]
  },
  {
    id: "q-cuisenaire-naissance",
    theme: "quaregnon", niveau: 1,
    q: "Georges Cuisenaire, l'inventeur des réglettes de couleurs pour apprendre le calcul, est né dans quelle commune ?",
    r: ["Quaregnon", "Thuin", "Mons", "Pâturages"],
    bonne: 0,
    pourquoi: "Né à Quaregnon le 7 septembre 1891. Il a fait toute sa carrière "
            + "d'instituteur à Thuin, où il est mort — mais il est bien de chez nous.",
    sources: ["a-wp-cuisenaire", "a-quaregnon-personnages"]
  },
  {
    id: "q-plus-petite-commune",
    theme: "quaregnon", niveau: 1,
    q: "Quaregnon se présente comment, parmi les communes du Borinage ?",
    r: ["Comme la plus petite", "Comme la plus grande", "Comme la plus ancienne",
        "Comme la plus peuplée"],
    bonne: 0,
    pourquoi: "Onze kilomètres carrés à peine : c'est la plus petite commune boraine, "
            + "et elle y tient.",
    sources: ["a-quaregnon-tourisme"]
  },
  {
    id: "q-blason-lions",
    theme: "quaregnon", niveau: 1,
    q: "Le blason de Quaregnon porte quatre lions. Ce sont les armes de quelle province ?",
    r: ["Le Hainaut", "Namur", "Liège", "Le Brabant"],
    bonne: 0,
    pourquoi: "Les quatre lions du Hainaut, à côté des armes de l'abbaye de "
            + "Saint-Ghislain, qui a tenu une part de Quaregnon au Moyen Âge.",
    sources: ["a-wp-quaregnon"]
  },
  {
    id: "q-cours-eau-nombre",
    theme: "quaregnon", niveau: 1,
    q: "Combien de cours d'eau traversent le territoire de Quaregnon ?",
    r: ["Quatre", "Un seul", "Deux", "Sept"],
    bonne: 0,
    pourquoi: "Le rieu de Wasmes, le rieu du Cœur, le Richon et la Haine. Le rieu "
            + "du Cœur a donné son nom au plus profond charbonnage du Borinage.",
    sources: ["a-quaregnon-histoire", "a-wp-quaregnon"]
  },
  {
    id: "q-nationalites-nombre",
    theme: "quaregnon", niveau: 1,
    q: "Combien de nationalités vivent à Quaregnon, d'après la commune elle-même ?",
    r: ["Plus de trente", "Trois", "Une dizaine", "Plus de cent"],
    bonne: 0,
    pourquoi: "Plus de trente nationalités. Les charbonnages ont fait venir le monde "
            + "entier, et le monde entier est resté.",
    sources: ["a-quaregnon-tourisme"]
  },
  {
    id: "q-communautes-etrangeres",
    theme: "quaregnon", niveau: 1,
    q: "Quelles sont les deux communautés étrangères les plus nombreuses à Quaregnon ?",
    r: ["L'italienne et la turque", "La polonaise et la grecque",
        "L'espagnole et la portugaise", "La congolaise et la rwandaise"],
    bonne: 0,
    pourquoi: "Les Italiens sont venus pour le charbon dès 1946, les Turcs plus tard. "
            + "Les deux communautés sont toujours là.",
    sources: ["a-quaregnon-tourisme"]
  },
  {
    id: "q-monsville-quartier",
    theme: "quaregnon", niveau: 1,
    q: "Le quartier de Monsville, à Quaregnon, c'était quoi jusque dans les années 1960 ?",
    r: ["Une artère commerçante très fréquentée", "Un charbonnage", "Un terril",
        "Une gare de triage"],
    bonne: 0,
    pourquoi: "On y venait faire ses courses le week-end. Le nom vient de Montleville, "
            + "l'un des quatre quartiers historiques de Quaregnon.",
    sources: ["a-quaregnon-tourisme", "a-quaregnon-histoire"]
  },

  /* ------------------------- niveau 2 — borain -------------------------- */

  {
    id: "q-cavalcade-premiere",
    theme: "quaregnon", niveau: 2,
    q: "En quel mois et quelle année a eu lieu la toute première cavalcade de Quaregnon ?",
    r: ["En février 1925", "En avril 1926", "En mars 1894", "En juin 1930"],
    bonne: 0,
    pourquoi: "Février 1925, le dimanche de la mi-carême, à l'initiative du comité "
            + "des cercles réunis de la Place.",
    sources: ["a-quaregnon-festivites"]
  },
  {
    id: "q-cavalcade-budget",
    theme: "quaregnon", niveau: 2,
    q: "Avec quel budget la première cavalcade de Quaregnon a-t-elle été montée, en 1925 ?",
    r: ["1 500 francs", "25 000 francs", "60 000 francs", "150 000 francs"],
    bonne: 0,
    pourquoi: "Mille cinq cents francs, et un immense succès quand même. L'année "
            + "suivante, le budget passait à vingt-cinq mille.",
    sources: ["a-quaregnon-festivites"]
  },
  {
    id: "q-cavalcade-paques",
    theme: "quaregnon", niveau: 2,
    q: "Pourquoi la cavalcade de Quaregnon a-t-elle quitté la mi-carême pour le dimanche de Pâques, dès 1926 ?",
    r: ["Pour ne pas tomber en même temps que Binche et La Louvière",
        "Parce qu'il pleuvait trop en février", "Parce que l'église l'exigeait",
        "Pour la coller à la ducasse d'été"],
    bonne: 0,
    pourquoi: "Question de concurrence : à la mi-carême, tout le Hainaut défile en "
            + "même temps. À Pâques, Quaregnon a la place pour elle.",
    sources: ["a-quaregnon-festivites"]
  },
  {
    id: "q-doublet-comite",
    theme: "quaregnon", niveau: 2,
    q: "Quel bourgmestre a pris la tête du Comité des fêtes de Quaregnon en 1926, faisant entrer la cavalcade au programme communal ?",
    r: ["Oscar Doublet", "Henri Roger", "Georges Plumat", "Alfred Bonjean"],
    bonne: 0,
    pourquoi: "Oscar Doublet. Le cortège de 1926 comptait trente sociétés et près de "
            + "deux cents gilles.",
    sources: ["a-quaregnon-festivites", "a-wp-quaregnon"]
  },
  {
    id: "q-rieu-fermeture",
    theme: "quaregnon", niveau: 2,
    q: "En quelle année le charbonnage du Rieu du Cœur, à Quaregnon, a-t-il fermé ?",
    r: ["1960", "1954", "1976", "1934"],
    bonne: 0,
    pourquoi: "Le 30 avril 1960. Le Grand-Hornu avait fermé en 1954, et le tout "
            + "dernier charbonnage du bassin tiendra jusqu'en 1976.",
    sources: ["a-cw-rieu-du-coeur", "a-wp-mines-borinage"]
  },
  {
    id: "q-rieu-record",
    theme: "quaregnon", niveau: 2,
    q: "Quel record le puits du Rieu du Cœur, à Quaregnon, détenait-il dans le bassin borain ?",
    r: ["La plus grande profondeur", "La plus grosse production annuelle",
        "Le plus grand nombre d'ouvriers", "Le terril le plus haut"],
    bonne: 0,
    pourquoi: "1 358 mètres à la fermeture : les hommes travaillaient avec plus de "
            + "1 350 mètres de terre au-dessus de la tête.",
    sources: ["a-cw-rieu-du-coeur", "a-wp-mines-borinage"]
  },
  {
    id: "q-boule-1887-commune",
    theme: "quaregnon", niveau: 2,
    q: "Le 4 mars 1887, un coup de grisou surprend 113 mineurs au charbonnage de la Boule. Dans quelle commune ?",
    r: ["Quaregnon", "Frameries", "Pâturages", "Hensies"],
    bonne: 0,
    pourquoi: "À Quaregnon. La Boule et le Rieu du Cœur ont d'ailleurs fusionné en "
            + "une seule société en 1890.",
    sources: ["a-wp-mines-borinage"]
  },
  {
    id: "q-malva-nom-de-plume",
    theme: "quaregnon", niveau: 2,
    q: "Constant Malva, l'écrivain mineur né à Quaregnon, c'était le nom de plume de qui ?",
    r: ["Alphonse Bourlard", "Valentin Van Hassel", "Henri Tournelle", "Robert Delcourt"],
    bonne: 0,
    pourquoi: "Alphonse Bourlard, houilleur devenu écrivain, mort de la silicose "
            + "attrapée au fond.",
    sources: ["a-wp-malva", "a-quaregnon-personnages"]
  },
  {
    id: "q-malva-nuit",
    theme: "quaregnon", niveau: 2,
    q: "Quel livre de Constant Malva, le mineur écrivain de Quaregnon, a eu le plus de succès ?",
    r: ["Ma nuit au jour le jour", "Misère au Borinage", "Un mineur vous parle",
        "Le Pain quotidien"],
    bonne: 0,
    pourquoi: "« Ma nuit au jour le jour » (1953), tiré de son journal de 1938. "
            + "« Un mineur vous parle » est de lui aussi, mais a marché moins fort.",
    sources: ["a-wp-malva"]
  },
  {
    id: "q-henri-roger-premier",
    theme: "quaregnon", niveau: 2,
    q: "Henri Roger, de Quaregnon, est resté dans l'histoire comme quoi ?",
    r: ["Le premier bourgmestre socialiste", "Le fondateur du Grand-Hornu",
        "Le rédacteur de la Charte", "Un ténor de l'Opéra de Paris"],
    bonne: 0,
    pourquoi: "Premier député socialiste et premier bourgmestre socialiste — que le "
            + "roi a d'ailleurs refusé de nommer.",
    sources: ["a-quaregnon-personnages", "a-wp-quaregnon"]
  },
  {
    id: "q-croix-terril-matiere",
    theme: "quaregnon", niveau: 2,
    q: "Une croix de seize tonnes a été inaugurée en 1939 sur un terril de Quaregnon. En quoi est-elle faite ?",
    r: ["En béton", "En fonte", "En bois", "En granit"],
    bonne: 0,
    pourquoi: "Dix-huit mètres et seize tonnes de béton, inaugurés le 24 septembre 1939 : "
            + "la Croix du Terril.",
    sources: ["a-wp-quaregnon"]
  },
  {
    id: "q-1914-civils",
    theme: "quaregnon", niveau: 2,
    q: "Le 23 août 1914, combien de civils ont été exécutés à Quaregnon par l'armée allemande ?",
    r: ["66", "12", "137", "300"],
    bonne: 0,
    pourquoi: "Soixante-six civils fusillés, et 137 maisons détruites — les deux "
            + "chiffres se confondent souvent.",
    sources: ["a-wp-quaregnon"]
  },
  {
    id: "q-eglise-consacree",
    theme: "quaregnon", niveau: 2,
    q: "En quelle année l'actuelle église Saint-Quentin de Quaregnon a-t-elle été consacrée ?",
    r: ["1937", "1910", "1896", "1980"],
    bonne: 0,
    pourquoi: "Première pierre le 2 juillet 1933, consécration le 18 octobre 1937. "
            + "1910, c'est Notre-Dame de Lourdes ; 1896, le temple protestant.",
    sources: ["a-wp-quaregnon"]
  },
  {
    id: "q-armoiries-1981",
    theme: "quaregnon", niveau: 2,
    q: "En quelle année les armoiries actuelles de Quaregnon ont-elles été octroyées ?",
    r: ["1981", "1894", "1938", "1830"],
    bonne: 0,
    pourquoi: "Le 26 novembre 1981, quelques années après la fusion avec Wasmuël.",
    sources: ["a-wp-quaregnon"]
  },

  /* ------------------------- niveau 3 — pur jus ------------------------- */

  {
    id: "q-etymologie-quaternio",
    theme: "quaregnon", niveau: 3,
    q: "L'explication la plus plausible du nom « Quaregnon » le fait venir de quel mot latin ?",
    r: ["Quaternio, un groupe de quatre", "Quercus, le chêne", "Quadriga, le char",
        "Quies, le repos"],
    bonne: 0,
    pourquoi: "Quaternio : « un groupe de quatre ». Quatre quartiers, quatre "
            + "seigneuries, quatre cours d'eau — le chiffre revient partout.",
    sources: ["a-quaregnon-histoire", "a-wp-quaregnon"]
  },
  {
    id: "q-quartier-sud",
    theme: "quaregnon", niveau: 3,
    q: "Parmi les quatre quartiers historiques de Quaregnon, lequel occupait le sud ?",
    r: ["Montleville", "Marionville", "Assonchleville", "Wasmuël"],
    bonne: 0,
    pourquoi: "Montleville au sud — devenu Monsville. Marionville tenait le nord et "
            + "Assonchleville le centre.",
    sources: ["a-quaregnon-histoire"]
  },
  {
    id: "q-seigneuries-quatre",
    theme: "quaregnon", niveau: 3,
    q: "Au XIIIe siècle, combien de seigneuries se partageaient Quaregnon ?",
    r: ["Quatre", "Une seule", "Deux", "Sept"],
    bonne: 0,
    pourquoi: "Sainte-Waudru, le comte de Hainaut, l'abbaye de Saint-Ghislain et le "
            + "fief du Val. Quatre maîtres pour un seul village.",
    sources: ["a-quaregnon-histoire"]
  },
  {
    id: "q-tour-classement",
    theme: "quaregnon", niveau: 3,
    q: "En quelle année la tour Saint-Quentin de Quaregnon a-t-elle été classée ?",
    r: ["1980", "1936", "1959", "1994"],
    bonne: 0,
    pourquoi: "Classée le 21 août 1980. C'est ce qui reste de la vieille église, "
            + "bâtie entre le XIIIe et le XVIe siècle.",
    sources: ["a-wp-quaregnon"]
  },
  {
    id: "q-houilleres-1854",
    theme: "quaregnon", niveau: 3,
    q: "En quelle année les Houillères réunies de Quaregnon ont-elles été fondées ?",
    r: ["1854", "1783", "1890", "1920"],
    bonne: 0,
    pourquoi: "Le 9 avril 1854. La même année, la société du Rieu du Cœur rachetait "
            + "la concession de la Boule.",
    sources: ["a-wp-quaregnon"]
  },
  {
    id: "q-jumelage-italie",
    theme: "quaregnon", niveau: 3,
    q: "Avec quelle commune italienne Quaregnon est-elle jumelée ?",
    r: ["Assoro", "Assise", "Aoste", "Ascoli Piceno"],
    bonne: 0,
    pourquoi: "Assoro, en Sicile — le jumelage suit le chemin qu'ont pris les mineurs "
            + "italiens venus au Borinage.",
    sources: ["a-wp-quaregnon"]
  },
  {
    id: "q-haquin-nourrissons",
    theme: "quaregnon", niveau: 3,
    q: "Ulysse Haquin, surnommé « le médecin des pauvres » à Quaregnon, a fondé quoi en 1925 ?",
    r: ["Une consultation pour les nourrissons", "Une caisse de secours des mineurs",
        "Un sanatorium", "Une école d'infirmières"],
    bonne: 0,
    pourquoi: "Une consultation pour nourrissons, dans une commune où la mortalité "
            + "infantile était le vrai fléau.",
    sources: ["a-quaregnon-personnages"]
  },
  {
    id: "q-dupuis-stade",
    theme: "quaregnon", niveau: 3,
    q: "Quel architecte quaregnonnais a dessiné le stade communal de Quaregnon ?",
    r: ["Jacques Dupuis", "Bruno Renard", "Henri Guchez", "Victor Horta"],
    bonne: 0,
    pourquoi: "Jacques Dupuis (1914-1984), prix Picard en 1953, un nom qui compte "
            + "dans l'architecture belge.",
    sources: ["a-quaregnon-personnages"]
  },
  {
    id: "q-carlier-prix-rome",
    theme: "quaregnon", niveau: 3,
    q: "Quelle distinction le peintre quaregnonnais Modeste Carlier a-t-il remportée en 1850 ?",
    r: ["Le Prix de Rome", "Le prix Picard", "La médaille de la Ville de Mons",
        "Le Grand Prix de Bruxelles"],
    bonne: 0,
    pourquoi: "Le Prix de Rome, qui l'a mené à Paris puis en Italie. Victor Dieu, "
            + "autre Quaregnonnais, aura le premier prix de Rome en 1901.",
    sources: ["a-quaregnon-personnages"]
  },
  {
    id: "q-godart-surnom",
    theme: "quaregnon", niveau: 3,
    q: "Comment surnommait-on Jules Godart, le ténor né à Quaregnon en 1877 ?",
    r: ["Le Grand Blond", "Le Rossignol borain", "Le Renard", "Le Coq du Borinage"],
    bonne: 0,
    pourquoi: "« Le Grand Blond ». Il a chanté à l'Opéra de Paris et il est mort à "
            + "trente-deux ans.",
    sources: ["a-quaregnon-personnages"]
  },
  {
    id: "q-houx-caire",
    theme: "quaregnon", niveau: 3,
    q: "Pharaon Houx, baryton quaregnonnais, a chanté à l'opéra de quelle ville ?",
    r: ["Le Caire", "Milan", "Vienne", "Buenos Aires"],
    bonne: 0,
    pourquoi: "Au Caire — avec un prénom pareil, c'était écrit. On le surnommait "
            + "« le chercheur d'or ».",
    sources: ["a-quaregnon-personnages"]
  },
  {
    id: "q-bonjean-fin",
    theme: "quaregnon", niveau: 3,
    q: "Alfred Bonjean a été bourgmestre de Quaregnon à partir de 1957. Jusqu'à quand ?",
    r: ["1976", "1965", "1984", "1994"],
    bonne: 0,
    pourquoi: "Jusqu'en 1976, l'année de la fusion des communes. Résistant décoré, "
            + "député et sénateur par ailleurs.",
    sources: ["a-quaregnon-personnages"]
  },
  {
    id: "q-hismans-ministre",
    theme: "quaregnon", niveau: 3,
    q: "Quel bourgmestre de Quaregnon, entré en fonction en 1976, a aussi été sénateur et ministre régional wallon ?",
    r: ["Edgard Hismans", "Alfred Bonjean", "Georges Plumat", "Guy Roland"],
    bonne: 0,
    pourquoi: "Edgard Hismans (1930-1995). Guy Roland, lui, n'arrive à la barre "
            + "qu'en 2001.",
    sources: ["a-quaregnon-personnages", "a-wp-quaregnon"]
  },

  /* ====================================================================== */
  /* ============================== BORINAGE ============================== */
  /* ====================================================================== */

  /* ------------------------ niveau 1 — touriste ------------------------- */

  {
    id: "b-arrondissement-nom",
    theme: "borinage", niveau: 1,
    q: "Comment s'appelle l'arrondissement administratif qui regroupe Mons et les communes du Borinage ?",
    r: ["Mons-Borinage", "Hainaut-Ouest", "Mons-Quiévrain", "Borinage-Centre"],
    bonne: 0,
    pourquoi: "Mons-Borinage, créé en 1977. C'est la seule fois où le mot « Borinage » "
            + "entre dans une découpe officielle.",
    sources: ["a-wp-borinage"]
  },
  {
    id: "b-arrondissement-combien",
    theme: "borinage", niveau: 1,
    q: "Combien de communes compte l'arrondissement de Mons-Borinage ?",
    r: ["Treize", "Sept", "Vingt", "Trente-deux"],
    bonne: 0,
    pourquoi: "Treize : Mons et douze voisines, de Hensies à Quévy en passant par "
            + "Quaregnon.",
    sources: ["a-wp-borinage"]
  },
  {
    id: "b-misere-realisateurs",
    theme: "borinage", niveau: 1,
    q: "Qui a réalisé le documentaire « Misère au Borinage » ?",
    r: ["Henri Storck et Joris Ivens", "Les frères Dardenne", "Chantal Akerman",
        "André Delvaux"],
    bonne: 0,
    pourquoi: "Le Belge Henri Storck et le Néerlandais Joris Ivens. Un film militant "
            + "qui a fait le tour du monde et qu'on a interdit un peu partout.",
    sources: ["a-wp-borinage"]
  },
  {
    id: "b-misere-annee",
    theme: "borinage", niveau: 1,
    q: "De quelle année date le film « Misère au Borinage » ?",
    r: ["1933", "1912", "1956", "1970"],
    bonne: 0,
    pourquoi: "1933, l'année qui suit la grande grève. Ivens est revenu d'URSS "
            + "exprès pour le tourner.",
    sources: ["a-wp-borinage"]
  },
  {
    id: "b-jemappes-annee",
    theme: "borinage", niveau: 1,
    q: "En quelle année s'est déroulée la bataille de Jemappes, aux portes du Borinage ?",
    r: ["1792", "1815", "1830", "1914"],
    bonne: 0,
    pourquoi: "Le 6 novembre 1792. Waterloo, c'est 1815 ; l'indépendance belge, 1830.",
    sources: ["a-wp-borinage"]
  },
  {
    id: "b-grand-hornu-architecte",
    theme: "borinage", niveau: 1,
    q: "Quel architecte a bâti le Grand-Hornu, au Borinage ?",
    r: ["Bruno Renard", "Victor Horta", "Henri Guchez", "Henri De Gorge"],
    bonne: 0,
    pourquoi: "Bruno Renard, architecte tournaisien, à partir de 1825. De Gorge est "
            + "le patron qui a commandé le chantier, pas l'architecte.",
    sources: ["a-wp-grand-hornu"]
  },
  {
    id: "b-sainte-barbe-patronne",
    theme: "borinage", niveau: 1,
    q: "Quelle sainte est la patronne des charbonniers, dont on fête le jour au Borinage ?",
    r: ["Sainte Barbe", "Sainte Waudru", "Sainte Élisabeth", "Sainte Rita"],
    bonne: 0,
    pourquoi: "Sainte Barbe. En borain, on dit tout simplement : « Sēte Barbe c'èst "
            + "l' fiète dès carbëniers ».",
    sources: ["a-capron-lexique-1"]
  },
  {
    id: "b-crossage-saison",
    theme: "borinage", niveau: 1,
    q: "À quelle période de l'année pratique-t-on surtout le crossage, le jeu traditionnel du Borinage ?",
    r: ["D'octobre à mars", "En plein été", "À Pâques uniquement", "Toute l'année"],
    bonne: 0,
    pourquoi: "D'octobre à mars : on joue à travers champs, une fois les cultures "
            + "rentrées. Le paysan d'abord, le joueur ensuite.",
    sources: ["a-blog-crossage"]
  },
  {
    id: "b-vangogh-denis-metier",
    theme: "borinage", niveau: 1,
    q: "À Petit-Wasmes, Van Gogh logeait chez Jean-Baptiste Denis. Quel était le métier de son logeur ?",
    r: ["Boulanger", "Mineur", "Instituteur", "Pasteur"],
    bonne: 0,
    pourquoi: "Boulanger. C'est dans cette maison que Van Gogh a pris le charbonnage "
            + "comme premier sujet de dessin.",
    sources: ["a-visitmons-vangogh-wasmes"]
  },
  {
    id: "b-vangogh-cuesmes-aujourdhui",
    theme: "borinage", niveau: 1,
    q: "Qu'est devenue la maison où Van Gogh a vécu à Cuesmes ?",
    r: ["Un musée", "Une école", "Une brasserie", "Un tas de gravats"],
    bonne: 0,
    pourquoi: "Un musée. Elle a pourtant failli disparaître : à l'abandon pendant "
            + "presque un siècle, rachetée par Mons en 1972.",
    sources: ["a-wp-vangogh-cuesmes"]
  },
  {
    id: "b-derniere-fosse-annee",
    theme: "borinage", niveau: 1,
    q: "En quelle année le dernier charbonnage encore en activité du bassin borain a-t-il fermé ?",
    r: ["1976", "1960", "1954", "1984"],
    bonne: 0,
    pourquoi: "1976. Après deux siècles et demi d'extraction, le Borinage a cessé "
            + "d'être un pays de charbon.",
    sources: ["a-wp-mines-borinage"]
  },
  {
    id: "b-italiens-echange",
    theme: "borinage", niveau: 1,
    q: "En 1946, la Belgique a fait venir des mineurs italiens dans ses charbonnages en échange de quoi ?",
    r: ["De charbon livré à l'Italie", "D'acier", "De blé", "D'argent comptant"],
    bonne: 0,
    pourquoi: "Du charbon. Des hommes contre du combustible : l'accord s'appelle "
            + "d'ailleurs le protocole « charbon contre hommes ».",
    sources: ["a-wp-immigration-italienne"]
  },
  {
    id: "b-warquignies-legende",
    theme: "borinage", niveau: 1,
    q: "Le village borain de Warquignies doit sa réputation à quelle légende ?",
    r: ["Ses sorcières", "Son dragon", "Son loup-garou", "Sa dame blanche"],
    bonne: 0,
    pourquoi: "Le « village à sorcières », qui organise toujours son Sabbat. La "
            + "légende viendrait des protestants forcés de se réunir la nuit, en cachette.",
    sources: ["a-blog-sorcieres"]
  },

  /* ------------------------- niveau 2 — borain -------------------------- */

  {
    id: "b-agrappe-date",
    theme: "borinage", niveau: 2,
    q: "Quel jour a eu lieu la catastrophe de l'Agrappe, la plus meurtrière du Borinage ?",
    r: ["Le 17 avril 1879", "Le 4 mars 1887", "Le 8 août 1956", "Le 15 mai 1934"],
    bonne: 0,
    pourquoi: "Le 17 avril 1879. Van Gogh, alors évangéliste dans la région, est venu "
            + "soigner les brûlés.",
    sources: ["a-wp-mines-borinage"]
  },
  {
    id: "b-agrappe-morts",
    theme: "borinage", niveau: 2,
    q: "Combien de mineurs le coup de grisou de 1879 a-t-il tués au charbonnage de l'Agrappe ?",
    r: ["121", "57", "113", "262"],
    bonne: 0,
    pourquoi: "Cent vingt et un. Les autres chiffres sont ceux d'autres catastrophes : "
            + "Lambrechies, la Boule, le Bois du Cazier.",
    sources: ["a-wp-mines-borinage"]
  },
  {
    id: "b-agrappe-commune",
    theme: "borinage", niveau: 2,
    q: "Dans quelle commune du Borinage se trouvait le charbonnage de l'Agrappe ?",
    r: ["Frameries", "Quaregnon", "Hensies", "Boussu"],
    bonne: 0,
    pourquoi: "Frameries. Le puits n°2 de l'Agrappe est le plus meurtrier du bassin, "
            + "toutes catastrophes confondues.",
    sources: ["a-wp-mines-borinage"]
  },
  {
    id: "b-lambrechies-commune",
    theme: "borinage", niveau: 2,
    q: "La catastrophe du Fief de Lambrechies, en mai 1934, a frappé quelle commune du Borinage ?",
    r: ["Pâturages", "Quaregnon", "Frameries", "Hensies"],
    bonne: 0,
    pourquoi: "Pâturages. Cinquante-sept morts en trois jours, dont onze sauveteurs "
            + "tués par un second coup de grisou.",
    sources: ["a-wp-mines-borinage"]
  },
  {
    id: "b-marcasse-1953-morts",
    theme: "borinage", niveau: 2,
    q: "Combien de mineurs le coup de grisou du charbonnage de Marcasse, en janvier 1953, a-t-il tués sur le coup ?",
    r: ["21", "121", "57", "262"],
    bonne: 0,
    pourquoi: "Vingt et un le soir même, trois autres de leurs blessures, la dernière "
            + "victime le 17 mars. Le roi Baudouin est venu voir les brûlés à l'hôpital.",
    sources: ["a-blog-marcasse"]
  },
  {
    id: "b-greve-1932-charbonnage",
    theme: "borinage", niveau: 2,
    q: "Dans quel charbonnage la grande grève de 1932 au Borinage a-t-elle démarré ?",
    r: ["Le Grand Trait", "Le Grand-Hornu", "Marcasse", "Le Rieu du Cœur"],
    bonne: 0,
    pourquoi: "Au Grand Trait, le 30 mai 1932, spontanément. Les autres fosses ont "
            + "suivi les jours suivants.",
    sources: ["a-cw-greve-1932"]
  },
  {
    id: "b-greve-1932-cause",
    theme: "borinage", niveau: 2,
    q: "Qu'est-ce qui a mis le feu aux poudres dans les charbonnages borains en 1932 ?",
    r: ["Une baisse des salaires de 5 %", "Une hausse du prix du pain",
        "Un accident mortel", "La fermeture d'un puits"],
    bonne: 0,
    pourquoi: "Cinq pour cent de salaire en moins, annoncés par les patrons "
            + "charbonniers. En pleine crise, c'était la goutte de trop.",
    sources: ["a-cw-greve-1932"]
  },
  {
    id: "b-greve-1932-duree",
    theme: "borinage", niveau: 2,
    q: "Combien de temps a duré la grande grève de 1932 au Borinage ?",
    r: ["Environ dix semaines", "Trois jours", "Six mois", "Deux ans"],
    bonne: 0,
    pourquoi: "Du 30 mai au 10 septembre : dix semaines de bras croisés, dans une "
            + "région déjà affamée.",
    sources: ["a-cw-greve-1932"]
  },
  {
    id: "b-greve-1932-mons",
    theme: "borinage", niveau: 2,
    q: "Le 5 juillet 1932, combien de personnes ont manifesté à Mons pour la grève du Borinage ?",
    r: ["35 000", "3 500", "350", "350 000"],
    bonne: 0,
    pourquoi: "Trente-cinq mille. En août, la grève touchait une centaine de milliers "
            + "de mineurs dans toute la Wallonie.",
    sources: ["a-cw-greve-1932"]
  },
  {
    id: "b-greve-1932-issue",
    theme: "borinage", niveau: 2,
    q: "Comment s'est terminée la grève de 1932 au Borinage ?",
    r: ["Par une augmentation de 1 % et une promesse de réembauche",
        "Par une victoire complète des mineurs",
        "Par la nationalisation des charbonnages",
        "Par la fermeture définitive des puits"],
    bonne: 0,
    pourquoi: "Un pour cent. Après dix semaines de faim, on est loin des 5 % perdus — "
            + "mais l'État de siège avait été décrété dans les régions minières.",
    sources: ["a-cw-greve-1932"]
  },
  {
    id: "b-grand-hornu-maisons",
    theme: "borinage", niveau: 2,
    q: "Combien de maisons comptait la cité ouvrière du Grand-Hornu, au Borinage ?",
    r: ["425", "120", "1 000", "45"],
    bonne: 0,
    pourquoi: "Quatre cent vingt-cinq maisons, le long de six rues larges et pavées. "
            + "Une cité ouvrière modèle, pour l'époque.",
    sources: ["a-wp-grand-hornu"]
  },
  {
    id: "b-grand-hornu-fermeture",
    theme: "borinage", niveau: 2,
    q: "En quelle année le charbonnage du Grand-Hornu a-t-il cessé son activité ?",
    r: ["1954", "1976", "1932", "1910"],
    bonne: 0,
    pourquoi: "1954, dans le cadre des mesures de la CECA. Le site restera à "
            + "l'abandon près de vingt ans.",
    sources: ["a-wp-grand-hornu"]
  },
  {
    id: "b-grand-hornu-guchez",
    theme: "borinage", niveau: 2,
    q: "Qui a racheté le site abandonné du Grand-Hornu en 1971 pour le sauver de la démolition ?",
    r: ["L'architecte Henri Guchez", "La Province de Hainaut", "Henri De Gorge",
        "L'UNESCO"],
    bonne: 0,
    pourquoi: "Un architecte du coin, Henri Guchez, à titre privé. La Province n'a "
            + "repris le site qu'en 1989.",
    sources: ["a-wp-grand-hornu"]
  },
  {
    id: "b-italiens-protocole-date",
    theme: "borinage", niveau: 2,
    q: "Quand la Belgique et l'Italie ont-elles signé le protocole qui a amené les mineurs italiens dans les charbonnages ?",
    r: ["Le 23 juin 1946", "Le 8 août 1956", "Le 11 décembre 1957", "Le 1er mai 1945"],
    bonne: 0,
    pourquoi: "Le 23 juin 1946. Un second protocole suivra en 1957, après le Bois "
            + "du Cazier.",
    sources: ["a-wp-immigration-italienne"]
  },
  {
    id: "b-italiens-quantite",
    theme: "borinage", niveau: 2,
    q: "Combien de charbon la Belgique devait-elle livrer à l'Italie, par mineur venu et par jour ?",
    r: ["200 kg", "20 kg", "2 tonnes", "50 kg"],
    bonne: 0,
    pourquoi: "Deux cents kilos par mineur et par jour. C'est le tarif exact auquel "
            + "un homme était compté.",
    sources: ["a-wp-immigration-italienne"]
  },
  {
    id: "b-crossage-parties",
    theme: "borinage", niveau: 2,
    q: "Au crossage borain, la tête métallique de la crosse a deux parties. Lesquelles ?",
    r: ["Le plat et le pic", "Le fer et le fût", "La tête et la poignée",
        "Le bec et le talon"],
    bonne: 0,
    pourquoi: "Le plat frappe la soule posée au sol, le pic la sort des ornières. "
            + "Le fût, lui, c'est le manche.",
    sources: ["a-blog-crossage"]
  },
  {
    id: "b-marcasse-commune",
    theme: "borinage", niveau: 2,
    q: "Le charbonnage de Marcasse, où Van Gogh est descendu, se trouve sur le territoire de quelle commune actuelle ?",
    r: ["Colfontaine", "Quaregnon", "Boussu", "Frameries"],
    bonne: 0,
    pourquoi: "Colfontaine — c'est-à-dire l'ancienne Wasmes, fusionnée avec Pâturages "
            + "et Warquignies.",
    sources: ["a-blog-marcasse"]
  },

  /* ------------------------- niveau 3 — pur jus ------------------------- */

  {
    id: "b-etymologie-hotte",
    theme: "borinage", niveau: 3,
    q: "Une hypothèse récente fait venir le mot « borain » de quel métier ?",
    r: ["Vendeur ambulant de charbon portant sa marchandise en hotte",
        "Fermier flamand", "Creuseur de puits", "Bûcheron"],
    bonne: 0,
    pourquoi: "Le colporteur de charbon à la hotte. D'autres hypothèses tirent le mot "
            + "de « bourrer » ou du néerlandais « boer » — rien n'est tranché.",
    sources: ["a-wp-borinage"]
  },
  {
    id: "b-acte-1248",
    theme: "borinage", niveau: 3,
    q: "Un acte de 1248 prouve qu'on extrayait déjà le charbon au Borinage. Que prévoyait-il ?",
    r: ["Il limitait le nombre total de puits", "Il interdisait toute extraction",
        "Il créait une taxe sur le charbon", "Il fondait une abbaye"],
    bonne: 0,
    pourquoi: "Il plafonnait le nombre de puits — preuve qu'il y en avait déjà "
            + "beaucoup trop au goût de quelqu'un, au XIIIe siècle.",
    sources: ["a-wp-mines-borinage"]
  },
  {
    id: "b-fourfeyeux",
    theme: "borinage", niveau: 3,
    q: "Comment appelait-on les tout premiers creuseurs de charbon du Borinage, vers l'an mil ?",
    r: ["Les fourfeyeux", "Les hercheurs", "Les porions", "Les sclôneurs"],
    bonne: 0,
    pourquoi: "Les fourfeyeux, c'est-à-dire les fouilleurs. Hercheur, porion et "
            + "sclôneur sont des métiers de la mine, mais bien plus tardifs.",
    sources: ["a-wp-mines-borinage"]
  },
  {
    id: "b-production-1829",
    theme: "borinage", niveau: 3,
    q: "Entre 1822 et 1829, la production de charbon du Borinage passe de 602 000 tonnes à combien ?",
    r: ["1,26 million de tonnes", "800 000 tonnes", "3 millions de tonnes",
        "10 millions de tonnes"],
    bonne: 0,
    pourquoi: "Elle double en sept ans, et dépasse alors celle de la France et de "
            + "l'Allemagne réunies. Le Borinage était le cœur du charbon européen.",
    sources: ["a-wp-borinage"]
  },
  {
    id: "b-sartis-hensies",
    theme: "borinage", niveau: 3,
    q: "Comment s'appelait le tout dernier charbonnage en activité du bassin borain, fermé en mars 1976 ?",
    r: ["Le Siège des Sartis, à Hensies", "Le Grand-Hornu", "Le Rieu du Cœur",
        "Marcasse"],
    bonne: 0,
    pourquoi: "Le Siège des Sartis, à Hensies, le 31 mars 1976. Les autres avaient "
            + "déjà fermé : le Grand-Hornu en 1954, le Rieu du Cœur en 1960.",
    sources: ["a-wp-mines-borinage"]
  },
  {
    id: "b-cazier-morts",
    theme: "borinage", niveau: 3,
    q: "La catastrophe du Bois du Cazier, en 1956, a poussé l'Italie à suspendre l'envoi de ses mineurs vers les charbonnages belges. Combien de morts ?",
    r: ["262", "121", "57", "500"],
    bonne: 0,
    pourquoi: "Deux cent soixante-deux morts le 8 août 1956, en majorité des Italiens. "
            + "Après ça, Rome est passée à un système de contingents.",
    sources: ["a-wp-immigration-italienne"]
  },
  {
    id: "b-alion-quoi",
    theme: "borinage", niveau: 3,
    q: "L'âlion, coutume boraine disparue à la fin du XIXe siècle, célébrait quoi ?",
    r: ["Le retour du soleil et du printemps", "La Sainte-Barbe",
        "La fin de la moisson", "Le carnaval des mineurs"],
    bonne: 0,
    pourquoi: "Le renouveau de la nature — l'ërvënûe dou tans, comme disent encore "
            + "certains vieux Borains.",
    sources: ["a-blog-alion"]
  },
  {
    id: "b-alion-village",
    theme: "borinage", niveau: 3,
    q: "D'après Sigart, dans quel village borain les fêtes de l'âlion ont-elles pris racine ?",
    r: ["Wasmes", "Quaregnon", "Dour", "Frameries"],
    bonne: 0,
    pourquoi: "Wasmes, où Sigart la disait célébrée « depuis un temps immémorial » "
            + "quand il écrivait, en 1866.",
    sources: ["a-blog-alion"]
  },
  {
    id: "b-alion-helios",
    theme: "borinage", niveau: 3,
    q: "À quel mot grec rattache-t-on souvent le nom de la fête boraine de l'âlion ?",
    r: ["Hélios, le soleil", "Aiôn, le temps", "Alétheia, la vérité",
        "Hélénê, le flambeau"],
    bonne: 0,
    pourquoi: "Hélios, le soleil. L'étymologie n'est pas établie, mais Raveline "
            + "comme Libiez défendaient cette piste.",
    sources: ["a-blog-alion"]
  },
  {
    id: "b-warquignies-record",
    theme: "borinage", niveau: 3,
    q: "Avant 1977, quel record le village borain de Warquignies détenait-il ?",
    r: ["Le plus petit village de Belgique", "Le terril le plus haut",
        "Le plus vieux charbonnage", "La plus petite église"],
    bonne: 0,
    pourquoi: "Le plus petit village de Belgique : cinquante-six hectares, environ "
            + "cinq cents habitants. Et un château quand même.",
    sources: ["a-blog-sorcieres"]
  },
  {
    id: "b-crossage-dechouler",
    theme: "borinage", niveau: 3,
    q: "Au crossage du Borinage, après combien de coups l'adversaire vient-il « dé-chouler » ?",
    r: ["Trois", "Un", "Cinq", "Dix"],
    bonne: 0,
    pourquoi: "Après trois coups. Dé-chouler, c'est frapper la balle pour l'éloigner "
            + "du but ou la mettre dans une position impossible.",
    sources: ["a-blog-crossage"]
  },
  {
    id: "b-marcasse-profondeur",
    theme: "borinage", niveau: 3,
    q: "Quelle profondeur atteignait le puits A du charbonnage de Marcasse, au Borinage ?",
    r: ["1 127 mètres", "500 mètres", "1 358 mètres", "2 000 mètres"],
    bonne: 0,
    pourquoi: "1 127 mètres. Les 1 358 mètres, c'est le record du Rieu du Cœur, à "
            + "Quaregnon — les deux chiffres se ressemblent, mais ce ne sont pas les mêmes puits.",
    sources: ["a-blog-marcasse", "a-cw-rieu-du-coeur"]
  },

  /* ====================================================================== */
  /* =============================== BORAIN =============================== */
  /* ====================================================================== */

  /* ------------------------ niveau 1 — touriste ------------------------- */

  {
    id: "bo-petote",
    theme: "borain", niveau: 1, toiDeVoir: true,
    q: "En borain, comment appelle-t-on une pomme de terre ?",
    r: ["Ène pétote", "Én peûgn", "Ène prone", "Ène glène"],
    bonne: 0,
    pourquoi: "Ène pétote. Les autres existent aussi : peûgn c'est la pomme, prone la "
            + "prune, glène la poule.",
    sources: ["a-capron-lexique-2", "a-capron-lexique-1"]
  },
  {
    id: "bo-tche",
    theme: "borain", niveau: 1, toiDeVoir: true,
    q: "En borain, qu'est-ce qu'un « tché » ?",
    r: ["Un chien", "Un chat", "Une souris", "Une poule"],
    bonne: 0,
    pourquoi: "Un chien. Le chat, c'est « cat » ; la souris, « sorite ». Trois mots "
            + "à ne pas confondre quand on rentre du cabaret.",
    sources: ["a-capron-lexique-1", "a-capron-lexique-2"]
  },
  {
    id: "bo-yards",
    theme: "borain", niveau: 1, toiDeVoir: true,
    q: "En borain, que sont des « yârds » ?",
    r: ["De l'argent", "Des enfants", "Des sabots", "Des cailloux"],
    bonne: 0,
    pourquoi: "De l'argent, des sous. On dit aussi « kibus' ». « Baye dès yârds » : "
            + "donne des sous.",
    sources: ["a-capron-lexique-1"]
  },
  {
    id: "bo-toudis",
    theme: "borain", niveau: 1, toiDeVoir: true,
    q: "En borain, que veut dire « toudis » ?",
    r: ["Toujours", "Jamais", "Parfois", "Hier"],
    bonne: 0,
    pourquoi: "Toujours. « C'est toudis mi qu'on ingueûle ! » — c'est toujours moi "
            + "qu'on engueule.",
    sources: ["a-capron-lexique-2"]
  },
  {
    id: "bo-scrand",
    theme: "borain", niveau: 1, toiDeVoir: true,
    q: "Un Borain qui se dit « scrand », il est comment ?",
    r: ["Fatigué", "Content", "Ivre", "Fâché"],
    bonne: 0,
    pourquoi: "Fatigué. Et s'il est « r'maté », c'est pire encore : « pus scrand qu'én "
            + "baudét » — plus fatigué qu'un âne.",
    sources: ["a-capron-lexique-1"]
  },
  {
    id: "bo-tiete",
    theme: "borain", niveau: 1, toiDeVoir: true,
    q: "En borain, où se trouve la « tiète » ?",
    r: ["C'est la tête", "C'est la main", "C'est le genou", "C'est le ventre"],
    bonne: 0,
    pourquoi: "La tête. La main, c'est « mégn » ; le genou, « djinou » ; le ventre, "
            + "« panche ».",
    sources: ["a-capron-lexique-2", "a-capron-lexique-1"]
  },
  {
    id: "bo-iau",
    theme: "borain", niveau: 1, toiDeVoir: true,
    q: "En borain, que boit-on quand on boit de l'« iau » ?",
    r: ["De l'eau", "De la bière", "Du lait", "Du café"],
    bonne: 0,
    pourquoi: "De l'eau. « D'ê bû d' l'iau bié frêche » : j'ai bu de l'eau bien fraîche.",
    sources: ["a-capron-lexique-1"]
  },
  {
    id: "bo-mezon",
    theme: "borain", niveau: 1, toiDeVoir: true,
    q: "En borain, qu'est-ce qu'une « mêzon » ?",
    r: ["Une maison", "Une église", "Une rue", "Une mine"],
    bonne: 0,
    pourquoi: "Une maison — on dit aussi « mon ». « À mon d' » veut dire « chez ».",
    sources: ["a-capron-lexique-2"]
  },
  {
    id: "bo-caud",
    theme: "borain", niveau: 1, toiDeVoir: true,
    q: "En borain, que veut dire « caud » ?",
    r: ["Chaud", "Froid", "Sale", "Beau"],
    bonne: 0,
    pourquoi: "Chaud. Le froid, c'est « fwad » ou « fródûre ». Le picard laisse "
            + "tomber le « ch » français : caud, cat, camp.",
    sources: ["a-capron-lexique-1"]
  },
  {
    id: "bo-biau",
    theme: "borain", niveau: 1, toiDeVoir: true,
    q: "En borain, que veut dire « biau » ?",
    r: ["Beau", "Laid", "Vieux", "Petit"],
    bonne: 0,
    pourquoi: "Beau, au féminin « bèle ». Le laid, c'est « lêd » : « Èle èst pus lêde "
            + "quë tous lès péchés ».",
    sources: ["a-capron-lexique-1", "a-capron-lexique-2"]
  },
  {
    id: "bo-djins",
    theme: "borain", niveau: 1, toiDeVoir: true,
    q: "En borain, qui sont les « djins » ?",
    r: ["Les gens", "Les enfants", "Les mineurs", "Les voisins"],
    bonne: 0,
    pourquoi: "Les gens. « Tous lès djins ēt' su leû porte pou ravizer passer l' "
            + "cortèje » : tout le monde était sur le pas de sa porte pour regarder passer le cortège.",
    sources: ["a-capron-lexique-1"]
  },
  {
    id: "bo-branmint",
    theme: "borain", niveau: 1, toiDeVoir: true,
    q: "En borain, que veut dire « branmint » ?",
    r: ["Beaucoup", "Presque", "Jamais", "Doucement"],
    bonne: 0,
    pourquoi: "Beaucoup. On dit aussi « bocô » ou « ène masse ». La langue ne manque "
            + "pas de façons d'en dire beaucoup.",
    sources: ["a-capron-lexique-1"]
  },
  {
    id: "bo-glene",
    theme: "borain", niveau: 1, toiDeVoir: true,
    q: "En borain, qu'est-ce qu'une « glène » ?",
    r: ["Une poule", "Une chèvre", "Une lampe de mineur", "Une glaise"],
    bonne: 0,
    pourquoi: "Une poule — on dit aussi « pouye ». Et « ël pouye èst l'vée » signifie "
            + "que c'est trop tard, l'affaire est terminée.",
    sources: ["a-capron-lexique-1", "a-capron-lexique-2"]
  },
  {
    id: "bo-marone",
    theme: "borain", niveau: 1, toiDeVoir: true,
    q: "En borain, qu'est-ce qu'une « marone » ?",
    r: ["Un pantalon", "Une jupe", "Un tablier", "Un chapeau"],
    bonne: 0,
    pourquoi: "Un pantalon. Le tablier, c'est « scourswó » ; et une jambe de pantalon, "
            + "un « canon ».",
    sources: ["a-capron-lexique-2"]
  },
  {
    id: "bo-vizegn",
    theme: "borain", niveau: 1, toiDeVoir: true,
    q: "En borain, qu'est-ce qu'un « vizégn » ?",
    r: ["Un voisin", "Un visage", "Un vieillard", "Un veinard"],
    bonne: 0,
    pourquoi: "Un voisin, au féminin « vizène ». Le visage, lui, c'est « vizâje ».",
    sources: ["a-capron-lexique-2"]
  },

  /* ------------------------- niveau 2 — borain -------------------------- */

  {
    id: "bo-djambot",
    theme: "borain", niveau: 2, toiDeVoir: true,
    q: "En borain, qu'est-ce qu'un « djambót » ?",
    r: ["Un garçon", "Un terril", "Un cabaret", "Un sabot"],
    bonne: 0,
    pourquoi: "Un garçon — et « djambote », une fille. Une bande de gamins, c'est "
            + "des « djambot'rîes ».",
    sources: ["a-capron-lexique-1"]
  },
  {
    id: "bo-pleve-nive",
    theme: "borain", niveau: 2, toiDeVoir: true,
    q: "En borain, que désignent la « plêve » et la « nîve » ?",
    r: ["La pluie et la neige", "Le vent et la grêle", "La plaine et la rivière",
        "La plume et le nid"],
    bonne: 0,
    pourquoi: "La pluie et la neige. « M' gardégn èst tout blanc d' nîve » : mon "
            + "jardin est tout blanc de neige.",
    sources: ["a-capron-lexique-2"]
  },
  {
    id: "bo-ouvrer",
    theme: "borain", niveau: 2, toiDeVoir: true,
    q: "En borain, que veut dire le verbe « ouvrer » ?",
    r: ["Travailler", "Ouvrir", "Attendre", "Pleuvoir"],
    bonne: 0,
    pourquoi: "Travailler — le travail, c'est « l'ouvrâje ». Rien à voir avec ouvrir, "
            + "et c'est le piège classique pour un francophone.",
    sources: ["a-capron-lexique-2"]
  },
  {
    id: "bo-brere",
    theme: "borain", niveau: 2, toiDeVoir: true,
    q: "En borain, que veut dire le verbe « brêre » ?",
    r: ["Pleurer", "Courir", "Rire", "Boire"],
    bonne: 0,
    pourquoi: "Pleurer. « N' brèyez gné m'n-infant » : ne pleure pas, mon enfant. "
            + "Un gosse qui pleure pour un rien a « l' brèyoû ».",
    sources: ["a-capron-lexique-1"]
  },
  {
    id: "bo-edvizer",
    theme: "borain", niveau: 2, toiDeVoir: true,
    q: "En borain, que veut dire « ëdvizer » ?",
    r: ["Parler", "Regarder", "Deviner", "Se taire"],
    bonne: 0,
    pourquoi: "Parler. « Ëdvîz' mé borégn, tou m' f'ras plêzi » : parle-moi borain, "
            + "tu me feras plaisir.",
    sources: ["a-capron-lexique-2"]
  },
  {
    id: "bo-carbenier",
    theme: "borain", niveau: 2, toiDeVoir: true,
    q: "En borain, qu'est-ce qu'un « carbënier » ?",
    r: ["Un charbonnier", "Un charretier", "Un cabaretier", "Un charpentier"],
    bonne: 0,
    pourquoi: "Un charbonnier — le charbon, c'est « carbon ». Sainte Barbe, disait-on, "
            + "« c'èst l' fiète dès carbëniers ».",
    sources: ["a-capron-lexique-1"]
  },
  {
    id: "bo-berjique",
    theme: "borain", niveau: 2, toiDeVoir: true,
    q: "Un vieux Borain qui dit « Bèrjique » parle de quoi ?",
    r: ["De la Belgique", "D'une barrique", "D'une brique", "D'un bourgeois"],
    bonne: 0,
    pourquoi: "De la Belgique. Le borain intervertit volontiers le l et le r : "
            + "« carculer » pour calculer, « carvère » pour calvaire, « colidor » pour corridor.",
    sources: ["a-capron-parler"]
  },
  {
    id: "bo-matante",
    theme: "borain", niveau: 2, toiDeVoir: true,
    q: "En borain, qui est votre « matante » ?",
    r: ["Votre tante", "Votre marraine", "Votre grand-mère", "Votre belle-mère"],
    bonne: 0,
    pourquoi: "Votre tante : ma + ta + ante, le possessif s'est soudé au mot et "
            + "personne ne l'a jamais décollé depuis.",
    sources: ["a-capron-parler"]
  },
  {
    id: "bo-fegn-rates",
    theme: "borain", niveau: 2, toiDeVoir: true,
    q: "Un Borain qui a « pus fégn kë lès rates d'église », de quoi souffre-t-il ?",
    r: ["Il a très faim", "Il a très froid", "Il est très pauvre", "Il est très fatigué"],
    bonne: 0,
    pourquoi: "Il crève de faim. Piège : en français, le rat d'église est pauvre ; "
            + "en borain, il a faim. Il y a au moins sept autres façons de le dire.",
    sources: ["a-capron-parler"]
  },
  {
    id: "bo-toubak",
    theme: "borain", niveau: 2, toiDeVoir: true,
    q: "En borain, que fait un ouvrier qui « fêt toubak » ?",
    r: ["Il s'arrête un instant pour souffler", "Il allume sa lampe",
        "Il crache par terre", "Il termine sa journée"],
    bonne: 0,
    pourquoi: "Il prend une pause — le temps de fumer une « bouchîe » ou une "
            + "« torkète ». L'image vient tout droit du tabac.",
    sources: ["a-capron-parler"]
  },
  {
    id: "bo-article-el",
    theme: "borain", niveau: 2, toiDeVoir: true,
    q: "Quel est l'article défini singulier en borain ?",
    r: ["Ël", "Li", "Lu", "Al"],
    bonne: 0,
    pourquoi: "« Ël » au singulier, « lès » au pluriel. Les indéfinis sont « é » au "
            + "masculin, « ène » au féminin, « dès » au pluriel.",
    sources: ["a-wp-borain"]
  },
  {
    id: "bo-instruction-1921",
    theme: "borain", niveau: 2, toiDeVoir: true,
    q: "Selon André Capron, quelle mesure a beaucoup contribué à franciser le borain ?",
    r: ["L'instruction obligatoire, effective en 1921", "La radio, dans les années 1930",
        "L'arrivée des mineurs italiens", "La fermeture des charbonnages"],
    bonne: 0,
    pourquoi: "L'école obligatoire. Le borain s'est mis à passer pour une entrave à "
            + "la promotion sociale — et c'est la bourgeoisie qui l'a lâché la première.",
    sources: ["a-capron-parler"]
  },
  {
    id: "bo-uche",
    theme: "borain", niveau: 2, toiDeVoir: true,
    q: "Chez les vieux auteurs borains, que désigne « l'uche » ?",
    r: ["La porte", "La cheminée", "Le lit", "La rue"],
    bonne: 0,
    pourquoi: "La porte. Raveline écrivait « clower l'uche » pour la fermer ; "
            + "aujourd'hui presque tout le monde dit « frume el porte ».",
    sources: ["a-capron-parler"]
  },
  {
    id: "bo-fatal",
    theme: "borain", niveau: 2, toiDeVoir: true,
    q: "En borain, que veut dire l'adjectif « fatâl » ?",
    r: ["Formidable, énorme", "Mortel", "Fatigant", "Inévitable"],
    bonne: 0,
    pourquoi: "Formidable, fameux — l'inverse du sens français. « T'as fait in fatâl "
            + "niqué l'après-deinner ! »",
    sources: ["a-capron-parler"]
  },

  /* ------------------------- niveau 3 — pur jus ------------------------- */

  {
    id: "bo-fok",
    theme: "borain", niveau: 3, toiDeVoir: true,
    q: "En borain, que signifie « fok » dans « d'n'ê fok deûs mastokes in m' pochète » ?",
    r: ["Ne… que, seulement", "Beaucoup", "Encore", "Presque"],
    bonne: 0,
    pourquoi: "Seulement : je n'ai que deux sous dans ma poche. C'est un des mots "
            + "les plus reconnaissables du parler.",
    sources: ["a-capron-lexique-1"]
  },
  {
    id: "bo-zwes",
    theme: "borain", niveau: 3, toiDeVoir: true,
    q: "En borain, comment dit-on « des œufs » ?",
    r: ["Dès zwés", "Dès wés", "Dès nwés", "Dès glènes"],
    bonne: 0,
    pourquoi: "« Dès zwés ». Au singulier, l'œuf c'est « wé », et un œuf « én nwé » : "
            + "la liaison s'est collée au mot, différemment au singulier et au pluriel.",
    sources: ["a-capron-lexique-2"]
  },
  {
    id: "bo-berzike",
    theme: "borain", niveau: 3, toiDeVoir: true,
    q: "Un Borain « bèrzike », il est comment ?",
    r: ["Ivre", "Malade", "Riche", "Bavard"],
    bonne: 0,
    pourquoi: "Ivre — et par extension un peu cinglé. « Il ēt bèrzike » se dit de "
            + "celui qui revient du cabaret « bié kèrkié », bien chargé.",
    sources: ["a-capron-lexique-1"]
  },
  {
    id: "bo-raclee-huit",
    theme: "borain", niveau: 3, toiDeVoir: true,
    q: "D'après André Capron, une « volée de coups » se dit d'au moins combien de façons en borain ?",
    r: ["Huit", "Deux", "Quatre", "Vingt"],
    bonne: 0,
    pourquoi: "Huit : dëguëzine, docsinâde, docsinée, douye, doublûre, ërplotûre, "
            + "ranse, rapasse. La richesse d'une langue se mesure aussi à ça.",
    sources: ["a-capron-parler"]
  },
  {
    id: "bo-cat-orloje",
    theme: "borain", niveau: 3, toiDeVoir: true,
    q: "En borain, que veut dire « èl cat èst dins l'órlóje » ?",
    r: ["La discorde s'est installée dans le ménage", "Il est très tard",
        "Quelqu'un est mort", "Le temps est détraqué"],
    bonne: 0,
    pourquoi: "Le chat est dans l'horloge : ça va mal dans le couple. L'exemple de "
            + "Tournelle : il demande à sa femme pourquoi elle n'a pas fait de bouillon, et voilà.",
    sources: ["a-capron-parler"]
  },
  {
    id: "bo-cholete-jeu",
    theme: "borain", niveau: 3, toiDeVoir: true,
    q: "L'expression boraine « lèyer l' chólète in l'âe » vient de quel jeu ?",
    r: ["Le crossage", "La balle pelote", "Le tir à l'arc", "Le jeu de cartes"],
    bonne: 0,
    pourquoi: "Du crossage : laisser la cholette dans la haie, c'est renoncer à la "
            + "chercher — donc laisser tomber une querelle.",
    sources: ["a-capron-parler", "a-blog-crossage"]
  },
  {
    id: "bo-livret",
    theme: "borain", niveau: 3, toiDeVoir: true,
    q: "En borain, « rimète ës' livrét à 'ne saki », ça veut dire quoi ?",
    r: ["Le congédier", "L'embaucher", "Le payer", "Le décorer"],
    bonne: 0,
    pourquoi: "Le mettre à la porte. Quand un ouvrier de charbonnage était congédié, "
            + "on lui rendait son livret — le carnet qui suivait l'homme de fosse en fosse.",
    sources: ["a-capron-parler"]
  },
  {
    id: "bo-candjwo",
    theme: "borain", niveau: 3, toiDeVoir: true,
    q: "Un Borain qui « d'meûre ó candjwô » est dans quelle situation ?",
    r: ["Il reste sur une voie de garage, laissé pour compte",
        "Il travaille au fond de la fosse", "Il est au cabaret", "Il est en grève"],
    bonne: 0,
    pourquoi: "Le candjwô, c'était la niche creusée dans la paroi d'une galerie pour "
            + "garer un wagonnet vide. Y rester, c'est être oublié.",
    sources: ["a-capron-parler"]
  },
  {
    id: "bo-coulisses",
    theme: "borain", niveau: 3, toiDeVoir: true,
    q: "Dans les charbonnages borains, qu'étaient les « coulisses » ?",
    r: ["Des rails de voie Decauville", "Des galeries d'aération", "Des vestiaires",
        "Des cordes de sécurité"],
    bonne: 0,
    pourquoi: "Les rails sur lesquels roulaient les wagonnets. D'où « ërmète à "
            + "coulisses » : remettre quelqu'un sur les rails.",
    sources: ["a-capron-parler"]
  },
  {
    id: "bo-gvau-coulisses",
    theme: "borain", niveau: 3, toiDeVoir: true,
    q: "En borain, on dit de quelqu'un que c'est « é g'vau d' coulisses ». Qu'est-ce que ça veut dire ?",
    r: ["Qu'il peut travailler dur", "Qu'il est têtu", "Qu'il boit beaucoup",
        "Qu'il est très grand"],
    bonne: 0,
    pourquoi: "Le cheval de coulisses tirait les wagonnets pleins au fond de la mine. "
            + "Dire ça d'un homme, c'est un compliment.",
    sources: ["a-capron-parler"]
  },
  {
    id: "bo-lamio",
    theme: "borain", niveau: 3, toiDeVoir: true,
    q: "Que veut dire l'expression boraine « sakier l' lamiô » ?",
    r: ["Travailler dur", "Se plaindre", "Boire un coup", "Prendre la fuite"],
    bonne: 0,
    pourquoi: "Tirer le palonnier — la barre où l'on attache les traits du cheval. "
            + "Celle-là vient du métier de charretier, pas de la mine.",
    sources: ["a-capron-parler"]
  },
  {
    id: "bo-nanve",
    theme: "borain", niveau: 3, toiDeVoir: true,
    q: "En borain, un « nanvé » désignait à l'origine quoi ?",
    r: ["Le temps de réciter un Ave Maria", "La pause de midi", "Un coup de grisou",
        "Une pièce de monnaie"],
    bonne: 0,
    pourquoi: "Le temps d'un Ave — d'où le sens d'« un court instant ». Le montois "
            + "dit « avé », le borain a rajouté le n de la liaison.",
    sources: ["a-capron-parler"]
  },
  {
    id: "bo-subjonctif",
    theme: "borain", niveau: 3, toiDeVoir: true,
    q: "Quel temps, moribond en français, est resté d'usage courant en borain ?",
    r: ["L'imparfait du subjonctif", "Le passé simple", "Le futur antérieur",
        "Le plus-que-parfait"],
    bonne: 0,
    pourquoi: "L'imparfait du subjonctif : « i faut que d' dalisse ». Le borain "
            + "l'emploie même là où le français mettrait un présent.",
    sources: ["a-capron-parler"]
  },
  {
    id: "bo-atuire",
    theme: "borain", niveau: 3, toiDeVoir: true,
    q: "En borain, que veut dire « atuire » ?",
    r: ["Tutoyer", "Se taire", "Attirer", "Tuer"],
    bonne: 0,
    pourquoi: "Tutoyer — et c'était sérieux : entre époux c'était rare, d'un enfant "
            + "à ses parents c'était une faute grave, et d'un chef à un ouvrier, une insulte.",
    sources: ["a-capron-parler"]
  },
  {
    id: "bo-raveline",
    theme: "borain", niveau: 3, toiDeVoir: true,
    q: "Henry Raveline, premier grand auteur du borain central, était le pseudonyme de qui ?",
    r: ["Le docteur Valentin Van Hassel, de Pâturages", "Georges Larcin",
        "Pierre Ruelle", "André Capron"],
    bonne: 0,
    pourquoi: "Un médecin de Pâturages (1852-1938). Il a commencé à écrire vers 1875 : "
            + "c'est par son orthographe qu'on sait à quoi ressemblait le borain d'alors.",
    sources: ["a-capron-parler"]
  },
  {
    id: "bo-feller",
    theme: "borain", niveau: 3, toiDeVoir: true,
    q: "Selon quel système les mots borains sont-ils orthographiés dans le lexique d'André Capron ?",
    r: ["Le système Feller", "L'alphabet phonétique international",
        "L'orthographe picarde unifiée", "Le système Larcin"],
    bonne: 0,
    pourquoi: "Le système Feller, avec quelques entorses pour coller à la "
            + "prononciation boraine. C'est la référence pour écrire le wallon et le picard de Belgique.",
    sources: ["a-capron-lexique-1"]
  },
  {
    id: "bo-ruelle-trois-villages",
    theme: "borain", niveau: 3, toiDeVoir: true,
    q: "Selon Pierre Ruelle, dans quels trois villages le borain est-il vraiment uniforme ?",
    r: ["Wasmes, Quaregnon et Pâturages", "Dour, Élouges et Boussu",
        "Frameries, La Bouverie et Eugies", "Jemappes, Flénu et Cuesmes"],
    bonne: 0,
    pourquoi: "Wasmes, Quaregnon et Pâturages : le noyau dur. Frameries et La Bouverie "
            + "penchent vers le Centre, Dour et Élouges vers le rouchi de Valenciennes.",
    sources: ["a-capron-parler"]
  },
  {
    id: "bo-ablagne",
    theme: "borain", niveau: 3, toiDeVoir: true,
    q: "En vieux borain, qu'est-ce qu'une « ablagne » ?",
    r: ["Une fiancée", "Une châtaigne", "Une gifle", "Une écharpe"],
    bonne: 0,
    pourquoi: "Une fiancée, une bonne amie. Le mot est sorti de l'usage : on dit "
            + "maintenant « coumére » ou « métresse ».",
    sources: ["a-capron-parler"]
  },
  {
    id: "bo-carnassier",
    theme: "borain", niveau: 3, toiDeVoir: true,
    q: "En borain, un homme « carnassier à l' soupe », c'est quoi ?",
    r: ["Quelqu'un qui en est très friand", "Quelqu'un qui la refuse",
        "Un gros mangeur de viande", "Un homme violent"],
    bonne: 0,
    pourquoi: "Carnassier, en borain, veut dire « friand de » — sans aucune idée de "
            + "viande. On peut être carnassier au poisson, ou à la soupe.",
    sources: ["a-capron-parler"]
  },
  {
    id: "bo-ruelle-pages",
    theme: "borain", niveau: 3, toiDeVoir: true,
    q: "Combien de pages compte « Le vocabulaire professionnel du Houilleur borain » de Pierre Ruelle ?",
    r: ["213", "1 064", "147", "500"],
    bonne: 0,
    pourquoi: "213 pages, publiées par l'Académie royale de langue et de littérature "
            + "françaises de Belgique. Le pavé de 1 064 pages, c'est le dictionnaire de Larcin.",
    sources: ["a-arllfb-houilleur"]
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = { QUESTIONS_APPORT };
