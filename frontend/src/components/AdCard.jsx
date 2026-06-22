import { Link } from "react-router-dom";
import api from "../services/api";

function AdCard({ anuncio, atualizarLista }) {

    async function excluir() {

        if (!window.confirm("Deseja excluir este anúncio?")) return;

        try {

            await api.delete(`/ads/${anuncio.id}`);

            alert("Anúncio removido!");

            atualizarLista();

        } catch (error) {

            console.error(error);

            alert("Erro ao excluir.");

        }

    }

    return (

        <div
            style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,.1)"
            }}
        >

            <h2>{anuncio.title}</h2>

            <p>

                <strong>Categoria:</strong> {anuncio.category}

            </p>

            <p>{anuncio.description}</p>

            <div style={{ marginTop: "20px" }}>

                <Link to={`/editar/${anuncio.id}`}>

                    <button>Editar</button>

                </Link>

                <button

                    onClick={excluir}

                    style={{

                        marginLeft: "10px",

                        background: "#d32f2f",

                        color: "#fff"

                    }}

                >

                    Excluir

                </button>

            </div>

        </div>

    );

}

export default AdCard;