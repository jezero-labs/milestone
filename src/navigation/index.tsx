import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from './BottomNavigation';
import PlaceDetails from '../screens/PlaceDetails';
import Milestone from '../screens/Milestone';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import LandingScreen from '../screens/LandingScreen';
import CreateAccount from '../screens/CreateAccount';
import ImportAccount from '../screens/ImportAccount';
import ClaimScreen from '../screens/ClaimScreen';
import {account} from '../state';
import {useRecoilState} from 'recoil';
import {getAccount} from '@rly-network/mobile-sdk';
import SeedPhase from '../screens/SeedPhase';
import CreateMilestone from '../screens/CreateMilestone';

export type StackParamList = {
  Bottom: undefined;
  landingScreen: undefined;
  Place: undefined;
  Milestone: undefined;
  claimingScreen: undefined;
  seedphase: undefined;
  createAccount: undefined;
  importAccount: undefined;
  createMilestone: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const MyStack = () => {
  const [hasLoadedAccount, setHasLoadedAccount] = useState(false);
  const [act, setAct] = useRecoilState(account);
  useEffect(() => {
    const loadAccount = async () => {
      const rlyAccount = await getAccount();

      setHasLoadedAccount(true);

      if (!rlyAccount) {
        return;
      }

      setAct(rlyAccount);
    };
    loadAccount();
  }, [setAct]);
  return (
    <NavigationContainer>
      {hasLoadedAccount && act ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Bottom" component={BottomNavigator} />
          <Stack.Screen name="Place" component={PlaceDetails} />
          <Stack.Screen name="Milestone" component={Milestone} />
          <Stack.Screen name="claimingScreen" component={ClaimScreen} />
          <Stack.Screen name="seedphase" component={SeedPhase} />
          <Stack.Screen name="createMilestone" component={CreateMilestone} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="landingScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="landingScreen" component={LandingScreen} />
          <Stack.Screen name="createAccount" component={CreateAccount} />
          <Stack.Screen name="importAccount" component={ImportAccount} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default MyStack;
