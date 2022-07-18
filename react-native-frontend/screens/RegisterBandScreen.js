import { StyleSheet, Text, View , TextInput, Image, ToastAndroid} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../components/StyledButton';
import { useState,useEffect } from 'react';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';

import url from '../constants/url';
import colors from '../constants/colors';

export default function RegisterBandScreen() {
    const navigation = useNavigation();

    //states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [genres, setGenres] = useState([]); //to display all genres in dropdown
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");

    //fetch all genres from server for the dropdown list
    useEffect(() => {
        axios({
            method: 'get',
            url: url + 'bands/allgenres',
        }).then(function (response) {
            setGenres(response.data);
            console.log(genres);
        }).catch(function (error){
            console.log(error);
        })
    },[])

    //function called when user signs up
    function onSignUp(){
        let data = {
            name,
            email,
            password,
            description,
            user_type: 1, //user is a band
            picture,
            genre_id: genre,
        };

        //linking with register api
        axios({
            method: 'post',
            url: url + 'user/register',
            data: data,
        })
        .then(function (response) {
            //console.log(response.data);
            ToastAndroid.show('Welcome To The Party! Please Login', ToastAndroid.LONG);
            navigation.navigate('Login');
        })
        .catch(function (error){
            console.log(error);
            ToastAndroid.show('Email Already Taken', ToastAndroid.SHORT);
        })
    }

    //function called when the user wants to upload an image
    async function handleUpload(){
        // No permissions request is necessary for launching the image library
        //result= { cancelled: false, type: 'image', uri, width, height, base64 }
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1,
            base64: true, // result object will also contain a base 64 property
        });

        console.log(result);

        if (!result.cancelled) {
            setPicture(result.base64);
        }
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Band Name</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Metallica"
                onChangeText={name => setName(name)}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput 
                style={styles.input} 
                placeholder="metallica@example.com"
                onChangeText={email => setEmail(email)}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput secureTextEntry={true} 
                style={styles.input} 
                placeholder="password"
                onChangeText={password => setPassword(password)}
                />

            <Text style={styles.label}>Description</Text>
            <TextInput 
                style={styles.input} 
                placeholder="a small bio"
                onChangeText={description => setDescription(description)}
            />

            <Text style={styles.label}>Band Genre</Text>
            <Picker
                style={styles.input}
                selectedValue={genre}
                onValueChange={(value) =>
                    setGenre(value)
                }
            >
                {   //fill dropdown list according to number of instruments
                    genres.map((genre, index)=>
                    <Picker.Item key = {index} label={genre.genre_name} value={genre._id} />
                )}   
            </Picker>

            <View style={styles.upload_container}>
                {picture? (<Image source={{uri: `data:image;base64,${picture}`}} style={styles.image}/>): null}
                <StyledButton 
                    title="Upload Band Picture" 
                    text_style={styles.upload_button_text} 
                    style={styles.upload_button}
                    onPress={handleUpload}
                />
            </View>
            
            <StyledButton 
                title="Sign Up" 
                onPress={()=>{
                    onSignUp();
                }}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 30,
    },
    label:{
        fontSize: 20,
        marginLeft: 10,
        color: colors.secondary,
    },
    input:{
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
    },
    upload_container:{
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-evenly'
    },
    image:{
        height: 60,
        width: 60,
        borderRadius: 50
    },
    upload_button:{
        width: 130
    },
    upload_button_text:{
        fontSize: 14,
        textAlign: 'center'
    }
})