import React from "react";
import ChatHeader from "../../components/ChatHeader";
import MessageInput from "../../components/MessageInput";

const Chat = () => {
  return (
    <div className="flex column space-between full-height">
      <ChatHeader />
      <MessageInput />
    </div>
  );
};

export default Chat;
