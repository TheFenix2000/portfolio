import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import "./Docs.scss";
import { docs } from "../../helpers/Docs";
import { CircularProgress } from "@mui/material";

function Docs() {
  const { category, docID } = useParams();
  const doc = docs[`${category}`][docID];
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="docs">
      <h2>{doc.name}</h2>
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
        src={doc.img}
        alt={doc.name}
        onLoad={() => setLoaded(true)}
        style={loaded ? {} : { display: "none" }}
      />
    </div>
  );
}

export default Docs;
