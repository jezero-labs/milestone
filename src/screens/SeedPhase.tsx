/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getAccountPhrase} from '@rly-network/mobile-sdk';
import Clipboard from '@react-native-clipboard/clipboard';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SeedPhase = () => {
  const [didConfirm, setDidConfirm] = useState(false);
  const [seed, setSeed] = useState<undefined | null | string>();

  useEffect(() => {
    const doAsyncWork = async () => {
      if (!didConfirm) {
        return;
      }

      const tmpSeed = await getAccountPhrase();
      setSeed(tmpSeed);
    };
    doAsyncWork();
  }, [didConfirm]);
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 96}}>
          Never disclose your seed phrase.
        </Text>

        {!didConfirm && (
          <View style={{marginTop: 48}}>
            <TouchableOpacity
              onPress={async () => {
                setDidConfirm(true);
              }}>
              <Text>I understand</Text>
            </TouchableOpacity>
          </View>
        )}

        {didConfirm && (
          <>
            <Text
              style={{
                fontSize: 16,
                marginTop: 24,
                fontStyle: 'italic',
                paddingHorizontal: 48,
              }}>
              {seed}
            </Text>
            <View style={{marginTop: 48}}>
              <TouchableOpacity
                onPress={async () => {
                  Clipboard.setString(seed || '');
                }}>
                <Text>Copy seed phrase</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default SeedPhase;
