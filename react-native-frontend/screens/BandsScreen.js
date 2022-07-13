import { ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import BandCardHorizontal from '../components/BandCardHorizontal';

export default function BandsScreen({route}) {
    //console.log("Route params: " , route.params);

    return (
        <ScrollView>
            <BandCardHorizontal/>
        </ScrollView>
    )
}

