import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.scss";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";

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
            Technikum Łączności nr 14 w Krakowie
          </h4>
          <h6>Informatician</h6>
          <p>
            <Link className="hire">Diploma</Link>{" "}
            <Link className="hire">Certificate</Link>
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
            <a href="https://aktru.pl/" className="hire">
              Website
            </a>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
