import React from "react";
import "./chatbox.css";
import { FromMessage } from "./FromMessage";
import { ToMessage } from "./ToMessage";
import { appData } from "../../db/data";
const ChatBox = () => {
  const chatMsg = appData.chat_message;

  return (
    <div className="chatbox-section">
      <div className="chatbox-header flex flex-ai-center gap-1rem padding-1rem">
        <i className="fa-solid fa-print"></i>
        <h3 className="header-title">Chat Box</h3>
      </div>
      <hr />
      <div className="padding-top-10px">
        {chatMsg.map((item) =>
          item.is_from_message ? (
            <FromMessage data={item} key={item.id} />
          ) : (
            <ToMessage data={item} key={item.id} />
          )
        )}
      </div>
      <div className="chatbox-footer flex gap-1rem padding-1rem">
        <input
          className="msg-input"
          type="text"
          placeholder="Write here and hit enter"
        />
        <button className="btn btn-send">Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
