import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import UserCard from './UserCard';
import axios from 'axios';
import url from "../constants/url";
import colors from '../constants/colors';
import { useAuthUser } from '../context/user';
import StyledButton from './StyledButton';

export default function NearbyUsersSection({navigation}) {
    const [nearby_users, setNearbyUsers] = useState([]);

    //get logged in user to check the user_type
    const {user} = useAuthUser();
    var url2 = '';

    //change api url according to user type
    if(user?.user_type === 2){
        url2 = 'bands/nearby';
    }else if (user?.user_type === 1){
        url2 = 'musicians/nearby'
    }

    //get the recently registered users
    useEffect(()=>{
        axios({
            method: 'get',
            url: url + url2,
            params: {
                lat: user?.location?.lat,
                long: user?.location?.long
            }
        }).then(function (response) {
            setNearbyUsers(response.data);
        }).catch(function (error){
            console.log(error);
        })
    },[user]);

    function showOnMap(){
        let lat = user.location.lat;
        let long = user.location.long;

        navigation.navigate('Map', {nearby_users, lat, long});
    }

  return (
    <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.title}>{user?.user_type=== 2? "Nearby Bands" : "Nearby Musicians"}</Text>
                <StyledButton 
                    title="Show on map"
                    style={styles.button}
                    text_style={styles.button_text}
                    onPress= {showOnMap}
                />
            </View>
            
            {nearby_users.length? 
                <ScrollView horizontal={true} style={styles.bandContainer} >
                    {nearby_users.map((displayed_user,index)=>
                        <UserCard key={index} 
                            navigation = {navigation}
                            displayed_user={displayed_user} 
                            is_nearby = {true}
                        />
                    )}
                </ScrollView> : <Text style={styles.placeholder}>No Users Yet</Text>
            }
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    container2:{
        flexDirection: "row",
        alignItems: 'baseline',
        justifyContent: 'space-between',
    },
    button:{
        padding: 5,
        marginRight: 20,
    },
    button_text:{
        fontSize: 14,
    },
    title: {
        fontSize: 21,
        fontWeight: '500',
        color: colors.secondary,
    },
    bandContainer: {
        margin: 10,  
    },
    placeholder:{
        fontSize: 20,
        alignSelf:'center', 
        margin:20
    }
});