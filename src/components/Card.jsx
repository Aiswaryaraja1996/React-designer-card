import Description from "./Description";
import Header from "./Header";
import Price from "./Price";
import styles from "./Card.module.css";

const Card = ({url,title,desc,cal,bal,temp,newPrice,oldPrice}) => {
    return(
        <div className={styles.cardItem}>
            <img src={url} alt={title}></img>
            <Header title={title}></Header>
            <Description desc={desc} cal={cal} bal={bal} temp={temp}></Description>
            <Price newPrice={newPrice} oldPrice={oldPrice}></Price>
        </div>
    )    
}

export default Card;