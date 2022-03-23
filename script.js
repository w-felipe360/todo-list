let lista = document.getElementById('lista-tarefas')
let botao = document.getElementById('criar-tarefa')
let inputElementos = document.getElementById('texto-tarefa')
let elementos = document.getElementsByTagName('li')
let registrado = ''

botao.addEventListener('click', adicionaElemento);


function adicionaElemento() {
   

let novoElemento = document.createElement('li');
novoElemento.innerText = inputElementos.value;
lista.appendChild(novoElemento);
inputElementos.value = '';

}
lista.addEventListener('click', mudaCor)
function mudaCor(event){

    for (index = 0; index < elementos.length; index += 1){
if (elementos[index].className.includes('selected')){
    elementos[index].classList.remove('selected');
    

}   

}
event.target.classList.add('selected'); 
}   



