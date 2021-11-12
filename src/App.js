import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home";
import Project from "./pages/Project";
import { ProjectsContext } from "./projectsContext";

function App() {
  const { projects } = useContext(ProjectsContext)

  return (
    <Router>
      <Routes>
        {projects.map((project) => {
          return (
            <Route exact path={`/${project.title.replace(/\s/g, '')}`} 
            element={<Project title={project.title} project={project}/>}
            />
              
          )
        })}

        <Route exact path="/" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
