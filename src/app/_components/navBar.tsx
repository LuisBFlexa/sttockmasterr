import styles from "~/styles/navbar.module.css";
import MyImageComponent from './MyImageComponent';

export function Navbar(){
    return(
    <nav className={styles.navBar}>
        <div><MyImageComponent/></div>
        <p><b><span className = {styles.logoParte1}>sttock</span></b><span className={styles.logoParte2}>MASTERR</span></p>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Conta</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
        
        
        
    </nav>
    )
}