import React from "react";

export const FromMessage = () => {
  return (
    <div className="from-message-section">
      <div className="pos-relative">
        <img
          className="profile-image"
          src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?cs=srgb&dl=pexels-bruno-salvadori-2269872.jpg&fm=jpg"
          alt="profile-image"
        />
        <div className="badge"></div>
      </div>
      <div>
        <p className="message">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          quam, rem, tempora odio illum doloribus voluptas ullam eveniet
        </p>
        <p className="chat-time">
          <i class="fa-solid fa-calendar-days"></i> 11:01 P.M | Yesterday
        </p>
      </div>
    </div>
  );
};
