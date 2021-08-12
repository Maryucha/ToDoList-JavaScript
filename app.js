'use strict';

let bancoDeTarefas = [
    {
        'tarefa':'estudar javaScript',
        'status': ''
    },
    {
        'tarefa':'estudar Angular',
        'status': 'checked'
    },
    {
        'tarefa':'Netflix Outlander',
        'status': ''
    }
]


const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
        item.classList.add('todo__item');
        item.innerHTML = `
            <input type="checkbox" ${status} data-indice=${indice}>
            <div>${tarefa}</div>
            <input type="button" value="x" data-indice=${indice}>
        `
        document.getElementById('todoList').appendChild(item);
}

const atualizaTela = () => {
    limparTarefas();
   bancoDeTarefas.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));
} 

const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while(todoList.firstChild){
        todoList.removeChild(todoList.lastChild);
    }
}

const criarNovaTarefa = (evento) => {
    const tecla = evento.key;
    const tituloTarefa = evento.target.value;
    if(tecla === 'Enter'){
        bancoDeTarefas.push({'tarefa': tituloTarefa, 'status': ''});
        atualizaTela();
        //limpar a caixa de texto
        evento.target.value = '';
    }
}

const clickItem = (evento) => {
    const elementoClicado = evento.target;
    console.log(elementoClicado);
}

document.getElementById('newItem').addEventListener('keypress', criarNovaTarefa);
document.getElementById('todoList').addEventListener('click', clickItem);

atualizaTela();