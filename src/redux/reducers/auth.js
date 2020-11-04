import {SETAUTH, SETAUTHLOGIN, SETAUTHLOGOUT, SETAUTHERROR} from '../types';
const initialState = {
  data: [],
  loading: false,
};

const Auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case SETAUTH:
      return {...state, loading: true};
    case SETAUTHLOGIN:
      return {...state, loading: false, isLogin: true, data: action.payload};
    case SETAUTHERROR:
      return {
        ...state,
        loading: false,
        isLogin: false,
        data: [],
        error: action.payload,
      };
    case SETAUTHLOGOUT:
      return {
        ...state,
        loading: false,
        isLogin: false,
        data: [],
        _persist: {rehydrate: true, version: -1},
      };

    default:
      return state;
  }
};

export default Auth;
