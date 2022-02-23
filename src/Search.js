import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import data from './Indiancities.json';
const Search = (props) => {
  const [search, setSearch] = useState('');
  const [searchedItems, setSearchedItems] = useState(data);
  const searchItem = text => {
    setSearch(text);
    var filteredArray = data.filter(str => {
      return str.city === text;
    });
    setSearchedItems(filteredArray);
  };
  const getTemp = (lat, long, city) => {
    var itemIndex = data.findIndex(str => {
      return city === str.city;
    });
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=' +
      lat +
      '&lon=' +
      long +
      '&appid=cda02978f791a9630924c13f1c2b0cf7',
    )
      .then(response => response.json())
      .then(json => {
        var temp = (json.main.temp - 273.15).toFixed(2);
        props.navigation.navigate('Weather', { item: temp, city: city })
      });
  };
  return (
    <SafeAreaView>
      <View style={{ margin: 10 }}>
        <TextInput
          placeholder="Search Cities"
          value={search}
          style={styles.text_input}
          onChangeText={text => searchItem(text)}
        />
        <FlatList
          data={searchedItems}
          keyExtractor={item => item.city}
          renderItem={({ item, index }) => {
            return (
              <View
                style={styles.flat}
                key={index}>
                <Text style={styles.city}>{item.city}</Text>
                {!item.temp ? (
                  <TouchableOpacity
                    onPress={() => getTemp(item.lat, item.lng, item.city)}
                    style={styles.touch}>
                    <Text style={styles.touch_text}>View Temp</Text>
                  </TouchableOpacity>
                ) : (
                  <Text>{item.temp}</Text>
                )}
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  touch: {
    backgroundColor: 'red',
    padding: 4
  },
  touch_text: {
    color: 'white'
  },
  city: {
    color: 'black',
    fontSize: 15
  },
  flat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 5,
  },
  text_input: {
    borderColor: '#000',
    borderWidth: 0.5
  },
});

export default Search;
