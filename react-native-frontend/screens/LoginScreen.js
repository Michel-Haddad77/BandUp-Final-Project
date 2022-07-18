import { useState } from "react";
import { StyleSheet, View, Image, Text, TextInput, } from "react-native";
import StyledButton from "../components/StyledButton";
import axios from 'axios';
import url from "../constants/url";
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from "../constants/colors";

function LoginScreen({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    //when user presses on Login button
    async function login(){

        //linking with login api
        axios({
            method: 'post',
            url: url + 'user/login',
            data: {
                email, 
                password
            }
        }).then(async function (response) {
            console.log(response.data);
            //store user token and info in async storage
            try {
                await AsyncStorage.setItem('token', response.data.token);
                await AsyncStorage.setItem('user_info', JSON.stringify(response.data.user_info));
            } catch(error) {
                console.log(error);
            }
        }).catch(function (error){
            console.log(error);
        })
    }
    
    return (
        <View style={styles.container}>
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
        </View>
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
        marginVertical: 10
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