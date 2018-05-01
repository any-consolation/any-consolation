import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import article from './article'
import adminUserList from './adminUserList'
import adminArticleList from './adminArticleList'

const reducer = combineReducers({ user, article, adminUserList, adminArticleList })
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './article'
export * from './adminuserlist'
export * from './adminArticleList'
