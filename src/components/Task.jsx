function Task({ task, handleDragStart }) {
  if (task.column === "done")
    return (
      <li
        draggable="true"
        onDragStart={(e) => handleDragStart(e, task)}
        className="cursor-grab text-white my-2 px-3 py-2 bg-green-700 rounded-md">
        {task.title}
      </li>
    );
  return (
    <li
      draggable="true"
      onDragStart={(e) => handleDragStart(e, task)}
      className="cursor-grab text-white my-2 px-3 py-2 bg-gray-700 rounded-md">
      {task.title}
    </li>
  );
}

export default Task;
