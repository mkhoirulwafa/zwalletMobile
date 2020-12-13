const initialState = {
  data: [],
  loading: false,
};

const Transfer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'HISTORY_REQUEST':
      return {...state, loading: true};
    case 'HISTORY_SUCCESS':
      return {...state, loading: false, isLogin: true, data: action.payload};
    case 'HISTORY_ERROR':
      return {
        ...state,
        loading: false,
        isLogin: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export const TransferDate = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'HISTORY_DATE_REQUEST':
      return {...state, loading: true};
    case 'HISTORY_DATE_SUCCESS':
      return {...state, loading: false, isLogin: true, data: action.payload};
    case 'HISTORY_DATE_ERROR':
      return {
        ...state,
        loading: false,
        isLogin: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export const TransferBalance = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TRANSFER_REQUEST':
      return {...state, loading: true};
    case 'TRANSER_SUCCESS':
      return {...state, data: action.payload, loading: false, isLogin: true};
    case 'TRANSFER_ERROR':
      return {
        loading: false,
        isLogin: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export const TransferWeek = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'HISTORY_WEEK_REQUEST':
      return {...state, loading: true};
    case 'HISTORY_WEEK_SUCCESS':
      return {...state, loading: false, isLogin: true, data: action.payload};
    case 'HISTORY_WEEK_ERROR':
      return {
        ...state,
        loading: false,
        isLogin: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Transfer;
