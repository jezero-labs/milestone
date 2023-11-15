import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CreateAccount = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
  return (
    <View style={styles.outerDiv}>
      <Text style={styles.heading}>Create Your Account</Text>
      <View style={styles.innerDiv}>
        <TextInput
          placeholder="Name"
          style={styles.textInput}
          onChangeText={e => {
            setName(e);
          }}
        />
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          onChangeText={e => {
            setEmail(e);
          }}
        />
        <TouchableOpacity style={styles.AccountBtn}>
            <Text style={styles.BtnText}>Create Account</Text>
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
      marginBottom: 15
    },
    outerDiv: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      },
      innerDiv:{
        alignItems: 'center'
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
      heading:{
        fontWeight: '800',
        fontSize: 20,
        color: '#121212',
        marginBottom: 40
      }
  });

export default CreateAccount;
