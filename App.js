
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import page from './src/page';
import scan from './src/scan';
const Stack = createNativeStackNavigator();
const App= () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="page"
          component={page}
          options={{ title: 'page' ,headerShown:false}}
        />
        <Stack.Screen
          name="scan"
          component={scan}
          options={{ title: 'scan' ,headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
