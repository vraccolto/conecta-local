import { useEffect, useState } from "react";
import api from "../services/api";

function Users(){

    const [users,setUsers]=useState([]);

    useEffect(()=>{

        carregarUsuarios();

    },[]);

    async function carregarUsuarios(){

        try{

            const response=await api.get("/users");

            setUsers(response.data);

        }catch(error){

            console.log(error);

            alert("Erro ao carregar usuários");

        }

    }

    return(

        <div
            style={{
                maxWidth:"800px",
                margin:"40px auto"
            }}
        >

            <h1>Usuários cadastrados</h1>

            <table
                border="1"
                cellPadding="10"
                width="100%"
            >

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Nome</th>

                        <th>Email</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        users.map(user=>(

                            <tr key={user.id}>

                                <td>{user.id}</td>

                                <td>{user.name}</td>

                                <td>{user.email}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    )

}

export default Users;