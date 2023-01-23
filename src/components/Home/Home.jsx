import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Hexagon from "react-hexagon";
import {
  react,
  redux,
  html,
  css,
  bootstrap,
  mu5,
  node,
  npm,
  sass,
  express,
  mongo,
  hbs,
  php,
  mysql,
  git,
  api,
  mongoose,
} from "../../common/assets/index";
import "./Home.scss";
import { Link } from "react-router-dom";
function Home() {
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "rgb(225, 152, 26)",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "rgb(225, 152, 26)",
    },
  }));

  return (
    <div className="home">
      <div className="about">
        <div className="left">
          <h3>
            Hi, I'm <span>Michał Woś</span>
          </h3>
          <div className="prompt">
            <h2 className="hire">Frontend Developer</h2>
            <div className="icons">
              <BootstrapTooltip title="Github Profile">
                <a href="https://github.com/TheFenix2000">
                  <GitHubIcon />
                </a>
              </BootstrapTooltip>
              <BootstrapTooltip title="LinkedIn Profile">
                <a href="https://www.linkedin.com/in/michal-wos-frontend-dev">
                  <LinkedInIcon />
                </a>
              </BootstrapTooltip>
              <BootstrapTooltip title="Contact me">
                <Link to="/contact">
                  <EmailIcon />
                </Link>
              </BootstrapTooltip>
              <BootstrapTooltip title="Résumé">
                <a href="./CV_Michal_Wos.pdf">
                  <AttachFileIcon />
                </a>
              </BootstrapTooltip>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
      <div className="skills">
        <div className="title">
          <h1>Skills</h1>
          <span>&nbsp;</span>
        </div>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <div className="hexes">
              <div className="hex">
                <Hexagon
                  style={{
                    stroke: "#c77e00",
                  }}
                  backgroundImage={react}
                  backgroundScale={1}
                />
                <h5>React</h5>
              </div>
              <div className="hex">
                <Hexagon
                  style={{
                    stroke: "#c77e00",
                  }}
                  backgroundImage={redux}
                  backgroundScale={1}
                />
                <h5>Redux</h5>
              </div>
              <div className="hex">
                <Hexagon
                  style={{
                    stroke: "#c77e00",
                  }}
                  backgroundImage={html}
                  backgroundScale={1}
                />
                <h5>HTML</h5>
              </div>
              <div className="hex">
                <Hexagon
                  style={{
                    stroke: "#c77e00",
                  }}
                  backgroundImage={css}
                  backgroundScale={1}
                />
                <h5>CSS</h5>
              </div>
              <div className="hex">
                <Hexagon
                  style={{
                    stroke: "#c77e00",
                  }}
                  backgroundImage={sass}
                  backgroundScale={1}
                />
                <h5>SASS</h5>
              </div>
              <div className="hex">
                <Hexagon
                  style={{
                    stroke: "#c77e00",
                  }}
                  backgroundImage={bootstrap}
                  backgroundScale={1}
                />
                <h5>Bootstrap</h5>
              </div>
              <div className="hex">
                <Hexagon
                  style={{
                    stroke: "#c77e00",
                  }}
                  backgroundImage={mu5}
                  backgroundScale={1}
                />
                <h5>MUI</h5>
              </div>
              <div className="hex">
                <Hexagon
                  style={{
                    stroke: "#c77e00",
                  }}
                  backgroundImage={npm}
                  backgroundScale={1}
                />
                <h5>Npm</h5>
              </div>
            </div>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <div className="hexes">
              <div className="hex">
                <Hexagon
                  style={{
                    stroke: "#c77e00",
                  }}
                  backgroundImage={node}
                  backgroundScale={1}
                />
                <h5>Node</h5>
              </div>
              <div className="hex">
                <Hexagon
                  style={{
                    stroke: "#c77e00",
                  }}
                  backgroundImage={express}
                  backgroundScale={1}
                />
                <h5>Express</h5>
              </div>
              <div className="hex">
                <Hexagon
                  style={{
                    stroke: "#c77e00",
                  }}
                  backgroundImage={mongo}
                  backgroundScale={1}
                />
                <h5>MongoDB</h5>
              </div>
              <div className="hex">
                <Hexagon
                  style={{
                    stroke: "#c77e00",
                  }}
                  backgroundImage={hbs}
                  backgroundScale={1}
                />
                <h5>Handlebars</h5>
              </div>
              <div className="hex">
                <Hexagon
                  style={{
                    stroke: "#c77e00",
                  }}
                  backgroundImage={php}
                  backgroundScale={1}
                />
                <h5>PHP</h5>
              </div>
              <div className="hex">
                <Hexagon
                  style={{
                    stroke: "#c77e00",
                  }}
                  backgroundImage={mysql}
                  backgroundScale={1}
                />
                <h5>MySQL</h5>
              </div>
            </div>
          </li>
          <li className="item">
            <h2>Other</h2>
            <div className="hexes">
              <div className="hex">
                <Hexagon
                  style={{
                    stroke: "#c77e00",
                  }}
                  backgroundImage={git}
                  backgroundScale={1}
                />
                <h5>Git</h5>
              </div>
              <div className="hex">
                <Hexagon
                  style={{
                    stroke: "#c77e00",
                  }}
                  backgroundImage={api}
                  backgroundScale={1}
                />
                <h5>API's</h5>
              </div>
              <div className="hex">
                <Hexagon
                  style={{
                    stroke: "#c77e00",
                  }}
                  backgroundImage={mongoose}
                  backgroundScale={1}
                />
                <h5>Mongoose</h5>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
