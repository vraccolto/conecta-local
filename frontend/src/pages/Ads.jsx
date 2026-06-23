import { useEffect, useState } from "react";
import api from "../services/api";
import AdCard from "../components/AdCard";
import { useSearchParams } from "react-router-dom";

function Ads() {

    const [anuncios, setAnuncios] = useState([]);
    const [searchParams] = useSearchParams();

    const category = searchParams.get("category");

    async function carregarAnuncios() {

        try {

            const url = category
                ? `/ads?category=${category}`
                : "/ads";

            const resposta =
                await api.get(url);

            setAnuncios(resposta.data);

        } catch (error) {

            console.error(error);

            alert("Erro ao carregar anúncios.");

        }

    }

    useEffect(() => {

        carregarAnuncios();

    }, [category]);

    return (

        <div
            style={{
                maxWidth: "900px",
                margin: "40px auto"
            }}
        >

            <h1>
                {
                    category
                        ? `Categoria: ${category}`
                        : "Todos os anúncios"
                }
            </h1>

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