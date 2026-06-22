import { useEffect, useState } from "react";
import api from "../services/api";
import AdCard from "../components/AdCard";

function Ads() {

    const [anuncios, setAnuncios] = useState([]);

    async function carregarAnuncios() {

        try {

            const resposta = await api.get("/ads");

            setAnuncios(resposta.data);

        } catch (error) {

            console.error(error);

            alert("Erro ao carregar anúncios.");

        }

    }

    useEffect(() => {

        carregarAnuncios();

    }, []);

    return (

        <div
            style={{
                maxWidth: "900px",
                margin: "40px auto"
            }}
        >

            <h1>Lista de anúncios</h1>

            {

                anuncios.map((anuncio) => (

                    <AdCard

                        key={anuncio.id}

                        anuncio={anuncio}

                        atualizarLista={carregarAnuncios}

                    />

                ))

            }

        </div>

    );

}

export default Ads;