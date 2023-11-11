/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackParamList} from '.';
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Marketplace from '../screens/Marketplace';
import Profile from '../screens/Profile';
import {Image} from 'react-native';
import {wp} from '../utils/ScreenDimension';

type BottomTabNavigatorParamList = {
  Home: StackParamList;
  Explore: undefined;
  Marketplace: undefined;
  Profile: undefined;
};

const Bottom = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomNavigator = () => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {backgroundColor: '#D1411E'},
        headerTintColor: '#000',
        tabBarIconStyle: {
          color: 'white',
        },
        tabBarStyle: {
          height: 69,
          width: wp(100) - 32,
          backgroundColor: '#000',
          position: 'absolute',
          borderRadius: 16,
          bottom: 24,
          marginHorizontal: 16,
          borderColor: '#000',
          borderWidth: 1,
        },
      }}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Home',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/home.png')
                  : require('../assets/images/home.png')
              }
              style={{
                width: 20,
                height: 20,
              }}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Explore',
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/explore.png')
                  : require('../assets/images/explore.png')
              }
              style={{
                width: 20,
                height: 25,
              }}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Marketplace"
        component={Marketplace}
        options={{
          tabBarShowLabel: false,

          tabBarLabel: 'Marketplace',
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/marketplace.png')
                  : require('../assets/images/marketplace.png')
              }
              style={{
                width: 20,
                height: 20,
              }}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/profile.png')
                  : require('../assets/images/profile.png')
              }
              style={{
                width: 20,
                height: 20,
              }}
            />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
