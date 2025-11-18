// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let numero01 = parseint (prompt("informe o primeiro número"))
let numero02 = parseint (prompt("informe o Segundo número"))
let numero03 = parseint (prompt("informe o terceiro número"))

if(numero01 < numero02 && numero02 < numero03){
    console.log("Os números estão em Ordem Crescente")
}

else{
    console.log ("Os números Não estão em ordem Crescente!")
}