import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SearchFilter = ({data, input, setInput}) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          if (input === '') {
            return (
              <View>
                <Text style={styles.text}>
                  {item.name} , {item.age}, {item.occupation}
                </Text>
                <Text
                  style={{
                    borderColor: 'grey',
                    borderWidth: 1,
                    height: 1,
                  }}></Text>
              </View>
            );
          }
          if (
            item.name.toLowerCase().includes(input.toLowerCase()) ||
            item.age == input
          ) {
            return (
              <View>
                <Text style={styles.text}>
                  {item.name} , {item.age}, {item.occupation}
                </Text>
                <Text
                  style={{
                    borderColor: 'grey',
                    borderWidth: 1,
                    height: 1,
                  }}></Text>
              </View>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
});
