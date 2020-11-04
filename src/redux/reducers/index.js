// import User from './user';
import Auth from './auth';
// import Admin from './admin';
import {combineReducers} from 'redux';

// const authConfig = {
//   key: 'auth',
//   AsyncStorage,
//   whitelist: ['token', 'role'],
// };

export default combineReducers({
  Auth,
});
