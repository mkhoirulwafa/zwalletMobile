import React, {useRef, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const InputPin = () => {
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
  //   handleNext = (e) => {
  //     let nextInput = document.getElementsByTagName('input');
  //     for (let i = 0; i < nextInput.length; i++) {
  //       if (nextInput[i].value && i !== nextInput.length - 1) {
  //         nextInput[i + 1].focus();
  //       }

  //       if (!nextInput[i].value) {
  //         nextInput[i].addEventListener('keydown', (e) => {
  //           console.log(e);
  //           if (e.key === 'Backspace' || e.key === 'Delete') {
  //             if (i === nextInput.length - 1 && nextInput[i].value) {
  //               nextInput[i].value = '';
  //             } else if (nextInput[i].value) {
  //               nextInput[i].value = '';
  //             } else {
  //               nextInput[i - 1].focus();
  //             }
  //           }
  //         });
  //       }
  //     }
  //   };
  //   const handleKeyPress = ({nativeEvent: {key: keyValue}}) => {
  //     if (keyValue === 'Backspace') {
  //       return handleKeyPressed();
  //     }
  //   };
  //   const handleKeyPressed = ()=>{
  //       pin
  //   }
  return (
    <>
      <View style={styles.wrap}>
        <TextInput
          onChangeText={(e) => handleChange(e, 1)}
          style={styles.pin}
          keyboardType="number-pad"
          maxLength={1}
          ref={pin}
          value={pinVal}
          onKeyPress={(e) => handleBackspace(e.nativeEvent.key, 1)}
        />
        <TextInput
          ref={pin2}
          style={styles.pin}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(e) => handleChange(e, 2)}
          value={pinVal2}
          onKeyPress={(e) => handleBackspace(e.nativeEvent.key, 2)}
        />
        <TextInput
          ref={pin3}
          style={styles.pin}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(e) => handleChange(e, 3)}
          value={pinVal3}
          onKeyPress={(e) => handleBackspace(e.nativeEvent.key, 3)}
        />
        <TextInput
          ref={pin4}
          style={styles.pin}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(e) => handleChange(e, 4)}
          value={pinVal4}
          onKeyPress={(e) => handleBackspace(e.nativeEvent.key, 4)}
        />
        <TextInput
          ref={pin5}
          style={styles.pin}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(e) => handleChange(e, 5)}
          value={pinVal5}
          onKeyPress={(e) => handleBackspace(e.nativeEvent.key, 5)}
        />
        <TextInput
          ref={pin6}
          style={styles.pin}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(e) => handleChange(e, 6)}
          value={pinVal6}
          onKeyPress={(e) => handleBackspace(e.nativeEvent.key, 6)}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
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
export default InputPin;
