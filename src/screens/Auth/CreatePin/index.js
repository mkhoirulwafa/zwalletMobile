import React, {useRef, useState} from 'react';
import {View, Text, TextInput, ToastAndroid} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Button, IconButton} from 'react-native-paper';
import Auth from './../../../layouts/auth';
import {styles} from './../styles';
import AsyncStorage from '@react-native-community/async-storage';

const CreatePin = (props) => {
  const inputPassword = useRef();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [emailFocus, setEmailFocus] = useState(true);
  const [passwordFocus, setPasswordFocus] = useState(true);
  let token = 'ijojadoqw0qjdadq0jwd';

  const onSubmit = () => {
    setLoading(true);
    AsyncStorage.setItem('token', token);
    setTimeout(() => {
      ToastAndroid.show(
        `Login Sukses, Selamat Datang ${email}`,
        ToastAndroid.SHORT,
      );
      // props.navigation.navigate('Register');
      // props.navigation.navigate('Home');
      setLoading(false);
    }, 3000);
  };
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
            <View style={styles.inputItem}>
              <View style={{flex: 1}}>
                <TextInput
                  underlineColorAndroid={emailFocus ? '#a9a9a9' : '#6379F4'}
                  inlineImageLeft={emailFocus ? 'mail' : 'mail_blue'}
                  onFocus={() => setEmailFocus(!emailFocus)}
                  onBlur={() => setEmailFocus(!emailFocus)}
                  inlineImagePadding={40}
                  placeholder="Enter your email"
                  autoCapitalize={'none'}
                  value={email}
                  onChangeText={(e) => setEmail(e)}
                  onSubmitEditing={() => inputPassword.current.focus()}
                  returnKeyType="next"
                />
              </View>
            </View>
            <View style={styles.inputItem}>
              <View style={{flex: 0.9}}>
                <TextInput
                  underlineColorAndroid={passwordFocus ? '#a9a9a9' : '#6379F4'}
                  inlineImageLeft={passwordFocus ? 'lock' : 'lock_blue'}
                  onFocus={() => setPasswordFocus(!passwordFocus)}
                  onBlur={() => setPasswordFocus(!passwordFocus)}
                  inlineImagePadding={40}
                  ref={inputPassword}
                  value={password}
                  placeholder="Enter your password"
                  autoCapitalize={'none'}
                  secureTextEntry={hidePassword}
                  returnKeyType="send"
                  onChangeText={(e) => setPassword(e)}
                  onSubmitEditing={() => onSubmit()}
                />
              </View>
              <View style={{flex: 0.1}}>
                <IconButton
                  underlineColorAndroid={passwordFocus ? '#a9a9a9' : '#6379F4'}
                  icon={hidePassword ? 'eye-off-outline' : 'eye-outline'}
                  color="#a9a9a9"
                  onPress={() => setHidePassword(!hidePassword)}
                />
              </View>
            </View>
            <View style={styles.linkWrap}>
              <RectButton onPress={() => ToastAndroid.show('oii')}>
                <View>
                  <Text style={styles.link}>Forgot Password?</Text>
                </View>
              </RectButton>
            </View>
            <Button
              mode="contained"
              onPress={() => onSubmit()}
              color="#6379F4"
              disabled={loading}
              loading={loading}
              style={styles.button}>
              <Text style={{color: '#fff'}}>Login</Text>
            </Button>
            <Text style={[styles.descript]}>
              Don't have an account? Let's{'  '}
              <RectButton
                style={styles.linkWrap}
                onPress={() => props.navigation.navigate('Register')}>
                <View>
                  <Text style={[styles.link, {color: '#6379F4'}]}>Signup</Text>
                </View>
              </RectButton>
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};
const App = (props) => {
  return <Auth {...props} child={CreatePin} />;
};

export default App;
