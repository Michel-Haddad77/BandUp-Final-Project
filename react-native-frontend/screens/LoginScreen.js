import { useState } from "react";
import { StyleSheet, View, Image, Text, TextInput, } from "react-native";
import StyledButton from "../components/StyledButton";
import axios from 'axios';
import url from "../constants/url";

function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    //when user presses on Login button
    function login(){
        //linking with login api
        axios({
            method: 'post',
            url: url + 'user/login',
            data: {
                email, 
                password
            }
        }).then(function (response) {
            console.log(response.data);
        }).catch(function (error){
            console.log(error.response.data);
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
        marginLeft: 10
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
    },
    button_text:{
        textTransform: "uppercase",
    }

})