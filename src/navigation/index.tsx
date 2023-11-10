import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from './BottomNavigation';

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
    </Stack.Navigator>
  );
};

export default MyStack;
