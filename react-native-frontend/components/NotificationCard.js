import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function NotificationCard() {
  return (
    <View style={styles.container}>
    <Image style={styles.image} source={require('../assets/logo.png')}/>
    <View style={styles.text_container}>
        <Text style={styles.title}>Notification Title</Text>
        <Text style={styles.subtitle}>Notification message</Text>
    </View> 
    </View>
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
    subtitle:{
        marginHorizontal: 10
    }
})