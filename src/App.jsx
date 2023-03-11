import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Resume from "./Components/Resume.jsx";
import Portifolio from "./Components/Portifolio";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import { ThemeContext } from "./context/ThemeContext.jsx";
import { useContext } from "react";
function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
      <Navbar />
      <Resume />
      <Portifolio />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
