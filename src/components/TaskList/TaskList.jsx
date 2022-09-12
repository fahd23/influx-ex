import React from "react";
import "./tasklist.css";

const TaskItem = () => {
  return (
    <div>
      <hr />
      <div className="flex gap-1rem padding-1rem ">
        <input type="checkbox" id="c1" name="c1" value="Wash my car" />
        <div>
          <h4>Wash my car </h4>
          <p>Written by bob</p>
        </div>
        <div className="task-badge rejected-badge">Rejected</div>
        <div className="task-badge planned-badge">Planned</div>
        <div className="task-badge latest-rank-badge">Latest Task</div>
      </div>
    </div>
  );
};
const TaskList = () => {
  return (
    <section className="tasklist-section">
      <div className="flex flex-ai-center gap-1rem padding-1rem tasklist-header">
        <i className="fa-solid fa-database db-icon"></i>
        <h3 className="header-title">Tasks List</h3>
      </div>
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <hr />
      <div className="tasklist-footer flex gap-1rem padding-1rem">
        <button className="btn btn-cancel">Cancel</button>
        <button className="btn btn-save">Save</button>
      </div>
    </section>
  );
};

export default TaskList;
