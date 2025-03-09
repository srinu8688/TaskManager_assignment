import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
};

export default TaskList;
