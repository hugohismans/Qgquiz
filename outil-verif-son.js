/* ============================================================================
   CONTRÔLE — le son.

       node outil-verif-son.js

   ---------------------------------------------------------------------------
   ON NE VÉRIFIE PAS QUE C'EST JOLI. ON VÉRIFIE CE QUI SE MESURE.

   Hugo a demandé « propre, pas oppressant, sympa ». Deux de ces trois mots se
   chiffrent, et c'est ceux-là qui sont gardés ici :

   - **Pas oppressant** : aucun son ne dépasse le plafond, et il n'existe aucun
     tic-tac de compte à rebours.
   - **Propre** : aucune fréquence n'est recopiée d'une table, elles descendent
     toutes de la formule du tempérament égal ; aucun son ne tombe hors de la
     bande où une petite enceinte de téléphone sait encore dire quelque chose.

   « Sympa » ne se mesure pas. Ça, c'est l'oreille d'Hugo, et rien d'autre.

   Là où c'est possible, la vérité vient d'ailleurs que de mes propres tables :
   l'octave qui double est un fait physique, le la à 440 Hz est une convention
   internationale, et l'absence de demi-ton dans une gamme pentatonique est la
   RAISON pour laquelle on l'a choisie — pas une conséquence de l'avoir écrite.
   ============================================================================ */

"use strict";

const { SON } = require("./son.js");

let echecs = 0, controles = 0;

function verifier(titre, condition, detail) {
  controles++;
  if (condition) return;
  echecs++;
  console.log("  ÉCHEC  " + titre + (detail ? "\n         " + detail : ""));
}

function titre(t) { console.log("\n" + t); }
function proche(a, b, marge) { return Math.abs(a - b) < (marge || 0.001); }

/* ============================== LES HAUTEURS ============================== */

titre("Les hauteurs");

verifier("le la du diapason est à 440 hertz", proche(SON.hauteur(0), 440),
  "c'est la convention internationale, pas un choix");

/* L'octave qui double est un fait physique : il ne dépend d'aucune table
   écrite dans son.js. C'est la meilleure vérité extérieure disponible ici. */
(function () {
  let bon = true;
  for (let n = -36; n <= 36; n++) {
    if (!proche(SON.hauteur(n + 12), SON.hauteur(n) * 2, SON.hauteur(n) * 1e-9)) bon = false;
  }
  verifier("douze demi-tons doublent exactement la fréquence", bon,
    "c'est la définition de l'octave — si elle est fausse, tout l'est");
})();

verifier("le la en dessous est à 220 hertz", proche(SON.hauteur(-12), 220));
verifier("le la au-dessus est à 880 hertz", proche(SON.hauteur(12), 880));

(function () {
  let croissant = true;
  for (let n = -24; n < 24; n++) {
    if (SON.hauteur(n + 1) <= SON.hauteur(n)) croissant = false;
  }
  verifier("monter d'un demi-ton monte toujours la fréquence", croissant);
})();

/* ================================ LA GAMME ================================ */

titre("La gamme");

verifier("la gamme a cinq degrés — c'est ce que veut dire pentatonique",
  SON.GAMME.length === 5, "elle en a " + SON.GAMME.length);

verifier("la gamme part de la tonique", SON.GAMME[0] === 0);

(function () {
  let croissante = true;
  for (let i = 1; i < SON.GAMME.length; i++) {
    if (SON.GAMME[i] <= SON.GAMME[i - 1]) croissante = false;
  }
  verifier("la gamme est écrite dans l'ordre", croissante);
})();

/* LA propriété qui justifie ce choix de gamme. Sans elle, deux clochettes
   tirées au hasard pourraient tomber à un demi-ton l'une de l'autre, et ça
   grince — c'est précisément ce qu'on ne veut pas d'une ambiance de fond. */
(function () {
  const tour = SON.GAMME.concat([12]);
  let ecartMini = 99;
  for (let i = 1; i < tour.length; i++) {
    ecartMini = Math.min(ecartMini, tour[i] - tour[i - 1]);
  }
  verifier("aucun demi-ton entre deux degrés voisins, octave comprise",
    ecartMini >= 2,
    "écart minimum trouvé : " + ecartMini + " demi-ton — deux notes tirées "
    + "au hasard finiraient par jurer");
})();

/* ================================ LES NOTES ================================ */

titre("Les notes");

verifier("cinq degrés plus haut, on est une octave au-dessus",
  proche(SON.note(5, 0), SON.note(0, 0) * 2, 0.001));
verifier("cinq degrés plus bas, on est une octave en dessous",
  proche(SON.note(-5, 0), SON.note(0, 0) / 2, 0.001));
verifier("le paramètre d'octave fait bien ce qu'il dit",
  proche(SON.note(2, 1), SON.note(2, 0) * 2, 0.001));

(function () {
  let croissant = true;
  for (let d = -12; d < 12; d++) if (SON.note(d + 1, 0) <= SON.note(d, 0)) croissant = false;
  verifier("monter d'un degré monte toujours la note", croissant,
    "un repli mal fait fait redescendre au passage de l'octave");
})();

verifier("l'octave absente vaut zéro",
  proche(SON.note(3), SON.note(3, 0), 0.0001));

/* ============================== LE PLAFOND ============================== */

titre("Le plafond — « pas oppressant », en chiffres");

