import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import {styles} from '../styles';
import ResetChild from './../../../components/Auth/ResetChild';

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
          <ResetChild {...props} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Auth;
