import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./Experience.css";
function Experience() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="Body">
      <h1
        className={`titleExperience  ${
          theme === "dark" ? "dark-theme-titleExperience" : ""
        }`}
      >
        Carreira Profissional
      </h1>
      <div className="Experience">
        <section
          className={`ExperienceList  ${
            theme === "dark" ? "dark-theme-experienceList" : ""
          }`}
        >
          <div className="ExperienceListNameDate">
            <h2
              className={`ExperienceName  ${
                theme === "dark" ? "dark-theme-experience" : ""
              }`}
            >
              Estagiário de Desenvolvimento Front-end
            </h2>
            <p
              className={`ExperienceDate  ${
                theme === "dark" ? "dark-theme-experience" : ""
              }`}
            >
              Maio 2022 - Agosto 2022
            </p>
            <ul className="ExperienceListMenu">
              <li
                className={`ExperienceListMenuItem  ${
                  theme === "dark" ? "dark-theme-experience" : ""
                }`}
              >
                Desenvolvimento de aplicações com React.{" "}
              </li>
              <li
                className={`ExperienceListMenuItem  ${
                  theme === "dark" ? "dark-theme-experience" : ""
                }`}
              >
                Introdução ao uso da ferramenta Adobe Experience Manager com
                React .{" "}
              </li>
              <li
                className={`ExperienceListMenuItem  ${
                  theme === "dark" ? "dark-theme-experience" : ""
                }`}
              >
                Versionamento de código com git e prática do GitFlow.{" "}
              </li>
              <li
                className={`ExperienceListMenuItem  ${
                  theme === "dark" ? "dark-theme-experience" : ""
                }`}
              >
                Experiência com o uso da ferramenta Figma para design de
                projetos.{" "}
              </li>
              <li
                className={`ExperienceListMenuItem  ${
                  theme === "dark" ? "dark-theme-experience" : ""
                }`}
              >
                Uso de metodologias agéis como por exemplo Scrum .{" "}
              </li>
            </ul>
          </div>
          <button
            className={`Company  ${
              theme === "dark" ? "dark-theme-experience" : ""
            }`}
          >
            Compass.uol
          </button>
        </section>
      </div>
    </div>
  );
}

export default Experience;
