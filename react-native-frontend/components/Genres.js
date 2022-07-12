import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import GenreBox from './GenreBox';
import axios from 'axios';
import { useState,useEffect } from "react";

export default function Genres({navigation}){

    const [genres, setGenres] = useState([]);

    //get all genres
    useEffect(()=>{
        axios({
            method: 'get',
            url: 'http://192.168.1.75:8080/api/bands/allgenres',
        }).then(function (response) {
            setGenres(response.data);
        }).catch(function (error){
            console.log(error);
        })
    },[]);
    
    return (
        <>
            <Text style={styles.title}>Band Genres</Text>
            <View style= {styles.container}>
                {genres.map((genre, index)=> 
                    <GenreBox  key = {index} 
                        name={genre.genre_name} 
                        picture={genre.picture}
                        genre_id = {genre._id} 
                        navigation={navigation} 
                    />
                )}  
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    title: {
        fontSize: 25,
        fontWeight: '500'
    }
});