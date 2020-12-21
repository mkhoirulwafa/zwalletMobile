import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  ChangePassword,
  ChangePin,
  Confirmation,
  CreatePin,
  EnterPinConfirm,
  Home,
  InputAmount,
  Login,
  ManagePhone,
  NewPassword,
  NewPhone,
  NewPin,
  Notification,
  PersonalInfo,
  PinCreated,
  Profile,
  Register,
  ResetPassword,
  Topup,
  TransactionHistory,
  Transfer,
  TransferStatus,
} from '../screens';
import messaging from '@react-native-firebase/messaging';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateUser} from '../redux/actions/user';
import {createStackNavigator} from '@react-navigation/stack';
import IonIcons from 'react-native-vector-icons/Ionicons';
// const Tab = createMaterialBottomTabNavigator();

function MyTabs(props) {
  const [loading, setLoading] = React.useState(true);
  const [initialRoute, setInitialRoute] = React.useState('Dashboard');
  const {isLogin, data} = useSelector((s) => s.Auth);

  const dispatch = useDispatch();
  React.useEffect(() => {
    const saveToDatabase = async (token) => {
      await dispatch(
        UpdateUser({
          data: {
            device_token: token,
          },
          token: data.token,
        }),
      );
    };
    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging()
      .getToken()
      .then((token) => {
        return saveToDatabase(token);
      });
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
          setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        setLoading(false);
      });
    return messaging().onTokenRefresh((token) => {
      saveToDatabase(token);
    });
  }, [dispatch, data.token, props.navigation]);
  if (loading) {
    return null;
  }
  const Stack = createStackNavigator();
  return (
    <>
      {isLogin ? (
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen
            name="Dashboard"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TransactionHistory"
            component={TransactionHistory}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PersonalInfo"
            component={PersonalInfo}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChangePin"
            component={ChangePin}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NewPin"
            component={NewPin}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ManagePhone"
            component={ManagePhone}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NewPhone"
            component={NewPhone}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Topup"
            component={Topup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Transfer"
            component={Transfer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="InputAmount"
            component={InputAmount}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Confirmation"
            component={Confirmation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EnterPinConfirm"
            component={EnterPinConfirm}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TransferStatus"
            component={TransferStatus}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NewPassword"
            component={NewPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CreatePin"
            component={CreatePin}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PinCreated"
            component={PinCreated}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </>
  );
}

// const tabs = {
//   Home: {
//     // < Screen name
//     labelStyle: {
//       color: '#5B37B7',
//     },
//     icon: {
//       component: <IonIcons name="grid-outline" />,
//       activeColor: 'rgba(91,55,183,1)',
//       inactiveColor: 'rgba(0,0,0,1)',
//     },
//     background: {
//       activeColor: 'rgba(223,215,243,1)',
//       inactiveColor: 'rgba(223,215,243,0)',
//     },
//   },
//   Profile: {
//     // < Screen name
//     labelStyle: {
//       color: '#1194AA',
//     },
//     icon: {
//       component: <IonIcons name="person-outline" />,
//       activeColor: 'rgba(17,148,170,1)',
//       inactiveColor: 'rgba(0,0,0,1)',
//     },
//     background: {
//       activeColor: 'rgba(207,235,239,1)',
//       inactiveColor: 'rgba(207,235,239,0)',
//     },
//   },
// };
// const Tabs = AnimatedTabBarNavigator();
// const CustomTabbar = () => {
//   return (
//     <Tabs.Navigator
//       tabBarOptions={{
//         activeTintColor: '#fff',
//         activeBackgroundColor: '#6379F4',
//         inactiveTintColor: '#222222',
//       }}
//       appereance={{
//         // floating: true,
//         tabBarBackground: '#6379F4',
//       }}>
//       <Tabs.Screen
//         name="Dashboard"
//         component={MyTabs}
//         options={{
//           tabBarIcon: ({focused, color, size}) => (
//             <IonIcons
//               name="grid-outline"
//               size={size ? size : 24}
//               color={focused ? color : '#222222'}
//               focused={focused}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="Transfer"
//         component={Transfer}
//         options={{
//           tabBarIcon: ({focused, color, size}) => (
//             <IonIcons
//               name="cash-outline"
//               size={size ? size : 24}
//               color={focused ? color : '#222222'}
//               focused={focused}
//             />
//           ),
//           tabBarBackground: '#000',
//         }}
//       />
//       <Tabs.Screen
//         name="Topup"
//         component={Topup}
//         options={{
//           tabBarIcon: ({focused, color, size}) => (
//             <IonIcons
//               name="add-outline"
//               size={size ? size : 24}
//               color={focused ? color : '#222222'}
//               focused={focused}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarIcon: ({focused, color, size}) => (
//             <IonIcons
//               name="person-outline"
//               size={size ? size : 24}
//               color={focused ? color : '#222222'}
//               focused={focused}
//             />
//           ),
//         }}
//       />
//     </Tabs.Navigator>
//   );
// };
const MainNavigator = (props) => {
  return (
    <>
      <NavigationContainer>
        <MyTabs navigation={props.navigation} />
      </NavigationContainer>
    </>
  );
};

export default MainNavigator;
