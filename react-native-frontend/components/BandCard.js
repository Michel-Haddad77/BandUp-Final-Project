import { StyleSheet, Text, View, Image} from 'react-native';

export default function GenreBox({name, genre, picture}){
    return(
        <View style={styles.container}>
                <Image style={styles.image} source={{uri: `data:image;base64,${picture}`}} />
                <Text style={styles.name}>{name}</Text>
                <Text>{genre}</Text>
        </View>
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