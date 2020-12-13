import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Button, IconButton} from 'react-native-paper';
import {styles} from '../styles';
import {useDispatch} from 'react-redux';
import {RegisterUser} from '../../redux/actions/auth';

const RegisterChild = (props) => {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const [fullname, setFullname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fullnameFocus, setFullnameFocus] = useState(true);
  const [emailFocus, setEmailFocus] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
  const [passwordFocus, setPasswordFocus] = useState(true);

  const dispatch = useDispatch();

  const onSubmit = () => {
    const firstName = fullname.split(' ')[0];
    const lastName = fullname.split(' ')[1];
    setLoading(true);
    dispatch(
      RegisterUser({
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
      }),
    );
    setTimeout(() => {
      ToastAndroid.show(
        'Signup Success, create your own PIN',
        ToastAndroid.CENTER,
      );
      props.navigation.navigate('CreatePin');
      setLoading(false);
    }, 1500);
  };
  const onClick = () => {
    props.navigation.navigate('Login');
  };
  return (
    <>
      <KeyboardAvoidingView>
        <View style={styles.child}>
          <View style={styles.wrapContent}>
            <View>
              <View>
                <Text style={styles.childTitle}>Sign Up</Text>
                <Text style={styles.descript}>
                  Create your account to access Zwallet.
                </Text>
              </View>
              <View style={styles.inputItem}>
                <View style={styles2.fullFlex}>
                  <TextInput
                    underlineColorAndroid={
                      fullnameFocus ? '#a9a9a9' : '#6379F4'
                    }
                    inlineImageLeft={fullnameFocus ? 'person' : 'person_blue'}
                    onFocus={() => setFullnameFocus(!fullnameFocus)}
                    onBlur={() => setFullnameFocus(!fullnameFocus)}
                    inlineImagePadding={40}
                    placeholder="Enter your fullname"
                    autoCapitalize={'none'}
                    value={fullname}
                    onChangeText={(e) => setFullname(e)}
                    onSubmitEditing={() => inputEmail.current.focus()}
                    returnKeyType="next"
                  />
                </View>
              </View>
              <View style={styles.inputItem}>
                <View style={styles2.fullFlex}>
                  <TextInput
                    ref={inputEmail}
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
                    underlineColorAndroid={
                      passwordFocus ? '#a9a9a9' : '#6379F4'
                    }
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
                    underlineColorAndroid={
                      passwordFocus ? '#a9a9a9' : '#6379F4'
                    }
                    icon={hidePassword ? 'eye-off-outline' : 'eye-outline'}
                    color="#a9a9a9"
                    onPress={() => setHidePassword(!hidePassword)}
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
                <Text style={styles2.white}>Sign Up</Text>
              </Button>
              <Text style={[styles.descript]}>
                Already have an account? Let's{'  '}
                <RectButton style={styles.linkWrap} onPress={() => onClick()}>
                  <View>
                    <Text style={[styles.link, styles2.primaryColor]}>
                      Login
                    </Text>
                  </View>
                </RectButton>
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
const styles2 = StyleSheet.create({
  fullFlex: {flex: 1},
  flexNine: {flex: 0.9},
  flexOne: {flex: 0.1},
  white: {color: '#fff'},
  topMargin: {marginTop: 10},
  primaryColor: {color: '#6379F4'},
});
export default RegisterChild;
