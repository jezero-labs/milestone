import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import WelcomeComponent from '../components/WelcomeComponent';
import LinearGradient from 'react-native-linear-gradient';
import {wp} from '../utils/ScreenDimension';
import {
  balance as balanceState,
  account,
  userDetails as userDetailsAtom,
} from '../state';
import {useRecoilState, useRecoilValue} from 'recoil';
import {getAccountPhrase} from '@rly-network/mobile-sdk';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RewardEarnedCard from '../components/RewardsEarned';
import HistoryCard from '../components/HistoryCard';

const Wallet = () => {
  const userDetails = useRecoilValue(userDetailsAtom);
  const [balance, setBalance] = useRecoilState(balanceState);
  const [rlyAccount, setRlyAccount] = useRecoilState(account);
  const acountHumanReadable = () => {
    if (!rlyAccount) {
      return '';
    }

    const firstChars = rlyAccount.slice(0, 5);
    const lastChars = rlyAccount.slice(
      rlyAccount.length - 3,
      rlyAccount.length,
    );
    return `${rlyAccount}`;

    // return `${firstChars}...${lastChars}`;
  };
  const doAsyncWork = async () => {
    // if (!didConfirm) {
    //   return;
    // }

    const tmpSeed = await getAccountPhrase();
    console.log(tmpSeed);
  };
  return (
    <ScrollView>
      <WelcomeComponent
        name={userDetails?.name}
        image={require('../assets/images/ProfileImg.png')}
      />
      <View style={styles.WalletDiv}>
        <LinearGradient
          colors={['#848484', '#FFFFFF']}
          start={{x: 1, y: 0.5}}
          end={{x: 0, y: 0.5}}
          style={styles.accountBalCardContainer}>
          <View style={styles.accInner}>
            <Text style={styles.accText}>Account Balance</Text>
            <Text style={styles.accAmount}>{balance ? balance : '0'} ETH</Text>
          </View>
          <Text style={styles.walletAddress} numberOfLines={1}>
            {acountHumanReadable()}
          </Text>
          <TouchableOpacity>
            <Text>
              Show seed Phase
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <RewardEarnedCard amount={'8.41'} Inramount={'183.42'} />
        <ScrollView>
          <HistoryCard
            key={1}
            brand={'Milestone'}
            amount={'0.41'}
            percentage={'3'}
            InrAmount={'300'}
          />
          <HistoryCard
            key={2}
            brand={'Milestone'}
            amount={'0.41'}
            percentage={'3'}
            InrAmount={'300'}
          />
          <HistoryCard
            key={3}
            brand={'Milestone'}
            amount={'0.41'}
            percentage={'3'}
            InrAmount={'300'}
          />
          <HistoryCard
            key={4}
            brand={'Milestone'}
            amount={'0.41'}
            percentage={'3'}
            InrAmount={'300'}
          />
          <HistoryCard
            key={5}
            brand={'Milestone'}
            amount={'0.41'}
            percentage={'3'}
            InrAmount={'300'}
          />
          <HistoryCard
            key={6}
            brand={'Milestone'}
            amount={'0.41'}
            percentage={'3'}
            InrAmount={'300'}
          />
        </ScrollView>
      </View>
    </ScrollView>
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
    color: '#121212',
    fontSize: 14,
    fontFamily: 'Quicksand-Regular',
  },
  WalletDiv: {
    paddingHorizontal: 20,
  },
});

export default Wallet;
