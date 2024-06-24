import { type ChangeEvent, type FormEvent, useState } from "react";

export function useForm() {
  const [formData, setFormData] = useState({
    email: "",
    nome: "",
    telefone: "",
    descrição: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const filteredFormData = Object.fromEntries(
      Object.entries(formData).filter(([key, value]) => value !== "")
    );

    console.log(filteredFormData);
  }

  return { formData, handleChange, handleSubmit };
}
