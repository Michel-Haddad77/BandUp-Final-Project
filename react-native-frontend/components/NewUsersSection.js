import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import UserCard from './UserCard';
import StyledButton from './StyledButton';
import axios from 'axios';
import url from "../constants/url";
import colors from '../constants/colors';
import { useAuthUser } from '../context/user';

export default function NewUsersSection({navigation}){
    const [recentUsers,setRecentUsers] = useState([]);

    //get logged in user to check the user_type
    const {user} = useAuthUser();
    var url2 = '';

    //get the recently registered users
    useEffect(()=>{
        //according to user type
        if(user?.user_type === 2){
            //change api url 
            url2 = 'bands/recent';
        }else if (user?.user_type === 1){
            url2 = 'musicians/recent';
        }

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
            <View style={styles.container2}>
                <Text style={styles.title}>{user?.user_type=== 2? "New Bands" : "New Musicians"}</Text>
                <StyledButton 
                    title={"Show All"} 
                    style={styles.button}
                    text_style={styles.button_text}
                    onPress={() => navigation.navigate('Users', { 
                        name: (user?.user_type=== 2? "All Bands": "All Musicians")
                    })}
                />  
            </View>
            {recentUsers.length? 
                <ScrollView horizontal={true} style={styles.bandContainer} >
                    {recentUsers.map((displayed_user,index)=>
                        <UserCard key={index} 
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
    container2:{
        flexDirection: "row",
        alignItems: 'baseline',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 21,
        fontWeight: '500',
        color: colors.secondary,
        marginLeft: 20,
    },
    button:{
        padding: 5,
        marginRight: 25,
        backgroundColor: 'rgba(0,0,0,0)', //make background color transparent by setting last value (opacity) to 0
        elevation: 0
    },
    button_text:{
        fontSize: 15,
        color: colors.primary,
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
