import Axios from 'axios'
import Moment from 'moment'

import * as types from '../constants'

function isLoading (state) {
  const { loading } = state.posts
  return loading
}

function isUpdateNeeds (state, updatePeriod) {
  const { lastUpdate } = state.posts
  return lastUpdate
          ? Moment().diff(Moment().valueOf(), lastUpdate) > updatePeriod * 1000
          : true
}

export function fetchPosts () {
  return {
    type: types.POSTS_LOAD_PENDING
  }
}

export function receivePosts (data) {
  return {
    type: types.POSTS_LOAD_SUCCESS,
    data
  }
}

export function failPosts (error) {
  return {
    type: types.POSTS_LOAD_FAILURE,
    error
  }
}

export function fetchPost () {
  return {
    type: types.POST_LOAD_PENDING
  }
}

export function receivePost (data) {
  return {
    type: types.POST_LOAD_SUCCESS,
    data
  }
}

export function failPost (error) {
  return {
    type: types.POST_LOAD_FAILURE,
    error
  }
}

export function loadPosts () {
  return (dispatch, getState) => {
    if (!isLoading(getState()) && isUpdateNeeds(getState(), 10000)) {
      dispatch(fetchPosts())

      Axios.get('http://www.zhangsichu.com/blogjson.asp')
        .then((response) => {
          dispatch(receivePosts(response.data))
        })
        .catch((response) => {
          dispatch(failPosts(response.data))
        })
    }
  }
}

export function loadPost (id) {
  return (dispatch, getState) => {
    if (!isLoading(getState())) {
      dispatch(fetchPost())
    }

    Axios.get(`http://www.zhangsichu.com/blogitemjson.asp?id=${id}`)
      .then((response) => {
        dispatch(receivePost(response.data))
      })
      .catch((response) => {
        dispatch(failPost(response.data))
      })
  }
}
