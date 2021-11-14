import styles from './Description.module.css'
const Description = ({desc,cal,bal,temp})=>{
    return (
        <div className={styles.description}>
            <p>{desc}</p>
            <div className={styles.extra}>
                <p>{cal}</p>
                <p>{bal}</p>
                <p>{temp}</p>
            </div>
        </div>
    )
}

export default Description;