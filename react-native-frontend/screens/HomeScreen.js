import { StyleSheet, Button, ScrollView, View} from 'react-native';
import GenresSection from '../components/GenresSection';
import TopBar from '../components/TopBar';
import NewBandsSection from '../components/NewBandsSection';
import colors from '../constants/colors';
import StyledButton from '../components/StyledButton';

export default function HomeScreen({navigation}){
    return (
        <>
            <TopBar navigation={navigation}/>
            <ScrollView>
                <GenresSection navigation={navigation}/>
                <NewBandsSection navigation={navigation}/>
                <View style={styles.container}>
                    <StyledButton 
                        title="Show All Bands" 
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