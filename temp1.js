/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image, 
  Dimensions, 
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';   

const App: () => React$Node = () => {
  return (
    <View style={{flex:1, flexDirection: 'row', backgroundColor: 'skyblue'}} >
      <View style={{width: 410, height: 500, backgroundColor: 'powderblue'}}> 
        <View style={{width: 410, height: 250, backgroundColor: 'white'}}>  
          <Image style={{ 
              width: 150, 
              height: 150,
              transform: [{ rotate: '180deg' }]
            }} source={require('./images/a1.jpeg')} 
          />  
        </View>
        <View>
          <Image style={{ 
              width: 250, 
              height: 150,
              transform: [{ rotate: '0deg' }]
            }} source={require('./images/a1.jpeg')} 
          />  
        </View>
        
      </View>
    </View>
  );
};  

export default App;
