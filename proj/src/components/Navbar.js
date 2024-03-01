import React, { useEffect, useState, useRef } from "react";

const Navbar = ({ sections, activeSection }) => {
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navbarRef = useRef();

  useEffect(() => {
    const activeLink = navbarRef.current.querySelector(`.Navbar-link.active`);
    if (activeLink) {
      setIndicatorStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    }
  }, [activeSection, sections]);

  return (
    <nav className="Navbar" ref={navbarRef}>
      <div className="Navbar-section">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`Navbar-link ${
              activeSection === section.id ? "active" : ""
            }`}
          >
            {section.name}
          </a>
        ))}
        <div className="Navbar-indicator" style={indicatorStyle}></div>
      </div>
    </nav>
  );
};

export default Navbar;
