import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";

function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <Services />
      <About />
    </div>
  );
}

export default App;
