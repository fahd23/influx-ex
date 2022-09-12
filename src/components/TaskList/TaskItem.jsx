import React from "react";

export const TaskItem = ({ data }) => {
  const {
    list_name,
    image,
    description,
    is_lastest_task,
    is_planned,
    is_rejected,
    is_image_task,
  } = data;
  return (
    <div>
      <hr />
      <div className="flex gap-1rem padding-1rem ">
        <input type="checkbox" id="c1" name="c1" value="Wash my car" />
        {is_image_task && (
          <div className="flex flex-ai-center">
            <img className="image-task" src={image} alt={list_name} />
          </div>
        )}
        <div>
          <h4>{list_name}</h4>
          <p>{description}</p>
        </div>

        {is_rejected && (
          <div className="task-badge rejected-badge">Rejected</div>
        )}
        {is_planned && <div className="task-badge planned-badge">Planned</div>}
        {is_lastest_task && (
          <div className="task-badge latest-rank-badge">Latest Task</div>
        )}
      </div>
    </div>
  );
};
