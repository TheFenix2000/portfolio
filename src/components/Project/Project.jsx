import React, { useState } from "react";
import "./Project.scss";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
function Project({ img, name }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="project">
      <div className="projectBgImage">
        {loaded ? null : (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </Box>
        )}
        <img
          src={img}
          alt="project img"
          onLoad={() => setLoaded(true)}
          style={loaded ? {} : { display: "none" }}
        />
      </div>
      <h2>{name}</h2>
    </div>
  );
}

export default Project;
