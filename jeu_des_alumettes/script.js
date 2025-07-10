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

//*********************************************************************************************************************************** */


//***************************2 joueurs ***************************/

// function getMatches() {
//     let promptNumber1 = prompt("Joueur : " + currentPlayer + ". " + "Combien d'alumettes souhaites-tu retirer ?")

//     if (Number(promptNumber1) >= 1 && Number(promptNumber1) <= 6){
//         if(currentPlayer == 1){
//         matches = matches - Number(promptNumber1)
//         alert("Il reste " + matches + " allumettes.")
        
//         // currentPlayer = (currentPlayer % totalPlayers) + 1;
//         gameMatches()
//         currentPlayer +=1
//         if (matches > 0){
//         getMatches()
//         }
//         }
//         else if (currentPlayer ==2){
//         matches = matches - Number(promptNumber1)
//         alert("Il reste " + matches + " allumettes.")
//         gameMatches()
//         currentPlayer -=1
//         if (matches > 0){
//         getMatches()
//         }
//         }
//     } else {
//         alert("Saisissez un chiffre adéquat entre 1 et 6")
//         alert("Il reste " + matches + " allumettes.")
//         getMatches()
//     }
// }
// function gameMatches () {
//     if (matches < 0) {
//         alert("Perdu !"  + "Les allumettes ne peuvent pas être en négatif. Joueur "+ currentPlayer + " a gagné !" )
//     } else if (matches === 0) {
//         alert("Félicitations joueur " + currentPlayer + " ! " + "Tu as gagné !")
//     }
// }

// getMatches()



//**********************************************MULTIPLAYER************************************************************************************* */


// let matches = 50 
// let currentPlayer = 1
// let totalPlayer = ""
// function multiplayer(){
//     totalPlayer = Number(prompt("Combien de joueur êtes vous ?"))
//     if (totalPlayer >=2){
//         alert("Nombre de joueurs : " + totalPlayer)
//     }
//     else {
//         alert("Veuillez donner un nombre adéquat, le nombre de joueur minimum est 2 !")
//         multiplayer()
//     }
// }
// multiplayer()

// function getMatches() {
//     for (let i=1; i<=totalPlayer; i++){
//         if(matches <= 0){
//             break
//         }
//         promptNumber1 = prompt("Joueur : " + i + ". " + "Combien d'alumettes souhaites-tu retirer ?")
//         if (Number(promptNumber1) >= 1 && Number(promptNumber1) <= 6){
//             matches = matches - Number(promptNumber1)
//             alert("Il reste " + matches + " allumettes.")
//             gameMatches(i)
//         }
//         else {
//             alert("Saisissez un chiffre adéquat entre 1 et 6")
//             alert("Il reste " + matches + " allumettes.")
//             i--
//         }
//     }

//     if(matches > 0){
//         getMatches()
//     }
// }

// function gameMatches (player) {
//     if (matches < 0) {
//         alert("Perdu !"  + "Les allumettes ne peuvent pas être en négatif. Joueur "+ player + " a gagné !" )
//     } else if (matches === 0) {
//         alert("Félicitations joueur " + player + " ! " + "Tu as gagné !")
//     }
// }

// getMatches()


//**********************************************DOM************************************************************************************* */


document.addEventListener("DOMContentLoaded", () => {
    const numberOfPlayer = document.getElementById("player");
    const whichPlayer = document.getElementById("whichPlayer");
    const fire = document.getElementById("fire");
    const feedBack = document.getElementById("feedBack");
    const feedBack1 = document.getElementById("feedBack1");
    const jeu = document.getElementById("Jeu");
    const startFire = document.getElementById("startFire");
    const inputPlayer = document.getElementById("inputPlayer");
    const ciaoAllumettes = document.getElementById("ciaoAllumettes");
    const setupGame = document.getElementById("setupGame");

    let matches = 50;
    let currentPlayer = 1;
    let totalPlayer = 0;

    // Cacher les éléments du jeu au départ
    jeu.style.display = "none";
    whichPlayer.style.display = "none";
    fire.style.display = "none";
    feedBack1.innerText = "Il y a un tas de 50 allumettes. Chacun à son tour, les joueurs ôtent entre 1 et 6 allumettes. Celui qui ôte la dernière gagne.";

    // Quand on clique sur "Burn" (bouton startFire)
    startFire.addEventListener("click", () => {
        totalPlayer = parseInt(inputPlayer.value);
        if (isNaN(totalPlayer) || totalPlayer < 2) {
            feedBack.innerText = "Veuillez entrer au moins 2 joueurs.";
            return;
        }

        matches = 50;
        currentPlayer = 1;

        setupGame.style.display = "none";
        numberOfPlayer.innerText = "Nombre de joueur : " + totalPlayer;
        numberOfPlayer.style.display = "block";
        jeu.style.display = "flex";
        whichPlayer.style.display = "block";
        whichPlayer.innerText = "Joueur : " + currentPlayer;
        fire.style.display = "inline-block";
        feedBack.innerText = "Il reste 50 allumettes.";
    });

    // Quand on clique sur le deuxième bouton "Burn"
    fire.addEventListener("click", () => {
        const value = parseInt(ciaoAllumettes.value);

        if (isNaN(value) || value < 1 || value > 6) {
            feedBack.innerText = "Choisissez un nombre entre 1 et 6 !";
            return;
        }

        if (value > matches) {
            feedBack.innerText = "Pas assez d’allumettes. Il en reste " + matches;
            return;
        }

        matches -= value;

        if (matches === 0) {
            feedBack.innerText = `🎉 Joueur ${currentPlayer} a gagné !`;
            fire.disabled = true;
            return;
        }

        currentPlayer = (currentPlayer % totalPlayer) + 1;
        feedBack.innerText = `Il reste ${matches} allumettes.`;
        whichPlayer.innerText = "Joueur : " + currentPlayer;
    });
});