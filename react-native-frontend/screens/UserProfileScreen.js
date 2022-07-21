import { View, Button, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from "../constants/colors";
import ProfileHead from "../components/ProfileHead";
import VideoSection from "../components/VideoSection";
import StyledButton from "../components/StyledButton";
import { useAuthUser } from "../context/user";

export default function UserProfileScreen({navigation}) {

    const {token, setToken, setUser} = useAuthUser(); 

    async function logout(){
        try {
            //clear async storage and update the context
            await AsyncStorage.clear();
            setToken("");
            setUser({});
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <>
            <ProfileHead is_user={true}/>
            <View style={styles.container}>
                <StyledButton 
                    title="Edit Profile" 
                    text_style={styles.button_text} 
                    style={styles.edit_button}
                />
                <StyledButton 
                    title="Logout" 
                    text_style={styles.button_text} 
                    style={styles.button}
                    onPress={logout}
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
    button:{
        width: 100
    },
    button_text:{
        fontSize: 14,
        textAlign: 'center'
    }
})