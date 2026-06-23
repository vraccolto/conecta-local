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

            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>

                <Link to={`/editar/${anuncio.id}`}>
                    <button className="btn btn-edit">
                        Editar
                    </button>
                </Link>

                <button
                    className="btn btn-delete"
                    onClick={excluir}
                >
                    Excluir
                </button>

            </div>

        </div>

    );

}

export default AdCard;