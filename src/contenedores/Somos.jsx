import React, { useContext } from "react";
import Contexto from "./Contexto";
import "./somos.css";

function Somos() {
  const { favoritos } = useContext(Contexto);

  return (
    <div>
      <h1 className="favoritos">Pokes Favoritos</h1>
      <ul className="ulF">
        {favoritos.map((pokemon, index) => (
          <li className="liF" key={index}>
            {pokemon?.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Somos;
