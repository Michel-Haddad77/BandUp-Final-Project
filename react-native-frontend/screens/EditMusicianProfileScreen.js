import { ScrollView, Text } from 'react-native'
import React from 'react'

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