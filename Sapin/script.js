//        +
//       /|\
//      /*|*\
//     /**|**\
//     /*o|**\
//    /***|***\
//   /**+*|*o**\
//   /****|****\
//  /***o*|**+**\
// /*o*+**|***o**\
//       ###
//       ###
//       ###

//                                                  ETAPE 1 :

// Pour cette première étape, nous allons commencer par la pointe du sapin.

// Notre but est d'écrire une fonction afficherPointeSapin() qui prendra en paramètre la hauteur de ce triangle, telle que:

//Etape 1.1 :  Une ligne d’étoiles

// function afficherEtoiles(n) {
//     for (let i = 0; i <= n; i++){
//         console.log(`${"*"*n}`)
//     }
// }

// afficherEtoiles(2)
// afficherEtoiles(5)

// //Etape 1.2 : Carré d’étoiles

// function afficherRectangle(hauteur, largeur) {
//   // pour chaque "étage" de la hauteur
//   //    appeler printEtoile
// }

// afficherRectangle(5, 5)

//Etape 1 fini :

// function afficherPointeSapin(hauteur, backspace) {

//   console.log(`${" ".repeat(backspace + 1)}+`);
//   for (let i = 0; i <= hauteur - 1; i++) {
//     console.log(`${" ".repeat(backspace - i)}/${"*".repeat(i)}|${"*".repeat(i)}\\`);
//   }
// }

// afficherPointeSapin(5,10)
// afficherPointeSapin(10,10)

// function afficherPointeSapin(etage, etageHauteur, backspace) {
//   let dernierI = 0;
//   console.log(`${" ".repeat(backspace + 1)}+`);
//   for (let y = 1; y <= etage; y++) {
//     for (let i = 0; i <= etageHauteur - 1; i++) {
//       if (y === 1) {
//         console.log(
//           `${" ".repeat(backspace - i)}/${"*".repeat(i)}|${"*".repeat(i)}\\`
//         );
//       } else {
//         console.log(
//           `${" ".repeat(backspace - dernierI)}/${"*".repeat(
//             dernierI
//           )}|${"*".repeat(dernierI)}\\`
//         );
//       }

//       if (i == etageHauteur - 1) {
//         dernierI += i;
//       }
//     }
//   }
// }

// afficherPointeSapin(3, 3, 10);
function randomDecoration(){
    random = Math.random()

    if (random < 0.7){
        return "*"
    } else if (random < 0.85){
        return "+"
    } else {
        return "o"
    }

}
console.log(randomDecoration())

function afficherPointeSapin(etage, etageHauteur, backspace) {
  let tronc = 3;
  let dernierI = 0;
  console.log(`${" ".repeat(backspace + 1)}+`);

  for (let y = 1; y <= etage; y++) {
    for (let i = 0; i <= etageHauteur - 1; i++) {
      let valeurI = dernierI + i;

      console.log(
        `${" ".repeat(backspace - valeurI)}/${"*".repeat(valeurI)}|${"*".repeat(
          valeurI
        )}\\`
      );
    }

    dernierI += etageHauteur - 1;
  }
  for (let t = 1; t <= tronc; t++) {
    console.log(`${" ".repeat(backspace)}###`);
  }
}
afficherPointeSapin(5, 3, 10);
