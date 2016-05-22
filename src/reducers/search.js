import * as types from '../constants'

const initialState = {
  phrase: ''
}

export function search (state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_CHANGE:
      return {
        ...state,
        phrase: action.data
      }
    default:
      return state
  }
}
