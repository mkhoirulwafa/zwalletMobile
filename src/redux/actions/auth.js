import Axios from 'axios';
// import { useHistory } from 'react-router-dom';

const AuthLoginRequest = ()=>{
    return{
        type: 'LOGIN_REQUEST'
    }
}
const AuthLoginSuccess = (data)=>{
    return{
        type: 'LOGIN_SUCCESS',
        payload: data
    }
}
const AuthLoginError = (error)=>{
    return{
        type: 'LOGIN_ERROR',
        payload: error
    }
}
export const AuthLogout = ()=>{
    return{
        type: 'LOGOUT'
    }
}

export const AuthLogin = (fields)=>{
    return (dispatch)=>{
        dispatch(AuthLoginRequest())
        return Axios.post(`http://localhost:8000/api/v1/login`, fields)
        .then((res) => {
            const data = res.data.data
            console.log(data)
            dispatch(AuthLoginSuccess(data))
        })
        .catch((err) => {
          dispatch(AuthLoginError(err.message))
        });

    }
}