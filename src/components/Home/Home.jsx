import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
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
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h4>Hi, I'm Michał Woś</h4>
        <div className="prompt">
          <h2>Frontend Developer</h2>
          <EmailIcon />
          <LinkedInIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
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
