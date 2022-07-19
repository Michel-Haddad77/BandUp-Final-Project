import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import NewBandCard from './NewUserCard';
import axios from 'axios';
import url from "../constants/url";
import colors from '../constants/colors';
import { useAuthUser } from '../context/user';

export default function NewUsersSection({navigation}){
    const [recentUsers,setRecentUsers] = useState([]);

    //get logged in user to check the user_type
    const {user} = useAuthUser();
    var url2 = '';

    //change api url according to user type
    if(user.user_type === 2){
        url2 = 'bands/recent';
    }else if (user.user_type === 1){
        url2 = 'musicians/recent'
    }

    //get the recently registered users
    useEffect(()=>{
        axios({
            method: 'get',
            url: url + url2,
        }).then(function (response) {
            setRecentUsers(response.data);
        }).catch(function (error){
            console.log(error);
        })
    },[user]); //added dependancy to rerender after user variable is fetched from storage

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{user.user_type=== 2? "New Bands" : "New Musicians"}</Text>
            {recentUsers.length? 
                <ScrollView horizontal={true} style={styles.bandContainer} >
                    {recentUsers.map((displayed_user,index)=>
                        <NewBandCard key={index} 
                            navigation = {navigation}
                            displayed_user={displayed_user} 
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
