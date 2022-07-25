import { StyleSheet, Button, View, ToastAndroid } from "react-native";
import colors from "../constants/colors";
import StyledButton from "./StyledButton";
import axios from 'axios';
import { useAuthUser } from "../context/user";
import url from "../constants/url";
import { useEffect, useState } from "react";
import * as Notifications from 'expo-notifications';

function ButtonsSection({route}) {
    const [disabled, setDisabled] = useState(false);

    //type id and expo push token of the displayed user
    const displayed_type = route.params.displayed_user.user_type;
    const displayed_id  = route.params.displayed_user._id;
    const expo_token  = route.params.displayed_user.expo_token;

    //get logged in user
    const {user} = useAuthUser();

    //check if the logged in user has already requested/applied to the displayed user
    //if so, disable the button
    useEffect(() => {
      if(user?.requested?.includes(displayed_id)){
        setDisabled(true);
      }else if (user?.applied?.includes(displayed_id)){
        setDisabled(true);
      }

    },[])
    
    //this function sends a notification to the device according to expo_token
    async function sendPushNotification(message_body) {

        const message = {
          to: expo_token,
          sound: 'default',
          title: user.name,
          body: message_body,
          data: { someData: 'goes here' },
        };
      
        await fetch('https://exp.host/--/api/v2/push/send', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(message),
        });

        addNotification(message_body);
    }

    //function called to add the notification to the database
    function addNotification(message){
        axios({
            method: 'post',
            url: url + 'notifications/add',
            data: {
                to: displayed_id,
                from: user._id, 
                title: user.name,
                message,
            }
        }).then(function (response) {
            console.log(response.data);
        }).catch(function (error){
            console.log(error);
        })
    }

    //function called when musician applies to a band
    function apply(){
        let data = {
            id: user?._id, 
            band_id: displayed_id
        };

        //linking with apply API
        axios({
            method: 'post',
            url: url + 'musicians/apply',
            data: data,
        })
        .then(function (response) {
            ToastAndroid.show('You have applied to this band!', ToastAndroid.LONG);
            //disable the button after pressing
            setDisabled(true);
            //send notification to the band
            sendPushNotification('has applied to your band!');
        })
        .catch(function (error){
            console.log(error);
            ToastAndroid.show("Couldn't Send Application", ToastAndroid.SHORT);
        })
    }

    //function called when a band requests a musician to apply
    function requestToApply(){
        let data = {
            id: user?._id, 
            musician_id: route.params.displayed_user._id
        };

        //linking with request to apply API
        axios({
            method: 'post',
            url: url + 'bands/requested',
            data: data,
        })
        .then(function (response) {
            ToastAndroid.show('You have requested this musician to apply', ToastAndroid.LONG);
            //disable the button after pressing
            setDisabled(true);
            //send notification to the musician
            sendPushNotification('has requested you to apply!');
        })
        .catch(function (error){
            console.log(error);
            ToastAndroid.show("Couldn't Send Request", ToastAndroid.SHORT);
        })
    }


    return (
        <View style={styles.container}>

            <StyledButton 
                title={ //if the displayed user is a musician => Request to apply
                    displayed_type === 2? "Request to Apply": "Apply"} 
                text_style={styles.edit_button_text} 
                style={styles.edit_button}
                onPress={displayed_type === 2? requestToApply : apply}
                disabled = {disabled}
            />
            <StyledButton 
                title="Message" 
                text_style={styles.edit_button_text} 
                style={styles.edit_button}
            />
        </View>
    );
}

export default ButtonsSection;

const styles = StyleSheet.create({
    container:{
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    edit_button:{
        width: 130
    },
    edit_button_text:{
        fontSize: 14,
        textAlign: 'center'
    }

})