/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';


import * as screens from './Src/Screens/index'
import RootScreen from './Src/NavigationStacks/RootScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const App = () => {


  return (
<GestureHandlerRootView style={{ flex: 1 }}>

<View style={styles.sectionContainer}>
<RootScreen/>
    </View>

</GestureHandlerRootView>


  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
  }
});

export default App;
