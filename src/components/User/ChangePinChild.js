import React, {useState, useEffect} from 'react';
import {View, Text, ToastAndroid, StyleSheet, Dimensions} from 'react-native';
import {Button} from 'react-native-paper';
import {styles} from '../styles';
import InputPin from './InputPin';
import {useDispatch, useSelector} from 'react-redux';
import {GetUser, UpdateUser} from './../../redux/actions/user';

const ChangePinChild = (props) => {
  const [showErr, setShowErr] = useState(false);
  const [pin, setPin] = useState('');
  const location = props.route.name;
  const Auth = useSelector((s) => s.Auth);
  const {loading, data} = useSelector((s) => s.User);
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (pin !== data.pin) {
      setShowErr(true);
      setTimeout(() => {
        setShowErr(false);
      }, 2000);
    } else if (pin === data.pin) {
      props.navigation.push('NewPin');
    }
  };
  const onSubmitUpdate = () => {
    dispatch(
      UpdateUser({
        data: {
          pin: pin,
        },
        token: Auth.data.token,
      }),
    );
    setTimeout(() => {
      ToastAndroid.show('Pin Changed Successfully', ToastAndroid.CENTER);
      props.navigation.navigate('Profile');
    }, 2000);
  };
  useEffect(() => {
    console.log(location);
    dispatch(
      GetUser({
        id: Auth.data.id,
        token: Auth.data.token,
      }),
    );
  }, [dispatch, Auth.data.id, Auth.data.token, location]);
  return (
    <>
      <View style={styles2.child}>
        <View style={styles.wrapContent}>
          <View style={styles2.wrapperRow}>
            <View>
              <Text style={styles.descript}>
                {location === 'ChangePin'
                  ? 'Enter your current 6 digits Zwallet PIN below to continue to the next steps.'
                  : 'Type your new 6 digits security PIN to use in Zwallet.'}
              </Text>
            </View>
            <InputPin length={6} onChangeText={(text) => setPin(text)} />
            {showErr ? (
              <Text style={styles2.err}>Invalid Current PIN</Text>
            ) : (
              <View />
            )}
          </View>
          <Button
            uppercase={false}
            mode="contained"
            onPress={() =>
              location === 'ChangePin' ? onSubmit() : onSubmitUpdate()
            }
            color="#6379F4"
            disabled={loading}
            loading={loading}
            style={[styles.button, styles2.topMargin]}>
            <Text style={styles2.white}>
              {location === 'ChangePin' ? 'Continue' : 'Change PIN'}
            </Text>
          </Button>
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
  wrap: {flexDirection: 'row', padding: 4},
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

export default ChangePinChild;
