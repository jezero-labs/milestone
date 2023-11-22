import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {wp} from '../utils/ScreenDimension';
import MilestonesCard from '../components/MilestonesCard';

const PlaceDetails = ({navigation}: any) => {
  return (
    <ScrollView style={styles.outterContainer}>
      <View style={styles.topNav}>
        <TouchableOpacity style={styles.navMenu}>
          <Image source={require('../assets/images/arrow.png')} />
        </TouchableOpacity>
        <Text style={styles.navName}>Pondy</Text>
        <TouchableOpacity style={styles.navMenu}>
          <Image source={require('../assets/images/dot.png')} />
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require('../assets/images/pondy.png')} />
        <View style={styles.placeTitleContainer}>
          <View>
            <Text style={styles.placeTitle}>Pondicherry</Text>
            <View style={styles.locationDiv}>
              <Image
                style={styles.exploreIcon}
                source={require('../assets/images/Explore.png')}
              />
              <Text style={styles.locationText}>Wayanad</Text>
            </View>
          </View>
          <View style={styles.locationDiv}>
            <Image source={require('../assets/images/share.png')} />
            <Image
              style={styles.shareIcon}
              source={require('../assets/images/heart.png')}
            />
          </View>
        </View>
      </View>
      <Text style={styles.storyText}>People Stories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image
          style={styles.storyImg}
          source={require('../assets/images/story.png')}
        />
        <Image
          style={styles.storyImg}
          source={require('../assets/images/story0.png')}
        />
        <Image
          style={styles.storyImg}
          source={require('../assets/images/story1.png')}
        />
        <Image
          style={styles.storyImg}
          source={require('../assets/images/story2.png')}
        />
        <Image
          style={styles.storyImg}
          source={require('../assets/images/story3.png')}
        />
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('createMilestone')} style={styles.milestoneDiv}>
      <Text style={styles.milestoneText}>Milestones</Text>
      <View style={styles.createMilestone}>
        <Text>+</Text>
      </View>
      </TouchableOpacity>
      <ScrollView>
        <MilestonesCard
          image={require('../assets/images/milestoneImg.png')}
          title="Night life in Pondy"
          location="Wayanad"
          navigation={navigation}
        />
        <MilestonesCard
          image={require('../assets/images/milestoneImg.png')}
          title="Night life in Pondy"
          location="Wayanad"
          navigation={navigation}
        />
      </ScrollView>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  outterContainer: {
    padding: 20,
  },
  navMenu: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#121212',
  },
  placeTitleContainer: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    top: 231,
    width: wp(100) - 80,
    marginHorizontal: 10,
  },
  placeTitle: {
    fontSize: 26,
    fontWeight: '500',
    color: '#fff',
  },
  locationDiv: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareIcon: {
    marginLeft: 10,
  },
  locationText: {
    color: '#fff',
    marginLeft: 5,
  },
  storyText: {
    color: '#121212',
    fontSize: 14,
    marginVertical: 16,
  },
  storyImg: {
    marginRight: 10,
  },
  milestoneText: {
    fontSize: 16,
    color: '#121212',
    marginVertical: 16,
    fontWeight: '600',
  },
  exploreIcon: {
    height: 14,
    width: 12,
  },
  milestoneDiv:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center'
  },
  createMilestone:{
    marginRight: 10,
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#121212',
    borderWidth: 2,
  }
});

export default PlaceDetails;
