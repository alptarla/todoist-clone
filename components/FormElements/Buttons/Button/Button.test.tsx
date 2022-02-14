import { render } from '@testing-library/react'
import Button from '.'

test('should renders correctly with passed variants', () => {
  const { rerender, getByRole } = render(<Button>test</Button>)

  const button = getByRole('button', { name: /test/i })
  expect(button).toBeInTheDocument()

  rerender(<Button variant="danger">test</Button>)
  expect(button.classList.contains('bg-red-500')).toBeTruthy()

  rerender(<Button variant="success">test</Button>)
  expect(button.classList.contains('bg-green-500')).toBeTruthy()

  rerender(<Button variant="ghost">test</Button>)
  expect(button.classList.contains('bg-transparent')).toBeTruthy()
})
