import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import url from '../constants/url';
import { useAuthUser } from '../context/user';
import SearchResult from '../components/SearchResult';

export default function SearchScreen({navigation}) {
    const [users, setUsers] = useState([]);
    const [filtered_users, setFilteredUsers] = useState([]);

    const {user} = useAuthUser();

    useEffect(() => {

        if (user?.user_type === 1){
            var url2 = 'musicians/all';
        }else if(user?.user_type === 2){
            var url2 = 'bands/all';
        }

        axios({
            method: 'get',
            url: url + url2,
        }).then(function (response) {
            setUsers(response.data);
        }).catch(function (error){
            console.log(error);
        })
    }, [])

    function filter(text){
        console.log(text);
        if (text){
            setFilteredUsers(users.filter((user)=>{
                return user.name.includes(text) || user?.last_name.includes(text)
            }));
            return
        }
        setFilteredUsers([])
        console.log(filtered_users.length)
    }
    
  return (
    <View>
        <TextInput 
            style={styles.searchbar} 
            autoFocus={true} 
            placeholder={"Search"}
            onChangeText={(text)=>{filter(text)}}
        />
        <ScrollView>
            {filtered_users && 
                filtered_users.map((user, index)=> (
                    <SearchResult  key = {index} 
                    navigation = {navigation}
                    displayed_user = {user}
                />
                ))}
        </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
    searchbar:{
        backgroundColor: 'white',
        height: 50,
        padding: 10,
        fontSize: 18
    }
})