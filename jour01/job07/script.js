function jourtravaille(p1, p2, p3) {
  let date = new Date(p1, p2, p3); //  (le mois est à l'index 0)
  let year = date.getFullYear();
  let month = date.getMonth(); // (January gives 0)
  let nDate = date.getDate();
  let day = date.getDay();
  let jf = [
    "1/1/2022",
    "18/4/2022",
    "1/5/2022",
    "26/5/2022",
    "6/6/2022",
    "14/7/2022",
    "15/8/2022",
    "1/11/2022",
    "11/11/2022",
    "25/12/2022",
  ];

  let feries = nDate + "/" + month + "/" + year;

  if (jf.includes(feries)) {
    console.log(
      "Le " + nDate + "/" + month + "/" + year + " est un jour férié"
    );
  } else if (day == 6 || day == 0) {
    console.log(
      "Non, le" + nDate + "/" + month + "/" + year + " tombe un week-end"
    );
  } else {
    "Oui, le" + nDate + "/" + month + "/" + " est un jour travaillé";
  }
}

jourtravaille();
// exemple format jourtravaille(2022, 01, 01);
