import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Login, Home} from '../screens';
// import {isLogin} from '../utils';
// import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const HomeStack = () => {
  //   const Auth = useSelector((s) => s.Auth);

  // React.useEffect(())
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      {/* {Auth.data.token ? (
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      )}
      {/* {isLogin ? (<>
        </>
      ):(
      )} */}
    </Stack.Navigator>
  );
};

// const Tab = createStackNavigator()
// const TabStack = () => {
//     return(
//         <Tab.Navigator>
//             <Tab.Scren name='Home' component={HomeStack} />
//         </Tab.Navigator>
//     )
// }

const MainNavigator = (props) => {
  return (
    <NavigationContainer>
      <HomeStack navigation={props.navigation} />
    </NavigationContainer>
  );
};

export default MainNavigator;
