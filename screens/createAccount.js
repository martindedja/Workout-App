import * as React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import gradient from '../photos/gradient.png';
import firebase from '../firebase.js';
import { createStackNavigator } from '@react-navigation/stack';
//Screen resolution
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
export default function CreateAccount({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <ScrollView style={{ alignSelf: 'center' }}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('../photos/gradient.png')}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 38,
                fontWeight: 'italic',
                color: 'white',
                textShadowColor: '#39796b',
                textShadowRadius: 8,
              }}>
              Create Account
            </Text>
          </View>
          <View style={{ flex: 1, marginTop: screenHeight / 4.5 }}>
            <TextInput
              style={{
                margin: 15,
                height: 40,
                borderRadius: 10,
                borderColor: '#00251a',
                borderWidth: 3,
                paddingHorizontal: 10,
              }}
              placeholder="Email"
              placeholderTextColor="#595959"
              onChangeText={(text) => {
                setEmail(text);
              }}
              value={email}
            />
            <TextInput
              style={{
                margin: 15,
                height: 40,
                borderColor: '#00251a',
                borderWidth: 3,
                borderRadius: 10,
                paddingHorizontal: 10,
              }}
              placeholder="Full Name"
              placeholderTextColor="#595959"
              onChangeText={(text) => {
                setFullName(text);
              }}
              value={fullName}
            />
            <TextInput
              style={{
                margin: 15,
                height: 40,
                borderColor: '#00251a',
                borderWidth: 3,
                borderRadius: 10,
                paddingHorizontal: 10,
              }}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#595959"
              onChangeText={(text) => {
                setPassword(text);
              }}
              value={password}
            />

            <View>
              <Text
                style={{
                  textAlign: 'right',
                  marginRight: 24,
                  marginBottom: 10,
                  color: 'white',
                }}>
                Already have an account?
                <br />
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Login');
                  }}>
                  {' '}
                  <Text
                    style={{
                      color: '#4fb3bf',
                      textDecorationLine: 'underline',
                    }}>
                    Log in!
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
            <TouchableOpacity
              style={styles.loginbutton}
              onPress={() => {
                const accounts = firebase.database().ref('Accounts');
                try {
                  accounts.push({
                    email: email,
                    fullName: fullName,
                    password: password,
                  });
                } catch (e) {
                  window.alert(e);
                }
                navigation.navigate('Login');
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginTop: 12.5,
                  color: 'white',
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 0,
  },
  image: {
    width: screenWidth,
    height: screenHeight,
    backgroundImage: './photos/gradient.png',
  },
  loginbutton: {
    backgroundColor: '#00838f',
    height: 40,
    width: screenWidth / 3,
    borderRadius: 5,
    alignSelf: 'center',
  },
});
