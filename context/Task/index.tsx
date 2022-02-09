import { createContext, useReducer } from 'react'
import * as taskService from '../../services/taskService'
import taskReducer, { initialState } from './reducer'
import { IProps, ITask, ITaskContext } from './types'

export const TaskContext = createContext<ITaskContext>(undefined!)

function TaskContextProvider({ children }: IProps) {
  const [state, dispatch] = useReducer(taskReducer, initialState)

  const createTask = async (task: ITask) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true })
      const res = await taskService.createTask(task)
      dispatch({ type: 'SET_TASK', payload: res })
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: (error as any).message })
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  const getAllTasks = (): ITask[] => []

  const providerValue = { ...state, createTask, getAllTasks }

  return <TaskContext.Provider value={providerValue}>{children}</TaskContext.Provider>
}

export default TaskContextProvider
