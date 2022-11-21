import React from "react";
import Project from "../Project/Project";
import "./Projects.scss";
import { shop, movies } from "../../common/assets/index";
function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projectList">
        <Project img={shop} name="Shop App" />
        <Project img={movies} name="Movies App" />
      </div>
    </div>
  );
}

export default Projects;
