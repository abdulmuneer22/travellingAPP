import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio
} from 'react-native';


import Icon from 'react-native-vector-icons/MaterialIcons';


class NavigationBar  extends Component {
  render() {
    return (
      <View style={{
          backgroundColor : '#4c8bfb', 
          
          height: PixelRatio.getPixelSizeForLayoutSize(20),
          //marginLeft :10,
          //marginRight : 10,
          //marginTop : 10
         
        }}>

        <View style={{}}>
        <Icon name= 'arrow-back' size={PixelRatio.getPixelSizeForLayoutSize(10)} color="white" />
        </View>

        
        
      </View>
      
    );
  }
}

export default NavigationBar