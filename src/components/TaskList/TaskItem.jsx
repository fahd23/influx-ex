import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const TaskItem = ({ data, index }) => {
  const {
    id,
    list_name,
    image,
    description,
    is_lastest_task,
    is_planned,
    is_rejected,
    is_image_task,
  } = data;
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          className="task-items flex gap-1rem padding-1rem"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
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
          {is_planned && (
            <div className="task-badge planned-badge">Planned</div>
          )}
          {is_lastest_task && (
            <div className="task-badge latest-rank-badge">Latest Task</div>
          )}
        </div>
      )}
    </Draggable>
  );
};
