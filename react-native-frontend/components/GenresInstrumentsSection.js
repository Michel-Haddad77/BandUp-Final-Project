import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import GenreInstrumentBox from './GenreInstrumentBox';
import axios from 'axios';
import { useState,useEffect } from "react";
import url from '../constants/url';
import colors from '../constants/colors';
import { useAuthUser } from '../context/user';

export default function GenresInstrumentsSection({navigation}){

    const [genres, setGenres] = useState([]);
    const [instruments, setInstruments] = useState([]);
    const[user_type, setUserType] = useState(0);

    //get logged in user to check the user_type
    const {user} = useAuthUser();
    
    
    useEffect(()=>{
        //if the user is a musician, display all genres
        if (user.user_type === 2){
            axios({
                method: 'get',
                url: url + 'bands/allgenres',
            }).then(function (response) {
                setGenres(response.data);
            }).catch(function (error){
                console.log(error);
            })
        }else if(user.user_type === 1){ //user is a band
            axios({
                method: 'get',
                url: url + 'musicians/allinstruments',
            }).then(function (response) {
                setInstruments(response.data);
            }).catch(function (error){
                console.log(error);
            })
        }  
    },[user]); //added dependancy to rerender after user variable is fetched from storage
    
    return (
        <>
            <Text style={styles.title}>{user.user_type === 2? "Band Genres": "Instruments"}</Text>
            <View style= {styles.container}>
                {user.user_type === 2?
                    (genres.length? 
                        genres.map((genre, index)=> 
                            <GenreInstrumentBox  key = {index} 
                                name={genre.genre_name} 
                                picture={genre.picture}
                                id = {genre._id} 
                                navigation={navigation} 
                            />
                        ) : <Text style={{fontSize: 20, margin: 20}}>No Genres Yet</Text>)
                    : (instruments.length? 
                        instruments.map((instrument, index)=> 
                            <GenreInstrumentBox  key = {index} 
                                name={instrument.instrument_name} 
                                picture={instrument.picture}
                                id = {instrument._id} 
                                navigation={navigation} 
                            />
                        ) : <Text style={{fontSize: 20, margin: 20}}>No Instruments Yet</Text>)
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