import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
export const TasksContext = React.createContext()

function TasksProvider({ children }) {
    const AllTasks = useLoaderData()
    const [tasks, setTasks] = useState(AllTasks)

    const taskInfo = {
        tasks,
        setTasks
    }
  return (
    <TasksContext.Provider value={taskInfo}>{children}</TasksContext.Provider>
  )
}

TasksProvider.propTypes = {
    children: PropTypes.node
}

export default TasksProvider
