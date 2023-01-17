// evenement (ecouteur) qui permet de lire l'intégralité du document (ici, index.php) avant de lancer l'écution du code
document.addEventListener("DOMContentLoaded", () => {
  // variable qui au clic fait le lien avec l'id du bouton
  const bouton = document.querySelector("#bouton");
  // variable qui récupère l'id du compteur dans le p
  let compteur = document.getElementById("compteur");

  // création de la fonction qui comptabilise les clics
  function addone() {
    // et incrementation du compteur déclaré en HTML
    compteur.innerHTML++;
  }

  // ecouteur qui au clic exécute la fonction
  bouton.addEventListener("click", () => {
    addone();
  });
});
