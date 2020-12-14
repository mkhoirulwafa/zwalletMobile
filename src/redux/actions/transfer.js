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
const HistoryDateRequest = () => {
  return {
    type: 'HISTORY_DATE_REQUEST',
  };
};
const HistoryDateSuccess = (data) => {
  return {
    type: 'HISTORY_DATE_SUCCESS',
    payload: data,
  };
};
const HistoryDateError = (error) => {
  return {
    type: 'HISTORY_DATE_ERROR',
    payload: error,
  };
};
const TransferRequest = () => {
  return {
    type: 'TRANSFER_REQUEST',
  };
};
const TransferSuccess = (data) => {
  return {
    type: 'TRANSFER_SUCCESS',
    payload: data,
  };
};
const TransferError = (error) => {
  return {
    type: 'TRANSFER_ERROR',
    payload: error,
  };
};

export const GetHistory = (fields) => {
  return (dispatch) => {
    dispatch(HistoryRequest());
    return Axios({
      method: 'get',
      url: `/transfer/history/${fields.id}?limit=${fields.limit}`,
      headers: {
        token: `Bearer ${fields.token}`,
      },
    })
      .then((res) => {
        const data = res.data.data;
        return dispatch(HistorySuccess(data));
      })
      .catch((err) => {
        return dispatch(HistoryError(err.response.data.message));
      });
  };
};
export const GetHistoryIncome = (fields) => {
  return (dispatch) => {
    dispatch(HistoryRequest());
    return Axios({
      method: 'get',
      url: `/transfer/history/${fields.id}?income=true`,
      headers: {
        token: `Bearer ${fields.token}`,
      },
    })
      .then((res) => {
        const data = res.data.data;
        return dispatch(HistorySuccess(data));
      })
      .catch((err) => {
        return dispatch(HistoryError(err.response.data.message));
      });
  };
};
export const GetHistoryExpense = (fields) => {
  return (dispatch) => {
    dispatch(HistoryRequest());
    return Axios({
      method: 'get',
      url: `/transfer/history/${fields.id}?expense=true`,
      headers: {
        token: `Bearer ${fields.token}`,
      },
    })
      .then((res) => {
        const data = res.data.data;
        return dispatch(HistorySuccess(data));
      })
      .catch((err) => {
        return dispatch(HistoryError(err.response.data.message));
      });
  };
};
export const GetHistoryDate = (fields) => {
  return (dispatch) => {
    dispatch(HistoryDateRequest());
    return Axios({
      method: 'get',
      url: `/transfer/history/${fields.id}?start_date=${fields.start}&end_date=${fields.end}`,
      headers: {
        token: `Bearer ${fields.token}`,
      },
    })
      .then((res) => {
        const data = res.data.data;
        return dispatch(HistoryDateSuccess(data));
      })
      .catch((err) => {
        return dispatch(HistoryDateError(err.response.data.message));
      });
  };
};
export const PostTransfer = (fields) => {
  return (dispatch) => {
    dispatch(TransferRequest());
    return Axios.post('/transfer', fields.data, {
      headers: {
        token: `Bearer ${fields.token}`,
      },
    })
      .then((res) => {
        const data = res.data.data;
        return dispatch(TransferSuccess(data));
      })
      .catch((err) => {
        return dispatch(TransferError(err.response.data.message));
      });
  };
};
