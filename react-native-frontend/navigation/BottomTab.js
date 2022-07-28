import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../constants/colors';
import HomeStack from './HomeStack';
import NotificationsScreen from '../screens/NotificationsScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{
        tabBarStyle: styles.tab_bar,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#FFCB9B',
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} 
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={30} color= {color}/>
          ),
        }}
      />
      <Tab.Screen name="Search" component={SearchScreen} 
        options={{
          headerStyle: {backgroundColor: colors.primary},
          headerTintColor: '#fff',
          tabBarIcon: ({color}) => (
            <Entypo name="magnifying-glass" size={30} color= {color}/>
          ),
        }}
      />
      <Tab.Screen name="Notifications" component={NotificationsScreen} 
        options={{
          headerStyle: {backgroundColor: colors.primary},
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
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