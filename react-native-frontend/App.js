import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import colors from './constants/colors';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import RegisterMusicianScreen from './screens/RegisterMusicianScreen';
import RegisterBandScreen from './screens/RegisterBandScreen';
import UserProvider from './context/user';
import HomeStack from './navigation/HomeStack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primary}/>
      
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
    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  tab_bar:{
    backgroundColor: colors.primary,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  }
});
