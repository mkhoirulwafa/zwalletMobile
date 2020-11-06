import Axios from './../../helpers/axios';

const AuthLoginRequest = () => {
  return {
    type: 'LOGIN_REQUEST',
  };
};
const AuthLoginSuccess = (data) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: data,
  };
};
const AuthLoginError = (error) => {
  return {
    type: 'LOGIN_ERROR',
    payload: error,
  };
};
export const AuthLogout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const AuthLogin = (fields) => {
  return (dispatch) => {
    dispatch(AuthLoginRequest());
    return Axios.post('/auth/login', fields)
      .then((res) => {
        const data = res.data.data;
        console.log(data);
        dispatch(AuthLoginSuccess(data));
        // fields.navigation.navigate('Dashboard');
      })
      .catch((err) => {
        dispatch(AuthLoginError(err.message));
      });
  };
};
