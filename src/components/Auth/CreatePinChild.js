import React, {useRef, useState} from 'react';
import {View, Text, ToastAndroid, StyleSheet, TextInput} from 'react-native';
import {Button} from 'react-native-paper';
import {styles} from '../styles';
// import InputPin from './../../helpers/Pin';

const CreatePinChild = (props) => {
  const [loading, setLoading] = useState(false);
  const [pinVal, setPinVal] = useState();
  const [pinVal2, setPinVal2] = useState();
  const [pinVal3, setPinVal3] = useState();
  const [pinVal4, setPinVal4] = useState();
  const [pinVal5, setPinVal5] = useState();
  const [pinVal6, setPinVal6] = useState();
  const pin = useRef();
  const pin2 = useRef();
  const pin3 = useRef();
  const pin4 = useRef();
  const pin5 = useRef();
  const pin6 = useRef();

  const handleChange = (e, num) => {
    if (num === 1) {
      setPinVal(e);
      if (pinVal === '') {
        pin2.current.focus();
      }
    } else if (num === 2) {
      setPinVal2(e);
      if (pinVal2 === '') {
        pin3.current.focus();
      }
    } else if (num === 3) {
      setPinVal3(e);
      if (pinVal3 === '') {
        pin4.current.focus();
      }
    } else if (num === 4) {
      setPinVal4(e);
      if (pinVal4 === '') {
        pin5.current.focus();
      }
    } else if (num === 5) {
      setPinVal5(e);
      if (pinVal5 === '') {
        pin6.current.focus();
      }
    } else if (num === 6) {
      setPinVal6(e);
    }
  };
  const handleBackspace = (e, num) => {
    console.log(e);
    if (e === 'Backspace') {
      if (num === 1) {
        setPinVal('');
      } else if (num === 2) {
        setPinVal2('');
        pin.current.focus();
      } else if (num === 3) {
        setPinVal3('');
        pin2.current.focus();
      } else if (num === 4) {
        setPinVal4('');
        pin3.current.focus();
      } else if (num === 5) {
        setPinVal5('');
        pin4.current.focus();
      } else if (num === 6) {
        setPinVal6('');
        pin5.current.focus();
      }
    }
  };
  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      ToastAndroid.show(
        `Login Sukses, Selamat Datang ${pinVal}`,
        ToastAndroid.SHORT,
      );
      props.navigation.navigate('PinCreated');
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
              <Text style={styles.childTitle}>Create Security PIN</Text>
              <Text style={styles.descript}>
                Create a PIN that’s contain 6 digits number for security purpose
                in Zwallet.
              </Text>
            </View>
            <View style={styles2.wrap}>
              <TextInput
                onChangeText={(e) => handleChange(e, 1)}
                style={styles2.pin}
                keyboardType="number-pad"
                maxLength={1}
                ref={pin}
                value={pinVal}
                onChange={(e) => handleBackspace(e.nativeEvent.text, 1)}
              />
              <TextInput
                ref={pin2}
                style={styles2.pin}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(e) => handleChange(e, 2)}
                value={pinVal2}
                onChange={(e) => handleBackspace(e.nativeEvent.text, 2)}
              />
              <TextInput
                ref={pin3}
                style={styles2.pin}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(e) => handleChange(e, 3)}
                value={pinVal3}
                onChange={(e) => handleBackspace(e.nativeEvent.text, 3)}
              />
              <TextInput
                ref={pin4}
                style={styles2.pin}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(e) => handleChange(e, 4)}
                value={pinVal4}
                onChange={(e) => handleBackspace(e.nativeEvent.text, 4)}
              />
              <TextInput
                ref={pin5}
                style={styles2.pin}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(e) => handleChange(e, 5)}
                value={pinVal5}
                onChange={(e) => handleBackspace(e.nativeEvent.text, 5)}
              />
              <TextInput
                ref={pin6}
                style={styles2.pin}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(e) => handleChange(e, 6)}
                value={pinVal6}
                onChange={(e) => handleBackspace(e.nativeEvent.text, 6)}
              />
            </View>
            <Button
              uppercase={false}
              mode="contained"
              onPress={() => onSubmit()}
              color="#6379F4"
              disabled={loading}
              loading={loading}
              style={styles.button}>
              <Text style={styles2.white}>Confirm</Text>
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
  wrap: {flexDirection: 'row', padding: 4},
  pin: {
    borderWidth: 1,
    borderColor: '#a9a9a9',
    flex: 0.16,
    marginLeft: 3,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'NunitoSans-Bold',
  },
});

export default CreatePinChild;
