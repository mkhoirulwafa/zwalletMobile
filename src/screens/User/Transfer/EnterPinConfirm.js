import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import {RectButton} from 'react-native-gesture-handler';
import InputPin from '../../../components/User/InputPin';
import {useDispatch, useSelector} from 'react-redux';
import {PostTransfer} from '../../../redux/actions/transfer';

const EnterPinConfirm = (props) => {
  const {
    idReceiver,
    idSender,
    avatar,
    fullName,
    phone,
    amount,
    notes,
    date,
    time,
  } = props.route.params;
  const [showErr, setShowErr] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const Users = useSelector((s) => s.UserToTransfer);
  const [pin, setPin] = React.useState();

  const onSubmit = () => {
    if (pin !== Users.data.pin) {
      setShowErr(true);
      setTimeout(() => {
        setShowErr(false);
      }, 2000);
    } else if (pin === Users.data.pin) {
      dispatch(
        PostTransfer({
          data: {
            sender_id: idSender,
            receiver_id: idReceiver,
            type: 'Transfer',
            amount: amount,
            notes: notes,
          },
          token: Auth.data.token,
        }),
      );
      props.navigation.push('TransferStatus', {
        idReceiver: idReceiver,
        idSender: Auth.data.id,
        avatar: avatar,
        fullName: fullName,
        phone: phone,
        amount: amount,
        notes: notes,
        date: date,
        time: time,
      });
    }
  };
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6379F4" />
      <SafeAreaView style={styles2.container}>
        <View style={styles2.wrapperRow}>
          <View style={styles2.wrapperTop}>
            <View style={styles2.fullFlex}>
              <View style={styles2.flexOne}>
                <RectButton
                  rippleColor="transparent"
                  onPress={() => props.navigation.goBack()}>
                  <IconButton icon="arrow-left" color="#fff" />
                </RectButton>
              </View>
              <View style={styles2.flexFour}>
                <Text style={styles2.semiBold}>Enter Your PIN</Text>
              </View>
            </View>
          </View>
          <View>
            <View>
              <Text style={styles2.childTitle}>Enter PIN to Transfer</Text>
              <Text style={styles2.descript}>
                Enter your 6 digits PIN for confirmation to continue
                transferring money.
              </Text>
            </View>
            <InputPin length={6} onChangeText={(text) => setPin(text)} />
          </View>
        </View>
        {showErr ? <Text style={styles2.err}>Invalid PIN</Text> : <View />}
        <Button
          uppercase={false}
          mode="contained"
          onPress={() => onSubmit()}
          color="#6379F4"
          disabled={loading}
          loading={loading}
          style={styles2.button}>
          <Text style={styles2.white}>Transfer Now</Text>
        </Button>
      </SafeAreaView>
    </>
  );
};

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'NunitoSans-Regular',
    backgroundColor: '#FAFCFF',
  },
  fullFlex: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    width: Dimensions.get('screen').width,
    marginTop: 10,
  },
  wrapperRow: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    marginVertical: 30,
    padding: 7,
    borderRadius: 15,
    margin: 10,
  },
  wrapperTop: {
    height: 80,
    marginBottom: 20,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
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
  flexFour: {flex: 0.8, marginLeft: 10, paddingRight: 10},
  flexTwo: {flex: 0.2},
  flexFive: {
    flex: 0.5,
    margin: 5,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 7,
  },
  white: {color: '#fff'},
  semiBold: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: '700',
    color: '#fff',
  },
  img: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 15,
  },
  labelBtn: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
    color: '#514F5B',
    marginRight: 5,
  },
  listItem: {
    marginTop: 50,
    height: 100,
    margin: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 7,
  },
  listDetail: {
    // marginTop: 50,
    height: 80,
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 7,
  },
  input: {
    padding: 5,
    fontFamily: 'NunitoSans-Bold',
    marginVertical: 5,
    borderRadius: 5,
    // borderBottomWidth: 1,
    marginBottom: 15,
    alignItems: 'center',
  },
  listText: {
    fontSize: 16,
    padding: 5,
    color: '#4D4B57',
    fontWeight: '700',
  },
  listDescript: {
    fontSize: 12,
    padding: 5,
    color: '#7A7886',
    fontWeight: '300',
  },
  title: {
    fontSize: 12,
    color: '#7A7886',
  },
  err: {
    color: '#FF5B37',
    textAlign: 'center',
  },
});
export default EnterPinConfirm;
