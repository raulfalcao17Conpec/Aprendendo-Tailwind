import { Link } from 'react-router-dom'
function Icone({fotoIcone,paraOndeIr}){
    return (
        <Link 
            to={paraOndeIr} 
            className="block h-8 w-8 bg-cover bg-center border-2 p-2 hover:border-yellow-300" 
            style={{ backgroundImage: `url(${fotoIcone})` }} 
        />
    )
}
export default Icone