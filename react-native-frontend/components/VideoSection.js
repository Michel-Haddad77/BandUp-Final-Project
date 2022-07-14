import { StyleSheet, View, Text } from "react-native";

export default function VideoSection(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Demo Video</Text>
            <Text style={styles.noVideoTitle}>No Video Uploaded</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        margin: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: '500'
    },
    noVideoTitle:{
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 30
    }
});