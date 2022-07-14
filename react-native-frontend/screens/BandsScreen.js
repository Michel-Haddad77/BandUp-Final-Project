import { ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import BandCardHorizontal from '../components/BandCardHorizontal';
import axios from 'axios';
import { useState, useEffect } from 'react';

//route contains the genre id
export default function BandsScreen({navigation, route}) {
    const [bands, setBands] = useState([]);

    console.log("Route params: " , route.params.id);

    //get all genres
    useEffect(()=>{

        //if Bands page was called by pressing on a genre
        if(route.params.id){
            axios({
                method: 'get',
                url: 'http://192.168.1.75:8080/api/bands/bygenre',
                params: { genre_id: route.params.id},
            }).then(function (response) {
                setBands(response.data);
                console.log(bands);
            }).catch(function (error){
                console.log(error);
            })
        }else{ //if band page was called by pressing on all bands button
            axios({
                method: 'get',
                url: 'http://192.168.1.75:8080/api/bands/all',
            }).then(function (response) {
                setBands(response.data);
                console.log(bands);
            }).catch(function (error){
                console.log(error);
            })
        }
        
    },[]);

    return (
        <ScrollView>
            {bands.map((band, index)=> 
                <BandCardHorizontal  key = {index} 
                    navigation = {navigation}
                    band_info = {band}
                />
            )}  
        </ScrollView>
    )
}

