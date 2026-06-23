import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function Home() {
  const [categorias, setCategorias] = useState([]);

  const [anuncios, setAnuncios] = useState([]);

  const [categoriaSelecionada,
    setCategoriaSelecionada] =
    useState("Todas");

  async function carregarCategorias() {

    try {

      const resposta =
        await api.get("/categories");

      setCategorias(resposta.data);

    } catch (error) {

      console.error(error);

    }

  }

  async function carregarAnuncios(category = null) {

    try {

      const url = category
        ? `/ads?category=${category}`
        : "/ads";

      const resposta =
        await api.get(url);

      setAnuncios(resposta.data);

    } catch (error) {

      console.error(error);

    }

  }

  useEffect(() => {

    carregarCategorias();

    carregarAnuncios();

  }, []);

  async function filtrarCategoria(category) {

    setCategoriaSelecionada(category);

    if (category === "Todas") {

      carregarAnuncios();

      return;

    }

    carregarAnuncios(category);

  }

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        textAlign: "center",
      }}
    >
      <h1>ConectaLocal</h1>

      <p
        style={{
          fontSize: "20px",
          marginBottom: "30px",
        }}
      >
        Divulgue seus serviços para a comunidade
      </p>

      <hr style={{ margin: "50px 0" }} />

      <h2>Categorias</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            marginTop: "20px"
          }}
        >

          <div
            onClick={() =>
              filtrarCategoria("Todas")
            }
            style={{
              background:
                categoriaSelecionada === "Todas"
                  ? "#1976d2"
                  : "#fff",

              color:
                categoriaSelecionada === "Todas"
                  ? "#fff"
                  : "#000",

              padding: "15px 25px",

              borderRadius: "10px",

              cursor: "pointer",

              boxShadow:
                "0 2px 8px rgba(0,0,0,.1)",

              fontWeight: "bold"
            }}
          >
            Todas
          </div>

          {

            categorias.map((item) => (

              <div
                key={item.category}
                onClick={() =>
                  filtrarCategoria(item.category)
                }
                style={{
                  background:
                    categoriaSelecionada === item.category
                      ? "#1976d2"
                      : "#fff",

                  color:
                    categoriaSelecionada === item.category
                      ? "#fff"
                      : "#000",

                  padding: "15px 25px",

                  borderRadius: "10px",

                  cursor: "pointer",

                  boxShadow:
                    "0 2px 8px rgba(0,0,0,.1)",

                  fontWeight: "bold",

                  transition: "0.2s"
                }}
              >
                {item.category}
              </div>

            ))

          }

        </div>


      </div>

      <hr style={{ margin: "40px 0" }} />

      <h2>

        {

          categoriaSelecionada === "Todas"

            ? "Todos os anúncios"

            : `Categoria: ${categoriaSelecionada}`

        }

      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px",
          maxHeight: "500px",
          overflowY: "auto",
          marginTop: "20px",
          paddingRight: "8px"
        }}
      >

        {anuncios.map((anuncio) => (
          <div
            key={anuncio.id}
            className="card"
          >

            <div className="card-header">
              <h3>{anuncio.title}</h3>

              <span className="badge">
                {anuncio.category}
              </span>
            </div>

            <p className="card-description">
              {anuncio.description}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}

const card = {
  background: "#fff",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0 2px 6px rgba(0,0,0,.1)",
  fontWeight: "bold",
};

export default Home;