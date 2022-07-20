import { useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { useAuthUser } from '../context/user';
import BottomTab from './BottomTab';
import LoginStack from './LoginStack';

export default function NavigationSwitcher() {
    const {token, setToken} = useAuthUser();
    
    console.log('token=>' + token);
    return (
        token? <BottomTab/> : <LoginStack/>
    )
}