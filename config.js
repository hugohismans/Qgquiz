/* ============================================================================
   LES RÉGLAGES.

   ---------------------------------------------------------------------------
   C'EST FAIT — Hugo a créé la base le 12 août 2026

   Projet **QuizzQG**, Realtime Database hébergée en Belgique (europe-west1),
   règles en mode test. L'adresse est en place plus bas, le multijoueur est
   allumé, il n'y a rien à remplir.

   ---------------------------------------------------------------------------
   UN AVERTISSEMENT HONNÊTE, POUR PLUS TARD

   Le « mode test » ouvre la base à qui connaît l'adresse, et Google la referme
   automatiquement au bout de trente jours — soit vers le 11 septembre 2026.
   C'est parfait pour une démonstration en famille aujourd'hui ; ce n'est pas
   fait pour durer.

   Le jour où le multijoueur se met à répondre « La base a répondu 401 », c'est
   ça. Les règles à coller à la place sont écrites dans REGLES-FIREBASE.md, et
   l'opération prend deux minutes.
   ============================================================================ */

"use strict";

const CONFIG = {

  /* La base d'Hugo, projet QuizzQG, hébergée en Belgique (europe-west1).
     Relevée le 12 août 2026 sur sa console Firebase. */
  base: "https://quizzqg-eca81-default-rtdb.europe-west1.firebasedatabase.app",

  /* Le temps laissé pour répondre, en secondes. */
  secondesParQuestion: 25,

  /* Combien de questions dans une partie. */
  questionsParPartie: 10,

  /* Au-delà de ce silence, le meneur considère qu'un joueur est parti.
     Mesuré entre joueurs, jamais contre l'horloge du téléphone : deux
     téléphones ne sont jamais à la même heure, et on s'est déjà fait avoir. */
  secondesAvantOubli: 45
};

if (typeof module !== "undefined" && module.exports) module.exports = { CONFIG };
