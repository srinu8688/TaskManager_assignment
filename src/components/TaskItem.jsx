import { BsCheckCircle, BsTrash } from "react-icons/bs";

const TaskItem = ({ task, deleteTask, toggleComplete }) => {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleComplete(task.id)} className="task-text">
        {task.text}
      </span>
      <div className="icons">
        <button className="complete-btn" onClick={() => toggleComplete(task.id)}>
          <BsCheckCircle size={20} />
        </button>
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>
          <BsTrash size={20} />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;


