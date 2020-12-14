import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import LoginChild from '../../../components/Auth/LoginChild';
import {styles} from '../styles';

const Auth = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" color="#ffffff" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
            <Text style={styles.title}>Zwallet</Text>
          </View>
          <LoginChild {...props} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Auth;
