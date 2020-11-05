import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import PinCreatedChild from '../../../components/Auth/PinCreatedChild';
import {styles} from '../styles';

const PinCreated = (props) => {
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
          <PinCreatedChild {...props} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default PinCreated;
