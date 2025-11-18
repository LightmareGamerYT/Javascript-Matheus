//Alert - Apresenta uma Mensagem na tela
// window.alert ("Luis não curte coisas")
// //Confirm - Pergunta com ok/Cancela (Retorna um True ou false)
// window.confirm("O Jonas Vai Casar")
// //Prompt - Pega o texto da tela
// window.prompt("Qual é seu nome?")

/* 
Falacias
e Mais Falacias
*/

//Falacias em Linhas

// console.log("Multimidia")

// let nome = prompt("Informe o seu nome:")

// console.log("Bem vindo! " + nome)

// let numero1 = prompt("Digite o primeiro número: ")
// let numero2 = prompt("Digite o segundo número: ")

// let result = numero1 + numero2 


// let numero1 = Number.parseInt (prompt("Digite o primeiro número: "))
// let numero2 = Number.parseInt (prompt("Digite o segundo número: "))

// let result = numero1 + numero2 

// console.log(result)

//let numero1 = Number.parseFloat(prompt("Digite o primeiro número: "))
//let numero2 = Number.parseFloat(prompt("Digite o segundo número: "))

//let result = numero1 + numero2

//console.log(result)

let idade = window.prompt("Qual Sua idade? ")

if (idade >= 18) {
    console.log("Maior de Idade! Boa")



} else {
    console.log("Você é menor de Idade!")
}

switch (idade) {
    case "18":
        console.log("Maior de Idade!")
        break;


    case "27":
        console.log("Esta perto dos 30")
        break;


    default:
        console.log("Nada a fazer")
        break;
}