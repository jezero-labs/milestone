import {View, Text, ImageSourcePropType, Image, StyleSheet} from 'react-native';
import React from 'react';

type LocationProps = {
  image: ImageSourcePropType;
  location: string;
};

const LocationCard = ({image, location}: LocationProps) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <Text style={styles.location}>{location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 76,
    borderRadius: 12,
  },
  location: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    position: 'absolute',
    top: 50,
    left: 10,
  },
  card: {
    marginHorizontal: 8,
    marginVertical: 14,
  },
});

export default LocationCard;
