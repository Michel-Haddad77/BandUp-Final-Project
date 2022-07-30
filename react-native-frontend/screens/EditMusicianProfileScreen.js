import { StyleSheet, ScrollView, Text } from 'react-native'
import { useState } from 'react';
import React from 'react'
import MyTextInput from '../components/MyTextInput';

export default function EditMusicianProfileScreen() {

  //states
  const [instrument, setInstrument] = useState("");
  const [description, setDescription] = useState("");
  const [instruments, setInstruments] = useState([]);
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [picture, setPicture] = useState("");
  const [ location, setLocation] = useState({});
  const [mobile, setMobile] = useState("")

  return (
    <ScrollView style={styles.container}>
      <MyTextInput label="FirstName"
          placeholder="Jon"
          onChangeText={name => setName(name)}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 20,
  },
})