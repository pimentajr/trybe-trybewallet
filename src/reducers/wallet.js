// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'CURRENCIES':
    return {
      ...state, currencies: [...action.currencies],
    };
  case '2':
    return {
      ...state, currencies: [...state.expenses, action.expenses],
    };
  default:
    return state;
  }
};

export default wallet;
