function randomDecoration() {
  random = Math.random();

  if (random < 0.7) {
    return "*";
  } else if (random < 0.85) {
    return "+";
  } else {
    return "o";
  }
}
console.log(randomDecoration());

function afficherPointeSapin(etage, etageHauteur, backspace) {
  let tronc = 3;
  let dernierI = 0;
  console.log(`${" ".repeat(backspace + 1)}+`);

  for (let y = 1; y <= etage; y++) {
    for (let i = 0; i <= etageHauteur - 1; i++) {
      let valeurI = dernierI + i;

      let right = "";
      let left = "";
      for (let r = 0; r < valeurI; r++) right += randomDecoration();
      for (let l = 0; l < valeurI; l++) left += randomDecoration();
      console.log(
        `${" ".repeat(backspace - valeurI)}/${left}|${right}\\`
      );
    }

    dernierI += etageHauteur - 1;
  }
  for (let t = 1; t <= tronc; t++) {
    console.log(`${" ".repeat(backspace)}###`);
  }
}
afficherPointeSapin(5, 3, 10);
