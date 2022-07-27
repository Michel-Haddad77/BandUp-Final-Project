import { TextInput, Text, StyleSheet } from 'react-native'
import colors from '../constants/colors'

export default function MyTextInput({label, secureTextEntry, autoCapitalize, placeholder, onChangeText}) {
  return (
    <>
        <Text style={styles.label}>{label}</Text>
        <TextInput secureTextEntry={secureTextEntry} 
            autoCapitalize={autoCapitalize}
            style={styles.input} 
            placeholder={placeholder}
            onChangeText={onChangeText}
            />
    </>
    
  )
}

const styles = StyleSheet.create({
    label:{
        color: colors.secondary,
        marginBottom: 5
    },
    input:{
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        fontSize: 20,
        backgroundColor: 'white'
    }
})