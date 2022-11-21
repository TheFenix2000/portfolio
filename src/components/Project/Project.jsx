import React from "react";
import "./Project.scss";
function Project({ img, name }) {
  return (
    <div className="project">
      <div className="projectBgImage">
        <img src={img} alt="project img" />
      </div>
      <h2>{name}</h2>
    </div>
  );
}

export default Project;
