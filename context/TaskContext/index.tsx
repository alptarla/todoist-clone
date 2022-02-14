import { createContext, useReducer } from 'react'
import { DEFAULT_ERROR_MESSAGE } from '../../constants'
import useErrors from '../../hooks/useErrors'
import * as taskService from '../../services/taskService'
import taskReducer, { initialState } from './reducer'
import { FiltersType, IProps, ITask, ITaskContext } from './types'

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

  const getTasks = async (filters?: FiltersType) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true })
      const tasks = await taskService.getTasks(filters)
      dispatch({ type: 'SET_TASKS', payload: tasks })
    } catch (error) {
      setError((error as any).message || DEFAULT_ERROR_MESSAGE)
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  const updateTask = async (taskId: string, fields: any) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true })
      const updatedTask = await taskService.updateTask(taskId, fields)
      dispatch({ type: 'UPDATE_TASK', payload: updatedTask })
    } catch (error) {
      setError((error as any).message || DEFAULT_ERROR_MESSAGE)
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  const setFilters = (filters: FiltersType) => dispatch({ type: 'SET_FILTERS', payload: filters })

  const providerValue = { ...state, createTask, setFilters, getTasks, updateTask }

  return <TaskContext.Provider value={providerValue}>{children}</TaskContext.Provider>
}

export default TaskContextProvider
