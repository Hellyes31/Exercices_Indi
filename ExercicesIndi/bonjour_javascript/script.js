// let firstName = "Beyonce"

let ask = prompt("Quel est ton prénom ?")
// console.log(message)

function sayHello(firstName,hour){
// let firstName = "Beyonce"

if (hour >=18){
    document.querySelector('h1').innerText = "Bonsoir " + firstName + " !"
}
else {
    document.querySelector('h1').innerText = "Bonjour " + firstName + " !"
}
// let message = "Bonjour " + firstName + " !"
// console.log(message)

}
sayHello(ask,11)
sayHello(ask,19)
sayHello(ask,22)

// let message = "Bonjour " + firstName + " !"
