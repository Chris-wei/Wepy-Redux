
import { handleActions } from 'redux-actions'
import { INCREMENT , DECREMENT , ASYNC_INCREMENT } from '../types/counter'

const defaultState  = {
	num: 0 ,
	asyncNum: 0
}

export default handleActions({
	[INCREMENT](state){
		return{
			...state,
			num : state.num + 1
		}
	},
	[DECREMENT](state){
		return{
			...state,
			num : state.num - 1
		}
	},
	[ASYNC_INCREMENT](state, action){
		console.log(action)
		return {
			...state ,
			asyncNum : state.asyncNum + action.payload
		}
	}
},defaultState)