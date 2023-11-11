import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from './BottomNavigation';
import PlaceDetails from '../screens/PlaceDetails';

export type StackParamList = {
  Bottom: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Bottom" component={BottomNavigator} />
      <Stack.Screen name="Place" component={PlaceDetails} />
    </Stack.Navigator>
  );
};

export default MyStack;
