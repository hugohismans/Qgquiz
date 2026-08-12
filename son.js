/* ============================================================================
   LE SON.

   Tout est fabriqué par le navigateur, en direct : pas un seul fichier audio à
   télécharger. Le site reste un tas de fichiers texte, il s'ouvre aussi vite
   qu'avant, et il n'y a aucune licence de musique à démêler.

   ---------------------------------------------------------------------------
   LA CONSIGNE D'HUGO, ET COMMENT ELLE DEVIENT VÉRIFIABLE

   « Petite musique, petits sons d'ambiance, un truc propre, mais pas
   oppressant, mais sympa quoi. » — 12 août 2026, avant un repas de famille.

   « Pas oppressant » n'est pas une impression qu'on se repasse en boucle : ici
   c'est un PLAFOND, et `outil-verif-son.js` refuse le moindre son qui le
   dépasse. Le jour où l'on ajoutera une fanfare de victoire à 0,4, le contrôle
   tombera avant qu'elle n'arrive dans les oreilles de sa famille.

   Deux autres décisions vont dans le même sens :

   - **Aucun tic-tac de compte à rebours.** C'était la première idée, et c'est
     exactement la définition d'oppressant. La jauge se voit, elle suffit.
   - **La gamme est pentatonique.** Elle ne contient aucun demi-ton, ce qui
     fait que deux notes tirées au hasard ne jurent jamais l'une contre
     l'autre. C'est ce qui permet aux clochettes de l'ambiance de tomber quand
     elles veulent sans jamais sonner faux — et c'est vérifié, pas espéré.
   ============================================================================ */

"use strict";

