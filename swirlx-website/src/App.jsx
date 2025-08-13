import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Technology from "./components/Technology";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Technology />
      <About />
      <Contact />
    </div>
  );
}

export default App;
