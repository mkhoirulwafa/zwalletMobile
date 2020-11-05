import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Login, Register, ResetPassword, NewPassword, CreatePin, PinCreated} from '../screens';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

const HomeStack = () => {
  //   const Auth = useSelector((s) => s.Auth);
  const token = AsyncStorage.getItem('token');
  return (
    <>
      <Stack.Navigator>
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
    </>
  );
};

const MainNavigator = (props) => {
  return (
    <NavigationContainer>
      <HomeStack navigation={props.navigation} />
    </NavigationContainer>
  );
};

export default MainNavigator;
