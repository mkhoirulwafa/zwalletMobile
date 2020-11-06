import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Topup} from '../screens';
import {
  HomeStack,
  ProfileStack,
  AuthStack,
  TransferStack,
} from './StackNavigator';

import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import {styles} from '../screens/Auth/styles';
import {useSelector} from 'react-redux';

const NotFound = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" color="#514F5B" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
            <Text style={styles.title}>404 Not Found</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const Stack = createStackNavigator();
const NotFoundStack = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="NotFound"
          component={NotFound}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};
const Tab = createBottomTabNavigator();

function MyTabs(props) {
  const {isLogin} = useSelector((s) => s.Auth);
  return (
    <>
      {isLogin ? (
        <Tab.Navigator>
          <Tab.Screen name="Dashboard" component={HomeStack} />
          <Tab.Screen name="Transfer" component={TransferStack} />
          <Tab.Screen name="Topup" component={Topup} />
          <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
      ) : (
        <AuthStack navigation={props.navigation} />
      )}
    </>
  );
}
const MainNavigator = (props) => {
  const {isLogin} = useSelector((s) => s.Auth);
  return (
    <>
      <NavigationContainer>
        {isLogin ? (
          <MyTabs navigation={props.navigation} />
        ) : (
          <AuthStack navigation={props.navigation} />
        )}
      </NavigationContainer>
    </>
  );
};

export default MainNavigator;
