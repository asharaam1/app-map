import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import GoogleMap from '@/components/GoogleMapView';

const index = () => {

  return (
    <View style={{ flex: 1, justifyContent: 'start', alignItems: 'center', marginTop: 50 }}>
      <Text style={styles.text}> Home </Text>
      <GoogleMap />

    </View>
  )
}

export default index

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
})