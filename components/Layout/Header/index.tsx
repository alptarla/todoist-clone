import Image from 'next/image'
import { useState } from 'react'
import { Moon, Plus } from 'react-feather'

function Header() {
  const [shouldShowMain, setShouldShowMain] = useState(false)
  const [showQuickAddTask, setShowQuickAddTask] = useState(false)

  const handleAdd = () => {
    setShouldShowMain(true)
    setShowQuickAddTask(true)
  }

  return (
    <div className="bg-red-500 text-white">
      <div className="container mx-auto py-5">
        <nav className="flex items-center gap-5 justify-between">
          <Image src="/images/logo.png" alt="Todoist" width="30" height="30" />
          <div>
            <button type="button" onClick={handleAdd} className="mr-5">
              <Plus />
            </button>
            <button type="button" onClick={() => {}} title="Toggle app theme">
              {/* <Sun /> */}
              <Moon />
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
