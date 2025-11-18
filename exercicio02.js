let semana = window.prompt("Digite um Número de 1 á 7")
// let numero2 = Number.parseInt (prompt("Terça-feira "))
// let numero3 = Number.parseInt (prompt("Quarta-feira "))
// let numero4 = Number.parseInt (prompt("Quinta-feira "))
// let numero5 = Number.parseInt (prompt("Sexta-feira "))
// let numero6= Number.parseInt (prompt("Sabado "))
// let numero7 = Number.parseInt (prompt("Domingo "))

// let result = numero1 == "Segunda-feira "

switch (semana) {
    case "1":
        console.log ("Segunda-feira")
        break;

    case "2":
        console.log("Terça-feira")
        break;

         case "3":
        console.log("Quarta-feira")
        break;

         case "4":
        console.log("Quinta-feira")
        break;

         case "5":
        console.log("Sexta-feira")
        break;

         case "6":
        console.log("Sabado")
        break;

         case "7":
        console.log("Domingo")
        break;

    default:
        console.log ("Não é um número de 1 á 7")
        break;
}