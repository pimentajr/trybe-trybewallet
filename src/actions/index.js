export const USER_LOGIN = 'USER_LOGIN';

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const requestMoedas = (payload) => ({
  type: 'FETCH_MOEDAS',
  payload,
});

export const requestSucess = (payload) => ({
  type: 'FETCH_SUCESS',
  payload,
});

export const fetchMoedas = () => (dispatch) => {
  dispatch(requestMoedas());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((result) => result.json())
    .then((data) => dispatch(requestSucess(data)));
// .catch((error) => dispatch(requestMoedasError(error.message)));
};
