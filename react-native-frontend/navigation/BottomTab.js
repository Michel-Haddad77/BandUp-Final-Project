import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../constants/colors';
import HomeStack from './HomeStack';
import LoginScreen from '../screens/LoginScreen';
import Map from '../components/Map';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
          <Tab.Navigator screenOptions={{
              tabBarStyle: styles.tab_bar,
              tabBarActiveTintColor: 'white',
              tabBarInactiveTintColor: '#FFCB9B',
              tabBarHideOnKeyboard: true,
              headerShown: false,
            }}
          >
            <Tab.Screen name="Home" component={HomeStack} 
              options={{
                tabBarIcon: ({color}) => (
                  <Entypo name="home" size={30} color= {color}/>
                ),
              }}
            />
            <Tab.Screen name="Messages" component={Map} 
              options={{
                tabBarIcon: ({color}) => (
                  <Entypo name="message" size={30} color= {color}/>
                ),
              }}
            />
            <Tab.Screen name="Notifications" component={LoginScreen} 
              options={{
                tabBarIcon: ({color}) => (
                  <Entypo name="bell" size={30} color= {color}/>
                ),
              }}
            />
          </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tab_bar:{
      backgroundColor: colors.primary,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16
    }
  });