import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Task from '.'
import { ITask } from '../../context/TaskContext/types'

const sampleTask: ITask = {
  id: 'test-id',
  task: 'test-task',
  date: 'test-date',
  project: 'test-project',
  isCompleted: false
}

test('should be toggle completed status', () => {
  const updateTask = jest.fn()
  const { getByRole, getByText } = render(<Task task={sampleTask} updateTask={updateTask} />)

  const task = getByText(sampleTask.task)
  const taskCheck = getByRole('checkbox')

  expect(task.classList.contains('line-through')).toBeFalsy()

  userEvent.click(taskCheck)

  expect(updateTask).toHaveBeenCalledWith(sampleTask.id, { isCompleted: !sampleTask.isCompleted })
  expect(task.classList.contains('line-through')).toBeTruthy()
})
