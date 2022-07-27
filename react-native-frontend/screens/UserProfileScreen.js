import { View, Button, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from "../constants/colors";
import ProfileHead from "../components/ProfileHead";
import UserVideoSection from "../components/UserVideoSection";
import StyledButton from "../components/StyledButton";
import { useAuthUser } from "../context/user";
import axios from "axios";
import url from "../constants/url";

export default function UserProfileScreen({navigation}) {

    const {user, setToken, setUser} = useAuthUser(); 

    //this function is called to delete the user's expo token on logout
    function deleteExpoToken(){
        axios({
            method: 'delete',
            url: url + 'user/delete-token',
            data: {
                id: user._id,
            }
        }).then(function (response) {
            console.log(response.data)
        }).catch(function (error){
            console.log(error);
        })
    }

    async function logout(){
        try {
            //clear async storage and update the context
            await AsyncStorage.clear();
            setToken("");
            setUser({});
            //delete user's expo token to no longer receive notifications after logout
            deleteExpoToken();
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
            <UserVideoSection/>
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