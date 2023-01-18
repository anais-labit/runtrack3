// document.addEventListener("DOMContentLoaded", () => {
function nbrPremier(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function sommeNombresPremiers(a, b) {
  if (nbrPremier(a) && nbrPremier(b)) {
    console.log(a + b);
  } else {
    console.log("Saissiez des nombres premiers");
  }
}
sommeNombresPremiers(2, 4);
sommeNombresPremiers(2, 5);
// });
