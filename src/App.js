import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <Services />
      <About />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
