import Image from 'next/image'
import { useState } from 'react'
import { Moon, Plus } from 'react-feather'
import AddTask from '../../AddTask'

function Header() {
  const [showAddTask, setShowAddTask] = useState(false)

  const handleAdd = () => {
    setShowAddTask(true)
  }

  return (
    <div className="bg-red-500 text-white">
      <div className="container mx-auto py-5">
        <nav className="flex items-center justify-between gap-5">
          <Image src="/images/logo.png" alt="Todoist" width="30" height="30" />
          <div>
            <button type="button" onClick={handleAdd} className="mr-5">
              <Plus />
            </button>
            <button type="button" onClick={() => {}} title="Toggle app theme">
              <Moon />
            </button>
          </div>
        </nav>
      </div>
      {showAddTask && <AddTask setShowAddTask={setShowAddTask} />}
    </div>
  )
}

export default Header
