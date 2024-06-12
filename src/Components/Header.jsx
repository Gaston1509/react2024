import React from "react";
import { Link } from "react-router-dom";
import "../Components/header.css";
import logo from "../assets/pikachu.png";

const Header = () => {
  return (
    <header className="header">
      {/* <nav>
        <Link to={"/"}>Home </Link>
        <Link to={"/somos"}>Somos </Link>
        <Link to={"/contacto"}>Contacto </Link>
        <Link to={"/pokemones"}>Pokemones </Link> */}
      <nav className="navbar navbar-expand-md bg-body-tertiary bg-new">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand new barra" href="#">
            <img src={logo} alt="" className="imgPikachu" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse barra2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/somos"} className="nav-link" href="#">
                  Somos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/contacto"}
                  className="nav-link"
                  aria-disabled="true"
                >
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/pokemones"}
                  className="nav-link"
                  aria-disabled="true"
                >
                  Pokemones
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* </nav> */}
    </header>
  );
};

export default Header;
