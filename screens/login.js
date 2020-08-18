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
import { createStackNavigator } from '@react-navigation/stack';
import gradient from '../photos/gradient.png';
import firebase from '../firebase.js';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default function Login({ navigation }) {
  const [email, setEmail] = React.useState([]);
  const [password, setPassword] = React.useState([]);
  const [passwordInput, setPasswordInput] = React.useState('');
  const [emailInput, setEmailInput] = React.useState('');
  var emailArrLength;
  var passwordArrLength;

  //Screen resolution
  var readPosts = () => {
    firebase
      .database()
      .ref('Accounts')
      .on('value', (snapshot) => {
        const posts = snapshot.val();
        var emailFromDB = [];
        var passwordFromDB = [];
        for (var key in posts) {
          const putEmail = posts[key].email;
          const putPassword = posts[key].password;
          emailFromDB.push(putEmail);
          passwordFromDB.push(putPassword);
        }
        setEmail(emailFromDB);
        setPassword(passwordFromDB);
        var emailArrLength = emailFromDB.length;
        var passwordArrLength = passwordFromDB.length;
        for (var i = 0; i < emailArrLength; i++) {
          if (emailInput == email[i]) {
            if (passwordInput == password[i]) {
              navigation.navigate('Main Page');
              console.log(emailInput);
              console.log(email[i]);
              console.log(passwordInput);
              console.log(password[password[i]]);
            }
           else {
            console.log(emailInput);
            console.log(email[i]);
            console.log(passwordInput);
            console.log(password[i]);
            window.alert('Wrong Credentials');
            return navigation.navigate('Login');
          }
        }}
      });
      
  };

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
              User Login
            </Text>
          </View>
          <View style={{ flex: 1, marginTop: screenHeight / 4.5 }}>
            <TextInput
              style={{
                margin: 15,
                height: 40,
                borderColor: '#00251a',
                borderWidth: 3,
                borderRadius: 10,
                paddingHorizontal: 10,
              }}
              placeholder="Email"
              placeholderTextColor="#595959"
              onChangeText={(text) => setEmailInput(text)}
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
              onChangeText={(text) => setPasswordInput(text)}
            />
            <View>
              <Text
                style={{
                  textAlign: 'right',
                  marginRight: 24,
                  color: 'white',
                  marginBottom: 10,
                }}>
                New here?{' '}
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Create Account');
                  }}>
                  <Text
                    style={{
                      color: '#4fb3bf',
                      textDecorationLine: 'underline',
                    }}>
                    Sign Up!
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
            <TouchableOpacity style={styles.loginbutton} onPress={readPosts}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: 'white',
                  marginTop: 12.5,
                }}>
                Log In
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
