import Form from '../Form';
import Footer from '../Footer'
import Logo from '../Logo'
function Cadastro(){
    return (
        <div>
            <div className='my-4 flex justify-center'>
            <Logo tamanhoLogo="pequeno"/>
            </div>
            <div className="border-2 border-gray-200 h-0.5"></div>
            <div className="flex flex-row items-center">
                <img src="https://www.patasdacasa.com.br/sites/default/files/styles/gallery_crop/public/images-carrossel/17194-foto-engracada-de-cachorro-e-garantida-c-orig-2.webp?itok=qs4aCM9z" 
                alt="Cachorro resenha"
                className="w-1/2"></img>
            <div className="pl-8">
                <Form tituloForm="Cadastre-se" botaoForm="Cadastrar"/>
            </div>
                    
                
            </div>

            <Footer/>
        </div>
    )
}
export default Cadastro