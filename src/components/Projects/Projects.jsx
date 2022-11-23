import React from "react";
import Project from "../Project/Project";
import { projects } from "../../helpers/Projects";
import "./Projects.scss";
function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projectList">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              img={project.img}
              name={project.name}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
