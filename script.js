let lista = document.getElementById('lista-tarefas');
let botao = document.getElementById('criar-tarefa');
let inputElementos = document.getElementById('texto-tarefa');
let elementos = document.getElementsByTagName('li');
let registrado = '';
let apagador = document.getElementById('apaga-tudo')

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

lista.addEventListener('dblclick', doubleClick)
function doubleClick(event){

    if(event.target.className.includes('completed')){
        event.target.classList.remove('completed')
    }
    else if (event.target.className.includes('')){
        event.target.classList.add('completed')
    }
   




}
// lista.addEventListener('dblclick', doubleClick2)
// function doubleClick2(event){
//     for (index = 0; index < elementos.length; index += 1){
//         if(event.target.className.includes('completed')){
//             event.target.classList.remove('completed')
//         }


// }
// } 

apagador.addEventListener('click', apagaCoisas)
function apagaCoisas(){
for(let index2 = elementos.length - 1; index2 >= elementos.length; index -= 1){
     lista.removeChild(elementos[index2])
    }


}
