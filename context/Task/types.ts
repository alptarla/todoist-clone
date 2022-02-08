import { ReactNode } from 'react'

export interface ITask {
  id: string
  task: string
  date: string
  project: string
}

export interface IState {
  tasks: ITask[]
  isLoading: boolean
  error: string | null
}

export type ActionType =
  | { type: 'SET_TASKS'; payload: ITask[] }
  | { type: 'SET_TASK'; payload: ITask }

export interface ITaskContext extends IState {
  createTask: (task: ITask) => void
  getAllTasks: () => ITask[]
}

export interface IProps {
  children: ReactNode
}
