import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import BandCard from '../components/BandCard';

export default function Genres(){

    return(
        <View style={styles.container}>
            <Text style={styles.title}>New Bands</Text>
            <ScrollView horizontal={true} style={styles.bandContainer} >
                <BandCard/>
                <BandCard/>
                <BandCard/>
                <BandCard/>
                <BandCard/>
            </ScrollView>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        fontSize: 25,
        fontWeight: '500'
    },
    bandContainer: {
        margin: 10,

      
    }
});
