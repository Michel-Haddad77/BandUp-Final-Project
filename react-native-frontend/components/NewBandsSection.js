import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import NewBandCard from './NewBandCard';
import axios from 'axios';
import url from "../constants/url";

export default function NewBandsSection({navigation}){
    const [recentBands,setRecentBands] = useState([]);

    //get the recently registered bands
    useEffect(()=>{
        axios({
            method: 'get',
            url: url + 'bands/recent',
        }).then(function (response) {
            setRecentBands(response.data);
        }).catch(function (error){
            console.log(error);
        })
    },[]);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>New Bands</Text>
            {recentBands.length? 
                <ScrollView horizontal={true} style={styles.bandContainer} >
                    {recentBands.map((band,index)=>
                        <NewBandCard key={index} 
                            navigation = {navigation}
                            band_info={band} 
                        />
                    )}
                </ScrollView> : <Text style={styles.placeholder}>No Bands Yet</Text>
            }
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
    },
    placeholder:{
        fontSize: 20,
        alignSelf:'center', 
        margin:20
    }
});
