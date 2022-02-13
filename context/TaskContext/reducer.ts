import { DATE_LIST, PROJECT_LIST } from '../../constants'
import { ActionType, IState } from './types'

export const initialState: IState = {
  tasks: [],
  filters: {
    date: DATE_LIST[0].value,
    project: PROJECT_LIST[0].value.name
  },
  isLoading: false,
  error: null
}

function taskReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      }
    case 'SET_TASKS':
      return {
        ...state,
        tasks: action.payload
      }
    case 'SET_TASK':
      return {
        ...state,
        tasks: state.tasks.concat(action.payload)
      }
    case 'SET_FILTERS':
      return {
        ...state,
        filters: action.payload
      }
    default:
      return state
  }
}

export default taskReducer
