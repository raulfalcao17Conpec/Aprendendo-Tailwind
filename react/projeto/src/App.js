import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import Inicio from './components/pages/Inicio';
import Account from './components/pages/Account';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro'



// 1. Criando estrutura de rotas fora do componente
// Nosso objeto router é criado com uma lista de elementos em que cada elemento 
// dessa lista corresponde a uma página da nossa aplicacão
// Cada elemento é determinado por um 'path' (Localização) 
// e um 'element'(O que ele renderiza toda vez que é acionado)
const router = createBrowserRouter([ 
  {
    path: "/", 
    element: <Inicio /> 
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Account",
    element: < Account/>
  },
  {
    path :"/Cadastro",
    element: <Cadastro/>
  }
]);

function App() {
  // 2. O seu App apenas renderiza o Provider
  return (
  
     <RouterProvider router={router} />
  )
}

export default App;
