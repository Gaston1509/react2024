import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../contenedores/pokemon.css";

const Pokemon = () => {
  const location = useLocation();
  const [pokemon, setPokemon] = useState();
  const traemePokemon = async () => {
    const pedazos = location.pathname.split("/");
    const url = "https://pokeapi.co/api/v2/pokemon/" + pedazos[2];
    const res = await axios.get(url);
    setPokemon(res.data);
    // console.log("lo que tiene JSON: ", res);
  };
  useEffect(() => {
    traemePokemon();
  }, []);

  return (
    <>
      <div className="containerPoke">
        <h1>{pokemon?.name}</h1>
        <img
          className="imgCentro"
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt={pokemon?.name}
        />
      </div>
    </>
  );
};

export default Pokemon;
