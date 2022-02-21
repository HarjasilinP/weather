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
  return <View></View>;
};

const styles = StyleSheet.create({});

export default page;
