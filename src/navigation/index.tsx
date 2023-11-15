import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from './BottomNavigation';
import PlaceDetails from '../screens/PlaceDetails';
import Milestone from '../screens/Milestone';
import {NavigationContainer} from '@react-navigation/native';
import {useState} from 'react';
import LandingScreen from '../screens/LandingScreen';
import CreateAccount from '../screens/CreateAccount';
import ImportAccount from '../screens/ImportAccount';

export type StackParamList = {
  Bottom: undefined;
  landingScreen: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const MyStack = () => {
  const [hasLoadedAccount, setHasLoadedAccount] = useState(false);
  return (
    <NavigationContainer>
      {hasLoadedAccount ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Bottom" component={BottomNavigator} />
          <Stack.Screen name="Place" component={PlaceDetails} />
          <Stack.Screen name="Milestone" component={Milestone} />
        </Stack.Navigator>
      ) : (
        // eslint-disable-next-line react/react-in-jsx-scope
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
