import React from "react";
import "./styles.css";

const ChatHeader = ({ className }) => {
  return (
    <header className={`flex space-between pl black-bg  ${className}`}>
      <h1 className="mont-font">Chat</h1>
      <div className="btn-container flex space-between"></div>
    </header>
  );
};

export default ChatHeader;
