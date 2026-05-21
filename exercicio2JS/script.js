
let lista = document.querySelector("ol#nova")
let tarefas = []
function criarCaixinha(textoDaTarefa){ // Crio uma caixinha que será o compartimento do meu elemento da lista
    let list_item = {
        li: document.createElement("div"),
        texto: document.createElement("span"),
        botao: document.createElement("button")
    }

    list_item.texto.textContent = textoDaTarefa // Texto da tarefa é a tarefa em si. Ex.: jogar bola,comer pizza, etc...
    list_item.botao.textContent = "OK"
    list_item.botao.className = "bg-green-400 px-2 rounded bg-blue-300 text-white rounded-md"
    // list_item.botao.addEventListener("click", marcarFeita) // Adicionamos o 'click' ao botão criado
    list_item.li.appendChild(list_item.texto) //Nessa linha, tornamos o 'atributo texto' como filho da div de contação 
    list_item.li.appendChild(list_item.botao) //Nessa linha, tornamos o 'atributo botao' como filho da div de contação 
    list_item.li.className="w-full flex flex row justify-between"
    
    return list_item
}


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
    // 3. Crio um elemento na página que registra /o que foi digitado
    //item = document.createElement("li")/
    let caixinha = criarCaixinha(tarefaAdicionada) 
    lista.appendChild(caixinha.li) 
    }
}