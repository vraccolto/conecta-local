import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Ads from "./pages/Ads";
import CreateAd from "./pages/CreateAd";
import CreateUser from "./pages/CreateUser";
import EditAd from "./pages/EditAd";
import Users from "./pages/Users";

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
      </Routes>

      <Footer />
    </>
  );
}

export default App;