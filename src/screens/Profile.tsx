import {View, Text} from 'react-native';
import React from 'react';
import WelcomeComponent from '../components/WelcomeComponent';

const Profile = () => {
  return (
    <View>
      <WelcomeComponent
        name={'Kaushik KC'}
        image={require('../assets/images/ProfileImg.png')}
      />
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
