import {StyleSheet, Text, View, Image} from 'react-native';

function BandCardHorizontal({name, picture}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={picture? {uri: `data:image;base64,${picture}`}: require('../assets/profile.png')} />
            <Text style={styles.title}>{name}</Text>
        </View>
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