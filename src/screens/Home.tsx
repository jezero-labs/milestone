import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import WelcomeComponent from '../components/WelcomeComponent';
import { ScrollView } from 'react-native-gesture-handler';
import LocationCard from '../components/LocationCard';

const Home = () => {
  return (
    <View>
      <WelcomeComponent
        name={'Kaushik KC'}
        image={require('../assets/images/ProfileImg.png')}
      />
      <View>
        <Text style={styles.subHeading}>Choose location</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <LocationCard image={require('../assets/images/india.png')} location={"India"} />
            <LocationCard image={require('../assets/images/turkey.png')} location={"Turkey"} />
            <LocationCard image={require('../assets/images/africa.png')} location={"Africa"} />
            <LocationCard image={require('../assets/images/italy.png')} location={"Italy"} />
            <LocationCard image={require('../assets/images/Cover.png')} location={"West"} />
            <LocationCard image={require('../assets/images/Shape.png')} location={"Germany"} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    color: 'black',
  },
  subHeading:{
    fontSize:15,
    fontWeight:'600',
    color: '#321F0E',
    marginLeft: 20
  }
});

export default Home;
