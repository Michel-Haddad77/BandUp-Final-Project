import { View, StyleSheet, Button, Image, Text } from "react-native";
import colors from "../constants/colors";

function ProfileHead({route, is_user}) {
    if(!is_user){
        //band info to be displayed
        var {
            name,
            genre, 
            picture,
            description,
        } = route.params.band_info;
    }

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Image style = {styles.image} 
                    source={picture? {uri: `data:image;base64,${picture}`}: require('../assets/profile.png')}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{is_user? "User Name":name}</Text>
                    <Text style={styles.subTitle}>{is_user? "Genre":genre.genre_name}</Text>
                    <Text style={styles.subTitle}>Location</Text>
                </View>
            </View>
            <Text style = {styles.description}> {description}</Text>
        </View>
    );
}

export default ProfileHead;

const styles = StyleSheet.create({
    container: {
        margin: 10
    },

    container2: {
        flexDirection: 'row',
        margin: 10,
    },
    image: {
        height:120,
        width: 120,
        borderRadius: 60,
    },
    title: {
        fontSize: 21,
        fontWeight: '500',
        marginBottom: 10,
    },
    textContainer: {
        marginTop: 10,
        marginLeft: 10
    },
    subTitle:{
        marginLeft: 5,
        fontSize: 18,
        color: colors.secondary,
    },
    description: {
        fontSize: 16,
        color: colors.secondary,
        marginHorizontal: 10
    }
})