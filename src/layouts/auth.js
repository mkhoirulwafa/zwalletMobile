import React from 'react';
import {StyleSheet, View, Text, StatusBar, Dimensions} from 'react-native';

const Auth = ({child: Child}) => {
  return (
    <>
      <StatusBar barStyle="default" />
      <View contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.title}>Zwallet</Text>
        </View>
        <Child />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'NunitoSans-ExtraBold',
    fontWeight: '700',
    fontSize: 26,
    paddingVertical: Dimensions.get('screen').height - 670,
    alignSelf: 'center',
    color: '#6379F4',
  },
});

export default Auth;
