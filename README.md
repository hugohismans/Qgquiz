# Le Quiz de Quaregnon

Un quiz sur **Quaregnon** — la cité de la Charte et du Renard —, le Borinage, le
borain et la Belgique. Seul ou à plusieurs, chacun sur son téléphone.

C'est un tas de fichiers statiques, sans rien à installer et sans aucune
bibliothèque extérieure. Ouvre `index.html` et ça joue.

---

## Ce qu'il y a dedans

**Trois niveaux**, parce que le même quiz doit servir à quelqu'un qui n'a jamais
mis les pieds dans le Hainaut et à quelqu'un qui a grandi rue du Coron :

- **Touriste** — on débarque du train à Mons.
- **Borain** — on est du coin, et ça se sent.
- **Quaregnonnais pur jus** — on a un terril dans le jardin.

**Quatre thèmes** qu'on allume et qu'on éteint : Quaregnon, le Borinage, le
borain, la Belgique. Le tirage répartit exprès les questions entre les thèmes
allumés — sans ça, Quaregnon, qui est le mieux fourni, prenait toute la place.

**264 questions**, et chacune porte sa source. Quand la réponse tombe, le lien
vers l'endroit où elle a été lue s'affiche, et on peut aller vérifier. On choisit
la longueur de la partie : 5, 10, 15 ou 25 questions.

**Le multijoueur.** Un meneur ouvre un salon, les autres le rejoignent avec un
code de quatre lettres. Tout le monde voit la même question, dans le même
ordre, et le classement tombe identique sur tous les téléphones.

**Le son**, entièrement fabriqué par le navigateur : pas un fichier audio à
télécharger. Une nappe grave qui respire, des clochettes qui tombent quand
elles veulent, et de petits sons de réponse. Il n'y a **aucun tic-tac de compte
à rebours** — c'était la première idée, et c'est la définition même
d'oppressant. Bouton en haut à droite pour couper.

**Sept photos** de Quaregnon et du Borinage, prises sur Wikimedia Commons, avec
leurs auteurs et leurs licences affichés en bas de page.

---

## Mettre en ligne

Le dépôt est prêt pour GitHub Pages, tel quel. Dans les réglages du dépôt :

> **Settings** → **Pages** → *Source* : **Deploy from a branch** →
> branche `main`, dossier `/ (root)` → **Save**

Une minute plus tard, le site est à
**https://hugohismans.github.io/Qgquiz/**

Le multijoueur ne marche qu'en ligne (il lui faut une vraie adresse) ; le solo
marche partout, y compris en ouvrant le fichier à la main.

---

## Le multijoueur

Il parle à une base Firebase Realtime Database **en HTTP tout simple** :
requêtes `PUT` et `PATCH` pour écrire, `EventSource` pour suivre les
changements en direct. Aucune bibliothèque de Google n'est chargée — ce qui
garde le site sans dépendance, et rend la moitié du code vérifiable sans
navigateur.

La base d'Hugo (projet **QuizzQG**, hébergée en Belgique) est déjà inscrite
dans `config.js`. Il n'y a rien à faire.

**Une seule chose à savoir pour plus tard :** les règles sont en « mode test »,
et Google les referme automatiquement au bout de trente jours — soit vers le
**11 septembre 2026**. Le jour où le multijoueur se met à répondre « La base a
répondu 401 », c'est ça. Les règles à coller à la place sont dans
[`REGLES-FIREBASE.md`](REGLES-FIREBASE.md), et l'opération prend deux minutes.

---

## Ajouter ou corriger une question

Tout est dans [`questions.js`](questions.js), et le mode d'emploi est écrit en
haut du fichier :

```js
{
  id: "un-nom-court-unique",
  theme: "borain",            // ou quaregnon, borinage, belgique
  niveau: 3,                  // 1 touriste, 2 borain, 3 pur jus
  q: "Ta question ?",
  r: ["la bonne", "une fausse", "une fausse", "une fausse"],
  bonne: 0,                   // la place de la bonne réponse
  pourquoi: "Ce qu'on apprend quand la réponse tombe.",
  sources: ["wp-borain"]      // une clé de sources.js
},
```

Les réponses sont mélangées à chaque partie : mets la bonne en premier si ça
t'arrange. Puis `node verifier.js`.

### Soixante et une questions attendent une oreille

Les questions sur le borain sont tirées de dictionnaires et de lexiques — celui
de Georges Larcin, les travaux de Pierre Ruelle, les relevés de l'Académie
royale de langue et de littérature françaises de Belgique — jamais de mémoire.
Mais elles n'ont jamais été entendues dites par quelqu'un dont c'est la langue.
`node verifier.js` les liste à chaque passage. Si l'une sonne faux, c'est elle
qui a tort.

Et surtout : **les mots entendus chez les grands-parents ne sont dans aucun
livre**, et ce sont les meilleures questions du site.

---

## Vérifier

```bash
node verifier.js
```

**5 892 contrôles**, six outils, sans navigateur pour l'essentiel. Ils couvrent
la banque de questions, le tirage, le barème, le classement, le miroir du
multijoueur, l'écriture des nombres, les réglages du son, les licences des
photos, et la mise en page telle qu'on la voit.

