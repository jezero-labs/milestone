import {View, Text, Image} from 'react-native';
import React from 'react';

const PlaceDetails = () => {
  return (
    <View>
      <View>
        <Image source={require('../assets/images/arrow.png')} />
        <Text>Pondy</Text>
        <Image source={require('../assets/images/dot.png')} />
      </View>
      <Text>PlaceDetails</Text>
    </View>
  );
};

export default PlaceDetails;
