import { View, StyleSheet, Button, Image, Text } from "react-native";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";

function ProfileHead() {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Image style = {styles.image} source={require('../assets/profile2.png')}/>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Full Name </Text>
                    <Text style={styles.subTitle}>Genre</Text>
                    <Text style={styles.subTitle}>Location</Text>
                </View>
            </View>
            <Text style = {styles.description}> Lorem ipsum test test dshkja sajdhkja klasdlas</Text>
        </View>
    );
}

export default ProfileHead;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    container2: {
        flex: 1,
        flexDirection: 'row',
        margin: 20,
    },
    image: {
        height:120,
        width: 120,
        borderRadius: 60,
    },
    title: {
        fontSize: 25,
        fontWeight: '600',
        marginBottom: 10,
    },
    textContainer: {
        marginTop: 10,
        marginLeft: 10
    },
    subTitle:{
        marginLeft: 5,
        fontSize: 20
    },
    description: {
        flex: 1,
    }
})