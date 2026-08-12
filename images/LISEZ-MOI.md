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

Le Q de la page d'accueil est **un Q dessiné pour ce site** : un anneau rouge,
une queue dorée. Ce n'est **pas** le logo de la commune de Quaregnon.

Un logo communal n'est presque jamais libre de droits, et un site public qui
l'affiche a l'air de parler au nom de la commune. Ce qu'on a pu établir de ses
couleurs et de sa forme est décrit dans [`CREDITS.md`](CREDITS.md) — une
description, pas une copie. Pour utiliser le vrai, un mot à l'administration
communale règle la question dans un sens ou dans l'autre.

---

## Si tu ajoutes tes propres photos

Ce sont les meilleures, et il n'y a aucune question de droits à se poser.
Dépose-les dans ce dossier et inscris-les dans `credits.js` : le contrôle
`outil-verif-images.js` refuse toute photo qui traîne sans crédit, et c'est
exactement ce qu'on lui demande.

Il faudra ajouter ta mention — « Photo d'Hugo Hismans », par exemple — à la
liste des licences acceptées, en haut de `outil-verif-images.js`. C'est deux
mots à écrire, et ça garde la liste honnête.
