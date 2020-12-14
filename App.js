import 'react-native-gesture-handler';
import React from 'react';
import MainNavigator from './src/navigator';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as PaperProvider} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import messaging from '@react-native-firebase/messaging';
const App = (props) => {
  const {store, persistor} = configureStore();
  const [loading, setLoading] = React.useState(true);
  const [initialRoute, setInitialRoute] = React.useState('Dashboard');
  // const {isLogin, role} = useSelector((s) => s.Auth);
  React.useEffect(() => {
    SplashScreen.hide();
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      props.navigation.navigate(remoteMessage.data.type);
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        setLoading(false);
      });
  }, [props.navigation]);

  if (loading) {
    return null;
  }
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
