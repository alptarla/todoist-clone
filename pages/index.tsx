import { useEffect } from 'react'
import PageLoader from '../components/PageLoader'
import Task from '../components/Task'
import useTasks from '../hooks/useTasks'

function Home() {
  const { tasks, getTasks, isLoading, updateTask, filters } = useTasks()

  useEffect(() => {
    getTasks(filters)
  }, [filters])

  const renderContent = () => {
    if (isLoading && !tasks.length) return <PageLoader />
    else if (!tasks.length)
      return (
        <div className="rounded bg-yellow-400 p-3 text-white">
          {"You don't have any tasks yet!"}
        </div>
      )

    return tasks.map((task) => <Task key={task.id} task={task} updateTask={updateTask} />)
  }

  return (
    <div className="h-full border bg-white p-5">
      <div className="my-10 mx-auto h-full max-w-[900px]">{renderContent()}</div>
    </div>
  )
}

export default Home
