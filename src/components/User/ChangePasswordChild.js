import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateUser} from '../../redux/actions/user';
import {styles} from '../styles';
import {AuthLogout} from './../../redux/actions/auth';

const ChangePasswordChild = (props) => {
  const inputPassword = useRef();
  const inputPassword2 = useRef();
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);
  const [password3, setPassword3] = useState(null);
  const [showErr, setShowErr] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePassword2, setHidePassword2] = useState(true);
  const [hidePassword3, setHidePassword3] = useState(true);
  const [passwordFocus, setPasswordFocus] = useState(true);
  const [passwordFocus2, setPasswordFocus2] = useState(true);
  const [passwordFocus3, setPasswordFocus3] = useState(true);

  const dispatch = useDispatch();
  const AuthReducer = useSelector((s) => s.Auth);
  const {loading, data} = useSelector((s) => s.User);
  React.useEffect(() => {
    dispatch(
      UpdateUser({
        token: AuthReducer.data.token,
      }),
    );
  }, [dispatch, AuthReducer.data.token]);

  const onSubmit = () => {
    if (password2 !== password3) {
      setShowErr(true);
      setTimeout(() => {
        setShowErr(false);
      }, 2000);
    } else if (password2 === password3) {
      dispatch(
        UpdateUser({
          data: {
            currentPassword: password,
            password: password3,
          },
          token: AuthReducer.data.token,
        }),
      );
      if (!data) {
        ToastAndroid.show('Wrong Current Password', ToastAndroid.CENTER);
      } else {
        setTimeout(() => {
          ToastAndroid.show(
            'Change Password Success, Please Login',
            ToastAndroid.CENTER,
          );
          dispatch(AuthLogout());
        }, 1500);
      }
      //   setLoading(false);
    }
  };
  return (
    <>
      <View style={styles2.child}>
        <View style={styles.wrapContent}>
          <View style={styles2.wrapperRow}>
            <View>
              <Text style={styles.descript}>
                You must enter your current password and then type your new
                password twice.
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
                  placeholder="Current password"
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
                  placeholder="New password"
                  autoCapitalize={'none'}
                  secureTextEntry={hidePassword2}
                  returnKeyType="send"
                  onChangeText={(e) => setPassword2(e)}
                  onSubmitEditing={() => inputPassword2.current.focus()}
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
            <View style={styles.inputItem}>
              <View style={styles2.flexNine}>
                <TextInput
                  underlineColorAndroid={passwordFocus3 ? '#a9a9a9' : '#6379F4'}
                  inlineImageLeft={passwordFocus3 ? 'lock' : 'lock_blue'}
                  onFocus={() => setPasswordFocus3(!passwordFocus3)}
                  onBlur={() => setPasswordFocus3(!passwordFocus3)}
                  inlineImagePadding={40}
                  ref={inputPassword2}
                  value={password3}
                  placeholder="Repeat password"
                  autoCapitalize={'none'}
                  secureTextEntry={hidePassword3}
                  returnKeyType="send"
                  onChangeText={(e) => setPassword3(e)}
                  onSubmitEditing={() => onSubmit()}
                />
              </View>
              <View style={styles2.flexOne}>
                <IconButton
                  underlineColorAndroid={passwordFocus3 ? '#a9a9a9' : '#6379F4'}
                  icon={hidePassword3 ? 'eye-off-outline' : 'eye-outline'}
                  color="#a9a9a9"
                  onPress={() => setHidePassword3(!hidePassword3)}
                />
              </View>
            </View>
            {showErr ? (
              <Text style={styles2.err}>
                Repeat your new password correctly!{' '}
              </Text>
            ) : (
              <View />
            )}
            <Button
              uppercase={false}
              mode="contained"
              onPress={() => onSubmit()}
              color="#6379F4"
              disabled={loading}
              loading={loading}
              style={[styles.button, styles2.topMargin]}>
              <Text style={styles2.white}>Change Password</Text>
            </Button>
          </View>
        </View>
      </View>
    </>
  );
};

const styles2 = StyleSheet.create({
  child: {
    backgroundColor: '#FAFCFF',
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
  flexNine: {flex: 0.9},
  flexOne: {flex: 0.1},
  white: {color: '#fff'},
  wrapperRow: {
    flex: 1,
  },
  topMargin: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('screen').width - 40,
  },
  err: {
    color: '#FF5B37',
    textAlign: 'center',
  },
});

export default ChangePasswordChild;
