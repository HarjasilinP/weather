import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  View,
} from 'react-native';
import data from './Indiancities.json';
const Search = () => {
  const [search, setSearch] = useState('');
  const [searchedItems, setSearchedItems] = useState(data);
  const searchItem = text => {
    setSearch(text);
    var filteredArray = data.filter(str => {
      return str.city === text;
    });
    console.log('filteredArray', filteredArray);
  };
  // console.log(data);
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
      <FlatList
        data={searchedItems}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <View key={index}>
              <Text>{item.city}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Search;
