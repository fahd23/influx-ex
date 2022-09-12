import React, { useState } from "react";
import "./chatbox.css";
import { FromMessage } from "./FromMessage";
import { ToMessage } from "./ToMessage";
import { appData } from "../../db/data";
import uuid from "react-uuid";

const ChatBox = () => {
  const [sendMsg, setSendMsg] = useState("");
  const chatMsg = appData.chat_message;

  const addMessageToData = () => {
    appData.chat_message.push({
      id: uuid(),
      person: {
        id: 2,
        name: "John Wick",
        avatar:
          "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?cs=srgb&dl=pexels-bruno-salvadori-2269872.jpg&fm=jpg",
        desc: "John Wick's Image",
      },
      message: sendMsg,
      send_at: "11:08 P.M | Now",
      is_from_message: false,
    });
    setSendMsg("");
  };

  return (
    <div className="chatbox-section">
      <div className="chatbox-header flex flex-ai-center gap-1rem padding-1rem">
        <i className="fa-solid fa-print"></i>
        <h3 className="header-title">Chat Box</h3>
      </div>
      <hr />
      <div className="padding-top-10px padding-bottom-10rem">
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
          value={sendMsg}
          onChange={(e) => setSendMsg(e.target.value)}
        />
        <button className="btn btn-send" onClick={addMessageToData}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
