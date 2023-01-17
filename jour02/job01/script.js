// evenement qui permet de lire l'intégralité du doucment (ici, index.php) avant de lancer l'écution du code
document.addEventListener("DOMContentLoaded", () => {
  // création de la fonction citation
  function citation() {
    // de la variable citation, qui grâce à l'id fait le lien avec le contenu de l'article
    const citation = document.querySelector("#citation").innerHTML;
    // lecture du contenu dans la console
    console.log(citation);
  }
  // variable qui au clic fait le lien avec l'id du bouton
  const bouton = document.querySelector("#bouton");
  // evenement au clic qui exécute la fonction
  bouton.addEventListener("click", () => {
    citation();
  });
});
