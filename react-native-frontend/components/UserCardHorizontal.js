import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import colors from '../constants/colors';

function UserCardHorizontal({navigation, displayed_user}) {
    let {
        name,
        last_name,
        picture,
        description,
    } = displayed_user;

    return (
        <TouchableOpacity style={styles.container}
            onPress={() => 
                //sending params to profile screen 
                navigation.navigate('Profile', {name, displayed_user})}
        >
            <View style={styles.container}>
                <Image style={styles.image} source={picture? {uri: `data:image;base64,${picture}`}: require('../assets/profile.png')} />
                <View>
                    <Text style={styles.title}>{last_name? (name + " " + last_name): name}</Text>
                    <Text style={styles.subtitle}>{description}</Text>
                </View>
                
            </View>
        </TouchableOpacity>
    );
}

export default UserCardHorizontal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        borderRadius: 10,
        backgroundColor: 'white', 
    },
    image:{
        height: 70,
        width: 70,
        borderRadius: 40,
        marginRight:10,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: colors.secondary,
    },
    subtitle:{
        color: 'gray',
    }
});