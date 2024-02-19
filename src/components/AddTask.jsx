import { useState } from "react";

function AddTask({ setTasks, tasks, name }) {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!task.trim().length) {
      return;
    }
    setTasks((tasks) => [
      ...tasks,
      {
        title: task,
        id: Math.random().toString(),
        column: name,
      },
    ]);
    setIsOpen(false);
  }
  return (
    <>
      {isOpen ? (
        <>
          <form onSubmit={handleSubmit}>
            <textarea
              name="task"
              placeholder="Add new task..."
              className="rounded-lg px-4 py-1"
              onChange={(e) => setTask(e.target.value)}
            />
            <div>
              <button
                className="bg-red-400 py-2 px-4 rounded-lg"
                onClick={() => setIsOpen(false)}>
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-400 py-2 px-4 ml-3 rounded-lg">
                + Add
              </button>
            </div>
          </form>
        </>
      ) : (
        <button
          className="bg-zinc-600 py-2 px-4 rounded-lg text-white"
          onClick={() => setIsOpen(true)}>
          + Add Task
        </button>
      )}
    </>
  );
}

export default AddTask;
