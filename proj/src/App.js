import NSection from "./Navbar-section.js";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import Contact from "./pages/Contact.js";
import Certificates from "./pages/Certificates.js";
import Goals from "./pages/Goals.js";
import CV from "./pages/CV.js";
import FSection from "./Footer-section.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="Base">
        <div className="Root">
          <div className="Navbar">
            <div className="Navbar-section">
              <NSection title="Home" path="/" />
              <NSection title="Projects" path="/projects" />
              <NSection title="CV" path="/cv" />
              <NSection title="Contact" path="/contact" />
              <NSection title="Goals" path="/goals" />
            </div>
            <div className="Navbar-toggle">
              Toggle icon{/* Toggle icon here */}
            </div>
          </div>
          <div className="App">
            {/* <div className="Block"></div> */}
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/goals" element={<Goals />} />
              </Routes>
            </div>
          </div>
          <div className="Footer">
            <div className="Footer-grid">
              <FSection className="Footer-griditem" title="Home" path="/" />
              <FSection
                className="Footer-grid-item"
                title="Projects"
                path="/projects"
              />
              <FSection className="Footer-grid-item" title="CV" path="/cv" />
              <FSection
                className="Footer-grid-item"
                title="Contact"
                path="/contact"
              />
              <FSection
                className="Footer-grid-item"
                title="Goals"
                path="/goals"
              />
            </div>
            <p className="Rights">
              © 2024 Batuhan-Kaan Piskin. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
