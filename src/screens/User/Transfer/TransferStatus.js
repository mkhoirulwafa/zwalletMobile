import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {Button} from 'react-native-paper';
import {FlatList} from 'react-native-gesture-handler';
import NumberFormat from 'react-number-format';
import {useDispatch, useSelector} from 'react-redux';

const TransferStatus = (props) => {
  const {
    avatar,
    fullName,
    phone,
    amount,
    notes,
    date,
    time,
  } = props.route.params;

  const {data} = useSelector((s) => s.Auth);
  const TransferBalance = useSelector((s) => s.TransferBalance);
  const dispatch = useDispatch();
  let one = Number(data.balance);
  let two = Number(amount);
  const sum = String(one - two);
  const confirmationDetail = [
    {
      key: 1,
      title: 'Amount',
      value: amount,
      title2: 'Balance Left',
      value2: sum,
    },
    {
      key: 2,
      title: 'Date',
      value: date,
      title2: 'Time',
      value2: time,
    },
  ];
  const [loading, setLoading] = React.useState(false);
  const User = useSelector((s) => s.User);
  const onSubmit = (screen) => {
    setLoading(true);
    console.log(amount);
    props.navigation.push(screen);
    setLoading(false);
  };
  const header = TransferBalance.error ? (
    <View style={{alignItems: 'center', margin: 20}}>
      <View>
        <Image
          style={styles2.img}
          source={{
            uri:
              'https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/failed.png?raw=true',
          }}
        />
      </View>
      <View>
        <Text style={styles2.childTitle}>Transfer Failed</Text>
        <Text style={styles2.descript}>
          We can’t transfer your money at the moment, we recommend you to check
          your internet connection and try again.
        </Text>
        <Text style={styles2.err}>Reason : {TransferBalance.error}</Text>
      </View>
    </View>
  ) : (
    <View style={{alignItems: 'center', margin: 20}}>
      <View>
        <Image
          style={styles2.img}
          source={{
            uri:
              'https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/success.png?raw=true',
          }}
        />
      </View>
      <View>
        <Text style={styles2.childTitle}>Transfer Success</Text>
      </View>
    </View>
  );

  const renderContent = TransferBalance.error
    ? ({item, index}) => {
        return (
          <View style={styles2.flexCard}>
            <View style={styles2.card}>
              <Text style={styles2.title}>{item.title}</Text>
              {item.title === 'Amount' || item.title === 'Balance Left' ? (
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
            <View style={styles2.card}>
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
      }
    : ({item, index}) => {
        return (
          <View style={styles2.flexCard}>
            <View style={styles2.card}>
              <Text style={styles2.title}>{item.title}</Text>
              {item.title === 'Amount' || item.title === 'Balance Left' ? (
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
            <View style={styles2.card}>
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
      };

  const footer = TransferBalance.error ? (
    <>
      <View style={styles2.card}>
        <Text style={styles2.title}>Notes</Text>
        <Text style={styles2.listText}>{notes}</Text>
      </View>
      <View style={styles2.fullFlex}>
        <View style={styles2.flexFour}>
          <Text style={styles2.labelBtn}>From</Text>
        </View>
      </View>
      <View style={styles2.listSearch} key={1}>
        <View style={styles2.fullFlex}>
          <View style={styles2.flexTwo}>
            <Image
              style={[styles2.img]}
              source={{
                uri: User.data.avatar,
              }}
            />
          </View>
          <View style={styles2.flexFour}>
            <Text style={styles2.listText}>
              {User.data.firstName + ' ' + User.data.lastName}
            </Text>
            <NumberFormat
              value={User.data.phone}
              displayType={'text'}
              format="+## ###-####-####"
              renderText={(value) => (
                <Text style={styles2.listDescript}>{value}</Text>
              )}
            />
          </View>
        </View>
      </View>
      <View style={styles2.fullFlex}>
        <View style={styles2.flexFour}>
          <Text style={styles2.labelBtn}>To</Text>
        </View>
      </View>
      <View style={styles2.listSearch} key={2}>
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
      <Button
        uppercase={false}
        mode="contained"
        onPress={() => onSubmit('Transfer')}
        color="#6379F4"
        disabled={loading}
        loading={loading}
        style={styles2.button}>
        <Text style={styles2.white}>Try Again</Text>
      </Button>
    </>
  ) : (
    <>
      <View style={styles2.card}>
        <Text style={styles2.title}>Notes</Text>
        <Text style={styles2.listText}>{notes}</Text>
      </View>
      <View style={styles2.fullFlex}>
        <View style={styles2.flexFour}>
          <Text style={styles2.labelBtn}>From</Text>
        </View>
      </View>
      <View style={styles2.listSearch} key={1}>
        <View style={styles2.fullFlex}>
          <View style={styles2.flexTwo}>
            <Image
              style={[styles2.img]}
              source={{
                uri: User.data.avatar,
              }}
            />
          </View>
          <View style={styles2.flexFour}>
            <Text style={styles2.listText}>
              {User.data.firstName + ' ' + User.data.lastName}
            </Text>
            <NumberFormat
              value={User.data.phone}
              displayType={'text'}
              format="+## ###-####-####"
              renderText={(value) => (
                <Text style={styles2.listDescript}>{value}</Text>
              )}
            />
          </View>
        </View>
      </View>
      <View style={styles2.fullFlex}>
        <View style={styles2.flexFour}>
          <Text style={styles2.labelBtn}>To</Text>
        </View>
      </View>
      <View style={styles2.listSearch} key={2}>
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
      <Button
        uppercase={false}
        mode="contained"
        onPress={() => onSubmit('Dashboard')}
        color="#6379F4"
        disabled={loading}
        loading={loading}
        style={styles2.button}>
        <Text style={styles2.white}>Back To Home</Text>
      </Button>
    </>
  );
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6379F4" />
      <SafeAreaView style={styles2.container}>
        <View style={styles2.wrapperRow}>
          <View style={styles2.wrapperTop}>
            <View style={styles2.fullFlex}>
              <View style={styles2.title}>
                <Text style={styles2.semiBold}>Transfer Details</Text>
              </View>
            </View>
          </View>
          <FlatList
            // ref={flatListRef}
            data={confirmationDetail}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={header}
            renderItem={renderContent}
            ListFooterComponent={footer}
          />
        </View>
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
  flexCard: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    width: Dimensions.get('screen').width,
    justifyContent: 'space-between',
  },
  listSearch: {
    height: 100,
    marginHorizontal: 10,
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
  card: {
    marginHorizontal: 10,
    flex: 0.5,
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
  childTitle: {
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 23,
    color: '#3A3D42',
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
  descript: {
    fontWeight: '500',
    textAlign: 'center',
    color: '#a9a9a9',
    lineHeight: 23,
    marginBottom: 15,
  },
  wrapperTop: {
    height: 80,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  flexFour: {flex: 0.8, marginLeft: 10, paddingRight: 10},
  title: {flex: 1, alignItems: 'center'},
  flexTwo: {flex: 0.2},
  flexOne: {flex: 1, marginVertical: 50},
  topMargin: {marginTop: 10},
  primaryColor: {color: '#6379F4'},
  text: {fontSize: 14, padding: 5, color: '#fff', fontWeight: '200'},
  notification: {alignSelf: 'flex-end'},
  img: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 15,
  },
  imgSuccess: {
    width: 60,
    height: 60,
    borderRadius: 15,
    margin: 10,
    alignSelf: 'center',
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
  err: {
    color: '#FF5B37',
    textAlign: 'center',
  },
});
export default TransferStatus;
