import React, { useState, useRef, useEffect } from "react";
import "./styles/App.css";
import InfoBox from "./components/InfoBox";
import SkillBox from "./components/SkillBox";
import Projectstab from "./components/Projectstab";
import Navbar from "./components/Navbar";
function App() {
  const info1 = {
    job: "IT Tutor",
    details: [
      "Taught foundational and intermediate computer science concepts",
      "Engaged students through interactive learning methods",
      "Designed seamless curriculum transitions from basics to intermediate topics",
      "Provided mentorship and support for student academic growth",
    ],
    date: "10.2023 - current",
    name: "HTW Berlin",
    img: "htw-logo.png",
  };

  const info2 = {
    job: "IT Support",
    details: [
      "Supported the operations team with IT solutions.",
      "Setup and maintained the company's network infrastructure.",
      "Overhauled communication systems for better efficiency",
      "Developed a chatbot using OpenAI GPT and vector databases for improved customer responses",
    ],
    date: "3.2023 - 8.2023",
    name: "GreenAir GmbH",
    img: "greenair-logo.png",
  };

  const info3 = {
    job: "Data Analyst",
    details: [
      "Analyzed and categorized advertisement data using Google's EWOQ-Tool",
      "Contributed to data analysis efforts for enterprise-level microservice applications",
      "Utilized specialized tools to streamline the categorization process",
      "Played a key role in organizing and structuring data for enhanced decision-making",
    ],
    date: "2020 - 2021",
    name: "Virtusa Corp.",
    img: "virtusa-logo.png",
  };

  const skills = [
    {
      id: 1,
      name: "JavaScript",
      icon: "js.png",
      expertise: "Advanced",
    },
    {
      id: 2,
      name: "CSS",
      icon: "css.png",
      expertise: "Advanced",
    },
    {
      id: 3,
      name: "Java",
      icon: "java.png",
      expertise: "Advanced",
    },
    {
      id: 4,
      name: "Git",
      icon: "git.png",
      expertise: "Advanced",
    },
    {
      id: 5,
      name: "html",
      icon: "html.png",
      expertise: "Advanced",
    },
    {
      id: 6,
      name: "MongoDB",
      icon: "mongodb-icon-1.svg",
      expertise: "Advanced",
    },
    {
      id: 7,
      name: "MySql",
      icon: "mysql.svg",
      expertise: "Advanced",
    },
    {
      id: 8,
      name: "Python",
      icon: "py.png",
      expertise: "Advanced",
    },
    {
      id: 9,
      name: "React",
      icon: "react.png",
      expertise: "Advanced",
    },
  ];

  const programmingLanguages = [
    {
      name: "Java",
      logo: "java.png",
      description:
        "Skilled in Java for enterprise-grade applications, emphasizing OOP, clean code, and design patterns.",
    },
    {
      name: "CSS",
      logo: "css.png",
      description:
        "Experienced in crafting responsive and visually appealing designs with CSS, including frameworks like Bootstrap.",
    },
    {
      name: "JavaScript",
      logo: "js.png",
      description:
        "Proficient in JavaScript, focusing on both front-end interactivity and server-side logic with Node.js.",
    },
    {
      name: "HTML",
      logo: "html.png",
      description:
        "Well-versed in HTML5, ensuring semantic markup and accessibility standards are always met.",
    },
    {
      name: "Python",
      logo: "py.png",
      description:
        "Adept in Python for data science and backend development, with a strong grasp on AI and machine learning libraries.",
    },
    {
      name: "React",
      logo: "react.png",
      description:
        "Expert in React for building dynamic, high-performance single-page applications with a focus on UX.",
    },
  ];

  const tools = [
    {
      name: "OpenAI",
      logo: "openai.png",
      description:
        "Experience integrating OpenAI APIs to enhance application intelligence and automate responses.",
    },
    {
      name: "Figma",
      logo: "figma.webp",
      description:
        "Proficient with Figma for UI/UX design, creating interactive prototypes and collaborating with teams.",
    },
    {
      name: "Git",
      logo: "git.png",
      description:
        "Expert in using Git for version control, ensuring smooth workflow and code management in team projects.",
    },
  ];

  const databases = [
    {
      name: "MongoDB",
      logo: "mongodb-icon-1.svg",
      description:
        "Experienced with MongoDB for developing high-performance, schema-less database solutions.",
    },
    {
      name: "MySql",
      logo: "mysql.svg",
      description:
        "Proficient in MySQL for robust database design, optimization, and complex query formulation.",
    },
    {
      name: "Weaviate",
      logo: "weaviate.png",
      description:
        "Familiar with Weaviate, an innovative vector database for building AI-driven applications.",
    },
  ];
  const sections = [
    { id: "item1", name: "About" },
    { id: "item2", name: "Experience" },
    { id: "item3", name: "Skills" },
    { id: "item4", name: "Projects" },
  ];
  const [skillSearchTerm, setSkillSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState("");

  const projectsRef = useRef(null);
  const handleSkillClick = (skillName) => {
    setSkillSearchTerm(skillName); // Update the searchTerm state
    scrollToProjects(); // Call the function to scroll to the projects section
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" }); // Scrolls to the projects section
    }
  };
  const handleScroll = () => {
    let currentSection = "";
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Mid-screen adjustment

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (
        element.offsetTop <= scrollPosition &&
        element.offsetTop + element.offsetHeight > scrollPosition
      ) {
        currentSection = section.id;
      }
    });

    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections, handleScroll]);

  return (
    <div className="Base">
      <div className="Root">
        <div className="Navbar">
          <Navbar activeSection={activeSection} sections={sections} />
          <section id="about"></section>
          <section id="experience"></section>
          <section id="skills" ref={projectsRef} />
          <section id="projects"></section>
        </div>
        <div className="App">
          <div>
            <div className="Grid-container">
              <div className="Grid-item" id="item1">
                <h1 className="Intro-header">
                  Welcome to my digital portfolio!
                </h1>
                <div className="Intro-container">
                  <p id="item1-p">
                    I'm <span className="Highlight-name">Batu</span>, a
                    passionate and dedicated student from the vibrant city of
                    Berlin. Currently immersed in the dynamic world of Media
                    Informatics at HTW Berlin, I am on the exciting journey
                    towards earning my Bachelor of Science degree.
                  </p>
                  <p id="item1-p">
                    Here in the heart of innovation and creativity, I have honed
                    my skills and expanded my knowledge in the fascinating field
                    of media and technology. This portfolio is a curated
                    showcase of my academic projects, personal experiments, and
                    the milestones I've achieved during my student career.
                  </p>
                  <p id="item1-p">
                    As a media informatics enthusiast, my academic path has been
                    a blend of rigorous study and practical application,
                    empowering me to bridge the gap between complex information
                    technologies and user-friendly multimedia applications.
                    Whether it's developing intuitive interfaces, creating
                    engaging digital content, or exploring the latest in
                    software development, I am constantly pushing the boundaries
                    of what's possible.
                  </p>
                </div>
                <div className="Intro-contact-container">
                  <div className="linkedin">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <a href="https://www.linkedin.com/in/batuhan-kaan-piskin-3641b4258/">
                      Follow on LinkedIn
                    </a>
                  </div>
                  <div className="git">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      href="https://github.com/BKaanP"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <a href="https://github.com/BKaanP"> Follow on Github</a>
                  </div>
                  <div className="mail">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                      ></path>
                    </svg>

                    <a href="mailto:batu-piskin@hotmail.de">
                      batu-piskin@hotmail.de
                    </a>
                  </div>
                </div>
              </div>
              <div className="Grid-item" id="item2">
                <h1>Work Experience</h1>
                <div className="InfoBox-grid">
                  <InfoBox
                    job={info1.job}
                    details={info1.details}
                    date={info1.date}
                    name={info1.name}
                    img={info1.img}
                  />
                  <InfoBox
                    job={info2.job}
                    details={info2.details}
                    date={info2.date}
                    name={info2.name}
                    img={info2.img}
                  />
                  <InfoBox
                    job={info3.job}
                    details={info3.details}
                    date={info3.date}
                    name={info3.name}
                    img={info3.img}
                  />
                </div>
              </div>
              <div className="Grid-item" id="item3">
                <h1>Skills</h1>
                <div className="Skillbox-grid">
                  <SkillBox
                    group="Programming Languages & Frameworks"
                    skills={programmingLanguages}
                    onSkillClick={handleSkillClick} // Pass the callback to SkillBox
                  />
                  <SkillBox
                    group="Tools & Technologies"
                    skills={tools}
                    onSkillClick={handleSkillClick} // Do the same for other SkillBoxes
                  />
                  <SkillBox
                    group="Databases"
                    skills={databases}
                    onSkillClick={handleSkillClick}
                  />
                </div>
              </div>

              <div className="Grid-item" id="item4" ref={projectsRef}>
                <h1>Projects</h1>
                <Projectstab skillSearchTerm={skillSearchTerm} />{" "}
                {/* Pass the searchTerm prop */}
              </div>
            </div>
          </div>
        </div>
        <div className="Footer">
          <div className="Footer-grid"></div>
          <p className="Rights">
            © 2024 Batuhan-Kaan Piskin. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
