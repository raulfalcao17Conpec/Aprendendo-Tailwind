import { useState } from 'react' 
function Condicional(){
    const[email,setEmail]=useState()
    const [userEmail,setUserEmail]= useState()
    function enviarEmail(event){
        event.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }
    function limparEmail(){
        setUserEmail('')
    }
    return(
        <div>
            <h2>Insira seu email aqui</h2>
            <form>
                <input type='email' placeholder='Digite seu email' onChange={(e)=>setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar</button>
                {userEmail &&( 
                    <div>
                        <p>O email cadastrado foi: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                ) }
            </form>
        </div>
    )
}
export default Condicional