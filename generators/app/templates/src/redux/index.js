import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
// import example from './example'

const reducers = combineReducers({
  // example,
  form: formReducer
})

export default createStore(reducers, applyMiddleware(thunk))