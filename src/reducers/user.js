// Esse reducer será responsável por tratar as informações da pessoa usuária
import { GLOBAL_STATE } from './index';
import { SET_EMAIL } from '../actions';

const user = (state = GLOBAL_STATE, action) => {
	switch (action.type) {
		case SET_EMAIL:
			return { ...state , user: {email: action.email} };
		default:
			return state;
	}
}

export default user;