import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {wp} from '../utils/ScreenDimension';
import {ScrollView} from 'react-native-gesture-handler';
import MilestoneLocationCard from '../components/MilestoneLocationCard';

const Milestone = () => {
  const [milestonCatory, setMilestoneCatory] = useState('All');

  return (
    <View style={styles.outerContainer}>
      <Image
        style={styles.backgroundImg}
        source={require('../assets/images/Italy.png')}
      />
      <TouchableOpacity style={styles.navMenu}>
        <Image source={require('../assets/images/arrow.png')} />
      </TouchableOpacity>
      <View style={styles.exploreTexts}>
        <View>
          <Text style={styles.exploreLocation}>Night life in Pondy</Text>
          <Text style={styles.explorepara}>
            My trip to China started in Beijing, where I stayed in a beautiful
            hotel called ...
          </Text>
          <View style={styles.exploreProfilediv}>
            <Image
              style={styles.explorePofile}
              source={require('../assets/images/ProfileImg.png')}
            />
            <Text style={styles.explorePofileName}>Leslie Alexander</Text>
          </View>
        </View>
        <Image source={require('../assets/images/Like.png')} />
      </View>
      <ScrollView
        style={styles.milestoneCaterories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() => setMilestoneCatory('All')}>
          <Text
            style={
              milestonCatory === 'All'
                ? styles.milestoneCategoryTextActive
                : styles.milestoneCategoryText
            }>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMilestoneCatory('Overview')}>
          <Text
            style={
              milestonCatory === 'Overview'
                ? styles.milestoneCategoryTextActive
                : styles.milestoneCategoryText
            }>
            Overview
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMilestoneCatory('Hotels')}>
          <Text
            style={
              milestonCatory === 'Hotels'
                ? styles.milestoneCategoryTextActive
                : styles.milestoneCategoryText
            }>
            Hotels
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMilestoneCatory('Food')}>
          <Text
            style={
              milestonCatory === 'Food'
                ? styles.milestoneCategoryTextActive
                : styles.milestoneCategoryText
            }>
            Food
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMilestoneCatory('Memes')}>
          <Text
            style={
              milestonCatory === 'Memes'
                ? styles.milestoneCategoryTextActive
                : styles.milestoneCategoryText
            }>
            Memes
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.milestoneTextDiv}>
        <Text style={styles.milestoneText}>At First</Text>
        <Text style={styles.milestonepara}>
          Let's figure out how much I spent on this trip of money and time, and
          then the story begins.
        </Text>
        <View style={styles.milestoneDiv}>
          <View style={styles.milestoneIcondiv}>
            <Image
              style={styles.milestoneIcon}
              source={require('../assets/images/Location.png')}
            />
            <Text style={styles.milestoneIconName}>Pondy</Text>
          </View>
          <View style={styles.milestoneIcondiv}>
            <Image
              style={styles.milestoneIcon}
              source={require('../assets/images/Heart.png')}
            />
            <Text style={styles.milestoneIconName}>2200 likes</Text>
          </View>
          <View style={styles.milestoneIcondiv}>
            <Image
              style={styles.milestoneIcon}
              source={require('../assets/images/Show.png')}
            />
            <Text style={styles.milestoneIconName}>1123 view</Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.milestoneLocationDiv}>
          <ScrollView style={styles.milestoneLocationInnerDiv}>
            <MilestoneLocationCard
              image={require('../assets/images/Crown.png')}
              title="Crown 5"
              price="$12.99"
            />
          </ScrollView>
          <ScrollView style={styles.milestoneLocationInnerDiv}>
            <MilestoneLocationCard
              image={require('../assets/images/HotelGreen.png')}
              title="HoteGreen"
              price="$12.99"
            />
            <MilestoneLocationCard
              image={require('../assets/images/location3.png')}
              title="Crown 5"
              price="$12.99"
            />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  navMenu: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerContainer: {
    padding: 20,
  },
  backgroundImg: {
    position: 'absolute',
    width: wp(100),
    height: 406,
  },
  exploreTexts: {
    marginTop: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exploreLocation: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
    color: '#fff',
  },
  explorepara: {
    width: 265,
    fontSize: 14,
    color: '#fff',
  },
  exploreProfilediv: {
    flexDirection: 'row',
    marginTop: 12,
  },
  explorePofile: {
    width: 17,
    height: 17,
    marginRight: 6,
  },
  explorePofileName: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 15,
  },
  milestoneCategoryText: {
    color: '#132D2F',
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 10,
    fontSize: 16,
  },
  milestoneCategoryTextActive: {
    color: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#132D2F',
    borderRadius: 12,
    fontWeight: '600',
    marginRight: 10,
    fontSize: 16,
  },
  milestoneCaterories: {
    marginTop: 55,
  },
  milestoneText: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
    color: '#121212',
  },
  milestonepara: {
    width: wp(100) - 40,
    fontSize: 15,
    color: 'rgba(8, 20, 20, 0.60)',
  },
  milestoneDiv: {
    flexDirection: 'row',
  },
  milestoneIcondiv: {
    flexDirection: 'row',
    marginTop: 12,
    marginRight: 10,
  },
  milestoneIcon: {
    width: 17,
    height: 17,
    marginRight: 6,
  },
  milestoneIconName: {
    color: 'rgba(8, 20, 20, 0.60)',
    fontWeight: '500',
    fontSize: 15,
  },
  milestoneTextDiv: {
    marginTop: 24,
  },
  milestoneLocationDiv: {
    width: wp(100) - 40,
    flexDirection: 'row',
    marginTop: 24,
  },
  milestoneLocationInnerDiv: {
    width: '50%',
  },
});

export default Milestone;