import React, {useRef, useState} from 'react';
import {View, Text, TextInput, ToastAndroid, StyleSheet} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import {styles} from '../styles';

const NewPasswordChild = (props) => {
  const inputPassword = useRef();
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePassword2, setHidePassword2] = useState(true);
  const [passwordFocus, setPasswordFocus] = useState(true);
  const [passwordFocus2, setPasswordFocus2] = useState(true);

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      ToastAndroid.show('Sukses Reset Password', ToastAndroid.SHORT);
      props.navigation.navigate('Login');
      setLoading(false);
    }, 3000);
  };
  return (
    <>
      <View style={styles.child}>
        <View style={styles.wrapContent}>
          <View>
            <View>
              <Text style={styles.childTitle}>Reset Password</Text>
              <Text style={styles.descript}>
                Create and confirm your new password so you can login to
                Zwallet.
              </Text>
            </View>
            <View style={styles.inputItem}>
              <View style={styles2.flexNine}>
                <TextInput
                  underlineColorAndroid={passwordFocus ? '#a9a9a9' : '#6379F4'}
                  inlineImageLeft={passwordFocus ? 'lock' : 'lock_blue'}
                  onFocus={() => setPasswordFocus(!passwordFocus)}
                  onBlur={() => setPasswordFocus(!passwordFocus)}
                  inlineImagePadding={40}
                  value={password}
                  placeholder="Enter your new password"
                  autoCapitalize={'none'}
                  secureTextEntry={hidePassword}
                  onChangeText={(e) => setPassword(e)}
                  onSubmitEditing={() => inputPassword.current.focus()}
                />
              </View>
              <View style={styles2.flexOne}>
                <IconButton
                  underlineColorAndroid={passwordFocus ? '#a9a9a9' : '#6379F4'}
                  icon={hidePassword ? 'eye-off-outline' : 'eye-outline'}
                  color="#a9a9a9"
                  onPress={() => setHidePassword(!hidePassword)}
                />
              </View>
            </View>
            <View style={styles.inputItem}>
              <View style={styles2.flexNine}>
                <TextInput
                  underlineColorAndroid={passwordFocus2 ? '#a9a9a9' : '#6379F4'}
                  inlineImageLeft={passwordFocus2 ? 'lock' : 'lock_blue'}
                  onFocus={() => setPasswordFocus2(!passwordFocus2)}
                  onBlur={() => setPasswordFocus2(!passwordFocus2)}
                  inlineImagePadding={40}
                  ref={inputPassword}
                  value={password2}
                  placeholder="Enter your new password"
                  autoCapitalize={'none'}
                  secureTextEntry={hidePassword2}
                  returnKeyType="send"
                  onChangeText={(e) => setPassword2(e)}
                  onSubmitEditing={() => onSubmit()}
                />
              </View>
              <View style={styles2.flexOne}>
                <IconButton
                  underlineColorAndroid={passwordFocus2 ? '#a9a9a9' : '#6379F4'}
                  icon={hidePassword2 ? 'eye-off-outline' : 'eye-outline'}
                  color="#a9a9a9"
                  onPress={() => setHidePassword2(!hidePassword2)}
                />
              </View>
            </View>
            <Button
              uppercase={false}
              mode="contained"
              onPress={() => onSubmit()}
              color="#6379F4"
              disabled={loading}
              loading={loading}
              style={[styles.button, styles2.topMargin]}>
              <Text style={styles2.white}>Reset Password</Text>
            </Button>
          </View>
        </View>
      </View>
    </>
  );
};

const styles2 = StyleSheet.create({
  flexNine: {flex: 0.9},
  flexOne: {flex: 0.1},
  white: {color: '#fff'},
  topMargin: {marginTop: 10},
});

export default NewPasswordChild;
