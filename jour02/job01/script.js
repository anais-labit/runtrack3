document.addEventListener("DOMContentLoaded", () => {
  function citation() {
    const citation = document.querySelector("#citation").innerHTML;
    console.log(citation);
  }
  const bouton = document.querySelector("#bouton");
  bouton.addEventListener("click", () => {
    citation();
  });
});
