import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { changeNavigationBarColor } from 'react-native-navigation-bar-color';
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CreateAccount from './screens/createAccount';
import Login from './screens/login';
import MainPage from './screens/mainpage';
import Chest from './screens/chest';
import Abs from './screens/abs';
import Arm from './screens/arm';
import Back from './screens/back';

const Tab = createStackNavigator();

export default function App() {
  var example = async () => {
    try {
      const response = await changeNavigationBarColor('blue');
      console.log(response); // {success: true}
    } catch (e) {
      console.log(e); // {success: false}
    }
  };
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Main Page" component={MainPage} />
        <Tab.Screen name="Create Account" component={CreateAccount} />
        <Tab.Screen name="chest" component={Chest} />
        <Tab.Screen name="back" component={Back} />
        <Tab.Screen name="arm" component={Arm} />
        <Tab.Screen name="abs" component={Abs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
