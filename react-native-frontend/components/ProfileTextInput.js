import { TextInput, Text, StyleSheet } from 'react-native'
import colors from '../constants/colors'

export default function ProfileTextInput({label, secureTextEntry, autoCapitalize, placeholder, onChangeText, value, keyboardType}) {
  return (
    <>
        <Text style={styles.label}>{label}</Text>
        <TextInput secureTextEntry={secureTextEntry} 
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            value={value}
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
    },
    input:{
        borderBottomWidth: 2,
        borderColor: 'grey',
        padding: 5,
        marginBottom: 10,
        fontSize: 20,
    }
})