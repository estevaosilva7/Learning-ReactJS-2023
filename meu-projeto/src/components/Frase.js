import styles from './Frase.module.css'

function Frase() {
    return (
        <div className={styles.fraseContainer}> 
            <p className={styles.fraseContent}> Frase teste para testar módulos CSS</p>
        </div>
    )
}

export default Frase

