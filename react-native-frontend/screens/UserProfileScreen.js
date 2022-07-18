import { View, Button, StyleSheet } from "react-native";
import colors from "../constants/colors";
import ProfileHead from "../components/ProfileHead";
import VideoSection from "../components/VideoSection";
import StyledButton from "../components/StyledButton";

export default function UserProfileScreen() {

    return (
        <>
            <ProfileHead is_user={true}/>
            <View style={styles.container}>
                <StyledButton 
                    title="Edit Profile" 
                    text_style={styles.edit_button_text} 
                    style={styles.edit_button}
                />
                <StyledButton 
                    title="Logout" 
                    text_style={styles.edit_button_text} 
                    style={styles.edit_button}
                />
            </View>
            <VideoSection is_user={true}/>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    edit_button:{
        width: 100
    },
    edit_button_text:{
        fontSize: 14,
        textAlign: 'center'
    }
})