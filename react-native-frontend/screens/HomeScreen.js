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

    return (
        <>
            <TopBar navigation={navigation}/>
            <ScrollView>
                <GenresInstrumentsSection navigation={navigation}/>
                <NearbyUsersSection navigation={navigation}/>
                <NewUsersSection navigation={navigation}/>
                <View style={styles.container}>
                    
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