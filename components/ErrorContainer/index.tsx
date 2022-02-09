import React, { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { ERROR_MESSAGE_TIMEOUT } from '../../constants'
import useErrors from '../../hooks/useErrors'

function ErrorContainer() {
  const { errors } = useErrors()

  useEffect(() => {
    if (errors.length) {
      errors.forEach((err) => toast.error(err.message))
    }
  }, [errors])

  return <ToastContainer autoClose={ERROR_MESSAGE_TIMEOUT} hideProgressBar />
}

export default ErrorContainer
