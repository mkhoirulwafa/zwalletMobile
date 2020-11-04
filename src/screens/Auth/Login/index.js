import React from 'react';
import {ScrollView, View, Text, TextInput, ToastAndroid} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Button, IconButton} from 'react-native-paper';
import {styles} from './../styles';

const Login = (props) => {
  const inputPassword = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const [password, setPassword] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [hidePassword, setHidePassword] = React.useState(true);

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
      <View style={styles.child}>
        <View style={styles.wrapContent}>
          <ScrollView>
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
                  inlineImageLeft="mail"
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
                  inlineImageLeft="lock"
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
                  icon={hidePassword ? 'eye-outline' : 'eye-off-outline'}
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
              Login
            </Button>
            <Text style={styles.descript}>
              Don't have an account? Let's{'   '}
              <RectButton
                style={styles.linkWrap}
                onPress={() => ToastAndroid.show('oii')}>
                <View>
                  <Text style={styles.link}>Signup</Text>
                </View>
              </RectButton>
            </Text>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Login;
