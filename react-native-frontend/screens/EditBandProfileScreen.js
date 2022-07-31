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
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditBandProfileScreen({navigation}) {

  const {user, setUser} = useAuthUser();

  //Initiate the states with the band's info
  const [genre, setGenre] = useState(user.genre._id);
  const [description, setDescription] = useState(user.description);
  const [genres, setGenres] = useState([]);
  const [name, setName] = useState(user.name);
  const [picture, setPicture] = useState(user.picture);
  const [location, setLocation] = useState(user.location);
  const [mobile, setMobile] = useState(user?.mobile)

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
      description,
      picture,
      location,
      mobile,
      genre,
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

      <ProfileTextInput label="Band Name"
        value={name}
        onChangeText={name => setName(name)}
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

      <Text style={styles.label}>Genre</Text>
      <View style={styles.picker_container}>
        <Picker
            style={styles.input}
            selectedValue={genre}
            onValueChange={(value,index) =>
                setGenre(value)
            }
        >
            { //fill dropdown list according to number of genres
              genres.map((genre, index)=>
              <Picker.Item style={styles.picker} 
                  key = {index} 
                  label={genre.genre_name} 
                  value={genre._id} 
              />
            )}   
        </Picker>
      </View>

      <View style={styles.button_container}>
        {location?.name? (<Text>{location.name}</Text>):null}
        <StyledButton 
                title="Update Current Location" 
                text_style={styles.location_button_text} 
                style={styles.location_button}
                onPress={getLocation}
            />
      </View>

      <StyledButton 
        title="Save Changes"
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
  button_container:{
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center'
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
  location_button_text:{
    fontSize: 12
  }
})