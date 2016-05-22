import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from '../reducers'

let storeInstance = null
const loggerMiddleware = createLogger()

const configureStore = function (initialState) {
  storeInstance = createStore(
    reducers,
    initialState,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      storeInstance.replaceReducer(require('./../reducers').default)
    })
  }

  return storeInstance
}

const getStoreInstance = function (initialState) {
  return storeInstance || configureStore(initialState)
}

export default getStoreInstance
