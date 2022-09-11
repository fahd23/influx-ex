import "./App.css";
import ChatBox from "./components/ChatBox/ChatBox";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="content-section">
        <TaskList />
        <ChatBox />
      </div>
    </div>
  );
}

export default App;
