import React, { useContext } from "react";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../context/ThemeContext";
import "./Navbar.css";
import Moon from "../assets/moon.svg";
import Sun from "../assets/sun.svg";
function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="Navbar">
      <ul className={`Menu ${theme === "dark" ? "dark-theme-menu" : ""}`}>
        <li
          className={`menuItem ${
            theme === "dark" ? "dark-theme-menuItem" : ""
          }`}
          onClick={() => console.log("I'm working")}
        >
          Sobre
        </li>
        <li
          className={`menuItem ${
            theme === "dark" ? "dark-theme-menuItem" : ""
          }`}
          onClick={() => console.log("I'm working")}
        >
          Portifolio
        </li>
        <li
          className={`menuItem ${
            theme === "dark" ? "dark-theme-menuItem" : ""
          }`}
          onClick={() => console.log("I'm working")}
        >
          Experiência
        </li>
        {/* <li
          className={`menuItem ${
            theme === "dark" ? "dark-theme-menuItem" : ""
          }`}
          onClick={() => console.log("I'm working")}
        >
          Contato
        </li> */}
      </ul>

      <div className="buttonSwitch">
        <ReactSwitch
          onChange={toggleTheme}
          checked={theme === "dark"}
          onColor={"#d46ab4"}
          offColor={"#c2c2c2"}
          uncheckedIcon={<img src={Moon} height="95%" width="90%"></img>}
          checkedIcon={<img src={Sun} height="95%" width="95%"></img>}
        />
      </div>
    </div>
  );
}

export default Navbar;
