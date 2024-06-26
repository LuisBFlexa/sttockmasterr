// components/Footer.tsx
import styles from '~/styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.contacts}>
          <h1>contatos</h1>
          <a href="https://www.instagram.com/structunb/" target="_blank" rel="noopener noreferrer">
            instagram @structunb
          </a>
          <a href="https://www.linkedin.com/company/struct-ej/" target="_blank" rel="noopener noreferrer">
            linkedin @structej
          </a>
          <a href="tel:(99)99999-9999">telefone (99) 99999-9999</a>
        </div>
        <div className={styles.logo}>
          <img src="/favicon.ico" alt="Logo" />
        </div>
      </div>
    </footer>
  );
}
