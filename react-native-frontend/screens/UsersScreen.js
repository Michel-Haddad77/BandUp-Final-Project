import { ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import UserCardHorizontal from '../components/UserCardHorizontal';
import axios from 'axios';
import { useState, useEffect } from 'react';
import url from '../constants/url';
import { useAuthUser } from '../context/user';

//route contains the genre id
export default function UsersScreen({navigation, route}) {
    const [displayed_users, setDisplayedUsers] = useState([]);

    console.log("Route params: " , route.params.id);

    //get logged in user to check the user_type
    const {user} = useAuthUser();

    useEffect(()=>{

        //if Users page was called by pressing on a genre/instrument
        if(route.params.id){
            if (user?.user_type === 2){
                axios({
                    method: 'get',
                    url: url + 'bands/bygenre',
                    params: { genre_id: route.params.id},
                }).then(function (response) {
                    setDisplayedUsers(response.data);
                    console.log(displayed_users);
                }).catch(function (error){
                    console.log(error);
                }) 
            }else if (user?.user_type === 1){
                axios({
                    method: 'get',
                    url: url + 'musicians/byinstrument',
                    params: { instrument_id: route.params.id},
                }).then(function (response) {
                    setDisplayedUsers(response.data);
                    console.log(displayed_users);
                }).catch(function (error){
                    console.log(error);
                }) 
            }
            
        }else{ //if users page was called by pressing on the show all button
            if (user?.user_type === 1){
                var url2 = 'musicians/all';
            }else if(user?.user_type === 2){
                var url2 = 'bands/all';
            }
            axios({
                method: 'get',
                url: url + url2,
            }).then(function (response) {
                setDisplayedUsers(response.data);
                console.log(displayed_users);
            }).catch(function (error){
                console.log(error);
            })
        }
        
    },[]);

    return (
        <ScrollView>
            {displayed_users.map((displayed, index)=> 
                <UserCardHorizontal  key = {index} 
                    navigation = {navigation}
                    displayed_user = {displayed}
                />
            )}  
        </ScrollView>
    )
}

