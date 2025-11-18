let login = window.prompt("Seu Login: ")
let senha = window.prompt("Sua Senha: ")

if (login == "admin" && senha == "senha123") {
    console.log("Login Bem-Sucedido")

} 
else {
 console.log ("Login não permitido")
}

switch ("admin") {
    case admin: 
        console.log("Nome Correto")
        break;

    default:
        console.log ("Usuário Correto")
        break;
}

switch (senha) {
    case senha123: 
        console.log("Nome Correto")
        break;

    default:
        console.log ("Usuário Correto")
        break;
}