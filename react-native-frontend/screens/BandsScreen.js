import { ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import BandCardHorizontal from '../components/BandCardHorizontal';
import axios from 'axios';

export default function BandsScreen({route}) {
    //console.log("Route params: " , route.params);

    return (
        <ScrollView>
            <BandCardHorizontal/>
            <BandCardHorizontal/>
            <BandCardHorizontal/>
        </ScrollView>
    )
}

