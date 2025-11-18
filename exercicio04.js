// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let nota = Number.parseFloat(prompt("Digite a nota portugues"))
let nota1 = Number.parseFloat (prompt("Digite a nota filosofia: "))
let nota2 = Number.parseFloat (prompt("Digite a nota matemática: "))
let nota3 = Number.parseFloat (prompt("Digite a nota Geografia: "))

let media = (nota + nota1 + nota2 + nota3)/4

if (media >= 7){
    console.log("aprovado")
}

else if (media > 5 && media < 7){
 console.log("recuperação")
}
else{
    console.log("reprovado")
}