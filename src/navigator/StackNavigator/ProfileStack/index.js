import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Profile, PersonalInfo} from '../../../screens';
const Stack = createStackNavigator();

const ProfileStack = () => {
  //   const Auth = useSelector((s) => s.Auth);
  // const token = AsyncStorage.getItem('token');
  return (
    <>
      <Stack.Navigator initialRouteName="Profile">
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
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default ProfileStack;
