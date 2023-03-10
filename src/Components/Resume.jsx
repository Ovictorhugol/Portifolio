import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { SocialIcon } from "react-social-icons";
import "./Resume.css";
import Photo from "../assets/photo.png";
function Resume() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`Resume ${theme === "dark" ? "dark-theme-resume" : ""}`}>
      <div className="ResumeTextIcons">
        <p>
          Oi meu nome é Victor Hugo sou recém formado em Ciência da Computação
          na Puc Minas e estou em busca de uma oportunidade como Desenvolvedor
          Front-end. O que mais me fascina na tecnologia é a liberdade de criar
          coisas novas. Trabalho principalmente com Javascript e React mas
          sempre aberto a novas tecnologias.
        </p>
        <div className="IconsMenu">
          <SocialIcon
            url="https://github.com/Ovictorhugol"
            bgColor="#d46ab4"
            className="Icons"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/ovictorhugol/"
            bgColor="#d46ab4"
            className="Icons"
          />
          <SocialIcon
            url="https://www.instagram.com/ovictorhugol/"
            bgColor="#d46ab4"
            className="Icons"
          />
        </div>
      </div>
      <img src={Photo} alt="Victor Hugo" className="Image" />
    </div>
  );
}

export default Resume;
