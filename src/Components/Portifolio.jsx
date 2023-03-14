import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Imc from "../assets/imc.jpeg";
import Form from "../assets/form.jpeg";
import Work from "../assets/work.png";
import "./Portifolio.css";
function Portifolio() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="Portifolio" id="Portifolio">
      <div className="title">
        <h1
          className={`portifolioTitle  ${
            theme === "dark" ? "dark-theme-portifolioTitle" : ""
          }`}
        >
          Projetos Desenvolvidos
        </h1>
      </div>
      <section className="Projects">
        <div className="Project">
          <a
            href="https://calculadoraimcreact.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Imc} className="projectImage" />
          </a>
        </div>
        <div className="Project">
          <a
            href="https://formchallenge.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Form} className="projectImage" />
          </a>
        </div>
        <div className="Project">
          <a href="" target="_blank" rel="noreferrer">
            <img src={Work} className="projectImage" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Portifolio;
