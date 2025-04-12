import React from "react";
import "./styles.css";
import Button from "../Button";
import { Link } from "react-router-dom";

const NavBar = ({ className }) => {
  return (
    <header className={`flex space-between pl black-bg  ${className}`}>
      <h1 className="mont-font">Welcome</h1>
      <div className="btn-container flex space-between">
        <input type="file" name="file" accept=".csv" />
        <Button text="Upload" />
        <Link to="/chat">
          <Button text="Chat"></Button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
