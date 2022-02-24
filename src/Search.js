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
import AntDesign from "react-native-vector-icons/AntDesign"
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
  const clearSearch=()=>{
    setSearch("")
    setSearchedItems(data)
  }
  return (
    <SafeAreaView>
      <View style={{ margin: 10 }}>
        <View style={styles.text_input}>
        <TextInput
          placeholder="Search Cities"
          value={search}
          
          onChangeText={text => searchItem(text)}
        >
          
          </TextInput>
          {search.length===0?(null):(
          <AntDesign onPress={()=>clearSearch()}
          name='close'
          size={20}>
          </AntDesign>
          )}
          </View>
        <FlatList
          data={searchedItems.sort(function(a, b){
            if(a.city < b.city) { return -1; }
            if(a.city > b.city) { return 1; }
            return 0;
        })}
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
                    <Text style={styles.touch_text}>View</Text>
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
    backgroundColor: '#B6D0E2',
    padding: 8,
    borderRadius:25
  },
  touch_text: {
    color: 'black',
    
  },
  city: {
    color: 'black',
    fontSize: 15,
    alignSelf:'center'
  },
  flat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 8,
    borderRadius:10,
    elevation:5
  },
  text_input: {
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius:50,
    paddingHorizontal:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
});

export default Search;
