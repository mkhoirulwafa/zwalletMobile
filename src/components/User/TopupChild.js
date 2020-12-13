import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {GetTopup} from './../../redux/actions/topup';

const TopupChild = (props) => {
  const dispatch = useDispatch();
  const AuthReducer = useSelector((s) => s.Auth);
  const {data} = useSelector((s) => s.Topup);
  React.useEffect(() => {
    dispatch(
      GetTopup({
        token: AuthReducer.data.token,
      }),
    );
  }, [dispatch, AuthReducer.data.token]);
  const RenderItems = ({item, index}) => {
    return (
      <View style={styles2.listTopup} key={item.number}>
        <View style={styles2.fullFlex}>
          <View style={styles2.flexOne}>
            <Text style={styles2.numList}>{item.number}</Text>
          </View>
          <View style={styles2.flexFour}>
            <Text style={styles2.listDescript}>{item.title}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <FlatList
        data={data}
        ListHeaderComponent={
          <View style={styles2.fullFlex}>
            <View style={styles2.flexFour}>
              <Text style={styles2.labelBtn}>How to Top-Up</Text>
            </View>
          </View>
        }
        keyExtractor={(item, index) => index.toString()}
        renderItem={RenderItems}
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
  flexFour: {flex: 0.8, marginLeft: 10},
  flexTwo: {flex: 0.2, marginBottom: 10},
  flexOne: {flex: 0.1},
  primaryColor: {color: '#6379F4'},
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
    color: '#4D4B57',
    fontWeight: '300',
  },
  listTopup: {
    height: 70,
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 9.49,

    elevation: 6,
  },
  numList: {
    marginLeft: 5,
    fontSize: 20,
    color: '#6379F4',
    fontWeight: '700',
  },
});
export default TopupChild;
