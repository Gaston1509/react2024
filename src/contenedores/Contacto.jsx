import { useContext } from "react";
import Contexto from "./Contexto";

const Contacto = () => {
  const { saludar, pokemones, traerPokemones } = useContext(Contexto);
  // console.log(estadoInicial.pokemones[0]);
  console.log(pokemones);
  const handleClick = () => {
    traerPokemones();
    console.log(pokemones);
  };

  return (
    <>
      <h1>Contacto</h1>
      <button onClick={handleClick}>Agregar Pokes</button>
    </>
  );
};

export default Contacto;
