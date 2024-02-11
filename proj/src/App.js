import NSection from "./Navbar-section.js";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import Contact from "./pages/Contact.js";
import Certificates from "./pages/Certificates.js";
import Resume from "./pages/Resume.js";
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
              <NSection title="Resume" path="/resume" />
              <NSection title="Contact" path="/contact" />
              {/* <NSection title="Certificates" path="/certificates" /> */}
            </div>
            <div className="Navbar-toggle">{/* Toggle icon here */}</div>
          </div>
          <div className="App">
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
