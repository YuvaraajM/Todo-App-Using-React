import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={headStyle}>
      <h2>TodoList</h2>
      <Link style={linkStyles} className="links" to="/">
        Home
      </Link>
      <span>&nbsp;|&nbsp;</span>
      <Link style={linkStyles} className="links" to="/about">
        {" "}
        About
      </Link>
    </div>
  );
}

const headStyle = {
  backgroundColor: "#333",
  color: "white",
  textAlign: "center",
  padding: "10px",
};

const linkStyles = {
  color: "white",
  textDecoration: "none",
  outline:'none'
};
