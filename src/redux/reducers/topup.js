const initialState = {
  data: [],
  loading: false,
};

const Topup = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TOPUP_REQUEST':
      return {...state, loading: true};
    case 'TOPUP_SUCCESS':
      return {...state, loading: false, isLogin: true, data: action.payload};
    case 'TOPUP_ERROR':
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

export default Topup;
