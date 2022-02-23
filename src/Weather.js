import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
const Weather = (props) => {
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.text}>{props.route.params.city}</Text>
      <Text style={styles.text}>{props.route.params.item}°</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text:{
      fontSize:20,
      fontWeight:'bold'
    },
    main:{
        alignItems:'center',
        marginTop:'50%'
    }
});

export default Weather;
