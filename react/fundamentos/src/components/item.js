import PropTypes from 'prop-types'
function Item({nome,ano_lancamento}){ /* Substitui o uso de 'props' */
    return (
        <><li>{nome}:{ano_lancamento} </li></>
    )
}
/*
Item.propType = { Enuncia os tipos dos atributos passados. Caso se coloque um atributo de tipo 
    errado, o erro acusa no console
    nome: PropTypes.string,
    ano_lancamento:PropTypes.number
} */

export default Item 
