import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <EmailIcon />
        <LinkedInIcon />
        <GitHubIcon />
      </div>
      <p>
        &copy; 2022 Michał Woś | Inspired by{" "}
        <Link to="https://https://github.com/machadop1407">Pedro Tech </Link>
      </p>
    </div>
  );
}

export default Footer;
