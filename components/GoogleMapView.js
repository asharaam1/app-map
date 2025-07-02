import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
// import { collection, doc, getDoc, onSnapshot, query, where } from 'firebase/firestore';
// import { db } from '../Firbase/config';


const GoogleMapView = () => {
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState(null);

  //! (()=>{})()       // This is a self-invoking function to avoid linting errors
  //! function () {} // This is a regular function declaration
  //! async function () {} // This is an async function declaration

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        // alert('Permission to access location was denied');
        setErrorMsg('Permission to access location was denied');
        return;
      }
    })();
    (async () => {
      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={{ marginTop: 20 }}>
      <MapView
        style={{
          width: Dimensions.get('screen').width * 0.99,
          height: Dimensions.get('screen').height * 0.23,
          borderRadius: 20
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: 24.8696559,
          longitude: 67.1785103,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: 24.8696559,
            longitude: 67.1785103,
          }}
          title="User Location"
          description="This user is here"
        />
      </MapView>
      <View >
        <Text style={{ textAlign: 'center', marginTop: 10 }}>{text}</Text>
      </View>
    </View>
  )
}

export default GoogleMapView

const styles = StyleSheet.create({})