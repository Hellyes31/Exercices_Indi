//*********************Etape.1*********************
// Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide. Pour qu'une date soit valide,
// il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.

// Tout au long de l’exercice, on supposera des années supérieures à 999 et inférieures 9999 - autrement dit, l’année sera systématiquement représentée sur 4 caractères.

// isValidDate("03/04/2001") // true
// isValidDate("03/14/2001") // false car 14 n'est pas un mois valide

// Vous aurez probablement besoin de créer une autre fonction maxDaysInMonth pour vous assurer que le nombre de jours par mois est valide
//(ex: le 31/11 n’est pas valide, le mois de novembre ne contient que 30 jours)

let numberDays = 11
let numberMonth = 2
let numberYears = 2011


//Nombre de jour exact dans les mois
function maxDaysInMonth(){
    if(numberMonth === 1 || numberMonth === 3  || numberMonth === 5  || numberMonth === 7  || numberMonth === 8  || numberMonth === 10  || numberMonth === 12 ){
        return 31
    }
    else if(numberMonth === 2){
        //Pour les années bissextiles = si l'année est divisable par 4 et pas par 100 ou divisable par 400 alors c'est une année bissextile
        if ((numberYears % 4 === 0 && numberYears % 100 !== 0) || (numberYears % 400 === 0)) {
            console.log("Année Bissextile")
            return 29
        }
        else {
            return 28
        }
    }
    else{
        return 30
    }
}


function isValidDays(days){

    const maxDays = maxDaysInMonth(numberMonth)
    if(days >= 1 && days <=9){
        days = "0"+ days
        console.log("Le nombre de jour est correct : " + days)
        return { isValid: true, formatted: days }
    }
    else if (days >= 10 && days <= maxDays){
        console.log("Le nombre de jour est correct : " + days)
        return { isValid: true, formatted: days }
    }
    else{
        console.log("Le nombre de jour est incorrect")
        return {isValid: false}
    }
}

//Savoir si la date "mois" est bien valide et la retourne pour l'afficher dans isValidDate
function isValidMonth(month){
    if(month >= 1 && month <=9){
        month = "0"+ month
        console.log("Le nombre de mois est correct : " + month)
        return { isValid: true, formatted: month }
    }
    else if (month >= 10 && month <= 12){
        console.log("Le nombre de mois est correct : " + month)
        return { isValid: true, formatted: month }
    }
    else{
        console.log("Le nombre de mois est incorrect")
        return {isValid: false}
    }
}

// mounth(numberMounth)


//Savoir si la date "année" est bien valide et la retourne pour l'afficher dans isValidDate
function isValidYears(years){
    if(years > 999 && years <= 9999){
        console.log("Le nombre d'année est correct : " + years)
        return { isValid: true, formatted: years }
    }
    else{
        console.log("Le nombre d'année est incorrect : " + years)
        return {isValid: false}
    }
}

// years(numberYears)

function isValidDate(){
    const d = isValidDays(numberDays)
    const m = isValidMonth(numberMonth)
    const y = isValidYears(numberYears)
    if(d.isValid && m.isValid && y.isValid){
        console.log(`${d.formatted}/${m.formatted}/${y.formatted}`)
        return (`${d.formatted}${m.formatted}${y.formatted}`)
    }
    else{
        console.log("La date est invalide")
    }
}



// console.log(isValidDate())

//*********************Etape.1*********************

// Créer une fonction isPalindrome qui prend une date en string en paramètre et retourne un booléen qui indique si la date est un palindrome. Si la date est invalide, retourner false.

// Exemple de date palindrome: 11/02/2011. Les caractères / ne sont pas pris en compte.

// isPalindrome("11/02/2011") // true
// isPalindrome("03/04/2001") // false

function isPalindrome(date){
    if (!date || typeof date !== "string") {
        return "Non";
    }

    // Retire tous les caractères non numériques si besoin (ex: "/" ou "-")
    let cleanDate = date.replace(/\D/g, "");

    // .split transforme la chaine en tableau .reverse inverse le tableau le premier en dernier ect et le .join retransforme, colle les eléments en strings
    let reversed = cleanDate.split('').reverse().join('');

    // Vérifier si c'est un palindrome
    return cleanDate === reversed;
    }

const validDate = isValidDate(); 
console.log(isPalindrome(validDate)); // true ou false

