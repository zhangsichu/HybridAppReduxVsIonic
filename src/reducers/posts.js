import Moment from 'moment'
import * as types from '../constants'

const initialState = {
  loading: false,
  lastUpdate: null,
  error: '',
  posts: [],
  currentPost: null
}

export function posts (state = initialState, action) {
  switch (action.type) {
    case types.POSTS_LOAD_PENDING:
      return {
        ...state,
        posts: initialState.posts, // reset
        loading: true,
        error: ''
      }
    case types.POSTS_LOAD_SUCCESS:
      return {
        ...state,
        lastUpdate: Moment().valueOf(),
        posts: action.data,
        loading: false,
        error: ''
      }
    case types.POSTS_LOAD_FAILURE:
      return {
        ...state,
        posts: initialState.posts, // reset
        loading: false,
        error: action.error
      }
    case types.POST_LOAD_PENDING:
      return {
        ...state,
        currentPost: initialState.currentPost,
        loading: true,
        error: ''
      }
    case types.POST_LOAD_SUCCESS:
      return {
        ...state,
        currentPost: action.data,
        loading: false,
        error: ''
      }
    case types.POST_LOAD_FAILURE:
      return {
        ...state,
        currentPost: initialState.currentPost, // reset
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}
