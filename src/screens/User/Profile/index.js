import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  PermissionsAndroid,
} from 'react-native';
import {Button, Divider, IconButton, Switch} from 'react-native-paper';
import {FlatList, RectButton} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {AuthLogout} from './../../../redux/actions/auth';
import {GetUser, editPhoto, UpdateUser} from './../../../redux/actions/user';
import NumberFormat from 'react-number-format';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import ImagePicker from 'react-native-image-picker';

const btnProfile = [
  {
    key: 1,
    title: 'Personal Information',
    onPress: 'PersonalInfo',
    trailing: 'arrow-right',
    switch: false,
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
    onPress: '#',
    trailing: '',
    switch: false,
  },
];

const Profile = (props) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(true);
  const [snap, setSnap] = React.useState([0, 0, 0]);
  const [snapChoose, setSnapChoose] = React.useState([0, 0, 0]);
  const [avatarChanged, setAvatarChanged] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const dispatch = useDispatch();

  const {loading, data} = useSelector((s) => s.User);
  const Auth = useSelector((s) => s.Auth);
  const [name, setName] = React.useState(`${data.firstName} ${data.lastName}`);

  React.useEffect(() => {
    const handleRefresh = () => {
      dispatch(
        GetUser({
          id: Auth.data.id,
          token: Auth.data.token,
        }),
      );
    };
    const unsubscribe = props.navigation.addListener('focus', () => {
      handleRefresh();
    });
    dispatch(
      GetUser({
        id: Auth.data.id,
        token: Auth.data.token,
      }),
    );
    return () => {
      // Clear setInterval in case of screen unmount
      handleRefresh();
      // Unsubscribe for the focus Listener
      unsubscribe;
    };
  }, [
    avatarChanged,
    dispatch,
    Auth.data.id,
    Auth.data.token,
    props.navigation,
    Auth.data.fullname,
  ]);

  const onSubmit = () => {
    const resName = name.split(' ');
    const [firstName, ...restName] = resName;
    const lastName = restName.join(' ');
    dispatch(
      UpdateUser({
        data: {
          firstName: firstName,
          lastName: lastName,
        },
        token: Auth.data.token,
      }),
    );
    setSnap([0, 0, 0]);
    props.navigation.replace('Profile');
  };

  const openGallery = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 400,
        maxHeight: 400,
        // quality: 0.8,
      },
      (response) => {
        const formData = new FormData();
        formData.append('avatar', {
          uri: response.uri,
          name: response.fileName,
          type: response.type,
        });
        console.log(`${response} - ${formData}`);
        dispatch(
          editPhoto({
            data: formData,
            token: Auth.data.token,
          }),
        );
        setAvatarChanged(true);
        setSnapChoose([0, 0, 0]);
        props.navigation.replace('Profile');
      },
    );
  };
  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'We need your permission',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
      ImagePicker.launchCamera(
        {
          mediaType: 'photo',
          maxWidth: 400,
          maxHeight: 400,
          // quality: 0.8,
        },
        (response) => {
          const formData = new FormData();
          formData.append('avatar', {
            uri: response.uri,
            name: `zwallet-${response.fileName}`,
            type: response.type,
          });
          dispatch(
            editPhoto({
              data: formData,
              token: Auth.data.token,
            }),
          );
          setAvatarChanged(true);
          setSnapChoose([0, 0, 0]);
          props.navigation.replace('Profile');
        },
      );
    } else {
      console.log('Camera permission denied');
    }
  };

  const renderContent = () => (
    <View style={styles2.bottomSheet}>
      <View style={styles2.flexOne}>
        <View style={{marginBottom: 20}}>
          <Divider
            style={{
              height: 5,
              width: Dimensions.get('window').width / 3,
              borderRadius: 5,
            }}
          />
        </View>
        <View style={styles2.flexTwo}>
          <RectButton onPress={() => sheetTriggerChoose()}>
            <Image
              style={styles2.img}
              source={{
                uri: loading
                  ? 'https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true'
                  : data.avatar,
              }}
            />
          </RectButton>
        </View>
        <View style={{marginVertical: 20}}>
          <Text style={{fontSize: 10, textAlign: 'center', marginTop: 5}}>
            Tap Image to Change
          </Text>
        </View>
        <View style={styles2.listItem} key={2}>
          <View style={styles2.name}>
            <TextInput
              value={name}
              onChangeText={(e) => setName(e)}
              returnKeyType="send"
              editable={true}
            />
          </View>
        </View>
      </View>
      <Button
        uppercase={false}
        mode="contained"
        onPress={() => onSubmit()}
        color="#6379F4"
        disabled={loading}
        loading={loading}
        style={styles2.button}>
        <Text style={styles2.white}>Update Now</Text>
      </Button>
    </View>
  );
  const renderContentChoose = () => (
    <View style={styles2.bottomSheet}>
      <Button
        uppercase={false}
        mode="contained"
        onPress={() => openCamera()}
        color="#6379F4"
        disabled={loading}
        loading={loading}
        style={{marginVertical: 15}}>
        <Text style={styles2.white}>Take Photo with Camera</Text>
      </Button>
      <Button
        uppercase={false}
        mode="contained"
        onPress={() => openGallery()}
        color="#6379F4"
        disabled={loading}
        loading={loading}>
        <Text style={styles2.white}>Choose from Gallery</Text>
      </Button>
    </View>
  );
  const sheetRef = React.useRef(null);
  const sheetRefChoose = React.useRef(null);

  const sheetTrigger = () => {
    setSnap([450, 250, 0]);
    sheetRef.current.snapTo(0);
  };
  const sheetTriggerChoose = () => {
    setSnapChoose([200, 100, 0]);
    sheetRefChoose.current.snapTo(0);
  };

  const onLogout = () => {
    dispatch(
      UpdateUser({
        data: {
          device_token: '',
        },
        token: Auth.data.token,
      }),
    );
    dispatch(AuthLogout());
  };
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
                  onPress={() => props.navigation.navigate('Dashboard')}>
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
                      uri: loading
                        ? 'https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true'
                        : data.avatar,
                    }}
                  />
                  <View style={[styles2.flexFive]}>
                    <RectButton
                      rippleColor="transparent"
                      onPress={() => sheetTrigger()}>
                      <View style={styles2.flexTwo}>
                        <IconButton
                          icon={'pencil-outline'}
                          size={15}
                          color="#7A7886"
                        />
                      </View>
                    </RectButton>
                    <RectButton
                      rippleColor="transparent"
                      onPress={() => sheetRef.current.snapTo(0)}>
                      <View style={styles2.flexFour}>
                        <Text style={styles2.editBtn}>Edit</Text>
                      </View>
                    </RectButton>
                  </View>
                </View>
                <View>
                  <Text
                    style={
                      styles2.listText
                    }>{`${data.firstName} ${data.lastName}`}</Text>
                </View>
                <View>
                  <Text style={styles2.listDescript}>
                    <NumberFormat
                      value={data.phone}
                      displayType={'text'}
                      format="+## ###-####-####"
                      mask="_"
                      renderText={(value) => (
                        <Text style={styles2.listDescript}>{value}</Text>
                      )}
                    />
                  </Text>
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
                      onPress={() =>
                        item.title === 'Logout'
                          ? onLogout()
                          : props.navigation.push(item.onPress)
                      }>
                      <Text style={styles2.semiBold}>{item.title}</Text>
                    </RectButton>
                  </View>
                  <View style={styles2.flexTwo}>
                    {item.trailing !== '' ? (
                      <IconButton icon={item.trailing} color="#4D4B57" />
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
        <BottomSheet
          ref={sheetRef}
          snapPoints={snap}
          borderRadius={20}
          renderContent={renderContent}
        />
        <BottomSheet
          ref={sheetRefChoose}
          snapPoints={snapChoose}
          borderRadius={20}
          renderContent={renderContentChoose}
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
  name: {
    flex: 1,
    // flexDirection: 'row',
    padding: 5,
    width: Dimensions.get('screen').width - 40,
    marginHorizontal: 10,
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
    alignSelf: 'flex-end',
  },
  button: {
    marginVertical: 30,
    padding: 7,
    borderRadius: 15,
    margin: 10,
  },
  img: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 15,
    marginTop: 10,
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
  bottomSheet: {
    backgroundColor: '#E5E5E5',
    padding: 16,
    height: 450,
    // marginBottom: 5,
    // margin: 15,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 4,
  },
});
export default Profile;

// TEORY => 1. - React Native, 2. How React Native works, 3. Why React Native
// UI , Structure Component, Form Validation Formic.org, Auth(login, register), CRUD redux, uploadImage filter,
