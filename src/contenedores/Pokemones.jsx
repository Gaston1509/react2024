import React from "react";
import Item from "../Components/Item";
import { useEffect, useState } from "react";
import axios from "axios";

function Pokemones() {
  const [productos, setProductos] = useState([]);

  const traemeProductos = async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    console.log(res.data.results);
    setProductos(res.data.results);
  };
  useEffect(() => {
    console.log("useEffect");
    traemeProductos();
  }, []);
  return (
    <>
      <h1>Pokemones</h1>
      <ul>
        {productos.map((producto) => (
          <Item {...producto} key={producto.name}></Item>
        ))}
      </ul>
    </>
  );
}
export default Pokemones;
