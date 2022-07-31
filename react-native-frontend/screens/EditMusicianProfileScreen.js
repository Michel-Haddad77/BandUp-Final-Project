import { StyleSheet, ScrollView, Text, View, Image } from 'react-native'
import { useState, useEffect } from 'react';
import React from 'react'
import ProfileTextInput from '../components/ProfileTextInput';
import { useAuthUser } from "../context/user";
import colors from '../constants/colors';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import url from '../constants/url';
import StyledButton from '../components/StyledButton';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditMusicianProfileScreen({navigation}) {

  const {user, setUser} = useAuthUser();

  //Initiate the states with the user's info
  const [instrument, setInstrument] = useState(user.instrument._id);
  const [description, setDescription] = useState(user.description);
  const [instruments, setInstruments] = useState([]);
  const [name, setName] = useState(user.name);
  const [last_name, setLastName] = useState(user.last_name);
  const [picture, setPicture] = useState(user.picture);
  const [ location, setLocation] = useState(user.location);
  const [mobile, setMobile] = useState(user?.mobile)

  //fetch all instruments from server for the dropdown list
  useEffect(() => {
    axios({
        method: 'get',
        url: url + 'musicians/allinstruments',
    }).then(function (response) {
        setInstruments(response.data);
        //console.log(instruments);
    }).catch(function (error){
        console.log(error);
    })
  },[])

  //function called when the user wants to upload an image
  async function handleUpload(){
    //result= { cancelled: false, type: 'image', uri, width, height, base64 }
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 3],
        quality: 1,
        base64: true,
    });

    console.log(result);

    if (!result.cancelled) {
        setPicture(result.base64);
    }
  }

  function saveChanges(){
    let data = {
      name,
      last_name,
      description,
      picture,
      location,
      mobile,
      instrument,
    };

    axios({
      method: 'put',
      url: url + 'user/update',
      params: {
        id: user._id,
      },
      data: data,
    }).then(async function (response){
        //update user in context and storage
        setUser(response.data.user);
        await AsyncStorage.setItem('user_info', JSON.stringify(response.data.user));
        navigation.navigate('UserProfile', {name: name});
    }).catch(function (error){
        console.log(error);
    })
  }

  return (
    <ScrollView style={styles.container}>
      <Image style = {styles.image} 
        source={picture? {uri: `data:image;base64,${picture}`}: require('../assets/profile.png')}
      />

    <StyledButton 
      title="Change Profile Picture"
      style={styles.button}
      text_style={styles.button_text}
      onPress= {handleUpload}
    />

      <ProfileTextInput label="First Name"
        value={name}
        onChangeText={name => setName(name)}
      />

      <ProfileTextInput label="Last Name"
        value={last_name}
        onChangeText={last_name => setLastName(last_name)}
      />

      <ProfileTextInput label="Description"
        value={description}
        onChangeText={description => setDescription(description)}
      />

      <ProfileTextInput label="Mobile Number"
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={mobile => setMobile(mobile)}
      />

      <Text style={styles.label}>Instrument</Text>
      <View style={styles.picker_container}>
        <Picker
            style={styles.input}
            selectedValue={instrument}
            onValueChange={(value,index) =>
                setInstrument(value)
            }
        >
            { //fill dropdown list according to number of instruments
              instruments.map((inst, index)=>
              <Picker.Item style={styles.picker} 
                  key = {index} 
                  label={inst.instrument_name} 
                  value={inst._id} 
              />
            )}   
        </Picker>
      </View>

      <StyledButton 
        title="Save"
        onPress= {saveChanges}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 20,
    marginBottom: 10
  },
  label:{
    color: colors.secondary,
    marginTop: 10,
  },
  image: {
    height:120,
    width: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginTop: 15
  },
  button:{
    backgroundColor: 'rgba(0,0,0,0)',
    elevation: 0,
  },
  button_text:{
    fontSize: 15,
    color: colors.primary,
    fontWeight: 'normal',
  },
  picker_container:{
    borderBottomWidth:2,
    borderColor: colors.primary,
    marginBottom: 20
  },
  picker:{
    fontSize:20,
  },
})