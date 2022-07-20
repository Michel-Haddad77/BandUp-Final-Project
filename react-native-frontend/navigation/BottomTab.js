import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import { NavigationContainer} from '@react-navigation/native';
import colors from '../constants/colors';
import HomeStack from './HomeStack';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <NavigationContainer>
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
            <Tab.Screen name="Messages" component={LoginScreen} 
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
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    tab_bar:{
      backgroundColor: colors.primary,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16
    }
  });