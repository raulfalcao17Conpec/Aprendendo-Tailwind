import Form from '../Form';
import Footer from '../Footer'
function Cadastro(){
    return (
        <div>
            <div className='my-4'>
            <p className="font-bold font-corpo border-4 border-yellow-200 p-3 text-xl rounded-md w-32 ml-8">DogGram</p>
            </div>
            <div className="border-2 border-gray-200 h-0.5"></div>
            <div className="flex flex-row items-center">
                <img src="https://www.patasdacasa.com.br/sites/default/files/styles/gallery_crop/public/images-carrossel/17194-foto-engracada-de-cachorro-e-garantida-c-orig-2.webp?itok=qs4aCM9z" 
                alt="Cachorro resenha"
                className="w-1/2"></img>
            <div className="pl-8">
                <Form tituloForm="Cadastre-se"/>
            </div>
                    
                
            </div>

            <Footer/>
        </div>
    )
}
export default Cadastro