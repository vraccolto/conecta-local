import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Ads from "./pages/Ads";
import CreateAd from "./pages/CreateAd";
import CreateUser from "./pages/CreateUser";
import EditAd from "./pages/EditAd";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/novo-anuncio" element={<CreateAd />} />
        <Route path="/novo-usuario" element={<CreateUser />} />
        <Route path="/editar/:id" element={<EditAd />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;