import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {wp} from '../utils/ScreenDimension';

type CitiesCardProps = {
  image: ImageSourcePropType;
  title: string;
  location: string;
  rating: string;
  navigation: any;
};

const CitiesCard = ({
  image,
  title,
  location,
  rating,
  navigation,
}: CitiesCardProps) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Place')}
      style={styles.citiesContainer}>
      <Image source={image} />
      <View style={styles.citiesTextDiv}>
        <Text style={styles.citiesText}>{title}</Text>
        <View style={styles.citiesDiv}>
          <Image source={require('../assets/images/map.png')} />
          <Text>{location}</Text>
        </View>
        <View style={styles.citiesDiv}>
          <Image source={require('../assets/images/Star.png')} />
          <Text>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  citiesContainer: {
    flexDirection: 'row',
    height: 116,
    width: wp(100) - 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 8,
    marginBottom: 16,
    borderRadius: 14,
  },
  citiesTextDiv: {
    marginLeft: 12,
  },
  citiesText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#121212',
  },
  citiesDiv: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
});

export default CitiesCard;