const SON = (function () {

  /* ======================================================================
     LA PARTIE CALCULÉE — aucun son ici, tout est éprouvable hors navigateur.
     ====================================================================== */

  /* Le la du diapason. Tout le reste en découle par la formule du tempérament
     égal — aucune fréquence n'est recopiée d'une table. */
  const LA4 = 440;

  function hauteur(demiTons) {
    return LA4 * Math.pow(2, demiTons / 12);
  }

  /* Pentatonique mineure de la : la, do, ré, mi, sol.
     Écrite en demi-tons depuis la tonique. */
  const GAMME = [0, 3, 5, 7, 10];

  /* Le degré peut dépasser la gamme et devenir négatif : on retombe alors
     dans l'octave au-dessus ou en dessous. */
  function note(degre, octave) {
    const n = ((degre % GAMME.length) + GAMME.length) % GAMME.length;
    const saut = Math.floor(degre / GAMME.length);
    return hauteur(GAMME[n] + 12 * (saut + (octave || 0)));
  }

  /* LE PLAFOND. Rien, jamais, ne monte au-dessus. */
  const PLAFOND = 0.14;

  const VOLUMES = {
    ambiance: 0.045,
    cloche:   0.035,
    clic:     0.050,
    juste:    0.110,
    rate:     0.075,
    depart:   0.100,
    fin:      0.120
  };

  /* Les motifs. Des degrés de la gamme, pas des fréquences : c'est ce qui
     garantit qu'ils restent dans le même monde sonore que l'ambiance. */
  const MOTIFS = {
    clic:   { degres: [7],        pas: 0,    duree: 0.07, forme: "triangle" },
    juste:  { degres: [4, 6, 9],  pas: 0.085, duree: 0.42, forme: "triangle" },
    rate:   { degres: [3, 1],     pas: 0.13, duree: 0.34, forme: "sine" },
    depart: { degres: [0, 3, 5],  pas: 0.11, duree: 0.5,  forme: "sine" },
    fin:    { degres: [0, 4, 7, 9], pas: 0.14, duree: 1.5, forme: "sine" }
  };

  /* L'ambiance pose des clochettes à intervalles irréguliers. Trop rapproché,
     ça devient une mélodie qu'on attend ; trop espacé, on croit que le son est
     cassé. */
  const CLOCHE_MIN = 9, CLOCHE_MAX = 22;

  function delaiCloche(alea) {
    return CLOCHE_MIN + alea() * (CLOCHE_MAX - CLOCHE_MIN);
  }

  /* Le volume effectif d'un son, sourdine comprise. Un seul endroit décide,
     pour qu'il n'y ait pas deux écrivains pour une même valeur. */
  function volume(nom, sourdine) {
    if (sourdine) return 0;
    const v = VOLUMES[nom];
    return typeof v === "number" ? Math.min(v, PLAFOND) : 0;
  }

  const calcule = {
    LA4: LA4, GAMME: GAMME, PLAFOND: PLAFOND, VOLUMES: VOLUMES,
    MOTIFS: MOTIFS, CLOCHE_MIN: CLOCHE_MIN, CLOCHE_MAX: CLOCHE_MAX,
    hauteur: hauteur, note: note, volume: volume, delaiCloche: delaiCloche
  };

  /* ======================================================================
     LA PARTIE QUI SONNE.
     ====================================================================== */

  if (typeof window === "undefined") return calcule;

  let ctx = null, maitre = null, sourdine = false;
  let pad = null, minuterieCloche = null;

  try {
    sourdine = localStorage.getItem("quiz-quaregnon-sourdine") === "oui";
  } catch (e) { /* navigation privée */ }

  /* Les navigateurs interdisent de faire du bruit avant que l'on ait touché
     la page. On ne se bat pas contre : on attend le premier geste, qui arrive
     de toute façon puisqu'il faut cliquer pour jouer. */
  function reveiller() {
    if (ctx) { if (ctx.state === "suspended") ctx.resume(); return ctx; }
    const Fabrique = window.AudioContext || window.webkitAudioContext;
    if (!Fabrique) return null;
    ctx = new Fabrique();
    maitre = ctx.createGain();
    maitre.gain.value = 1;
    maitre.connect(ctx.destination);
    return ctx;
  }

  /* Une note, avec une enveloppe douce. L'attaque n'est jamais instantanée :
     un son qui démarre d'un coup claque, et c'est ça qui fatigue. */
  function sonner(frequence, quand, duree, gain, forme) {
    if (!ctx || gain <= 0) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = forme || "sine";
    o.frequency.value = frequence;

    const t = quand;
    const attaque = Math.min(0.03, duree * 0.2);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + attaque);
    g.gain.exponentialRampToValueAtTime(0.0001, t + duree);

    o.connect(g); g.connect(maitre);
    o.start(t); o.stop(t + duree + 0.05);
  }

  function jouer(nom) {
    if (sourdine) return;
    if (!reveiller()) return;
    const m = MOTIFS[nom];
    if (!m) return;
    const g = volume(nom, sourdine);
    const t0 = ctx.currentTime + 0.01;
    m.degres.forEach(function (d, i) {
      sonner(note(d, 0), t0 + i * m.pas, m.duree, g, m.forme);
    });
  }

  /* Le fond : trois voix graves, très proches, filtrées, qui respirent
     lentement. C'est ce qui fait la présence sans qu'on l'écoute. */
  function ambiance(allumer) {
    if (allumer === false) { eteindreAmbiance(); return; }
    if (sourdine || pad) return;
    if (!reveiller()) return;

    const sortie = ctx.createGain();
    sortie.gain.value = 0.0001;
    const filtre = ctx.createBiquadFilter();
    filtre.type = "lowpass";
    filtre.frequency.value = 480;
    filtre.Q.value = 0.7;
    filtre.connect(sortie);
    sortie.connect(maitre);

    /* Tonique, octave, quinte — le socle le plus stable qui existe. */
    const voix = [
      { f: note(0, -2), desaccord: -4 },
      { f: note(0, -1), desaccord: +5 },
      { f: note(3, -2), desaccord: -2 }
    ].map(function (v) {
      const o = ctx.createOscillator();
      o.type = "sine";
      o.frequency.value = v.f;
      o.detune.value = v.desaccord;
      o.connect(filtre);
      o.start();
      return o;
    });

    /* La respiration : le filtre monte et descend sur vingt-huit secondes.
       Assez lent pour qu'on ne puisse pas la suivre consciemment. */
    const souffle = ctx.createOscillator();
    const ampleur = ctx.createGain();
    souffle.type = "sine";
    souffle.frequency.value = 1 / 28;
    ampleur.gain.value = 170;
    souffle.connect(ampleur);
    ampleur.connect(filtre.frequency);
    souffle.start();

    const g = volume("ambiance", sourdine);
    sortie.gain.exponentialRampToValueAtTime(g, ctx.currentTime + 3.5);

    pad = { sortie: sortie, voix: voix, souffle: souffle };
    poserCloche();
  }

  function poserCloche() {
    clearTimeout(minuterieCloche);
    minuterieCloche = setTimeout(function () {
      if (pad && !sourdine && ctx) {
        const degre = Math.floor(Math.random() * 5);
        const haut = Math.random() < 0.5 ? 1 : 2;
        sonner(note(degre, haut), ctx.currentTime + 0.02, 2.6,
               volume("cloche", sourdine), "sine");
      }
      if (pad) poserCloche();
    }, delaiCloche(Math.random) * 1000);
  }

  function eteindreAmbiance() {
    clearTimeout(minuterieCloche);
    if (!pad || !ctx) { pad = null; return; }
    const p = pad; pad = null;
    const fin = ctx.currentTime + 1.2;
    try { p.sortie.gain.exponentialRampToValueAtTime(0.0001, fin); } catch (e) {}
    p.voix.forEach(function (o) { try { o.stop(fin + 0.1); } catch (e) {} });
    try { p.souffle.stop(fin + 0.1); } catch (e) {}
  }

  function basculerSourdine() {
    sourdine = !sourdine;
    try {
      localStorage.setItem("quiz-quaregnon-sourdine", sourdine ? "oui" : "non");
    } catch (e) {}
    if (sourdine) eteindreAmbiance();
    else ambiance(true);
    return sourdine;
  }

  function enSourdine() { return sourdine; }

  /* Un point de mesure. Le plafond des VOLUMES borne chaque son pris seul,
     et pas du tout leur SOMME : quatre notes qui se recouvrent additionnent
     leurs amplitudes. Sans une prise sur la sortie, on ne peut que l'espérer.
     `outil-verif-sortie.js` branche un analyseur ici et regarde ce qui passe. */
  function sortie() { reveiller(); return maitre; }

  return Object.assign({}, calcule, {
    sortie: sortie,
    reveiller: reveiller,
    jouer: jouer,
    ambiance: ambiance,
    basculerSourdine: basculerSourdine,
    enSourdine: enSourdine
  });
})();

if (typeof module !== "undefined" && module.exports) module.exports = { SON };
