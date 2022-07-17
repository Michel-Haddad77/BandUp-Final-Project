import { StyleSheet, Text, View , TextInput, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import StyledButton from '../components/StyledButton';
import { useState,useEffect } from 'react';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';

import url from '../constants/url';

export default function RegisterMusicianScreen() {
    //states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [instrument, setInstrument] = useState("");
    const [description, setDescription] = useState("");
    const [instruments, setInstruments] = useState([]);
    const [name, setName] = useState("");
    const [last_name, setLastName] = useState("");
    const [picture, setPicture] = useState("");

    useEffect(() => {
        axios({
            method: 'get',
            url: url + 'musicians/allinstruments',
        }).then(function (response) {
            setInstruments(response.data);

            console.log(instruments);
        }).catch(function (error){
            console.log(error);
        })
    },[])

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
            <Text style={styles.label}>First Name</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Jon"
                onChangeText={name => setName(name)}
            />

            <Text style={styles.label}>Last Name</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Doe"
                onChangeText={last_name => setLastName(last_name)}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput 
                style={styles.input} 
                placeholder="jon@example.com"
                onChangeText={email => setEmail(email)}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput secureTextEntry={true} 
                style={styles.input} 
                placeholder="password"
                onChangeText={password => setPassword(password)}
                />

            <Text style={styles.label}>Description</Text>
            <TextInput secureTextEntry={true} 
                style={styles.input} 
                placeholder="a small bio"
                onChangeText={description => setDescription(description)}
            />

            <Text style={styles.label}>What do you play?</Text>
            <Picker
                style={styles.input}
                selectedValue={instrument}
                onValueChange={(value,index) =>
                    setInstrument(value)
                }
            >
                {   //fill dropdown list according to number of instruments
                    instruments.map((inst, index)=>
                    <Picker.Item key = {index} label={inst.instrument_name} value={inst._id} />
                )}   
            </Picker>

            <View style={styles.upload_container}>
                {picture? (<Image source={{uri: `data:image;base64,${picture}`}} style={styles.image}/>): null}
                <StyledButton 
                    title="Upload Profile Picture" 
                    text_style={styles.upload_button_text} 
                    style={styles.upload_button}
                    onPress={handleUpload}
                />
            </View>
            
            <StyledButton 
                title="Sign Up" 
                onPress={()=>{navigation.navigate('Register')}}
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
        marginLeft: 10
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