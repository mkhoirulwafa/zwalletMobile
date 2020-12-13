// import React from 'react';
// import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
// import {IconButton} from 'react-native-paper';
// import {FlatList, RectButton} from 'react-native-gesture-handler';
// import {useDispatch, useSelector} from 'react-redux';
// // import {GetHistory} from './../../redux/actions/transfer';
// // import {styles} from '../styles';
// import NumberFormat from 'react-number-format';

// const TransferChild = (props) => {
//   //   const dispatch = useDispatch();
//   //   const Auth = useSelector((s) => s.Auth);
//   const {loading, data} = useSelector((s) => s.User);
//   const [datas, setDatas] = React.useState(data);
//   React.useEffect(() => {
//     const {loading, data} = useSelector((s) => s.User);
//   });
//   return (
//     <>
//       <FlatList
//         data={datas}
//         ListHeaderComponent={
//           <>
//             <View style={styles2.fullFlex}>
//               <View style={styles2.flexFour}>
//                 <Text style={styles2.labelBtn}>Contacts</Text>
//                 <Text style={styles2.listDescript}>
//                   {data.length} Contact Found
//                 </Text>
//               </View>
//             </View>
//           </>
//         }
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({item, index}) => {
//           // console.log(data.length, 'ioefjofj');
//           return (
//             <>
//               <View style={styles2.listItem} key={item.id}>
//                 <View style={styles2.fullFlex}>
//                   <View style={styles2.flexTwo}>
//                     <Image
//                       style={[styles2.img]}
//                       source={{
//                         uri: item.avatar,
//                       }}
//                     />
//                   </View>
//                   <View style={styles2.flexFour}>
//                     <Text style={styles2.listText}>{item.fullName}</Text>
//                     <NumberFormat
//                       value={item.phone}
//                       displayType={'text'}
//                       format="## ###-####-####"
//                       prefix="+"
//                       renderText={(value) => (
//                         <Text style={styles2.listDescript}>{value}</Text>
//                       )}
//                     />
//                   </View>
//                 </View>
//               </View>
//             </>
//           );
//         }}
//       />
//     </>
//   );
// };
// const styles2 = StyleSheet.create({
//   fullFlex: {
//     flex: 1,
//     flexDirection: 'row',
//     padding: 10,
//     width: Dimensions.get('screen').width,
//     // marginTop: 10,
//   },
//   flexFour: {flex: 0.8, marginLeft: 10, paddingRight: 10},
//   flexTwo: {flex: 0.2, marginBottom: 10},
//   primaryColor: {color: '#6379F4'},
//   img: {
//     width: 60,
//     height: 60,
//     marginRight: 10,
//     borderRadius: 15,
//   },
//   btn: {
//     flexDirection: 'row',
//     marginTop: 10,
//     marginHorizontal: 10,
//     flex: 0.5,
//     paddingVertical: 8,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   labelBtn: {
//     fontFamily: 'NunitoSans-Bold',
//     fontSize: 16,
//     color: '#514F5B',
//     marginRight: 5,
//   },
//   listItem: {
//     marginBottom: 20,
//     height: 90,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.37,
//     shadowRadius: 7.49,

//     elevation: 4,
//   },
//   listText: {
//     marginLeft: 10,
//     fontSize: 16,
//     padding: 5,
//     color: '#4D4B57',
//     fontWeight: '700',
//   },
//   listDescript: {
//     marginLeft: 10,
//     fontSize: 12,
//     padding: 5,
//     color: '#4D4B57',
//     fontWeight: '300',
//   },
//   amountListPlus: {
//     color: '#1EC15F',
//     alignItems: 'center',
//     paddingVertical: 10,
//     marginRight: 5,
//   },
//   amountListMinus: {
//     color: '#FF5B37',
//     alignItems: 'center',
//     paddingVertical: 10,
//     marginRight: 5,
//   },
// });
// export default TransferChild;
