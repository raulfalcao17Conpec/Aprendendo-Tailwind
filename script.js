let num = document.querySelector("input#fnum");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#res");
let valores = []

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    } else{
        return false 
    }

}
function inLista(n,l){
    if(l.indexOf(n)!=-1){
        return true 
    }else{
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(Number(num.value),valores)){
        valores.push(Number(num.value))
        let item = document.createElement("option") 
        //Cria um elemento da tag passado como parâmeto no nosso HTML. Nesse caso, como a tag pai é um
        // "select", então as tags filhas serão "options"
        item.text = `${num.value} adicionado`
        lista.appendChild(item) // Adiciona esse elemento visivelmente 
        res.innerHTML = ""

    }else{
        window.alert("Valor inválido ou já adicionado")
    } 
    num.value = ""
    num.focus()
}
function finalizar(){
    if(valores.length==0){
        window.alert("Adicione valores antes de finalizar")
    }else{
        let total = valores.length
        let maior = valores[0]
        for (let i in valores){
            if(valores[i]>maior){
                maior = valores[i]
            }
        }
        let menor = valores[0]
        for (let i in valores){
            if(valores[i]<menor){
                menor=valores[i]
            }
        }
        let soma = 0 
        for (let i in valores){
            soma = soma+valores[i]
        }
        let media = soma/total
        res.innerHTML=""
        res.innerHTML += `<p>${total} números foram registrados </p>`
        res.innerHTML += `<p> Maior número: ${maior} </p>`
        res.innerHTML += `<p> Menor número: ${menor} </p>`
        res.innerHTML += `<p> Soma dos números: ${soma} </p>`
        res.innerHTML += `<p> Média dos números: ${media.toFixed(2)}</p>`
        
    }   
}