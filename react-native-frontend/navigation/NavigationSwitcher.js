import { NavigationContainer } from '@react-navigation/native';
import { useAuthUser } from '../context/user';

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


