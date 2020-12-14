import React, {memo} from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const InputPin = memo((props) => {
  const {length, onChangeText} = props;
  const inputLength = React.useState(Array(length).fill(''))[0];
  const createRef = [];

  const _handleInput = (key, text) => {
    let currentIndex = key;
    inputLength[key] = text;

    if (text.length === 1 && key < length - 1) {
      currentIndex += 1;
      createRef[currentIndex].focus();
    }

    const pinString = inputLength.join('');
    onChangeText(pinString);
  };

  const _handleDelete = (key, event) => {
    if (event.nativeEvent.key === 'Backspace') {
      if (key > 0) {
        createRef[key - 1].focus();
      }
    }
  };

  return (
    <View style={styles.inputContainer}>
      {inputLength.map((val, key) => {
        const active = val ? '#6379F4' : '#4D4B57';

        return (
          <View key={key} style={[styles.inputView, {borderColor: active}]}>
            <TextInput
              ref={(input) => (createRef[key] = input)}
              maxLength={1}
              keyboardType="number-pad"
              onChangeText={(text) => _handleInput(key, text)}
              onKeyPress={(e) => _handleDelete(key, e)}
              style={[styles.inputText, {color: '#514F5B'}]}
            />
          </View>
        );
      })}
    </View>
  );
});

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  inputView: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: width / 40,
    marginHorizontal: width / 90,
    paddingVertical: 4,
    backgroundColor: '#fff',
  },
  inputText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    fontFamily: 'NunitoSans-Bold',
  },
});

export default InputPin;
