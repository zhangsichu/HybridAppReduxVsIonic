import * as types from '../constants'

export function changeSearch (phrase) {
  return {
    type: types.SEARCH_CHANGE,
    data: phrase
  }
}
