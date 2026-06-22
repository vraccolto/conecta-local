import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import api from "../services/api";

function CreateUser() {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    async function salvar(e){

        e.preventDefault();

        try{

            await api.post("/users",{

                name,
                email,
                password

            });

            alert("Usuário cadastrado!");

            setName("");
            setEmail("");
            setPassword("");

        }catch(error){

            console.log(error);

            alert("Erro ao cadastrar usuário.");

        }

    }

    return(

        <div
            style={{
                maxWidth:"600px",
                margin:"40px auto"
            }}
        >

            <h1>Novo usuário</h1>

            <form onSubmit={salvar}>

                <Input

                    placeholder="Nome"

                    value={name}

                    onChange={(e)=>setName(e.target.value)}

                />

                <Input

                    placeholder="Email"

                    value={email}

                    onChange={(e)=>setEmail(e.target.value)}

                />

                <Input

                    placeholder="Senha"

                    type="password"

                    value={password}

                    onChange={(e)=>setPassword(e.target.value)}

                />

                <Button

                    texto="Cadastrar"

                    type="submit"

                />

            </form>

        </div>

    )

}

export default CreateUser;