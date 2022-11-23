import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import "./Footer.scss";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
function Footer() {
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
    <div className="footer">
      <div className="socialMedia">
        <BootstrapTooltip title="Github Profile">
          <a href="https://github.com/TheFenix2000">
            <GitHubIcon />
          </a>
        </BootstrapTooltip>
        <BootstrapTooltip title="Contact me">
          <Link to="/contact">
            <EmailIcon />
          </Link>
        </BootstrapTooltip>
      </div>
      <p>&copy; 2022 Michał Woś</p>
    </div>
  );
}

export default Footer;