Chacun a été prouvé capable d'échouer : les trente-six comportements
surveillés ont été cassés volontairement, un par un, et les trente-six ont été
attrapés. Un contrôle qui n'échoue jamais ne teste rien.

Trois d'entre eux valent d'être expliqués :

- **`outil-verif-sortie.js`** ouvre un vrai navigateur, branche un analyseur sur
  la sortie audio, joue les sons et **mesure l'amplitude qui passe**. Le plafond
  par son ne borne pas leur somme : le son de fin sort à 0,314 alors que chacune
  de ses notes est réglée à 0,12, parce que quatre notes se recouvrent. Sans
  cette mesure, on ne pouvait que l'espérer.
- **`outil-verif-images.js`** vérifie les licences **dans les deux sens**. Que
  chaque photo créditée existe, oui — mais surtout que **chaque photo présente
  est créditée**. C'est le second sens qu'on oublie : on dépose une image « juste
  pour voir », on la garde, et six mois plus tard personne ne sait plus d'où
  elle vient.
- **`outil-verif-page.js`** mesure la page à 320, 390 et 1200 pixels, avec la
  photo en place. Il est né d'un défaut que le code n'avait pas introduit : la
  règle CSS ordinaire « un bouton désactivé s'estompe » rendait les quatre
  réponses translucides au moment précis où on les relit. Invisible pendant
  toute la construction, parce que le fond était un dégradé sombre. Le jour où
  la façade de l'hôtel de ville est passée derrière, elle a traversé les
  réponses. **Le décor a révélé un défaut qui dormait là depuis le début.**

### La partie à deux

```bash
npm install playwright        # une fois
node essai-partie-a-deux.js
```

Ouvre de **vrais navigateurs** et leur fait jouer des parties entières : d'abord
à deux — le salon s'ouvre, l'invité rejoint, les deux voient la même question
dans le même ordre, le meneur marque, l'invité se trompe, le podium tombe pareil
des deux côtés, et le joueur qui s'en va disparaît de la liste — puis **le
meneur tout seul**, qui est le pire cas.

Il vérifie surtout une **égalité** : ce que le verdict annonce et ce que le
tableau totalise doivent être le même nombre. C'est ce contrôle-là qui manquait
le 12 août, quand Hugo a vu « Juste — 868 points » pendant que son total sautait
de bien plus. Les points étaient comptés deux fois : le meneur réagissait à sa
propre écriture, dans l'instant où l'état de la partie n'avait pas encore
changé. Les anciens contrôles demandaient que le meneur ait « des points » — un
score doublé passait sans broncher.

**Ce que rien de tout ça ne couvre**, et il vaut mieux le dire : la partie à
deux tourne contre une **imitation** de Firebase, écrite d'après la même lecture
de la documentation que le reste du code. Elle prouve que le jeu est juste — pas
que Google se comporte comme on le croit. Seule une vraie partie sur la vraie
base le dira.

Et ce qu'aucun chiffre ne dira jamais : si le son est agréable, si les photos
sont les bonnes, si les questions font sourire. Ça, c'est l'œil et l'oreille
d'Hugo.

---

## Les fichiers

| fichier | ce qu'il tient |
|---|---|
| `index.html` | la page, et le décor dessiné derrière la photo |
| `style.css` | les couleurs du Borinage |
| `questions.js` | **les questions** — c'est là qu'on écrit |
| `sources.js` | d'où vient chaque réponse |
| `quiz.js` | le jeu : tirage, barème, écrans |
| `salon.js` | le multijoueur, en HTTP nu |
| `son.js` | la nappe, les clochettes, les sons de réponse |
| `config.js` | la base Firebase et les réglages |
| `images/` | les photos, leurs auteurs, leurs licences |
| `verifier.js` | tout vérifier d'un coup |
| `outil-verif-*.js` | les six outils de contrôle |
| `essai-partie-a-deux.js` | une partie complète, deux navigateurs |
| `REGLES-FIREBASE.md` | les règles à coller quand le mode test expire |

---

## Deux ou trois idées, si on continue

- Un **mode « ducasse »** : dix questions d'affilée, sans pause, pour faire un
  score et le comparer.
- Des **questions en borain**, où c'est l'énoncé lui-même qui est dans la langue.
- Une **question à photo** : on montre un coin de Quaregnon, il faut le
  reconnaître. Il y a déjà sept photos dans le dépôt pour ça.
- Un **classement qui dure**, gardé d'une soirée à l'autre.
- **Le vrai Q de la commune.** Celui du site est dessiné à la main d'après la
  forme du logo de Quaregnon — le vert sage, l'ovale penché, la longue queue qui
  file au loin. Ce n'est pas le logo officiel, qui n'est pas libre de droits.
  Déposer le fichier dans `images/logo.png` suffit à le mettre à la place ; ce
  qui reste à régler, c'est l'autorisation de la commune. Voir
  [`images/LISEZ-MOI.md`](images/LISEZ-MOI.md).
