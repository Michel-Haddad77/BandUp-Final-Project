import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function UserCard({navigation, displayed_user}){
    let {
        name,
        last_name,
        genre,
        instrument,
        picture
    } = displayed_user;

    return(
        <TouchableOpacity style={styles.container}
            onPress={() => 
                //sending params to profile screen 
                navigation.navigate('Profile', {name, displayed_user})}
        >   
            <View>
                    <Image style={styles.image} source={picture? {uri: `data:image;base64,${picture}`}: require('../assets/profile.png')} />
                    <Text style={styles.name}>{last_name? (name + " " + last_name): name}</Text>
                    <Text>{genre? genre?.genre_name: instrument?.instrument_name}</Text>
                    <Text></Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: '500',
    },  
    image: {
        height: 130,
        width: 130,
        borderRadius: 8,
    }
});