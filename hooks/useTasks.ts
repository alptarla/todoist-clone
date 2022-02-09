import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function useTasks() {
  const taskContext = useContext(TaskContext)
  return { ...taskContext }
}

export default useTasks
