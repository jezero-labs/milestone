import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import MyStack from './src/navigation';
import 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <MyStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
