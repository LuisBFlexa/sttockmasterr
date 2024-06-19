"use client";
import { useForm } from "~/hooks/useForm";
import styles from "~/styles/form.module.css";

export function Form() {  
    const { handleChange, handleSubmit } = useForm();

    return (
        <form className={styles.main} onSubmit={handleSubmit}>
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
            <input
              onChange={handleChange}
              className={styles.description}
              type="text"
              placeholder="descrição"
              name="descrição"
            />
            <button type="submit" className={styles.button}>Enviar</button>
        </form>
    );
}