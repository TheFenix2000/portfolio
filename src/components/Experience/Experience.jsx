import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import React from "react";
import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.scss";

function Experience() {
  return (
    <div className="experience">
      <h2>Education & Work Experience</h2>
      <VerticalTimeline lineColor="#c77e00">
        <VerticalTimelineElement
          date="2018 - 2022"
          iconStyle={{ background: "#c77e00" }}
          icon={<SchoolIcon />}
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#343434" }}
        >
          <h4
            className="vertical-timeline-element-title"
            style={{ color: "#c77e00" }}
          >
            Secondary Technical School of Communication no. 14 in Cracow
          </h4>
          <h6>IT technician</h6>
          <p>
            <Link className="hire" to={"/docs/diplomas/0"}>
              Diploma
            </Link>{" "}
            <Link className="hire" to={"/docs/certificates/0"}>
              Certificate
            </Link>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2022 - present"
          iconStyle={{ background: "#c77e00" }}
          icon={<SchoolIcon />}
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#343434" }}
        >
          <h4
            className="vertical-timeline-element-title"
            style={{ color: "#c77e00" }}
          >
            Cracow University of Economics
          </h4>
          <h6>Applied Informatics 1st Year</h6>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Jun - Nov 2022"
          iconStyle={{ background: "#633f00" }}
          icon={<WorkIcon />}
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#343434" }}
        >
          <h4
            className="vertical-timeline-element-title"
            style={{ color: "#c77e00" }}
          >
            Aktru
          </h4>
          <h6>Webmaster</h6>
          <p>
            <p>
              Domains administration, creating webpages for clients and
              maintaining active ones.
            </p>
            <a href="https://aktru.pl/" rel="noreferrer" target="_blank" className="hire">
              Website
            </a>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Apr 2023 - present"
          iconStyle={{ background: "#633f00" }}
          icon={<WorkIcon />}
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#343434" }}
        >
          <h4
            className="vertical-timeline-element-title"
            style={{ color: "#c77e00" }}
          >
            Synapstry
          </h4>
          <h6>Frontend Developer</h6>
          <p>
            <p>
            As a Frontend Developer I'm building and maintaining features in our software application. I use TypeScript daily and write tests to ensure code quality.            </p>
            <a href="https://synapstry.com/" rel="noreferrer" target="_blank" className="hire">
              Website
            </a>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
