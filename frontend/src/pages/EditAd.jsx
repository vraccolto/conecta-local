import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import Input from "../components/Input";
import Button from "../components/Button";

function EditAd() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    carregarAnuncio();
  }, []);

  async function carregarAnuncio() {
    try {
      const response = await api.get("/ads");

      const anuncio = response.data.find(
        (ad) => ad.id === Number(id)
      );

      if (anuncio) {
        setTitle(anuncio.title);
        setDescription(anuncio.description);
        setCategory(anuncio.category);
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao carregar anúncio.");
    }
  }

  async function salvar(e) {
    e.preventDefault();

    try {
      await api.put(`/ads/${id}`, {
        title,
        description,
        category,
      });

      alert("Anúncio atualizado!");

      navigate("/ads");

    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar anúncio.");
    }
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
      }}
    >
      <h1>Editar anúncio</h1>

      <form onSubmit={salvar}>

        <Input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <textarea
          rows="6"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <Button
          texto="Salvar alterações"
          type="submit"
        />

      </form>
    </div>
  );
}

export default EditAd;