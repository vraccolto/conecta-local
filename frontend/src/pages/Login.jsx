import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    async function realizarLogin(e) {

        e.preventDefault();

        try {

            const resposta =
                await api.post(
                    "/login",
                    {
                        email,
                        password
                    }
                );

            localStorage.setItem(
                "user",
                JSON.stringify(
                    resposta.data.user
                )
            );

            alert("Login realizado!");

            navigate("/");

        } catch (error) {

            console.error(error);

            alert(
                "Email ou senha inválidos"
            );

        }

    }

    return (

        <div
            style={{
                maxWidth: "450px",
                margin: "80px auto",
                background: "#fff",
                padding: "40px",
                borderRadius: "15px",
                boxShadow: "0 4px 15px rgba(0,0,0,.1)"
            }}
        >

            <h1
                style={{
                    textAlign: "center",
                    marginBottom: "30px",
                    color: "#1565c0"
                }}
            >
                Entrar no ConectaLocal
            </h1>

            <form
                onSubmit={realizarLogin}
            >

                <input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        fontSize: "16px",
                        boxSizing: "border-box"
                    }}
                />

                <br />
                <br />

                <input
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        fontSize: "16px",
                        boxSizing: "border-box"
                    }}
                />

                <br />
                <br />

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "14px",
                        background: "#1565c0",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        cursor: "pointer"
                    }}
                >
                    Entrar
                </button>

            </form>

        </div>

    );

}

export default Login;