import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import WelcomeComponent from '../components/WelcomeComponent';
import LinearGradient from 'react-native-linear-gradient';
import {wp} from '../utils/ScreenDimension';
import ProfileCard from '../components/ProfileCard';
import {account, userDetails as userDetailsAtom} from '../state';
import {useRecoilState, useRecoilValue} from 'recoil';
import {permanentlyDeleteAccount} from '@rly-network/mobile-sdk';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Profile = () => {
  const userDetails = useRecoilValue(userDetailsAtom);
  const [rlyAccount, setRlyAccount] = useRecoilState(account);
  const resetDemo = async () => {
    await permanentlyDeleteAccount();
    setRlyAccount(undefined);
  };
  return (
    <ScrollView>
      <WelcomeComponent
        name={userDetails?.name}
        image={require('../assets/images/ProfileImg.png')}
      />
      <View style={styles.profileDiv}>
        <LinearGradient
          colors={['#848484', '#FFFFFF']}
          start={{x: 1, y: 0.5}}
          end={{x: 0, y: 0.5}}
          style={styles.accountCon}>
          <View style={styles.accInner}>
            <View>
              <Text style={styles.accText}>{userDetails?.name}</Text>
              <Text style={styles.email}>{userDetails?.email}</Text>
              <Text>
                <Text style={styles.notVerify}>Not Verified</Text>
                <Text style={styles.verifyNow}>Verify Now </Text>
              </Text>
            </View>
          </View>
        </LinearGradient>
        <ScrollView>
          <ProfileCard
            logo={require('../assets/images/ProfileIcon.png')}
            name="Information"
          />
          <ProfileCard
            logo={require('../assets/images/ProfileIcon.png')}
            name="Refer & Earn"
          />
          <ProfileCard
            logo={require('../assets/images/ProfileIcon.png')}
            name="Support & Chat"
          />
          <ProfileCard
            logo={require('../assets/images/ProfileIcon.png')}
            name="Privacy Policy"
          />
          <ProfileCard
            logo={require('../assets/images/ProfileIcon.png')}
            name="Terms & Conditions"
          />
          <ProfileCard
            logo={require('../assets/images/ProfileIcon.png')}
            name="Logout"
          />
        </ScrollView>
      </View>
      <TouchableOpacity onPress={() => resetDemo()}>
        <Text>Delete the account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2D30',
    paddingHorizontal: 16,
  },
  header: {
    marginVertical: 24,
  },
  headerTitle: {
    fontSize: 22,
    color: '#fff',
    fontFamily: 'Quicksand-Bold',
  },
  accountCon: {
    height: 120,
    width: wp(100) - 40,
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
  email: {
    color: '#fff',
    marginBottom: 3,
    marginTop: 3,
  },
  notVerify: {
    color: '#D1411E',
  },
  verifyNow: {
    color: '#fff',
  },
  profileImg: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  version: {
    color: '#fff',
    opacity: 0.5,
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  profileDiv: {
    paddingHorizontal: 20,
  },
});

export default Profile;
