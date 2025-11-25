// For - loop contato

//Contador do 0 ao 10

// for(inicializador; condição; contador)

// for (let num = 0; num <= 10; num++) {
//     console.log("Eu vim Pra Ganhar" + num)
// }

// while - loop condicional

// let salario = 1900

// while (salario < 5000) {
//     // salario = 100 + salario
//     salario += 100

//     console.log("Esse é o seu Salário, seu pobre R$: " + salario)

// }

// // do while - loop condicional

// let aumento = 1000

// do {

//     console.log("Esse é o seu saldo, seu pobre: " + aumento)

//     aumento += 100


// } while (aumento < 5000)

// Array

let fruta = ["Banana", "Tangerina", "Pessego", "Pitaya", "Melancia", "Pêra"]

console.log(fruta [1])
console.log(fruta [3])

// forEach => percorre uma lista

fruta.forEach(batata => {
    console.log("A fruta é: " + batata)

})

// Percorre uma lista com "for" 

for (let indice = 0; indice < frutas.length; indice++) {
    console.log(frutas[indice])

    if(frutas[indice] == "Pêra"){
        console.log("Eu gosto de " + frutas [indice])
    }


}