import useTasks from '../hooks/useTasks'

function Home() {
  const { tasks } = useTasks()
  console.log('tasks :>> ', tasks)

  return <div className="h-full w-full p-5">Content</div>
}

export default Home
