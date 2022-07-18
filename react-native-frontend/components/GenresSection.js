import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import GenreBox from './GenreBox';
import axios from 'axios';
import { useState,useEffect } from "react";
import url from '../constants/url';
import colors from '../constants/colors';

export default function GenresSection({navigation}){

    const [genres, setGenres] = useState([]);

    //get all genres
    useEffect(()=>{
        axios({
            method: 'get',
            url: url + 'bands/allgenres',
        }).then(function (response) {
            setGenres(response.data);
        }).catch(function (error){
            console.log(error);
            console.log(genres);
        })
    },[]);
    
    return (
        <>
            <Text style={styles.title}>Band Genres</Text>
            <View style= {styles.container}>
                {genres.length? 
                    genres.map((genre, index)=> 
                        <GenreBox  key = {index} 
                            name={genre.genre_name} 
                            picture={genre.picture}
                            genre_id = {genre._id} 
                            navigation={navigation} 
                        />
                    ) : <Text style={{fontSize: 20, margin: 20}}>No Genres Yet</Text>
                }  
                
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
        fontSize: 21,
        fontWeight: '500',
        color: colors.secondary,
    }
});