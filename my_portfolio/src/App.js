import React from "react";
import Box from "@mui/material/Box";
import NavBar from "./components/NavBar";
import SkillsSection from "./components/SkillsSection";
import Projects from "./components/Projects";
import Form from "./components/Form";
import SubscribeSection from "./components/SubscribeSection";
import Project1Info from "./links/Project1Info";
import Project2Info from "./links/Project2Info";
import Project3Info from "./links/Project3Info";
import Project4Info from "./links/Project4Info";
import Project5Info from "./links/Project5Info";
import About from "./components/About.jsx";
import Resume from "./components/Resume.jsx";
import ProjectTabTwoOneOne from "./links/ProjectTabTwoOneOne.jsx";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
        {/* Layout for the homepage */}
        <Route
          path="/"element={
            <div>
              <NavBar />
              <SkillsSection />
              <Box>
                <Projects />
              </Box>
              <Box>
                <Form />
                <SubscribeSection />
              </Box>
            
            </div>
          } />

        {/* Route for Project1Info */}
        <Route path="/project1" element={<Project1Info />} />
        <Route path="/project2" element={<Project2Info />} />
        <Route path="/project3" element={<Project3Info/>} />
        <Route path="/project4" element={<Project4Info/>} />
        <Route path="/project5" element={<Project5Info/>} />  
        <Route path="/project2_1_1" element={<ProjectTabTwoOneOne/>} /> 

        {/* Route for nav links */}
        <Route path="/about" element={<About title="About Me.." CustomNavbar= {true}isRequired title2= "What i do.." title3="Skills.." />}  />
         <Route path="/resume" element={<Resume />} />

              
      </Routes>
    </Router>
  );
}


export default App;