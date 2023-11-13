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

type MilestoneProps = {
  image: ImageSourcePropType;
  title: string;
  location: string;
  navigation: any;
};

const MilestonesCard = ({
  image,
  title,
  location,
  navigation,
}: MilestoneProps) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Milestone')}
      style={styles.milsestoneCard}>
      <Image style={styles.milesrtoneImg} source={image} />
      <View style={styles.milestoneDiv}>
        <View>
          <Text style={styles.milestoneText}>{title}</Text>
          <View style={styles.milestoneLocationDiv}>
            <Image
              style={styles.mapIcon}
              source={require('../assets/images/map.png')}
            />
            <Text>{location}</Text>
          </View>
        </View>
        <Image source={require('../assets/images/milestonedetail.png')} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  milsestoneCard: {
    height: 214,
    width: wp(100) - 40,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 26,
    marginBottom: 20,
  },
  milesrtoneImg: {
    width: wp(100) - 72,
    borderRadius: 20,
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
  milestoneDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default MilestonesCard;
