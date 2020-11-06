import Axios from './../../helpers/axios';

const HistoryRequest = () => {
  return {
    type: 'HISTORY_REQUEST',
  };
};
const HistorySuccess = (data) => {
  return {
    type: 'HISTORY_SUCCESS',
    payload: data,
  };
};
const HistoryError = (error) => {
  return {
    type: 'HISTORY_ERROR',
    payload: error,
  };
};

export const GetHistory = (fields) => {
  return (dispatch) => {
    dispatch(HistoryRequest());
    return Axios({
      method: 'get',
      url: `/transfer/history/${fields.id}`,
      headers: {
        token: `Bearer ${fields.token}`,
      },
    })
      .then((res) => {
        const data = res.data.data;
        dispatch(HistorySuccess(data));
        console.log(
          `${res.data.data} , ini di fetch History yaaaaaa butuh token:(`,
        );
      })
      .catch((err) => {
        dispatch(HistoryError(err.message));
      });
  };
};
