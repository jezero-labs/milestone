import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import WelcomeComponent from '../components/WelcomeComponent';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import LocationCard from '../components/LocationCard';
import { wp } from '../utils/ScreenDimension';

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

const Home = () => {
  const flatlistRef: any = useRef();
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
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
  });

  const getItemLayout = (data:any, index: any) => ({
    length: screenWidth,
    offset: screenWidth * index, // for first image - 300 * 0 = 0pixels, 300 * 1 = 300, 300*2 = 600
    index: index,
});

  const renderItem = ({item, index}: any) => {
    return (
      <View >
        <Image source={item.backgroundImg} style={styles.exploreImage} />
        <View style={styles.exploreTexts}>
            <Text style={styles.exploreLocation}>{item.title}</Text>
            <Text style={styles.explorepara}>{item.para}</Text>
            <View style={styles.exploreProfilediv}>
                <Image style={styles.explorePofile} source={item.profile}/>
                <Text style={styles.explorePofileName}>{item.profileName}</Text>
            </View>
        </View>
      </View>
    );
  };

  const handleScroll = (event: any) => {
    // Get the scroll position
    const scrollPosition = event.nativeEvent.contentOffset.x;
    console.log({scrollPosition});
    // Get the index of current active item

    const index = scrollPosition / screenWidth;

    console.log({index});
    // Update the index

    setActiveIndex(index);
  };

  return (
    <View>
      <WelcomeComponent
        name={'Kaushik KC'}
        image={require('../assets/images/ProfileImg.png')}
      />
      <View>
        <Text style={styles.subHeading}>Choose location</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <LocationCard
            image={require('../assets/images/india.png')}
            location={'India'}
          />
          <LocationCard
            image={require('../assets/images/turkey.png')}
            location={'Turkey'}
          />
          <LocationCard
            image={require('../assets/images/africa.png')}
            location={'Africa'}
          />
          <LocationCard
            image={require('../assets/images/italy.png')}
            location={'Italy'}
          />
          <LocationCard
            image={require('../assets/images/Cover.png')}
            location={'West'}
          />
          <LocationCard
            image={require('../assets/images/Shape.png')}
            location={'Germany'}
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
    padding: 20
  },
  exploreContainer: {
    // padding: 20,
  },
  exploreImage:{
    height: 392,
    width: wp(100) - 40,
    borderRadius: 24,
    marginHorizontal: 20
  },
  exploreTexts:{
    position: 'absolute',
    top: 269,
    left: 44,
    flexDirection: 'column'
  },
  exploreLocation:{
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
    color: '#fff'
  },
  explorepara:{
    width: 265,
    fontSize: 14,
    color: '#fff'
  },
  exploreProfilediv:{
    flexDirection:'row',
    marginTop: 12
  },
  explorePofile:{
    width:17,
    height:17,
    marginRight: 6
  },
  explorePofileName:{
    color: '#fff',
    fontWeight: '500',
    fontSize: 15
  }
});

export default Home;
