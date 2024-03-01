import React, { useState, useEffect } from "react";
import "../styles/Projectstab.css";
import ProjectBox from "./ProjectBox";

const initialProjects = [
  {
    name: "Enhanced Customer Service Chatbot",
    languages: "OpenAi, PhP, Vector DB, WordPress",
    date: "2023",
    details: [
      "Developed an intelligent chatbot leveraging OpenAI's GPT-3.5 to provide dynamic, real-time customer service responses.",
      "Integrated the chatbot into WordPress using PHP, facilitating seamless user interaction directly on the website.",
      "Employed a Vector Database for storing and retrieving structured Q&A pairs, enabling the chatbot to learn and improve over time.",
      "Used MongoDB for tracking interactions and analyzing the message history for continuous improvement of response accuracy.",
      "Designed the user interface and an operational dashboard with Figma, focusing on usability and aesthetics to enhance user experience.",
    ],
    img: "/greenair-logo.png",
    tags: "bla",
  },
  {
    name: "Interactive CV Portfolio Site",
    languages: "React, HTML, JavaScript, CSS, Node.js, npm, Git",
    date: "2023",
    details: [
      "Built a responsive and interactive portfolio website using React, showcasing my curriculum vitae, project works, and technical skills.",
      "Implemented advanced web development techniques with HTML, JavaScript, and CSS for a modern and engaging user interface.",
      "Utilized Node.js and npm for project management, ensuring efficient dependency management and build processes.",
      "Featured a dynamic content structure, allowing easy updates and maintenance of the portfolio content.",
    ],
    img: "",
    tags: "bla",
  },
  {
    name: "Intelligent Filename Organizer",
    languages: "Python",
    date: "2023",
    details: [
      "Created a sophisticated Python script designed to streamline file management tasks by automating the renaming and organization of files within a directory.",
      "Compared file names against a predefined list in an Excel spreadsheet, identifying and resolving naming discrepancies and redundancies.",
      "Enhanced file system organization by automatically categorizing files into separate directories based on predefined criteria, improving accessibility and management.",
    ],
    img: "/greenair-logo.png",
    tags: "bla",
  },
  {
    name: "Idealo Product Recommendation Extension",
    languages:
      "OpenAi, React, HTML, JavaScript, CSS, Webpack, Node.js, npm, Git",
    date: "2023",
    details: [
      "Developed a Chrome extension for Idealo, designed to inject React-based components into web pages, providing personalized product recommendations.",
      "Utilized OpenAI's GPT models to analyze user behavior and generate accurate product suggestions, enhancing the shopping experience.",
      "Integrated with Idealo's API for real-time product data, ensuring recommendations are up-to-date and relevant.",
      "Packaged and optimized the extension using Webpack, ensuring efficient performance across various web environments.",
    ],
    img: "/idealo-logo.png",
    tags: "bla",
  },
  {
    name: "Swappy: The Community Marketplace WebApp",
    languages:
      "React, HTML, JavaScript, CSS, MongoDB, Node.js, npm, REST API, Git",
    date: "2023",
    details: [
      "Engineered 'Swappy', a comprehensive web application that facilitates a community-centric marketplace for users to buy, sell, and exchange items.",
      "Implemented a sleek, responsive design using React, HTML, CSS, and JavaScript, offering an intuitive user experience.",
      "Integrated MongoDB for data storage, enabling efficient management of product listings, user profiles, and transaction histories.",
      "Developed RESTful API services with Node.js for seamless front-end to back-end data communication, ensuring smooth and reliable app functionality.",
    ],
    img: "/htw-logo.png",
    tags: "bla",
  },
  {
    name: "Queen's Puzzle Solver",
    languages: "Java",
    date: "2023",
    details: [
      "Implemented a Java program to algorithmically solve the Queen's Puzzle, demonstrating the ability to place eight queens on a chessboard without any queen threatening another.",
      "Applied advanced problem-solving techniques and algorithm optimization to efficiently find all possible solutions.",
      "Showcased the use of recursive algorithms and backtracking techniques, emphasizing logical thinking and algorithmic efficiency.",
    ],
    img: "/htw-logo.png",
    tags: "bla",
  },
  {
    name: "Reverse Polish Notation Calculator",
    languages: "Java",
    date: "2023",
    details: [
      "Developed a Java-based calculator for parsing and evaluating expressions in reverse Polish notation (RPN), highlighting skills in algorithm design and data structure manipulation.",
      "Implemented a stack-based approach to accurately compute mathematical expressions, ensuring robust and error-free calculations.",
      "Designed the calculator to support various operators and functions, making it a versatile tool for mathematical problem-solving.",
    ],
    img: "/htw-logo.png",
    tags: "bla",
  },
  {
    name: "Sierpinski Triangle Generator",
    languages: "Java",
    date: "2023",
    details: [
      "Crafted a Java application to generate the Sierpinski Triangle, a fractal constructed from repeatedly subdividing equilateral triangles into smaller ones.",
      "Utilized recursive programming methods to efficiently render the fractal pattern, demonstrating the power of recursion in graphical rendering.",
    ],
    img: "/htw-logo.png",
    tags: "bla",
  },
  {
    name: "Optimal Route Finder with Dijkstra's Algorithm",
    languages: "Java",
    date: "2023",
    details: [
      "Applied Dijkstra's algorithm within a Java program to find the shortest paths between nodes in a graph, representing the Berlin Public Transport network (BVG).",
      "Designed the application to process textual data representing the BVG's routes, stops, and connections, providing users with the most efficient travel options.",
      "Incorporated user-friendly inputs and outputs to make the algorithm accessible for practical use, enhancing the commuting experience in Berlin.",
    ],
    img: "/htw-logo.png",
    tags: "bla",
  },
];

function Projectstab({ skillSearchTerm }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(initialProjects);
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    // If skillSearchTerm changes, update the local searchTerm and filter projects
    if (skillSearchTerm) {
      setSearchTerm(skillSearchTerm);
    }
  }, [skillSearchTerm]);

  useEffect(() => {
    const filtered =
      searchTerm === ""
        ? initialProjects
        : initialProjects.filter((project) => {
            const languagesMatch = project.languages
              .toLowerCase()
              .split(", ")
              .some((language) => language.includes(searchTerm.toLowerCase()));
            const nameMatch = project.name
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
            const detailsMatch = project.details.some((detail) =>
              detail.toLowerCase().includes(searchTerm.toLowerCase())
            );
            const tagsMatch = project.tags
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
            return languagesMatch || nameMatch || detailsMatch || tagsMatch;
          });

    setFilteredProjects(filtered);
    setExpandedProject(null);
  }, [searchTerm]);

  const toggleExpansion = (projectName) => {
    if (expandedProject === projectName) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectName);
    }
  };

  return (
    <div className="project-grid">
      <div className="project-header">
        <div className="project-searchbar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="project-body">
        {filteredProjects.map((project) => (
          <ProjectBox
            key={project.name}
            values={project}
            isExpanded={expandedProject === project.name}
            toggleExpansion={() => toggleExpansion(project.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default Projectstab;
