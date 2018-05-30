
import { createStore , applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import reducer from './reducers'

const Store = createStore(
	reducer ,
	applyMiddleware(promiseMiddleware)
)

export default configStore => Store