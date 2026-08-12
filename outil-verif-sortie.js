/* ============================================================================
   CONTRÔLE — ce qui SORT vraiment des haut-parleurs.

       npm install playwright        (une fois)
       node outil-verif-sortie.js

   ---------------------------------------------------------------------------
   POURQUOI CELUI-CI EXISTE, ALORS QU'IL Y A DÉJÀ `outil-verif-son.js`

   L'autre vérifie les RÉGLAGES : chaque son reste sous le plafond. Mais un
   plafond par son ne borne pas leur somme. Le motif de fin joue quatre notes
   qui se recouvrent — quatre fois 0,12 peut faire beaucoup plus que 0,12. Et
   l'ambiance continue de tourner par-dessous pendant ce temps-là.

   Autrement dit : on peut respecter tous les réglages et quand même faire
   sursauter la table. Alors celui-ci ne lit aucun réglage. Il ouvre un vrai
   navigateur, branche un analyseur sur la sortie, joue les sons pour de bon,
   et REGARDE l'amplitude qui passe. C'est la seule mesure qui parle de ce que
   l'oreille reçoit.

   Il ne dit pas si c'est joli. Ça, c'est l'oreille d'Hugo, et rien d'autre ne
   la remplacera.

   Il demande playwright, donc il ne s'appelle pas `outil-verif-…` par hasard :
   il est nommé ainsi pour être lancé par `verifier.js` UNIQUEMENT si playwright
   est installé — sinon il s'annonce et passe son tour, sans faire échouer le
   reste. Le dépôt continue de marcher sans rien installer.
   ============================================================================ */

"use strict";

let chromium;
try {
  chromium = require("playwright").chromium;
} catch (e) {
  console.log("\n  playwright n'est pas installé — le son n'est pas mesuré ici.");
  console.log("  Pour le mesurer :  npm install playwright  puis relancer.");
  console.log("\n0 contrôles, 0 échec.");
  process.exit(0);
}

const http = require("http"), fs = require("fs"), path = require("path");

const RACINE = __dirname;
const PORT = 8759;
const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
                ".js": "text/javascript; charset=utf-8", ".jpg": "image/jpeg",
                ".png": "image/png" };

/* Le plafond de ce qui sort, une fois tout additionné. Au-delà, ça domine une
   conversation de table — et c'est exactement ce qu'Hugo ne veut pas. */
const PLAFOND_SORTIE = 0.45;

let echecs = 0, controles = 0;
function verifier(titre, condition, detail) {
  controles++;
  if (condition) return;
  echecs++;
  console.log("  ÉCHEC  " + titre + (detail ? "\n         " + detail : ""));
}

const serveur = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p === "/") p = "/index.html";
  const f = path.join(RACINE, p);
  if (!f.startsWith(RACINE) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) {
    res.writeHead(404); return res.end("non");
  }
  res.writeHead(200, { "Content-Type": TYPES[path.extname(f)] || "application/octet-stream" });
  res.end(fs.readFileSync(f));
});

/* Mesure la crête d'amplitude pendant qu'un son joue. On échantillonne
   l'analyseur en continu : une crête ne dure que quelques millisecondes, et
   un relevé unique passerait juste à côté. */
/* Mesure la crête d'amplitude pendant qu'un son joue. On échantillonne
   l'analyseur en continu : une crête ne dure que quelques millisecondes, et
   un relevé unique passerait juste à côté.

   Cette fonction ne s'exécute JAMAIS ici : playwright l'envoie telle quelle
   dans la page, où `SON` existe. */
function MESURER(args) {
  const nom = args[0], ms = args[1];
  return new Promise(function (fini) {
    const ctx = SON.reveiller();
    const analyseur = ctx.createAnalyser();
    analyseur.fftSize = 2048;
    SON.sortie().connect(analyseur);
    const tampon = new Float32Array(analyseur.fftSize);
    let crete = 0, somme = 0, n = 0;
    if (nom) SON.jouer(nom);
    const t = setInterval(function () {
      analyseur.getFloatTimeDomainData(tampon);
      for (let i = 0; i < tampon.length; i++) {
        const v = Math.abs(tampon[i]);
        if (v > crete) crete = v;
        somme += v * v; n++;
      }
    }, 8);
    setTimeout(function () {
      clearInterval(t);
      try { SON.sortie().disconnect(analyseur); } catch (e) {}
      fini({ crete: crete, moyenne: n ? Math.sqrt(somme / n) : 0 });
    }, ms);
  });
}

