import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';

const App = (props) => {
  const {inputPassword} = useRef();
  const {email, setEmail} = useState(null);
  const {password, setPassword} = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      ToastAndroid.show(
        `Login Sukses, Selamat Datang ${email}`,
        ToastAndroid.SHORT,
      );
      // props.navigation.navigate('Home');
      setLoading(false);
    }, 3000);
  };
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
            <Text style={styles.title}>Zwallet</Text>
          </View>
          <View style={styles.child}>
            <View>
              <View>
                <Text style={styles.childTitle}>Login</Text>
                <Text style={styles.descript}>
                  Login to your existing account to access all the features in
                  Zwallet.
                </Text>
              </View>
              <View style={styles.inputItem}>
                <TextInput
                  inlineImageLeft="mail"
                  inlineImagePadding={40}
                  placeholder="Enter your email"
                  autoCapitalize={'none'}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  onSubmitEditing={() => inputPassword.current.focus()}
                  returnKeyType="next"
                />
              </View>
              <View style={styles.inputItem}>
                <TextInput
                  inlineImageLeft="lock"
                  inlineImagePadding={40}
                  ref={inputPassword}
                  value={password}
                  placeholder="Enter your password"
                  autoCapitalize={'none'}
                  secureTextEntry={true}
                  returnKeyType="send"
                  // returnKeyLabel="Masuk"
                  onChangeText={(text) => setPassword(text)}
                  // onSubmitEditing={() => onSubmit()}
                />
                <View style={styles.eye} />
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={styles.link}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Button
                  onPress={() => onSubmit()}
                  color="#116242"
                  mode="contained"
                  disabled={loading}
                  loading={loading}>
                  Login
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#E5E5E5',
    minHeight: '100%',
  },
  title: {
    fontFamily: 'NunitoSans-ExtraBold',
    fontWeight: '700',
    fontSize: 26,
    paddingVertical: Dimensions.get('screen').height - 670,
    alignSelf: 'center',
    color: '#6379F4',
  },
  child: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 16.0,

    elevation: 40,
  },
  childTitle: {
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 23,
    color: '#3A3D42',
    marginBottom: 10,
  },
  descript: {
    fontWeight: '500',
    textAlign: 'center',
    color: '#a9a9a9',
    lineHeight: 23,
    marginBottom: 10,
  },
  inputItem: {
    padding: 5,
    borderColor: '#a9a9a9',
    marginVertical: 5,
    borderRadius: 5,
    borderBottomWidth: 1,
  },
  link: {color: '#a9a9a9', fontWeight: '700'},
});

export default App;
