import React from "react";
import "./tasklist.css";
import { TaskItem } from "./TaskItem";
import { Droppable } from "react-beautiful-dnd";

const TaskList = ({ data }) => {
  return (
    <section className="tasklist-section">
      <Droppable droppableId="tasklist">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <div className="flex flex-ai-center gap-1rem padding-1rem tasklist-header">
              <i className="fa-solid fa-database db-icon"></i>
              <h3 className="header-title">Tasks List</h3>
            </div>
            {data.map((item, index) => (
              <TaskItem data={item} index={index} key={item.id} />
            ))}
            <div className="tasklist-footer flex gap-1rem padding-1rem">
              <button className="btn btn-cancel">Cancel</button>
              <button
                className="btn btn-save"
                onClick={() => {
                  data.map((item) => console.log(item.list_name));
                }}
              >
                Save
              </button>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </section>
  );
};

export default TaskList;
