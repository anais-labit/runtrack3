// evenement (ecouteur) qui permet de lire l'intégralité du document (ici, index.php) avant de lancer l'écution du code
document.addEventListener("DOMContentLoaded", () => {
  // variable qui au clic fait le lien avec l'id du bouton
  const button = document.querySelector("#button");
  
  // ecouteur qui au clic exécute la fonction
  button.addEventListener("click", () => {

    // récupérer le contenu du ficher expression.txt
    fetch("./expression.txt")
        // le transformer en texte
      .then((response) => response.text())
      // injecter le resulatt de la promesse dans le p identifié par son id 
      .then(body => document.querySelector("#p").append(body));
    //   // l'insérer dans le p du HTML
  });
});
