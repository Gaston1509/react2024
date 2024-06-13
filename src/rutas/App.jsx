import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../contenedores/Home";
import Contacto from "../contenedores/Contacto";
import Somos from "../contenedores/Somos";
import Layout from "../Components/Layout";
import Pokemones from "../contenedores/Pokemones";
import Pokemon from "../contenedores/Pokemon";
import UsarContexto from "../contenedores/UsarContexto";

export const App = () => {
  return (
    <BrowserRouter>
      <UsarContexto>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/somos" element={<Somos />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/pokemones" element={<Pokemones />}></Route>
            <Route path="/pokemones/*" element={<Pokemon />}></Route>
          </Routes>
        </Layout>
      </UsarContexto>
    </BrowserRouter>
  );
};

export default App;
