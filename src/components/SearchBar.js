import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onChangeTerm, onEndTerm }) => {
  const a = 5;
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        input={term}
        onChangeText={(newTerm) => {
          onChangeTerm(newTerm);
        }}
        onEndEditing={() => {
          onEndTerm();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'gainsboro',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row'
  },
  textInput: {
    height: 50,
    flex: 1,
    fontSize: 20,
    marginRight: 15
  },
  icon: {
    alignSelf: 'center',
    marginHorizontal: 15,
    fontSize: 35,
    color: 'black'
  }
});

export default SearchBar;
