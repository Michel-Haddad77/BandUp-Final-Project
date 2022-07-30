import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserProvider from '../context/user';
import colors from '../constants/colors';

import HomeScreen from '../screens/HomeScreen';
import UsersScreen from '../screens/UsersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import Map from '../components/Map';
import SearchScreen from '../screens/SearchScreen';
import EditMusicianProfileScreen from '../screens/EditMusicianProfileScreen';

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

            <Stack.Screen name="Map" component={Map} options={({ route }) => (
                { 
                headerStyle: {backgroundColor: colors.primary},
                headerTintColor: '#fff',
                })}
            />

            <Stack.Screen name="Search" component={SearchScreen} options={({ route }) => (
                { 
                headerStyle: {backgroundColor: colors.primary},
                headerTintColor: '#fff',
                })}
            />

            <Stack.Screen name="Edit Musician Profile" component={EditMusicianProfileScreen} options={({ route }) => (
                { 
                headerStyle: {backgroundColor: colors.primary},
                headerTintColor: '#fff',
                })}
            />
        </Stack.Navigator>

    );
}