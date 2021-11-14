import styles from './Price.module.css';

const Price = ({newPrice,oldPrice}) =>{
    return (
        <div className={styles.price}>
        <div className={styles.oldNew}>    <h1>${newPrice}</h1>
            <h2>${oldPrice}</h2></div>
        
            <button>ORDER</button>
        </div>
    )
}

export default Price;