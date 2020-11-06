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
import {IconButton, Switch} from 'react-native-paper';
// import {styles} from '../styles';
// import TopupChild from './../../../components/User/TopupChild';
import {FlatList, RectButton} from 'react-native-gesture-handler';

const btnProfile = [
  {
    key: 1,
    title: 'Personal Information',
    onPress: 'PersonalInfo',
    trailing: 'arrow-right',
    switch: true,
  },
  {
    key: 2,
    title: 'Change Password',
    onPress: 'ChangePassword',
    trailing: 'arrow-right',
    switch: false,
  },
  {
    key: 3,
    title: 'Change Pin',
    onPress: 'ChangePin',
    trailing: 'arrow-right',
    switch: false,
  },
  {
    key: 4,
    title: 'Notification',
    onPress: 'Notification',
    trailing: '',
    switch: true,
  },
  {
    key: 5,
    title: 'Logout',
    onPress: 'Login',
    trailing: '',
    switch: false,
  },
];

const Profile = (props) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(true);
  const onPressed = (to) => props.navigation.push(to);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={styles2.container}>
        <FlatList
          data={btnProfile}
          ListHeaderComponent={
            <View style={styles2.wrapperTop}>
              <View style={styles2.flexTwo}>
                <RectButton
                  rippleColor="transparent"
                  onPress={() => props.navigation.goBack()}>
                  <View>
                    <IconButton icon="arrow-left" color="#514F5B" />
                  </View>
                </RectButton>
              </View>
              <View style={styles2.flexOne}>
                <View style={styles2.flexTwo}>
                  <Image
                    style={styles2.img}
                    source={{
                      uri:
                        'https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true',
                    }}
                  />
                  <View style={[styles2.flexFive]}>
                    <RectButton
                      onPress={() => props.navigation.navigate('Profile')}>
                      <View style={styles2.flexTwo}>
                        <IconButton
                          icon={'pencil-outline'}
                          size={15}
                          color="#7A7886"
                        />
                      </View>
                    </RectButton>
                    <RectButton
                      onPress={() => props.navigation.navigate('Profile')}>
                      <View style={styles2.flexFour}>
                        <Text style={styles2.editBtn}>Edit</Text>
                      </View>
                    </RectButton>
                  </View>
                </View>
                <View>
                  <Text style={styles2.listText}>Muhammad Khoirul Wafa</Text>
                </View>
                <View>
                  <Text style={styles2.listDescript}>+62-857-3168-1486</Text>
                </View>
              </View>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <View style={styles2.listTopup} key={item.key}>
                <View style={styles2.fullFlex}>
                  <View style={styles2.flexFour}>
                    <RectButton
                      rippleColor="transparent"
                      onPress={() => onPressed(item.onPress, item.title)}>
                      <Text style={styles2.semiBold}>{item.title}</Text>
                    </RectButton>
                  </View>
                  <View style={styles2.flexTwo}>
                    {item.trailing !== '' ? (
                      <IconButton icon={item.trailing} />
                    ) : item.switch ? (
                      <Switch
                        color="#6379F4"
                        style={styles2.switch}
                        value={isSwitchOn}
                        onValueChange={onToggleSwitch}
                      />
                    ) : (
                      <Text />
                    )}
                  </View>
                </View>
              </View>
            );
          }}
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
    padding: 10,
    width: Dimensions.get('screen').width,
    marginTop: 10,
  },
  wrapperTop: {
    // height: '100%',
    marginVertical: 40,
    backgroundColor: '#fafcff',
  },
  flexFive: {flex: 0.5, flexDirection: 'row'},
  flexFour: {flex: 0.8},
  flexTwo: {flex: 0.2, justifyContent: 'center'},
  flexOne: {flex: 1, alignItems: 'center'},
  white: {color: '#fff'},
  editBtn: {
    textAlign: 'center',
    marginVertical: 8,
    color: '#7A7886',
  },
  row: {flex: 1, flexDirection: 'row'},
  text: {fontSize: 14, padding: 5, color: '#fff', fontWeight: '200'},
  semiBold: {
    fontSize: 16,
    // marginVertical: 10,
    fontWeight: '700',
    color: '#4D4B57',
  },
  notification: {alignSelf: 'flex-end'},
  numList: {
    // marginLeft: 5,
    alignSelf: 'flex-end',
  },
  img: {
    width: 70,
    height: 70,
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
  listTopup: {
    height: 60,
    marginVertical: 8,
    marginHorizontal: 15,
    backgroundColor: '#E5E8ED',
    borderRadius: 10,
  },
  listText: {
    fontSize: 20,
    padding: 5,
    color: '#4D4B57',
    fontWeight: '700',
  },
  listDescript: {
    fontSize: 16,
    padding: 5,
    color: '#7A7886',
    fontWeight: '300',
  },
  switch: {
    marginRight: 30,
  },
});
export default Profile;

// TEORY => 1. - React Native, 2. How React Native works, 3. Why React Native
// UI , Structure Component, Form Validation Formic.org, Auth(login, register), CRUD redux, uploadImage filter,
