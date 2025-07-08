// On décrit le jeu des allumettes : au départ, il y a un tas de 50 allumettes, (ou tout autre objet : cailloux, jetons, . . .).
// Chacun à son tour, les deux joueurs ôtent obligatoirement entre 1 et 6 allumettes. Celui qui ôte la dernière allumette gagne.

//*******************************ETAPE 1**************************  */
// Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste.
// Pour rappel, une nom de fonction doit décrire clairement ce que fait celle-ci.

// function getMatches1() {
//     let promptNumber2 = prompt("Combien d'alumettes souhaites-tu retirer ?")

//     if (Number(promptNumber2) >= 1 && Number(promptNumber2) <= 6){
//         if(currentPlayer == 2){
//         matches = matches - Number(promptNumber2)
//         alert("Il reste " + matches + " allumettes.")
//         currentPlayer -=1
//         gameMatches()
//         }
//     } else {
//         alert("Saisissez un chiffre adéquat entre 1 et 6")
//         alert("Il reste " + matches + " allumettes.")
//         getMatches1()
//     }
// }


let matches = 50
let currentPlayer = 1
let loser = currentPlayer === 1 ? 2 : 1
function getMatches() {
    let promptNumber1 = prompt("Joueur : " + currentPlayer + ". " + "Combien d'alumettes souhaites-tu retirer ?")

    if (Number(promptNumber1) >= 1 && Number(promptNumber1) <= 6){
        if(currentPlayer == 1){
        matches = matches - Number(promptNumber1)
        alert("Il reste " + matches + " allumettes.")
        currentPlayer += 1
        gameMatches()
        }
        else if (currentPlayer ==2){
        matches = matches - Number(promptNumber1)
        alert("Il reste " + matches + " allumettes.")
        currentPlayer -=1
        gameMatches()
        }
    } else {
        alert("Saisissez un chiffre adéquat entre 1 et 6")
        alert("Il reste " + matches + " allumettes.")
        getMatches()
    }
}

function gameMatches () {
    if (matches < 0) {
        alert("Perdu !"  + "Les allumettes ne peuvent pas être en négatif. Joueur "+ currentPlayer + " a gagné !" )
    } else if (matches === 0) {
        alert("Félicitations joueur " + loser + " ! " + "Tu as gagné !")
    } else {
        getMatches()
    }
}

gameMatches() // ✅ Lancement du jeu




