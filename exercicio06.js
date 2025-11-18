let anoNascimento = parseInt(prompt("Digite o ano de Nascimento: "))

let anoAtual = new Date().getFullYear()

let idade = anoAtual - anoNascimento

if(idade >= 18 ){
    console.log("Maior de Idade!!!")
    console.log("Sua idade é " + idade)

}
else{
    console.log("Você é menor de idade!!!")
    console.log("Sua idade é: " + idade)
}