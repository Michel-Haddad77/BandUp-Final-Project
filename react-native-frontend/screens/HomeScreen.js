import { StyleSheet, Button, ScrollView, View} from 'react-native';
import GenresInstrumentsSection from '../components/GenresInstrumentsSection';
import TopBar from '../components/TopBar';
import NewUsersSection from '../components/NewUsersSection';
import colors from '../constants/colors';
import StyledButton from '../components/StyledButton';
import { useContext} from 'react';
import { UserContext } from '../context/user';

export default function HomeScreen({navigation}){

    // const {user, token} = useContext(UserContext);
    // console.log("from context: ", token);

    return (
        <>
            <TopBar navigation={navigation}/>
            <ScrollView>
                <GenresInstrumentsSection navigation={navigation}/>
                <NewUsersSection navigation={navigation}/>
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