import {Text, ImageSourcePropType, Image, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

type MilestoneLocationProps = {
  image: ImageSourcePropType;
  title: string;
  price: string;
};

const MilestoneLocationCard = ({
  image,
  title,
  price,
}: MilestoneLocationProps) => {
  return (
    <TouchableOpacity>
      <Image style={styles.milestoneLocationImg} source={image} />
      <Text style={styles.milestoneLocationTitle}>{title}</Text>
      <Text style={styles.milestoneLocationPrice}>From {price} night</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  milestoneLocationImg: {
    borderRadius: 20,
  },
  milestoneLocationTitle: {
    position: 'absolute',
    bottom: 40,
    color: '#fff',
    left: 16,
    fontSize: 22,
    fontWeight: '700',
  },
  milestoneLocationPrice: {
    color: '#fff',
    bottom: 26,
    left: 16,
  },
});

export default MilestoneLocationCard;
