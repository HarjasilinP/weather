import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import data from './Indiancities.json';
const page = (props) => {
  console.log('data', props);
  return (
    <View>
      <TouchableOpacity 
      style={{height:50,width:80,justifyContent:'center',backgroundColor:'white',alignSelf:'center',marginTop:10}}
      onPress={()=>props.navigation.navigate('Search')}>
      <Text style={{ textAlign: 'center', color: 'red', fontSize: 20 }}>
          Add City
        </Text>
      </TouchableOpacity>
      
      <View style={{ width: '100%', backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 10, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>
          Angul:
        </Text>
        <Text>
          32.23
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default page;
