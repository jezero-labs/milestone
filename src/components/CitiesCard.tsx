import {View, Text, ImageSourcePropType, Image, StyleSheet} from 'react-native';
import React from 'react';

type CitiesCardProps = {
  image: ImageSourcePropType;
  title: string;
  location: string;
  rating: string;
};

const CitiesCard = ({image, title, location, rating}: CitiesCardProps) => {
  return (
    <View>
      <Image source={image} />
      <View>
        <Text>{title}</Text>
        <View>
          <Image source={require('../assets/images/map.png')} />
          <Text>{location}</Text>
        </View>
        <View>
          <Image source={require('../assets/images/Star.png')} />
          <Text>{rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    
});

export default CitiesCard;
