"use client";
import { useForm } from "~/hooks/useForm";
import styles from "~/styles/form.module.css";

export function Form() {  
    const { handleChange, handleSubmit } = useForm();
    
    return (
        <form className={styles.main} onSubmit={handleSubmit}>
          <h1 className={styles.title}>formulário</h1>
          <input 
            onChange={handleChange}
            className={styles.input}
            type="text"
            placeholder="digite seu nome"
            name="nome"
          />
          <input
            onChange={handleChange}
            className={styles.input}
            type="email"
            placeholder="digite seu email"
            name="email"
          />
          <input 
            onChange={handleChange}
            className={styles.input}
            type="tel"
            placeholder="digite seu telefone"
            name="telefone"
          />
          <textarea
            onChange={handleChange}
            className={styles.description}
            name="descrição"
            placeholder="descrição"
          ></textarea>
          <button type="submit" className={styles.button}>Enviar</button>
        </form>
    );
}