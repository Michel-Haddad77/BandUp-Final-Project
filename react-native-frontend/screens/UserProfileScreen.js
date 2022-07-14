import { View, Button, StyleSheet } from "react-native";
import colors from "../colors/colors";
import ProfileHead from "../components/ProfileHead";
import VideoSection from "../components/VideoSection";

export default function UserProfileScreen() {

    return (
        <>
            <ProfileHead is_user={true}/>
            <View style={styles.container}>
                <Button title="Edit Profile" color={colors.primary}/>
            </View>
            <VideoSection/>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 50,
    }
})