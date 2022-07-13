import { ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import BandCardHorizontal from '../components/BandCardHorizontal';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function BandsScreen({route}) {
    const [bands, setBands] = useState([]);

    console.log("Route params: " , route.params.id);

    //get all genres
    useEffect(()=>{
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
    },[]);

    return (
        <ScrollView>
            {bands.map((band, index)=> 
                <BandCardHorizontal  key = {index} 
                    name={band.name} 
                    picture={band.picture}
                />
            )}

            
        </ScrollView>
    )
}

