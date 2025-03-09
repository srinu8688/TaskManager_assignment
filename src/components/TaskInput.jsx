import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="task-input-field"
      />
      <button type="submit" className="add-button">
        <BsPlusCircle size={15} />
        <span >Add Task</span>
      </button>
    </form>
  );
};

export default TaskInput;


