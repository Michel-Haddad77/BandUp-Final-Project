import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function stackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>

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
    );
}

export default stackNavigation;