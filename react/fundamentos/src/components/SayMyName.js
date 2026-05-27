import styles from './SayMyName.module.css'
function SayMyName(props){
    return(
        <div className={styles.textoContainer}>
            <p className={styles.textoContent}>Diga lá, {props.nome}. Como vai?</p>
        </div>
    )
}
export default SayMyName