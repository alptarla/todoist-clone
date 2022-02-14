import React, { useState } from 'react'
import { Trash } from 'react-feather'
import { BeatLoader } from 'react-spinners'
import { ITask } from '../../context/TaskContext/types'
import { Button } from '../FormElements/Buttons'
import Overlay from '../Overlay'

interface IProps {
  closeModal: VoidFunction
  removeTask: (id: string) => void
  updateTask: (id: string, fields: any) => void
  task: ITask
}

function TaskModal({ closeModal, task, removeTask, updateTask }: IProps) {
  const [updatedTask, setUpdatedTask] = useState(task.task)
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    await updateTask(task.id, { task: updatedTask })
    setIsSaving(false)
    closeModal()
  }

  const handleRemove = async () => {
    await removeTask(task.id)
    closeModal()
  }

  const isSaveDisabled = task.task === updatedTask || updatedTask === ''

  return (
    <Overlay>
      <div className="relative w-1/3 rounded bg-white p-5">
        <Button
          variant="ghost"
          title="Remove this task"
          onClick={handleRemove}
          className="absolute top-2 right-2"
        >
          <Trash className="text-red-500 transition hover:text-red-400" />
        </Button>
        <h1 className="mb-2 font-bold">Edit Task</h1>
        <textarea
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
          className="w-full rounded border p-2"
        />
        <div className="my-2 flex justify-end space-x-2">
          <Button variant="success" onClick={handleSave} disabled={isSaveDisabled}>
            {isSaving ? <BeatLoader color="#ffff" size="6px" /> : <span>Save</span>}
          </Button>
          <Button variant="danger" onClick={closeModal}>
            Cancel
          </Button>
        </div>
      </div>
    </Overlay>
  )
}

export default TaskModal
