import { ReactNode } from 'react'

export interface ITask {
  id: string
  task: string
  date: string
  project: string
}

export type FiltersType = { date: string; project: string }

export interface IState {
  tasks: ITask[]
  filters: FiltersType
  isLoading: boolean
  error: string | null
}

export type ActionType =
  | { type: 'SET_TASKS'; payload: ITask[] }
  | { type: 'SET_TASK'; payload: ITask }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'SET_FILTERS'; payload: FiltersType }

export interface ITaskContext extends IState {
  createTask: (task: ITask) => void
  getTasks: (filters?: FiltersType) => void
  setFilters: (filters: FiltersType) => void
}

export interface IProps {
  children: ReactNode
}
