# Les images

Sept photos, toutes libres de droits, prises sur **Wikimedia Commons**. Six sont
prises à Quaregnon même ; la septième montre le Grand-Hornu, qui est à Hornu —
et `credits.js` le dit, parce qu'un site sur Quaregnon ne doit pas faire passer
la commune d'à côté pour la sienne.

Le détail complet — auteur, licence, lien vers la page d'origine — est dans
[`CREDITS.md`](CREDITS.md), et le site l'affiche en bas de page. Ce n'est pas
une politesse : c'est la condition à laquelle on a le droit de les publier.

---

## Le fond

**`fond.jpg`** est l'hôtel de ville de Quaregnon (1937-1938) et son beffroi,
photographié à la lumière du soir. C'est ce nom-là que `quiz.js` cherche : si le
fichier disparaît ou change de nom, le site retombe tout seul sur le décor
dessiné, sans rien casser.

Il a été choisi parmi les sept parce que sa brique chaude et son ciel de fin de
journée tombent exactement sur la palette du site. Les autres candidats — les
vues depuis le terril de la Flache — sont de vraies photos de Quaregnon, mais
prises par temps couvert : sous le voile sombre du site, leur vert virait à la
vase.

**Pour en changer :** remplace `fond.jpg`, ajoute sa ligne dans `credits.js`,
puis lance `node outil-verif-images.js`. Il refusera une photo sans crédit, une
licence non commerciale, ou un fichier trop lourd.

Ce qui marche bien : une vue large, plutôt sombre ou au crépuscule, au moins
1600 pixels de large, sous 400 ko. Le site est noir et assombrit ce qu'on met
derrière ; une photo en plein soleil y perd toutes ses couleurs. Et le quiz se
joue sur un téléphone, souvent en 4G, souvent à table.

---

## Le décor dessiné

Il n'a pas disparu : il est **toujours là, derrière la photo**, atténué. Terrils
à sommet tronqué, chevalement, file des corons, quelques fenêtres allumées. Sans
photo du tout, c'est lui qu'on voit — le site n'a jamais de trou.

---

## Le Q

Hugo a montré le vrai logo de Quaregnon le 12 août 2026 : un **Q vert sage**,
un ovale penché tracé au pinceau, dont la queue part de l'intérieur, croise le
bas de l'ovale et file très loin vers la droite, débordant du cadre carré qui
l'entoure.

Le premier Q de ce site était **rouge, avec une queue courte** — c'est-à-dire
faux sur les deux points qu'un Quaregnonnais reconnaît en une seconde. Il est
refait : même vert (`#9fc493`), même ovale penché, même longue queue.

Mais c'est **un Q dessiné ici, à la main, d'après cette forme**. Ce n'est pas le
logo de la commune, et il ne prétend pas l'être. Un logo communal n'est presque
jamais libre de droits, et un site public qui l'affiche a l'air de parler au nom
de la commune.

**Pour mettre le vrai :** dépose le fichier officiel dans `images/logo.png`. Le
site le détecte au chargement et le met à la place du dessin, tout seul, sans
qu'on touche à rien. Tant qu'il n'est pas là, c'est le dessin qui s'affiche et
rien ne casse.

Reste la question des droits, qu'un fichier déposé ne règle pas : un mot à
l'administration communale la tranche dans un sens ou dans l'autre. Ça se
demande, et ça s'obtient souvent.

---

## Si tu ajoutes tes propres photos

Ce sont les meilleures, et il n'y a aucune question de droits à se poser.
Dépose-les dans ce dossier et inscris-les dans `credits.js` : le contrôle
`outil-verif-images.js` refuse toute photo qui traîne sans crédit, et c'est
exactement ce qu'on lui demande.

Il faudra ajouter ta mention — « Photo d'Hugo Hismans », par exemple — à la
liste des licences acceptées, en haut de `outil-verif-images.js`. C'est deux
mots à écrire, et ça garde la liste honnête.
