import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import WelcomeComponent from '../components/WelcomeComponent';
import LinearGradient from 'react-native-linear-gradient';
import {wp} from '../utils/ScreenDimension';

const Profile = () => {
  return (
    <View>
      <WelcomeComponent
        name={'Kaushik KC'}
        image={require('../assets/images/ProfileImg.png')}
      />
      <LinearGradient
        colors={['#848484', '#FFFFFF']}
        start={{x: 1, y: 0.5}}
        end={{x: 0, y: 0.5}}
        style={styles.accountBalCardContainer}>
        <View style={styles.accInner}>
          <Text style={styles.accText}>Account Balance</Text>
          <Text style={styles.accAmount}>0 SOL</Text>
        </View>
        <Text style={styles.walletAddress} numberOfLines={1}>
          AmisgL1W5NjLMPkReYN3KqBwXzLEiZb7GZ5j84UMdoW
        </Text>
      </LinearGradient>
      <Text>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  accountBalCardContainer: {
    width: wp(100) - 32,
    height: 120,
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
  },
  accInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 15,
  },
  accText: {
    color: '#000',
    fontSize: 24,
    fontFamily: 'Quicksand-Bold',
  },
  accAmount: {
    color: '#fff',
    fontSize: 24,
  },
  walletAddress: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Quicksand-Regular',
  },
});

export default Profile;
