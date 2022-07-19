import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import BandsScreen from './screens/BandsScreen';
import ProfileScreen from './screens/ProfileScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import colors from './constants/colors';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import RegisterMusicianScreen from './screens/RegisterMusicianScreen';
import RegisterBandScreen from './screens/RegisterBandScreen';
import UserProvider from './context/user';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primary}/>
      <UserProvider>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={LoginScreen} options={{headerShown: false}}/>

                <Stack.Screen name="Bands" component={BandsScreen} options={({ route }) => (
                    { 
                    title: route.params.name ,
                    headerStyle: {backgroundColor: colors.primary},
                    headerTintColor: '#fff',
                    })}
                />

                <Stack.Screen name="Profile" component={ProfileScreen} options={({ route }) => (
                    { 
                    title: route.params.name,
                    headerStyle: {backgroundColor: colors.primary},
                    headerTintColor: '#fff',
                    })}
                />

                <Stack.Screen name="UserProfile" component={UserProfileScreen} options={({ route }) => (
                    { 
                    title: "User Name",
                    headerStyle: {backgroundColor: colors.primary},
                    headerTintColor: '#fff',
                    })}
                />
            </Stack.Navigator>
          </NavigationContainer>
      </UserProvider>
    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
});
