import React from 'react';
import {SafeAreaView} from 'react-native';
import MyStack from './src/navigation';
import 'react-native-gesture-handler';
import {RecoilRoot} from 'recoil';
import {Network, RlyMumbaiNetwork} from '@rly-network/mobile-sdk';
import {PrivateConfig} from './src/private_config';

export const RlyNetwork: Network = RlyMumbaiNetwork;
RlyNetwork.setApiKey(PrivateConfig.RALLY_API_KEY);

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <SafeAreaView style={{flex: 1, backgroundColor: '#F6F6F6'}}>
        <MyStack />
      </SafeAreaView>
    </RecoilRoot>
  );
}

export default App;
