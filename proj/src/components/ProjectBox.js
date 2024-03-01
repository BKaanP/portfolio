import React, { useState, useRef, useEffect } from "react";
import "../styles/ProjectBox.css";

const ProjectBox = ({ values, isExpanded, toggleExpansion }) => {
  const detailsRef = useRef(null);

  useEffect(() => {
    const setMaxHeight = () => {
      if (detailsRef.current) {
        const detailHeight = isExpanded
          ? detailsRef.current.scrollHeight + 50 + "px"
          : "0px";
        detailsRef.current.style.maxHeight = detailHeight;
      }
    };

    // Initial adjustment and setup event listener only once
    setMaxHeight();
    window.addEventListener("resize", setMaxHeight);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", setMaxHeight);
    };
  }, [isExpanded]); // Depend only on isExpanded to avoid unnecessary effect triggers

  return (
    <div
      className={`project-box ${isExpanded ? "expanded" : ""}`}
      onClick={toggleExpansion}
      aria-expanded={isExpanded}
    >
      <h2>{values.name}</h2>
      <h3>Using {values.languages}</h3>
      {values.img && values.img.trim() !== "" && (
        <img
          src={values.img}
          alt={values.name + " logo"}
          className="project-box-img"
        />
      )}
      <div ref={detailsRef} className="details">
        {values.details.map((detail, index) => (
          <li key={index}>{detail}</li> // Ideally, use a more unique key if possible
        ))}
      </div>
      <p className="date">{values.date}</p>
    </div>
  );
};

export default ProjectBox;
