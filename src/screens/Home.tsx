import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import WelcomeComponent from '../components/WelcomeComponent';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import LocationCard from '../components/LocationCard';
import {wp} from '../utils/ScreenDimension';
import LocationCategoryCard from '../components/LocationCategoryCard';
import CitiesCard from '../components/CitiesCard';
import {useRecoilValue} from 'recoil';
import {userDetails as userDetailsAtom} from '../state';

const data = [
  {
    id: '01',
    title: 'Travel to India',
    para: 'My trip to China started in Beijing, where I stayed in a beautiful hotel called ...',
    profileName: 'Leslie Alexander',
    profile: require('../assets/images/ProfileImg.png'),
    backgroundImg: require('../assets/images/India.png'),
  },
  {
    id: '02',
    title: 'Travel to Italy',
    para: 'My trip to China started in Beijing, where I stayed in a beautiful hotel called ...',
    profileName: 'Leslie Alexander',
    profile: require('../assets/images/ProfileImg.png'),
    backgroundImg: require('../assets/images/Italy.png'),
  },
  {
    id: '03',
    title: 'Travel to Africa',
    para: 'My trip to China started in Beijing, where I stayed in a beautiful hotel called ...',
    profileName: 'Leslie Alexander',
    profile: require('../assets/images/ProfileImg.png'),
    backgroundImg: require('../assets/images/Shape.png'),
  },
  {
    id: '04',
    title: 'Travel to Turkey',
    para: 'My trip to China started in Beijing, where I stayed in a beautiful hotel called ...',
    profileName: 'Leslie Alexander',
    profile: require('../assets/images/ProfileImg.png'),
    backgroundImg: require('../assets/images/Turkey.png'),
  },
  {
    id: '05',
    title: 'Travel to Germany',
    para: 'My trip to China started in Beijing, where I stayed in a beautiful hotel called ...',
    profileName: 'Leslie Alexander',
    profile: require('../assets/images/ProfileImg.png'),
    backgroundImg: require('../assets/images/Mask.png'),
  },
];

