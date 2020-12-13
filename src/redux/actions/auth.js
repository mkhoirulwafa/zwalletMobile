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
const RegisterRequest = () => {
  return {
    type: 'REGISTER_REQUEST',
  };
};
const RegisterSuccess = (data) => {
  return {
    type: 'REGISTER_SUCCESS',
    payload: data,
  };
};
const RegisterError = (error) => {
  return {
    type: 'REGISTER_ERROR',
    payload: error,
  };
};
const ResetRequest = () => {
  return {
    type: 'RESET_REQUEST',
  };
};
const ResetSuccess = (data) => {
  return {
    type: 'RESET_SUCCESS',
    payload: data,
  };
};
const ResetError = (error) => {
  return {
    type: 'RESET_ERROR',
    payload: error,
  };
};

export const CheckEmail = (fields) => {
  return (dispatch) => {
    dispatch(ResetRequest());
    return Axios.patch('/auth/reset-password', fields)
      .then((res) => {
        const data = res.data.data;
        console.log(data);
        return dispatch(ResetSuccess(data));
      })
      .catch((err) => {
        return dispatch(ResetError(err.response.data.message));
      });
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
        return dispatch(AuthLoginSuccess(data));
      })
      .catch((err) => {
        return dispatch(AuthLoginError(err.response.data.message));
      });
  };
};

export const RegisterUser = (fields) => {
  return (dispatch) => {
    dispatch(RegisterRequest());
    return Axios.post('/auth/register', fields.data)
      .then((res) => {
        const data = res.data.data;
        return dispatch(RegisterSuccess(data));
      })
      .catch((err) => {
        return dispatch(RegisterError(err.response.data.message));
      });
  };
};
