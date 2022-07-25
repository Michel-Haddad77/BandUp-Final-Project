import { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, TextInput, ScrollView, } from "react-native";
import StyledButton from "../components/StyledButton";
import axios from 'axios';
import url from "../constants/url";
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from "../constants/colors";
import { useAuthUser } from "../context/user";
import * as Notifications from 'expo-notifications';

function LoginScreen({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [expo_token, setExpoToken] = useState("");

    //setToken
    const {setToken, setUser} = useAuthUser();

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

    //set expo token to add/update it in the database
    useEffect(()=>{
        registerForPushNotificationsAsync().then(token => setExpoToken(token));
        return () => {
            setExpoToken(""); // Reset state to avoid warning when unmounting component
        };
    },[])
    
    //when user presses on Login button
    async function login(){

        //linking with login api
        axios({
            method: 'post',
            url: url + 'user/login',
            data: {
                email, 
                password,
                expo_token, //send expo token to add/update it
            }
        }).then(async function (response) {
            console.log(response.data);
            //store user token and info in async storage
            try {
                await AsyncStorage.setItem('token', response.data.token);
                await AsyncStorage.setItem('user_info', JSON.stringify(response.data.user_info));
                setToken(response.data.token);
                setUser(response.data.user_info);
            } catch(error) {
                console.log(error);
            }
        }).catch(function (error){
            console.log(error);
        })
    }
    
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={require('../assets/logo.png')} />
             
            <Text style={styles.label}>Email</Text>
            <TextInput 
                style={styles.input} 
                placeholder="jon@example.com"
                onChangeText={email => setEmail(email)}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput secureTextEntry={true} 
                style={styles.input} 
                placeholder="password"
                onChangeText={password => setPassword(password)}
                />

            <StyledButton 
                title="Login" 
                text_style={styles.button_text} 
                style={styles.button}
                onPress= {login}
            />

            <Text style={styles.label2}>Late For The Party?</Text>
            <StyledButton 
                title="Sign Up" 
                text_style={styles.button_text} 
                style={styles.button}
                onPress={()=>{navigation.navigate('Register')}}
            />
        </ScrollView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 30,
    },
    label:{
        fontSize: 20,
        marginLeft: 10,
        color: colors.secondary,
    },
    input:{
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
    },
    image:{
        width: 250,
        height: 250,
        marginTop: 20,
        alignSelf: 'center'
    },
    button:{
        marginVertical: 10,
    },
    label2:{
        fontSize: 20,
        alignSelf: 'center',
        marginVertical: 20,
        color: colors.secondary,
    },
    button_text:{
        textTransform: "uppercase",
    }

})