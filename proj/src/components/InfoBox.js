import React, { useState, useRef } from "react";
import "../styles/InfoBox.css";

const InfoBox = ({ job, details, date, name, img }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsRef = useRef(null);

  const toggleExpansion = () => {
    if (!isExpanded) {
      const detailsHeight = detailsRef.current.scrollHeight;
      detailsRef.current.style.maxHeight = `${detailsHeight}px`;
    } else {
      detailsRef.current.style.maxHeight = "0px";
    }

    setIsExpanded(!isExpanded);
  };

  const highlightCurrent = (dateString) => {
    const parts = dateString.split(/(current)/gi);
    return parts.map((part, index) =>
      part.toLowerCase() === "current" ? (
        <span key={index} className="highlight-current">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div
      className={`info-box ${isExpanded ? "expanded" : ""}`}
      onClick={toggleExpansion} // Use toggleExpansion for click
    >
      <h2>{job}</h2>
      <h3>{name}</h3>
      <img src={img} alt="logo" className="InfoBox-img" />
      <div ref={detailsRef} className="details">
        {" "}
        {/* Add ref to details div */}
        <ul>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
      <p className="date">{highlightCurrent(date)}</p>
    </div>
  );
};

export default InfoBox;
