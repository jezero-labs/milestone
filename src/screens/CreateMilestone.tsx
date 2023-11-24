import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {ethers} from 'ethers';
import {useRecoilState} from 'recoil';
// import {seedPhase} from '../state';
import {getAccountPhrase} from '@rly-network/mobile-sdk';
import {CONTACT_ABI, CONTACT_ADDRESS} from '../context/config';

const CreateMilestone = () => {
  const [didConfirm, setDidConfirm] = useState(false);
  const navigation = useNavigation();
  const [geography, setGeography] = useState('');
  const [location, setLocation] = useState('');
  const [geoTag, setGeoTag] = useState('');
  const [user, setUser] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cover, setCover] = useState('');
  const [seed, setSeed] = useState<undefined | null | string>();

  useEffect(() => {
    const doAsyncWork = async () => {
      if (!didConfirm) {
        return;
      }

      const tmpSeed = await getAccountPhrase();
      setSeed(tmpSeed);
    };
    doAsyncWork();
  }, [didConfirm]);

  const randomNumber = 684;
  const nftData = {
    geography,
    location,
    geoTag,
    user,
    title,
    description,
    cover,
    randomNumber,
  };
  // const [seedphase, setSeedPhase] = useRecoilState(seedPhase);
  // console.log(seedPhase,"seed")
  const TempSeed = seed;

  // console.log(TempSeed,"seedTemp")
  const provider = new ethers.JsonRpcProvider(
    'https://rpc-mumbai.maticvigil.com/',
  );

  const wallet = ethers.Wallet.fromPhrase(TempSeed, provider);

  // Instantiate the smart contract
  const MilestoneContract = new ethers.Contract(
    CONTACT_ADDRESS,
    CONTACT_ABI,
    wallet,
  );

  const gasPrice = ethers.parseUnits('30', 'gwei'); // Replace with your desired gas price
  const gasLimit = 300000; // Replace with your desired gas limit

  const uri = 'http://ipfs.com/kaushik1734';

  const createMilestone = async () => {
    const transactionObject: ethers.TransactionRequest =
      await MilestoneContract.safeMint(uri, nftData, {
        value: ethers.parseEther('0.01'),
        gasPrice: gasPrice,
        gasLimit: gasLimit, // Adjust the value based on your _basePrice
      });
    // Sign the transaction
    // const signedTransaction = await wallet.signTransaction(transactionObject);
    try {
      const transactionReceipt = await wallet.sendTransaction(
        transactionObject,
      );
      console.log('Transaction Receipt:', transactionReceipt);
    } catch (error: any) {
      console.error('Transaction failed:', error.message);
      // If available, log the revert reason
      if (error.data) {
        console.error('Revert Reason:', ethers.toUtf8String(error.data));
      }
    }

    // Handle the transaction receipt or errors
    navigation.navigate('Place');
  };
  return (
    <View style={styles.outerDiv}>
      <Text style={styles.heading}>Create Milestone</Text>
      <View style={styles.innerDiv}>
        <TextInput
          placeholder="Geography"
          style={styles.textInput}
          onChangeText={e => {
            setGeography(e);
          }}
        />
        <TextInput
          placeholder="Location"
          style={styles.textInput}
          onChangeText={e => {
            setLocation(e);
          }}
        />
        <TextInput
          placeholder="GeoTag"
          style={styles.textInput}
          onChangeText={e => {
            setGeoTag(e);
          }}
        />
        <TextInput
          placeholder="User"
          style={styles.textInput}
          onChangeText={e => {
            setUser(e);
          }}
        />
        <TextInput
          placeholder="Title"
          style={styles.textInput}
          onChangeText={e => {
            setTitle(e);
          }}
        />
        <TextInput
          multiline
          numberOfLines={4}
          placeholder="Description"
          style={styles.textInput}
          onChangeText={e => {
            setDescription(e);
          }}
        />
        <TextInput
          placeholder="Cover"
          style={styles.textInput}
          onChangeText={e => {
            setCover(e);
          }}
        />
        <TouchableOpacity
          onPress={() => createMilestone()}
          style={styles.AccountBtn}>
          <Text style={styles.BtnText}>Create Milestone</Text>
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

export default CreateMilestone;
