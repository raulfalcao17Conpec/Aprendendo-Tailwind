import { useState} from 'react'
import { Link } from "react-router-dom" 
function Form({tituloForm,botaoForm}) {

  const [name,setName] = useState()
  const [password,setPassword]=useState() 
  const [email,setEmail]=useState("") 
  function cadastrarUsuario(evento){
    if(email.length!==0){
      if (name.length !==0 && password.length!==0) {
      console.log("Usuário digitado:", name);
      console.log("Senha digitada:", password);
      window.alert("Parabéns! Seu doguinho foi registrado")
      localStorage.setItem("nome",name)
      } else {
        window.alert("Complete os dois campos para finalizar registro")
        evento.preventDefault()
    } 
  }
}
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-5xl tracking-wider font-titulo font-extrabold text-black">{tituloForm}</h1>
        <form onSubmit={cadastrarUsuario} className="flex flex-col">
            <label>Usuario</label>
            <input className="bg-gray-200 border-2 border-black hover:border-yellow-300 w-full p-3 rounded-md" 
            type="text" 
            placeholder="Insira seu usuário"
            onChange={(e) => setName(e.target.value)}></input>
            {tituloForm === "Cadastre-se" && (
              <>
              <label>Email</label>
              <input 
              className="bg-gray-200 border-2 border-black hover:border-yellow-300 w-full p-3 rounded-md" 
              type="text"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)} // Nota extra aqui embaixo!
              />
              </>
              )}

            <label>Senha</label>
            <input className="bg-gray-200 border-2 border-black hover:border-yellow-300 w-full p-3 rounded-md" 
            type="password"
            autoComplete='off'
            onChange={(e) => setPassword(e.target.value)}></input> 
            <Link to="/Account"
            className="bg-yellow-300 font-bold 
            text-yellow-700 hover:text-yellow-800 w-24 mt-4 p-3 rounded-md text-center"
            onClick={cadastrarUsuario}> {botaoForm} </Link> 
        </form>
    </div>
  )
}

export default Form