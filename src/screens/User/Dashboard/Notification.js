import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';
import NotificationChild from '../../../components/User/NotificationChild';
// import {GetUser, UpdateUser} from './../../../../redux/actions/user';

const Notification = (props) => {
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
            <View style={styles2.flexOne}>
              <RectButton
                rippleColor="transparent"
                onPress={() => props.navigation.navigate('Dashboard')}>
                <IconButton icon="arrow-left" color="#fff" />
              </RectButton>
            </View>
            <View style={styles2.flexFour}>
              <Text style={styles2.semiBold}>Notification</Text>
            </View>
          </View>
        </View>
        <NotificationChild {...props} />
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
  prefix: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
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
  flexFour: {flex: 0.7},
  flexTwo: {flex: 0.3},
  flexOne: {flex: 0.2},
  white: {color: '#fff'},
  topMargin: {marginTop: 10, margin: 10},
  primaryColor: {color: '#6379F4'},
  text: {fontSize: 14, padding: 5, color: '#fff', fontWeight: '200'},
  semiBold: {
    fontSize: 18,
    padding: 2,
    fontWeight: '700',
    color: '#fff',
    marginVertical: 10,
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
    marginBottom: 5,
    height: 60,
    margin: 15,
    // backgroundColor: '#fff',
    // borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#6379F4',
  },
  button: {
    marginVertical: 30,
    padding: 7,
    borderRadius: 15,
  },
  wrapPhone: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  listText: {
    fontSize: 18,
    padding: 2,
    fontWeight: '700',
    color: '#4D4B57',
    // marginVertical: 10,
  },
  listDescript: {
    marginHorizontal: 15,
    marginVertical: 15,
    textAlign: 'center',
    lineHeight: 23,
    fontSize: 14,
    padding: 5,
    color: '#7A7886',
    fontWeight: '300',
  },
  listTitle: {
    fontSize: 14,
    // padding: 5,
    marginBottom: 5,
    color: '#7A7886',
    fontWeight: '300',
  },
  inputItem: {
    flexDirection: 'row',
    padding: 5,
    marginVertical: 5,
    borderRadius: 5,
    // borderBottomWidth: 1,
    marginBottom: 15,
  },
  amountList: {
    color: '#1EC15F',
    alignItems: 'center',
    paddingVertical: 10,
    marginRight: 5,
  },
  trailing: {
    marginLeft: 30,
    color: '#6379F4',
    fontSize: 14,
  },
  search: {
    flex: 1,
    flexDirection: 'row',
  },
});
export default Notification;
