let opçaoEscolhida = 0;

do {
    opçaoEscolhida = parseInt(prompt(`
        Menu de Exercicios!!!

        Digite o Número das opções:
        0 - Sair
        1 - Login
        2 - IMC
        3 - Par ou ímpar
        4 - média do Aluno
        5 - Número Crescente

        `));


    switch (opçaoEscolhida) {
        case 0:
            alert("Obrigado Volte Sempre");
            break;

        case 1:
            login();
            break;

        case 2:
            IMC();
            break;

        case 3:
            Par_ou_Ímpar();
            break;

        case 4:
            média();
            break;

        case 5:
            número_crescente();
            break;

        default:
            alert("Opção inválida, Escolha as Opções Certas");
            break;
    }
}
while (opçaoEscolhida !== 0);

function login() {
    alert("Bem-vindo!!")
}

function IMC() {
    let peso = parseFloat(prompt("Informe seu peso: "))
    let altura = parseFloat(prompt("Informe sua altura: "))

    let imc = peso / (altura * altura)

    alert("Seu IMC é : " + imc.toFixed(2))

    if (imc < 18.5) {
        alert("Abaixo de peso")
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        alert("Peso normal")
    }
    else if (imc >= 25 && imc <= 29.9) {
        alert("Sobrepeso")
    }
    else if (imc >= 30 && imc <= 34.9) {
        alert("Obesidade grau 1")
    }
    else if (imc >= 35 && imc <= 39.9) {
        alert("Obesidade grau 2")
    }
    else {
        alert("Obesidade grau 3")
    }
}

function Par_ou_Ímpar() {
    let numero = parseInt(prompt("Digite um número: "))

    if (numero % 2 == 0) {
        alert("O número é par")
    } else {
        alert("O número é ímpar")
    }

}

function média() {
    let nota01 = Number.parseFloat(prompt("Digite sua primeira nota: "))
    let nota02 = Number.parseFloat(prompt("Digite sua segunda nota: "))
    let nota03 = Number.parseFloat(prompt("Digite sua terceira nota: "))
    let nota04 = Number.parseFloat(prompt("Digite sua quarta nota: "))

    let media = (nota01 + nota02 + nota03 + nota04) / 4

    alert("A média do aluno é: " + media)

    if (media >= 7) {
        alert("Aprovado!")
    }

    else if (media > 5 && media < 7) {
        alert("Recuperação")
    }

    else {
        alert("Reprovado!")
    }

}

function número_crescente() {
    let numero01 = parseInt(prompt("Digite o primeiro número: "))
    let numero02 = parseInt(prompt("Digite o segundo número: "))
    let numero03 = parseInt(prompt("Digite o terceiro número: "))

    if (numero01 < numero02 && numero02 < numero03) {
        alert("Os números estão em ordem crescente", numero01, numero02, numero03)
    } else {
        alert("Os números não estão em ordem crescente")
    }
}