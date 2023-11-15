import React from 'react';
import {SafeAreaView} from 'react-native';
import MyStack from './src/navigation';
import 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#F6F6F6'}}>
        <MyStack />
      </SafeAreaView>
  );
}

export default App;
