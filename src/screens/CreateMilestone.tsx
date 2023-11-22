import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const CreateMilestone = () => {
  const navigation = useNavigation();
  const [geography, setGeography] = useState('');
  const [location, setLocation] = useState('');
  const [geoTag, setGeoTag] = useState('');
  const [user, setUser] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cover, setCover] = useState('');

  const createMilestone = () => {
    navigation.navigate('Place');
  };
  return (
    <View style={styles.outerDiv}>
      <Text style={styles.heading}>Create Milestone</Text>
      <View style={styles.innerDiv}>
        <TextInput
          placeholder="Geography"
          style={styles.textInput}
          onChangeText={e => {
            setGeography(e);
          }}
        />
        <TextInput
          placeholder="Location"
          style={styles.textInput}
          onChangeText={e => {
            setLocation(e);
          }}
        />
        <TextInput
          placeholder="GeoTag"
          style={styles.textInput}
          onChangeText={e => {
            setGeoTag(e);
          }}
        />
        <TextInput
          placeholder="User"
          style={styles.textInput}
          onChangeText={e => {
            setUser(e);
          }}
        />
        <TextInput
          placeholder="Title"
          style={styles.textInput}
          onChangeText={e => {
            setTitle(e);
          }}
        />
        <TextInput
          multiline
          numberOfLines={4}
          placeholder="Description"
          style={styles.textInput}
          onChangeText={e => {
            setDescription(e);
          }}
        />
        <TextInput
          placeholder="Cover"
          style={styles.textInput}
          onChangeText={e => {
            setCover(e);
          }}
        />
        <TouchableOpacity
          onPress={() => createMilestone()}
          style={styles.AccountBtn}>
          <Text style={styles.BtnText}>Create Milestone</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1.5,
    borderColor: '#000000',
    padding: 8,
    borderRadius: 8,
    width: 283,
    marginBottom: 15,
  },
  outerDiv: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  innerDiv: {
    alignItems: 'center',
  },
  AccountBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderColor: '#132D2F',
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 20,
  },
  BtnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#121212',
  },
  heading: {
    fontWeight: '800',
    fontSize: 20,
    color: '#121212',
    marginBottom: 40,
  },
});

export default CreateMilestone;
