import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import colors from '../constants/colors';
import { useAuthUser } from '../context/user';

export default function TopBar({navigation}){
    //get user info from custom hook in the user context file
    const {user} = useAuthUser();

    return (
        <View style={styles.container}>
            <TextInput style={styles.searchbar} placeholder='Search' />
            <TouchableOpacity onPress={()=>
                navigation.navigate('UserProfile', {name: user?.name})
                
            }>
                <Image style={styles.profile} source={user?.picture? {uri: `data:image;base64,${user?.picture}`}: require('../assets/profile.png')}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      //flex: 0.2,
      height:50,
      flexDirection: 'row',
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 50,
   
    },
    searchbar:{
        backgroundColor: 'white',
        height: 30,
        width: 250,
        padding: 5,
        borderRadius: 8,
    }
  });