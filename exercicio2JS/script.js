
let lista = document.querySelector("ol#nova")
let tarefas = []
function criarCaixinha(textoDaTarefa){ // Crio uma caixinha que será o compartimento do meu elemento da lista
    let list_item = {
        li: document.createElement("div"),
        texto: document.createElement("span"),
        botao: document.createElement("button")
    }
    list_item.botao.textContent = "OK"
    list_item.botao.className = "bg-green-400 px-2 rounded border-2 border-green-500 text-white hover:text-green-800 hover:border-green-800 rounded-md"
    list_item.botao.addEventListener("click", () => {
        list_item.texto.classList.toggle("line-through")
    }) 
    // Anteriormente, o problema esta a referência. O botão não sabia qual 'caixinha' alterar. Para isso, 
    // usamos o o método '.classList', que retorna os atributos de classe de texto. Além disso,
    // o '.toggle("line-through")', ele varia a presença de um elemento. Ou seja, se ele não existe, ele 
    // cria, e se ele existe, ele remove. Nesse caso, o atributo de classe a ser "variado" é o "line-through",que traça 
    // uma linha através dos elementos, indicando que ele a tarefa foi completa. 
    list_item.texto.textContent = textoDaTarefa // Texto da tarefa é a tarefa em si. Ex.: jogar bola,comer pizza, etc...
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