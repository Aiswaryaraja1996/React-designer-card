import styles from './Header.module.css'

const Header = ({title})=>{
    return (
        <div className={styles.header}>
            <h1>{title}</h1>
            {/* <div className="icons">

            </div> */}
        </div>
    )
}

export default Header;