import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import colors from '../constants/colors';

function BandCardHorizontal({navigation, band_info}) {
    let {
        name,
        picture
    } = band_info;

    return (
        <TouchableOpacity style={styles.container}
            onPress={() => 
                //sending params to profile screen 
                navigation.navigate('Profile', {name: name, band_info: band_info})}
        >
            <View style={styles.container}>
                <Image style={styles.image} source={picture? {uri: `data:image;base64,${picture}`}: require('../assets/profile.png')} />
                <Text style={styles.title}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default BandCardHorizontal;

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
    }
});