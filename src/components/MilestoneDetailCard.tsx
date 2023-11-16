import {View, Text, ImageSourcePropType, Image, StyleSheet} from 'react-native';
import React from 'react';
import {wp} from '../utils/ScreenDimension';

type MilestoneProps = {
  image: ImageSourcePropType;
  title: string;
  location: string;
  dishes: string;
  timing: string;
};

const MilestoneDetailCard = ({
  image,
  title,
  location,
  dishes,
  timing,
}: MilestoneProps) => {
  return (
    <View style={styles.outterDiv}>
      <Image style={styles.milestoneImg} source={image} />
      <View>
        <Text style={styles.milestoneText}>{title}</Text>
        <View style={styles.milestoneLocationDiv}>
          <Image
            style={styles.mapIcon}
            source={require('../assets/images/map.png')}
          />
          <Text style={styles.locationText}>{location}</Text>
        </View>
        <Text style={styles.dishesText}>{dishes}</Text>
        <View style={styles.milestoneLocationDiv}>
          <Text style={styles.timingText}>{timing}</Text>
          <Image source={require('../assets/images/milestonedetail.png')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outterDiv: {
    flexDirection: 'row',
    width: wp(100) - 40,
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 20,
  },
  milestoneText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#121212',
  },
  milestoneLocationDiv: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mapIcon: {
    marginRight: 4,
  },
  milestoneImg: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginRight: 10,
  },
  dishesText: {
    width: 150,
    marginTop: 5,
  },
  timingText: {
    color: '#121212',
  },
  locationText: {
    fontSize: 15,
  },
});

export default MilestoneDetailCard;
