// On décrit le jeu des allumettes : au départ, il y a un tas de 50 allumettes, (ou tout autre objet : cailloux, jetons, . . .).
// Chacun à son tour, les deux joueurs ôtent obligatoirement entre 1 et 6 allumettes. Celui qui ôte la dernière allumette gagne.

//*******************************ETAPE 1**************************  */
// Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste.
// Pour rappel, une nom de fonction doit décrire clairement ce que fait celle-ci.

let matches = 50


function getMatches() {
    let promptNumber = prompt("Combien d'alumettes souhaites-tu retirer ?")
    
    if (Number(promptNumber) >= 1 && Number(promptNumber) <= 6){
        matches = matches - Number(promptNumber)
        alert("Il reste " + matches + " allumettes.")
        gameMatches()
    } else {
        alert("Saisissez un chiffre adéquat entre 1 et 6")
        alert("Il reste " + matches + " allumettes.")
        getMatches()
    }
}

function gameMatches () {
    if (matches < 0) {
        alert("Perdu ! Les allumettes ne peuvent pas être en négatif.")
    } else if (matches === 0) {
        alert("Félicitations ! Tu as gagné !")
    } else {
        getMatches()
    }
}

gameMatches() // ✅ Lancement du jeu


