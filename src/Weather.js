import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text, View
} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
const Weather = (props) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.mainview}>
        <AntDesign
          name='close'
          size={20}
          onPress={() => props.navigation.goBack()}
        />
        <Text style={styles.text}>Weather</Text>
        <Text></Text>
      </View>
      <View style={styles.subview}>
        <Text style={styles.text}>{props.route.params.city}</Text>
        <Text style={styles.text}>{props.route.params.item}°</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  main: {

    backgroundColor: 'white',
    flex: 1
  },
  mainview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 10
  },
  subview: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
});

export default Weather;
