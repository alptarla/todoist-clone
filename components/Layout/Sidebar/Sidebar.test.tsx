import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Sidebar from '.'
import { DATE_LIST, PROJECT_LIST } from '../../../constants'
import { TaskContext } from '../../../context/TaskContext'

test('should renders correctly', () => {
  const { getByText } = render(
    <TaskContext.Provider value={{ filters: { date: '', project: '' } } as any}>
      <Sidebar />
    </TaskContext.Provider>
  )

  PROJECT_LIST.forEach((project) => {
    expect(getByText(project.label)).toBeInTheDocument()
  })

  DATE_LIST.forEach((date) => {
    expect(getByText(date.label)).toBeInTheDocument()
  })
})

test('should be call set filters func correctly', () => {
  const setFilters = jest.fn()

  const { getByRole } = render(
    <TaskContext.Provider value={{ filters: { date: '', project: '' }, setFilters } as any}>
      <Sidebar />
    </TaskContext.Provider>
  )

  PROJECT_LIST.forEach((project) => {
    userEvent.click(getByRole('button', { name: `${project.value.emoji} ${project.label}` }))
    expect(setFilters).toBeCalledWith({ date: '', project: project.label })
  })

  DATE_LIST.forEach((date) => {
    userEvent.click(getByRole('button', { name: date.label }))
    expect(setFilters).toBeCalledWith({ date: date.value, project: '' })
  })

  expect(setFilters).toBeCalledTimes(PROJECT_LIST.length + DATE_LIST.length)
})
