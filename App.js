import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {RectButton, TouchableOpacity} from 'react-native-gesture-handler';
import {Button, IconButton} from 'react-native-paper';

const App = (props) => {
  const inputPassword = useRef();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [emailFocus, setEmailFocus] = useState(true);
  const [passwordFocus, setPasswordFocus] = useState(true);

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      ToastAndroid.show(
        `Login Sukses, Selamat Datang ${email}`,
        ToastAndroid.SHORT,
      );
      // props.navigation.navigate('Home');
      setLoading(false);
    }, 3000);
  };
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
                  <View style={{flex: 0.1}}>
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
                    onPress={() => ToastAndroid.show('oii')}>
                    <View>
                      <Text style={[styles.link, {color: '#6379F4'}]}>
                        Signup
                      </Text>
                    </View>
                  </RectButton>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: '#E5E5E5',
    // minHeight: '10%',
    overflow: 'hidden',
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
    fontWeight: '700',
    fontSize: 26,
    paddingVertical: Dimensions.get('screen').height - 670,
    alignSelf: 'center',
    color: '#6379F4',
  },
  child: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    minHeight:
      Dimensions.get('screen').height - (Dimensions.get('screen').height - 670),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 16.0,

    elevation: 40,
  },
  childTitle: {
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 23,
    color: '#3A3D42',
    marginBottom: 10,
  },
  descript: {
    fontWeight: '500',
    textAlign: 'center',
    color: '#a9a9a9',
    lineHeight: 23,
    marginBottom: 15,
  },
  inputItem: {
    flexDirection: 'row',
    padding: 5,
    marginVertical: 5,
    borderRadius: 5,
    // borderBottomWidth: 1,
    marginBottom: 15,
  },
  link: {
    color: '#a9a9a9',
    fontWeight: '700',
    textAlign: 'right',
  },
  wrapContent: {
    flexDirection: 'column',
    flex: 1,
  },
  button: {
    marginVertical: 30,
    padding: 5,
    borderRadius: 15,
  },
});

export default App;
