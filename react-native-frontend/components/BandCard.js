import { StyleSheet, Text, View, Image} from 'react-native';

export default function GenreBox({name, picture}){
    return(
        <View style={styles.container}>
                <Image style={styles.image} source={require('../assets/profile2.png')} />
                <Text style={styles.name}>Michel Haddad</Text>
                <Text>Band Genre</Text>
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