import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {account, seedPhase, userDetails} from '../state';
import {useRecoilState} from 'recoil';
import {
  createAccount as createRlyAccount,
  getAccount,
  getAccountPhrase,
} from '@rly-network/mobile-sdk';

const CreateAccount = () => {
  const navigation = useNavigation();
  const [, setUserDetails] = useRecoilState(userDetails);
  const [, setAccount] = useRecoilState(account);
  const [, setSeedPhase] = useRecoilState(seedPhase);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const createAccount = async () => {
    setUserDetails({name: name, email: email});

    await createRlyAccount();
    const rlyAct = await getAccount();
    console.log('Address', rlyAct);
    const tmpSeed = await getAccountPhrase();
    setAccount(rlyAct);
    if (tmpSeed != null && tmpSeed !== undefined) {
      setSeedPhase(tmpSeed);
    }

    //@ts-ignore
    navigation.navigate('claimingScreen');
  };
  return (
    <View style={styles.outerDiv}>
      <Text style={styles.heading}>Create Your Account</Text>
      <View style={styles.innerDiv}>
        <TextInput
          placeholder="Name"
          style={styles.textInput}
          onChangeText={e => {
            setName(e);
          }}
        />
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          onChangeText={e => {
            setEmail(e);
          }}
        />
        <TouchableOpacity
          onPress={() => createAccount()}
          style={styles.AccountBtn}>
          <Text style={styles.BtnText}>Create Account</Text>
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

export default CreateAccount;
