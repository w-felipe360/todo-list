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
lista.addEventListener('click', mudaCor)
function mudaCor(){

    event.target.classList.add('listona')
}
