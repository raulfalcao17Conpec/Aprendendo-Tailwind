import { Link } from 'react-router-dom';
import Form from '../Form';
import Footer from '../Footer'
function Login({name,password}){
    return(
        <div className="h-auto">
            <div className='my-4'>
            <p className="font-bold font-corpo border-4 border-yellow-200 p-3 text-xl rounded-md w-32 ml-8">DogGram</p>
            </div>
            <div className="border-2 border-gray-200 h-0.5"></div>
            <div className="flex flex-row items-start">
                <img src="https://www.patasdacasa.com.br/sites/default/files/styles/gallery_crop/public/images-carrossel/17194-foto-engracada-de-cachorro-e-garantida-c-orig-2.webp?itok=qs4aCM9z" 
                alt="Cachorro resenha"
                className="w-1/2 h-full"></img>
                <div className="flex flex-col pl-8 pt-16">
                    <Form tituloForm="Login"/>
                    <h2 className="font-titulo text-2xl font-bold mt-12">Cadastre-se</h2>
                    <div className="border-2 border-gray-200 h-0.5 w-8"></div>
                    <p>Ainda não possui conta? Cadastre-se no site.</p>
                    <Link to="/Cadastro"
                    className="bg-yellow-300 font-bold 
                    text-yellow-700 hover:text-yellow-800 w-24 mt-4 p-3 rounded-md text-center mb-4"
                    >Cadastrar</Link>
                </div>
            </div>

            <Footer/>
        </div>
    )
}
export default Login 