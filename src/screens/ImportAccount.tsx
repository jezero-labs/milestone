import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {importExistingAccount} from '@rly-network/mobile-sdk';
import {account} from '../state';
import {useRecoilState} from 'recoil';

const ImportAccount = () => {
  const [seedphase, setSeedPhase] = useState('');
  const [, setAccount] = useRecoilState(account);

  const importAccount = async () => {
    const walletAddress = await importExistingAccount(seedphase);
    console.log('Address', walletAddress);

    setAccount(walletAddress);

    //@ts-ignore
    navigation.navigate('Bottom');
  };
  return (
    <View style={styles.outerDiv}>
      <Text style={styles.heading}>Import Your Existing Account</Text>
      <View style={styles.innerDiv}>
        <TextInput
          placeholder="Enter you Seed Phase"
          style={styles.textInput}
          onChangeText={e => {
            setSeedPhase(e);
          }}
        />
        <TouchableOpacity
          onPress={() => importAccount()}
          style={styles.AccountBtn}>
          <Text style={styles.BtnText}>Import Account</Text>
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

export default ImportAccount;
