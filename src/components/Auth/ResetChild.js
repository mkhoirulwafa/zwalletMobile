import React, {useState} from 'react';
import {View, Text, TextInput, ToastAndroid, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {styles} from '../styles';

const ResetChild = (props) => {
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [emailFocus, setEmailFocus] = useState(true);
  const dispatch = useDispatch();

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      ToastAndroid.show('Please enter your new password', ToastAndroid.SHORT);
      dispatch(ResetPassword);
      props.navigation.navigate('NewPassword', {email: email});
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
                Enter your Zwallet e-mail so we can send you a password reset
                link.
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
                  returnKeyType="next"
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
              style={styles.button}>
              <Text style={styles2.white}>Continue</Text>
            </Button>
          </View>
        </View>
      </View>
    </>
  );
};
const styles2 = StyleSheet.create({
  fullFlex: {flex: 1},
  white: {color: '#fff'},
});
export default ResetChild;
