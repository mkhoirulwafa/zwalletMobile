import {combineReducers} from 'redux';
import Auth from './auth';
import {User, SearchUser, updateUser, deleteUser, UserToTransfer} from './user';
import Topup from './topup';
import Transfer from './transfer';
import {TransferWeek, TransferBalance, TransferDate} from './transfer';
// import Transfer from './Transfer';
// import {History} from './Transfer';

const reducers = combineReducers({
  Auth,
  User,
  SearchUser,
  UserToTransfer,
  updateUser,
  deleteUser,
  Topup,
  Transfer,
  TransferDate,
  TransferWeek,
  TransferBalance,
  // History
  // other: otherReducer,
});

export default reducers;
