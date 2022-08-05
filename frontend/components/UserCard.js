import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function UserCard({navigation, displayed_user, is_nearby}){
    let {
        name,
        last_name,
        genre,
        instrument,
        location,
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
                    {is_nearby? 
                        //either show location of nearby users or the genre/instrument of the new users
                        <Text style={styles.location}>{location && location.name}</Text> :
                        <Text>{genre? genre?.genre_name: instrument?.instrument_name}</Text>
                    }
                    
                    
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
    },
    location:{
        fontStyle: "italic",
    }
});