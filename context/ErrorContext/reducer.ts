import { ActionType, IState } from './types'

export const initialState: IState = {
  errors: []
}

function reducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        errors: state.errors.concat(action.payload)
      }
    case 'RESET_ERROR':
      return {
        ...state,
        errors: state.errors.filter((err) => err.id !== action.payload)
      }

    default:
      return state
  }
}

export default reducer
