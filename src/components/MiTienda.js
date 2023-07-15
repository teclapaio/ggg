import React from "react";
import { Link } from "react-router-dom";
import "./MiTienda.css";
import logo from "./logo tienda.png";

const MiTienda = (props) => {
  return (
    <div className="Estilo">
      <h1>{props.titulo}</h1>
      <Link to="/">
           <img
        src={logo}
        alt="logo-tienda"
        style={{ width: "100px", float: "left", marginLeft: "3px" }}
      />
      </Link>
      <h3>{props.subtitulo}</h3>
    </div>
  );
};

export default MiTienda; 
