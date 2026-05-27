import Item from './item'
function Lista(){
    return (
        <> 
            <h1>Filmes</h1>
            <ul>
                <Item nome="Vingadores" ano_lancamento={2012}/>
                <Item nome="Interestellar" ano_lancamento={2014}/>
                <Item nome="Clube da Luta" ano_lancamento={1999}/>
            </ul>
        </>
    )
}
export default Lista
