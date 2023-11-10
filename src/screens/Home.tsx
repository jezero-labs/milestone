import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import WelcomeComponent from '../components/WelcomeComponent';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import LocationCard from '../components/LocationCard';

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
    backgroundImg: require('../assets/images/Cover.png'),
  },
];

const Home = () => {
  const flatlistRef: any = useRef();
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === data.length - 1) {
        flatlistRef.current.scrollToIndex({
          index: 0,
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
      <View>
        <Image source={item.backgroundImg} style={{height: 392, width: 335}} />
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
  },
  exploreContainer: {
    padding: 20,
  },
});

export default Home;
