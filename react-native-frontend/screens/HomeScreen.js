import { StyleSheet, Button, ScrollView, View} from 'react-native';
import GenresSection from '../components/GenresSection';
import TopBar from '../components/TopBar';
import NewBandsSection from '../components/NewBandsSection';
import colors from '../colors/colors';

export default function HomeScreen({navigation}){
    return (
        <>
            <TopBar navigation={navigation}/>
            <ScrollView>
                <GenresSection navigation={navigation}/>
                <NewBandsSection navigation={navigation}/>
                <View style={styles.container}>
                    <Button title="Show All Bands" 
                        color={colors.primary} 
                        onPress={() => navigation.navigate('Bands', { name: 'All Bands'})}
                    />
                </View>
                
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 50,
    },
});