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

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={{backgroundColor:colors.primary}}/>

      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>

            <Stack.Screen name="Register" component={RegisterScreen} options={
              { 
                headerStyle: {backgroundColor: colors.primary},
                headerTintColor: '#fff',
              }}
            />

            <Stack.Screen name="RegisterMusician" component={RegisterMusicianScreen} options={
              {
                name:"Register as a Musician", 
                headerStyle: {backgroundColor: colors.primary},
                headerTintColor: '#fff',
              }}
            />

            <Stack.Screen name="RegisterBand" component={RegisterBandScreen} options={
              {
                name:"Register as a Band", 
                headerStyle: {backgroundColor: colors.primary},
                headerTintColor: '#fff',
              }}
            />
        </Stack.Navigator>
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
});
