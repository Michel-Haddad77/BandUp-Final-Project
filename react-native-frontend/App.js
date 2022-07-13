import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BandsScreen from './screens/BandsScreen';
import colors from './colors/colors';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar style='auto'/>

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Bands" component={BandsScreen} options={({ route }) => (
              { 
                title: route.params.name ,
                headerStyle: {backgroundColor: colors.primary},
                headerTintColor: '#fff',
              })}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
});
