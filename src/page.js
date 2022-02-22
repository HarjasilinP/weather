import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import data from './Indiancities.json';
const page = () => {
  console.log('data', data);
  return (
  <View style={{width:'100%',backgroundColor:'white',paddingHorizontal:10,paddingVertical:10,marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
<Text>
  Angul:
</Text>
<Text>
  32.23
</Text>
  </View>
  );
};

const styles = StyleSheet.create({

});

export default page;
