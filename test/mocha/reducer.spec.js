import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import chai from 'chai'
import {changeSearch} from '../../src/actions/search'
import {fetchPosts, failPost} from '../../src/actions/posts'
import rootReducer from '../../src/reducers'
import * as types from '../../src/constants'
import simple from 'simple-mock'
import nock from 'nock'

const should = chai.should()

describe('Redux Hybrid App', () => {
  const makeStore = (initialState) => {
    initialState = initialState || {}
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunkMiddleware)
    )
  }

  let store
  it('should init pluginState with Missing', () => {
      store = makeStore()
      let result = store.dispatch(changeSearch('redux'))
      result.should.eql({type: types.SEARCH_CHANGE, data: 'redux'})
    })
})
