import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import WelcomeComponent from '../components/WelcomeComponent';
import {wp} from '../utils/ScreenDimension';

const Marketplace = () => {
  return (
    <View>
      <WelcomeComponent
        name={'Kaushik KC'}
        image={require('../assets/images/ProfileImg.png')}
      />
      <View style={styles.marketplaceDiv}>
        <Text style={styles.marketplaceText}>Marketplace</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marketplaceText: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#121212',
    fontSize: 18,
  },
  marketplaceDiv: {
    flexDirection: 'column',
    width: wp(100),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp(100) - 240,
    marginVertical: 260,
  },
});

export default Marketplace;
