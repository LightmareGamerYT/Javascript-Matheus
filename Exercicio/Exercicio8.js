let idade = parseInt (prompt("Informe sua idade (você precisa ser maior de idade)"))

while (idade < 18){
    idade = parseInt(prompt("Informe sua idade (você precisa ser maior de idade)"))
}

console.log(idade)

if (idade >= 18){
    window.alert("Maior de idade")
}