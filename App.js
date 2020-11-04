import 'react-native-gesture-handler';
import React from 'react';
import MainNavigator from './src/navigator';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as PaperProvider} from 'react-native-paper';
const App = () => {
  const {store, persistor} = configureStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <MainNavigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
