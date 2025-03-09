import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : ["No Task is Added"];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    if (taskText.trim() !== "") {
      const newTask = { id: Date.now(), text: taskText, completed: false };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map((task) => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="container">
      <div className="task-tracker">
        <h2 className="title">Task Tracker</h2>
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
      </div>
    </div>
  );
};

export default App;
