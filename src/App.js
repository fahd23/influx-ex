import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import { Navbar, Header, TaskList, ChatBox } from "./components";
import { appData } from "./db/data";

function App() {
  const [taskList, setTaskList] = useState(appData.tasklist);
  const onDragEndHandler = (result) => {
    if (!result.destination) return;

    const items = Array.from(taskList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTaskList(items);
  };
  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <div className="App">
        <Navbar />
        <Header />
        <div className="content-section">
          <TaskList data={taskList} />
          <ChatBox />
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
