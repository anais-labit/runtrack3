// evenement (ecouteur) qui permet de lire l'intégralité du document (ici, index.php) avant de lancer l'écution du code
document.addEventListener("DOMContentLoaded", () => {

  
  // variable qui au clic fait le lien avec l'id du bouton
  const bouton = document.querySelector("#bouton");
  // variable qui récupère le contenu de l'article (=citation)
  const article = document.querySelector("#citation");
  // mise par défaut de l'état caché au chargement de la page
  article.style.display = "none";


  // création de la fonction afficher/cacher le contenu
  function showHide() {
    // si le contenu est masqué au chargement de la page
    if (article.style.display === "none") {
      // l'afficher lorsque l'on appelle la fonction (display qd clic sur le bouton)
      article.style.display = "block";
      // sinon le laisser caché
    } else {
      article.style.display = "none";
    }
  }

  // ecouteur qui au clic exécute la fonction d'affichage du texte (qui par défaut est masqué)
  bouton.addEventListener("click", () => {
    showHide();
  });

  
});
