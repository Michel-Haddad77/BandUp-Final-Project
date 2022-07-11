import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import GenreBox from './GenreBox';

export default function Genres(){
    return (
        <>
            <Text style={styles.title}>Band Genres</Text>
            <View style= {styles.container}>
                <GenreBox/>
                <GenreBox/>
                <GenreBox/>
                <GenreBox/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        flexWrap: 'wrap',
    },
    title: {
        fontSize: 25,
        fontWeight: '500'
    }
});