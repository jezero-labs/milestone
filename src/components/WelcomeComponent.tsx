import {View, Text, ImageSourcePropType, Image, StyleSheet} from 'react-native';
import React from 'react';

type WelcomeProps = {
  name: string;
  image: ImageSourcePropType;
};

const WelcomeComponent = ({name, image}: WelcomeProps) => {
  return (
    <View style={styles.WelcomeContainer}>
      <Image style={styles.profileImg} source={image} />
      <View>
        <Text style={styles.WelcomeTxt}>Welcome back</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImg: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  WelcomeContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 35,
    alignItems: 'center',
    marginBottom: 16,
  },
  WelcomeTxt: {
    fontSize: 14,
    fontWeight: '600',
    color: '#321F0E99',
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
    color: '#321F0E',
  },
});

export default WelcomeComponent;
