/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackParamList} from '.';
import Home from '../screens/Home';
import Explore from '../screens/Explore';
// import Marketplace from '../screens/Marketplace';
import {Image, Text} from 'react-native';
import {wp} from '../utils/ScreenDimension';
import Wallet from '../screens/Wallet';
import Profile from '../screens/Profile';

type BottomTabNavigatorParamList = {
  Home: StackParamList;
  Explore: undefined;
  Marketplace: undefined;
  Wallet: undefined;
  Profile: undefined;
};

const Bottom = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomNavigator = () => {
  return (
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

          tabBarIcon: ({focused}) => (
            <>
              <Image
                source={
                  focused
                    ? require('../assets/images/Home.png')
                    : require('../assets/images/Home.png')
                }
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <Text
                style={
                  focused
                    ? {
                        borderBottomWidth: 2,
                        width: 15,
                        borderBottomColor: '#fff',
                        marginTop: -14,
                      }
                    : {
                        height: 0,
                      }
                }
              />
            </>
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
            <>
              <Image
                source={
                  focused
                    ? require('../assets/images/Explore.png')
                    : require('../assets/images/Explore.png')
                }
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <Text
                style={
                  focused
                    ? {
                        borderBottomWidth: 2,
                        width: 15,
                        borderBottomColor: '#fff',
                        marginTop: -14,
                      }
                    : {
                        height: 0,
                      }
                }
              />
            </>
          ),
        }}
      />
      {/* <Bottom.Screen
        name="Marketplace"
        component={Marketplace}
        options={{
          tabBarShowLabel: false,

          tabBarLabel: 'Marketplace',
          tabBarIcon: ({focused}) => (
            <>
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
              <Text
                style={
                  focused
                    ? {
                        borderBottomWidth: 2,
                        width: 18,
                        borderBottomColor: '#fff',
                        marginTop: -12,
                      }
                    : {
                        height: 0,
                      }
                }></Text>
            </>
          ),
        }}
      /> */}
      <Bottom.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <>
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
              <Text
                style={
                  focused
                    ? {
                        borderBottomWidth: 2,
                        width: 18,
                        borderBottomColor: '#fff',
                        marginTop: -12,
                      }
                    : {
                        height: 0,
                      }
                }
              />
            </>
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
            <>
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
              <Text
                style={
                  focused
                    ? {
                        borderBottomWidth: 2,
                        width: 18,
                        borderBottomColor: '#fff',
                        marginTop: -12,
                      }
                    : {
                        height: 0,
                      }
                }
              />
            </>
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
