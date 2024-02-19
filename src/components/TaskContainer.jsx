import Column from "./Column";
import Delete from "./Delete";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { GiTimeBomb } from "react-icons/gi";
import { MdMoreTime } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { TbCalendarTime } from "react-icons/tb";
import { AiOutlineFileDone } from "react-icons/ai";
function TaskContainer() {
  const [tasks, setTasks] = useLocalStorage([], "tasks");

  return (
    <div className="h-screen w-full flex justify-around p-5 bg-neutral-900 gap-5">
      <Column
        title="Urgent"
        name="do"
        tasks={tasks}
        setTasks={setTasks}
        textColor="text-red-500">
        <GiTimeBomb size="30" color="#EF4444" />
      </Column>
      <Column
        title="Need more time"
        name="defer"
        tasks={tasks}
        setTasks={setTasks}
        textColor="text-yellow-500">
        <MdMoreTime size="30" color="#eab308" />
      </Column>
      <Column
        title="Flexible scheduling"
        name="delegate"
        tasks={tasks}
        setTasks={setTasks}
        textColor="text-blue-500">
        <TbCalendarTime size="30" color="#3b82f6" />
      </Column>
      <Column
        title="In progress"
        name="doing"
        tasks={tasks}
        setTasks={setTasks}
        textColor="text-purple-500">
        <GiSandsOfTime size="30" color="#a855f7" />
      </Column>
      <Column
        title="Complete"
        name="done"
        tasks={tasks}
        setTasks={setTasks}
        textColor="text-green-500">
        <AiOutlineFileDone size="30" color="#22c55e" />
      </Column>
      <Delete tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default TaskContainer;
