import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { wp } from '../utils/ScreenDimension';


type historyCardProps = PropsWithChildren<{
  brand: string;
  amount: string;
  percentage: string;
  InrAmount: string;
}>;

function HistoryCard({brand, amount, percentage, InrAmount}: historyCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require('../assets/images/Solana.png')}
        />
        <View style={styles.rewardDiv}>
          <Text style={styles.brand}>{brand} Reward</Text>
          <Text style={styles.amount}>{amount} Sol</Text>
        </View>
      </View>
      <View>
        <Text style={styles.brandPercentage}>{percentage}</Text>
        <Text style={styles.amount}>{InrAmount} INR</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(100) - 40,
    height: 80,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
  brand: {
    color: '#121212',
    fontFamily: 'Quicksand-Regular',
    fontSize: 16,
  },
  amount: {
    color: '#121212',
    fontFamily: 'Quicksand-Bold',
  },
  brandPercentage: {
    color: '#121212',
    fontFamily: 'Quicksand-Regular',
    textAlign: 'right',
  },
  rewardDiv: {
    marginLeft: 8,
  },
});

export default HistoryCard;
