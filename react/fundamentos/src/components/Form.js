import { useState } from "react"

function Form(){
    function cadastrarUsuario(event){
        event.preventDefault()
        console.log("Usuario Cadastrado")
        console.log(name)
    }
    const [name,setName]= useState() /* Essas variáveis serão usadas ao longo de todo o código*/
    const [password,setPassword]= useState()
    return(
        <div className="App">
            <h1>Formulário de Cadastro</h1>
            <form onSubmit={cadastrarUsuario}> 
                <div>
                    <label htmlFor="Nome:"></label>
                    <input type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Digite seu nome" 
                    onChange={(event)=>setName(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="Senha:"></label>
                    <input type="password" 
                    id="password" 
                    name="password" 
                    onChange={(event)=>setPassword(event.target.value)}/>
                </div>
                <input type='submit' value='Cadastrar'/>
            </form>
        </div>
    )
}
export default Form 