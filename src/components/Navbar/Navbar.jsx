import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import ClearIcon from "@mui/icons-material/Clear";
import { logo } from "../../common/assets/index";
import "./Navbar.scss";
function Navbar() {
  const location = useLocation();
  const [expand, setExpand] = useState(false);
  useEffect(() => {
    setExpand(false);
  }, [location]);
  return (
    <>
      <div className="logo-hidden">
        <Link to="/">
          <img style={{ height: 50 }} src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar sticky-top" id={expand ? "open" : "close"}>
        <div className="toggleButton">
          <button
            onClick={() => {
              setExpand((prev) => !prev);
            }}
          >
            {expand ? <ClearIcon /> : <ReorderIcon />}
          </button>
        </div>
        <div className="logo">
          <Link to="/">
            <img style={{ height: 70 }} src={logo} alt="logo" />
          </Link>
        </div>
        <div className="links">
          <Link
            style={{
              color: location.pathname === "/" ? "#E1981A" : "#944B00",
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{
              color: location.pathname === "/projects" ? "#E1981A" : "#944B00",
            }}
            to="/projects"
          >
            Projects
          </Link>
          <Link
            style={{
              color:
                location.pathname === "/experience" ? "#E1981A" : "#944B00",
            }}
            to="/experience"
          >
            Experience
          </Link>
          <Link
            className="hire"
            style={{
              color: location.pathname === "/contact" ? "#E1981A" : "#944B00",
            }}
            to="/contact"
          >
            Hire me
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
