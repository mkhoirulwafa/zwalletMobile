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

//action Get User By ID
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
        dispatch(UsersSuccess(data));
        console.log(
          `${res.data.data} , ini di fetch Topup yaaaaaa butuh token:(`,
        );
      })
      .catch((err) => {
        dispatch(UsersError(err.message));
      });
  };
};
// Update User

// export const updateUsers = (fields) => {
//   return (dispatch) => {
//     dispatch(UpdateUserRequest());
//     const data = fields.data;
//     return Axios({
//       method: 'post',
//       url: `http://localhost:8000/api/v1/users/avatar/${fields.id}`,
//       data: data,
//       headers: {
//         token: `Bearer ${fields.token}`,
//         'content-type': 'multipart/form-data',
//       },
//     })
//       .then((res) => {
//         let urlImage = res.data.image;
//         Axios({
//           method: 'patch',
//           url: `http://localhost:8000/api/v1/users/${fields.id}`,
//           data: {...fields.data, avatar: urlImage},
//           headers: {
//             token: `Bearer ${fields.token}`,
//           },
//         });
//       })
//       .then((res) => {
//         const data = res.data.data;
//         dispatch(UpdateUserSuccess(data));
//         console.log(`${res.data.data} , update Users`);
//         fields.history.push('/profile');
//       })
//       .catch((err) => {
//         dispatch(UpdateUserError(err.message));
//       });
//   };
// };
// export const uploadAvatar = (fields) => {
//   return (dispatch) => {
//     dispatch(UploadRequest());
//     const data = fields.data;
//     return Axios({
//       method: 'patch',
//       url: `http://localhost:8000/api/v1/users/avatar/${fields.id}`,
//       data: data,
//       headers: {
//         token: `Bearer ${fields.token}`,
//         'content-type': 'multipart/form-data',
//       },
//     })
//       .then((res) => {
//         const data = res.data.data;
//         dispatch(UploadSuccess(data));
//         console.log(`${res.data.data} , update Users`);
//         fields.history.push('/profile');
//       })
//       .catch((err) => {
//         dispatch(UploadError(err.message));
//       });
//   };
// };
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
        dispatch(DeleteUserSuccess(data));
        console.log(`${res.data.data} , Delete User`);
      })
      .catch((err) => {
        dispatch(DeleteUserError(err.message));
      });
  };
};
