import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="errorPage">
      <div className="errorInfo">
        <h1>404</h1>
        <h3>Are You Lost???</h3>
        <Link to="/home">
          <button>return home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
