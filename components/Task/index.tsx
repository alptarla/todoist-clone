import classNames from 'classnames'
import React, { useState } from 'react'
import { ITask } from '../../context/TaskContext/types'

interface IProps {
  task: ITask
}

function Task({ task }: IProps) {
  const [isCompleted, setIsCompleted] = useState(false)

  const taskClassNames = classNames(
    'mb-5 flex max-w-[900px] cursor-pointer items-center gap-2 rounded border border-gray-100 p-3 shadow-sm transition hover:shadow-md',
    { 'bg-gray-50': isCompleted }
  )

  return (
    <div className={taskClassNames}>
      <input
        className="cursor-pointer"
        type="checkbox"
        name="task"
        defaultChecked={isCompleted}
        onChange={() => setIsCompleted(!isCompleted)}
      />
      <p
        className={classNames('truncate hover:text-clip', {
          'line-through': isCompleted
        })}
      >
        {task.task}
      </p>
      <small className="ml-auto text-gray-400">{task.date}</small>
    </div>
  )
}

export default Task
