/* ============================================================================
   CONTRÔLE — la page telle qu'on la voit.

       npm install playwright        (une fois)
       node outil-verif-page.js

   ---------------------------------------------------------------------------
   CE QUI L'A FAIT NAÎTRE

   Deux défauts vus à l'œil sur une capture d'écran, le 12 août 2026, après que
   les photos de Quaregnon sont arrivées :

   1. **Le bouton du son mordait sur le score.** Il est en position fixe, en
      haut à droite ; la barre de jeu affiche les points au même endroit. Sur un
      écran de téléphone, on lisait « 976 p ».

   2. **Les mauvaises réponses devenaient transparentes.** Elles étaient
      atténuées avec `opacity`, ce qui traverse le fond du bouton. Tant que le
      fond du site était un dégradé sombre, personne ne l'a vu. Le jour où une
      photo est passée derrière, la façade de l'hôtel de ville s'est mise à
      traverser les réponses, et on ne lisait plus rien.

   Le second est le plus instructif : le code n'avait pas changé. C'est le
   décor qui a changé, et il a révélé un défaut qui dormait là depuis le début.
   D'où ce contrôle, qui mesure la page AVEC la photo, comme un joueur la voit.

   Il demande playwright. Sans lui il s'annonce et passe son tour, sans faire
   échouer le reste : le dépôt continue de marcher sans rien installer.
   ============================================================================ */

"use strict";

let chromium;
try {
  chromium = require("playwright").chromium;
} catch (e) {
  console.log("\n  playwright n'est pas installé — la page n'est pas mesurée ici.");
  console.log("  Pour la mesurer :  npm install playwright  puis relancer.");
  console.log("\n0 contrôles, 0 échec.");
  process.exit(0);
}

const http = require("http"), fs = require("fs"), path = require("path");

const RACINE = __dirname;
const PORT = 8763;
const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
                ".js": "text/javascript; charset=utf-8", ".jpg": "image/jpeg",
                ".png": "image/png" };

/* Les tailles où l'on joue vraiment. 320 est le plus petit téléphone encore en
   circulation ; si ça tient là, ça tient partout. */
const ECRANS = [
  { nom: "petit téléphone", largeur: 320, hauteur: 700 },
  { nom: "téléphone",       largeur: 390, hauteur: 844 },
  { nom: "grand écran",     largeur: 1200, hauteur: 900 }
];

let echecs = 0, controles = 0;
function verifier(titre, condition, detail) {
  controles++;
  if (condition) return;
  echecs++;
  console.log("  ÉCHEC  " + titre + (detail ? "\n         " + detail : ""));
}

/* Un vrai PNG d'un pixel, en dur. Il sert à éprouver le mécanisme qui laisse
   le logo officiel prendre la place du Q dessiné — sans jamais rien écrire
   dans le dépôt, donc sans risque de l'y oublier. */
const PIXEL = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9"
  + "awAAAABJRU5ErkJggg==", "base64");

let servirLogo = false;

const serveur = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p === "/") p = "/index.html";
  if (p === "/images/logo.png") {
    if (!servirLogo) { res.writeHead(404); return res.end("non"); }
    res.writeHead(200, { "Content-Type": "image/png" });
    return res.end(PIXEL);
  }
  const f = path.join(RACINE, p);
  if (!f.startsWith(RACINE) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) {
    res.writeHead(404); return res.end("non");
  }
  res.writeHead(200, { "Content-Type": TYPES[path.extname(f)] || "application/octet-stream" });
  res.end(fs.readFileSync(f));
});

function seChevauchent(a, b) {
  if (!a || !b) return false;
  return !(a.x + a.width <= b.x || b.x + b.width <= a.x
        || a.y + a.height <= b.y || b.y + b.height <= a.y);
}

