import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./Footer.css";
function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={`Footer ${theme === "dark" ? "dark-theme-footer" : ""}`}
    >
      <p
        className={`footerName ${
          theme === "dark" ? "dark-theme-footerName" : ""
        }`}
      >
        @ovictorhugol
      </p>
      <a href="https://www.linkedin.com/in/ovictorhugol/">
        <button
          className={`footerButton ${
            theme === "dark" ? "dark-theme-footerButton" : ""
          }`}
        >
          Linkedin
        </button>
      </a>
    </section>
  );
}

export default Footer;
