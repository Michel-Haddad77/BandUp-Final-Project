import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function NewBandCard({navigation, band_info}){
    let {
        name,
        genre,
        picture
    } = band_info;

    return(
        <TouchableOpacity style={styles.container}
            onPress={() => 
                //sending params to profile screen 
                navigation.navigate('Profile', {name: name, band_info: band_info})}
        >   
            <View>
                    <Image style={styles.image} source={picture? {uri: `data:image;base64,${picture}`}: require('../assets/profile.png')} />
                    <Text style={styles.name}>{name}</Text>
                    <Text>{genre.genre_name}</Text>
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
    }
});