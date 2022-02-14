import { ReactNode } from 'react'

export interface ITask {
  id: string
  task: string
  date: string
  project: string
  isCompleted: boolean
}

export type FiltersType = { date: string; project: string }

export interface IState {
  tasks: ITask[]
  filters: FiltersType
  isLoading: boolean
}

export type ActionType =
  | { type: 'SET_TASKS'; payload: ITask[] }
  | { type: 'SET_TASK'; payload: ITask }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_FILTERS'; payload: FiltersType }
  | { type: 'UPDATE_TASK'; payload: ITask }

export interface ITaskContext extends IState {
  createTask: (task: ITask) => void
  getTasks: (filters?: FiltersType) => void
  setFilters: (filters: FiltersType) => void
  updateTask: (id: string, fields: any) => void
}

export interface IProps {
  children: ReactNode
}
