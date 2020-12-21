import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
  Keyboard,
} from 'react-native';
import {IconButton} from 'react-native-paper';
// import {styles} from '../styles';
// import TransferChild from './../../../components/User/TransferChild';
import {FlatList, RectButton} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {SearchUser, SearchAllUser} from '../../../redux/actions/user';
import NumberFormat from 'react-number-format';

const Transfer = (props) => {
  const [key, setKey] = React.useState(null);
  const [limit, setLimit] = React.useState(5);
  const dispatch = useDispatch();

  const {data} = useSelector((s) => s.SearchUser);
  const Auth = useSelector((s) => s.Auth);

  // const handleChange = (e) ={
  //   setKey(e),
  //   console.log(key)
  //   // dispatch(
  //   //   SearchUser({
  //   //     key: key,
  //   //     token: Auth.data.token,
  //   //   })
  //   // );
  // }
  React.useEffect(() => {
    if (key !== null && key !== '') {
      // Keyboard.dismiss();
      dispatch(
        SearchUser({
          key: key,
          limit: limit,
          token: Auth.data.token,
        }),
      );
    } else {
      dispatch(
        SearchAllUser({
          limit: limit,
          token: Auth.data.token,
        }),
      );
    }
  }, [dispatch, limit, key, Auth.data.token]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6379F4" />
      <SafeAreaView style={styles2.container}>
        <View style={styles2.wrapperTop}>
          <View style={styles2.fullFlex}>
            <View style={styles2.flexTwo}>
              <RectButton
                rippleColor="transparent"
                onPress={() => props.navigation.navigate('Dashboard')}>
                <IconButton icon="arrow-left" color="#fff" />
              </RectButton>
            </View>
            <View style={styles2.flexFour}>
              <Text style={styles2.semiBold}>Find Receiver</Text>
            </View>
          </View>
          <View style={styles2.listItem} key={2}>
            <View style={styles2.search}>
              <TextInput
                inlineImageLeft={'search'}
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
        <FlatList
          data={data}
          ListHeaderComponent={
            <>
              <View style={styles2.fullFlex}>
                <View style={styles2.flexFour}>
                  <Text style={styles2.labelBtn}>Contacts</Text>
                  <Text style={styles2.listDescript}>
                    {data.length} Contact Found
                  </Text>
                </View>
              </View>
            </>
          }
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            // console.log(data.length, 'ioefjofj');
            return (
              <>
                <RectButton
                  rippleColor="transparent"
                  onPress={() =>
                    props.navigation.navigate('InputAmount', {
                      id: item.id,
                      avatar: item.avatar,
                      fullName: item.fullName,
                      phone: item.phone,
                    })
                  }>
                  <View style={styles2.listSearch} key={item.id}>
                    <View style={styles2.fullFlex}>
                      <View style={styles2.flexTwo}>
                        <Image
                          style={[styles2.img]}
                          source={{
                            uri: item.avatar,
                          }}
                        />
                      </View>
                      <View style={styles2.flexFour}>
                        <Text style={styles2.listText}>{item.fullName}</Text>
                        <NumberFormat
                          value={item.phone}
                          displayType={'text'}
                          format="+## ###-####-####"
                          renderText={(value) => (
                            <Text style={styles2.listDescript}>{value}</Text>
                          )}
                        />
                      </View>
                    </View>
                  </View>
                </RectButton>
              </>
            );
          }}
          ListFooterComponent={
            <>
              <View style={styles2.flexFour}>
                <RectButton
                  alignSelf="center"
                  onPress={() => setLimit(limit + 3)}>
                  <View>
                    <Text style={styles2.primaryColor}>Load More</Text>
                  </View>
                </RectButton>
              </View>
            </>
          }
        />
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
  search: {
    flex: 1,
    // flexDirection: 'row',
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
  listSearch: {
    height: 80,
    // marginVertical: 7,
    marginBottom: 15,
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
export default Transfer;
