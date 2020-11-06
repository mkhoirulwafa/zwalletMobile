import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import {IconButton} from 'react-native-paper';
// import {styles} from '../styles';
// import TopupChild from './../../../components/User/TopupChild';
import {RectButton} from 'react-native-gesture-handler';

const Topup = (props) => {
  const [key, setKey] = React.useState(null);
  const [keyFocus, setKeyFocus] = React.useState(true);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6379F4" />
      <SafeAreaView style={styles2.container}>
        <View style={styles2.wrapperTop}>
          <View style={styles2.fullFlex}>
            <View style={styles2.flexTwo}>
              <RectButton onPress={() => props.navigation.goBack()}>
                <IconButton icon="arrow-left" color="#fff" />
              </RectButton>
            </View>
            <View style={styles2.flexFour}>
              <Text style={styles2.semiBold}>Find Receiver</Text>
            </View>
          </View>
          <View style={styles2.listItem} key={2}>
            <View style={styles2.fullFlex}>
              <TextInput
                icon="magnify"
                onFocus={() => setKeyFocus(!keyFocus)}
                onBlur={() => setKeyFocus(!keyFocus)}
                inlineImagePadding={40}
                placeholder="Search receiver here"
                autoCapitalize={'none'}
                value={key}
                onChangeText={(e) => setKey(e)}
                // onSubmitEditing={() => inputPassword.current.focus()}
                returnKeyType="next"
              />
            </View>
          </View>
        </View>
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
    padding: 5,
    width: Dimensions.get('screen').width,
    marginTop: 5,
  },
  wrapperTop: {
    height: 160,
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
  flexOne: {flex: 0.1},
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
  },
  btn: {
    flexDirection: 'row',
    marginHorizontal: 10,
    flex: 0.5,
    paddingVertical: 10,
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
    height: 60,
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
export default Topup;
