// Esse reducer será responsável por tratar as informações da pessoa usuária
import createReducer from '../utils/createReducer';

const initialState = {
  email: '',
};

const actions = {
  login: (_, { email }) => ({ email }),
};

export default createReducer(initialState, actions);
