import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
// import {styles} from '../styles';
// import TopupChild from './../../../components/User/TopupChild';
import {RectButton} from 'react-native-gesture-handler';
import NumberFormat from 'react-number-format';
import {useDispatch, useSelector} from 'react-redux';
import {GetUser} from './../../../redux/actions/user';

const InputAmount = (props) => {
  const {id, avatar, fullName, phone} = props.route.params;
  const [amount, setAmount] = React.useState('');
  const [notes, setNotes] = React.useState('');
  const [notesFocus, setNotesFocus] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const {data} = useSelector((s) => s.User);
  const Auth = useSelector((s) => s.Auth);
  React.useEffect(() => {
    dispatch(
      GetUser({
        id: Auth.data.id,
        token: Auth.data.token,
      }),
    );
  }, [dispatch, Auth.data.id, Auth.data.token]);
  const onSubmit = () => {
    setLoading(true);
    console.log(amount);
    props.navigation.navigate('Confirmation', {
      id: id,
      avatar: avatar,
      fullName: fullName,
      phone: phone,
      amount: amount,
      notes: notes,
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
                <Text style={styles2.semiBold}>Transfer</Text>
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
          <View style={styles2.input}>
            <TextInput
              underlineColorAndroid="transparent"
              // style={styles.input}
              onChangeText={(e) => setAmount(e)}
              value={amount}
              keyboardType="numeric"
              placeholder="0.00"
              placeholderTextColor="#B5BDCC"
              fontSize={36}
              color="#6379F4"
            />
            {/* <NumberFormat
              value={amount}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'Rp'}
              renderText={(value) => (
                <TextInput
                  underlineColorAndroid="transparent"
                  // style={styles.input}
                  onChangeText={(e) => setAmount(e)}
                  value={value}
                  keyboardType="numeric"
                  placeholder="0.00"
                  placeholderTextColor="#B5BDCC"
                  fontSize={36}
                  color="#6379F4"
                />
              )}
            /> */}
            <View>
              <Text style={styles2.balance}>Rp{data.balance} Available</Text>
            </View>
            <View style={styles2.inputItem}>
              <View style={styles2.flexOne}>
                <TextInput
                  underlineColorAndroid={notesFocus ? '#a9a9a9' : '#6379F4'}
                  inlineImageLeft={notesFocus ? 'edit_2' : 'edit_2_blue'}
                  onFocus={() => setNotesFocus(!notesFocus)}
                  onBlur={() => setNotesFocus(!notesFocus)}
                  inlineImagePadding={40}
                  value={notes}
                  placeholder="Add some notes"
                  autoCapitalize={'none'}
                  onChangeText={(e) => setNotes(e)}
                />
              </View>
            </View>
          </View>
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
  inputItem: {
    flexDirection: 'row',
    padding: 5,
    marginVertical: 5,
    borderRadius: 5,
    // borderBottomWidth: 1,
    marginBottom: 15,
  },
  button: {
    marginVertical: 30,
    padding: 7,
    borderRadius: 15,
    margin: 10,
    // alignSelf: 'flex-end',
    // flex: 0.9,
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
  flexFive: {flex: 0.5},
  flexFour: {flex: 0.8, marginLeft: 10, paddingRight: 10},
  flexTwo: {flex: 0.2},
  flexOne: {flex: 1, marginVertical: 50},
  white: {color: '#fff'},
  topMargin: {marginTop: 10},
  primaryColor: {color: '#6379F4'},
  text: {fontSize: 14, padding: 5, color: '#fff', fontWeight: '200'},
  semiBold: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: '700',
    color: '#fff',
  },
  notification: {alignSelf: 'flex-end'},
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
});
export default InputAmount;
