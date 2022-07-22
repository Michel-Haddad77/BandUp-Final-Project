import { useEffect, useState } from 'react';
import { View, Text,StyleSheet, Dimensions } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import StyledButton from './StyledButton';

export default function Map() {
    const [pin,setPin] = useState({
        latitude: 37.78825,
        longitude: 30.4324
    });
    
  return (
    <View>
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 37.78825,
                longitude: 30.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <Marker 
                coordinate={pin}
                draggable={true}
                onDragEnd={(e)=>{
                    console.log("loc=>", e.nativeEvent.coordinate);
                    setPin({
                        latitude: e.nativeEvent.coordinate.latitude,
                        longitude: e.nativeEvent.coordinate.longitude
                    })
                }}   
            >
                <Callout>
                    <Text>Long Press to drag</Text>
                </Callout>
            </Marker>
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