const Home = ({navigation}: any) => {
  const flatlistRef: any = useRef();
  const screenWidth = Dimensions.get('window').width;
  const userDetails = useRecoilValue(userDetailsAtom);
  const [activeIndex, setActiveIndex] = useState(0);
  const [choosedLocation, setChoosedLocation] = useState<boolean>(false);
  const [locationCategory, setLocationCategory] = useState<string>('All');

  useEffect(() => {
    if (choosedLocation == false) {
      let interval = setInterval(() => {
        if (Math.round(activeIndex) === data.length - 1) {
          flatlistRef.current.scrollToIndex({
            index: 1,
            animation: true,
          });
        } else {
          flatlistRef.current.scrollToIndex({
            index: activeIndex + 1,
            animation: true,
          });
        }
      }, 2000);

      return () => clearInterval(interval);
    }
  });

  const getItemLayout = (data: any, index: any) => ({
    length: screenWidth,
    offset: screenWidth * index, // for first image - 300 * 0 = 0pixels, 300 * 1 = 300, 300*2 = 600
    index: index,
  });

  const renderItem = ({item, index}: any) => {
    return (
      <View>
        <Image source={item.backgroundImg} style={styles.exploreImage} />
        <View style={styles.exploreTexts}>
          <Text style={styles.exploreLocation}>{item.title}</Text>
          <Text style={styles.explorepara}>{item.para}</Text>
          <View style={styles.exploreProfilediv}>
            <Image style={styles.explorePofile} source={item.profile} />
            <Text style={styles.explorePofileName}>{item.profileName}</Text>
          </View>
        </View>
      </View>
    );
  };

  const handleScroll = (event: any) => {
    // Get the scroll position
    const scrollPosition = event.nativeEvent.contentOffset.x;

    const index = scrollPosition / screenWidth;

    setActiveIndex(index);
  };

  return (
    <ScrollView>
      <WelcomeComponent
        name={userDetails?.name}
        image={require('../assets/images/ProfileImg.png')}
      />
      {choosedLocation ? (
        <View style={styles.locationDiv}>
          <View>
            <Text style={styles.locationText}>Incredible India </Text>
            <Text style={styles.locationPara}>Let’s Explore Together </Text>
          </View>
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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <LocationCategoryCard
              image={require('../assets/images/Rectangle.png')}
              title="Nainital"
              location="Lumajang, Jawa timur"
              ratting="4.8"
            />
            <LocationCategoryCard
              image={require('../assets/images/Rectangle.png')}
              title="Kochi"
              location="Banyuwangi, Jawa timur"
              ratting="4.8"
            />
            <LocationCategoryCard
              image={require('../assets/images/Rectangle.png')}
              title="Nainital"
              location="Lumajang, Jawa timur"
              ratting="4.8"
            />
          </ScrollView>
          <View style={styles.heading}>
            <Text style={styles.title}>Top Cities</Text>
            <Text style={styles.more}>View All</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <CitiesCard
              image={require('../assets/images/cities.png')}
              title="Mumbai"
              location="Jawa timur"
              rating="4.8"
              navigation={navigation}
            />
            <CitiesCard
              image={require('../assets/images/cities.png')}
              title="Bangalore"
              location="Jawa timur"
              rating="4.8"
              navigation={navigation}
            />
            <CitiesCard
              image={require('../assets/images/cities.png')}
              title="Chennai"
              location="Jawa timur"
              rating="4.8"
              navigation={navigation}
            />
          </ScrollView>
        </View>
      ) : (
        <View>
          <View>
            <Text style={styles.subHeading}>Choose location</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <LocationCard
                image={require('../assets/images/indiaSmall.png')}
                location={'India'}
                setChoosedLocation={setChoosedLocation}
              />
              <LocationCard
                image={require('../assets/images/turkeySmall.png')}
                location={'Turkey'}
                setChoosedLocation={setChoosedLocation}
              />
              <LocationCard
                image={require('../assets/images/africa.png')}
                location={'Africa'}
                setChoosedLocation={setChoosedLocation}
              />
              <LocationCard
                image={require('../assets/images/italySmall.png')}
                location={'Italy'}
                setChoosedLocation={setChoosedLocation}
              />
              <LocationCard
                image={require('../assets/images/Cover.png')}
                location={'West'}
                setChoosedLocation={setChoosedLocation}
              />
              <LocationCard
                image={require('../assets/images/Shape.png')}
                location={'Germany'}
                setChoosedLocation={setChoosedLocation}
              />
            </ScrollView>
          </View>
          <View style={styles.exploreContainer}>
            <Text style={styles.exploreTitle}>Explore Place</Text>
            <FlatList
              data={data}
              ref={flatlistRef}
              getItemLayout={getItemLayout}
              keyExtractor={(item: any) => item.id}
              renderItem={renderItem}
              horizontal={true}
              pagingEnabled={true}
              onScroll={handleScroll}
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  head: {
    color: 'black',
  },
  subHeading: {
    fontSize: 15,
    fontWeight: '600',
    color: '#321F0E',
    marginLeft: 20,
  },
  exploreTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    padding: 20,
  },
  exploreContainer: {
    // padding: 20,
  },
  exploreImage: {
    height: 392,
    width: wp(100) - 40,
    borderRadius: 24,
    marginHorizontal: 20,
  },
  exploreTexts: {
    position: 'absolute',
    top: 269,
    left: 44,
    flexDirection: 'column',
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
  locationDiv: {
    paddingHorizontal: 20,
  },
  locationText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#121212',
  },
  locationPara: {
    fontSize: 20,
    fontWeight: '600',
    color: '#6F7789',
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
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  title: {
    fontSize: 18,
    color: '#121212',
    fontWeight: '600',
  },
  more: {
    color: '#121212',
    fontSize: 16,
  },
});

export default Home;
