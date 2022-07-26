import { useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useAuthUser } from '../context/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BottomTab from './BottomTab';
import LoginStack from './LoginStack';

export default function NavigationSwitcher() {
    var {token, setToken} = useAuthUser();

    return (
        <NavigationContainer>
            {token? <BottomTab/> : <LoginStack/>}
        </NavigationContainer>
        
    )
}


