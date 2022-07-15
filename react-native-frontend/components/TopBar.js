import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import colors from '../constants/colors';

export default function TopBar({navigation}){
    return (
        <View style={styles.container}>
            <TextInput style={styles.searchbar} placeholder='Search' />
            <TouchableOpacity onPress={()=>
                navigation.navigate('UserProfile')
            }>
                <Image style={styles.profile} source={require('../assets/profile2.png')}/>
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
        width: 300,
        padding: 5
    }
  });