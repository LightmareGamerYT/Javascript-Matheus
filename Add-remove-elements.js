//crie uma variavel que busque pelo nome da tag, (section)

let seçao = document.getElementsByTagName("section");

let novoParagrafo = document.createElement("p"); //cria um elemento no meu HTML
let FormularioElemento = document.getElementById("formulario");
let labelElemento = document.getElementById("label");

novoParagrafo.textContent = "Paragrafo criado via JS"; //poe um conteudo no p

seçao[0].appendChild(novoParagrafo)

// document.body.appendChild(novoParagrafo);

//Remover a tag label 


FormularioElemento.removeChild(labelElemento);