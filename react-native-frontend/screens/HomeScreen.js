import { StyleSheet, Button, ScrollView, View} from 'react-native';
import GenresInstrumentsSection from '../components/GenresInstrumentsSection';
import TopBar from '../components/TopBar';
import NewUsersSection from '../components/NewUsersSection';
import * as Notifications from 'expo-notifications';
import colors from '../constants/colors';
import StyledButton from '../components/StyledButton';
import { useEffect, useState} from 'react';
import { useAuthUser } from '../context/user';
import NearbyUsersSection from '../components/NearbyUsersSection';

export default function HomeScreen({navigation}){
    const [name,setName]  = useState("");
    const [expo_token, setExpoToken] = useState("");

    //get logged in user to check the user_type
    const {user} = useAuthUser();
    useEffect(() => {
        //set the name for the "Show All" button and page title
        if (user?.user_type === 2){
            setName("Bands");
        }else{
            setName("Musicians");
        }
    }, [user])

    //get expo token of device
    async function registerForPushNotificationsAsync() {
        let token;
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
          }
          token = (await Notifications.getExpoPushTokenAsync()).data;
          console.log(token);
      
        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
      
        return token;
    }

    //set expo token after user logs in
    useEffect(()=>{
        registerForPushNotificationsAsync().then(token => setExpoToken(token));
    },[])
    


    return (
        <>
            <TopBar navigation={navigation}/>
            <ScrollView>
                <GenresInstrumentsSection navigation={navigation}/>
                <NearbyUsersSection navigation={navigation}/>
                <NewUsersSection navigation={navigation}/>
                <View style={styles.container}>
                    <StyledButton 
                        title={`Show All ${name}`} 
                        onPress={() => navigation.navigate('Users', { name: `All ${name}`})}
                    />
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 50,
    },
});