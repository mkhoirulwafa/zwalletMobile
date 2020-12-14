import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {FlatList, RectButton} from 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {GetUser} from './../../../../redux/actions/user';
import NumberFormat from 'react-number-format';

const ManagePhone = (props) => {
  const dispatch = useDispatch();

  const {data} = useSelector((s) => s.User);
  const Auth = useSelector((s) => s.Auth);
  React.useEffect(() => {
    console.log(Auth.data.id);
    dispatch(
      GetUser({
        id: Auth.data.id,
        token: Auth.data.token,
      }),
    );
  }, [dispatch, Auth.data.id, Auth.data.token]);

  const detailInfo = [
    {
      key: 1,
      title: 'Primary',
      value: data.phone,
      trailing: true,
    },
  ];
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6379F4" />
      <SafeAreaView style={styles2.container}>
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
              <Text style={styles2.semiBold}>Manage Phone Number</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={detailInfo}
          ListHeaderComponent={
            <View>
              <Text style={styles2.listDescript}>
                You can only delete the phone number and then you must add
                another phone number.
              </Text>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <View style={styles2.listItem} key={item.key}>
                <View style={styles2.fullFlex}>
                  <View style={styles2.flexFour}>
                    <Text style={styles2.listTitle}>{item.title}</Text>
                    <NumberFormat
                      value={item.value}
                      displayType={'text'}
                      format="+## ###-####-####"
                      mask="_"
                      renderText={(value) => (
                        <Text style={styles2.listText}>{value}</Text>
                      )}
                    />
                  </View>
                  <View style={styles2.flexTwo}>
                    {item.trailing ? (
                      <RectButton
                        rippleColor="transparent"
                        onPress={() => props.navigation.navigate('NewPhone')}>
                        <Text style={styles2.trailing}>
                          <IconButton
                            color="#7A7886"
                            icon="delete-outline"
                            style={styles2.trailing}
                          />
                        </Text>
                      </RectButton>
                    ) : (
                      <Text />
                    )}
                  </View>
                </View>
              </View>
            );
          }}
        />
        {/* <DashboardChild {...props} /> */}
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
  flexFour: {flex: 0.7},
  flexTwo: {flex: 0.3},
  flexOne: {flex: 0.2},
  white: {color: '#fff'},
  topMargin: {marginTop: 10},
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
    height: 80,
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

    elevation: 4,
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
    // marginHorizontal: 15,
    // marginVertical: 15,
    // textAlign: 'center',
    // lineHeight: 23,
    fontSize: 14,
    // padding: 5,
    marginBottom: 5,
    color: '#7A7886',
    fontWeight: '300',
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
});
export default ManagePhone;
