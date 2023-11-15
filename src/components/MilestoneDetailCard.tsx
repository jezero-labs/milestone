import {View, Text, ImageSourcePropType, Image, StyleSheet} from 'react-native';
import React from 'react';

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
      <Image source={image} />
      <View>
        <Text style={styles.milestoneText}>{title}</Text>
        <View style={styles.milestoneLocationDiv}>
          <Image
            style={styles.mapIcon}
            source={require('../assets/images/map.png')}
          />
          <Text>{location}</Text>
        </View>
        <Text>{dishes}</Text>
        <View>
          <Text>{timing}</Text>
          <Image source={require('../assets/images/milestonedetail.png')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outterDiv: {
    flexDirection: 'row',
  },
  milestoneText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#121212',
    marginTop: 16,
  },
  milestoneLocationDiv: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mapIcon: {
    marginRight: 4,
  },
});

export default MilestoneDetailCard;
