/* ============================================================================
   SOURCES — d'où vient chaque réponse.

   Un quiz qui se trompe est pire qu'un quiz ennuyeux : on repart avec une
   fausseté dans la tête, et on la répète. Alors chaque question du site pointe
   vers l'endroit où l'on a lu sa réponse, et le joueur peut aller vérifier.

   Pour ajouter une source : une clé courte, un titre, un lien, la date où on
   l'a lue. `outil-verif-quiz.js` refuse toute question dont la clé de source
   n'existe pas ici, et toute source que plus aucune question n'utilise.
   ============================================================================ */

"use strict";

const SOURCES = {

  "quaregnon-histoire": {
    titre: "Quaregnon, cœur du Borinage — Histoire et patrimoine",
    ou: "Commune de Quaregnon",
    lien: "https://www.quaregnon.be/loisirs/tourisme/histoire-et-patrimoine",
    lu: "2026-08-12"
  },

  "quaregnon-charte": {
    titre: "La Charte de Quaregnon",
    ou: "Commune de Quaregnon, pôle muséal",
    lien: "https://www.quaregnon.be/loisirs/tourisme/pole-museal/charte",
    lu: "2026-08-12"
  },

  "quaregnon-celebres": {
    titre: "Personnages célèbres de Quaregnon",
    ou: "Commune de Quaregnon",
    lien: "https://www.quaregnon.be/loisirs/tourisme/histoire-et-patrimoine/personnages-celebres",
    lu: "2026-08-12"
  },

  "quaregnon-patrimoine": {
    titre: "Patrimoine quaregnonnais",
    ou: "Commune de Quaregnon",
    lien: "https://www.quaregnon.be/loisirs/tourisme/histoire-et-patrimoine/patrimoine-quaregnonnais",
    lu: "2026-08-12"
  },

  "wp-charte": {
    titre: "Charte de Quaregnon",
    ou: "Wikipédia (fr)",
    lien: "https://fr.wikipedia.org/wiki/Charte_de_Quaregnon",
    lu: "2026-08-12"
  },

  "wp-quaregnon": {
    titre: "Quaregnon",
    ou: "Wikipédia (fr)",
    lien: "https://fr.wikipedia.org/wiki/Quaregnon",
    lu: "2026-08-12"
  },

  "wp-borain": {
    titre: "Borain (langue)",
    ou: "Wikipédia (fr)",
    lien: "https://fr.wikipedia.org/wiki/Borain",
    lu: "2026-08-12"
  },

  "wp-picard": {
    titre: "Picard language",
    ou: "Wikipedia (en)",
    lien: "https://en.wikipedia.org/wiki/Picard_language",
    lu: "2026-08-12"
  },

  "uvcw-fiche": {
    titre: "Quaregnon en fiche : coordonnées, bourgmestre, superficie",
    ou: "Union des Villes et Communes de Wallonie",
    lien: "https://www.uvcw.be/fiches-locales/53065",
    lu: "2026-08-12"
  },

  "hainaut-fiche": {
    titre: "Fiche communale de Quaregnon, édition 2023",
    ou: "Hainaut Développement",
    lien: "https://www.hainaut-developpement.be/documents/hainautstat/Quaregnon.pdf",
    lu: "2026-08-12"
  },

  "genealexis": {
    titre: "Histoire de Quaregnon — cartes postales et charbonnages",
    ou: "Le site de généalogie d'Alexis",
    lien: "https://www.genealexis.fr/cartes-postales/quaregnon.php",
    lu: "2026-08-12"
  },

  "borigines": {
    titre: "Vincent Van Gogh au Borinage, décembre 1878 – octobre 1880",
    ou: "Borigines",
    lien: "https://vangoghborinage.canalblog.com/",
    lu: "2026-08-12"
  },

  "visitmons-vangogh": {
    titre: "Van Gogh au Borinage, la naissance de l'artiste",
    ou: "visitMons",
    lien: "https://www.visitmons.be/a-voir-a-faire/l-incontournable/vincent-van-gogh/van-gogh-au-borinage-la-naissance-de-l-artiste",
    lu: "2026-08-12"
  },

  "culture-boraine": {
    titre: "Le Borinage",
    ou: "La culture boraine",
    lien: "https://culture-boraine.be/le-borinage/",
    lu: "2026-08-12"
  },

  "areaw-larcin": {
    titre: "Georges Larcin, Dictionnaire français-picard borain, "
         + "Le trésor lexical du Borinage, Micromania-Lingua, 2021, 1064 pages",
    ou: "AREAW",
    lien: "https://www.areaw.be/georges-larcin-dictionnaire-francais-picard-borain-le-tresor-lexical-du-borinage-micromania-lingua-2021-1064-pages/",
    lu: "2026-08-12"
  },

  "capron-ruelle": {
    titre: "Pierre Ruelle et le Borinage",
    ou: "André Capron",
    lien: "https://sites.google.com/site/andcapron/telechargements/pierre-ruelle-et-le-borinage",
    lu: "2026-08-12"
  },

  "trappistes": {
    titre: "Bière trappiste ou bière d'abbaye ?",
    ou: "Les Bières Belges",
    lien: "https://www.lesbieresbelges.be/fr/news/18-biere-trappiste-ou-d-abbaye.aspx",
    lu: "2026-08-12"
  },

  "trappistes-six": {
    titre: "Les 6 bières trappistes belges authentiques : guide complet",
    ou: "Je retiens",
    lien: "https://jeretiens.net/bieres-trappistes-belges/",
    lu: "2026-08-12"
  },

  "gaufre-belge": {
    titre: "La gaufre belge",
    ou: "Gourmandises belges",
    lien: "https://www.gourmandises-belges.com/la-gaufre-belge",
    lu: "2026-08-12"
  },

  "moules-frites": {
    titre: "Les moules-frites : une bataille d'origine entre la France et la Belgique",
    ou: "Gourmandises belges",
    lien: "https://www.gourmandises-belges.com/les-moules-frites-une-bataille-dorigine-entre-la-france-et-la-belgique",
    lu: "2026-08-12"
  },

  "wp-bd-belge": {
    titre: "Bande dessinée belge",
    ou: "Wikipédia (fr)",
    lien: "https://fr.wikipedia.org/wiki/Bande_dessin%C3%A9e_belge",
    lu: "2026-08-12"
  },

  "botrange": {
    titre: "Saviez-vous que le Signal de Botrange est le point culminant de la Belgique ?",
    ou: "Focus on Belgium (service public fédéral)",
    lien: "https://focusonbelgium.be/fr/le%20saviez-vous/saviez-vous-que-le-signal-de-botrange-est-le-point-culminant-de-la-belgique",
    lu: "2026-08-12"
  },

  "larousse-botrange": {
    titre: "Signal de Botrange",
    ou: "Encyclopédie Larousse",
    lien: "https://www.larousse.fr/encyclopedie/mont/signal_de_Botrange/109603",
    lu: "2026-08-12"
  },

  "wp-sax": {
    titre: "Adolphe Sax",
    ou: "Wikipedia (en)",
    lien: "https://en.wikipedia.org/wiki/Adolphe_Sax",
    lu: "2026-08-12"
  },

  "wp-brel": {
    titre: "Jacques Brel",
    ou: "Wikipedia (en)",
    lien: "https://en.wikipedia.org/wiki/Jacques_Brel",
    lu: "2026-08-12"
  },

  "eupedia-belges": {
    titre: "Famous Belgian people",
    ou: "Eupedia",
    lien: "https://www.eupedia.com/belgium/famous_people.shtml",
    lu: "2026-08-12"
  },

  "fete-21-juillet": {
    titre: "Fête nationale belge : pourquoi célébrons-nous le 21 juillet ?",
    ou: "Bruxelles Secrète",
    lien: "https://bruxellessecrete.com/fete-nationale-belge-21-juillet/",
    lu: "2026-08-12"
  },

  "histoire-bruxelles": {
    titre: "Histoire de Bruxelles",
    ou: "Visitons Bruxelles",
    lien: "https://www.visitonsbruxelles.com/histoire",
    lu: "2026-08-12"
  },

  "wp-bruxelles": {
    titre: "Brussels",
    ou: "Wikipedia (en)",
    lien: "https://en.wikipedia.org/wiki/Brussels",
    lu: "2026-08-12"
  },

  "record-gouvernement": {
    titre: "Brussels and the world record that nobody wanted",
    ou: "IPS Journal",
    lien: "https://www.ips-journal.eu/topics/democracy-and-society/the-world-record-that-nobody-wanted-8729/",
    lu: "2026-08-12"
  },

  "doudou-unesco": {
    titre: "The Doudou, the Ritual Ducasse of Mons",
    ou: "visitMons",
    lien: "https://www.visitmons.be/en/unesco/article/the-doudou-690772",
    lu: "2026-08-12"
  },

  "wp-ducasse": {
    titre: "Ducasse de Mons",
    ou: "Wikipedia (en)",
    lien: "https://en.wikipedia.org/wiki/Ducasse_de_Mons",
    lu: "2026-08-12"
  },

  "pci-ducasse": {
    titre: "La Ducasse de Mons — patrimoine culturel immatériel",
    ou: "Fédération Wallonie-Bruxelles",
    lien: "https://patrimoineculturel.cfwb.be/patrimoines-en-fwb/pci-recherche/pcidetails/fwbpci-fiche/la-ducasse-de-mons/",
    lu: "2026-08-12"
  },

  "lemaitre-leuven": {
    titre: "Georges Lemaître et l'atome primitif",
    ou: "Visit Leuven",
    lien: "https://visitleuven.be/en/primeval-atom-lemaitre",
    lu: "2026-08-12"
  },

  "britannica-lemaitre": {
    titre: "Georges Lemaître — Big Bang Theory, Cosmology & Physics",
    ou: "Encyclopædia Britannica",
    lien: "https://www.britannica.com/biography/Georges-Lemaitre",
    lu: "2026-08-12"
  },

  "britannica-baekeland": {
    titre: "Leo Baekeland — Inventor, Bakelite, Plastics",
    ou: "Encyclopædia Britannica",
    lien: "https://www.britannica.com/biography/Leo-Baekeland",
    lu: "2026-08-12"
  },

  "quetelet-imc": {
    titre: "Did you know that the Body Mass Index was invented by the Belgian "
         + "mathematician Lambert Adolphe Quetelet ?",
    ou: "Focus on Belgium (service public fédéral)",
    lien: "https://focusonbelgium.be/en/facts/did-you-know-body-mass-index-bmi-was-invented-belgian-mathematician-lambert-adolphe-quetelet",
    lu: "2026-08-12"
  },

  "wp-quetelet": {
    titre: "Adolphe Quetelet",
    ou: "Wikipedia (en)",
    lien: "https://en.wikipedia.org/wiki/Adolphe_Quetelet",
    lu: "2026-08-12"
  },

/* ------------------------------------------------------------ Quaregnon */

  "a-wp-quaregnon": {
    titre: "Quaregnon",
    ou: "Wikipédia (fr)",
    lien: "https://fr.wikipedia.org/wiki/Quaregnon",
    lu: "2026-08-12"
  },

  "a-quaregnon-histoire": {
    titre: "Histoire de Quaregnon — seigneuries, hameaux, industries",
    ou: "Commune de Quaregnon",
    lien: "https://www.quaregnon.be/loisirs/tourisme/histoire-et-patrimoine/histoire-de-quaregnon",
    lu: "2026-08-12"
  },

  "a-quaregnon-tourisme": {
    titre: "Histoire et patrimoine de Quaregnon",
    ou: "Commune de Quaregnon",
    lien: "https://www.quaregnon.be/loisirs/tourisme/histoire-et-patrimoine",
    lu: "2026-08-12"
  },

  "a-quaregnon-personnages": {
    titre: "Personnages célèbres de Quaregnon",
    ou: "Commune de Quaregnon",
    lien: "https://www.quaregnon.be/loisirs/tourisme/histoire-et-patrimoine/personnages-celebres",
    lu: "2026-08-12"
  },

  "a-quaregnon-festivites": {
    titre: "Festivités locales — la Cavalcade de Quaregnon",
    ou: "Commune de Quaregnon",
    lien: "https://www.quaregnon.be/loisirs/festivites-locales",
    lu: "2026-08-12"
  },

  "a-cw-rieu-du-coeur": {
    titre: "30 avril 1960 — Fermeture du charbonnage du « Rieu du Cœur » "
         + "à Quaregnon",
    ou: "Connaître la Wallonie, Institut Destrée",
    lien: "https://connaitrelawallonie.wallonie.be/histoire/timeline/30-avril-1960-fermeture-du-charbonnage-du-rieu-du-coeur-quaregnon",
    lu: "2026-08-12"
  },

  "a-wp-cuisenaire": {
    titre: "Georges Cuisenaire",
    ou: "Wikipédia (fr)",
    lien: "https://fr.wikipedia.org/wiki/Georges_Cuisenaire",
    lu: "2026-08-12"
  },

  "a-wp-malva": {
    titre: "Constant Malva",
    ou: "Wikipédia (fr)",
    lien: "https://fr.wikipedia.org/wiki/Constant_Malva",
    lu: "2026-08-12"
  },

  /* ------------------------------------------------------------- Borinage */

  "a-wp-borinage": {
    titre: "Borinage",
    ou: "Wikipédia (fr)",
    lien: "https://fr.wikipedia.org/wiki/Borinage",
    lu: "2026-08-12"
  },

  "a-wp-mines-borinage": {
    titre: "Industrie minière dans le Borinage",
    ou: "Wikipédia (fr)",
    lien: "https://fr.wikipedia.org/wiki/Industrie_mini%C3%A8re_dans_le_Borinage",
    lu: "2026-08-12"
  },

  "a-wp-grand-hornu": {
    titre: "Grand-Hornu",
    ou: "Wikipédia (fr)",
    lien: "https://fr.wikipedia.org/wiki/Grand-Hornu",
    lu: "2026-08-12"
  },

  "a-cw-greve-1932": {
    titre: "27 juin 1932 – 10 septembre : dix semaines de grève contre "
         + "la « misère au Borinage »",
    ou: "Connaître la Wallonie, Institut Destrée",
    lien: "https://connaitrelawallonie.wallonie.be/fr/histoire/timeline/27-juin-1932-10-septembre-dix-semaines-de-greve-contre-la-misere-au-borinage",
    lu: "2026-08-12"
  },

  "a-wp-immigration-italienne": {
    titre: "Immigration italienne en Belgique",
    ou: "Wikipédia (fr)",
    lien: "https://fr.wikipedia.org/wiki/Immigration_italienne_en_Belgique",
    lu: "2026-08-12"
  },

  "a-wp-vangogh-cuesmes": {
    titre: "Maison Van Gogh à Cuesmes",
    ou: "Wikipédia (fr)",
    lien: "https://fr.wikipedia.org/wiki/Maison_Van_Gogh_%C3%A0_Cuesmes",
    lu: "2026-08-12"
  },

  "a-visitmons-vangogh-wasmes": {
    titre: "Maison Van Gogh de Petit-Wasmes (Colfontaine)",
    ou: "visitMons",
    lien: "https://www.visitmons.be/fr/sites-et-musees/maison-van-gogh-de-petit-wasmes-colfontaine-965146",
    lu: "2026-08-12"
  },

  "a-blog-marcasse": {
    titre: "Charbonnage de Marcasse — historique et catastrophe de 1953",
    ou: "L'œil du Cyclone (borinage.blogspot.com)",
    lien: "https://borinage.blogspot.com/p/charbonnage-de-marcasse.html",
    lu: "2026-08-12"
  },

  "a-blog-crossage": {
    titre: "Crossage au Borinage",
    ou: "L'œil du Cyclone (borinage.blogspot.com)",
    lien: "https://borinage.blogspot.com/p/crossage-au-borinage.html",
    lu: "2026-08-12"
  },

  "a-blog-alion": {
    titre: "Les chansons d'âlion — une coutume folklorique boraine",
    ou: "L'œil du Cyclone (borinage.blogspot.com)",
    lien: "https://borinage.blogspot.com/p/les-chansons-dalion.html",
    lu: "2026-08-12"
  },

  "a-blog-sorcieres": {
    titre: "Sabbat des sorcières de Warquignies",
    ou: "L'œil du Cyclone (borinage.blogspot.com)",
    lien: "https://borinage.blogspot.com/p/sabbat-des-sorcieres-de-warquignies.html",
    lu: "2026-08-12"
  },

  /* ---------------------------------------------------------------- Borain */

  "a-capron-parler": {
    titre: "Le Parler Borain — conférence d'André Capron au Cercle "
         + "archéologique de Mons, 18 janvier 2006",
    ou: "L'œil du Cyclone (borinage.blogspot.com)",
    lien: "https://borinage.blogspot.com/p/le-parler-borain.html",
    lu: "2026-08-12"
  },

  "a-capron-lexique-1": {
    titre: "Lexique Français-Borain, 1re partie (de A à Ma), par André Capron",
    ou: "L'œil du Cyclone (borinage.blogspot.com)",
    lien: "https://borinage.blogspot.com/p/lexique-francais-borain-1-de-a-ma.html",
    lu: "2026-08-12"
  },

  "a-capron-lexique-2": {
    titre: "Lexique Français-Borain, 2e partie (de Me à Z), par André Capron",
    ou: "L'œil du Cyclone (borinage.blogspot.com)",
    lien: "https://borinage.blogspot.com/p/lexique-francais-borain-2-de-me-z.html",
    lu: "2026-08-12"
  },

  "a-arllfb-houilleur": {
    titre: "Pierre Ruelle, Le vocabulaire professionnel du Houilleur borain. "
         + "Étude dialectologique",
    ou: "Académie royale de Langue et de Littérature françaises de Belgique",
    lien: "https://www.arllfb.be/publications/philologie/houilleur.html",
    lu: "2026-08-12"
  },

  "a-wp-borain": {
    titre: "Borain (langue)",
    ou: "Wikipédia (fr)",
    lien: "https://fr.wikipedia.org/wiki/Borain",
    lu: "2026-08-12"
  },

  "britannica-belgique": {
    titre: "Belgium — History, Flag, Map, Population, Facts",
    ou: "Encyclopædia Britannica",
    lien: "https://www.britannica.com/place/Belgium",
    lu: "2026-08-12"
  },

  "monarchie-be": {
    titre: "Monarchy of Belgium",
    ou: "Wikipedia (en) / monarchie.be",
    lien: "https://en.wikipedia.org/wiki/Monarchy_of_Belgium",
    lu: "2026-08-12"
  },

  "visitmons-terrils": {
    titre: "À l'assaut des terrils",
    ou: "visitMons",
    lien: "https://www.visitmons.be/blog/a-l-assaut-des-terrils",
    lu: "2026-08-12"
  }

};

if (typeof module !== "undefined" && module.exports) module.exports = { SOURCES };
