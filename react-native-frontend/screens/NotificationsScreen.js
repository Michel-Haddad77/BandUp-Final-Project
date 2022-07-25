import { View, Text } from 'react-native'
import {useState, useEffect} from 'react'
import NotificationCard from '../components/NotificationCard'
import axios from 'axios'
import url from '../constants/url'

export default function NotificationsScreen() {
    
    
  return (
    <View>
      <NotificationCard/>
      <NotificationCard/>
    </View>
  )
}