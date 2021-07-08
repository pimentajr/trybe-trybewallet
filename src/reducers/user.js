import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return { email: action.payload.inputEmail };
  default:
    return state;
  }
};

export default userReducer;