(async () => {
  await new Promise((r) => serveur.listen(PORT, r));
  const nav = await chromium.launch({
    executablePath: fs.existsSync("/opt/pw-browsers/chromium")
      ? "/opt/pw-browsers/chromium" : undefined,
    args: ["--no-sandbox", "--autoplay-policy=no-user-gesture-required"]
  });
  const page = await (await nav.newContext()).newPage();
  const erreurs = [];
  page.on("pageerror", (e) => erreurs.push(e.message));

  await page.goto("http://localhost:" + PORT + "/", { waitUntil: "networkidle" });
  await page.click("body", { position: { x: 5, y: 500 } });
  await page.waitForTimeout(400);

  console.log("\nCe qui sort, son par son");

  /* L'ambiance tourne déjà : chaque mesure l'inclut, comme dans une vraie
     partie. C'est le but — on ne mesure pas un son au laboratoire, on mesure
     ce que quelqu'un entend. */
  const fond = await page.evaluate(MESURER, ["", 1400]);
  verifier("l'ambiance seule reste un fond", fond.crete <= 0.16,
    "crête " + fond.crete.toFixed(3));
  verifier("l'ambiance seule s'entend tout de même", fond.crete > 0.004,
    "crête " + fond.crete.toFixed(3) + " — un fond inaudible n'est pas un fond");

  const mesures = { ambiance: fond };
  for (const nom of ["clic", "rate", "depart", "juste", "fin"]) {
    const m = await page.evaluate(MESURER, [nom, 2000]);
    mesures[nom] = m;
    console.log("    " + nom.padEnd(8) + " crête " + m.crete.toFixed(3)
      + "   moyenne " + m.moyenne.toFixed(4));
    verifier("« " + nom + " » ne fait pas sursauter la table",
      m.crete <= PLAFOND_SORTIE,
      "crête " + m.crete.toFixed(3) + " > " + PLAFOND_SORTIE
      + " — c'est la SOMME des notes qui se recouvrent, pas un réglage");
    verifier("« " + nom + " » ne sature pas", m.crete < 1,
      "au-dessus de 1 le son est écrêté et grésille");
    verifier("« " + nom + " » s'entend au-dessus du fond",
      m.crete > fond.crete * 1.25,
      "crête " + m.crete.toFixed(3) + " contre un fond à " + fond.crete.toFixed(3));
  }

  console.log("\nL'équilibre entre les sons");

  verifier("la bonne réponse s'entend plus que la mauvaise",
    mesures.juste.crete > mesures.rate.crete,
    "récompenser doit s'entendre mieux que punir");
  verifier("le clic reste le plus discret de tous",
    mesures.clic.crete < mesures.juste.crete
      && mesures.clic.crete < mesures.fin.crete,
    "on l'entend à chaque geste : c'est celui qui fatigue en premier");

  console.log("\nLa sourdine");

  await page.evaluate(() => { if (!SON.enSourdine()) SON.basculerSourdine(); });
  await page.waitForTimeout(1600);
  const muet = await page.evaluate(MESURER, ["fin", 1800]);
  verifier("en sourdine, il ne sort plus rien du tout", muet.crete < 0.002,
    "crête " + muet.crete.toFixed(4) + " — la sourdine doit être un silence");

  verifier("aucune erreur JavaScript pendant la mesure", erreurs.length === 0,
    erreurs.join(" ; "));

  await nav.close();
  serveur.close();

  console.log("\n  Non mesuré ici : si c'est agréable. Aucun chiffre ne le dira.");
  console.log("");
  console.log(controles + " contrôles, " + echecs + " échec" + (echecs > 1 ? "s" : "") + ".");
  process.exit(echecs ? 1 : 0);
})();
