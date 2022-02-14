import classNames from 'classnames'
import React, { useState } from 'react'
import { ITask } from '../../context/TaskContext/types'
import TaskModal from '../TaskModal'

interface IProps {
  task: ITask
  updateTask: (id: string, fields: any) => void
  removeTask: (id: string) => void
}

function Task({ task, updateTask, removeTask }: IProps) {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted || false)
  const [isOpenTaskModal, setIsOpenTaskModal] = useState(false)

  const toggleIsCompleted = () => {
    setIsCompleted(!isCompleted)
    updateTask(task.id, { isCompleted: !isCompleted })
  }

  const taskClassNames = classNames(
    'mb-5 flex items-center gap-2 rounded border border-gray-100 p-3 shadow-sm transition hover:shadow-md',
    { 'bg-gray-50': isCompleted }
  )

  return (
    <>
      <div className={taskClassNames}>
        <input
          className="cursor-pointer"
          type="checkbox"
          name="task"
          defaultChecked={isCompleted}
          onChange={toggleIsCompleted}
        />
        <p
          role="button"
          onClick={() => setIsOpenTaskModal(true)}
          className={classNames('cursor-pointer truncate hover:text-clip', {
            'line-through': isCompleted
          })}
        >
          {task.task}
        </p>
        <small className="ml-auto text-gray-400">{task.date}</small>
      </div>
      {!!isOpenTaskModal && (
        <TaskModal
          removeTask={removeTask}
          updateTask={updateTask}
          task={task}
          closeModal={() => setIsOpenTaskModal(false)}
        />
      )}
    </>
  )
}

export default Task
