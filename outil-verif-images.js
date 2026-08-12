/* ============================================================================
   CONTRÔLE — les photos et leurs licences.

       node outil-verif-images.js

   ---------------------------------------------------------------------------
   CE N'EST PAS UN CONTRÔLE DE CONFORT

   Les photos viennent de Wikimedia Commons sous licence Creative Commons.
   Nommer l'auteur n'est pas une politesse qu'on rend si on y pense : c'est la
   CONDITION à laquelle on a le droit de les afficher. Une photo déposée dans
   `images/` sans sa ligne de crédit est une photo qu'on n'a pas le droit de
   publier.

   Ce contrôle regarde donc dans les deux sens, et c'est le second qui compte :

   - toute photo créditée existe bien (sinon le site affiche un trou) ;
   - **toute photo présente est créditée** (sinon le site est en faute).

   Le second sens est celui qu'on oublie. On dépose une image « juste pour
   voir », on la garde, et six mois plus tard personne ne sait plus d'où elle
   vient ni qui l'a prise.
   ============================================================================ */

"use strict";

const fs = require("fs"), path = require("path");
const { CREDITS } = require("./images/credits.js");

let echecs = 0, controles = 0;

function verifier(titre, condition, detail) {
  controles++;
  if (condition) return;
  echecs++;
  console.log("  ÉCHEC  " + titre + (detail ? "\n         " + detail : ""));
}

function titre(t) { console.log("\n" + t); }

const DOSSIER = path.join(__dirname, "images");

/* Les licences sous lesquelles on a le droit de publier. Tout ce qui porte
   « non commercial » ou « pas de modification » est exclu : le site est
   public, et une restriction pareille finirait par être violée sans qu'on s'en
   aperçoive. */
const LICENCES = [
  "Domaine public", "CC0",
  "CC BY 2.0", "CC BY 2.5", "CC BY 3.0", "CC BY 4.0",
  "CC BY-SA 2.0", "CC BY-SA 2.5", "CC BY-SA 3.0", "CC BY-SA 4.0"
];

/* Le budget. Le quiz se joue sur un téléphone, souvent en 4G, souvent à table.
   Une page qui met huit secondes à s'ouvrir n'est jamais jouée. */
const POIDS_FOND = 420 * 1024;
const POIDS_AUTRE = 300 * 1024;
const POIDS_TOTAL = 2.2 * 1024 * 1024;

/* --------------------------------------------------- chaque crédit tient */

titre("Chaque photo créditée");

const credites = {};

CREDITS.forEach(function (c, i) {
  const ou = "crédit n°" + (i + 1) + " (" + (c.fichier || "sans fichier") + ")";

  verifier("le fichier est nommé — " + ou, typeof c.fichier === "string" && c.fichier);
  verifier("le sujet est décrit — " + ou,
    typeof c.sujet === "string" && c.sujet.length > 8,
    "sans description, personne ne sait ce qu'il regarde");
  verifier("le lieu est dit — " + ou, typeof c.lieu === "string" && c.lieu.length > 2,
    "c'est ce qui empêche le site de faire passer Hornu pour Quaregnon");
  verifier("l'auteur est nommé — " + ou,
    typeof c.auteur === "string" && c.auteur.length > 2,
    "c'est la condition de la licence, pas une politesse");
  verifier("la licence est connue et permissive — " + ou,
    LICENCES.indexOf(c.licence) !== -1,
    "« " + c.licence + " » n'est pas dans la liste des licences acceptées");
  verifier("le lien renvoie à la page d'origine — " + ou,
    typeof c.lien === "string" && /^https:\/\/commons\.wikimedia\.org\//.test(c.lien),
    "il faut pouvoir remonter à la page où la licence est écrite");

  verifier("le fichier crédité existe vraiment — " + ou,
    !!c.fichier && fs.existsSync(path.join(DOSSIER, c.fichier)),
    "crédité mais absent du dossier");

  verifier("aucun crédit en double — " + ou, !credites[c.fichier]);
  credites[c.fichier] = c;
});

/* -------------------------------- et dans l'autre sens, celui qu'on oublie */

titre("Chaque photo présente");

const photos = fs.readdirSync(DOSSIER)
  .filter(function (f) { return /\.(jpe?g|png|webp|avif|gif|svg)$/i.test(f); });

verifier("il y a des photos", photos.length > 0,
  "le dossier images/ ne contient aucune image");

photos.forEach(function (f) {
  verifier("la photo « " + f + " » porte son crédit", !!credites[f],
    "présente dans le dossier mais créditée nulle part — "
    + "on n'a pas le droit de la publier ainsi");
});

/* --------------------------------------------------------------- le poids */

titre("Le poids");

let total = 0;
photos.forEach(function (f) {
  const o = fs.statSync(path.join(DOSSIER, f)).size;
  total += o;
  const plafond = (f === "fond.jpg") ? POIDS_FOND : POIDS_AUTRE;
  verifier("« " + f + " » tient dans son budget", o <= plafond,
    Math.round(o / 1024) + " ko > " + Math.round(plafond / 1024) + " ko");
});

verifier("l'ensemble des photos reste raisonnable", total <= POIDS_TOTAL,
  Math.round(total / 1024) + " ko au total — le site se joue en 4G, à table");

/* ------------------------------------------------------------- le fond */

titre("Le fond");

verifier("images/fond.jpg existe", fs.existsSync(path.join(DOSSIER, "fond.jpg")),
  "c'est le nom que quiz.js cherche — un autre nom et la photo n'apparaît jamais");

verifier("le fond est bien crédité", !!credites["fond.jpg"]);

verifier("le fond montre Quaregnon",
  !!credites["fond.jpg"] && /quaregnon/i.test(credites["fond.jpg"].lieu),
  "un site sur Quaregnon qui s'ouvre sur une photo d'ailleurs, sans le dire");

/* ------------------------------------------------ ce que le site montre */

titre("Ce que le site raconte de ses photos");

const combienIci = CREDITS.filter(function (c) {
  return /quaregnon/i.test(c.lieu);
}).length;

console.log("    " + combienIci + " photos sur " + CREDITS.length
  + " sont prises à Quaregnon même.");

verifier("la majorité des photos sont vraiment de Quaregnon",
  combienIci * 2 > CREDITS.length,
  "sinon le titre du site promet plus que les images ne montrent");

console.log("");
console.log(controles + " contrôles, " + echecs + " échec" + (echecs > 1 ? "s" : "") + ".");
console.log(photos.length + " photos, " + Math.round(total / 1024) + " ko au total.");
process.exit(echecs ? 1 : 0);
