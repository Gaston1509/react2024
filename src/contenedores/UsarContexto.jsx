import React from "react";
import Contexto from "./Contexto";
import Reducer from "./Reducer";
import { useReducer } from "react";
import axios from "axios";

function UsarContexto(props) {
  const { children } = props;
  const estadoInicial = {
    pokemones: [{ name: "pikachu", url: "" }],
    favoritos: [],
  };

  const [state, dispatch] = useReducer(Reducer, estadoInicial);

  const saludar = (nombre) => {
    alert("Hola " + nombre);
  };

  const traerPokemones = async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    dispatch({
      type: "LISTAME_POKEMONES",
      payload: res.data.results,
    });
  };

  const guardamePokemon = (item) => {
    console.log("guardamePokemon");
    dispatch({
      type: "GUARDAME_POKEMON",
      payload: item,
    });
    console.log("Favoritos: ", state.favoritos);
  };

  return (
    <Contexto.Provider
      value={{
        saludar,
        traerPokemones,
        guardamePokemon,
        pokemones: state.pokemones,
        favoritos: state.favoritos,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}

export default UsarContexto;
