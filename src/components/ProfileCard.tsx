import React from 'react';
import {PropsWithChildren} from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import {wp} from '../utils/ScreenDimension';

type ProfileCardProps = PropsWithChildren<{
  logo: ImageSourcePropType;
  name: string;
}>;

const ProfileCard = ({logo, name}: ProfileCardProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: wp(100) - 40,
    backgroundColor: '#1D1D1D',
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 16,
  },
  logo: {
    marginLeft: 8,
  },
  name: {
    color: '#fff',
    fontFamily: 'Quicksand-Regular',
    fontSize: 18,
    marginLeft: 8,
  },
});

export default ProfileCard;
