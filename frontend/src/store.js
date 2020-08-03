import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import recipeReducer from './reducers/recipeReducer'
import userReducer from './reducers/userReducer'
import usersReducer from './reducers/usersReducer'
import filterReducer from './reducers/filterReducer'


const reducer = combineReducers({
  recipes: recipeReducer,
  user: userReducer,
  users: usersReducer,
  filter: filterReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store