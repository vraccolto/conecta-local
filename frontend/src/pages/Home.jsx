import { Link } from "react-router-dom";

function Home() {
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
        Encontre profissionais ou divulgue seus serviços para a comunidade.
      </p>

      <Link to="/ads">
        <button>Ver anúncios</button>
      </Link>

      <Link to="/novo-anuncio">
        <button style={{ marginLeft: "15px" }}>
          Publicar anúncio
        </button>
      </Link>

      <Link to="/novo-usuario">
        <button style={{ marginLeft: "15px" }}>
          Cadastrar usuário
        </button>
      </Link>

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
        <div style={card}>🔧 Reparos</div>

        <div style={card}>💻 Tecnologia</div>

        <div style={card}>📚 Educação</div>

        <div style={card}>🚗 Transporte</div>

        <div style={card}>🏠 Serviços Gerais</div>

        <div style={card}>🧹 Limpeza</div>
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