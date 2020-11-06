import {combineReducers} from 'redux';
import Auth from './auth';
import {User, updateUser, deleteUser} from './user';
import Topup from './topup';
import Transfer from './transfer';
// import Transfer from './Transfer';
// import {History} from './Transfer';

const reducers = combineReducers({
  Auth,
  User,
  updateUser,
  deleteUser,
  Topup,
  Transfer,
  // History
  // other: otherReducer,
});

export default reducers;
