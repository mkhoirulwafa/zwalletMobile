import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {IconButton} from 'react-native-paper';
import {FlatList, RectButton} from 'react-native-gesture-handler';

const DashboardChild = (props) => {
  // const [loading, setLoading] = useState(false);

  // const onSubmit = () => {
  //   // setLoading(true);
  //   setTimeout(() => {
  //     ToastAndroid.show('Login Sukses, Selamat Datang', ToastAndroid.SHORT);
  //     props.navigation.navigate('NewPassword');
  //     // setLoading(false);
  //   }, 3000);
  // };
  const transactions = [
    {
      id: 1,
      avatar:
        'https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/7.png?raw=true',
      fullName: 'Robert Chandler',
      type: 'Transfer',
      amount: '50.000',
    },
    {
      id: 2,
      avatar:
        'https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/2.png?raw=true',
      fullName: 'Samuel Suhi',
      type: 'Transfer',
      amount: '80.000',
    },
    {
      id: 3,
      avatar:
        'https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/3.png?raw=true',
      fullName: 'Jessica Keen',
      type: 'Transfer',
      amount: '10.000',
    },
    {
      id: 4,
      avatar:
        'https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/5.png?raw=true',
      fullName: 'Crazy Rich',
      type: 'Transfer',
      amount: '2.000.000',
    },
  ];
  return (
    <>
      <FlatList
        data={transactions}
        ListHeaderComponent={
          <>
            <View style={styles2.fullFlex}>
              <RectButton
                style={styles2.btn}
                backgroundColor="#E5E8ED"
                uppercase={false}>
                <IconButton icon="arrow-up" color="#6379F4" />
                <View>
                  <Text style={styles2.labelBtn}>Transfer</Text>
                </View>
              </RectButton>
              <RectButton
                style={styles2.btn}
                backgroundColor="#E5E8ED"
                uppercase={false}
                onPress={() => props.navigation.navigate('Topup')}>
                <IconButton icon="plus" color="#6379F4" />
                <View>
                  <Text style={styles2.labelBtn}>Topup</Text>
                </View>
              </RectButton>
            </View>
            <View style={styles2.fullFlex}>
              <View style={styles2.flexFour}>
                <Text style={styles2.labelBtn}>Transaction History</Text>
              </View>
              <View style={styles2.flexTwo}>
                <RectButton alignSelf="center">
                  <View>
                    <Text style={styles2.primaryColor}>See all</Text>
                  </View>
                </RectButton>
              </View>
            </View>
          </>
        }
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={styles2.listItem} key={item.id}>
              <View style={styles2.fullFlex}>
                <View style={styles2.flexTwo}>
                  <Image style={[styles2.img]} source={{uri: item.avatar}} />
                </View>
                <View style={styles2.flexFour}>
                  <Text style={styles2.listText}>{item.fullName}</Text>
                  <Text style={styles2.listDescript}>{item.type}</Text>
                </View>
                <View style={styles2.amountList}>
                  <Text style={styles2.amountList}>
                    {(item.type === 'Transfer' ? '+Rp' : '-Rp') + item.amount}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </>
  );
};
const styles2 = StyleSheet.create({
  fullFlex: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    width: Dimensions.get('screen').width,
    // marginTop: 10,
  },
  flexFour: {flex: 0.8, marginLeft: 10, paddingRight: 10},
  flexTwo: {flex: 0.2, marginBottom: 10},
  primaryColor: {color: '#6379F4'},
  img: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  btn: {
    flexDirection: 'row',
    marginTop: 10,
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
    marginBottom: 20,
    height: 90,
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
    marginLeft: 10,
    fontSize: 16,
    padding: 5,
    color: '#4D4B57',
    fontWeight: '700',
  },
  listDescript: {
    marginLeft: 10,
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
export default DashboardChild;
