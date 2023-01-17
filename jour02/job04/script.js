// evenement (ecouteur) qui permet de lire l'intégralité du document (ici, index.php) avant de lancer l'écution du code
document.addEventListener("DOMContentLoaded", () => {
  let textarea = document.getElementById("keylogger");
  // console.log(textarea);

  document.addEventListener("keydown", (event) => {
    let key = event.key;
    textarea.value = key;
  })
  ;
});
