import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StyledButton from '../components/StyledButton'

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you a?</Text>
      <View style={styles.button_container}>
        <StyledButton title="Musician" style={styles.button}/>
        <StyledButton title="Band" style={styles.button} />
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
    },
    title:{
        alignSelf: 'center',
        marginBottom: 15,
        fontSize: 20
    },
    button_container:{
        flexDirection: 'row',  
        justifyContent: 'space-evenly'
    },
    button:{
        height: 110,
        width: 110,
       justifyContent: 'center',
    },
})