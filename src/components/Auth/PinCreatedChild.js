import React, {useState} from 'react';
import {View, Text, ToastAndroid, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-paper';
import {styles} from '../styles';

const PinCreatedChild = (props) => {
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      ToastAndroid.show('Silahkan Login', ToastAndroid.SHORT);
      props.navigation.navigate('Login');
      setLoading(false);
    }, 3000);
  };
  //   useEffect(()=>{

  //   })
  return (
    <>
      <View style={styles.child}>
        <View style={styles.wrapContent}>
          <View>
            <View>
              <Image
                style={styles2.img}
                source={
                  'https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/success.png?raw=true'
                }
              />
            </View>
            <View>
              <Text style={styles.childTitle}>PIN Successfully Created</Text>
              <Text style={styles.descript}>
                Your PIN was successfully created and you can now access all the
                features in Zwallet. Login to your new account and start
                exploring!
              </Text>
            </View>
            <Button
              uppercase={false}
              mode="contained"
              onPress={() => onSubmit()}
              color="#6379F4"
              disabled={loading}
              loading={loading}
              style={styles.button}>
              <Text style={styles2.white}>Login Now</Text>
            </Button>
          </View>
        </View>
      </View>
    </>
  );
};
const styles2 = StyleSheet.create({
  fullFlex: {flex: 1},
  flexNine: {flex: 0.9},
  flexOne: {flex: 0.1},
  white: {color: '#fff'},
  primaryColor: {color: '#6379F4'},
  img: {alignSelf: 'center', marginBottom: 20},
});

export default PinCreatedChild;
