import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useState } from 'react';

//UserProvider and UserContext are exporterd to be used in child components
export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user,setUser] = useState({});
    const [token, setToken] = useState("");
    
    //get stored user and token in async storage
    async function getStoredUser(){
        try{
            let stored_user = await AsyncStorage.getItem("user_info");
            let stored_token = await AsyncStorage.getItem("token");
            setUser(stored_user);
            setToken(stored_token);
        }catch(error){
            console.log(error);
        }
    }
    getStoredUser();
    return (
        <UserContext.Provider
            value={{
                user,token
            }}
        >
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;
