import { StyleSheet, View, Text } from "react-native";
import colors from "../constants/colors";
import StyledButton from "./StyledButton";
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
import url from "../constants/url";
import { useAuthUser } from "../context/user";
import { Video, AVPlaybackStatus } from 'expo-av';

export default function UserVideoSection() {

    //from context
    const {user,setUser} = useAuthUser();
    
    //function called when the user wants to upload a video
    async function handleUpload(){

        //result= { cancelled: false, duration, rotation, type: 'video', uri, width, height}
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {

            let form_data = new FormData();
            
            //add the video to the form data 
            form_data.append("video", {
                name: `${user._id}.mp4`,
                uri: result.uri,
                type: 'video/mp4'
            });

            //upload video
            axios({
                method: 'post',
                url: url + 'user/upload',
                data: form_data,
                params:{
                    id: user._id
                },
                headers: {
                    'Content-Type': 'multipart/form-data', //must be included for uploading files
                },
            }).then(function (response) {
                //The video was uploaded and stored successfully
                console.log(response.data);
                //after upload, update the user in context directly with the video name
                setUser({...user, video:`${user._id}.mp4`});
                console.log(user.video)
            }).catch(function (error){
                console.log(error);
            })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Demo Video</Text>
            {user.video? 
                <Video
                    style={styles.video}
                    source={{uri: `http://192.168.1.75:8080/display?id=${user._id}`}}
                    useNativeControls
                    resizeMode="contain"
                    isLooping   
                /> : <Text style={styles.no_video_title}>No Video Uploaded</Text>
            }
            
                <StyledButton 
                    title={user.video? "Delete Video" : "Upload Video"} 
                    text_style={styles.upload_button_text} 
                    style={styles.upload_button}
                    onPress={handleUpload}
                />
            
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