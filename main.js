// Cache les photos qui n'existent pas encore (pour ne pas voir d'images cassées)
document.querySelectorAll('figure img').forEach(function (img) {
  img.addEventListener('error', function () {
    var fig = img.closest('figure');
    if (fig) fig.classList.add('vide');
  });
  // Cas où l'erreur s'est produite avant l'exécution du script
  if (img.complete && img.naturalWidth === 0) {
    var fig = img.closest('figure');
    if (fig) fig.classList.add('vide');
  }
});
