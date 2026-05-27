
function Evento(){
    function meuEvento(event){
        event.preventDefautl()
        console.log("Ativado!")
    }
    return(
        <div>
            <p>Clique para ativar!</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}
export default Evento 