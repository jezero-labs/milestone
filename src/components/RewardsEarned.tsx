import React, {PropsWithChildren} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {wp} from '../utils/ScreenDimension';

type rewardEarnedCardProps = PropsWithChildren<{
  amount: string;
  Inramount: string;
}>;

function RewardEarnedCard({amount, Inramount}: rewardEarnedCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.rewardBox}>
        <View>
          <Text style={styles.rewardTxt}>Total Rewards Earned</Text>
          <Text style={styles.rewardAmt}>{amount} ETH</Text>
        </View>
        <View>
          <Text style={styles.rewardInrTxt}>INR</Text>
          <Text style={styles.rewardAmt}>{Inramount}</Text>
        </View>
      </View>
      <View style={styles.trackerDiv}>
        <Image
          style={styles.trackerImg}
          source={require('../assets/images/tracker.png')}
        />
        <View style={styles.tracker}>
          <Text style={styles.trackerAmt}>{amount} ETH</Text>
          <Text style={styles.trackerAmt}>99.5 ETH</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(100) - 40,
    backgroundColor: '#000',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  rewardBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rewardTxt: {
    color: '#fff',
    fontFamily: 'Quicksand-Regular',
  },
  rewardAmt: {
    color: '#fff',
    fontFamily: 'Quicksand-Bold',
  },
  rewardInrTxt: {
    color: '#fff',
    textAlign: 'right',
    fontFamily: 'Quicksand-Regular',
  },
  trackerDiv: {
    flexDirection: 'column',
  },
  tracker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trackerImg: {
    width: wp(100) - 75,
    marginTop: 24,
    borderRadius: 8,
    height: 20,
    marginBottom: 5,
  },
  trackerAmt: {
    color: '#fff',
    opacity: 0.5,
    fontFamily: 'Quicksand-Regular',
  },
  redeemTxt: {
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'Quicksand-Regular',
  },
  reedemDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  levelbox: {
    width: wp(50) - 40,
    height: 40,
    borderColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    opacity: 0.5,
  },
  redeemBtTxt: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Quicksand-Light',
  },
});

export default RewardEarnedCard;
