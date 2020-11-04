export const SETAUTH = 'SETAUTH';
export const SETAUTHERROR = 'SETAUTHERROR';
export const SETAUTHLOGIN = 'SETAUTHLOGIN';
export const SETAUTHLOGOUT = 'SETAUTHLOGOUT';

export const options = (type, payload = null) => ({
  type: type,
  payload: payload,
});
