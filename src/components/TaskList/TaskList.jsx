import React from "react";
import "./tasklist.css";
import { appData } from "../../db/data";
import { TaskItem } from "./TaskItem";

const TaskList = () => {
  const taskList = appData.tasklist;
  return (
    <section className="tasklist-section">
      <div className="flex flex-ai-center gap-1rem padding-1rem tasklist-header">
        <i className="fa-solid fa-database db-icon"></i>
        <h3 className="header-title">Tasks List</h3>
      </div>
      {taskList.map((item) => (
        <TaskItem data={item} key={item.id} />
      ))}
      <hr />
      <div className="tasklist-footer flex gap-1rem padding-1rem">
        <button className="btn btn-cancel">Cancel</button>
        <button className="btn btn-save">Save</button>
      </div>
    </section>
  );
};

export default TaskList;
