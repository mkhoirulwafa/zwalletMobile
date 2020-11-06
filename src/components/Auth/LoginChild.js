import React, {useRef, useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Button, IconButton} from 'react-native-paper';
import {styles} from '../styles';
import {useDispatch, useSelector} from 'react-redux';
import {AuthLogin} from '../../redux/actions/auth';

const LoginChild = (props) => {
  const inputPassword = useRef();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [hidePassword, setHidePassword] = useState(true);
  const [emailFocus, setEmailFocus] = useState(true);
  const [passwordFocus, setPasswordFocus] = useState(true);
  const dispatch = useDispatch();
  const {loading} = useSelector((s) => s.Auth);

  const onSubmit = () => {
    console.log(email, password, 'dasd');
    dispatch(
      AuthLogin({
        email: email,
        password: password,
      }),
    );
  };
  return (
    <>
      <View style={styles.child}>
        <View style={styles.wrapContent}>
          <View>
            <View>
              <Text style={styles.childTitle}>Login</Text>
              <Text style={styles.descript}>
                Login to your existing account to access all the features in
                Zwallet.
              </Text>
            </View>
            <View style={styles.inputItem}>
              <View style={styles2.fullFlex}>
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
              <View style={styles2.flexNine}>
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
              <View style={styles2.flexOne}>
                <IconButton
                  underlineColorAndroid={passwordFocus ? '#a9a9a9' : '#6379F4'}
                  icon={hidePassword ? 'eye-off-outline' : 'eye-outline'}
                  color="#a9a9a9"
                  onPress={() => setHidePassword(!hidePassword)}
                />
              </View>
            </View>
            <View style={styles.linkWrap}>
              <RectButton
                onPress={() => props.navigation.navigate('ResetPassword')}>
                <View>
                  <Text style={styles.link}>Forgot Password?</Text>
                </View>
              </RectButton>
            </View>
            <Button
              uppercase={false}
              mode="contained"
              onPress={() => onSubmit()}
              color="#6379F4"
              disabled={loading}
              loading={loading}
              style={styles.button}>
              <Text style={styles2.white}>Login</Text>
            </Button>
            <Text style={[styles.descript]}>
              Don't have an account? Let's{'  '}
              <RectButton
                style={styles.linkWrap}
                onPress={() => props.navigation.navigate('Register')}>
                <View>
                  <Text style={[styles.link, styles2.primaryColor]}>
                    Signup
                  </Text>
                </View>
              </RectButton>
            </Text>
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
});

export default LoginChild;
