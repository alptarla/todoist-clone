import { render } from '@testing-library/react'
import SidebarButton from '.'

test('should renders correctly', () => {
  const { getByRole } = render(<SidebarButton title="test" />)
  expect(getByRole('button', { name: /test/i })).toBeInTheDocument()
})

test('should be toggle active mode when passing to isActive:true', () => {
  const activeClasses = ['bg-white', 'font-bold']

  const { getByRole, rerender } = render(<SidebarButton title="test" isActive={true} />)
  const button = getByRole('button', { name: /test/i })

  activeClasses.forEach((cn) => {
    expect(button.classList.contains(cn)).toBeTruthy()
  })

  rerender(<SidebarButton title="test" isActive={false} />)

  activeClasses.forEach((cn) => {
    expect(button.classList.contains(cn)).toBeFalsy()
  })
})
