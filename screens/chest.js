import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const Tab = createStackNavigator();

export default function Chest({navigation}) {
  const list = [
    {
      image: 'https://finetixfitness.com/images/Exercise%20Library/Knee%20Push%20Ups.gif',
      description: '20x',
      key: '1',
    },
    {
      image: 'https://finetixfitness.com/images/Exercise%20Library/Decline%20Push%20Up.gif',
      description: '30x',
      key: '2',
    },
    {
      image: 'https://calisthenicwarrior.com/wp-content/uploads/2019/05/Push-Up.gif',
      description: '40 seconds',
      key: '3',
    },
  ];
  return (
    <ScrollView>
        <ScrollView>
      <View style={{ alignItems: 'left', justifyContent: 'center' }}>
        <View
          style={{
            alignItems: 'top',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#292d33',
              height: 40,
              width: 100,
              alignContent: 'center',
            }}
            onPress={() => navigation.navigate("Main Page")}>
            <Text
              style={{
                fontSize: 15,
                padding: 10,
                fontWeight: 'bold',
                color: 'white',
              }}>
              {' '}
              ◄Return{'  |'}
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#292d33',
              padding: 10,
              fontWeight: 'bold',
              color: 'white',
            }}>
            CHEST-WORKOUT
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            marginTop: 10,
            flex: 1,
            textShadowColor: 'white',
            textShadowRadius: 5,
            fontWeight: 'bold',
            fontSize: 25,
            alignSelf: 'center',
            paddingHorizontal: 5,
          }}>
          Chest Workout List
        </Text>
      </View>
            <View>
          <FlatList
            data={list}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <Image
                    style={{ height: screenHeight / 4, width: screenWidth , margin:5}}
                    source={{ uri: item.image }}
                  />
                  <Text style={{
                    color:'grey',
                    shadowColor:'white',
                    shadowRadius:5,
                    fontSize:15,
                    fontWeight:'bold',
                    alignSelf:'center'
                  }}>{item.description} </Text>
                </View>
              );
            }}></FlatList>
        </View>
        <View style={{alignItems:'center'}}>
        <TouchableOpacity style={{
              backgroundColor: '#292d33',
              width: 100,
              alignContent: 'center',
              margin:15,
            }}
onPress={() => navigation.navigate("Main Page")}>>
        <Text style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#292d33',
              padding: 10,
              fontWeight: 'bold',
              color: 'white',}}> 
              ◄Finished? 
              </Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
      </ScrollView>
  );
}
