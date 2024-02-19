import AddTask from "./AddTask";
import Task from "./Task";

function Column({ title, name, tasks, setTasks, textColor, children }) {
  const taskByName = tasks?.filter((task) => task.column === name);
  function handleDragStart(e, task) {
    e.dataTransfer.setData("taskId", task.id);
  }
  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDragEnd(e) {
    const taskId = e.dataTransfer.getData("taskId");
    const updatedTask = tasks.find((task) => task.id === taskId);
    updatedTask.column = name;
    const restOfTask = tasks.filter((task) => task.id !== taskId);
    setTasks([...restOfTask, updatedTask]);
  }
  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDragEnd}
      className="h-full w-1/5">
      <div className="flex justify-between items-center mb-5 bg-white px-4 py-2 rounded-md">
        <h2 className={`text-md font-bold ${textColor}`}>{title}</h2>
        {children}
      </div>
      <ul
        className={`${
          !taskByName?.length
            ? "flex justify-center items-center text-lg font-bold"
            : ""
        } h-4/6 bg-gray-400 p-2 rounded-lg mb-5 overflow-auto`}>
        {!taskByName?.length ? (
          <p>No task to do!</p>
        ) : (
          taskByName.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                handleDragStart={handleDragStart}
              />
            );
          })
        )}
      </ul>
      {name === "done" ? null : (
        <AddTask setTasks={setTasks} tasks={tasks} name={name} />
      )}
    </div>
  );
}

export default Column;
