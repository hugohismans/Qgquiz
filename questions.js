/* ============================================================================
   LES QUESTIONS.

   ---------------------------------------------------------------------------
   HUGO — POUR EN AJOUTER UNE, COPIE CE BLOC ET REMPLIS-LE :

       {
         id: "un-nom-court-unique",
         theme: "quaregnon",         // ou borinage, borain, belgique
         niveau: 3,                  // 1 touriste, 2 borain, 3 pur jus
         q: "Ta question ?",
         r: ["la bonne", "une fausse", "une fausse", "une fausse"],
         bonne: 0,                   // la place de la bonne réponse : 0, 1, 2 ou 3
         pourquoi: "Ce qu'on apprend quand la réponse tombe.",
         sources: ["wp-quaregnon"]   // une clé de sources.js
       },

   `bonne: 0` veut dire « la première de la liste ». Le site mélange les
   réponses tout seul à chaque partie, donc l'ordre écrit ici n'a aucune
   importance — mets la bonne en premier si ça t'arrange.

   Puis lance `node outil-verif-quiz.js` : il attrape les fautes de frappe, les
   sources qui n'existent pas, les doublons, et les questions dont deux
   réponses se ressemblent trop.

   ---------------------------------------------------------------------------
   CE QUI EST MARQUÉ « toiDeVoir: true »

   Ce sont les questions sur le borain. Je les ai tirées d'ouvrages et de
   lexiques, pas de ma mémoire — mais je n'ai jamais entendu parler cette
   langue, et toi si. Si l'une d'elles sonne faux à l'oreille, elle a tort et
   pas toi : corrige-la ou supprime-la. Le compte de ces questions est affiché
   par l'outil de vérification pour qu'on n'oublie pas qu'elles attendent.
   ============================================================================ */

"use strict";

const NIVEAUX = [
  { n: 1, nom: "Touriste",             sous: "On débarque du train à Mons." },
  { n: 2, nom: "Borain",               sous: "On est du coin, et ça se sent." },
  { n: 3, nom: "Quaregnonnais pur jus", sous: "On a un terril dans le jardin." }
];

const THEMES = {
  quaregnon: { nom: "Quaregnon",   couleur: "#d1332e" },
  borinage:  { nom: "Le Borinage", couleur: "#e8b04b" },
  borain:    { nom: "Le borain",   couleur: "#5fa8a0" },
  belgique:  { nom: "La Belgique", couleur: "#b98cc4" }
};

