import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../../helpers/Projects";
import "./ProjectDetail.scss";
function ProjectDetail() {
  const [loading, setLoading] = useState(true);
  const { projectID } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (projectID > projects.length || projectID < 0) {
      navigate("/404");
      setLoading(true);
    }
    setLoading(false);
  }, []);
  const project = projects[projectID];
  return (
    <>
      {!loading ? (
        <div className="projectDetail">
          <div className="detailContent">
            <h2>{project.name}</h2>
            <img src={project.img} alt="Project Image" />
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
      ) : null}
    </>
  );
}

export default ProjectDetail;
