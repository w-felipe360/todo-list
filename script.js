let lista = document.getElementById('lista-tarefas')
let botao = document.getElementById('criar-tarefa')
let inputElementos = document.getElementById('texto-tarefa')


botao.addEventListener('click', adicionaElemento);


function adicionaElemento() {
   

let novoElemento = document.createElement('li');
novoElemento.innerText = inputElementos.value;
lista.appendChild(novoElemento);
inputElementos.value = '';

}
// let listElements = document.querySelectorAll('li')
// listElements.addEventListener('click', mudaCor)
// function mudaCor(){

//     listElements.classList.add('listona')
// }
