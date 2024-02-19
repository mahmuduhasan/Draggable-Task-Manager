import { useState } from "react";
import { FaFire, FaTrash } from "react-icons/fa";
function Delete({ tasks, setTasks }) {
  const [active, setActive] = useState(false);
  function handleDragOver(e) {
    e.preventDefault();
    setActive(true);
  }
  function handleDragLeave(e) {
    setActive(false);
  }
  function handleDragEnd(e) {
    const taskId = e.dataTransfer.getData("taskId");
    setActive(false);
    const afterDeletedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(afterDeletedTasks);
  }
  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDragEnd}
      onDragLeave={handleDragLeave}
      className={`w-1/6  h-1/6 ${
        active ? "bg-red-700" : "bg-gray-700"
      } rounded-lg absolute right-5 bottom-5 flex justify-center items-center`}>
      {active ? (
        <FaFire size={50} color="#ef1e1e" className="animate-bounce" />
      ) : (
        <FaTrash size={50} color="#303134" />
      )}
    </div>
  );
}

export default Delete;
