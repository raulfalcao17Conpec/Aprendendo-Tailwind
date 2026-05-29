import { Link } from 'react-router-dom';
function Inicio(){
    return(
        <div>
            <Link to="/Login">Login/Criar</Link>
            <h1>Estou no meu Feed</h1>
            <Link to="/Account">Ir para sua conta</Link>

        </div>
    )
}
export default Inicio