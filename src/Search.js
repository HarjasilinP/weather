import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  View,
  TouchableOpacity,
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
    setSearchedItems(filteredArray);
    console.log('filteredArray', filteredArray);
  };
  useEffect(() => {

   

  }, [searchedItems]);

  const getTemp = (lat, long,city) => {
console.log(lat,long,city)
    // fetch(
    //   'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=cda02978f791a9630924c13f1c2b0cf7',
    // )
    //   .then(response => response.json())
    //   .then(json => console.log(json));
      var itemIndex = data.findIndex(str => {
        return city=== str.city     
        // console.log(str)
      })
      console.log(itemIndex)
      data[itemIndex].temp=38
      //return str.city===city?(str.temp=38):(str.temp=null) 
 setSearchedItems(data)
 
  };
  useEffect(() => {

   

  }, [searchedItems]);
  return (
    <SafeAreaView>
      <View style={{ margin: 10 }}>

        <TextInput
          placeholder="Search Cities"
          value={search}
          style={{ borderColor: '#000', borderWidth: 0.5 }}
          onChangeText={text => searchItem(text)}
        />
        <FlatList
          data={searchedItems}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 10, marginTop: 5 }}
                key={index}>
                <Text style={{ color: 'black', fontSize: 15, }}>{item.city}</Text>
                <Text>{item.temp?(item.temp):('none')}</Text>
                <TouchableOpacity onPress={()=>getTemp(item.lat,item.lng,item.city)}
                style={{ backgroundColor: 'red', padding: 4 }}>
                  <Text style={{ color: 'white' }}>View Temp</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Search;
