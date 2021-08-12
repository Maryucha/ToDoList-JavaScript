'use strict';

let bancoDeTarefas = [
    {
        'tarefa':'estudar javaScript',
        'status': ''
    },
    {
        'tarefa':'estudar Angular',
        'status': 'checked'
    }
]


const criarItem = (tarefa,status = '') => {
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
    criarItem('teste 1');
} 


atualizaTela();