import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Transfer} from '../../../screens';
const Stack = createStackNavigator();

const TransferStack = () => {
  //   const Auth = useSelector((s) => s.Auth);
  // const token = AsyncStorage.getItem('token');
  return (
    <>
      <Stack.Navigator initialRouteName="Transfer">
        <Stack.Screen
          name="Transfer"
          component={Transfer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default TransferStack;
