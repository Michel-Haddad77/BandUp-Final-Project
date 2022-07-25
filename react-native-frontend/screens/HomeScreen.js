import { StyleSheet, Button, ScrollView, View} from 'react-native';
import GenresInstrumentsSection from '../components/GenresInstrumentsSection';
import TopBar from '../components/TopBar';
import NewUsersSection from '../components/NewUsersSection';
import colors from '../constants/colors';
import StyledButton from '../components/StyledButton';
import { useEffect, useState} from 'react';
import { useAuthUser } from '../context/user';
import NearbyUsersSection from '../components/NearbyUsersSection';

export default function HomeScreen({navigation}){
    const [name,setName]  = useState("");

    //get logged in user to check the user_type
    const {user} = useAuthUser();
    useEffect(() => {
        //set the name for the "Show All" button and page title
        if (user?.user_type === 2){
            setName("Bands");
        }else{
            setName("Musicians");
        }
    }, [user])  

    return (
        <>
            <TopBar navigation={navigation}/>
            <ScrollView>
                <GenresInstrumentsSection navigation={navigation}/>
                <NearbyUsersSection navigation={navigation}/>
                <NewUsersSection navigation={navigation}/>
                <View style={styles.container}>
                    <StyledButton 
                        title={`Show All ${name}`} 
                        onPress={() => navigation.navigate('Users', { name: `All ${name}`})}
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