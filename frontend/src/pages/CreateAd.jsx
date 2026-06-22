import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function CreateAd() {

    const navigate = useNavigate();

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [category,setCategory]=useState("");
    const [userId,setUserId]=useState("");

    async function salvar(e){

        e.preventDefault();

        try{

            await api.post("/ads",{

                title,
                description,
                category,
                userId:Number(userId)

            });

            alert("Anúncio cadastrado!");

            navigate("/ads");

        }catch(error){

            console.error(error);

            alert("Erro ao cadastrar anúncio.");

        }

    }

    return(

        <div
            style={{
                maxWidth:"600px",
                margin:"40px auto"
            }}
        >

            <h1>Novo anúncio</h1>

            <form onSubmit={salvar}>

                <Input
                    placeholder="Título"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />

                <Input
                    placeholder="Categoria"
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                />

                <Input
                    placeholder="ID do usuário"
                    type="number"
                    value={userId}
                    onChange={(e)=>setUserId(e.target.value)}
                />

                <textarea

                    placeholder="Descrição"

                    rows="6"

                    value={description}

                    onChange={(e)=>setDescription(e.target.value)}

                />

                <br /><br />

                <Button

                    texto="Cadastrar"

                    type="submit"

                />

            </form>

        </div>

    )

}

export default CreateAd;