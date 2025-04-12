import React from "react";
import "./styles.css";
import Button from "../Button";
import { Link } from "react-router-dom";

const ChatHeader = ({ className }) => {
  return (
    <header className={`flex space-between pl black-bg  ${className}`}>
      <h1 className="mont-font">Chat</h1>
      <div className="btn-container flex space-between"></div>
      <Link to="/">
        <Button text="Back" />
      </Link>
    </header>
  );
};

export default ChatHeader;