(async () => {
  await new Promise((r) => serveur.listen(PORT, r));
  const nav = await chromium.launch({
    executablePath: fs.existsSync("/opt/pw-browsers/chromium")
      ? "/opt/pw-browsers/chromium" : undefined,
    args: ["--no-sandbox"]
  });

  const avecPhoto = fs.existsSync(path.join(RACINE, "images", "fond.jpg"));
  console.log("\n  La photo de fond est " + (avecPhoto ? "présente" : "absente")
    + " — c'est dans cet état que la page est mesurée.");

  for (const ecran of ECRANS) {
    console.log("\n" + ecran.nom + " (" + ecran.largeur + " px)");
    const ctx = await nav.newContext({
      viewport: { width: ecran.largeur, height: ecran.hauteur }
    });
    const page = await ctx.newPage();
    const erreurs = [];
    page.on("pageerror", (e) => erreurs.push(e.message));

    await page.goto("http://localhost:" + PORT + "/", { waitUntil: "networkidle" });
    await page.waitForTimeout(400);

    verifier("la photo est bien posée en fond — " + ecran.nom,
      !avecPhoto || await page.evaluate(() =>
        document.body.classList.contains("avec-photo")),
      "le site n'a pas détecté images/fond.jpg");

    /* On entre dans une partie : c'est là que la barre du haut existe. */
    await page.click("#b-solo");
    await page.waitForTimeout(350);

    const boiteSon = await page.locator("#b-son").boundingBox();
    for (const cible of ["#tableau-score", "#compteur", "#jauge"]) {
      const b = await page.locator(cible).boundingBox();
      verifier("le bouton du son ne mord pas sur " + cible + " — " + ecran.nom,
        !seChevauchent(boiteSon, b),
        "il recouvre l'affichage — sur téléphone, on lisait « 976 p »");
    }

    verifier("aucun débordement horizontal — " + ecran.nom,
      await page.evaluate(() =>
        document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1));

    /* Les cibles tactiles. En dessous de 40 px, on rate le bouton une fois
       sur trois, et on répond faux sans l'avoir voulu. */
    if (ecran.largeur < 500) {
      const hauteurs = await page.evaluate(() =>
        Array.from(document.querySelectorAll("#reponses .reponse"))
          .map((b) => b.getBoundingClientRect().height));
      verifier("les réponses sont assez hautes pour le doigt — " + ecran.nom,
        hauteurs.every((h) => h >= 44),
        "la plus petite fait " + Math.min.apply(null, hauteurs).toFixed(0) + " px");
    }

    /* Le défaut qui dormait : on répond, et les mauvaises réponses s'atténuent.
       Si elles s'atténuent en devenant TRANSPARENTES, la photo passe au
       travers et le texte devient illisible. */
    await page.locator("#reponses .reponse").first().click();
    await page.waitForTimeout(300);

    const opacites = await page.evaluate(() =>
      Array.from(document.querySelectorAll("#reponses .reponse")).map((b) => ({
        classe: b.className,
        opacite: parseFloat(getComputedStyle(b).opacity),
        fond: getComputedStyle(b).backgroundColor
      })));

    opacites.forEach(function (r) {
      verifier("une réponse révélée reste opaque — " + ecran.nom,
        r.opacite >= 0.99,
        "opacité " + r.opacite + " sur « " + r.classe + " » : le fond du site "
        + "traverse le bouton, et avec une photo derrière on ne lit plus rien");
    });

    verifier("la bonne réponse se distingue des autres — " + ecran.nom,
      opacites.filter((r) => /juste/.test(r.classe)).length === 1,
      "exactement une réponse doit être marquée juste");

    verifier("le verdict s'affiche — " + ecran.nom,
      (await page.locator("#verdict .verdict").count()) === 1);

    verifier("aucune erreur JavaScript — " + ecran.nom, erreurs.length === 0,
      erreurs.join(" ; "));

    await ctx.close();
  }

  /* ------------------------------------------------------------- le Q */

  console.log("\nLe Q");

  {
    const ctx = await nav.newContext({ viewport: { width: 390, height: 844 } });
    const page = await ctx.newPage();

    servirLogo = false;
    await page.goto("http://localhost:" + PORT + "/", { waitUntil: "networkidle" });
    await page.waitForTimeout(400);

    const q = await page.locator(".q-logo").first();
    const boite = await q.boundingBox();
    verifier("le Q s'affiche", !!boite && boite.width > 40 && boite.height > 40,
      "il est absent ou réduit à rien");
    verifier("le Q tient dans la largeur de l'écran",
      !!boite && boite.x >= 0 && boite.x + boite.width <= 390 + 1,
      "sa queue déborde très à droite : c'est sa forme, il faut lui laisser la place");

    verifier("sans logo officiel, c'est le Q dessiné qui s'affiche",
      (await page.evaluate(() =>
        document.querySelector(".q-logo").tagName.toLowerCase())) === "svg");

    /* Le vert de la commune. Mon premier Q était rouge — la faute qu'un
       Quaregnonnais voit en une seconde et que rien ne rattrapait. */
    const vert = await page.evaluate(() => {
      const s = document.querySelector(".q-logo").outerHTML.toLowerCase();
      return { sauge: s.indexOf("#9fc493") !== -1,
               rouge: /#d1332e|#c8102e|var\(--rouge\)/.test(s) };
    });
    verifier("le Q est au vert de la commune", vert.sauge,
      "le vert relevé sur le logo de Quaregnon est #9fc493");
    verifier("le Q n'est pas rouge", !vert.rouge,
      "le rouge est la couleur de la Charte, pas celle du logo");

    await ctx.close();
  }

  {
    /* Et si le fichier officiel arrive, il doit prendre la place tout seul. */
    const ctx = await nav.newContext({ viewport: { width: 390, height: 844 } });
    const page = await ctx.newPage();

    servirLogo = true;
    await page.goto("http://localhost:" + PORT + "/", { waitUntil: "networkidle" });
    await page.waitForTimeout(600);

    verifier("un logo déposé dans images/logo.png prend la place du dessin",
      (await page.evaluate(() =>
        document.querySelector(".q-logo").tagName.toLowerCase())) === "img",
      "le mécanisme est là pour le jour où la commune donne son accord");
    verifier("le logo déposé garde une alternative textuelle",
      !!(await page.getAttribute(".q-logo", "alt")));
    servirLogo = false;

    await ctx.close();
  }

  await nav.close();
  serveur.close();

  console.log("\n  Non mesuré ici : si c'est beau. Aucun chiffre ne le dira.");
  console.log("");
  console.log(controles + " contrôles, " + echecs + " échec" + (echecs > 1 ? "s" : "") + ".");
  process.exit(echecs ? 1 : 0);
})();
