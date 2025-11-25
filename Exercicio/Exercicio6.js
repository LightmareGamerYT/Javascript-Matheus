// Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.

let s = parseInt(prompt("Escolha um numero"))
let n = 1
let m = 0

while (n <= s){
    m = m + n
    n++
}

console,console.log("soma total: "  , m)