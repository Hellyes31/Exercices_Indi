// DEMANDER UN CHIFFRE ENTRE 0 ET 50 :
const IdH1 = document.getElementById("joker")
// const gifTrain = document.createElement("img")
// image.src ="https://tenor.com/fr/view/train-bamako-kinshasa-gitan-foraine-gif-23899105.gif"


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
        IdH1.innerText = "🎡C'est pas un nombre mon copain on me l'a fait pas à moi🎡";
        return false;
    }

    if (givenNumber < askedNumber){
        min = givenNumber

        IdH1.innerText = "🎡C'est mou c'est mou... 🎡" + count++ + " 0€" 

        updateRangeDisplay()
        return false
    }

    if (givenNumber > askedNumber){
        max = givenNumber
        IdH1.innerText = "🎡Wouaaaah pas trop loin mon grand!🎡"  + count++ +  " 0€"
        updateRangeDisplay()
        return false
    }
  else {
    IdH1.innerText = "🎡YEEEEAH BIEN JOUE MON COPAIN🎡" + count + " 0€"
    const button = document.getElementById("guess")

    button.addEventListener("click", () =>{
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
});
    })
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

