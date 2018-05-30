
import { handleActions } from 'redux-actions'
import { ADD , REMOVE } from '../types/list'

const defaultState = [
	{
		title : '吃饭' ,
		text : '今天我要吃火锅'
	},
	{
		title : '工作' ,
		text : '今天我要学习Redux'
	}
]

export default handleActions({
	[ADD]( state , action ){
		state.push(action.payload)
		return [...state]
	},
	[REMOVE]( state , action ){
		state.splice( action.payload , 1 );
		return [ ...state ]

	}
},defaultState)
