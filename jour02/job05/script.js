// evenement (ecouteur) qui permet de lire l'intégralité du document (ici, index.php) avant de lancer l'écution du code
document.addEventListener("DOMContentLoaded", () => {
  // detecte le scroll sur la page
  window.addEventListener("scroll", () => {
    // variable hauteur qui correspond à la hauteur du doc - la hauteur de la fenetre
    let height = document.documentElement.scrollHeight - window.innerHeight;
    // position qui correspond au scroll en y
    let position = window.scrollY;
    // largeur qui correspond à la largeur du document client
    let width = document.documentElement.clientWidth;

    // barre correspond à la (hauteur du doc / par l'emplacement du scroll) * la largeur du doc
    let barre = (position / height) * width;

    //On récupere l'id #barre et on lui applique une width en css qui est égale a barre concaténée avec "pixels"
    document.getElementById("barre").style.width = barre + "px";
  });
});
