import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserProvider from '../context/user';
import colors from '../constants/colors';

import HomeScreen from '../screens/HomeScreen';
import UsersScreen from '../screens/UsersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UserProfileScreen from '../screens/UserProfileScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
                <Stack.Navigator>
                    <Stack.Screen name="HomeStack" component={HomeScreen} options={{headerShown: false}}/>

                    <Stack.Screen name="Users" component={UsersScreen} options={({ route }) => (
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
                        title: route.params.name,
                        headerStyle: {backgroundColor: colors.primary},
                        headerTintColor: '#fff',
                        })}
                    />
                </Stack.Navigator>
    
    );
}