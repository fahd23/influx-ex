import React from "react";
import "./chatbox.css";
import { FromMessage } from "./FromMessage";
import { ToMessage } from "./ToMessage";

const ChatBox = () => {
  return (
    <div className="chatbox-section">
      <div className="chatbox-header flex flex-ai-center gap-1rem padding-1rem">
        <i className="fa-solid fa-print"></i>
        <h3 className="header-title">Chat Box</h3>
      </div>
      <hr />
      <div className="padding-10px">
        <FromMessage />
        <ToMessage />
        <FromMessage />
        <ToMessage />
        <FromMessage />
        <ToMessage />
        <div className="chatbox-footer flex gap-1rem padding-1rem">
          <input
            className="msg-input"
            type="text"
            placeholder="Write here and hit enter"
          />
          <button className="btn btn-send">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
