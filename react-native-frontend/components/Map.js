import { useEffect, useState } from 'react';
import { View, Text,StyleSheet, Dimensions } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import colors from '../constants/colors';
import StyledButton from './StyledButton';

export default function Map({route}) {
    const [center,setCenter] = useState({
        latitude: 33.894757,
        longitude: 35.482828
    });
    const [nearby_users, setNearbyUsers] = useState([])


    useEffect(() => {
        //set the user's location as center
        setCenter({
            latitude: route.params.lat,
            longitude: route.params.long
        });

        //get all the nearby users from route params
        let users = route.params.nearby_users;
        setNearbyUsers(users);
        console.log(nearby_users);
    }, [])
    

  return (
    <View>
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: center.latitude,
                longitude: center.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            {/* User's marker */}
            <Marker coordinate={center}>
                <Callout>
                    <Text>You</Text>
                </Callout>
            </Marker>

                {/* Nearby users markers */}
                {nearby_users.map((user,index)=>
                    <Marker 
                        key={index}
                        coordinate={{
                            latitude: user.location.lat,
                            longitude: user.location.long
                        }}
                        pinColor= {colors.primary}
                    >
                        <Callout >
                            <Text>{user.name}</Text>
                        </Callout>
                    </Marker>
                )}
        </MapView>
    </View>
        
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });