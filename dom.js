

let elementosPorClass = document.getElementsByClassName("texto");
let elementoPorID = document.getElementById("Formulario");
let elementoPorTag = document.getElementsByTagName("a");


//DESAFIOS
//crie uma variavel que tenha o valor de um elemento buscado pela sua nome da tag✅
// Exiba o Segundo elemento da variavel elementos ✅
//acesse a propriedade innerText da Variavel elementoporTag (é uma array, vão ter que acessar a posição do elemento) e exiba no console.log ✅
//acesse a propriedadde style.color e atribui (=) uma nova cor (RED) para a posição 0 da variavel elementoPorTag


console.log(elementosPorClass[0]); //acessa a primeira posição do array
console.log(elementosPorClass);
console.log(elementoPorID);
console.log(elementoPorTag);

elementoPorTag[0].textContent = "Estevão é fera" //modifica o conteudo do elemento
console.log(elementoPorTag[0].textContent);
elementoPorTag[0].style.color = "Green";
elementoPorTag[0].style.fontSize = "40px";





