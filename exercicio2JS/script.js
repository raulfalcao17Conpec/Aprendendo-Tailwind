
let lista = document.querySelector("div#nova");
let tarefas = []

function adicionar(){
    let tarefa = document.querySelector("input#tarefa") // O quereySelector recebe um parametro do tipo "tag#id"
    // 1. Pego a tarefa adicionada e adiciono a minha lista "virtual"
    let tarefaAdicionada = tarefa.value.trim() //Utiliza-se o 'trim()' para não contabilizarmos espaços
    if(tarefaAdicionada==""){
        window.alert("Insira uma tarefa para adicionar a lista")
    } else{
    tarefas.push(tarefaAdicionada) 
    // 2. Aviso ao usuário que deu certo e "zero" o texto da caixinha 
    window.alert("Tarefa registrada") 
    tarefa.value = " "
    // 3. Crio um elemento na página que registra o que foi digitado
    item = document.createElement("p")
    item.textContent = `${tarefas.length}) `+ tarefaAdicionada 
    lista.appendChild(item) 
    }



}