import { View, FlatList } from 'react-native'
import {useState, useEffect} from 'react'
import NotificationCard from '../components/NotificationCard'
import axios from 'axios'
import url from '../constants/url'
import { useAuthUser } from "../context/user";

export default function NotificationsScreen() {
    const [notifications, setNotifications] = useState([])

    //get user from context to send its id to API
    const {user} = useAuthUser();

    //get all the user's notifications
    useEffect(() => {
        axios({
            method: 'get',
            url: url + 'notifications/all',
            params:{
                id: user._id,
            }
        }).then(function (response) {
            console.log(response.data);
            setNotifications(response.data);
        }).catch(function (error){
            console.log(error);
        })
    
    }, [])
    
  return (
    <View>
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <NotificationCard
            title={item.title}
            message={item.message}
          />
        )}
      />
    </View>
  )
}