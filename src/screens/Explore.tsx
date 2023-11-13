import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import WelcomeComponent from '../components/WelcomeComponent';
import MilestonesCard from '../components/MilestonesCard';

const Explore = ({navigation}: any) => {
  const [locationCategory, setLocationCategory] = useState<string>('All');
  return (
    <View>
      <WelcomeComponent
        name={'Kaushik KC'}
        image={require('../assets/images/ProfileImg.png')}
      />
      <View style={styles.exploreDiv}>
        <Text style={styles.exploreHeading}>Incredible India</Text>
        <Text style={styles.exploreSubHeadinhDark}>
          <Text style={styles.exploreSubHeading}>Let’s Explore </Text>
          Milestones
        </Text>
        <ScrollView
          style={styles.locationCategory}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => setLocationCategory('All')}>
            <Text
              style={
                locationCategory === 'All'
                  ? styles.locationCategoryTextActive
                  : styles.locationCategoryText
              }>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setLocationCategory('Popular')}>
            <Text
              style={
                locationCategory === 'Popular'
                  ? styles.locationCategoryTextActive
                  : styles.locationCategoryText
              }>
              Popular
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setLocationCategory('Nearby')}>
            <Text
              style={
                locationCategory === 'Nearby'
                  ? styles.locationCategoryTextActive
                  : styles.locationCategoryText
              }>
              Nearby
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setLocationCategory('Recomended')}>
            <Text
              style={
                locationCategory === 'Recomended'
                  ? styles.locationCategoryTextActive
                  : styles.locationCategoryText
              }>
              Recomended
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <ScrollView showsVerticalScrollIndicator={false}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  exploreDiv: {
    paddingHorizontal: 20,
  },
  locationCategory: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  locationCategoryText: {
    fontSize: 14,
    color: '#121212',
    fontWeight: '500',
    marginRight: 40,
  },
  locationCategoryTextActive: {
    fontSize: 14,
    color: '#F36D72',
    fontWeight: '500',
    marginRight: 40,
    borderBottomColor: '#F36D72',
    borderBottomWidth: 2,
  },
  exploreHeading: {
    fontSize: 25,
    color: '#121212',
    fontWeight: '800',
  },
  exploreSubHeading: {
    fontSize: 22,
    color: '#6F7789',
    fontWeight: '600',
  },
  exploreSubHeadinhDark: {
    fontSize: 22,
    color: '#121212',
    fontWeight: '600',
  },
});

export default Explore;
