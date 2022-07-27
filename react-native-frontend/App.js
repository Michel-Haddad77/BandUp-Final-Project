import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Notifications from 'expo-notifications';
import colors from './constants/colors';
import NavigationSwitcher from './navigation/NavigationSwitcher';
import UserProvider from './context/user';

//This will let the notification pop up when the app is foregrounded
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primary}/>
      <UserProvider>
        <NavigationSwitcher/>
      </UserProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  }
});