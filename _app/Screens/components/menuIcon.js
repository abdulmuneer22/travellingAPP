import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';



import Icon from 'react-native-vector-icons/FontAwesome';
import IconButton from './iconButton'

class MenuIcon  extends Component {

  render() {
    return (
    <View>

     
        
      <View style={{
        flexDirection : 'row',
        marginBottom : 20,
      }}>

       
       
       <IconButton Textvalue={10}   myFunc={this.handleChildFunc.bind(this)} {...this.props} />  
      
      </View>



      <View style={{
        flexDirection : 'row',
        padding : 5,
        //borderColor :'black',
        //borderWidth : 1,
        alignItems : 'stretch'
      }}>

       {this.setIcon('futbol-o',"Activities")}
       {this.setIcon('bus',"Buses")}
       {this.setIcon('ship',"Holidays")}
       
      
      </View>

     </View> 
      
    );
  }
}

export default MenuIcon