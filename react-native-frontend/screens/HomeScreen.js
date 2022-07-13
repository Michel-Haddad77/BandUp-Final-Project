import { ScrollView} from 'react-native';
import GenresSection from '../components/GenresSection';
import TopBar from '../components/TopBar';
import NewBandsSection from '../components/NewBandsSection';

export default function HomeScreen({navigation}){
    return (
        <>
            <TopBar/>
            <ScrollView>
                <GenresSection navigation={navigation}/>
                <NewBandsSection navigation={navigation}/>
            </ScrollView>
        </>
    )
}