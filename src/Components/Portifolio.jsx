import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./Portifolio.css";
function Portifolio() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="Portifolio">
      <h1>Projetos Desenvolvidos</h1>
      <div className="Projects">
        <p>Calculadora IMC</p>
        <p>Calculadora IMC</p>
        <p>Calculadora IMC</p>
        <p>Calculadora IMC</p>
      </div>
    </div>
  );
}

export default Portifolio;
