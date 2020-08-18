import * as React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  ToggleSwitch,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image,
  Script,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

//Main Page
function Workout({ navigation }) {
  const absImage = {
    uri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRozvDDPb0BPC5eP5tin3zAd9hWWdUftFlLUw&usqp=CAU',
  };
  const armImage = {
    uri:
      'https://www.americangrit.com/wp-content/uploads/2017/10/Straight-up-arms.jpg',
  };
  const backImage = {
    uri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFDiTcujOZZtjgJRyOVde1ghwMi8vWJhgUiA&usqp=CAU',
  };
  const chestImage = {
    uri:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFRUXFRcYGBcVFxcVFRcXFRUXFxUXFRcYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0eHR8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJMBVwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAABAwIDBQUECAUEAwEAAAABAAIDBBEFEiEGMUFRYRNxgZGxByKh8BQyM0JScsHRI0NikvEVY4KyosLSJP/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACMRAQEAAgICAgMBAQEAAAAAAAABAhEDIRIxBEETIlEjYRT/2gAMAwEAAhEDEQA/AOHui6bdF1IOBUjHKFKCpNM4qFrrkDmU4OV/Do4mh08pFm6NaRfM8666Wta6DiR2FyNDSRv5a6cD3IOH2HvSxtIO4u17tNyq4ttY+RuUe6ALaaaclyrpCdSboktVdO6hw9zm/wAN8chv9VrtT+W9r+CrPzN0cCCDqCLHyK5KGoc03BK6nDNpWyARVYL2/dkFu0Z3HiOhRZYOkkU3qrPa6eKdiGGCNolieJYSdHt4E/dePulUc/qgl+KX1Vhs6yWSeqe6cNFybDmUBpiX1ThKsanrg92WMFx5/VAHMk7gtPDGyTOyU0bZHXsZHAmNp5MH3z1Oietd0t/xajjc7VrSRz4eakbRutfQDvv6XW0zYF7wDVV7wfwx2AHxt8FDUezyP+VXyX5PGYHycEbxPWTBOW9u1Zf/AJD1Chmhfws7T7pB+G9bcPs0qCfeqIS38Qa/Nbu0F/Fa0ewdDA3NUzvefzCNvgG6/FO3Ep5OEe4jfpooZJV6VheE4XMTHFE99t5L5iB4lymrdgaMj3RIz8r7/wDYFRuK1Z7eUSS71Wkl9V1OPbGSR3dCXSj8OQh4Hh9bwXHVAc0kOBaQdQQQfEFEospXy+qpTv0T3vUcVO+TRouria9H2aq//wAoF+C57F5bkp+GCSOLKbblkV0rr6pUpFaVygkSPmULp0lh6qTKV8yrSPVSFalo32K39nn/AMYd65mJ+q3MA1kHeo55/nVcF1nHtuEPGULbjeucwNwyBdHTHReTxzt6PJTi4pSwp2fVL2uq6NRhunRtKUxWugSJkr9DZa9SMu9myR21VXGnD6PK61/cd6FOopnFtn71Wx2oDaeUf7bvQqdr0+aHOuhIdyVeg49uoBQSos6XOooh90t1HmQHJHF3DqYyyNYCBfeTwAF3HyBWbj2Jdo85bCNpyxtG6w0v1PVaVPMI4ZZrXdbI3l74Iee8D1XKzE3tayqeh9lc5K0KMG5U7QmcKAnoDU8hLZ6X8Fxp8DtPeY7R7Dq1zeRC33wskb2lOcw3uj/mR/8A0OoXHhit0T3MIc0lpB0INiFNOTbVY7XxVfEn3aG8z6LZpcca/SohZL/WLxyeL27/ABCztsn07TEadhYDG4uzOLyXXsLk7rDlzRhlLdDPCybJhVOZiII9GE2c4b3HiF6zSMjpIWxsABtrbeOi4DYiMNdH3X/VdTiUtydbrDk5d1vx8Oor4tVuIuCfPcq+FveXj3iNeaildwU1JoQQsbk6PB3L6qzQL6ALmcXgbKd9+9X/AKzVHT0QcVXlaiYSKdPWGGPKx1gPw8T3bvNZs+0M1yWyE95v6rSx5kcbLWC5KjdeQHhdLdPxlWqjaufVriD33/dZGIYkZhZ9n9Hbx+V28K3tLCBM/LuOo8QsMxq5l9puH0ya17WucNdDutwIvz6rT2exCNv3m35HT1WNjws9pvqWj4aft5LLfZdmM3jK4cusrHf1de88fgsmZ5O9ZGDYx2TgJAXx8rm46j9lar8XaJNGjJzG9FwpeR72KB7Vq0VRT2uXBxI0uCAO8c1UxCdmtsh6CwT/AB3Q/JFSGidIbNHjwHeVLWYS1rftQ53Kxt5qxFjw7Ps8oFt9ja/XqsapnuSQVcxkiblbULoy3ePLXctbAH+/e4FuZtbvWEXlKZSRlvoOHBTnh5TS8MvG7e8YDP7o3HkQt+OodwXzth2O1EFuylcwDcBq3Xm06Ls8C9qErRlqIxIPxsIY4Dq3cfgvOvw88buduyfJxymr09bFQeKVz3Lk8D22pqp5Yxxa4WAElmF192TXXu3rpnSkrG7xuspprNWdVbp3k/4VjtLb1n0jyLqzI66uZfqzuPYZProPgVV2lDvosxsPs3c+SmjZZZm28h/0+o1P2ZHmEYWb1RlPuPng7kJDuQvUjhrezozKHMjMoCcOUkYvuVXMp6UguaDpqEqabFnWY2Mc7k8zx/RYUl7m6vYr9oSCcvAHVOw/DzMco3nW6dup2eMtvTPhYrTWBW3YU+I2cP2TTH0U3KVpMbPZrBwXQUdBTta0SWzlgcS+4b72oDeBWI2MroKGuD2tY/cBY891tFjy266dPBJL3FSuoWgZm2y9NQqDWrcZEyOFwdID9a3Mgts0W4m6xWNuFOGVXyYT3EtMNVS2gvdmn3T66q43RRV8ozRX3Fzmk/mbb9VeF1ltlyTeGnQbCVGrr65WWH/I2/QroJ3rg8HqjTS6/VOh7r7/AAXbdoHNDgbgi4I3ELDml3v6bcNnjr7V5H6qzSOWXVvse/8ARW8Nqmn3bi6z10vfbpmVHu26J+G1l35ef+fRZefRQ4bJadvc+3flKILrSPaepzSkcB83WJSu98K7i7TcuPElZETtSqnZJsQlzElZh3qZ7lE46K5E5VhbQDUHTdbcDx4E7t6xloY267xru06C+qzSV38c/WPO5LvKgpqClWiCtdZOzJiEAt0ZkhQUAFIhCAVCRCAkhlLHNc02c0hwI3gg3B812uB+0ipY+NtQ4yRh7nSFrW9q5rmkBo3CwOvA9VwyFGfHjn7isc7j6r3LCfaHRvhMksnZODnAx2c5wbmOU6DW7bE26roaPaGlkAcyZjwd1nD03g9F82JQVz34mP1dNZz5fb6hjq43HQrG2/qWjD5rOFy21u9eAQ18rPqSyN/K9zfQq1NtBVPbkfPI9p4OOb1U4/Fsu9neaWelR40SqIyFC65GFb/0c8k4Up5L21uxcP4QpG7HQfhCy7G48O+iu5JzKZ9xYG69zGyUH4AlOzMLdWsuem9LsbjwzF8OcbSDXMPeHEO4nxK1tj4HDMSDcW8l6g/Y9r97WsF9w1J71o02zULGZGtsOfHvSylymmnHyTDLbzKssSQVRbTBuoC6PabBHwSXcLxnc8DTuPIrmWPLwXtF2i+7fpz5Bc3jZ09Dzxy7WXwNcLkKlJSAG4WpSAvizWt0VeRtkpva7JZtkVWYb9VVZJYredGCFzlUcrj3rXHtz59NOOztyz8fiPZgj7rvXT1sp6GF73BsbXOcdzWgknwC7Wn9nNRNC4SubEXNOUH3nX3tuBoNbcVWMsy2z5OSXGyuQpJWzRtJ0dax7xoVo4TO6F5Yfqnhw14jko/ZfgMdTNPTTvfG+Ozg1uW92uLJAbg7jl811+1+xop4BLE978hs7Na4adx90DS/qnlx3ufSMeadf1g1Vnag8FgYhC7fyVmCu1sVanAe1c/eNdXWUZdPitQwe7I63J1neuqkodrpROwSNYRnFyAQQCbO48rqHES2Jtz4DmuWLyTc77ro48Jn3Y5+XO4WSV65tFoQOiwY9xWvWO7SGJ/42MPiWi/xusicWuOWi5J/HZf6rOCjedFM46fN1UqpMrSeQJ8lrO2WV05jEJLvd3lVCnym5uo16Emo863YQlQmQQgoQAhCRACEIQAhCEAIQkQCoQi6AVKmhKgFCEIQH1znSZ0zMi6y0g/OlzKO6Lpns65RZDWqVrEAx0QcC1wDgd4IuCuV2w2Qikp708TGSR6tDGhucfeYbbzy6rs2xhAaFNkqsbcbuPBqXGOzaWuaS3cRxHOwPogTxOGYSC3Igg+RXo+1WwTamYSxyCEu+0s29/628A7v6HvWr9mlC9zXNEkdgAQ11w63E5r+8eaw/E7P/THl9RVNaL3BHeuUxOpDn3C9gm9lRDXNbOHCxtmZre+l9eXHmvP3ezmvM3ZiEgXtnJGQDmTvsr48dXtnycvl6ejexqhaKIz2/iSPcCSNzWHKAOmhPiu9yXVXAsMbTU8VOzdGwN7yN58Tcq+Fo5r2802v2anpqoYrQMzSD7eEfzG2s5zRzI3gcQCLm628P26w6piOadjLiz45jkcLj3mm+/wXYOavEvbNsn2Ugrom2ZIbSgDRsnB/QO3HqOqr37Jn7WMoWSD6NVMkDr6C5ydC7cR1XOSYmWaA37jceawyEl0XjlaY8lixV1TpDdxvy6dygCbdK1XrSbdvTNlJ+0omX/lvc3/2Hr8FRqHnXvKk2J0opT/un/o1Qyrzs5+9elx3/OCTTf8AFZGNS2jPM6fv8FqzOXNY/LdzW8hfxP8AhacWO8oz5stYskpAnJq7nCVIUIQAhCEAJEqAEAiEqEAiEIQAhCEAIQhACVIlQCoSBKgPqoTlPzlMDgOCdnWbM5rintJUWdODuqAmaVYiUDLFWW25IOHF3VOaE0flUrTySUAxODEXKMp5pGUtULlLlPeonM6FMqaXIBQWdFyGOYligJbT0jLXPvF41HA20si3RybddmsszHqimETo6kt7OQFpa77wOlgF5jiNPj8zjma5o5Mexo+Bus+XC8QgZ2kkEskuoDie0yDpqdVFyv1GmOGN91PU+zSjDyRXOZGblrTGC5o5FxOtu5cltNs/TQH+BVdtzBbYjxBsoqymrHOJfDO7va8/ooG4ZUn+RL/Y5OXI9YMhsN3Bo3k2A5rrcP8AZniMh+xawc5JGgf+NyrGyGG0wmzV0cosWllgQMwN/etryXvVFWRvALNRwV+bOzTyCkwGagidTzZM7jn9xxc2xAA1sNdD8FkVOh36rs9uHXqpb7hkt3GMfquEnluSVxZd516GHXHEdTJxXKVsuZ7j19NF1VFQyVMzKeK2d5Nr6AZWlxJPAWBXP4tgdTTvLJoZGEcS0lp6hw0K6eGacvNlu6ZyFKaZ+/I635T+yiXQwCRBSoBEoQlQCISoKCIkSoQCJEpQgyXQhCAEIRZACVCWyARKgIQH1KD0KkaLqIFSNd0WSEuQcvJSRtHIqOJ48eSssA5fFM0jNNwUtzusUwEdfBPZ3JGkY08VK1iRrQeCkASMWS2ShFkjFkx5UlkwuTCNzvmyjy96lLwmOfbfZBELeiDGCmGTp+iwMb2up6Z4jcXueRfJEA4j82uiLdHjLbqN6SEcgq8tOLbguIrfaM4XEdORydK61uXu6eqxqjairN3moIDtNA1re5oDbk9fis7yyNsfj5X/AI6zFqBpJu0d/BS4bVRwMJe9rWDiTp3d/ReY19S6QAyve7iO0cT/AGgklZTpg3RoGvL0Km82/UVPjePuukxzFO1kml0Ic45eRaNGHysuOMtlaqq0lobwHzYrFnlJNhqVGGNrXPKSSR6L7H6DNPPVHdGwRN/NIQ53iA1v969SlI4nz1XjdFtK6gpmU8Ba5+r5HXBaXu3252sB3NWbie3FZK3L2mT8uh810Rx5917XPPE36z2DvsuF2qwbB5vekkjhk/HE5oN/6mi4PiF5TUVEjzd73O/M4n1UBar2jVdDiOCYY1rhFWSuf90lgLL/ANVgD5LlJYi07weoVgxpDEns9KiVWewR2KfkWlVKrXYI7BHkaqlI0VrseiXsOiPIKVkWV7seiXseiXkFCyA1aAg6I7FHkemflKUsK0exThCjyGma2Mp5hK0REEojCPImYIjyQtTIhHkH0N4k+ikbfn5qv9I0TXTHwSiKuh45q7HKOF/0WQJLgggDx5m3NSNlAN7j/PyUw2u24WUjZfPfyHosqF43kjz+Cmie2+hupVGqyS3EKQS+KzhUD5t88lMJPn9ktqkXO1Sdp1WVPOBz/wAKN1VxJ0S2NNY1IHFQPrByKx5q5uuvwusyfFwHWLvLu+fNGz8XVx1QPz+6yce2qp6Swlcc5GYNAJNtwuRo0X49FWoK/Nu39/6KDHdn4KstdO0uLRlBBI0JuUW9dCSb7cnjO3tTJcDJTstbU3kd/wAW3IPQ2C5GrxVh1c5zz1PZsv0YzX4r0Co9ndIXF2aS5Ot3k+qz6jYaOG74nZXWIDiPeFwQbHhpfVZXG326MeXGdSOMBfoZMsTfyjPbo36391lXdjQY67dSNxkOY9NNyvV2AWPvSPd5D4hUjg7Bwv36pTjn2eXP/FGqxPtHFzn3J4lRuxEWtcK+6haNzR5Jhoxy+CvxjP8ALWRLW3UEMljey3TQ9FGaNVNRFtrMMxPBKXdFedS9E0w24FPaVIBPDFdbBfgnil6I2FARpTEtAUh5JRSHkjYZZjRkWoKR3JBw8ngjZMzs0uRaQw8p3+mphmhqdlC1WYUSpW4OeRSDFLEmRbwwc8inDCrcPggbYAanZei6FuGdPgnf6YOSNDbnOzR2ZXSDDQl/04ckdjbmuzS9meS6T6COQSCgHKyBtz3YnkhdF9GQmW3p+QI3JrA4cFNZxsQO/cqZo3y6EX4fP6Kq6TrdWn0p7inMo+7ckqII6rh6q1HLx+d3BNFON+ikEQ4lI00dQBz6KU1IA13/ADyVVrWjgpJSC0iwU6VKxsTxM3sL+ZVIYi8gCy0X0jSdbqWLD2aaa/FVMCubFPauvc/Pz6ojpr62vbnqurgw9tvqj9VbhpW7rA9LKvGRPlWLhcdvnetgEqRkQFxb4KbLySsOVRddZuLMOUi/DluW25p4gLMr6ZxJ3eaXiq5acNiEBus98a7WroTv39CsepoiOCLiiZOakiG+yrhlzqtqejVV1MVKpVEw9Qk7Pu8lcMNkZRySWoOiCQQtVt8SBEmm1WbStKtRUgViKIKdsOiAqNp+nmrMUDOQU7GdFM1vNVCNZSNO4KQUA5KVinY64T0m1SOHDkFH9BHJaoJ4pzWI0W2aKJPFEeS0w0JwAQbMFKUv0fotTKEoiSNk/R+iR0A42Wx9HSPpUBidgOATfow5LZNGmGlQbGNKE11Otc0/RRup0yYj6ZC0poUJk62L581I7h4oQnUm39UnFCEjiSyV6EJGcwKTLuQhMGZRmsn0rRmQhUlah3qyxuhSoSoSZQnMaD5oQkpFKwKhUMGpskQnCqhMwfBUpGCx0SITpM2eJvJUp2gbkIUU4qzNCrFov4IQoXERGqQoQkdSxKwEITIRq0BohCoqkiUzd6EKkJmqWMJUIAchiEJKPITUiEhDw43U7HIQg4kTEIQYLQq0zQhCAqThKhCon//Z',
  };
  return (
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
              width: 40,
              alignContent: 'center',
            }}
            title="Menu"
            onPress={() => navigation.openDrawer()}>
            <Text
              style={{
                fontSize: 15,
                padding: 10,
                fontWeight: 'bold',
                color: 'white',
              }}>
              {' '}
              ☰{' '}
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
            L3GACY HOME-WORKOUT APP V2.0
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
          Workout List
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={{ marginHorizontal: 10 }}
          onPress={() => {
            navigation.navigate('chest');
          }}>
          <ImageBackground
            source={chestImage}
            style={{
              height: screenHeight / 4,
              width: screenWidth - 35,
              alignItems: 'center',
              marginBottom: 5,
              marginTop: 10,
            }}>
            <Text
              style={{
                textShadowColor: 'white',
                textShadowRadius: 5,
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: 'Rockwell',
                marginTop: screenHeight / 4 - 20,
              }}>
              Chest Workout
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={{ marginHorizontal: 10 }}
          onPress={() => {
            navigation.navigate('abs');
          }}>
          <ImageBackground
            source={absImage}
            style={{
              height: screenHeight / 4,
              width: screenWidth - 35,
              alignItems: 'center',
              marginVertical: 5,
            }}>
            <Text
              style={{
                textShadowColor: 'white',
                textShadowRadius: 5,
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: 'Rockwell',
                marginTop: screenHeight / 4 - 20,
              }}>
              Abs Workout
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={{ marginHorizontal: 10 }}
          onPress={() => {
            navigation.navigate('back');
          }}>
          <ImageBackground
            source={backImage}
            style={{
              height: screenHeight / 4,
              width: screenWidth - 35,
              alignItems: 'center',
              marginVertical: 5,
            }}>
            <Text
              style={{
                textShadowColor: 'white',
                textShadowRadius: 5,
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: 'Rockwell',
                marginTop: screenHeight / 4 - 20,
              }}>
              Back Workout
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={{ marginHorizontal: 10 }}
          onPress={() => {
            navigation.navigate('arm');
          }}>
          <ImageBackground
            source={armImage}
            style={{
              height: screenHeight / 4,
              width: screenWidth - 35,
              alignItems: 'center',
              marginVertical: 5,
            }}>
            <Text
              style={{
                textShadowColor: 'white',
                textShadowRadius: 5,
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: 'Rockwell',
                marginTop: screenHeight / 4 - 20,
              }}>
              Arm Workout
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.loginbutton}
          onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 12.5,
              color: 'white',
            }}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

