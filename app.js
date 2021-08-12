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


const criarItem = (tarefa,status) => {
    const item = document.createElement('label');
        item.classList.add('todo__item');
        item.innerHTML = `
            <input type="checkbox" ${status}>
            <div>${tarefa}</div>
            <input type="button" value="x">
        `
        document.getElementById('todoList').appendChild(item);
}

const atualizaTela = () => {
    limparTarefas();
   bancoDeTarefas.forEach(item => criarItem(item.tarefa, item.status));
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

document.getElementById('newItem').addEventListener('keypress', criarNovaTarefa);


atualizaTela();