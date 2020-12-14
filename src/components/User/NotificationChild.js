import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import {FlatList, RectButton} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {
  GetHistory,
  GetHistoryExpense,
  GetHistoryIncome,
  GetHistoryDate,
} from '../../redux/actions/transfer';
import NumberFormat from 'react-number-format';
import Icon from 'react-native-vector-icons/Ionicons';
const myIconUp = (
  <Icon
    name="arrow-up-outline"
    size={35}
    color="#FF5B37"
    style={{alignSelf: 'flex-end'}}
  />
);
const myIconDown = (
  <Icon
    name="arrow-down-outline"
    size={35}
    color="#4CEDB3"
    style={{alignSelf: 'flex-end'}}
  />
);

const NotificationChild = (props) => {
  const [weekLimit, setWeekLimit] = React.useState(5);
  const [limit, setLimit] = React.useState(5);
  const [income, setIncome] = React.useState(false);
  const [expense, setExpense] = React.useState(false);
  const [dateStart, setDateStart] = React.useState('');
  const [dateEnd, setDateEnd] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(false);
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const {data} = useSelector((s) => s.Transfer);
  const TransferDate = useSelector((s) => s.TransferDate);
  React.useEffect(() => {
    console.log(Date());
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
    }
    let today = new Date();
    let today2 = new Date();
    let tomorrow = new Date(today2);
    tomorrow.setDate(tomorrow.getDate() + 1);

    let startDate =
      today.getFullYear() +
      '-' +
      parseInt(today.getMonth() + 1) +
      '-' +
      today.getDate();
    let endDate =
      tomorrow.getFullYear() +
      '-' +
      parseInt(tomorrow.getMonth() + 1) +
      '-' +
      tomorrow.getDate();
    setDateStart(startDate);
    setDateEnd(endDate);

    dispatch(
      GetHistoryDate({
        id: Auth.data.id,
        start: dateStart,
        end: dateEnd,
        token: Auth.data.token,
      }),
    );
  }, [
    dispatch,
    Auth.data.id,
    Auth.data.token,
    limit,
    weekLimit,
    income,
    expense,
    dateStart,
    dateEnd,
  ]);
  return (
    <>
      <FlatList
        data={data}
        ListHeaderComponent={
          <>
            <View style={styles2.fullFlex}>
              <View style={styles2.flexFour}>
                <Text style={styles2.labelBtn}>Today</Text>
              </View>
            </View>

            {TransferDate.data.length < 1 ? (
              <>
                <Text style={styles2.err}>
                  You dont have any transaction today,
                </Text>
                <Text style={styles2.err}>Have a Nice Day!</Text>
              </>
            ) : (
              TransferDate.data?.map((item, index) => {
                return (
                  <>
                    <View style={styles2.listItem} key={index}>
                      <View style={styles2.fullFlex}>
                        <View style={styles2.flexTwo}>
                          {item.sender_id === Auth.data.id
                            ? myIconUp
                            : myIconDown}
                        </View>
                        <View style={styles2.flexFour}>
                          <Text style={styles2.listDescript}>
                            {item.sender_id === Auth.data.id
                              ? `Transfer to ${item.receiver_name}`
                              : `Transferred from ${item.sender_name}`}
                          </Text>
                          <View>
                            <NumberFormat
                              value={item.amount}
                              displayType={'text'}
                              thousandSeparator={'.'}
                              decimalSeparator={','}
                              renderText={(value) => (
                                <Text style={styles2.listText}>Rp{value}</Text>
                              )}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </>
                );
              })
            )}
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
        renderItem={({item, index}) => {
          return (
            <>
              <View style={styles2.listItem} key={item.id}>
                <View style={styles2.fullFlex}>
                  <View style={styles2.flexTwo}>
                    {item.sender_id === Auth.data.id ? myIconUp : myIconDown}
                  </View>
                  <View style={styles2.flexFour}>
                    <Text style={styles2.listDescript}>
                      {item.sender_id === Auth.data.id
                        ? `Transfer to ${item.receiver_name}`
                        : `Transferred from ${item.sender_name}`}
                    </Text>
                    <View>
                      <NumberFormat
                        value={item.amount}
                        displayType={'text'}
                        thousandSeparator={'.'}
                        decimalSeparator={','}
                        renderText={(value) => (
                          <Text style={styles2.listText}>Rp{value}</Text>
                        )}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </>
          );
        }}
        ListFooterComponent={
          <>
            <View style={styles2.flexFour}>
              <RectButton
                alignSelf="center"
                onPress={() => setWeekLimit(limit + 3)}>
                <View>
                  <Text style={styles2.primaryColor}>See More</Text>
                </View>
              </RectButton>
            </View>
          </>
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
    width: Dimensions.get('screen').width,
  },
  flexFour: {flex: 0.8, marginLeft: 10, paddingRight: 10},
  flexTwo: {flex: 0.2, marginBottom: 10},
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
    flex: 1,
    margin: 5,
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
  err: {
    color: '#3A3D42',
    textAlign: 'center',
  },
});
export default NotificationChild;