const QUESTIONS = [

  /* ========================= NIVEAU 1 — TOURISTE ========================= */

  {
    id: "pays",
    theme: "quaregnon", niveau: 1,
    q: "Dans quel pays se trouve Quaregnon ?",
    r: ["La Belgique", "La France", "Les Pays-Bas", "Le Luxembourg"],
    bonne: 0,
    pourquoi: "Quaregnon est une commune wallonne, dans le sud de la Belgique.",
    sources: ["wp-quaregnon"]
  },
  {
    id: "province",
    theme: "quaregnon", niveau: 1,
    q: "Dans quelle province de Belgique se trouve Quaregnon ?",
    r: ["Le Hainaut", "Namur", "Liège", "Le Brabant wallon"],
    bonne: 0,
    pourquoi: "Le Hainaut, à l'ouest de la Wallonie, contre la frontière française.",
    sources: ["wp-quaregnon", "uvcw-fiche"]
  },
  {
    id: "region",
    theme: "belgique", niveau: 1,
    q: "Dans quelle Région de Belgique se trouve Quaregnon ?",
    r: ["La Wallonie", "La Flandre", "Bruxelles-Capitale", "La Communauté germanophone"],
    bonne: 0,
    pourquoi: "La Belgique compte trois Régions : la Flandre, la Wallonie et "
            + "Bruxelles-Capitale. Quaregnon est en Wallonie.",
    sources: ["britannica-belgique"]
  },
  {
    id: "provinces-combien",
    theme: "belgique", niveau: 1,
    q: "Combien de provinces compte la Belgique ?",
    r: ["Dix", "Six", "Douze", "Dix-sept"],
    bonne: 0,
    pourquoi: "Dix provinces, trois Régions et trois Communautés — le pays est "
            + "plus compliqué que grand.",
    sources: ["britannica-belgique"]
  },
  {
    id: "langues",
    theme: "belgique", niveau: 1,
    q: "Combien de langues officielles la Belgique compte-t-elle ?",
    r: ["Trois", "Deux", "Une", "Quatre"],
    bonne: 0,
    pourquoi: "Le néerlandais, le français et l'allemand. On oublie souvent le "
            + "troisième, parlé à l'est du pays.",
    sources: ["britannica-belgique"]
  },
  {
    id: "independance",
    theme: "belgique", niveau: 1,
    q: "En quelle année la Belgique devient-elle indépendante ?",
    r: ["1830", "1789", "1918", "1914"],
    bonne: 0,
    pourquoi: "1830. Le pays a donc à peine soixante ans quand la Charte de "
            + "Quaregnon est signée.",
    sources: ["britannica-belgique"]
  },
  {
    id: "roi",
    theme: "belgique", niveau: 1,
    q: "Qui est roi des Belges depuis 2013 ?",
    r: ["Philippe", "Albert II", "Baudouin", "Léopold III"],
    bonne: 0,
    pourquoi: "Philippe est monté sur le trône le 21 juillet 2013, après "
            + "l'abdication de son père Albert II.",
    sources: ["monarchie-be"]
  },
  {
    id: "region-industrielle",
    theme: "borinage", niveau: 1,
    q: "Comment s'appelle la région industrielle autour de Quaregnon ?",
    r: ["Le Borinage", "Le Condroz", "La Campine", "L'Ardenne"],
    bonne: 0,
    pourquoi: "Le Borinage — et Quaregnon se présente elle-même comme son cœur.",
    sources: ["quaregnon-histoire"]
  },
  {
    id: "borinage-ou",
    theme: "borinage", niveau: 1,
    q: "Le Borinage s'étend de quel côté de Mons ?",
    r: ["À l'ouest", "À l'est", "Au nord", "Il entoure la ville"],
    bonne: 0,
    pourquoi: "À l'ouest de Mons. Plus de cent mille habitants, répartis entre "
            + "Quaregnon, Boussu, Frameries, Dour, Colfontaine et Saint-Ghislain.",
    sources: ["quaregnon-histoire"]
  },
  {
    id: "charbon",
    theme: "borinage", niveau: 1,
    q: "Quelle ressource a fait la fortune — et le malheur — du Borinage ?",
    r: ["Le charbon", "Le fer", "L'ardoise", "Le sel"],
    bonne: 0,
    pourquoi: "Le charbon. Toute l'identité de la région s'est construite autour "
            + "de son extraction.",
    sources: ["culture-boraine"]
  },
  {
    id: "terrils",
    theme: "borinage", niveau: 1,
    q: "Comment appelle-t-on les collines noires laissées par les mines ?",
    autonome: true,
    r: ["Des terrils", "Des mottes", "Des tumulus", "Des cavins"],
    bonne: 0,
    pourquoi: "Les terrils : les déchets remontés du fond, entassés pendant un "
            + "siècle et demi. Ils sont aujourd'hui verts et on s'y promène.",
    sources: ["visitmons-terrils"]
  },
  {
    id: "vangogh",
    theme: "borinage", niveau: 1,
    q: "Quel peintre a vécu au Borinage — et y a décidé de devenir peintre ?",
    r: ["Vincent Van Gogh", "James Ensor", "René Magritte", "Paul Delvaux"],
    bonne: 0,
    pourquoi: "Van Gogh est arrivé prêcheur et reparti artiste. C'est ici que "
            + "tout a basculé.",
    sources: ["borigines", "visitmons-vangogh"]
  },
  {
    id: "grand-hornu-unesco",
    theme: "borinage", niveau: 1,
    q: "Le site du Grand-Hornu est inscrit au patrimoine mondial de quelle organisation ?",
    r: ["L'UNESCO", "L'Union européenne", "Le Conseil de l'Europe", "L'ONU-Habitat"],
    bonne: 0,
    pourquoi: "Le Grand-Hornu est classé à l'UNESCO et abrite aujourd'hui le "
            + "musée d'art contemporain MAC's.",
    sources: ["culture-boraine"]
  },
  {
    id: "riviere",
    theme: "quaregnon", niveau: 1,
    q: "Quelle rivière traverse Quaregnon ?",
    r: ["La Haine", "La Sambre", "La Meuse", "La Dendre"],
    bonne: 0,
    pourquoi: "La Haine — qui a donné son nom au Hainaut, et rien à voir avec le "
            + "sentiment.",
    sources: ["wp-quaregnon"]
  },
  {
    id: "code-postal",
    theme: "quaregnon", niveau: 1,
    q: "Quel est le code postal de Quaregnon ?",
    r: ["7390", "7000", "7300", "6000"],
    bonne: 0,
    pourquoi: "7390, partagé avec Wasmuël.",
    sources: ["wp-quaregnon"]
  },
  {
    id: "borain-quelle-langue",
    theme: "borain", niveau: 1,
    q: "Le borain est une forme de quelle langue ?",
    r: ["Le picard", "Le wallon", "Le flamand", "Le breton"],
    bonne: 0,
    pourquoi: "Le borain est une variété du picard — et non du wallon, contrairement "
            + "à ce qu'on croit souvent ailleurs en Belgique.",
    sources: ["wp-borain", "wp-picard"],
    toiDeVoir: true
  },
  {
    id: "habitants-combien",
    theme: "quaregnon", niveau: 1,
    q: "Combien d'habitants à Quaregnon, à peu près ?",
    r: ["Environ 19 000", "Environ 3 000", "Environ 65 000", "Environ 150 000"],
    bonne: 0,
    pourquoi: "18 959 habitants au 1er janvier 2024.",
    sources: ["uvcw-fiche", "hainaut-fiche"]
  },
  {
    id: "surnom-charte",
    theme: "quaregnon", niveau: 1,
    q: "Quaregnon se fait appeler « la cité de la … » quoi ?",
    r: ["La Charte", "La Mine", "La Haine", "La Lampe"],
    bonne: 0,
    pourquoi: "La cité de la Charte, en mémoire du texte signé ici en 1894.",
    sources: ["quaregnon-charte"]
  },

  /* ========================== NIVEAU 2 — BORAIN ========================== */

  {
    id: "sections",
    theme: "quaregnon", niveau: 2,
    q: "De quelles deux entités la commune de Quaregnon est-elle composée ?",
    r: ["Quaregnon et Wasmuël", "Quaregnon et Jemappes", "Quaregnon et Flénu",
        "Quaregnon et Hornu"],
    bonne: 0,
    pourquoi: "Quaregnon et Wasmuël, réunies à la fusion des communes.",
    sources: ["wp-quaregnon"]
  },
  {
    id: "charte-quoi",
    theme: "quaregnon", niveau: 2,
    q: "La Charte de Quaregnon est le texte fondateur de quoi ?",
    r: ["Du socialisme belge", "De la Belgique indépendante",
        "Des syndicats chrétiens", "De la sécurité sociale"],
    bonne: 0,
    pourquoi: "C'est la déclaration de principes du Parti ouvrier belge, "
            + "l'ancêtre du parti socialiste.",
    sources: ["wp-charte", "quaregnon-charte"]
  },
  {
    id: "charte-annee",
    theme: "quaregnon", niveau: 2,
    q: "En quelle année la Charte de Quaregnon est-elle adoptée ?",
    r: ["1894", "1885", "1830", "1936"],
    bonne: 0,
    pourquoi: "1894, au dixième congrès du Parti ouvrier belge, tenu à Quaregnon.",
    sources: ["wp-charte"]
  },
  {
    id: "charte-parti",
    theme: "quaregnon", niveau: 2,
    q: "Quel parti a adopté la Charte de Quaregnon ?",
    r: ["Le Parti ouvrier belge", "Le Parti communiste", "Le Parti catholique",
        "Le Parti libéral"],
    bonne: 0,
    pourquoi: "Le POB, fondé en 1885 — la Charte lui donne sa doctrine neuf ans plus tard.",
    sources: ["wp-charte"]
  },
  {
    id: "charte-auteur",
    theme: "quaregnon", niveau: 2,
    q: "Qui est le principal auteur de la Charte de Quaregnon ?",
    r: ["Émile Vandervelde", "Achille Delattre", "César De Paepe", "Jules Destrée"],
    bonne: 0,
    pourquoi: "Émile Vandervelde, nourri des encyclopédistes, de la Révolution "
            + "française et de la théorie marxiste.",
    sources: ["wp-charte"]
  },
  {
    id: "surnom-renard",
    theme: "quaregnon", niveau: 2,
    q: "L'autre surnom de Quaregnon est « la cité du Renard ». D'où vient-il ?",
    r: ["D'un ancien charbonnage", "D'une légende de chasse",
        "D'un blason médiéval", "D'un cabaret célèbre"],
    bonne: 0,
    pourquoi: "Le Renard était un puits de charbonnage de la commune.",
    sources: ["quaregnon-histoire", "genealexis"]
  },
  {
    id: "vangogh-arrivee",
    theme: "borinage", niveau: 2,
    q: "Quand Van Gogh arrive-t-il au Borinage ?",
    r: ["En décembre 1878", "En 1885", "En 1872", "En 1890"],
    bonne: 0,
    pourquoi: "Il part pour le Borinage le 26 décembre 1878 et loge d'abord à Pâturages.",
    sources: ["borigines"]
  },
  {
    id: "vangogh-depart",
    theme: "borinage", niveau: 2,
    q: "Quand Van Gogh quitte-t-il le Borinage ?",
    r: ["En octobre 1880", "En 1879", "En 1884", "Il y est mort"],
    bonne: 0,
    pourquoi: "Octobre 1880 : il part pour Bruxelles, décidé à devenir artiste. "
            + "Il mourra en France, dix ans plus tard.",
    sources: ["borigines"]
  },
  {
    id: "vangogh-mine",
    theme: "borinage", niveau: 2,
    q: "En 1879, Van Gogh descend au charbonnage de Marcasse. À quelle profondeur ?",
    r: ["Plus de 700 mètres", "Environ 50 mètres", "Environ 200 mètres",
        "Il n'est jamais descendu"],
    bonne: 0,
    pourquoi: "Plus de 700 mètres, pour partager quelques heures le travail des "
            + "mineurs. Ses supérieurs jugeront son zèle excessif.",
    sources: ["borigines", "visitmons-vangogh"]
  },
  {
    id: "grand-hornu-fondateur",
    theme: "borinage", niveau: 2,
    q: "Qui a fondé le Grand-Hornu ?",
    r: ["Henri de Gorge", "Henri de Gorge-Legrand fils", "Ernest Solvay",
        "John Cockerill"],
    bonne: 0,
    pourquoi: "Un marchand lillois, qui acquiert la concession en 1810.",
    sources: ["culture-boraine"]
  },
  {
    id: "grand-hornu-cite",
    theme: "borinage", niveau: 2,
    q: "À partir de quelle année le Grand-Hornu se dote-t-il d'une cité ouvrière modèle ?",
    r: ["1816", "1750", "1848", "1900"],
    bonne: 0,
    pourquoi: "1816 : logements, dispensaire, épicerie et écoles pour les "
            + "ouvriers et leurs familles. Une idée très en avance.",
    sources: ["culture-boraine"]
  },
  {
    id: "grand-hornu-musee",
    theme: "borinage", niveau: 2,
    q: "Quel musée occupe aujourd'hui le Grand-Hornu ?",
    r: ["Le MAC's, art contemporain", "Le musée de la Mine",
        "Le musée royal de Mariemont", "Le Muséum des sciences naturelles"],
    bonne: 0,
    pourquoi: "Le musée des Arts contemporains de la Fédération Wallonie-Bruxelles.",
    sources: ["culture-boraine"]
  },
  {
    id: "borain-famille",
    theme: "borain", niveau: 2,
    q: "À quelle famille de langues le borain appartient-il ?",
    r: ["Les langues d'oïl", "Les langues d'oc", "Les langues germaniques",
        "Les langues celtiques"],
    bonne: 0,
    pourquoi: "Le borain est une langue d'oïl, comme le français lui-même, "
            + "le picard, le wallon ou le normand.",
    sources: ["wp-borain"],
    toiDeVoir: true
  },
  {
    id: "borain-bia-pays",
    theme: "borain", niveau: 2,
    q: "En borain, que veut dire « qué bia pays » ?",
    r: ["Quel beau pays", "Quel grand malheur", "Quelle drôle de bête",
        "Quel petit village"],
    bonne: 0,
    pourquoi: "On dit « qué bia pays » à Frameries et « qué biau pays » à "
            + "Pâturages : le borain change d'un village à l'autre.",
    sources: ["wp-borain"],
    toiDeVoir: true
  },
  {
    id: "borain-boche",
    theme: "borain", niveau: 2,
    q: "Un Borain qui se dit « d'bôché », il est comment ?",
    r: ["Triste, inconsolable", "Complètement saoul", "Très en colère",
        "Couvert de poussière"],
    bonne: 0,
    pourquoi: "« D'bôché » veut dire désolé, inconsolable. Le mot ressemble à du "
            + "français mais ne dit pas la même chose.",
    sources: ["wp-borain"],
    toiDeVoir: true
  },
  {
    id: "borain-dico-2021",
    theme: "borain", niveau: 2,
    q: "Qui a publié en 2021 un dictionnaire français–picard borain de plus de mille pages ?",
    r: ["Georges Larcin", "Pierre Ruelle", "André Capron", "Henri Tournelle"],
    bonne: 0,
    pourquoi: "« Le trésor lexical du Borinage », Micromania-Lingua, 1064 pages.",
    sources: ["areaw-larcin"],
    toiDeVoir: true
  },
  {
    id: "borinage-pas",
    theme: "borinage", niveau: 2,
    q: "Laquelle de ces communes n'est PAS du Borinage ?",
    r: ["Tournai", "Boussu", "Frameries", "Dour"],
    bonne: 0,
    pourquoi: "Tournai est bien plus au nord-ouest. Le Borinage, c'est Quaregnon, "
            + "Boussu, Frameries, Dour, Colfontaine, Saint-Ghislain.",
    sources: ["quaregnon-histoire"]
  },
  {
    id: "superficie",
    theme: "quaregnon", niveau: 2,
    q: "Quelle est à peu près la superficie de la commune de Quaregnon ?",
    r: ["Environ 11 km²", "Environ 3 km²", "Environ 45 km²", "Environ 120 km²"],
    bonne: 0,
    pourquoi: "Un peu moins de onze kilomètres carrés — petite et très peuplée.",
    sources: ["uvcw-fiche", "hainaut-fiche"]
  },
  {
    id: "delattre",
    theme: "borinage", niveau: 2,
    q: "Achille Delattre, figure syndicale et ministre, était député de quel arrondissement ?",
    r: ["Mons", "Charleroi", "Liège", "Bruxelles"],
    bonne: 0,
    pourquoi: "Député de l'arrondissement de Mons de 1921 à 1954, et ministre du "
            + "Travail et de la Prévoyance sociale.",
    sources: ["quaregnon-celebres"]
  },

  /* ==================== NIVEAU 3 — QUAREGNONNAIS PUR JUS ==================== */

  {
    id: "charte-date-exacte",
    theme: "quaregnon", niveau: 3,
    q: "Quelle est la date exacte de l'adoption de la Charte de Quaregnon ?",
    r: ["Le 26 mars 1894", "Le 1er mai 1894", "Le 14 juillet 1894",
        "Le 26 mars 1885"],
    bonne: 0,
    pourquoi: "Le 26 mars 1894, au terme de deux journées de travail des "
            + "fédérations du POB.",
    sources: ["wp-charte"]
  },
  {
    id: "charte-congres",
    theme: "quaregnon", niveau: 3,
    q: "À quel congrès du Parti ouvrier belge la Charte de Quaregnon est-elle adoptée ?",
    r: ["Le dixième", "Le premier", "Le troisième", "Le vingtième"],
    bonne: 0,
    pourquoi: "Le dixième congrès du POB, tenu à Quaregnon.",
    sources: ["wp-charte"]
  },
  {
    id: "charte-points",
    theme: "quaregnon", niveau: 3,
    q: "Le programme de la Charte de Quaregnon tient en combien de volets ?",
    r: ["Trois : politique, économique, communal", "Deux : politique et social",
        "Quatre", "Un seul, très long"],
    bonne: 0,
    pourquoi: "Trois volets — et le volet communal dit assez ce que la commune "
            + "pesait dans ce mouvement-là.",
    sources: ["wp-charte"]
  },
  {
    id: "renard-puits",
    theme: "quaregnon", niveau: 3,
    q: "« Le Renard » était le puits n°1 de quelle société charbonnière ?",
    r: ["Le Charbonnage du Nord du Rieu du Cœur", "Le Grand-Hornu",
        "Le charbonnage de Marcasse", "Le charbonnage du Levant du Flénu"],
    bonne: 0,
    pourquoi: "La SA Charbonnage du Nord du Rieu du Cœur — le Rieu du Cœur et la "
            + "Boule seront ensuite réunis.",
    sources: ["genealexis"]
  },
  {
    id: "renard-rue",
    theme: "quaregnon", niveau: 3,
    q: "Dans quelle rue de Quaregnon se trouvait le puits du Renard ?",
    r: ["Rue du Coron", "Rue Achille Delattre", "Rue de Monsville",
        "Rue du Grand Trait"],
    bonne: 0,
    pourquoi: "Rue du Coron — le mot dit déjà tout du quartier.",
    sources: ["genealexis"]
  },
  {
    id: "renard-fermeture",
    theme: "quaregnon", niveau: 3,
    q: "En quelle année le puits du Renard a-t-il fermé ?",
    r: ["1961", "1945", "1974", "1989"],
    bonne: 0,
    pourquoi: "1961. Les charbonnages borains s'éteignent l'un après l'autre "
            + "dans ces années-là.",
    sources: ["genealexis"]
  },
  {
    id: "cp-1977",
    theme: "quaregnon", niveau: 3,
    q: "Depuis quelle année le code postal 7390 couvre-t-il Quaregnon ET Wasmuël ?",
    r: ["1977", "1963", "1990", "2001"],
    bonne: 0,
    pourquoi: "1977 — l'année où la Belgique refond ses communes.",
    sources: ["wp-quaregnon"]
  },
  {
    id: "tournelle-naissance",
    theme: "quaregnon", niveau: 3,
    q: "Henri Tournelle, auteur de « Au cabaret borègne », est né à Quaregnon quand ?",
    r: ["Le 1er juillet 1893", "Le 1er juillet 1863", "En 1912", "En 1920"],
    bonne: 0,
    pourquoi: "Le 1er juillet 1893, dans le quartier de la Mariette.",
    sources: ["quaregnon-celebres"]
  },
  {
    id: "tournelle-quartier",
    theme: "quaregnon", niveau: 3,
    q: "Dans quel quartier de Quaregnon Henri Tournelle est-il né ?",
    r: ["La Mariette", "Le Trou au Sable", "Monsville", "Le Coron"],
    bonne: 0,
    pourquoi: "Le quartier de la Mariette.",
    sources: ["quaregnon-celebres"]
  },
  {
    id: "tournelle-cercle",
    theme: "quaregnon", niveau: 3,
    q: "En 1912, Henri Tournelle crée un cercle wallon. Où ?",
    r: ["À Wasmuël", "À Jemappes", "À Mons", "À Gand"],
    bonne: 0,
    pourquoi: "À Wasmuël — et il compose pour l'occasion « Au cabaret borègne ».",
    sources: ["quaregnon-celebres"]
  },
  {
    id: "tournelle-chanson",
    theme: "borain", niveau: 3,
    q: "Quelle chanson Henri Tournelle a-t-il composée pour son cercle wallon de Wasmuël ?",
    r: ["Au cabaret borègne", "El' rue du Coron", "Min bia terril",
        "Les gueules noires"],
    bonne: 0,
    pourquoi: "« Au cabaret borègne » — « borègne » étant le borain pour borain.",
    sources: ["quaregnon-celebres"],
    toiDeVoir: true
  },
  {
    id: "eglise-siecle",
    theme: "quaregnon", niveau: 3,
    q: "De quand date la première église Saint-Quentin de Quaregnon ?",
    r: ["Du début du XIe siècle", "Du XIVe siècle", "Du XVIIe siècle",
        "Du XIXe siècle"],
    bonne: 0,
    pourquoi: "Au plus tôt du début du XIe siècle : une nef unique, en pierre, "
            + "remaniée jusqu'au XVe.",
    sources: ["quaregnon-patrimoine"]
  },
  {
    id: "eglise-style",
    theme: "quaregnon", niveau: 3,
    q: "Dans quel style la première église Saint-Quentin de Quaregnon était-elle bâtie ?",
    r: ["Roman", "Gothique", "Baroque", "Néoclassique"],
    bonne: 0,
    pourquoi: "Le style roman, avec une seule nef.",
    sources: ["quaregnon-patrimoine"]
  },
  {
    id: "borain-central",
    theme: "borain", niveau: 3,
    q: "Quaregnon parle laquelle des trois variétés de borain ?",
    r: ["Le borain central", "Le borain de l'est", "La frange ouest",
        "Le rouchi"],
    bonne: 0,
    pourquoi: "Le borain central, avec Cuesmes, Wasmuël, Wasmes, Hornu, Flénu, "
            + "Jemappes, Warquignies et Pâturages.",
    sources: ["wp-borain"],
    toiDeVoir: true
  },
  {
    id: "borain-ouest",
    theme: "borain", niveau: 3,
    q: "La frange ouest du borain, vers Dour et Élouges, se rapproche de quel parler ?",
    r: ["Le rouchi de Valenciennes", "Le wallon de Namur",
        "Le flamand occidental", "Le champenois"],
    bonne: 0,
    pourquoi: "Le rouchi de Valenciennes — la frontière ne coupe pas les langues.",
    sources: ["wp-borain"],
    toiDeVoir: true
  },
  {
    id: "borain-est",
    theme: "borain", niveau: 3,
    q: "Quelles communes marquent la variété « est » du borain ?",
    r: ["Frameries et La Bouverie", "Dour et Élouges", "Hornu et Flénu",
        "Cuesmes et Jemappes"],
    bonne: 0,
    pourquoi: "Frameries et La Bouverie s'y distinguent.",
    sources: ["wp-borain"],
    toiDeVoir: true
  },
  {
    id: "ruelle-1953",
    theme: "borain", niveau: 3,
    q: "Pierre Ruelle publie en 1953 un ouvrage sur le vocabulaire de quel métier ?",
    r: ["Le houilleur", "Le verrier", "Le tisserand", "Le batelier"],
    bonne: 0,
    pourquoi: "« Vocabulaire professionnel du houilleur borain », Palais des "
            + "Académies. Ruelle enseignait la philologie romane à l'ULB.",
    sources: ["capron-ruelle"],
    toiDeVoir: true
  },
  {
    id: "borain-textes",
    theme: "borain", niveau: 3,
    q: "De quand datent les plus anciens textes littéraires écrits en borain ?",
    r: ["Du dernier quart du XIXe siècle", "Du Moyen Âge", "Du XVIIe siècle",
        "Des années 1950"],
    bonne: 0,
    pourquoi: "Une langue parlée depuis très longtemps, écrite depuis peu.",
    sources: ["wp-borain"],
    toiDeVoir: true
  },
  {
    id: "larcin-pages",
    theme: "borain", niveau: 3,
    q: "Combien de pages fait le dictionnaire français–picard borain de Georges Larcin ?",
    r: ["1064", "212", "480", "2500"],
    bonne: 0,
    pourquoi: "1064 pages, parues chez Micromania-Lingua en 2021.",
    sources: ["areaw-larcin"],
    toiDeVoir: true
  },
  {
    id: "delattre-naissance",
    theme: "borinage", niveau: 3,
    q: "Piège : Achille Delattre, le grand nom syndical du coin, est né où ?",
    r: ["À Pâturages", "À Quaregnon", "À Wasmuël", "À Mons"],
    bonne: 0,
    pourquoi: "À Pâturages, le 24 août 1879 — pas à Quaregnon, malgré la rue qui "
            + "porte son nom ici.",
    sources: ["quaregnon-celebres"]
  }
,

  /* ==================== LA BELGIQUE — AJOUT DU 12 AOÛT 2026 ====================
     Hugo en voulait « beaucoup plus » pendant que sa famille testait le site.
     Chaque réponse ci-dessous vient d'une page relevée ce jour-là, pas de ma
     mémoire. Les questions sur Quaregnon, le Borinage et le borain arrivent
     par ailleurs. */

  /* ---- niveau 1 ---- */
  {
    id: "be-capitale", theme: "belgique", niveau: 1,
    q: "Quelle est la capitale de la Belgique ?",
    r: ["Bruxelles", "Anvers", "Gand", "Liège"],
    bonne: 0,
    pourquoi: "Bruxelles, qui est aussi le siège de la Commission européenne et du Conseil européen.",
    sources: ["wp-bruxelles"]
  },
  {
    id: "be-otan", theme: "belgique", niveau: 1,
    q: "Quelle grande alliance militaire a son siège en Belgique ?",
    r: ["L'OTAN", "L'ONU", "Le Pacte de Varsovie", "L'OSCE"],
    bonne: 0,
    pourquoi: "L'OTAN siège à Bruxelles, comme la Commission et le Conseil européens. "
            + "Peu de villes concentrent autant d'institutions.",
    sources: ["wp-bruxelles"]
  },
  {
    id: "be-fete", theme: "belgique", niveau: 1,
    q: "Quel jour tombe la fête nationale de la Belgique ?",
    r: ["Le 21 juillet", "Le 14 juillet", "Le 11 novembre", "Le 1er mai"],
    bonne: 0,
    pourquoi: "Le 21 juillet, anniversaire du serment prêté par le premier roi des Belges.",
    sources: ["fete-21-juillet"]
  },
  {
    id: "be-atomium", theme: "belgique", niveau: 1,
    q: "Quel monument de Bruxelles a été bâti pour l'Exposition universelle de 1958 ?",
    r: ["L'Atomium", "Le Palais de Justice", "La Basilique de Koekelberg", "Le Berlaymont"],
    bonne: 0,
    pourquoi: "L'Atomium est né de l'Exposition de 1958 et n'a jamais été démonté.",
    sources: ["histoire-bruxelles"]
  },
  {
    id: "be-grand-place", theme: "belgique", niveau: 1,
    q: "Quelle place de Bruxelles est classée au patrimoine mondial de l'UNESCO ?",
    r: ["La Grand-Place", "La place Flagey", "La place Sainte-Catherine", "La place Rogier"],
    bonne: 0,
    pourquoi: "La Grand-Place, ses maisons de corporations et son hôtel de ville.",
    sources: ["histoire-bruxelles"]
  },
  {
    id: "be-manneken", theme: "belgique", niveau: 1,
    q: "Quelle toute petite statue est un symbole de Bruxelles ?",
    r: ["Le Manneken-Pis", "La Petite Sirène", "Le Chat botté", "Le Gille"],
    bonne: 0,
    pourquoi: "Le Manneken-Pis, avec l'Atomium, est l'image que le monde entier a de la ville.",
    sources: ["histoire-bruxelles"]
  },
  {
    id: "be-tintin", theme: "belgique", niveau: 1,
    q: "Quel jeune reporter de bande dessinée Hergé a-t-il créé en 1929 ?",
    r: ["Tintin", "Spirou", "Gaston Lagaffe", "Blake et Mortimer"],
    bonne: 0,
    pourquoi: "Tintin naît en 1929 sous le crayon d'Hergé, et part faire le tour du monde "
            + "avec son fox-terrier.",
    sources: ["wp-bd-belge"]
  },
  {
    id: "be-peyo", theme: "belgique", niveau: 1,
    q: "Quel dessinateur belge a créé les Schtroumpfs ?",
    r: ["Peyo", "Hergé", "Morris", "Franquin"],
    bonne: 0,
    pourquoi: "Peyo. Hergé a fait Tintin, Morris Lucky Luke, et Franquin Gaston Lagaffe — "
            + "quatre Belges, quatre monuments.",
    sources: ["wp-bd-belge"]
  },
  {
    id: "be-lucky-luke", theme: "belgique", niveau: 1,
    q: "Quel cow-boy de papier est né sous le crayon de Morris en 1947 ?",
    r: ["Lucky Luke", "Buck Danny", "Jerry Spring", "Blueberry"],
    bonne: 0,
    pourquoi: "Lucky Luke, l'homme qui tire plus vite que son ombre.",
    sources: ["wp-bd-belge"]
  },
  {
    id: "be-saxophone", theme: "belgique", niveau: 1,
    q: "Quel instrument de musique un Belge a-t-il inventé ?",
    r: ["Le saxophone", "La clarinette", "Le trombone", "L'accordéon"],
    bonne: 0,
    pourquoi: "Le saxophone, inventé par Adolphe Sax, né à Dinant.",
    sources: ["wp-sax"]
  },
  {
    id: "be-trappistes-combien", theme: "belgique", niveau: 1,
    q: "Combien de bières peuvent porter le nom de trappiste en Belgique ?",
    r: ["Six", "Deux", "Douze", "Une trentaine"],
    bonne: 0,
    pourquoi: "Six : Achel, Chimay, Orval, Rochefort, Westmalle et Westvleteren. "
            + "Tout le reste est de la bière d'abbaye, ce qui n'est pas la même chose.",
    sources: ["trappistes", "trappistes-six"]
  },
  {
    id: "be-moules", theme: "belgique", niveau: 1,
    q: "Quel plat est souvent appelé le plat national de la Belgique ?",
    r: ["Les moules-frites", "La choucroute", "Le cassoulet", "La raclette"],
    bonne: 0,
    pourquoi: "Les moules-frites. La recette apparaît d'abord dans un livre français du "
            + "XIVe siècle, mais c'est en Belgique qu'elle est devenue une institution.",
    sources: ["moules-frites"]
  },
  {
    id: "be-sax-ville", theme: "belgique", niveau: 1,
    q: "Dans quelle ville belge est né Adolphe Sax ?",
    r: ["Dinant", "Namur", "Mons", "Bruges"],
    bonne: 0,
    pourquoi: "Dinant, sur la Meuse, qui ne laisse personne l'oublier.",
    sources: ["wp-sax"]
  },
  {
    id: "be-merckx", theme: "belgique", niveau: 1,
    q: "Quel cycliste belge a gagné cinq fois le Tour de France ?",
    r: ["Eddy Merckx", "Tom Boonen", "Philippe Gilbert", "Rik Van Looy"],
    bonne: 0,
    pourquoi: "Eddy Merckx, cinq Tours, et pour beaucoup le plus grand coureur de tous les temps.",
    sources: ["eupedia-belges"]
  },
  {
    id: "be-magritte", theme: "belgique", niveau: 1,
    q: "Quel peintre né en Belgique est l'un des grands noms du surréalisme ?",
    r: ["René Magritte", "Paul Cézanne", "Salvador Dalí", "Joan Miró"],
    bonne: 0,
    pourquoi: "René Magritte. Dalí était espagnol, Miró catalan, Cézanne français.",
    sources: ["eupedia-belges"]
  },
  {
    id: "be-botrange-nom", theme: "belgique", niveau: 1,
    q: "Comment s'appelle le point culminant de la Belgique ?",
    r: ["Le Signal de Botrange", "Le Mont Saint-Aubert", "La Citadelle de Namur",
        "Le Kemmelberg"],
    bonne: 0,
    pourquoi: "Le Signal de Botrange, dans les Hautes Fagnes. On y monte en voiture, "
            + "ce qui dit assez la hauteur du pays.",
    sources: ["botrange"]
  },

  /* ---- niveau 2 ---- */
  {
    id: "be-botrange-altitude", theme: "belgique", niveau: 2,
    q: "À quelle altitude culmine le Signal de Botrange ?",
    r: ["694 mètres", "1 294 mètres", "412 mètres", "2 040 mètres"],
    bonne: 0,
    pourquoi: "694 mètres — le toit de la Belgique, et aussi celui du Benelux.",
    sources: ["botrange", "larousse-botrange"]
  },
  {
    id: "be-hautes-fagnes", theme: "belgique", niveau: 2,
    q: "Dans quel plateau se trouve le Signal de Botrange ?",
    r: ["Les Hautes Fagnes", "Le Condroz", "La Famenne", "Le Pays de Herve"],
    bonne: 0,
    pourquoi: "Le plateau des Hautes Fagnes, une tourbière battue par le vent.",
    sources: ["botrange"]
  },
  {
    id: "be-botrange-province", theme: "belgique", niveau: 2,
    q: "Dans quelle province se trouve le Signal de Botrange ?",
    r: ["Liège", "Luxembourg", "Namur", "Hainaut"],
    bonne: 0,
    pourquoi: "La province de Liège, tout à l'est, dans les cantons rattachés en 1919.",
    sources: ["botrange"]
  },
  {
    id: "be-sax-annee", theme: "belgique", niveau: 2,
    q: "En quelle année Adolphe Sax a-t-il inventé le saxophone ?",
    r: ["1841", "1889", "1798", "1912"],
    bonne: 0,
    pourquoi: "1841. L'instrument portera son nom, ce qui est une belle revanche pour un "
            + "homme qui s'est ruiné en procès.",
    sources: ["wp-sax"]
  },
  {
    id: "be-chimay", theme: "belgique", niveau: 2,
    q: "Quelle abbaye trappiste du Hainaut brasse une bière connue dans le monde entier ?",
    r: ["Chimay", "Orval", "Rochefort", "Westmalle"],
    bonne: 0,
    pourquoi: "Chimay, en Hainaut — la même province que Quaregnon. Orval est en province "
            + "de Luxembourg, Rochefort à Namur, Westmalle en Flandre.",
    sources: ["trappistes-six"]
  },
  {
    id: "be-orval", theme: "belgique", niveau: 2,
    q: "Dans quelle province se trouve l'abbaye trappiste d'Orval ?",
    r: ["Luxembourg", "Namur", "Liège", "Hainaut"],
    bonne: 0,
    pourquoi: "La province de Luxembourg — la belge, pas le grand-duché voisin.",
    sources: ["trappistes-six"]
  },
  {
    id: "be-rochefort-province", theme: "belgique", niveau: 2,
    q: "Quelle bière trappiste belge est brassée en province de Namur ?",
    r: ["Rochefort", "Chimay", "Achel", "Westvleteren"],
    bonne: 0,
    pourquoi: "Rochefort. Chimay est en Hainaut, Achel au Limbourg, Westvleteren en Flandre.",
    sources: ["trappistes-six"]
  },
  {
    id: "be-trappistes-wallonie", theme: "belgique", niveau: 2,
    q: "Combien d'abbayes trappistes brassent de la bière en Wallonie ?",
    r: ["Trois", "Une", "Cinq", "Six"],
    bonne: 0,
    pourquoi: "Trois — Chimay, Orval et Rochefort — contre trois en Flandre. "
            + "Le pays est partagé jusque dans ses bières.",
    sources: ["trappistes-six"]
  },
  {
    id: "be-gaufre-liege", theme: "belgique", niveau: 2,
    q: "En Belgique, quelle gaufre se reconnaît à ses morceaux de sucre et ses bords arrondis ?",
    r: ["La gaufre de Liège", "La gaufre de Bruxelles", "La gaufre de Namur",
        "La gaufre de Gand"],
    bonne: 0,
    pourquoi: "Celle de Liège : petite, épaisse, avec des grains de sucre qui caramélisent.",
    sources: ["gaufre-belge"]
  },
  {
    id: "be-gaufre-bruxelles", theme: "belgique", niveau: 2,
    q: "En Belgique, quelle gaufre est rectangulaire, avec de profonds creux ?",
    r: ["La gaufre de Bruxelles", "La gaufre de Liège", "La gaufre de Charleroi",
        "La gaufre d'Anvers"],
    bonne: 0,
    pourquoi: "Celle de Bruxelles : épaisse, rectangulaire, et faite pour la crème.",
    sources: ["gaufre-belge"]
  },
  {
    id: "be-spirou-annee", theme: "belgique", niveau: 2,
    q: "En quelle année l'hebdomadaire Spirou a-t-il été créé ?",
    r: ["1938", "1929", "1946", "1958"],
    bonne: 0,
    pourquoi: "1938, chez Dupuis. Il tient toujours, ce qui en fait l'un des plus vieux "
            + "journaux de bande dessinée du monde.",
    sources: ["wp-bd-belge"]
  },
  {
    id: "be-journal-tintin", theme: "belgique", niveau: 2,
    q: "En quelle année l'hebdomadaire Tintin a-t-il été fondé ?",
    r: ["1946", "1929", "1938", "1958"],
    bonne: 0,
    pourquoi: "1946, aux éditions du Lombard — dix-sept ans après la naissance du personnage.",
    sources: ["wp-bd-belge"]
  },
  {
    id: "be-schtroumpfs-annee", theme: "belgique", niveau: 2,
    q: "En quelle année les Schtroumpfs sont-ils apparus pour la première fois ?",
    r: ["1958", "1938", "1969", "1975"],
    bonne: 0,
    pourquoi: "1958 — la même année que l'Atomium. Deux symboles belges nés d'un coup.",
    sources: ["wp-bd-belge"]
  },
  {
    id: "be-brel-naissance", theme: "belgique", niveau: 2,
    q: "Dans quelle commune de Bruxelles est né Jacques Brel ?",
    r: ["Schaerbeek", "Ixelles", "Uccle", "Anderlecht"],
    bonne: 0,
    pourquoi: "Schaerbeek, le 8 avril 1929.",
    sources: ["wp-brel"]
  },
  {
    id: "be-brel-mort", theme: "belgique", niveau: 2,
    q: "En quelle année Jacques Brel est-il mort ?",
    r: ["1978", "1968", "1985", "1991"],
    bonne: 0,
    pourquoi: "Le 9 octobre 1978, à quarante-neuf ans.",
    sources: ["wp-brel"]
  },
  {
    id: "be-hepburn", theme: "belgique", niveau: 2,
    q: "Quelle actrice de cinéma mondialement connue est née à Bruxelles en 1929 ?",
    r: ["Audrey Hepburn", "Ingrid Bergman", "Grace Kelly", "Romy Schneider"],
    bonne: 0,
    pourquoi: "Audrey Hepburn, née à Bruxelles d'un père anglais et d'une mère néerlandaise.",
    sources: ["eupedia-belges"]
  },
  {
    id: "be-simenon", theme: "belgique", niveau: 2,
    q: "Quel écrivain belge a créé le commissaire Maigret ?",
    r: ["Georges Simenon", "Amélie Nothomb", "Henri Michaux", "Émile Verhaeren"],
    bonne: 0,
    pourquoi: "Georges Simenon, l'un des auteurs les plus prolifiques que la Belgique ait produits.",
    sources: ["eupedia-belges"]
  },
  {
    id: "be-leopold", theme: "belgique", niveau: 2,
    q: "Le serment de quel roi la fête nationale de la Belgique commémore-t-elle ?",
    r: ["Léopold Ier", "Albert Ier", "Baudouin", "Philippe"],
    bonne: 0,
    pourquoi: "Léopold Ier, premier roi des Belges, qui prête serment le 21 juillet 1831.",
    sources: ["fete-21-juillet"]
  },

  /* ---- niveau 3 ---- */
  {
    id: "be-botrange-1919", theme: "belgique", niveau: 3,
    q: "Depuis quelle année le Signal de Botrange est-il le point culminant de la Belgique ?",
    r: ["1919", "1830", "1945", "1963"],
    bonne: 0,
    pourquoi: "1919 : le traité de Versailles rattache les cantons de l'Est, et le pays "
            + "gagne d'un coup vingt mètres d'altitude.",
    sources: ["botrange"]
  },
  {
    id: "be-baraque-michel", theme: "belgique", niveau: 3,
    q: "Quel sommet était le point culminant de la Belgique avant 1919 ?",
    r: ["La Baraque Michel", "Le Mont Rigi", "Le Kemmelberg", "Le Mont Saint-Aubert"],
    bonne: 0,
    pourquoi: "La Baraque Michel, détrônée par vingt mètres.",
    sources: ["botrange"]
  },
  {
    id: "be-baraque-altitude", theme: "belgique", niveau: 3,
    q: "À quelle altitude culmine la Baraque Michel ?",
    r: ["674 mètres", "694 mètres", "718 mètres", "612 mètres"],
    bonne: 0,
    pourquoi: "674 mètres, contre 694 au Signal de Botrange.",
    sources: ["botrange"]
  },
  {
    id: "be-butte-baltia", theme: "belgique", niveau: 3,
    q: "À quoi sert la butte Baltia, élevée en 1923 au Signal de Botrange ?",
    r: ["À atteindre symboliquement les 700 mètres", "À signaler la frontière",
        "À abriter une station météo", "À marquer une tombe"],
    bonne: 0,
    pourquoi: "Un monticule de terre pour franchir les 700 mètres. Le pays est plat, "
            + "et il le sait.",
    sources: ["botrange"]
  },
  {
    id: "be-tour-1934", theme: "belgique", niveau: 3,
    q: "À quelle hauteur la tour de pierre de 1934 fait-elle culminer le Signal de Botrange ?",
    r: ["718 mètres", "700 mètres", "694 mètres", "750 mètres"],
    bonne: 0,
    pourquoi: "718 mètres. Après la butte de terre, on a bâti une tour — l'obstination "
            + "d'un pays sans montagne.",
    sources: ["botrange"]
  },
  {
    id: "be-serment-1831", theme: "belgique", niveau: 3,
    q: "En quelle année Léopold Ier a-t-il prêté le serment que la fête nationale commémore ?",
    r: ["1831", "1830", "1839", "1848"],
    bonne: 0,
    pourquoi: "Le 21 juillet 1831, un an après l'indépendance.",
    sources: ["fete-21-juillet"]
  },
  {
    id: "be-loi-1890", theme: "belgique", niveau: 3,
    q: "Une loi de quelle année a fait du 21 juillet la fête nationale de la Belgique ?",
    r: ["1890", "1831", "1919", "1950"],
    bonne: 0,
    pourquoi: "La loi du 27 mai 1890 — soit près de soixante ans après le serment lui-même.",
    sources: ["fete-21-juillet"]
  },
  {
    id: "be-expos-combien", theme: "belgique", niveau: 3,
    q: "Combien de fois Bruxelles a-t-elle accueilli une Exposition universelle ?",
    r: ["Trois fois", "Une fois", "Deux fois", "Cinq fois"],
    bonne: 0,
    pourquoi: "Trois : 1897, 1910 et 1958. Seule la dernière a laissé l'Atomium.",
    sources: ["histoire-bruxelles"]
  },
  {
    id: "be-expos-annees", theme: "belgique", niveau: 3,
    q: "Outre 1958, quelles années ont vu une Exposition universelle à Bruxelles ?",
    r: ["1897 et 1910", "1878 et 1900", "1925 et 1937", "1867 et 1889"],
    bonne: 0,
    pourquoi: "1897 et 1910.",
    sources: ["histoire-bruxelles"]
  },
  {
    id: "be-541-jours", theme: "belgique", niveau: 3,
    q: "Combien de jours a-t-il fallu pour former le gouvernement fédéral d'Elio Di Rupo ?",
    r: ["541 jours", "94 jours", "203 jours", "820 jours"],
    bonne: 0,
    pourquoi: "541 jours — un record du monde en temps de paix, longtemps resté imbattu.",
    sources: ["record-gouvernement"]
  },
  {
    id: "be-di-rupo-annee", theme: "belgique", niveau: 3,
    q: "En quelle année le gouvernement d'Elio Di Rupo a-t-il fini par se former ?",
    r: ["2011", "2007", "2014", "2019"],
    bonne: 0,
    pourquoi: "2011, au terme des 541 jours.",
    sources: ["record-gouvernement"]
  },
  {
    id: "be-rochefort-1595", theme: "belgique", niveau: 3,
    q: "Parmi les six trappistes de Belgique, laquelle remonte à 1595 ?",
    r: ["Rochefort", "Chimay", "Orval", "Achel"],
    bonne: 0,
    pourquoi: "Rochefort, de loin la plus ancienne des six.",
    sources: ["trappistes-six"]
  },
  {
    id: "be-achel-1998", theme: "belgique", niveau: 3,
    q: "Parmi les six trappistes de Belgique, laquelle a été fondée en dernier, en 1998 ?",
    r: ["Achel", "Westvleteren", "Westmalle", "Orval"],
    bonne: 0,
    pourquoi: "Achel, au Limbourg — quatre siècles après Rochefort.",
    sources: ["trappistes-six"]
  },
  {
    id: "be-westvleteren", theme: "belgique", niveau: 3,
    q: "Dans quelle province se trouve l'abbaye trappiste de Westvleteren ?",
    r: ["Flandre-Occidentale", "Anvers", "Limbourg", "Flandre-Orientale"],
    bonne: 0,
    pourquoi: "La Flandre-Occidentale. Westmalle est à Anvers, Achel au Limbourg.",
    sources: ["trappistes-six"]
  },
  {
    id: "be-sax-1894", theme: "belgique", niveau: 3,
    q: "Adolphe Sax meurt en 1894. Que se passe-t-il à Quaregnon la même année ?",
    r: ["L'adoption de la Charte de Quaregnon", "L'ouverture du puits du Renard",
        "La fusion avec Wasmuël", "La construction de l'hôtel de ville"],
    bonne: 0,
    pourquoi: "La Charte de Quaregnon est adoptée le 26 mars 1894, et Adolphe Sax meurt "
            + "le 7 février de la même année.",
    sources: ["wp-sax", "wp-charte"]
  },
  {
    id: "be-sax-naissance", theme: "belgique", niveau: 3,
    q: "Quelle est la date de naissance d'Adolphe Sax ?",
    r: ["Le 6 novembre 1814", "Le 6 novembre 1841", "Le 7 février 1814",
        "Le 21 juillet 1831"],
    bonne: 0,
    pourquoi: "Le 6 novembre 1814, à Dinant. Il inventera le saxophone à vingt-sept ans.",
    sources: ["wp-sax"]
  }

];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUESTIONS, NIVEAUX, THEMES };
}
