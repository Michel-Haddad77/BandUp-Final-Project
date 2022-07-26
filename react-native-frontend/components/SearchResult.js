import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import colors from '../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

function UserCardHorizontal({navigation, displayed_user}) {
    let {
        name,
        last_name,
        picture,
        description,
        genre,
        instrument,
        location,
    } = displayed_user;

    return (
        <TouchableOpacity
            onPress={() => 
                //sending params to profile screen 
                navigation.navigate('Profile', {name, displayed_user})}
        >
            <View style={styles.container}>
                <View style={styles.sub_container}>
                    <Image style={styles.image} source={picture? {uri: `data:image;base64,${picture}`}: require('../assets/profile.png')} />
                    <View>
                        <Text style={styles.title}>{last_name? (name + " " + last_name): name}</Text>
                        <Text style={styles.subtitle}>{genre?.genre_name || instrument?.instrument_name}</Text>
                        <Text style={styles.location}>{location.name}</Text>
                    </View>
                </View>
                <AntDesign name='right' size ={25} style={styles.icon}/>
            </View>
        </TouchableOpacity>
    );
}

export default UserCardHorizontal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'white', 
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    sub_container: {
        flexDirection: 'row',
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
    },
    location:{
        color: 'gray',
        fontStyle: 'italic'
    },
    icon:{
        marginRight: 10
    },
});