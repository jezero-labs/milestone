import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const LandingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.outerDiv}>
      <TouchableOpacity
        onPress={() => navigation.navigate("createAccount")}
        style={styles.AccountBtn}>
        <Text style={styles.BtnText}>Create New account</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => navigation.navigate("importAccount")}
      style={styles.AccountBtn}>
        <Text style={styles.BtnText}>Import Existing account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerDiv: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  AccountBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderColor: '#F05A22',
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 20,
  },
  BtnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#121212',
  },
});

export default LandingScreen;
