import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {balance, errorMessage} from '../state';
import {useNavigation} from '@react-navigation/native';
import {RlyNetwork} from '../../App';

const ClaimScreen = () => {
  const navigation = useNavigation();
  const [claiming, setClaiming] = useState(false);
  const [, setBalance] = useRecoilState(balance);
  const setErrorMessage = useSetRecoilState(errorMessage);

  const claimTokens = async () => {
    setClaiming(true);

    try {
      await RlyNetwork.claimRly();
    } catch (e: any) {
      setErrorMessage({
        title: 'Unable to perform claim',
        body: 'Errow was: ' + e.message,
      });
      setClaiming(false);
    }

    const newBalance = await RlyNetwork.getDisplayBalance();

    setBalance(newBalance);
    setClaiming(false);

    //@ts-ignore
    navigation.navigate('Bottom');
  };
  return (
    <View style={styles.outerDiv}>
      <Text style={styles.heading}>
        Congratulations You have created your account{' '}
      </Text>
      <Text style={styles.heading}>Claim free RLY token for free!!</Text>
      <View style={styles.innerDiv}>
        <TouchableOpacity onPress={claimTokens} style={styles.AccountBtn}>
          <Text style={styles.BtnText}>Claim Token</Text>
        </TouchableOpacity>
        {claiming && (
          <View style={{marginTop: 6}}>
            <ActivityIndicator />
          </View>
        )}
        <TouchableOpacity onPress={() => navigation.navigate('Bottom')}>
          <Text style={styles.BtnText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1.5,
    borderColor: '#000000',
    padding: 8,
    borderRadius: 8,
    width: 283,
    marginBottom: 15,
  },
  outerDiv: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  innerDiv: {
    alignItems: 'center',
  },
  AccountBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderColor: '#132D2F',
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  BtnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#121212',
  },
  heading: {
    fontWeight: '800',
    fontSize: 20,
    color: '#121212',
    marginBottom: 40,
  },
});

export default ClaimScreen;
