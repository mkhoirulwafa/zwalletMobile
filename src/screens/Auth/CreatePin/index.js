import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import CreatePinChild from '../../../components/Auth/CreatePinChild';
import {styles} from '../styles';

const CreatePin = (props) => {
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
          <CreatePinChild {...props} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default CreatePin;
