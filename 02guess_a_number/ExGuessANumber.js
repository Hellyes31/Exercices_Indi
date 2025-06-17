function askNumber(){
  return prompt("Donnez moi un nombre")
}
let result = askNumber()
console.log(result)


function didIWin(givenNumber){
  if (givenNumber < 22){
    alert("Plus Grand") 
    return  false
  }
  else if (givenNumber > 22){
    alert("Plus Petit") 
    return  false
  }
  else {
    alert("Bravo ! Vous avez deviné le nombre") 
    return  true
}
}
// alert(didIWin(result))


// ETAPE 3 :

function gamePlay() {
  while (didIWin(result) == false){
    alert("RECOMMEEEEEEENNNNNCEEEEEE!!!")
    result = askNumber()
  }
}
gamePlay()

















// function gamePlay() {
//   let hasWon = false;

//   while (!hasWon) {
//     let userInput = prompt("Devinez le nombre entre 1 et 100 :");
//     let guess = parseInt(userInput);

//     if (isNaN(guess)) {
//       alert("Veuillez entrer un nombre valide !");
//       continue;
//     }

//     hasWon = didIWin(guess);
//   }
// }
// gamePlay()
// Désormais la fonction didIWin devra retourner true si l’utilisateur a trouvé le chiffre, false sinon.
// Dans la fonction gamePlay, si didIWin a retourné true, on arrete le jeu. En revanche, si elle a retourné false, on redemande un chiffre à l’utilisateur.

