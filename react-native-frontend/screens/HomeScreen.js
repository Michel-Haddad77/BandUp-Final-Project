import { ScrollView} from 'react-native';
import Genres from '../components/Genres';
import TopBar from '../components/TopBar';
import NewBands from '../components/NewBands';

export default function HomeScreen({navigation}){
    return (
        <>
            <TopBar/>
            <ScrollView>
                <Genres navigation={navigation}/>
                <NewBands navigation={navigation}/>
            </ScrollView>
        </>
    )
}