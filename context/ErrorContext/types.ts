import { ReactNode } from 'react'

export type ErrorType = { id: string; message: string }

export type ActionType =
  | { type: 'SET_ERROR'; payload: ErrorType }
  | { type: 'RESET_ERROR'; payload: string }

export interface IState {
  errors: ErrorType[]
}

export interface IErrorContext extends IState {
  setError: (error: string) => void
  resetError: (id: string) => void
}

export interface IProps {
  children: ReactNode
}
