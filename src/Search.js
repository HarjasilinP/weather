import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import data from './Indiancities.json';
const Search = () => {
  const [search, setSearch] = useState('');
  const [searchedItems, setSearchedItems] = useState([]);
  const searchItem = text => {
    setSearch(text);
    console.log(text);
  };
  console.log(data);
  return (
    <View>
      <Text>Search</Text>
      <TextInput
        placeholder="Search Cities"
        value={search}
        style={{borderColor: '#000', borderWidth: 0.5}}
        onChangeText={text => searchItem(text)}
      />
      <Text>{search}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Search;
