import Axios from './../../helpers/axios';

const UsersRequest = () => {
  return {
    type: 'USERS_REQUEST',
  };
};
const UsersSuccess = (data) => {
  return {
    type: 'USERS_SUCCESS',
    payload: data,
  };
};
const UsersError = (error) => {
  return {
    type: 'USERS_ERROR',
    payload: error,
  };
};
const UsersSearchRequest = () => {
  return {
    type: 'USERS_SEARCH_REQUEST',
  };
};
const UsersSearchSuccess = (data) => {
  return {
    type: 'USERS_SEARCH_SUCCESS',
    payload: data,
  };
};
const UsersSearchError = (error) => {
  return {
    type: 'USERS_SEARCH_ERROR',
    payload: error,
  };
};
const NewUsersRequest = () => {
  return {
    type: 'NEW_USERS_REQUEST',
  };
};
const NewUsersSuccess = (data) => {
  return {
    type: 'NEW_USERS_SUCCESS',
    payload: data,
  };
};
const NewUsersError = (error) => {
  return {
    type: 'NEW_USERS_ERROR',
    payload: error,
  };
};

// const UpdateUserRequest = () => {
//   return {
//     type: 'UPDATE_USER_REQUEST',
//   };
// };
// const UpdateUserSuccess = (data) => {
//   return {
//     type: 'UPDATE_USER_SUCCESS',
//     payload: data,
//   };
// };
// const UpdateUserError = (error) => {
//   return {
//     type: 'UPDATE_USER_ERROR',
//     payload: error,
//   };
// };
// const UploadRequest = () => {
//   return {
//     type: 'UPLOAD_REQUEST',
//   };
// };
// const UploadSuccess = (data) => {
//   return {
//     type: 'UPLOAD_SUCCESS',
//     payload: data,
//   };
// };
// const UploadError = (error) => {
//   return {
//     type: 'UPLOAD_ERROR',
//     payload: error,
//   };
// };

const DeleteUserRequest = () => {
  return {
    type: 'DELETE_USER_REQUEST',
  };
};
const DeleteUserSuccess = (data) => {
  return {
    type: 'DELETE_USER_SUCCESS',
    payload: data,
  };
};
const DeleteUserError = (error) => {
  return {
    type: 'DELETE_USER_ERROR',
    payload: error,
  };
};

//action Get Search
export const GetUser = (fields) => {
  return (dispatch) => {
    dispatch(UsersRequest());
    return Axios({
      method: 'get',
      url: `/users/${fields.id}`,
      headers: {
        token: `Bearer ${fields.token}`,
      },
    })
      .then((res) => {
        const data = res.data.data;
        return dispatch(UsersSuccess(data));
      })
      .catch((err) => {
        return dispatch(UsersError(err.response.data.message));
      });
  };
};
export const GetUserToTransfer = (fields) => {
  return (dispatch) => {
    dispatch(NewUsersRequest());
    return Axios({
      method: 'get',
      url: `/users/${fields.id}`,
      headers: {
        token: `Bearer ${fields.token}`,
      },
    })
      .then((res) => {
        const data = res.data.data;
        return dispatch(NewUsersSuccess(data));
      })
      .catch((err) => {
        return dispatch(NewUsersError(err.response.data.message));
      });
  };
};
export const SearchAllUser = (fields) => {
  return (dispatch) => {
    dispatch(UsersSearchRequest());
    return Axios({
      method: 'get',
      url: `/users/search?limit=${fields.limit}`,
      headers: {
        token: `Bearer ${fields.token}`,
      },
    })
      .then((res) => {
        const data = res.data.data;
        return dispatch(UsersSearchSuccess(data));
      })
      .catch((err) => {
        return dispatch(UsersSearchError(err.response.data.message));
      });
  };
};
export const SearchUser = (fields) => {
  return (dispatch) => {
    dispatch(UsersSearchRequest());
    return Axios({
      method: 'get',
      url: `/users/search?name=${fields.key}&limit=${fields.limit}`,
      headers: {
        token: `Bearer ${fields.token}`,
      },
    })
      .then((res) => {
        const data = res.data.data;
        return dispatch(UsersSearchSuccess(data));
      })
      .catch((err) => {
        return dispatch(UsersSearchError(err.response.data.message));
      });
  };
};

export const UpdateUser = (fields) => {
  return (dispatch) => {
    dispatch(UsersRequest());
    return Axios.patch('/users', fields.data, {
      headers: {
        token: `Bearer ${fields.token}`,
      },
    })
      .then((res) => {
        const data = res.data.data;
        return dispatch(UsersSuccess(data));
      })
      .catch((err) => {
        return dispatch(UsersError(err.response.data.message));
      });
  };
};
export const editPhoto = (fields) => {
  return (dispatch) => {
    dispatch(UsersRequest());
    return Axios.patch('/users', fields.data, {
      headers: {
        token: `Bearer ${fields.token}`,
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        const data = res.data.data;
        return dispatch(UsersSuccess(data));
      })
      .catch((err) => {
        return dispatch(UsersError(err.response.data.message));
      });
  };
};
// delete
export const DeleteUsers = (fields) => {
  return (dispatch) => {
    dispatch(DeleteUserRequest());
    return Axios({
      method: 'delete',
      url: `/users/${fields.id}`,
      headers: {
        token: fields.token,
      },
    })
      .then((res) => {
        const data = res.data.data;
        return dispatch(DeleteUserSuccess(data));
      })
      .catch((err) => {
        return dispatch(DeleteUserError(err.response.data.message));
      });
  };
};
export const DeleteUsersDeviceToken = (fields) => {
  return (dispatch) => {
    dispatch(DeleteUserRequest());
    return Axios({
      method: 'patch',
      url: `/users/devicetoken/${fields.id}`,
      headers: {
        token: fields.token,
      },
    })
      .then((res) => {
        const data = res.data.data;
        return dispatch(DeleteUserSuccess(data));
      })
      .catch((err) => {
        return dispatch(DeleteUserError(err.response.data.message));
      });
  };
};
