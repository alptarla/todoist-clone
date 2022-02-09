import { useContext } from 'react'
import { ErrorContext } from '../context/ErrorContext'

function useErrors() {
  const errorContext = useContext(ErrorContext)
  return { ...errorContext }
}

export default useErrors
