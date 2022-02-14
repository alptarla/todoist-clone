import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TaskModal from '.'
import { ITask } from '../../context/TaskContext/types'

describe('test <TaskModal /> component', () => {
  const sampleTask: ITask = {
    id: 'test-id',
    task: 'test-task',
    date: 'test-date',
    project: 'test-project',
    isCompleted: false
  }

  test('should renders correctly', () => {
    render(
      <TaskModal
        closeModal={jest.fn()}
        removeTask={jest.fn()}
        updateTask={jest.fn()}
        task={sampleTask}
      />
    )

    expect(screen.getByText(/edit task/i)).toBeInTheDocument()
    expect(screen.getByDisplayValue(sampleTask.task)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument()
    expect(screen.getByTitle(/remove this task/i)).toBeInTheDocument()
  })

  test('should be update task with the new value in textarea', async () => {
    const updateTask = jest.fn()

    render(
      <TaskModal
        closeModal={jest.fn()}
        removeTask={jest.fn()}
        updateTask={updateTask}
        task={sampleTask}
      />
    )

    const textarea = screen.getByDisplayValue(sampleTask.task)
    const saveButton = screen.getByRole('button', { name: /save/i })

    userEvent.clear(textarea)
    userEvent.paste(textarea, 'test')

    userEvent.click(saveButton)

    expect(updateTask).toBeCalledWith(sampleTask.id, { task: 'test' })
  })

  test('should be save button is disabled, when textarea value equal to task', () => {
    render(
      <TaskModal
        closeModal={jest.fn()}
        removeTask={jest.fn()}
        updateTask={jest.fn()}
        task={sampleTask}
      />
    )

    const textarea = screen.getByDisplayValue(sampleTask.task)
    const saveButton = screen.getByRole('button', { name: /save/i })

    userEvent.paste(textarea, 'test')
    expect((saveButton as HTMLButtonElement).disabled).toBeFalsy()

    userEvent.clear(textarea)
    userEvent.paste(textarea, sampleTask.task)
    expect((saveButton as HTMLButtonElement).disabled).toBeTruthy()
  })

  test('should be remove button remove this task', () => {
    const removeTask = jest.fn()

    render(
      <TaskModal
        closeModal={jest.fn()}
        removeTask={removeTask}
        updateTask={jest.fn()}
        task={sampleTask}
      />
    )

    const removeButton = screen.getByTitle(/remove this task/i)
    userEvent.click(removeButton)

    expect(removeTask).toBeCalledWith(sampleTask.id)
  })
})
