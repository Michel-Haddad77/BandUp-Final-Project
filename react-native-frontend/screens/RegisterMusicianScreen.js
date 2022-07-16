import { StyleSheet, Text, View , TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import StyledButton from '../components/StyledButton';
import { useState,useEffect } from 'react';
import axios from 'axios';

import url from '../constants/url';

export default function RegisterMusicianScreen() {
    //states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [instrument, setInstrument] = useState("");
    const [description, setDescription] = useState("");
    const [instruments, setInstruments] = useState([]);

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
    
    return (
        <View style={styles.container}>
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
                {//fill dropdown list according to number of instruments
                    instruments.map((inst)=>
                    <Picker.Item label={inst.instrument_name} value={inst._id} />
                )}   
            </Picker>

            <StyledButton 
                title="Sign Up" 
                text_style={styles.button_text} 
                style={styles.button}
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
})