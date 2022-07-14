import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

export default function GenreBox({navigation, band_info}){
    return(
        <TouchableHighlight style={styles.container}
            onPress={() => 
                //sending params to profile screen 
                navigation.navigate('Profile', {name: band_info.name, band_info: band_info})}
        >   
            <View>
                    <Image style={styles.image} source={band_info.picture? {uri: `data:image;base64,${band_info.picture}`}: require('../assets/profile.png')} />
                    <Text style={styles.name}>{band_info.name}</Text>
                    <Text>{band_info.genre.genre_name}</Text>
            </View>

        </TouchableHighlight>
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