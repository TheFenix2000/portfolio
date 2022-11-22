import React from "react";
import Project from "../Project/Project";
import "./Projects.scss";
import { shop, movies, crud, pando } from "../../common/assets/index";
function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projectList">
        <Project img={shop} name="Shop App" />
        <Project img={movies} name="Movies App" />
        <Project img={crud} name="CRUD App" />
        <Project img={pando} name="Pando Apartments" />
      </div>
    </div>
  );
}

export default Projects;
