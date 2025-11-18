let peso = parseFloat(prompt("Informe seu peso (em KG)"))

let altura = parseFloat(prompt("Informe a sua altura (em Metros)"))

let imc = peso / (altura * altura)

console.log("Seu IMC é: " + imc)

if (imc < 18.5) {
    console.log("Abaixo do peso")
}


else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso Normal")
}


else if (imc >= 25 && imc <= 29.9) {
    console.log("Sobrepeso")
}

else if (imc >= 30 && imc <= 34.9) {
    console.log("Obesidade Grau 1")

}

else if (imc >= 35.0 && imc <= 39.9) {
    console.log("Obesidade grau 2")
}

else if (imc >= 40.0) {
    console.log("Obesidade grau 3")
}

// IMC de 35.0 a 39.9: Obesidade grau 2
// IMC maior ou igual a 40.0: Obesidade grau 3