import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


//import Labels from '.app/labels';


class OneWay  extends Component {
  render() {
    return (
      <View style={{
        flex: 1, backgroundColor: 'white'
      }}>

      <View style={{
          backgroundColor : 'white', 
          //height : 150,
          margin :10,
          borderColor : 'white',
          borderRadius : 2,
          paddingTop : 20,
          flexDirection :'row',
          alignItems : 'center',
          //main wrapper,
           padding : 10
        }}>
        
        <View style = {{flex : 4,alignItems : 'flex-start'}}>
        <Text style={{textAlign : 'center'}}>Mumbai</Text>
        <Text style={{fontSize : 28,textAlign : 'center',color : '#323232'}}>BOM</Text>
        </View>

        <View style = {{flex : 2,alignItems : 'center'}}>
        <Icon name= 'trending-flat' size={PixelRatio.getPixelSizeForLayoutSize(18)} color="#b9b9b9" />
        </View>

        <View style = {{flex : 4,alignItems : 'flex-end'}}>
        <Text style={{textAlign : 'center'}}>New Delhi</Text>
        <Text style={{fontSize : 28,textAlign : 'center',color : '#323232'}}>DEL</Text>
        </View>
        
       
        
        
        
        </View>
      
      </View>
      
    );
  }
}

export default OneWay