//Motivation Screen
function Motivation({ navigation }) {
  var quotes = [
    '“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney',
    '“The secret of getting ahead is getting started.” – Mark Twain',
    '“I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.” – Michael Jordan',
    '“You can either experience the pain of discipline or the pain of regret. The choice is yours.”  – Unknown',
    '“Impossible is just an opinion.” – Paulo Coelho',
    '“Your passion is waiting for your courage to catch up.” – Isabelle Lafleche',
    '“Magic is believing in yourself. If you can make that happen, you can make anything happen.” – Johann Wolfgang Von Goethe',
    '“If something is important enough, even if the odds are stacked against you, you should still do it.” – Elon Musk',
    '“Hold the vision, trust the process.” – Unknown',
    '“Don’t be afraid to give up the good to go for the great.” – John D. Rockefeller',
    '“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”― Neil Gaiman',
    '“Everything you can imagine is real.”― Pablo Picasso',
    '“People who wonder if the glass is half empty or full miss the point. The glass is refillable.” – Unknown',
    '“Invest in your dreams. Grind now. Shine later.” – Unknown',
    '“Hustlers don’t sleep, they nap.” – Unknown',
    '“Without hustle, talent will only carry you so far.” – Gary Vaynerchuk',
    '“If you hear a voice within you say ‘you cannot paint,’ then by all means paint and that voice will be silenced.” – Vincent Van Gogh',
    '“How wonderful it is that nobody need wait a single moment before starting to improve the world.” – Anne Frank',
    '“Some people want it to happen, some wish it would happen, others make it happen.” – Michael Jordan',
    '“Great things are done by a series of small things brought together” – Vincent Van Gogh',
    '“The hard days are what make you stronger.” – Aly Raisman',
    '“If you believe it’ll work out, you’ll see opportunities. If you don’t believe it’ll work out, you’ll see obstacles.” – Wayne Dyer',
    '“Keep your eyes on the stars, and your feet on the ground.” – Theodore Roosevelt',
    '“In a gentle way, you can shake the world.” – Mahatma Gandhi',
    '“If opportunity doesn’t knock, build a door.” – Kurt Cobain',
    '“Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.” – Roy T. Bennett',
    '“Work hard in silence, let your success be the noise.” – Frank Ocean',
    '“Hard work beats talent when talent doesn’t work hard.” – Tim Notke',
    '“If everything seems to be under control, you’re not going fast enough.” – Mario Andretti',
    '“Opportunity is missed by most people because it is dressed in overalls and looks like work.” – Thomas Edison',
    '“The only difference between ordinary and extraordinary is that little extra.” – Jimmy Johnson',
    '“The best way to appreciate your job is to imagine yourself without one.” – Oscar Wilde',
    '“Unsuccessful people make their decisions based on their current situations. Successful people make their decisions based on where they want to be.” – Benjamin Hardy',
    '“Never stop doing your best just because someone doesn’t give you credit.” – Kamari aka Lyrikal',
    '“At any given moment you have the power to say: this is not how the story is going to end.” – Unknown ',
    'If you cannot do great things, do small things in a great way.” – Napoleon Hill',
    '“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.” – Steve Jobs',
    '“Nothing will work unless you do.” – Maya Angelou',
    '“Sometimes when you’re in a dark place you think you’ve been buried but you’ve actually been planted.” – Christine Caine',
    '“Don’t limit your challenges. Challenge your limits.” – Unknown',
    '“Whenever you find yourself doubting how far you can go, just remember how far you have come.” – Unknown',
    '“Everyone has inside them a piece of good news. The good news is you don’t know how great you can be! How much you can love! What you can accomplish! And what your potential is.” – Anne Frank',
    ',“Go the extra mile. It’s never crowded there.” – Dr. Wayne D. Dyer',
    '“Keep your face always toward the sunshine – and shadows will fall behind you.” – Walt Whitman',
    '“What defines us is how well we rise after falling.” – Lionel from Maid in Manhattan Movie',
  ];

  const [text, setText] = React.useState('');

  return (
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
            onPress={() => navigation.navigate('Workout')}>
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
            Get Motivated!
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 15,
            color: 'white',
            margin: 10,
            backgroundColor: 'blue',
            alignSelf: 'center',
            padding: 8,
            borderRadius: 10,
          }}
          onPress={() => {
            setText(quotes[Math.floor(Math.random() * 44) + 1]);
          }}>
          Next Quote
        </TouchableOpacity>
        <Text
          style={{
            textShadowColor: 'white',
            textShadowRadius: 5,
            fontSize: 25,
            margin: 24,
            fontWeight: 'bold',
          }}>
          {text}
        </Text>
      </View>
    </ScrollView>
  );
}
//Diet
function Diet({ navigation }) {
  return (
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
            onPress={() => navigation.navigate('Workout')}>
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
            All About Diet
          </Text>
        </View>
      </View>
      <View
        style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'left' }}>
        <p style={{ color: 'gold', fontSize: 27, fontWeight: 'bold' }}>
          Nutrition Tips
        </p>
        <p style={{ color: 'goldenrod', fontSize: 24 }}>
          What is a healthy diet?
        </p>
        <p style={{ color: 'white' }}>
          Eating a healthy diet is not about strict limitations, staying
          unrealistically thin, or depriving yourself of the foods you love.
          Rather, it’s about feeling great, having more energy, improving your
          health, and boosting your mood.
        </p>
        <p style={{ color: 'white' }}>
          Healthy eating doesn’t have to be overly complicated. If you feel
          overwhelmed by all the conflicting nutrition and diet advice out
          there, you’re not alone. It seems that for every expert who tells you
          a certain food is good for you, you’ll find another saying exactly the
          opposite. The truth is that while some specific foods or nutrients
          have been shown to have a beneficial effect on mood, it’s your overall
          dietary pattern that is most important. The cornerstone of a healthy
          diet should be to replace processed food with real food whenever
          possible. Eating food that is as close as possible to the way nature
          made it can make a huge difference to the way you think, look, and
          feel.
        </p>
        <p style={{ color: 'white' }}>
          By using these simple tips, you can cut through the confusion and
          learn how to create—and stick to—a tasty, varied, and nutritious diet
          that is as good for your mind as it is for your body.
        </p>
        <p style={{ color: 'goldenrod', fontSize: 24 }}>
          The Healthy Eating Pyramid
        </p>
        <Image
          style={{ height: 250, width: 250, alignSelf: 'center' }}
          source={{
            uri:
              'https://www.helpguide.org/wp-content/uploads/2018/11/healthy-eating-pyramid-500.jpg',
          }}
        />
        <p style={{ color: 'white', textAlign: 'center' }}>
          The Harvard Healthy Eating Pyramid represents the latest nutritional
          science. The widest part at the bottom is for things that are most
          important. The foods at the narrow top are those that should be eaten
          sparingly, if at all.
        </p>
        <p style={{ color: 'goldenrod', fontSize: 24 }}>
          The fundamentals of healthy eating
        </p>
        <p style={{ color: 'white' }}>
          While some extreme diets may suggest otherwise, we all need a balance
          of protein, fat, carbohydrates, fiber, vitamins, and minerals in our
          diets to sustain a healthy body. You don’t need to eliminate certain
          categories of food from your diet, but rather select the healthiest
          options from each category.
        </p>
        <p style={{ color: 'gold', fontWeight: 'bold' }}>
          {' '}
          Protein{' '}
          <Text style={{ color: 'white' }}>
            gives you the energy to get up and go—and keep going—while also
            supporting mood and cognitive function. Too much protein can be
            harmful to people with kidney disease, but the latest research
            suggests that many of us need more high-quality protein, especially
            as we age. That doesn’t mean you have to eat more animal products—a
            variety of plant-based sources of protein each day can ensure your
            body gets all the essential protein it needs.
          </Text>{' '}
        </p>
        <p style={{ color: 'gold', fontWeight: 'bold' }}>
          {' '}
          Fat:{' '}
          <Text style={{ color: 'white' }}>
            Not all fat is the same. While bad fats can wreck your diet and
            increase your risk of certain diseases, good fats protect your brain
            and heart. In fact, healthy fats—such as omega-3s—are vital to your
            physical and emotional health. Including more healthy fat in your
            diet can help improve your mood, boost your well-being, and even
            trim your waistline.
          </Text>{' '}
        </p>
        <p style={{ color: 'gold', fontWeight: 'bold' }}>
          {' '}
          Fiber:{' '}
          <Text style={{ color: 'white' }}>
            Eating foods high in dietary fiber (grains, fruit, vegetables, nuts,
            and beans) can help you stay regular and lower your risk for heart
            disease, stroke, and diabetes. It can also improve your skin and
            even help you to lose weight.
          </Text>{' '}
        </p>
        <p style={{ color: 'gold', fontWeight: 'bold' }}>
          {' '}
          Calcium:{' '}
          <Text style={{ color: 'white' }}>
            As well as leading to osteoporosis, not getting enough calcium in
            your diet can also contribute to anxiety, depression, and sleep
            difficulties. Whatever your age or gender, it’s vital to include
            calcium-rich foods in your diet, limit those that deplete calcium,
            and get enough magnesium and vitamins D and K to help calcium do its
            job.
          </Text>{' '}
        </p>
        <p style={{ color: 'gold', fontWeight: 'bold' }}>
          {' '}
          Carbohydrates{' '}
          <Text style={{ color: 'white' }}>
            are one of your body’s main sources of energy. But most should come
            from complex, unrefined carbs (vegetables, whole grains, fruit)
            rather than sugars and refined carbs. Cutting back on white bread,
            pastries, starches, and sugar can prevent rapid spikes in blood
            sugar, fluctuations in mood and energy, and a build-up of fat,
            especially around your waistline.
          </Text>{' '}
        </p>
        <p style={{ color: 'goldenrod', fontSize: 24 }}>
          Making the switch to a healthy diet
        </p>
        <p style={{ color: 'white' }}>
          Switching to a healthy diet doesn’t have to be an all or nothing
          proposition. You don’t have to be perfect, you don’t have to
          completely eliminate foods you enjoy, and you don’t have to change
          everything all at once—that usually only leads to cheating or giving
          up on your new eating plan.
        </p>
        <p style={{ color: 'white' }}>
          A better approach is to make a few small changes at a time. Keeping
          your goals modest can help you achieve more in the long term without
          feeling deprived or overwhelmed by a major diet overhaul. Think of
          planning a healthy diet as a number of small, manageable steps—like
          adding a salad to your diet once a day. As your small changes become
          habit, you can continue to add more healthy choices.
        </p>
        <p style={{ color: 'white' }}>Setting yourself up for success</p>
        <p style={{ color: 'gold', fontWeight: 'bold' }}>
          {' '}
          Prepare more of your own meals.
          <Text style={{ color: 'white' }}>Cooking more meals at home </Text>
          <Text style={{ color: 'white' }}>
            can help you take charge of what you’re eating and better monitor
            exactly what goes into your food. You’ll eat fewer calories and
            avoid the chemical additives, added sugar, and unhealthy fats of
            packaged and takeout foods that can leave you feeling tired,
            bloated, and irritable, and exacerbate symptoms of depression,
            stress, and anxiety.
          </Text>{' '}
        </p>
        <p style={{ color: 'gold', fontWeight: 'bold' }}>
          {' '}
          Make the right changes.
          <Text style={{ color: 'white' }}>
            When cutting back on unhealthy foods in your diet, it’s important to
            replace them with healthy alternatives. Replacing dangerous trans
            fats with healthy fats (such as switching fried chicken for grilled
            salmon) will make a positive difference to your health. Switching
            animal fats for refined carbohydrates, though (such as switching
            your breakfast bacon for a donut), won’t lower your risk for heart
            disease or improve your mood.
          </Text>{' '}
        </p>
        <p style={{ color: 'gold', fontWeight: 'bold' }}>
          {' '}
          Read the labels.
          <Text style={{ color: 'white' }}>
            It’s important to be aware of what’s in your food as manufacturers
            often hide large amounts of sugar or unhealthy fats in packaged
            food, even food claiming to be healthy.
          </Text>{' '}
        </p>
        <p style={{ color: 'gold', fontWeight: 'bold' }}>
          {' '}
          Focus on how you feel after eating.
          <Text style={{ color: 'white' }}>
            This will help foster healthy new habits and tastes. The healthier
            the food you eat, the better you’ll feel after a meal. The more junk
            food you eat, the more likely you are to feel uncomfortable,
            nauseous, or drained of energy.
          </Text>{' '}
        </p>
        <p style={{ color: 'gold', fontWeight: 'bold' }}>
          {' '}
          Drink plenty of water.
          <Text style={{ color: 'white' }}>
            Water helps flush our systems of waste products and toxins, yet many
            of us go through life dehydrated—causing tiredness, low energy, and
            headaches. It’s common to mistake thirst for hunger, so staying well
            hydrated will also help you make healthier food choices.
          </Text>{' '}
        </p>
        <p style={{ color: 'goldenrod', fontSize: 24 }}>
          Moderation: important to any healthy diet
        </p>
        <Text style={{ color: 'white' }}>
          -Try not to think of certain foods as “off-limits.”
        </Text>
        {''}
        <Text style={{ color: 'white' }}>-Think smaller portions</Text>
        {''}
        <Text style={{ color: 'white' }}>
          -Eat with others whenever possible (eating alone leads to mindless
          overeating
        </Text>
        {''}
        <Text style={{ color: 'white' }}>-Limit snack foods in the home</Text>
        {''}
        <Text style={{ color: 'white' }}>-Control emotional eating</Text>
        <p style={{ color: 'goldenrod', fontSize: 24 }}>
          It’s not just what you eat, but when you eat
        </p>
        <p style={{ color: 'gold', fontWeight: 'bold' }}>
          Eat breakfast, and eat smaller meals throughout the day.
          <Text style={{ color: 'white' }}>
            {' '}
            A healthy breakfast can jumpstart your metabolism, while eating
            small, healthy meals keeps your energy up all day.
          </Text>
        </p>
        <p style={{ color: 'gold', fontWeight: 'bold' }}>
          Avoid eating late at night.
          <Text style={{ color: 'white' }}>
            {' '}
            Try to eat dinner earlier and fast for 14-16 hours until breakfast
            the next morning. Studies suggest that eating only when you’re most
            active and giving your digestive system a long break each day may
            help to regulate weight.
          </Text>
        </p>
      </View>
    </ScrollView>
  );
}
//Notification Screen

//Close and open Side menu
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close &#10060;"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}
//object
const Drawer = createDrawerNavigator();

//side menu created
function MyDrawer({ navigation }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Workout" component={Workout} />
      <Drawer.Screen name="Diet" component={Diet} />
      <Drawer.Screen name="Motivation" component={Motivation} />
    </Drawer.Navigator>
  );
}

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function MainPage() {
  return <MyDrawer />;
}

const styles = StyleSheet.create({
  loginbutton: {
    backgroundColor: '#00838f',
    height: 40,
    width: screenWidth / 3,
    borderRadius: 5,
    alignSelf: 'center',
  },
});
