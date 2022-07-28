import { StyleSheet, View, Text } from "react-native";
import colors from "../constants/colors";
import { Video, AVPlaybackStatus } from 'expo-av';

export default function VideoSection({route}) {

    let displayed_user = route.params.displayed_user;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Demo Video</Text>
            {displayed_user.video? 
                <Video
                    style={styles.video}
                    source={{uri: `http://192.168.1.75:8080/display?id=${displayed_user._id}`}}
                    useNativeControls
                    resizeMode="contain"
                    isLooping   
                /> : <Text style={styles.no_video_title}>No Video Uploaded</Text>
            }
               
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        margin: 10,
    },
    title: {
        fontSize: 21,
        fontWeight: '500',
        color: colors.secondary,
        marginLeft: 15
    },
    video:{
        width: 300,
        height: 200,
        alignSelf: "center",
        margin: 10
    },
    no_video_title:{
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 10,
        color: colors.secondary,
    },
    upload_button:{
        width: 130,
        alignSelf:"center"
    },
    upload_button_text:{
        fontSize: 14,
        textAlign: 'center'
    }
});