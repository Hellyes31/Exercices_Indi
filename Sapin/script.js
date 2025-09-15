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

function afficherPointeSapin(hauteur, backspace) {

  console.log(`${" ".repeat(backspace + 1)}+`);
  for (let i = 0; i <= hauteur - 1; i++) {
    console.log(`${" ".repeat(backspace - i)}/${"*".repeat(i)}|${"*".repeat(i)}\\`);
  }
}

afficherPointeSapin(5,10)


