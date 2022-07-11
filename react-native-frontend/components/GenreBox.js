import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

export default function GenreBox({name, picture}){
    return(
        <View style={styles.container}>
            <ImageBackground source={{uri: `data:image;base64,${picture}`}} style={styles.image}>
                {/* the below view is for adding color overlay to the background image */}
                <View style={styles.overlayView}/>
                <Text style={styles.title}>{name}</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: '900',
        color: 'white',
    },
    container:{
        flex:0.5 ,
        height: 130,
        maxWidth: 130,
        margin: 10,
        flexBasis: '45%',
    },  
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: '100%',

    },
    //color overlay for background image
    overlayView: {
        height: "100%",
        width: "100%",
        position: 'absolute',
        backgroundColor: 'rgba(27, 27, 27, 0.35)',

    }
});