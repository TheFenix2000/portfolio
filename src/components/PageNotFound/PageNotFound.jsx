import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.scss";

function PageNotFound() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h1 className="display-1 fw-bold primary">404</h1>
          <p className="fs-3">
            {" "}
            <span className="primary-dark">Opps!</span> Page not found.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
          <Link to="/" className="btn btn-outline-dark buttonStyle">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
