import {Text, ImageSourcePropType, Image, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface LocationProps {
  image: ImageSourcePropType;
  location: string;
  setChoosedLocation: React.Dispatch<React.SetStateAction<boolean>>;
}

const LocationCard: React.FC<LocationProps> = ({
  image,
  location,
  setChoosedLocation,
}) => {
  const setLocation = () => {
    setChoosedLocation(true);
  };
  return (
    <TouchableOpacity onPress={setLocation} style={styles.card}>
      <Image style={styles.image} source={image} />
      <Text style={styles.location}>{location}</Text>
    </TouchableOpacity>
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
