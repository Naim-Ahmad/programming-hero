/* eslint-disable react/prop-types */
import { useContext, useRef, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { GrFormEdit } from 'react-icons/gr'
import { MdOutlineDoneOutline } from 'react-icons/md'
import { TasksContext } from '../contexts/TasksProvider'
import { BASEURL } from '../utilities/baseUrl'


export default function Task({ task }) {
    const { tasks, setTasks } = useContext(TasksContext) 
    const [edit, setEdit] = useState(false)
    const updateTaskRef = useRef()
    const taskLabel = useRef()

    const handleEdit = () => {
        setEdit(true)
    }

    const handleDone = id =>{
        setEdit(false)
        const taskName = updateTaskRef.current.value;
        fetch(`${BASEURL}/task`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({taskName, id})
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    const findObj = tasks.find(task => task._id === id)
                    findObj.taskName = taskName
                    const remaining = tasks.filter(task => task._id !== id)
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
  return (
      <div className="flex justify-between my-2">
          <div className="flex gap-1 items-center">
              {
                  edit ? <input ref={updateTaskRef} defaultValue={task?.taskName} type="text" name="update-task" placeholder="Add a New Task" className="input input-bordered w-full max-w-xs btn-sm" />
                      :
                      <>
                        <input  type="checkbox" onChange={()=> handleCheckbox(event, task?._id)} name='checkbox' className="checkbox" />
                        <label htmlFor="checkbox" ref={taskLabel}>{task?.taskName}</label>
                      </>
              }
            
          </div>
          <div>
              {
                  edit ? <button className='btn btn-primary btn-sm' onClick={()=> handleDone(task?._id)}><MdOutlineDoneOutline className='text-xl'/></button>: <button className='btn btn-ghost btn-sm' onClick={handleEdit}><GrFormEdit className='text-xl'/></button>
              }
              <button onClick={()=> handleDelete(task?._id)} className="btn btn-ghost btn-sm"><AiFillDelete className='text-xl'/></button>
          </div>
    </div>
  )
}
