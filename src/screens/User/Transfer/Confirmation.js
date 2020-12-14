import React, {useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
// import {styles} from '../styles';
// import TopupChild from './../../../components/User/TopupChild';
import {RectButton, FlatList} from 'react-native-gesture-handler';
import NumberFormat from 'react-number-format';
import {useDispatch, useSelector} from 'react-redux';
import {GetUserToTransfer} from './../../../redux/actions/user';

const Confirmation = (props) => {
  const {id, avatar, fullName, phone, amount, notes} = props.route.params;
  const flatListRef = useRef(null);
  const [loading, setLoading] = React.useState(false);
  const [curDate, setCurDate] = React.useState('');
  const [curTime, setCurTime] = React.useState('');
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const Users = useSelector((s) => s.UserToTransfer);
  React.useEffect(() => {
    dispatch(
      GetUserToTransfer({
        id: Auth.data.id,
        token: Auth.data.token,
      }),
    );
    let d = new Date();
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let date = new Date().getDate(); //Current Date
    let month = months[d.getMonth()];
    let year = new Date().getFullYear(); //Current Year
    let hours = new Date().getHours(); //Current Hours
    let min = new Date().getMinutes(); //Current Minutes
    setCurDate(month + ' ' + date + ', ' + year);
    setCurTime(hours + '.' + min);
  }, [dispatch, Auth.data.id, Auth.data.token]);
  //   useEffect(() => {
  //     dispatch(
  //       GetUser({
  //         id: Auth.data.id,
  //         token: Auth.data.token,
  //       }),
  //     );
  //   }, [Auth.data.token, Auth.data.id, dispatch]);
  let one = Number(Users.data.balance);
  let two = Number(amount);
  const sum = String(one - two);

  const confirmationDetail = [
    {
      key: 1,
      title: 'Amount',
      value: String(amount),
      title2: 'Balance Left',
      value2: sum,
    },
    {
      key: 2,
      title: 'Date',
      value: curDate,
      title2: 'Time',
      value2: curTime,
    },
  ];
  const onSubmit = () => {
    setLoading(true);
    props.navigation.navigate('EnterPinConfirm', {
      idReceiver: id,
      idSender: Auth.data.id,
      avatar: avatar,
      fullName: fullName,
      phone: phone,
      amount: amount,
      notes: notes,
      date: curDate,
      time: curTime,
    });
    setLoading(false);
  };
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6379F4" />
      <SafeAreaView style={styles2.container}>
        <View style={styles2.wrapperRow}>
          <View style={styles2.wrapperTop}>
            <View style={styles2.fullFlex}>
              <View style={styles2.flexTwo}>
                <RectButton
                  rippleColor="transparent"
                  onPress={() => props.navigation.goBack()}>
                  <IconButton icon="arrow-left" color="#fff" />
                </RectButton>
              </View>
              <View style={styles2.flexFour}>
                <Text style={styles2.semiBold}>Confirmation</Text>
              </View>
            </View>
            <View style={styles2.listItem} key={2}>
              <View style={styles2.listSearch} key={1}>
                <View style={styles2.fullFlex}>
                  <View style={styles2.flexTwo}>
                    <Image
                      style={[styles2.img]}
                      source={{
                        uri: avatar,
                      }}
                    />
                  </View>
                  <View style={styles2.flexFour}>
                    <Text style={styles2.listText}>{fullName}</Text>
                    <NumberFormat
                      value={phone}
                      displayType={'text'}
                      format="+## ###-####-####"
                      renderText={(value) => (
                        <Text style={styles2.listDescript}>{value}</Text>
                      )}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <FlatList
            ref={flatListRef}
            data={confirmationDetail}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <View style={styles2.fullFlex}>
                  <View style={styles2.flexFive}>
                    <Text style={styles2.title}>{item.title}</Text>
                    {item.title === 'Amount' ||
                    item.title === 'Balance Left' ? (
                      <NumberFormat
                        value={item.value}
                        displayType={'text'}
                        thousandSeparator={true}
                        renderText={(value) => (
                          <Text style={styles2.listText}>Rp{value}</Text>
                        )}
                      />
                    ) : (
                      <Text style={styles2.listText}>{item.value}</Text>
                    )}
                  </View>
                  <View style={styles2.flexFive}>
                    <Text style={styles2.title}>{item.title2}</Text>
                    {item.title === 'Amount' ||
                    item.title2 === 'Amount' ||
                    item.title === 'Balance Left' ||
                    item.title2 === 'Balance Left' ? (
                      <NumberFormat
                        value={item.value2}
                        displayType={'text'}
                        thousandSeparator={true}
                        renderText={(value) => (
                          <Text style={styles2.listText}>Rp{value}</Text>
                        )}
                      />
                    ) : (
                      <Text style={styles2.listText}>{item.value2}</Text>
                    )}
                  </View>
                </View>
              );
            }}
            ListFooterComponent={
              <View style={styles2.flexFive}>
                <Text style={styles2.title}>Notes</Text>
                <Text style={styles2.listText}>{notes}</Text>
              </View>
            }
          />
        </View>
        <Button
          uppercase={false}
          mode="contained"
          onPress={() => onSubmit()}
          color="#6379F4"
          disabled={loading}
          loading={loading}
          style={styles2.button}>
          <Text style={styles2.white}>Continue</Text>
        </Button>

        {/* <TopupChild /> */}
      </SafeAreaView>
    </>
  );
};
// listDescript container wrapperRow wrapperTop semiBold listItem listSearch fullFlex flexTwo img flexFour listText
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
    height: 200,
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
});
export default Confirmation;
