import React, { useState } from "react";
import "../styles/FilterBox.css"; // Your CSS file
import { FaFilter } from "react-icons/fa";

const initialFilters = [
  { name: "Filter 1", active: false },
  { name: "Filter 2", active: false },
  { name: "Filter 3", active: false },
  // Add more filters as needed
];

function FilterBox() {
  const [filters, setFilters] = useState(initialFilters);
  const [showOptions, setShowOptions] = useState(false);

  const toggleFilter = (index) => {
    const newFilters = [...filters];
    newFilters[index].active = !newFilters[index].active;
    setFilters(newFilters);
  };

  const removeFilter = (index) => {
    const newFilters = [...filters];
    newFilters[index].active = false;
    setFilters(newFilters);
  };

  return (
    <div className="filter-container">
      <button onClick={() => setShowOptions(!showOptions)}>
        <FaFilter />
      </button>
      <div className="search-area">
        {filters
          .filter((f) => f.active)
          .map((filter, index) => (
            <div key={index} className="filter-tag">
              {filter.name}
              <button onClick={() => removeFilter(index)}>x</button>
            </div>
          ))}
      </div>

      {showOptions && (
        <div className="filter-options">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => toggleFilter(index)}
              className={filter.active ? "active" : ""}
            >
              {filter.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterBox;
