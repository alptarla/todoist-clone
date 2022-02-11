import { createContext, useReducer } from 'react'
import { DEFAULT_ERROR_MESSAGE } from '../../constants'
import useErrors from '../../hooks/useErrors'
import * as taskService from '../../services/taskService'
import taskReducer, { initialState } from './reducer'
import { IProps, ITask, ITaskContext } from './types'

export const TaskContext = createContext<ITaskContext>(undefined!)

function TaskContextProvider({ children }: IProps) {
  const { setError } = useErrors()
  const [state, dispatch] = useReducer(taskReducer, initialState)

  const createTask = async (task: ITask) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true })
      const res = await taskService.createTask(task)
      dispatch({ type: 'SET_TASK', payload: res })
    } catch (error) {
      setError((error as any).message || DEFAULT_ERROR_MESSAGE)
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  const getAllTasks = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true })
      const tasks = await taskService.getAllTasks()
      dispatch({ type: 'SET_TASKS', payload: tasks })
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: (error as any).message || DEFAULT_ERROR_MESSAGE })
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  const providerValue = { ...state, createTask, getAllTasks }

  return <TaskContext.Provider value={providerValue}>{children}</TaskContext.Provider>
}

export default TaskContextProvider
