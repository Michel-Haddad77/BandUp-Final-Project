import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

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
        margin: 10,
    },
    image:{
        height: 90,
        width: 90,
        borderRadius: 50,
        marginRight:10,
    },
    title: {
        fontSize: 25,
        fontWeight: '500'
    }
});