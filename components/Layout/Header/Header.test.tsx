import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Header from './index'

test('should be display the task form modal, when user click to plus button', async () => {
  const { getByTestId, getByText } = render(<Header />)

  const openTaskButton = getByTestId('openTaskButton')
  userEvent.click(openTaskButton)

  expect(getByText(/quick add task/i)).toBeInTheDocument()
})
