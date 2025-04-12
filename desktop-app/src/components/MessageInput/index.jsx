import React from "react";
import Button from "../Button";
import "./styles.css";

const MessageInput = () => {
  return (
    <div className="message-bar pl rounded-border">
      <div className="message-input flex space-around rounded-border">
        <input
          className="main-input grow rounded-border"
          type="text"
          placeholder="Enter a message..."
        />
        <Button className="send-btn" text="Send"></Button>
      </div>
    </div>
  );
};

export default MessageInput;
