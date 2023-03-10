import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Resume from "./Components/Resume.jsx";
import Portifolio from "./Components/Portifolio";
import { ThemeContext } from "./context/ThemeContext.jsx";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
      <Navbar />
      <Resume />
      <Portifolio />
    </div>
  );
}

export default App;
