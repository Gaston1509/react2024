import React from "react";
import Item from "../Components/Item";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./pokemones.css";
import Contexto from "./Contexto";

function Pokemones() {
  //const [productos, setProductos] = useState([]);
  //const traemeProductos = async () => {
  // const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
  // console.log(res.data.results);
  //setProductos(res.data.results); };
  const { pokemones, traerPokemones } = useContext(Contexto);

  useEffect(() => {
    console.log("useEffect");
    traerPokemones();
  }, []);

  return (
    <>
      <div className="pepe">
        <h1>Pokemones</h1>
        <ul className="ulPoke">
          {pokemones.map((pokemon) => (
            <Item {...pokemon} key={pokemon.name}></Item>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Pokemones;
