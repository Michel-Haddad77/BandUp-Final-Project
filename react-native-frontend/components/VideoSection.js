import { StyleSheet, View, Text } from "react-native";
import colors from "../constants/colors";
import StyledButton from "./StyledButton";

export default function VideoSection({is_user}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Demo Video</Text>
            <Text style={styles.no_video_title}>No Video Uploaded</Text>
            {is_user? 
                <StyledButton 
                    title="Upload Video" 
                    text_style={styles.upload_button_text} 
                    style={styles.upload_button}
                    //onPress={handleUpload}
                /> : null 
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
        fontWeight: '500'
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