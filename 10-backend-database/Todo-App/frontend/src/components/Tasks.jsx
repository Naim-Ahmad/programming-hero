/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TasksContext } from "../contexts/TasksProvider";
import Task from "./Task";

export default function Tasks() {
  const { tasks } = useContext(TasksContext)
  console.log(tasks)
  return (
    <div>
          {tasks?.filter(task => !task.isCompleted).map(task=> <Task key={task._id} task={task} />)}
    </div>
  )
}
