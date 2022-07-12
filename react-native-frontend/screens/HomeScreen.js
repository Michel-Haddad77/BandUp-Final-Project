import { ScrollView, StyleSheet, Text, View} from 'react-native';
import Genres from '../components/Genres';
import TopBar from '../components/TopBar';
import NewBands from '../components/NewBands';

export default function Home(){
    return (
        <>
            <TopBar/>
            <ScrollView>
                <Genres/>
                <NewBands/>
            </ScrollView>
        </>
    )
}