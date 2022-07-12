import { ScrollView, StyleSheet, Text, View} from 'react-native';

export default function BandsScreen({route}) {
    console.log("this is gerne" , route.params);
    return (
        <View>
            <Text>Testtt: {route.params.id}</Text>
        </View>
    )
}
