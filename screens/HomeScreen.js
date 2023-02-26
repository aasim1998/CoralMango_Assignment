import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useContext, useState} from 'react';
import SearchFilter from '../Components/SearchFilter';

const Homescreen = () => {
  const data = [
    {
      name: 'John Doe',
      age: '32',
      occupation: 'Developer',
    },
    {
      name: 'John Doe',
      age: '27',
      occupation: 'Designer',
    },
    {
      name: 'Bob Smith',
      age: '45',
      occupation: 'Manager',
    },
  ];

  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={input}
        onChangeText={text => setInput(text)}
      />
      <SearchFilter data={data} input={input} setInput={setInput} />
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 60,
  },

  input: {
    borderWidth: 2,
    borderColor: '#777',
    marginBottom: 10,
    padding: 8,
    width: 250,
    borderRadius: 10,
  },
});
