import {View, Text, ImageSourcePropType, Image, StyleSheet} from 'react-native';
import React from 'react';

type LocationCategoryProps = {
  image: ImageSourcePropType;
  title: string;
  location: string;
  ratting: string;
};

const LocationCategoryCard = ({
  image,
  title,
  location,
  ratting,
}: LocationCategoryProps) => {
  return (
    <View style={styles.locationCard}>
      <Image source={image} />
      <View style={styles.locationTitleContainer}>
        <Text style={styles.locationTitle}>{title}</Text>
        <View style={styles.locationRattingContainer}>
          <Image
            style={styles.rattingIcon}
            source={require('../assets/images/Star.png')}
          />
          <Text>{ratting}</Text>
        </View>
      </View>
      <View style={styles.locationMapContainer}>
        <Image
          style={styles.locationIcon}
          source={require('../assets/images/map.png')}
        />
        <Text>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationCard: {
    height: 195,
    width: 213,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 7,
    marginRight: 17,
  },
  locationTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  locationTitle: {
    color: '#121212',
    fontSize: 15,
    fontWeight: '700',
  },
  locationRattingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationMapContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  rattingIcon: {
    marginRight: 5,
  },
  locationIcon: {
    marginRight: 5,
  },
});

export default LocationCategoryCard;
