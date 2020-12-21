import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button, Divider} from 'react-native-paper';
import {FlatList, RectButton} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import DateRangePicker from '../DatePicker';
import {
  GetHistory,
  GetHistoryExpense,
  GetHistoryIncome,
  GetHistoryDate,
} from './../../redux/actions/transfer';
import NumberFormat from 'react-number-format';
import BottomSheet from 'react-native-bottomsheet-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
const myIconUp = (
  <Icon
    name="arrow-up-outline"
    size={20}
    color="#FF5B37"
    style={{alignSelf: 'flex-end'}}
  />
);
const myIconDown = (
  <Icon
    name="arrow-down-outline"
    size={20}
    color="#4CEDB3"
    style={{alignSelf: 'flex-end'}}
  />
);

const TransactionHistoryChild = (props) => {
  const [weekLimit, setWeekLimit] = React.useState(4);
  const [limit, setLimit] = React.useState(4);
  const [income, setIncome] = React.useState(false);
  const [expense, setExpense] = React.useState(false);
  const [dateStart, setDateStart] = React.useState('');
  const [dateEnd, setDateEnd] = React.useState('');
  const [snap, setSnap] = React.useState(['0%', '-10%', '-15%']);
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const {data} = useSelector((s) => s.Transfer);
  React.useEffect(() => {
    if (income === false && expense === false) {
      dispatch(
        GetHistory({
          id: Auth.data.id,
          limit: weekLimit,
          token: Auth.data.token,
        }),
      );
    } else if (income === true && expense === false) {
      dispatch(
        GetHistoryIncome({
          id: Auth.data.id,
          limit: limit,
          token: Auth.data.token,
        }),
      );
    } else if (expense === true) {
      dispatch(
        GetHistoryExpense({
          id: Auth.data.id,
          token: Auth.data.token,
        }),
      );
    } else if (dateStart && dateEnd) {
      dispatch(
        GetHistoryDate({
          id: Auth.data.id,
          start: dateStart,
          end: dateEnd,
          token: Auth.data.token,
        }),
      );
    }
  }, [
    dispatch,
    Auth.data.id,
    Auth.data.token,
    limit,
    weekLimit,
    income,
    expense,
    dateEnd,
    dateStart,
  ]);
  const onIncome = () => {
    setIncome(!income);
    setExpense(false);
  };
  const onExpense = () => {
    setExpense(!expense);
    setIncome(false);
  };
  const sheetRef = React.useRef(null);
  const sheetTrigger = () => {
    setSnap(['80%', '70%', '0%']);
    sheetRef.current.snapTo(0);
  };
  const handleSubmit = () => {
    dispatch(
      dispatch(
        GetHistoryDate({
          id: Auth.data.id,
          start: dateStart,
          end: dateEnd,
          token: Auth.data.token,
        }),
      ),
    );
  };
  const onSubmit = () => {
    // dispatch(
    //   dispatch(
    //     GetHistoryDate({
    //       id: Auth.data.id,
    //       start: dateStart,
    //       end: dateEnd,
    //       token: Auth.data.token,
    //     }),
    //   ),
    // );
    setSnap(['-15%', '-10%', '0%']);
  };
  const RenderItems = ({item, index}) => {
    return (
      <>
        <View style={styles2.listItem} key={item.id}>
          <View style={styles2.fullFlex}>
            <View style={styles2.flexTwo}>
              <Image
                style={[styles2.img]}
                source={{
                  uri:
                    item.sender_id === Auth.data.id
                      ? item.receiver_avatar
                      : item.sender_avatar,
                }}
              />
            </View>
            <View style={styles2.flexFour}>
              <Text style={styles2.listText}>
                {item.sender_id === Auth.data.id
                  ? item.receiver_name
                  : item.sender_name}
              </Text>
              <Text style={styles2.listDescript}>{item.type}</Text>
            </View>
            <View
              style={
                item.sender_id === Auth.data.id
                  ? styles2.amountListMinus
                  : styles2.amountListPlus
              }>
              <NumberFormat
                value={item.amount}
                displayType={'text'}
                thousandSeparator={'.'}
                decimalSeparator={','}
                renderText={(value) => (
                  <Text
                    style={
                      item.sender_id === Auth.data.id
                        ? styles2.amountListMinus
                        : styles2.amountListPlus
                    }>
                    {item.sender_id === Auth.data.id
                      ? `-Rp${value}`
                      : `+Rp${value}`}
                  </Text>
                )}
              />
            </View>
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <FlatList
        data={data}
        ListHeaderComponent={
          <>
            <View style={styles2.wrapPhone}>
              <View style={styles2.fullFlex}>
                <View style={styles2.flexFour}>
                  <Text style={styles2.labelBtn}>This Week</Text>
                </View>
              </View>
            </View>
          </>
        }
        keyExtractor={(item, index) => index.toString()}
        renderItem={RenderItems}
        ListFooterComponent={
          <>
            <View style={styles2.flexFour}>
              <RectButton
                alignSelf="center"
                onPress={() => setWeekLimit(limit + 3)}>
                <View>
                  <Text style={styles2.primaryColor}>Load More</Text>
                </View>
              </RectButton>
            </View>

            <View style={styles2.flexRow}>
              <View style={{flex: 0.2}}>
                <Button
                  uppercase={false}
                  mode="contained"
                  onPress={() => onIncome()}
                  color={income ? '#6379F4' : '#fff'}
                  style={[styles2.button, styles2.topMargin]}>
                  {myIconDown}
                </Button>
              </View>

              <View style={{flex: 0.2}}>
                <Button
                  uppercase={false}
                  mode="contained"
                  onPress={() => onExpense()}
                  color={expense ? '#6379F4' : '#fff'}
                  style={[styles2.button, styles2.topMargin]}>
                  {myIconUp}
                </Button>
              </View>

              <View style={{flex: 0.5}}>
                <Button
                  uppercase={false}
                  mode="contained"
                  onPress={() => sheetTrigger()}
                  color={'#fff'}
                  style={[styles2.button, styles2.topMargin]}>
                  <Text style={styles2.white}>Filter By Date</Text>
                </Button>
              </View>
            </View>
          </>
        }
      />
      {/* <BottomSheet
        ref={sheetRef}
        snapPoints={snap}
        borderRadius={20}
        renderContent={renderContent}
      /> */}
      <BottomSheet
        bottomSheerColor="#FFFFFF"
        // backDropColor="red"
        ref={sheetRef}
        // initialPosition={[0, 0, 0]} //200, 300
        // snapPoints={snap}
        initialPosition={'0%'} //200, 300
        snapPoints={snap}
        isBackDrop={true}
        isBackDropDismisByPress={true}
        isRoundBorderWithTipHeader={true}
        // isModal
        // containerStyle={{backgroundColor:"red"}}
        // tipStyle={{backgroundColor:"red"}}
        // headerStyle={{backgroundColor:"red"}}
        // bodyStyle={{backgroundColor:"red",flex:1}}
        body={
          <View style={styles2.bottomSheet}>
            <View style={styles2.flexOne}>
              <DateRangePicker
                onSuccess={(s, e) => {
                  setDateStart(s);
                  setDateEnd(e);
                }}
                theme={{markColor: '#6379F4', markTextColor: 'white'}}
              />
            </View>
            <View style={styles2.flexRow}>
              <View style={styles2.flexFive}>
                <Text style={styles2.listDescript}>From</Text>
                <Text style={styles2.listText}>{dateStart}</Text>
              </View>
              <View style={styles2.flexFive}>
                <Text style={styles2.listDescript}>To</Text>
                <Text style={styles2.listText}>{dateEnd}</Text>
              </View>
            </View>
            <View
              style={{position: 'absolute', bottom: -30, left: 10, right: 10}}>
              <Button
                uppercase={false}
                mode="contained"
                onPress={() => onSubmit()}
                color="#6379F4"
                // disabled={loading}
                // loading={loading}
                style={styles2.button}>
                <Text style={{color: 'white'}}>Apply</Text>
              </Button>
            </View>
          </View>
        }
      />
    </>
  );
};
const styles2 = StyleSheet.create({
  fullFlex: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  flexFour: {flex: 0.8, marginLeft: 10, paddingRight: 10},
  flexTwo: {flex: 0.2, marginBottom: 10},
  flexFive: {flex: 0.5},
  primaryColor: {color: '#6379F4'},
  white: {color: '#514F5B'},
  img: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 15,
  },
  btn: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 10,
    flex: 1,
    color: '#514F5B',
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
    padding: 7,
    borderRadius: 15,
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
  amountListPlus: {
    color: '#1EC15F',
    alignItems: 'center',
    paddingVertical: 10,
    marginRight: 5,
  },
  amountListMinus: {
    color: '#FF5B37',
    alignItems: 'center',
    paddingVertical: 10,
    marginRight: 5,
  },
  bottomSheet: {
    backgroundColor: '#E5E5E5',
    padding: 16,
    height: 450,
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
});
export default TransactionHistoryChild;
