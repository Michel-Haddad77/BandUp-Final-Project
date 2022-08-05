import { StyleSheet, Text, View , TextInput, Image, ToastAndroid, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../components/StyledButton';
import { useState,useEffect } from 'react';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';

import url from '../constants/url';
import colors from '../constants/colors';
import MyTextInput from '../components/MyTextInput';

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
    const [ location, setLocation] = useState({});
    const [mobile, setMobile] = useState("")

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
            location,
            mobile,
            genre_id: genre,
        };

        //linking with register api
        axios({
            method: 'post',
            url: url + 'user/register',
            data: data,
        })
        .then(function (response) {
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

        //console.log(result);

        if (!result.cancelled) {
            setPicture(result.base64);
        }
    }

    //when user wants to add location
    async function getLocation(){
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
        }

        //get location lat and long
        let loc = await Location.getCurrentPositionAsync({});
        
        //get location name {country, city, street, region...}
        let loc_name = await Location.reverseGeocodeAsync({
            latitude:loc.coords.latitude, 
            longitude: loc.coords.longitude
        });

        //set location object of the new user
        setLocation({
            lat:loc.coords.latitude, 
            long: loc.coords.longitude,
            name: `${loc_name[0].city}, ${loc_name[0].country}`,
        });
    }
    
    return (
        <ScrollView style={styles.container}>
            <MyTextInput label="Band Name"  
                placeholder="Metallica"
                onChangeText={name => setName(name)}
            />

            <MyTextInput label="Mobile"
                keyboardType="phone-pad"
                placeholder="70123456"
                onChangeText={mobile => setMobile(mobile)}
            />

            <MyTextInput label="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="metallica@example.com"
                onChangeText={email => setEmail(email)}
            />

            <MyTextInput label="Password"
                secureTextEntry={true} 
                placeholder="Password"
                onChangeText={password => setPassword(password)}
                />

            <MyTextInput label="Description"
                placeholder="A small bio"
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
                    <Picker.Item style={styles.picker}
                        key = {index} 
                        label={genre?.genre_name} 
                        value={genre._id} 
                    />
                )}   
            </Picker>

            <View style={styles.button_container}>
                {picture? (<Image source={{uri: `data:image;base64,${picture}`}} style={styles.image}/>): null}
                <StyledButton 
                    title="Upload Band Picture" 
                    text_style={styles.upload_button_text} 
                    style={styles.upload_button}
                    onPress={handleUpload}
                />
            </View>
            
            <View style={styles.button_container}>
                {location?.name? (<Text>{location.name}</Text>):null}
                <StyledButton 
                        title="Add Location" 
                        text_style={styles.upload_button_text} 
                        style={styles.upload_button}
                        onPress={getLocation}
                    />
            </View>

            <StyledButton 
                title="Sign Up" 
                onPress={()=>{
                    onSignUp();
                }}
            /> 
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 30,
    },
    label:{
        color: colors.secondary,
        marginBottom: 5
    },
    input:{
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
    },
    picker:{
        fontSize:20, 
        color:'grey',
    },
    button_container:{
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
        fontSize: 12,
        textAlign: 'center'
    }
})