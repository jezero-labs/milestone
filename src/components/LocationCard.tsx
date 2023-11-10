import {View, Text, ImageSourcePropType, Image, StyleSheet} from 'react-native';
import React from 'react';

type LocationProps = {
    image: ImageSourcePropType,
    location: string,
};

const LocationCard = ({image,location}: ImageSourcePropType) => {
  return (
    <View>
      <Image style={styles.image} source={image} />
      <Text>{location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    image: {
        height: 80,
        width: 76,
    }
})

export default LocationCard;
