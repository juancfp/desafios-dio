function adicionar(e=0) {
    let tarefa = document.getElementById('text-add');
    console.log(e);
    if(e.value == "Enter" && tarefa.value == "") {
        alert("FALTA A DESCRIÇÃO DA TAREFA");
    }
    else if ((e.type=='click') || (e.type=='keypress' && e.key=="Enter")) {
        console.log(e.type);
        let qntd_tarefas = document.getElementsByClassName('tarefas').length+1;
        let html_tarefa = '<div id="tarefa'+qntd_tarefas+'" class="tarefas">    <input type="checkbox" name="checkbox" id="td'+qntd_tarefas+'">     <label for="td'+qntd_tarefas+'">'+tarefa.value +'</label> </div>';
        tarefa.value='';

        document.getElementsByClassName('todo-wrapper')[0].innerHTML += html_tarefa;
    }
    
    
}

const BOTAO_EVENTO = document.getElementsByClassName("button-add")[0];
console.log(BOTAO_EVENTO);

BOTAO_EVENTO.addEventListener('click', adicionar);
document.getElementById('text-add').addEventListener('keypress', adicionar);
