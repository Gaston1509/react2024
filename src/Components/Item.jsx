import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../contenedores/Contexto";
import "./item.css";

const Item = (props) => {
  const { name, url } = props;
  const { guardamePokemon } = useContext(Contexto);

  let urlCortada = url.split("/");
  // console.log(urlCortada);

  let handleGuardar = () => {
    guardamePokemon({ name: name, url: url });
  };

  return (
    <>
      <li className="liPoke">
        <Link to={"/pokemones/" + urlCortada[6]}>{name}</Link>
        <button className="btnFavorito" onClick={handleGuardar}>
          a favoritos
        </button>
      </li>
    </>
  );
};

export default Item;
