import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import {styles} from '../styles';
import RegisterChild from './../../../components/Auth/RegisterChild';

const Auth = (props) => {
  React.useEffect(() => {
    console.log(props);
  });
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
            <Text style={styles.title}>Zwallet</Text>
          </View>
          <RegisterChild {...props} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Auth;
