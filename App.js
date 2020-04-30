/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
import React, {Component} from 'react';
import { Text, View, Image, Dimensions, StatusBar, StyleSheet, Scrollview, SafeAreaView } from 'react-native';

class Testprop extends Component {
  render() {

    if(2===2) {
      return (
        <View style={{alignItems: 'flex-start'}}>
          <Image style={{ 
              width: 150, 
              height: 150,
              transform: [{ rotate: '0deg' }]
            }} source={require('./images/bdms_logo.jpeg')} 
          /> 
        </View>
      );    
    }else{
      return (
        <View style={{alignItems: 'center'}}>
          <Text>Tom {this.props.lastname}</Text>
          <Image style={{ 
              width: 150, 
              height: 150,
              transform: [{ rotate: '45deg' }]
            }} source={require('./images/bdms_logo.jpeg')}  
          /> 
        </View>
      );
    }  
  }
}

export default class Showtest extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirectin: 'row', backgroundColor: 'yellow'}}>
        <View style={{backgroundColor: 'orange'}}>
          <Testprop lastname='kung'/>
        </View>
        <View style={{backgroundColor: 'white'}}>  
          <Image style={{ 
              width: 150, 
              height: 150,
              transform: [{ rotate: '180deg' }]
            }} source={require('./images/a1.jpeg')}  
          /> 
        </View>
      </View>
      
    );
  }
}