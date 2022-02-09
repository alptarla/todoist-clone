import { nanoid } from 'nanoid'
import React, { createContext, useReducer } from 'react'
import { ERROR_MESSAGE_TIMEOUT } from '../../constants'
import reducer, { initialState } from './reducer'
import { IErrorContext, IProps } from './types'

export const ErrorContext = createContext<IErrorContext>(undefined!)

function ErrorContextProvider({ children }: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setError = (error: string) => {
    const id = nanoid()
    dispatch({ type: 'SET_ERROR', payload: { id, message: error } })

    // ** remove this error 2 seconds later
    setTimeout(() => {
      dispatch({ type: 'RESET_ERROR', payload: id })
    }, ERROR_MESSAGE_TIMEOUT)
  }

  const resetError = (id: string) => dispatch({ type: 'RESET_ERROR', payload: id })

  const providerValue = { ...state, setError, resetError }
  return <ErrorContext.Provider value={providerValue}>{children}</ErrorContext.Provider>
}

export default ErrorContextProvider
