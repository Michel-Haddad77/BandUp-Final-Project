import { StyleSheet, Text, View} from 'react-native';
import Genres from '../components/Genres';
import TopBar from '../components/TopBar';

export default function Home(){
    return (
        <>
            <TopBar/>
            <Genres/>
        </>
    )
}