import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  ToastAndroid,
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';
import {Button} from 'react-native-paper';
import {styles} from '../styles';
// import InputPin from './../../helpers/Pin';
import {useDispatch, useSelector} from 'react-redux';
import {GetUser, UpdateUser} from './../../redux/actions/user';
import InputPin from '../User/InputPin';

const CreatePin = (props) => {
  const [showErr, setShowErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pin, setPin] = useState('');

  const location = props.route.name;

  const Auth = useSelector((s) => s.Auth);
  const {data} = useSelector((s) => s.User);
  const dispatch = useDispatch();

  const onSubmit = () => {
    setLoading(true);
    dispatch(
      UpdateUser({
        data: {
          pin: pin,
        },
        token: Auth.data.token,
      }),
    );
    setTimeout(() => {
      ToastAndroid.show('Pin Created Successfully', ToastAndroid.CENTER);
      setLoading(false);
      props.navigation.navigate('PinCreated');
    }, 2000);
  };
  useEffect(() => {
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
              <Text style={styles.childTitle}>Create Security PIN</Text>
              <Text style={styles.descript}>
                Create a PIN that’s contain 6 digits number for security purpose
                in Zwallet.
              </Text>
            </View>
            <View style={styles2.wrap}>
              <InputPin length={6} onChangeText={(text) => setPin(text)} />
            </View>
            {showErr ? (
              <Text style={styles2.err}>Invalid Current PIN</Text>
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
              style={styles.button}>
              <Text style={styles2.white}>Confirm</Text>
            </Button>
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
  pin: {
    borderWidth: 1,
    borderColor: '#a9a9a9',
    flex: 0.16,
    marginLeft: 3,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'NunitoSans-Bold',
  },
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

export default CreatePin;
