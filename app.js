'use strict';

const getBancoLocalStorage = () => JSON.parse(localStorage.getItem('todoList')) ?? [];
const setBancoLocalStorage = (bancoDeTarefas) => localStorage.setItem('todoList',JSON.stringify(bancoDeTarefas));

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
    const bancoDeTarefas = getBancoLocalStorage();
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
        const bancoDeTarefas = getBancoLocalStorage();
        bancoDeTarefas.push({'tarefa': tituloTarefa, 'status': ''});
        setBancoLocalStorage(bancoDeTarefas);
        atualizaTela();
        //limpar a caixa de texto
        evento.target.value = '';
    }
}

const clickItem = (evento) => {
    const elementoClicado = evento.target;
    if(elementoClicado.type === 'button') {
        const indice = elementoClicado.dataset.indice;
        removerItem(indice);
    }else if(elementoClicado.type === 'checkbox'){
        const indice = elementoClicado.dataset.indice;
        atualizarItem(indice);
    }
}

const atualizarItem = (indice) => {

    const bancoDeTarefas = getBancoLocalStorage();
    
    bancoDeTarefas[indice].status = bancoDeTarefas[indice].status === '' ? 'checked' : '';
    
    setBancoLocalStorage(bancoDeTarefas);
    
    atualizaTela();
}

const removerItem = (indice) => {
    const bancoDeTarefas = getBancoLocalStorage();

    bancoDeTarefas.splice(indice, 1);
    setBancoLocalStorage(bancoDeTarefas);

    atualizaTela();
}

document.getElementById('newItem').addEventListener('keypress', criarNovaTarefa);
document.getElementById('todoList').addEventListener('click', clickItem);

atualizaTela();