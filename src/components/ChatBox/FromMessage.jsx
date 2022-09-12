import React from "react";

export const FromMessage = ({ data }) => {
  const { person, message, send_at } = data;
  const { avatar, desc } = person;
  return (
    <div className="from-message-section">
      <div className="pos-relative">
        <figure>
          <img className="profile-image" src={avatar} alt={desc} />
        </figure>
        <div className="badge"></div>
      </div>
      <div>
        <p className="message">{message}</p>
        <p className="chat-time">
          <i className="fa-solid fa-calendar-days"></i> {send_at}
        </p>
      </div>
    </div>
  );
};
