import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../helpers/Projects";
import "./ProjectDetail.scss";
function ProjectDetail() {
  const { projectID } = useParams();
  const project = projects[projectID];
  return (
    <>
      <div className="projectDetail">
        <div className="detailContent">
          <h2>{project.name}</h2>
          <img src={project.img} alt={project.name} />
          <div className="skills">
            <div className="skillsTitle">Skills:</div>
            {project.skills.map((skill) => {
              return (
                <div key={`${project.name}-${skill}`} className="skill">
                  {skill}
                </div>
              );
            })}
          </div>
          <div className="buttons">
            {project.buttons.map((button) => {
              return (
                <a
                  key={`${project.name}-${button.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hire button"
                  href={button.url}
                >
                  {button.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;
