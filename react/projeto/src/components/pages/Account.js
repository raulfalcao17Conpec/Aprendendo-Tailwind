import { Link } from 'react-router-dom';
import Logo from '../Logo';
import Icone from '../Icone';
import fotoDoUsuario from '../do-utilizador.png';
import fotoAdd from '../add.png'
import fotoSeta from '../seta.png'
function Account(){
    return(
        <div>
            <header className='my-4 flex justify-around'>
            <Logo />
            <div className="flex flex-row items-center gap-2">
                <p >ra278711</p>
                <Icone fotoIcone={fotoDoUsuario} alt="perfil"/>
            </div>
            </header>
            <div className="border-2 border-gray-200 h-0.5"></div> 
            <section className="flex flex-row justify-around mt-4 h-auto">
                <h1 className="font-titulo text-4xl font-bold">Minha Conta</h1>
                <ul className="flex flex-row gap-4">
                    <li>
                        <Icone fotoIcone={fotoAdd}/>
                        
                    </li>
                    <li>
                        <Icone fotoIcone={fotoSeta} paraOndeIr="/Login"/>
                    </li>
                </ul>

            </section>









            <Link to="/Login">Login/Criar</Link>    
            </div>
   


)
}
export default Account