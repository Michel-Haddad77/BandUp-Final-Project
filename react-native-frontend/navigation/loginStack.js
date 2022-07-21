import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../constants/colors';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import RegisterMusicianScreen from '../screens/RegisterMusicianScreen';
import RegisterBandScreen from '../screens/RegisterBandScreen';

const Stack = createNativeStackNavigator();

export default function LoginStack() {
    return (
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
                title:"Register as a Musician", 
                headerStyle: {backgroundColor: colors.primary},
                headerTintColor: '#fff',
              }}
            />

            <Stack.Screen name="RegisterBand" component={RegisterBandScreen} options={
              {
                title:"Register as a Band", 
                headerStyle: {backgroundColor: colors.primary},
                headerTintColor: '#fff',
              }}
            />
        </Stack.Navigator>
    );
}
