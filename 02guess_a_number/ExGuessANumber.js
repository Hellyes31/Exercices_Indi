// DEMANDER UN CHIFFRE ENTRE 0 ET 50 :


function askPlayer1(){
   return prompt("Donnez moi un nombre à faire deviner entre 0 et 50") 
}
let askedNumber = askPlayer1()


function askNumber(){
  return prompt("Devines le nombre entre 0 et 50")
}
let result = askNumber()
console.log(result)

// AFFICHER SI IL A BON OU NON

function didIWin(givenNumber){

  if (isNaN(givenNumber)) {
    alert("Veuillez entrer un nombre valide !");
    return false;
    }

  else if (givenNumber < askedNumber){
    alert("Plus Grand") 
    return  false
  }
  else if (givenNumber > askedNumber){
    alert("Plus Petit") 
    return  false
  }
  else {
    alert("Bravo ! Vous avez deviné le nombre") 
    return  true
}
}
// alert(didIWin(result))


// RECOMMENCER JUSQUA CE QUE CA SOIT BON 

function gamePlay() {
  while (didIWin(result) == false){
    alert("RECOMMEEEEEEENNNNNCEEEEEE!!!")
    result = askNumber()
  }
}
gamePlay()
