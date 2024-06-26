import styles from '~/styles/aboutus.module.css';
import EstoqueImageComponent from './ImageEstoque';


export default function Aboutus() {
  return (
    <div className={styles.aboutus}>
      <h1 className={styles.title}>SOBRE NÓS</h1>
      <p className={styles.body}>
        Bem-vindo ao StockMaster, onde inovação e eficiência se encontram para revolucionar a gestão de estoques. 
        Fundada com o objetivo de simplificar e otimizar o controle de inventário, 
        nossa empresa tem se dedicado a oferecer soluções tecnológicas de ponta que atendam às necessidades de empresas de todos 
        os tamanhos e segmentos.
      </p>
      <div className={styles.estoque}><EstoqueImageComponent/></div>
    </div>
  );
}

