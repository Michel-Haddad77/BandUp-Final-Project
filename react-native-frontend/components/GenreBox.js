import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

export default function GenreBox(){
    return(
        <ImageBackground source={require('../assets/profile2.png')} style={styles.image}>
            <View style={styles.container}>
                <Text style={styles.title}>Genre</Text>

            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 21,
        fontWeight: '700',
        color: 'white',
    },
    container:{
        flex:1 ,
        width: 100,
        height: 100,
    },  
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 110,
        height: 110,
        flexBasis: '41%',
        margin: 10
    }
});