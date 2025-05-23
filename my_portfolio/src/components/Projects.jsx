import React, { useState } from "react";
import "./Projects.css";
import Project1Image from "./images/project1.png";
import Project2Image from "./images/project2.png";
import Project3Image from "./images/project3.png";
import Project4Image from "./images/project4.png";
import Project5Image from "./images/project5.png";
import Project2_1 from "./images/projectTab2_1_1.png"; // Advanced project image
import { Link } from "react-router-dom";

// Tab 1 projects
const projectData = [
  {
    id: 1,
    title: "Project1",
    image: Project1Image,
    description: "Made in the React login-form in backend used Node.js, Express & MongoDB.",
  },
  {
    id: 2,
    title: "Project2",
    image: Project2Image,
    description: "Made front Side of the Amazon-Clone using HTML5, CSS3, Bootstrap.",
  },
  {
    id: 3,
    title: "Project3",
    image: Project3Image,
    description: "Made a ChatBot using HTML5, CSS3, JavaScript & Google AI Studio.",
  },
  {
    id: 4,
    title: "Project4",
    image: Project4Image,
    description: "This project is a simple currency converter using HTML, CSS, and JavaScript, where the Fetch API retrieves exchange rates. ",
  },
  {
    id: 5,
    title: "Project5",
    image: Project5Image,
    description: "This project is a basic calculator built using HTML, CSS, and JavaScript, allowing users to perform arithmetic operations like addition, subtraction, multiplication, and division.",
  },
  // {
  //   id: 6,
  //   title: "Project6",
  //   image: "/images/startup.png",
  //   description: "A modern UI for startup businesses to grow efficiently.",
  // },
];

// Tab 2 advanced projects
const advancedProjectData = [
  {
    id: 101,
    title: "Advanced Project1",
    image: Project2_1,
    description: "A project built using the MERN stack, with MongoDB as the backend database for storing data.",
    route: "/project2_1_1"
  },
  {
    id: 102,
    title: "Advanced Project 2",
    image: "/images/advanced2.png",
    description: "A smart agriculture dashboard using Machine Learning and Python Flask.",
    route: "" // Not linked yet
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-description">
        Explore our recent projects showcasing creativity and innovation.
      </p>

      {/* Tabs */}
      <div className="tabs">
        <button className={activeTab === 1 ? "active" : ""} onClick={() => setActiveTab(1)}>
          Tab 1
        </button>
        <button className={activeTab === 2 ? "active" : ""} onClick={() => setActiveTab(2)}>
          Tab 2: Advanced Projects
        </button>
        <button className={activeTab === 3 ? "active" : ""} onClick={() => setActiveTab(3)}>
          Tab 3
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* Tab 1 */}
        {activeTab === 1 && (
          <div className="projects-list">
            {projectData.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {project.id >= 1 && project.id <= 5 ? (
                  <Link to={`/project${project.id}`}>
                    <button className="project-btn">Learn More</button>
                  </Link>
                ) : (
                  <button className="project-btn">Learn More</button>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2 - Advanced Projects */}
        {activeTab === 2 && (
          <div className="tab-placeholder">
            <h3>Advanced Projects</h3>
            <p>Explore our technically advanced and innovative project work.</p>
            <div className="projects-list">
              {advancedProjectData.map((project) => (
                <div key={project.id} className="project-card">
                  <img src={project.image} alt={project.title} />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  {project.route ? (
                    <Link to={project.route}>
                      <button className="project-btn">Learn More</button>
                    </Link>
                  ) : (
                    <button className="project-btn" disabled>
                      Learn More
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3 */}
        {activeTab === 3 && (
          <div className="tab-placeholder">
            <h3>Tab 3 Content</h3>
            <p>Insert your additional information here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
