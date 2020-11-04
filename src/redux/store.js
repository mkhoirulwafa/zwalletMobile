import AsyncStorage from '@react-native-community/async-storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  AsyncStorage,
  whitelist: ['Auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
  let persistor = persistStore(store);
  return {store, persistor};
};

// export {store, persistor};
