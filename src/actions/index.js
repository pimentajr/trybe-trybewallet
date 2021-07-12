export const ENTER_EMAIL = 'ENTER_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_FAILED = 'GET_CURRENCIES_FAILED';

export const enterEmail = (email) => ({
  type: 'ENTER_EMAIL',
  payload: email,
});

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  payload: expense,
});

export const getCurrencies = () => ({
  type: 'GET_CURRENCIES',
});

export const getCurrenciesSuccess = (payload) => ({
  type: 'GET_CURRENCIES_SUCCESS',
  payload,
});

export const getCurrenciesFailed = (payload) => ({
  type: 'GET_CURRENCIES_FAILED',
  payload,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  dispatch(getCurrencies());
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const results = await response.json();
    dispatch(getCurrenciesSuccess(results));
  } catch (error) {
    dispatch(getCurrenciesFailed(error));
  }
};
