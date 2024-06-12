import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { name, url } = props;
  let urlCortada = url.split("/");
  console.log(urlCortada);

  return (
    <>
      <li>
        <Link to={"/pokemones/" + urlCortada[6]}>{name}</Link>
      </li>
    </>
  );
};

export default Item;
