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
      flex: 1,
      height:50,
      flexDirection: 'row',
      backgroundColor: 'blue',
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginTop: 10,
    },
    searchbar:{
        backgroundColor: 'white',
        height: 40,
        width: 300,
        margin: 10,
        padding: 5
    }
  });