import './App.css';
import HelloWorld from './components/helloworld';
import SayMyName from './components/SayMyName';
import Lista from './components/Lista';
import Evento from './components/Evento'; 
import Form from './components/Form';
import Condicional from './components/Condicional';
import ListaRender from './components/ListaRender';
function testando(){
  return "Testando JSX..."
}
const nome_cachorro = "Nutti"
function App() {
  const meusItens =["react","vue","next"]
  return (
    <div className="App"> 
      <HelloWorld/>
      <SayMyName nome ="Raul"/>
      <SayMyName nome={nome_cachorro}/>
      <p>Veja só:{testando()}</p>
      <Lista/>
      <Evento/>
      <Form/> 
      <h1>Renderização Condicional</h1>
      <Condicional/>
      <h1>Renderização de Listas</h1>
      <ListaRender itens={meusItens}/>
    </div>
  );
}

export default App;
