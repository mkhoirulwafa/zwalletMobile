import Axios from './../../helpers/axios';

const TopupRequest = () => {
  return {
    type: 'TOPUP_REQUEST',
  };
};
const TopupSuccess = (data) => {
  return {
    type: 'TOPUP_SUCCESS',
    payload: data,
  };
};
const TopupError = (error) => {
  return {
    type: 'TOPUP_ERROR',
    payload: error,
  };
};

export const GetTopup = (fields) => {
  return (dispatch) => {
    dispatch(TopupRequest());
    return Axios({
      method: 'get',
      url: '/topup',
      headers: {
        token: fields.token,
      },
    })
      .then((res) => {
        const data = res.data.data;
        return dispatch(TopupSuccess(data));
      })
      .catch((err) => {
        return dispatch(TopupError(err.response.data.message));
      });
  };
};
