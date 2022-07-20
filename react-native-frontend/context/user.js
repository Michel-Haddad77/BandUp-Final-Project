import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';

//UserContext is exported to be used in child component
export const UserContext = createContext()

//UserProvider is exported to wrap the child components
const UserProvider = ({children}) => {
    const [user,setUser] = useState({});
    const [token, setToken] = useState("");
    const [is_logged_in, setIsLoggedIn] = useState(false)
    
    //get stored user and token in async storage
    async function getStoredUser(){
        try{
            //the whole user object is stored with key 'user_info'
            let stored_user = await AsyncStorage.getItem("user_info"); 
            let stored_token = await AsyncStorage.getItem("token");

            setToken(stored_token);
            //Parse the stringified object from storage
            setUser(JSON.parse(stored_user));
        }catch(error){
            console.log(error);
        }
    }

    //run the above function once
    useEffect(()=>{
        getStoredUser();
    },[])
    
    return (
        <UserContext.Provider
            value={{
                user,token, setUser, setToken
            }}
        >
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;

//Instead of calling useContext(UserContext)
//call useAuthUser to get the stored values
export const useAuthUser = () => {
    const {user, token, setUser, setToken, is_logged_in, setIsLoggedIn} = useContext(UserContext);

    return {
        user, token, setUser, setToken, is_logged_in, setIsLoggedIn
    }
}