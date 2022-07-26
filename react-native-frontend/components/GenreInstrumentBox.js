import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';

export default function GenreInstrumentBox({navigation, name, picture, id}){


    return(
        <TouchableOpacity style={styles.container}
                onPress={() => 
                    //sending params to bands screen 
                    navigation.navigate('Users', { name, id })}
            >
            <View style={{flex:1}}>
                <ImageBackground source={{uri: `data:image;base64,${picture}`}} style={styles.image}>
                    {/* the below view is for adding color overlay to the background image */}
                    <View style={styles.overlayView}/>
                    <Text style={styles.title}>{name}</Text>
                </ImageBackground>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: '900',
        color: 'white',
    },
    container:{
        height: 130,
        width: 130,
        margin: 10,
        elevation:50
    },  
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: '100%',
        borderRadius: 8,
        overflow: 'hidden'
    },
    //color overlay for background image
    overlayView: {
        height: "100%",
        width: "100%",
        position: 'absolute',
        backgroundColor: 'rgba(27, 27, 27, 0.35)',
    }
});