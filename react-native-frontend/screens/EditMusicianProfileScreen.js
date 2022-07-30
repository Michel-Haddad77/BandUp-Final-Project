import { StyleSheet, ScrollView, Text } from 'react-native'
import { useState, useEffect } from 'react';
import React from 'react'
import ProfileTextInput from '../components/ProfileTextInput';
import { useAuthUser } from "../context/user";
import colors from '../constants/colors';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import url from '../constants/url';

export default function EditMusicianProfileScreen() {

  const {user, setUser} = useAuthUser();

  //states
  const [instrument, setInstrument] = useState("");
  const [description, setDescription] = useState(user.description);
  const [instruments, setInstruments] = useState([]);
  const [name, setName] = useState(user.name);
  const [last_name, setLastName] = useState(user.last_name);
  const [picture, setPicture] = useState("");
  const [ location, setLocation] = useState({});
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

  return (
    <ScrollView style={styles.container}>
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
      <Picker
          style={styles.input}
          selectedValue={instrument}
          onValueChange={(value,index) =>
              setInstrument(value)
          }
      >
          {   //fill dropdown list according to number of instruments
              instruments.map((inst, index)=>
              <Picker.Item style={styles.picker} 
                  key = {index} 
                  label={inst.instrument_name} 
                  value={inst._id} 
              />
          )}   
      </Picker>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 20,
  },
  label:{
    color: colors.secondary,
    marginTop: 10,
  },
  picker:{
    fontSize:20,
  },
})