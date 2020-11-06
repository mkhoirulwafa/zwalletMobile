import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Topup, Profile} from '../../../screens';
const Stack = createStackNavigator();

const HomeStack = () => {
  //   const Auth = useSelector((s) => s.Auth);
  // const token = AsyncStorage.getItem('token');
  return (
    <>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Dashboard"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Topup"
          component={Topup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default HomeStack;
