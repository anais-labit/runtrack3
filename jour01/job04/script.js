function bissextile(annee) {
  if ((annee % 4 == 0 && annee % 100 > 0) || annee % 400 == 0) {
    console.log("année bissextile");
    return true;
  } else {
    console.log("année non bissextile");
    return false;
  }
}

console.log(bissextile(2030));
