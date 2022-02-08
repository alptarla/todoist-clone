import { createContext, useReducer } from 'react'
import taskReducer, { initialState } from './reducer'
import { IProps, ITask, ITaskContext } from './types'

export const TaskContext = createContext<ITaskContext | null>(null)

function TaskContextProvider({ children }: IProps) {
  const [state, dispatch] = useReducer(taskReducer, initialState)

  const createTask = (task: ITask) => {}
  const getAllTasks = (): ITask[] => []

  const providerValue = { ...state, createTask, getAllTasks }

  return <TaskContext.Provider value={providerValue}>{children}</TaskContext.Provider>
}

export default TaskContextProvider
