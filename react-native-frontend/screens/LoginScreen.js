import { StyleSheet, View, Image, Text, TextInput, } from "react-native";

function LoginScreen(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/logo.png')} />
            <View style={styles.input_container}> 
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} placeholder="jon@example.com"/>

                <Text style={styles.label}>Password</Text>
                <TextInput secureTextEntry={true} style={styles.input} placeholder="password"/>
            </View>
        
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
       // alignItems: 'center',
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
    input_container:{
        marginHorizontal: 30,
    },
    image:{
        width: 250,
        height: 250,
        marginTop: 20,
        alignSelf: 'center'
    }
})