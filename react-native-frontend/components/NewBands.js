import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import BandCard from '../components/BandCard';
import axios from 'axios';

export default function Genres(){
    const [recentBands,setRecentBands] = useState([]);

    //get the recently registered bands
    useEffect(()=>{
        axios({
            method: 'get',
            url: 'http://192.168.1.75:8080/api/bands/recent',
        }).then(function (response) {
            setRecentBands(response.data);
        }).catch(function (error){
            console.log(error);
        })
    },[]);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>New Bands</Text>
            <ScrollView horizontal={true} style={styles.bandContainer} >
                {recentBands.map((band,index)=>
                    <BandCard key={index} 
                        name={band.name} 
                        picture = {band.picture} 
                        genre={band.genre}
                    />
                )}

            </ScrollView>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        fontSize: 25,
        fontWeight: '500'
    },
    bandContainer: {
        margin: 10,

      
    }
});
