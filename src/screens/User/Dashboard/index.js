import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  Dimensions,
  ToastAndroid,
  BackHandler,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';
import DashboardChild from './../../../components/User/DashboardChild';
import {useDispatch, useSelector} from 'react-redux';
import {GetUser} from './../../../redux/actions/user';
import NumberFormat from 'react-number-format';
import {io} from 'socket.io-client';

const Home = (props) => {
  const dispatch = useDispatch();
  const {loading, data} = useSelector((s) => s.User);
  const Auth = useSelector((s) => s.Auth);
  // const [touched, setTouched] = React.useState(false);
  const [balance, setBalance] = React.useState(data?.balance);
  const [exitApp, setExitApp] = React.useState(0);

  const socket = io('http://34.193.25.222:8000', {
    query: {itemId: Auth.data.id},
  });
  socket.emit('balance', Auth.data.id);

  React.useEffect(() => {
    const handleRefresh = () => {
      dispatch(
        GetUser({
          id: Auth.data.id,
          token: Auth.data.token,
        }),
      );
    };

    const unsubscribe = props.navigation.addListener('focus', () => {
      handleRefresh();
    });
    const backAction = () => {
      setTimeout(() => {
        setExitApp(0);
      }, 2000); // 2 seconds to tap second-time

      if (exitApp === 0) {
        setExitApp(exitApp + 1);

        ToastAndroid.show('Press Back Again to Exit App', ToastAndroid.SHORT);
      } else if (exitApp === 1) {
        BackHandler.exitApp();
      }
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    dispatch(
      GetUser({
        id: Auth.data.id,
        token: Auth.data.token,
      }),
    );

    return () => {
      backHandler.remove();
      unsubscribe;
    };
  }, [
    dispatch,
    data.balance,
    data.avatar,
    Auth.data.id,
    Auth.data.token,
    props.navigation,
    exitApp,
  ]);

  React.useEffect(() => {
    const handleRefresh2 = () => {
      if (socket == null) return;

      socket.on('newBalance', ({newBalance}) => {
        console.log(newBalance, 'hasil soket on newBalance');
        setBalance(newBalance);
      });
    };

    const unsubscribe = props.navigation.addListener('focus', () => {
      handleRefresh2();
      socket.off('balance');
      socket.off('newBalance');
    });
    if (socket == null) return;

    socket.on('newBalance', ({newBalance}) => {
      console.log(newBalance, 'hasil soket on newBalance');
      setBalance(newBalance);
    });
    return () => {
      handleRefresh2();
      unsubscribe;
      socket.off('newBalance');
      socket.off('balance');
    };
  }, [socket, balance, setBalance, props.navigation, Auth.data.id]);
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#6379F4"
        color="#6379F4"
      />
      <SafeAreaView style={styles2.container}>
        <View style={styles2.wrapperTop}>
          <View style={styles2.fullFlex}>
            <View style={styles2.flexTwo}>
              <RectButton onPress={() => props.navigation.navigate('Profile')}>
                <Image
                  style={styles2.img}
                  source={{
                    uri: loading
                      ? 'https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true'
                      : data.avatar,
                  }}
                />
              </RectButton>
            </View>
            <View style={styles2.flexFour}>
              <Text style={styles2.text}>Balance</Text>
              <NumberFormat
                value={balance === data.balance ? balance : data.balance}
                defaultValue="0"
                decimalSeparator={','}
                thousandSeparator={'.'}
                displayType={'text'}
                renderText={(value) => (
                  <Text style={styles2.semiBold}>{value}</Text>
                )}
                prefix={'Rp'}
                // suffix={',-'}
              />
            </View>
            <View>
              <RectButton
                rippleColor="transparent"
                onPress={() => props.navigation.push('Notification')}>
                <IconButton icon="bell-outline" color="#fff" />
              </RectButton>
            </View>
          </View>
        </View>
        <DashboardChild {...props} />
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
  wrapperTop: {
    height: 100,
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
  flexFive: {flex: 0.5},
  flexFour: {flex: 0.8, marginLeft: 10, paddingRight: 10},
  flexTwo: {flex: 0.2},
  white: {color: '#fff'},
  topMargin: {marginTop: 10},
  primaryColor: {color: '#6379F4'},
  text: {fontSize: 14, padding: 5, color: '#fff', fontWeight: '200'},
  semiBold: {fontSize: 20, padding: 2, fontWeight: '700', color: '#fff'},
  notification: {alignSelf: 'flex-end'},
  img: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 15,
  },
  btn: {
    flexDirection: 'row',
    marginHorizontal: 10,
    flex: 0.5,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  labelBtn: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
    color: '#514F5B',
    marginRight: 5,
  },
  listItem: {
    marginTop: 20,
    height: 100,
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
  listText: {
    fontSize: 16,
    padding: 5,
    color: '#4D4B57',
    fontWeight: '700',
  },
  listDescript: {
    fontSize: 12,
    padding: 5,
    color: '#4D4B57',
    fontWeight: '300',
  },
  amountList: {
    color: '#1EC15F',
    alignItems: 'center',
    paddingVertical: 10,
    marginRight: 5,
  },
});
export default Home;
