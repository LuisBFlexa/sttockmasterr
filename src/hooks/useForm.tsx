import { handleClientScriptLoad } from "next/script";
import { type ChangeEvent, type FormEvent, useState } from "react";

export function useForm() {
    const [formData, setFormData] = useState({
        email: "",
        nome: "",
        telefone: ""
    })
    
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        console.log(formData)
    }
    return { formData, handleChange, handleSubmit};
}

