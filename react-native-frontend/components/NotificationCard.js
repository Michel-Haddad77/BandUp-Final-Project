import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios';
import url from '../constants/url';

export default function NotificationCard({navigation, id, title, message, picture}) {

    function getUserData() {
        axios({
            method: 'get',
            url: url + 'user/get-one',
            params:{
                id,
            }
        }).then(function (response) {
            let displayed_user = response.data;
            //send user object to profile screen
            navigation.navigate('Profile', {displayed_user})
        }).catch(function (error){
            console.log(error);
        })
    }  
    
  return (
    <TouchableOpacity onPress={getUserData}>
        <View style={styles.container}>
            <Image style={styles.image} source={picture? {uri: `data:image;base64,${picture}`}: require('../assets/profile.png')}/>
            <View style={styles.text_container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{message}</Text>
            </View> 
        </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    text_container:{
        marginLeft: 5
    },
    title:{
        fontSize: 20,    
    },

})