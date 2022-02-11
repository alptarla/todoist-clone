import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddTask from './index'

test('should the task form renders correctly', () => {
  const { getByLabelText, getByRole } = render(<AddTask setShowAddTask={jest.fn()} />)

  expect(getByLabelText(/task/i)).toBeInTheDocument()
  expect(getByLabelText(/project/i)).toBeInTheDocument()
  expect(getByLabelText(/date/i)).toBeInTheDocument()
  expect(getByRole('button', { name: /add task/i }))
})

test("should be return 'false' value that the 'setShowAddTask' func, if user click to close button", () => {
  const setShowAddTask = jest.fn()
  const { getByTestId } = render(<AddTask setShowAddTask={setShowAddTask} />)

  const closeButton = getByTestId('closeModal')
  userEvent.click(closeButton)

  expect(setShowAddTask).toHaveBeenCalledWith(false)
})

test('should be display the errors text, when required fields is empty', async () => {
  const requiredFieldsCount = 3

  const { getByRole, getAllByText } = render(<AddTask setShowAddTask={jest.fn()} />)
  userEvent.click(getByRole('button', { name: /add task/i }))

  await waitFor(() => expect(getAllByText(/required/i).length).toBe(requiredFieldsCount))
})
