// DEMANDER UN CHIFFRE ENTRE 0 ET 50 :
const IdH1 = document.getElementById("joker")

function askPlayer1(){
   return parseInt(prompt("Donnez moi un nombre à faire deviner entre 0 et 50")) 
}
let askedNumber = askPlayer1()


function askNumber(){
    return parseInt(document.getElementById("game").value);
}

let count = 1
let min = 0
let max = 50
const minDisplay = document.getElementById("minus")
const maxDisplay = document.getElementById("max")

function updateRangeDisplay(){
  minDisplay.innerText = min
  maxDisplay.innerText = max
}


function didIWin(givenNumber){
    givenNumber = parseInt(givenNumber);
    if (isNaN(givenNumber)) {
        IdH1.innerText = "Veuillez entrer un nombre valide !";
        return false;
    }

    if (givenNumber < askedNumber){
        min = givenNumber
        IdH1.innerText = "Plus grand ! Nombre de tentative : " + count++
        updateRangeDisplay()
        return false
    }

    if (givenNumber > askedNumber){
        max = givenNumber
        IdH1.innerText = "Plus petit ! Nombre de tentative : " + count++
        updateRangeDisplay()
        return false
    }
  else {
    IdH1.innerText = "Bravo ! Vous avez deviné le nombre ! Nombres de tentatives : " + count
    return  true
}
}
// alert(didIWin(result))


// RECOMMENCER JUSQUA CE QUE CA SOIT BON 

function gamePlay() {
    let result = askNumber()
    didIWin(result)
}


const guess = document.getElementById("guess")

// game.innerHTML = askNumber()

guess.addEventListener('click', () => {
    gamePlay()
})