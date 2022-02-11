import { useEffect } from 'react'
import Task from '../components/Task'
import useTasks from '../hooks/useTasks'

function Home() {
  const { tasks, getAllTasks, isLoading } = useTasks()

  useEffect(() => {
    getAllTasks()
  }, [])

  return (
    <div className="h-full w-full p-5">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}

export default Home
