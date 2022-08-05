import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StyledButton from '../components/StyledButton'
import colors from '../constants/colors'

export default function RegisterScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you a?</Text>
      <View style={styles.button_container}>
        <StyledButton 
            title="Musician" 
            style={styles.button}
            onPress={()=>{navigation.navigate('RegisterMusician')}}
        />
        <StyledButton 
            title="Band" 
            style={styles.button}
            onPress={()=>{navigation.navigate('RegisterBand')}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    title:{
        alignSelf: 'center',
        marginBottom: 15,
        fontSize: 20,
        color: colors.secondary,
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