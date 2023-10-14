/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TasksContext } from "../contexts/TasksProvider";
import { BASEURL } from "../utilities/baseUrl";


export default function CompletedTask({ task }) {
  const { tasks, setTasks } = useContext(TasksContext) 

  const handleCheckbox = (e, id) => {
    const isCompleted = e.target.checked;
    fetch(`${BASEURL}/done`, {
        method: 'put',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({id, isCompleted})
    })
        .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          const findObj = tasks.find(i => i._id === id)
          findObj.isCompleted = isCompleted;
          const remaining = tasks.filter(i => i._id !== id)
          setTasks([...remaining, findObj])
      }
        })
    
}

  const handleDelete = id => {
    fetch(`${BASEURL}/task/${id}`, {
        method: 'delete'
    })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                const remaining = tasks.filter(task => task._id !== id)
                setTasks(remaining)
            }
        })
}
  return (
    <div className="flex justify-between my-2">
          <div className="flex gap-1 items-center">
            <input defaultChecked  type="checkbox" onChange={()=> handleCheckbox(event, task?._id)} name='checkbox' className="checkbox" />
            <label htmlFor="checkbox">{task?.taskName}</label>
          </div>
          <div>
              <button onClick={()=> handleDelete(task?._id)} className="btn btn-ghost btn-sm"><AiFillDelete className='text-xl'/></button>
          </div>
    </div>
  )
}
