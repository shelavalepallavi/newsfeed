
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "@fontsource/outfit";
import Sidebar from "./components/Sidebar/Sidebar";
import React, { useState, useEffect } from "react";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState("light");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="div-flex m-2 relative w-full">
        <Sidebar theme={theme} toggleTheme={toggleTheme} />
        <NewsFeed />
        
        <div className="hidden custom925:flex">
          <Section />
        </div>
      </div>
      
      {windowWidth < 925 && (
        <div className="mt-4">
          <Section />
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default App;