Object.keys(SON.VOLUMES).forEach(function (nom) {
  verifier("le son « " + nom + " » ne dépasse pas le plafond",
    SON.VOLUMES[nom] <= SON.PLAFOND,
    SON.VOLUMES[nom] + " > " + SON.PLAFOND);
  verifier("le son « " + nom + " » s'entend quand même",
    SON.VOLUMES[nom] > 0.01,
    "en dessous, autant ne pas le jouer du tout");
});

verifier("l'ambiance est plus discrète que n'importe quel son ponctuel",
  Object.keys(SON.VOLUMES).every(function (n) {
    return n === "ambiance" || n === "cloche"
        || SON.VOLUMES.ambiance <= SON.VOLUMES[n];
  }),
  "un fond plus fort que les réponses couvrirait le jeu");

/* Le clic se déclenche à chaque geste : c'est celui qui use l'oreille en
   premier. `outil-verif-sortie.js` mesure ce qui sort, et là il ne voit rien
   d'anormal — un clic d'une seule note reste sous un accord de trois, même
   réglé plus fort. C'est donc au niveau du RÉGLAGE qu'il faut le tenir. */
verifier("le clic est le plus discret de tous les sons ponctuels",
  Object.keys(SON.MOTIFS).every(function (n) {
    return n === "clic" || SON.VOLUMES.clic <= SON.VOLUMES[n];
  }),
  "clic à " + SON.VOLUMES.clic + " — on l'entend cent fois par partie");

verifier("la sourdine coupe vraiment tout",
  Object.keys(SON.VOLUMES).every(function (n) { return SON.volume(n, true) === 0; }));

verifier("sans sourdine, un son connu sort quelque chose",
  SON.volume("juste", false) > 0);

verifier("un son inconnu ne sort rien plutôt que de crier",
  SON.volume("gong-de-la-victoire", false) === 0,
  "une faute de frappe ne doit pas produire un volume par défaut");

/* ============================== LES MOTIFS ============================== */

titre("Les motifs");

Object.keys(SON.MOTIFS).forEach(function (nom) {
  const m = SON.MOTIFS[nom];
  verifier("le motif « " + nom + " » a son volume",
    typeof SON.VOLUMES[nom] === "number",
    "aucune entrée dans VOLUMES — il sortirait muet");
  verifier("le motif « " + nom + " » a au moins une note", m.degres.length >= 1);
  verifier("le motif « " + nom + " » ne dure pas trop",
    m.duree + m.pas * m.degres.length <= 2.5,
    "un son de jeu qui traîne enjambe le suivant");

  m.degres.forEach(function (d) {
    const f = SON.note(d, 0);
    verifier("le motif « " + nom + " », degré " + d + ", reste audible",
      f >= 80 && f <= 4000,
      f.toFixed(1) + " Hz — hors de ce qu'un téléphone restitue proprement");
  });
});

verifier("chaque volume déclaré sert à quelque chose",
  Object.keys(SON.VOLUMES).every(function (n) {
    return n === "ambiance" || n === "cloche" || !!SON.MOTIFS[n];
  }),
  "un volume sans motif est un son mort dans le fichier");

/* La décision explicite : pas de compte à rebours sonore. C'était la première
   idée, et c'est la définition même d'oppressant. */
verifier("il n'existe aucun tic-tac de compte à rebours",
  !Object.keys(SON.MOTIFS).some(function (n) {
    return /tic|tac|rebours|compte|alarme|buzz/i.test(n);
  }),
  "la jauge se voit déjà ; un tic-tac ne ferait qu'angoisser la table");

/* ============================== LES CLOCHES ============================== */

titre("Les clochettes de l'ambiance");

verifier("elles ne se suivent jamais de trop près", SON.CLOCHE_MIN >= 6,
  "plus rapproché, l'oreille se met à les attendre");
verifier("elles ne se font jamais oublier", SON.CLOCHE_MAX <= 40,
  "plus espacé, on croit que le son est cassé");
verifier("l'écart est bien un intervalle", SON.CLOCHE_MIN < SON.CLOCHE_MAX);

(function () {
  let dedans = true, varie = {};
  for (let i = 0; i < 500; i++) {
    const d = SON.delaiCloche(Math.random);
    if (d < SON.CLOCHE_MIN || d > SON.CLOCHE_MAX) dedans = false;
    varie[Math.round(d)] = true;
  }
  verifier("le délai tiré reste toujours dans l'intervalle", dedans);
  verifier("le délai varie vraiment d'une fois à l'autre",
    Object.keys(varie).length > 5,
    "sinon les clochettes tomberaient en rythme, et deviendraient une horloge");
})();

verifier("un délai tiré au minimum tombe sur le minimum",
  proche(SON.delaiCloche(function () { return 0; }), SON.CLOCHE_MIN));
verifier("un délai tiré au maximum tombe sur le maximum",
  proche(SON.delaiCloche(function () { return 1; }), SON.CLOCHE_MAX));

/* ============================== HORS NAVIGATEUR ============================== */

titre("Hors navigateur");

verifier("le fichier se charge sans navigateur sans rien tenter de jouer",
  typeof SON.jouer === "undefined",
  "sinon un outil en ligne de commande essaierait d'ouvrir une carte son");

console.log("");
console.log(controles + " contrôles, " + echecs + " échec" + (echecs > 1 ? "s" : "") + ".");
process.exit(echecs ? 1 : 0);
