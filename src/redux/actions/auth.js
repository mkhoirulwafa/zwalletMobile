import axios from '../../helpers/axios';
import {SETAUTH, SETAUTHLOGOUT, SETAUTHERROR, options} from '../types';

export const AuthLogin = (data, navigation) => (dispatch) => {
  axios
    .post('/auth/login', data)
    .then((res) => {
      dispatch(options(SETAUTH, res.data));
      dispatch(options(SETAUTHERROR, ''));
      if (res.data.role !== 'admin') {
        return navigation.push('/dashboard');
      }
      return navigation.push('/admin');
    })
    .catch((err) => {
      if (!err.response) {
        return dispatch(options(SETAUTHERROR, 'Network Error'));
      }

      dispatch(options(SETAUTHERROR, err.response.data.message));
    });
};

export const AuthRegister = (data, navigation, mobile = false) => (
  dispatch,
) => {
  // const isMobile = mobile ? "/m/auth/create-pin" : ""
  axios
    .post('/auth/register', data)
    .then((res) => {
      dispatch(options(SETAUTH, res.data.data));
      dispatch(options(SETAUTHERROR, ''));
    })
    .catch((err) => {
      if (!err.response) {
        return dispatch(options(SETAUTHERROR, 'Network Error'));
      }
      dispatch(options(SETAUTHERROR, err.response.data.message));
    });
};

export const AuthLogout = (navigation) => (dispatch) => {
  dispatch(options(SETAUTHLOGOUT));
  return navigation.push('Login');
};
