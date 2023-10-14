import { useContext } from "react"
import { TasksContext } from "../contexts/TasksProvider"
import { BASEURL } from "../utilities/baseUrl"
import CompletedTask from "./CompletedTask"
import NoTask from "./NoTask"
import Tasks from "./Tasks"
console.log(BASEURL)

export default function AllTasks() {
    
    const {tasks, setTasks} = useContext(TasksContext) 
  
    const handleAddTask = event => {
        event.preventDefault()
        const task = event.target.task.value;
        const taskInfo = {
            taskName: task,
            isCompleted: false,
            time: new Date().toUTCString()
        }
        event.target.reset()
        
        fetch(`${BASEURL}/task`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    taskInfo._id = data.insertedId
                    setTasks([...tasks, taskInfo])
                }
            })
    }
  return (
    <div className="min-h-[85vh] px-6 flex items-center justify-center">
    <div className="min-w-72 bg-gray-200 p-6 rounded-lg">
          <div className="flex justify-between items-center">
              <h1 className="text-4xl font-bold">Todo</h1>
            <div className="text-center">
                <p className="text-lg font-bold">Today</p>
                  {new Date().toLocaleDateString()}
              </div>
        </div>
        
        <form onSubmit={handleAddTask}>
            <div className="flex gap-2 mt-3">
                <input type="text" name="task" placeholder="Add a New Task" className="input input-bordered w-full max-w-xs btn-sm" />
                <input type="submit" value="Add Task" className="btn btn-secondary btn-sm" />
            </div>
        </form>
        <div className="divider"></div>
            <div>
                {
                  tasks.length ?
                        <Tasks />
                      : <NoTask/>
                  }
                  <div className="divider"></div>
                  <h3 className="text-2xl font-bold">Completed Tasks</h3>
                  {
                      tasks.filter(task => task.isCompleted).map(task => <CompletedTask key={task._id} task={ task } />)
                  }
          </div>
    </div>
</div>
  )
}
