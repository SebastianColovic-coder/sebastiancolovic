# Site de Sebastian Colovic

## Où mettre les images
- `images/accueil/accueil.jpg` : photo d'ouverture de l'accueil (optionnelle)
- `images/serie-1/01.jpg`, `02.jpg`… : photos de la série 1
- `images/serie-2/01.jpg`, `02.jpg`… : photos de la série 2
- `images/portrait.jpg` : portrait pour la page À propos (optionnel)

Format conseillé : JPG, 1600 à 2000 px sur le grand côté, moins de 800 Ko.
Noms sans espaces ni accents. Majuscules/minuscules importantes (`01.jpg` ≠ `01.JPG`).
Les photos pas encore ajoutées sont simplement cachées.

## Ce qu'il faut modifier
- Textes et titres : ouvre les fichiers `.html` et remplace les textes d'exemple.
- Couleurs et largeur : en haut de `css/style.css` (bloc `:root`).
- Ajouter une série : copie `serie-2.html` en `serie-3.html`, puis ajoute le lien dans le menu des autres pages et une vignette dans `index.html`.

## Mettre en ligne (GitHub Pages)
Envoie tous ces fichiers à la racine du dépôt, puis Settings → Pages → branche `main`, dossier `/ (root)`.
