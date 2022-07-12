import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

export default function TopBar(){
    return (
        <View style={styles.container}>
            <TextInput style={styles.searchbar} placeholder='Search' />
            <Image style={styles.profile} source={require('../assets/profile2.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      //flex: 0.2,
      height:50,
      flexDirection: 'row',
      backgroundColor: '#5271FF',
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