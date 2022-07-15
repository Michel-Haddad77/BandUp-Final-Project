import { StyleSheet, View, Image } from "react-native";

function LoginScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/logo.png')} />
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    image:{
        width: 150,
        height: 150
    }
})