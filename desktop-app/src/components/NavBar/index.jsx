import React from "react";
import "./styles.css";
import Button from "../Button";

const NavBar = ({ className }) => {
  return (
    <header className={`flex space-between pl black-bg  ${className}`}>
      <h1 className="mont-font">Welcome</h1>
      <div className="flex space-between">
        <input type="file" name="file" accept=".csv" />
        <Button text="Upload" />
      </div>
    </header>
  );
};

export default NavBar;
