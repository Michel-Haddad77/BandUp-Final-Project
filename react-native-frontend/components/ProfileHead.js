import { View, StyleSheet, Button, Image, Text } from "react-native";
import colors from "../constants/colors";
import { useAuthUser } from "../context/user";

function ProfileHead({route, is_user}) {
    //if the component is not used for the user profile
    if(!is_user){
        //user info to be displayed
        var {
            name,
            last_name,
            genre, 
            instrument,
            picture,
            description,
        } = route.params.band_info;
    }else{
        var {user} = useAuthUser();

        var {
            name,
            last_name,
            genre,
            instrument, 
            picture,
            description, 
        } = user;
    }

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Image style = {styles.image} 
                    source={picture? {uri: `data:image;base64,${picture}`}: require('../assets/profile.png')}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        {name}
                    </Text>
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